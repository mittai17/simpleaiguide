# How to Setup Automated LinkedIn Posting

To auto-post your new blogs to LinkedIn, you need a **LinkedIn Access Token**.
Follow these steps carefully.

## Step 1: Create a LinkedIn App
1. Go to the [LinkedIn Developer Portal](https://www.linkedin.com/developers/apps/new).
2. Click **Create Request**.
3. **App Name:** Simple AI Guide Auto-Poster
4. **Company Page:** You need a LinkedIn Company Page. Type your name or "Simple AI Guide". If you don't have one, [create one here](https://www.linkedin.com/company/setup/new/) first (it's free).
5. **Privacy Policy URL:** Enter your website URL (e.g., `https://simpleaiguide.tech`).
6. Upload a logo (any image).
7. Check the "API Terms of Use" box and create the app.

## Step 2: Request Permissions
1. Once inside your new App, go to the **Products** tab.
2. Request access to **"Sign In with LinkedIn using OpenID Connect"**.
3. Request access to **"Share on LinkedIn"**.
   *   *(Note: Without these "Products" added, your API calls will fail).*

## Step 3: Get Client ID & Secret
1. Go to the **Auth** tab.
2. Copy your **Client ID** and **Client Secret**.
3. **Important:** Under "OAuth 2.0 settings", look for "Redirect URLs".
4. Add this URL: `https://oauth.tools/callback/code` (We will use this tool to easily get your token).

## Step 4: Generate Your Access Token
We will use a safe tool called OAuth.tools to generate the token (since doing it manually is very hard).

1. Go to [OAuth.tools](https://oauth.tools/).
2. Click **New Collection** -> "LinkedIn".
3. Paste you **Client ID** and **Client Secret** into the settings there.
4. For **Scopes**, select: `w_member_social` (this allows writing posts) and `openid`, `profile`, `email`.
5. Click **Run** or **Get Token**.
6. Log in with your LinkedIn account when prompted.
7. It will generate a long string called **Access Token**. Copy this!

## Step 5: Add to GitHub Secrets
1. Go to your GitHub Repo -> **Settings** -> **Secrets and variables** -> **Actions**.
2. Click **New repository secret**.
3. **Name:** `LINKEDIN_ACCESS_TOKEN`
4. **Secret:** Paste your long Access Token.
5. Click **Add secret**.

## Step 6: Find Your User URN (ID)
1. You also need your LinkedIn ID (URN).
2. Go to `https://api.linkedin.com/v2/me` in your browser (Postman/Curl) OR...
3. Just run the script once *after* adding the token, and check the logs. I will try to auto-detect it. 
   *(But usually it is easier to just look at your profile URL).*

**Token Expiry Warning:**
LinkedIn tokens expire every 60 days. You will need to repeat Step 4 and 5 every 2 months.
