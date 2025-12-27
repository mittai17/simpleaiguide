import os
import requests
import json
import re
import sys
import glob
import time
import urllib.parse

# --- CONFIGURATION ---
LINKEDIN_API_URL = "https://api.linkedin.com/v2/ugcPosts"
LINKEDIN_UPLOAD_URL = "https://api.linkedin.com/v2/assets?action=registerUpload"
ACCESS_TOKEN = os.environ.get("LINKEDIN_ACCESS_TOKEN")
OPENROUTER_API_KEY = os.environ.get("OPENROUTER_API_KEY")
HISTORY_FILE = "data/linkedin_history.json"
BLOG_DIR = "src/content/blog"

# Free models on OpenRouter to try in order
OPENROUTER_MODELS = [
    "google/gemini-2.0-flash-exp:free",
    "meta-llama/llama-3.2-11b-vision-instruct:free",
    "microsoft/phi-3-medium-128k-instruct:free"
]

def generate_text_openrouter(title, content, article_url):
    """Generates LinkedIn post text using OpenRouter (Free Tier)."""
    if not OPENROUTER_API_KEY:
        print("⚠️ OPENROUTER_API_KEY missing. Using fallback text.")
        return f"🚀 New Article: {title}\n\nRead here: {article_url}\n\n#AI #Tech"

    prompt = f"""
    You are a viral social media ghostwriter known for high click-through rates.
    Write a CONTROVERSIAL, CLICKBAITY LinkedIn post (max 100 words) using this article.

    Article: {title}
    Excerpt: {content[:600]}...

    YOUR GOAL: Make the reader CLICK the link. Use "Curiosity Gaps".

    Structure:
    1. 🛑 STOP SCROLLING Hook (Shocking statement, "You're doing it wrong", or specific number).
    2. The "Villain" (The problem everyone ignores).
    3. The "Hero" (The solution hinted at in the article).
    4. 3-4 Impactful lines only. Spaced out.
    5. NO corporate jargon. Speak like a human.
    6. 🔥 MUST END WITH: "Steal the full strategy here: {article_url}"
    
    Use 2-3 aggressive emojis (🚨, ⚠️, 🚀, 💡).
    """

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://simpleaiguide.tech", 
    }

    # Try models in order until one works
    for model in OPENROUTER_MODELS:
        print(f"🧠 Trying OpenRouter Model: {model}...")
        payload = {
            "model": model,
            "messages": [{"role": "user", "content": prompt}]
        }
        try:
            response = requests.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, json=payload)
            if response.status_code == 200:
                raw_text = response.json()['choices'][0]['message']['content']
                # Clean up if model hallucinates quotes
                return raw_text.strip('"')
        except Exception as e:
            print(f"❌ Error with {model}: {e}")
    
    return f"🚀 Fresh guide: {title}\n\nRead more: {article_url}"

def generate_image_pollinations(prompt_text):
    """Generates an image using Pollinations.ai (Free)."""
    print("🎨 Generating Image via Pollinations...")
    # Clean prompt for URL
    safe_prompt = urllib.parse.quote(prompt_text[:100]) # Limit length
    url = f"https://image.pollinations.ai/prompt/{safe_prompt}?width=1200&height=627&nologo=true"
    
    try:
        response = requests.get(url, timeout=30)
        if response.status_code == 200:
            filename = f"temp_gen_image_{int(time.time())}.jpg"
            with open(filename, 'wb') as f:
                f.write(response.content)
            print(f"✅ Image generated: {filename}")
            return filename
    except Exception as e:
        print(f"❌ Image Gen Failed: {e}")
    return None

def register_upload():
    """Step 1: Register upload with LinkedIn to get URL."""
    url = "https://api.linkedin.com/v2/assets?action=registerUpload"
    headers = {"Authorization": f"Bearer {ACCESS_TOKEN}", "Content-Type": "application/json"}
    
    payload = {
        "registerUploadRequest": {
            "recipes": ["urn:li:digitalmediaRecipe:feedshare-image"],
            "owner": f"urn:li:person:{get_linkedin_user_id()}",
            "serviceRelationships": [{"relationshipType": "OWNER", "identifier": "urn:li:userGeneratedContent"}]
        }
    }
    
    response = requests.post(url, headers=headers, json=payload)
    if response.status_code == 200:
        data = response.json()
        upload_url = data['value']['uploadMechanism']['com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest']['uploadUrl']
        asset = data['value']['asset']
        return upload_url, asset
    return None, None

def upload_image_binary(upload_url, image_path):
    """Step 2: Upload the actual image file."""
    try:
        with open(image_path, 'rb') as f:
            headers = {"Authorization": f"Bearer {ACCESS_TOKEN}"} 
            response = requests.put(upload_url, headers=headers, data=f)
            if response.status_code == 201 or response.status_code == 200:
                print("✅ Image Uploaded Successfully")
                return True
    except Exception as e:
        print(f"❌ Upload Failed: {e}")
    return False

def get_linkedin_user_id():
    """Fetches User URN."""
    url = "https://api.linkedin.com/v2/userinfo"
    headers = {"Authorization": f"Bearer {ACCESS_TOKEN}"}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json().get("sub")
    
    # Fallback
    response = requests.get("https://api.linkedin.com/v2/me", headers=headers)
    return response.json().get("id") if response.status_code == 200 else None

def post_with_image(text, asset_urn, article_url, title):
    """Step 3: Create the Post with the Image."""
    user_id = get_linkedin_user_id()
    author_urn = f"urn:li:person:{user_id}"
    
    payload = {
        "author": author_urn,
        "lifecycleState": "PUBLISHED",
        "specificContent": {
            "com.linkedin.ugc.ShareContent": {
                "shareCommentary": {"text": text},
                "shareMediaCategory": "IMAGE",
                "media": [
                    {
                        "status": "READY",
                        "description": {"text": title},
                        "media": asset_urn,
                        "title": {"text": title}
                    }
                ]
            }
        },
        "visibility": {"com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"}
    }
    
    response = requests.post(LINKEDIN_API_URL, headers={"Authorization": f"Bearer {ACCESS_TOKEN}"}, json=payload)
    if response.status_code == 201:
        print("✅ SUCCESS: Posted Image+Text to LinkedIn!")
        return True
    else:
        print(f"❌ Post Failed: {response.text}")
        return False

# --- UTILS ---
def get_posted():
    if not os.path.exists(HISTORY_FILE): return []
    try:
        with open(HISTORY_FILE) as f: return [x['path'] for x in json.load(f)]
    except: return []

def update_history(path):
    hist = []
    if os.path.exists(HISTORY_FILE):
        try:
            with open(HISTORY_FILE) as f: hist = json.load(f)
        except: pass
    hist.append({"path": path, "posted_at": time.time()})
    os.makedirs("data", exist_ok=True)
    with open(HISTORY_FILE, 'w') as f: json.dump(hist, f, indent=2)

def extract_content(path):
    try:
        with open(path, 'r', encoding='utf-8') as f: text = f.read()
        title = re.search(r'title:\s*"(.*?)"', text)
        title = title.group(1) if title else "Tech Article"
        body = re.sub(r'^---[\s\S]*?---', '', text).strip()
        return title, body
    except: return None, None

def find_next():
    files = [f.replace('\\','/') for f in glob.glob(f"{BLOG_DIR}/**/*.mdx", recursive=True)]
    posted = [f.replace('\\','/') for f in get_posted()]
    avail = sorted([f for f in files if f not in posted])
    return avail[0] if avail else None

# --- MAIN ---
if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else find_next()
    if not target:
        print("💤 Nothing to post.")
        sys.exit(0)
    
    print(f"📄 Processing: {target}")
    title, content = extract_content(target)
    
    slug = target.replace('\\','/').replace('src/content/blog/','').replace('.mdx','')
    url = f"https://simpleaiguide.tech/blog/{slug}"
    
    # 1. Generate Text (OpenRouter)
    print("🧠 Generating Text (OpenRouter)...")
    post_text = generate_text_openrouter(title, content, url)
    print(f"📝 Text:\n{post_text}\n")
    
    # 2. Generate Image (Pollinations)
    # create a visual prompt based on title
    img_prompt = f"editorial illustration of {title}, minimal vector art, tech style, vibrant colors"
    img_path = generate_image_pollinations(img_prompt)
    
    success = False
    if img_path:
        # 3. Upload & Post
        up_url, asset = register_upload()
        if up_url and upload_image_binary(up_url, img_path):
            success = post_with_image(post_text, asset, url, title)
            os.remove(img_path) # cleanup
        else:
            print("⚠️ Image upload failed, skipping post.")
    else:
        print("⚠️ Image gen failed, skipping post.")

    if success:
        update_history(target.replace('\\','/'))
