import os
import requests
import json
import re
import sys
import glob
import random
import time
import google.generativeai as genai

# --- CONFIGURATION ---
LINKEDIN_API_URL = "https://api.linkedin.com/v2/ugcPosts"
ACCESS_TOKEN = os.environ.get("LINKEDIN_ACCESS_TOKEN")
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
HISTORY_FILE = "data/linkedin_history.json"
BLOG_DIR = "src/content/blog"

def setup_gemini():
    """Configures the Gemini AI model."""
    if not GEMINI_API_KEY:
        print("❌ Error: GEMINI_API_KEY is missing from GitHub Secrets.")
        return False
    genai.configure(api_key=GEMINI_API_KEY)
    return True

def generate_linkedin_post(title, content, article_url):
    """Uses Gemini to rewrite the content into a viral LinkedIn post."""
    if not setup_gemini():
        print("⚠️ Gemini key missing, using simple fallback.")
        return f"🚀 New Article: {title}\n\nRead here: {article_url}\n\n#AI #Tech"

    # UPDATED MODEL NAME (gemini-pro is deprecated/404)
    model = genai.GenerativeModel('gemini-1.5-flash')
    
    prompt = f"""
    You are an expert social media manager for a Tech/AI blog.
    Write a generic, slightly clickbaity but professional LinkedIn post to promote this article.
    
    Article Title: {title}
    Article Excerpt/Content: {content[:1000]}...
    
    Rules:
    1. Start with a hook or a question.
    2. Use short paragraphs.
    3. Use 3-5 relevant emojis.
    4. Do NOT mention "I wrote this" or "My article". Speak as the brand/page.
    5. END the post with this EXACT line: "Read the full guide here: {article_url}"
    6. Add 3-5 hashtags at the very end.
    """
    
    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        print(f"❌ AI Generation Error: {e}")
        return f"🚀 New on the blog: {title}\n\n{content[:100]}...\n\nRead more: {article_url}"

def get_posted_history():
    """Loads the list of already posted files."""
    if not os.path.exists(HISTORY_FILE):
        return []
    try:
        with open(HISTORY_FILE, 'r') as f:
            data = json.load(f)
            return [item['path'] for item in data]
    except:
        return []

def update_history(file_path):
    """Adds the file to history."""
    history = []
    if os.path.exists(HISTORY_FILE):
        with open(HISTORY_FILE, 'r') as f:
            try:
                history = json.load(f)
            except:
                pass
    
    history.append({
        "path": file_path,
        "posted_at": time.time()
    })
    
    os.makedirs(os.path.dirname(HISTORY_FILE), exist_ok=True)
    
    with open(HISTORY_FILE, 'w') as f:
        json.dump(history, f, indent=2)
    print(f"✅ Updated history: {HISTORY_FILE}")

def find_next_post():
    """Finds an unposted .mdx file."""
    all_files = glob.glob(f"{BLOG_DIR}/**/*.mdx", recursive=True)
    all_files = [f.replace('\\', '/') for f in all_files]
    
    posted = get_posted_history()
    posted = [p.replace('\\', '/') for p in posted]
    
    available = [f for f in all_files if f not in posted]
    
    if not available:
        print("🎉 No new content to post! (All files in history)")
        return None
        
    available.sort() 
    return available[0]

def get_linkedin_user_id():
    """Fetches the current user's URN (ID) from LinkedIn."""
    # UPDATED ENDPOINT: /v2/me often fails with newer granular permissions.
    # We should use /v2/userinfo OR handle the error gracefully.
    # The error was "Not enough permissions to access: me.GET.NO_VERSION"
    # This means the token has 'profile' scope (OpenID) but not 'r_liteprofile' or 'r_basicprofile'.
    # For 'openid' scope, we must use https://api.linkedin.com/v2/userinfo
    
    url = "https://api.linkedin.com/v2/userinfo"
    headers = {"Authorization": f"Bearer {ACCESS_TOKEN}"}
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        # OpenID endpoint returns 'sub' as the ID
        return data.get("sub")
    
    # Fallback to old endpoint just in case
    url_old = "https://api.linkedin.com/v2/me"
    response_old = requests.get(url_old, headers=headers)
    if response_old.status_code == 200:
        return response_old.json().get("id")

    print(f"❌ Failed to get Profile ID. Status: {response.status_code}")
    print(f"Response: {response.text}")
    return None

def extract_content(file_path):
    """Extracts Title and raw content from MDX file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            raw_text = f.read()
        
        title_match = re.search(r'title:\s*"(.*?)"', raw_text)
        if not title_match:
            title_match = re.search(r'title:\s*(.*)', raw_text)
            
        title = title_match.group(1) if title_match else "Tech Article"
        
        content_body = re.sub(r'^---[\s\S]*?---', '', raw_text).strip()
        
        return title, content_body
    except Exception as e:
        print(f"❌ Error reading file {file_path}: {e}")
        return None, None

def post_to_linkedin(content_text, article_url, title):
    """Sends the API Request to create a post."""
    if not ACCESS_TOKEN:
        print("❌ Error: LINKEDIN_ACCESS_TOKEN is missing.")
        sys.exit(1)

    user_id = get_linkedin_user_id()
    if not user_id:
        sys.exit(1)
        
    author_urn = f"urn:li:person:{user_id}"
    
    payload = {
        "author": author_urn,
        "lifecycleState": "PUBLISHED",
        "specificContent": {
            "com.linkedin.ugc.ShareContent": {
                "shareCommentary": {
                    "text": content_text
                },
                "shareMediaCategory": "ARTICLE",
                "media": [
                    {
                        "status": "READY",
                        "originalUrl": article_url,
                        "title": {
                            "text": title
                        }
                    }
                ]
            }
        },
        "visibility": {
            "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
        }
    }

    headers = {
        "Authorization": f"Bearer {ACCESS_TOKEN}",
        "Content-Type": "application/json",
        "X-Restli-Protocol-Version": "2.0.0"
    }

    print(f"📤 Posting to LinkedIn as {author_urn}...")
    response = requests.post(LINKEDIN_API_URL, headers=headers, json=payload)

    if response.status_code == 201:
        print("✅ SUCCESS: Successfully posted to LinkedIn!")
        return True
    else:
        print(f"❌ Failed to post: {response.status_code}")
        print(response.text)
        return False

# --- MAIN AGENT LOOP ---
if __name__ == "__main__":
    current_mode = "AUTO"
    target_file = None
    
    if len(sys.argv) > 1:
        target_file = sys.argv[1]
        current_mode = "MANUAL"
        print(f"🤖 LinkedIn Agent starting in MANUAL mode for: {target_file}")
    else:
        print("🤖 LinkedIn Agent starting in AUTONOMOUS mode.")
        target_file = find_next_post()
        
    if not target_file:
        print("💤 No posts to process.")
        sys.exit(0)
        
    print(f"📄 Selected file: {target_file}")
    
    title, content = extract_content(target_file)
    if not title:
        sys.exit(1)
        
    normalized_path = target_file.replace('\\', '/')
    slug_path = normalized_path.replace('src/content/blog/', '').replace('.mdx', '')
    article_url = f"https://simpleaiguide.tech/blog/{slug_path}"
    
    print(f"🔗 URL: {article_url}")
    
    print("🧠 Generating viral post content using Gemini AI...")
    linkedin_text = generate_linkedin_post(title, content, article_url)
    print("-" * 40)
    print(linkedin_text)
    print("-" * 40)
    
    success = post_to_linkedin(linkedin_text, article_url, title)
    
    if success:
        update_history(target_file.replace('\\', '/'))
