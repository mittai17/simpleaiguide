
import os
import json
import pandas as pd
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    Metric,
    RunReportRequest,
)

# --- CONFIGURATION ---
# You need to download your Service Account JSON key as 'credentials.json' 
# and place it in the same directory as this script.
KEY_FILE_PATH = 'credentials.json'

# REPLACE THIS WITH YOUR GA4 PROPERTY ID (Not the "G-XXXX" ID, but the numeric Property ID)
# You can find this in Google Analytics > Admin > Property Settings
PROPERTY_ID = '515388480' 

def fetch_analytics_data():
    """Fetches page view data from Google Analytics 4."""
    if not os.path.exists(KEY_FILE_PATH):
        print(f"ERROR: '{KEY_FILE_PATH}' not found. Please download your Service Account Key.")
        print("See INSTRUCTIONS_ANALYTICS.md for details.")
        return None

    os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = KEY_FILE_PATH
    client = BetaAnalyticsDataClient()

    print("Fetching data from Google Analytics...")
    try:
        request = RunReportRequest(
            property=f"properties/{PROPERTY_ID}",
            dimensions=[Dimension(name="pagePath"), Dimension(name="pageTitle")],
            metrics=[
                Metric(name="screenPageViews"),
                Metric(name="activeUsers"),
                Metric(name="averageSessionDuration")
            ],
            date_ranges=[DateRange(start_date="90daysAgo", end_date="today")],
        )
        response = client.run_report(request=request)
    except Exception as e:
        print(f"Error fetching data: {e}")
        return None

    data = []
    for row in response.rows:
        data.append({
            "path": row.dimension_values[0].value,
            "title": row.dimension_values[1].value,
            "views": int(row.metric_values[0].value),
            "users": int(row.metric_values[1].value),
            "duration": float(row.metric_values[2].value)
        })

    return pd.DataFrame(data)

def analyze_content(df):
    """Analyzes the dataframe to generate content suggestions."""
    if df is None or df.empty:
        return

    # Filter for blog posts only
    blog_df = df[df['path'].str.contains('/blog/', na=False)].copy()
    
    # Exclude index pages specifically
    blog_df = blog_df[~blog_df['path'].str.endswith('/blog/')]
    blog_df = blog_df[~blog_df['path'].str.endswith('/blog')]

    if blog_df.empty:
        print("No blog content found in analytics data.")
        return

    # 1. Normalize Metrics for Scoring
    blog_df['views_norm'] = blog_df['views'] / blog_df['views'].max()
    blog_df['duration_norm'] = blog_df['duration'] / blog_df['duration'].max()
    
    # 2. Calculate Content Score (Custom Algorithm)
    # Weight: 60% Views, 40% Engagement (Duration)
    blog_df['score'] = (blog_df['views_norm'] * 0.6) + (blog_df['duration_norm'] * 0.4)
    
    # Sort by Score
    top_performers = blog_df.sort_values(by='score', ascending=False).head(5)
    
    # Identify "Hidden Gems" (Low Views, High Duration)
    # Strategy: High engagement means good content, but low views means bad distribution/SEO.
    hidden_gems = blog_df[
        (blog_df['views'] < blog_df['views'].median()) & 
        (blog_df['duration'] > blog_df['duration'].median())
    ].sort_values(by='duration', ascending=False).head(3)

    # Identify "Clickbait/Fix Needed" (High Views, Low Duration)
    fix_needed = blog_df[
        (blog_df['views'] > blog_df['views'].median()) & 
        (blog_df['duration'] < blog_df['duration'].quantile(0.4))
    ].head(3)

    print("\n" + "="*50)
    print(" 🧠 CONTENT SUGGESTION ALGORITHM REPORT")
    print("="*50)

    print(f"\n🏆 TOP PERFORMING CONTENT (Do more of this):")
    print("-" * 50)
    for index, row in top_performers.iterrows():
        print(f"  - {row['title']} ({row['views']} views, {row['duration']:.1f}s avg)")
        print(f"    --> SUGGESTION: Write a follow-up or 'Part 2' on this topic.")

    if not hidden_gems.empty:
        print(f"\n💎 HIDDEN GEMS (Promote these):")
        print("-" * 50)
        for index, row in hidden_gems.iterrows():
            print(f"  - {row['title']} ({row['views']} views, {row['duration']:.1f}s avg)")
            print(f"    --> SUGGESTION: High engagement! Share this on social media or internal link to it more.")

    if not fix_needed.empty:
        print(f"\n⚠️ HIGH TRAFFIC, LOW RETENTION (Fix these):")
        print("-" * 50)
        for index, row in fix_needed.iterrows():
            print(f"  - {row['title']} ({row['views']} views, {row['duration']:.1f}s avg)")
            print(f"    --> SUGGESTION: Check if the title is misleading or add a video/images to keep users longer.")

    # Generate JSON for Website Use
    output_data = {
        "popular_posts": top_performers[['title', 'path']].to_dict(orient='records'),
        "generated_date": pd.Timestamp.now().isoformat()
    }
    
    # Generate JSON for Web Use (Saved to 'public' for dynamic fetching)
    output_path = 'public/trending.json'
    
    try:
        # Save to public (source)
        with open(output_path, 'w') as f:
            json.dump(output_data, f, indent=2)
        print(f"✅ [UPDATED] Trending data saved to '{output_path}'")

        # Save to docs (build output) - Critical for immediate updates if CI doesn't trigger
        docs_path = 'docs/trending.json'
        if os.path.exists('docs'):
            with open(docs_path, 'w') as f:
                json.dump(output_data, f, indent=2)
            print(f"✅ [UPDATED] Trending data saved to '{docs_path}'")
        
        # NEW: Save Hidden Gems for LinkedIn Agent
        if not hidden_gems.empty:
            gems_data = hidden_gems[['title', 'path', 'score']].to_dict(orient='records')
            os.makedirs('data', exist_ok=True)
            with open('data/hidden_gems.json', 'w') as f:
                json.dump(gems_data, f, indent=2)
            print(f"💎 [SAVED] Hidden Gems saved to 'data/hidden_gems.json' for Autoposter.")
        
        # AUTO-DEPLOY: Commit and Push to GitHub
        import subprocess
        print("🚀 Auto-deploying updates to GitHub...")
        
        # Add both files
        subprocess.run(["git", "add", "public/trending.json"], check=False)
        if os.path.exists('docs'):
            subprocess.run(["git", "add", "docs/trending.json"], check=False)
        
        # Add hidden gems
        subprocess.run(["git", "add", "data/hidden_gems.json"], check=False)
            
        subprocess.run(["git", "commit", "-m", "chore: auto-update trending stats and hidden gems"], check=False)
        # explicit push to main to avoid detached HEAD issues in CI
        subprocess.run(["git", "push", "origin", "HEAD:main"], check=False)
        print("☁️  Synced with live site.")

    except Exception as e:
        print(f"❌ Error saving/deploying: {e}")

if __name__ == "__main__":
    import time
    
    # Check if running in GitHub Actions (Cloud)
    if os.environ.get('GITHUB_ACTIONS') == 'true':
        print("☁️ Running in Cloud Mode (Single Execution)")
        df = fetch_analytics_data()
        if df is not None:
            analyze_content(df)
        print("✅ Cloud run complete.")
        exit(0)

    # Local Mode (Loop)
    print("🚀 Content Suggestion Engine Started (Running every 5 minutes)")
    print("Press Ctrl+C to stop.")
    
    try:
        while True:
            df = fetch_analytics_data()
            if df is not None:
                analyze_content(df)
            
            print("\n⏳ Waiting 5 minutes for next update...")
            time.sleep(300) # 300 seconds = 5 minutes
            
    except KeyboardInterrupt:
        print("\n🛑 Stopped by user.")
