import os
import requests
import json
import re
import sys

# --- CONFIGURATION ---
LINKEDIN_API_URL = "https://api.linkedin.com/v2/ugcPosts"
ACCESS_TOKEN = os.environ.get("LINKEDIN_ACCESS_TOKEN")

def get_linkedin_user_id():
    """Fetches the current user's URN (ID) from LinkedIn."""
    url = "https://api.linkedin.com/v2/me"
    headers = {"Authorization": f"Bearer {ACCESS_TOKEN}"}
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        return response.json().get("id")
    else:
        print(f"❌ Failed to get Profile ID: {response.text}")
        return None

def extract_frontmatter(file_path):
    """Extracts Title and Description from MDX file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Regex to find title and description in YAML frontmatter
        title_match = re.search(r'title:\s*"(.*?)"', content)
        desc_match = re.search(r'description:\s*"(.*?)"', content)
        
        # Fallback if no quotes
        if not title_match:
            title_match = re.search(r'title:\s*(.*)', content)
        if not desc_match:
            desc_match = re.search(r'description:\s*(.*)', content)

        if title_match and desc_match:
            return title_match.group(1), desc_match.group(1)
        return None, None
    except Exception as e:
        print(f"❌ Error reading file {file_path}: {e}")
        return None, None

def post_to_linkedin(title, description, article_url):
    """Sends the API Request to create a post."""
    if not ACCESS_TOKEN:
        print("❌ Error: LINKEDIN_ACCESS_TOKEN is missing from GitHub Secrets.")
        sys.exit(1)

    user_id = get_linkedin_user_id()
    if not user_id:
        print("❌ Could not verify user. Aborting.")
        sys.exit(1)
        
    author_urn = f"urn:li:person:{user_id}"
    
    # Construct the payload
    # Note: 'ugcPosts' is the legacy but simpler API for text+link shares
    payload = {
        "author": author_urn,
        "lifecycleState": "PUBLISHED",
        "specificContent": {
            "com.linkedin.ugc.ShareContent": {
                "shareCommentary": {
                    "text": f"🚀 New Post: {title}\n\n{description}\n\nRead more here: {article_url}\n\n#AI #Tech #SimpleAIGuide"
                },
                "shareMediaCategory": "ARTICLE",
                "media": [
                    {
                        "status": "READY",
                        "description": {
                            "text": description
                        },
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
        print(f"Post ID: {response.json().get('id')}")
    else:
        print(f"❌ Failed to post: {response.status_code}")
        print(response.text)
        sys.exit(1)

if __name__ == "__main__":
    # Check for arguments passed by GitHub Action
    if len(sys.argv) < 2:
        print("Usage: python linkedin_autoposter.py <path_to_mdx_file>")
        sys.exit(0)
        
    file_path = sys.argv[1]
    print(f"📄 Processing file: {file_path}")
    
    title, description = extract_frontmatter(file_path)
    
    if not title:
        print("❌ Could not extract title/description. Skipping.")
        sys.exit(0)
        
    # Construct URL based on filename
    # Assumes standard path: src/content/blog/category/slug.mdx
    # We need to turn 'src/content/blog/category/slug.mdx' -> 'https://simpleaiguide.tech/blog/category/slug'
    slug_path = file_path.replace('src/content/blog/', '').replace('.mdx', '')
    article_url = f"https://simpleaiguide.tech/blog/{slug_path}"
    
    print(f"🔗 Article URL: {article_url}")
    post_to_linkedin(title, description, article_url)
