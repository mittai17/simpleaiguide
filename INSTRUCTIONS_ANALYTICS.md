# How to Use the Content Suggestion Algorithm

This tool uses your real-world Google Analytics data to suggest what content to write next and which posts to fix.

## Step 1: Get Your Credentials
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (or select an existing one).
3. Enable the **Google Analytics Data API**.
4. Go to **Credentials** -> **Create Credentials** -> **Service Account**.
5. Give it a name (e.g., "Analytics Reader"), then click **Done**.
6. Click on the newly created Service Account email.
7. Go to the **Keys** tab -> **Add Key** -> **Create new key** -> **JSON**.
8. A file will download. Rename it to `credentials.json` and move it to this folder:
   `c:\Users\ggiri\Documents\new-vs-code\website\`

## Step 2: Grant Access to Google Analytics
1. Open the `credentials.json` file and copy the `"client_email"` address (it looks like `analytics-reader@project-id.iam.gserviceaccount.com`).
2. Go to your [Google Analytics Admin](https://analytics.google.com/).
3. Click **Admin (Gear Icon)** -> **Account Access Management** (or **Property Access Management**).
4. Click **+** -> **Add users**.
5. Paste the service account email.
6. Check **Viewer** access (this is enough).
7. Click **Add**.

## Step 3: Get Your Property ID
1. In Google Analytics Admin, go to **Property Settings** -> **Property Details**.
2. Copy the **Property ID** (it is a number, e.g., `123456789`).
3. Open `analytics_suggestion_engine.py` in VS Code.
4. Replace `YOUR_NUMERIC_PROPERTY_ID` with your actual ID on line 18.

## Step 4: Run the Algorithm
Open your terminal and run:

```bash
python analytics_suggestion_engine.py
```

## What It Does
1. **Fetches Data:** Gets views and engagement time for all your blog posts (last 90 days).
2. **Calculates Score:** Uses an algorithm (`Views * 0.6 + Engagement * 0.4`) to rank content value.
3. **Suggests Actions:**
   - **Top Performers:** Tells you what topics your audience loves so you can write *Part 2*.
   - **Hidden Gems:** Finds posts with few views but high reading time (these need more links/promotion).
   - **Fix Needed:** Finds posts with high views but low retention (bad content/clickbait).
4. **Exports Trending Data:** Creates `src/content/trending.json` which you can use to display "Popular Posts" on your website.
