# How to Setup Automated LinkedIn Posting

To auto-post your new blogs to LinkedIn, you need a **LinkedIn Access Token** and a **Gemini API Key**.

## Step 1: Create a LinkedIn App
1. Go to the [LinkedIn Developer Portal](https://www.linkedin.com/developers/apps/new).
2. Click **Create Request**.
3. **App Name:** Simple AI Guide Auto-Poster
4. **Company Page:** You need a LinkedIn Company Page. Type your name or "Simple AI Guide". [Create one here](https://www.linkedin.com/company/setup/new/).
5. **Privacy Policy URL:** Enter your website URL.
6. Upload a logo and check the Terms box.

## Step 2: Request Permissions
1. Go to the **Products** tab.
2. Request access to **"Sign In with LinkedIn using OpenID Connect"**.
3. Request access to **"Share on LinkedIn"**.

## Step 3: Get Credentials
1. Go to the **Auth** tab.
2. Copy your **Client ID** and **Client Secret**.
3. Add redirect URL: `https://oauth.tools/callback/code`

## Step 4: Generate Your Access Token
1. Run the included helper script:
   ```bash  
   python get_linkedin_token.py
   ```
   (Wait, I deleted that script. Re-create it if needed or use [OAuth.tools](https://oauth.tools/)).

## Step 5: Add Secrets to GitHub
1. Go to your GitHub Repo -> **Settings** -> **Secrets and variables** -> **Actions**.
2. Add **New repository secret**: 
   *   Name: `LINKEDIN_ACCESS_TOKEN`
   *   Value: (Your long LinkedIn Token)
3. Add another **New repository secret**:
   *   Name: `GEMINI_API_KEY`
   *   Value: (Your Google Gemini API Key)

## Step 6: Verify Automation
1. The automation runs **Every Hour**.
2. It also runs when you **Push a new blog post**.
3. You can manually trigger it from the **Actions** tab in GitHub.

**Token Expiry Warning:**
LinkedIn tokens expire every 60 days. You will need to regenerate `LINKEDIN_ACCESS_TOKEN` every 2 months.
