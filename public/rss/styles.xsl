<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>RSS Feed | Simple AI Guide</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
            color: #334155;
            background-color: #f8fafc;
            line-height: 1.6;
            margin: 0;
            padding: 2rem;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          }
          header {
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 1.5rem;
            margin-bottom: 2rem;
          }
          h1 {
            color: #4f46e5;
            font-size: 1.875rem;
            margin: 0 0 0.5rem 0;
          }
          .description {
            color: #64748b;
            font-size: 1.1rem;
          }
          .alert {
            background-color: #eef2ff;
            border: 1px solid #c7d2fe;
            color: #3730a3;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 2rem;
            font-size: 0.9rem;
          }
          .item {
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid #f1f5f9;
          }
          .item:last-child {
            border-bottom: none;
          }
          .item h3 {
            margin: 0 0 0.5rem 0;
          }
          .item a {
            color: #1e293b;
            text-decoration: none;
            font-size: 1.25rem;
            font-weight: 600;
          }
          .item a:hover {
            color: #4f46e5;
            text-decoration: underline;
          }
          .date {
            font-size: 0.875rem;
            color: #94a3b8;
            margin-bottom: 0.5rem;
            display: block;
          }
          .item-desc {
            color: #475569;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>
              <xsl:value-of select="/rss/channel/title"/>
            </h1>
            <p class="description">
              <xsl:value-of select="/rss/channel/description"/>
            </p>
          </header>

          <div class="alert">
            <strong>This is an RSS feed.</strong> Subscribe by copying the URL from the address bar into your news reader.
          </div>

          <xsl:for-each select="/rss/channel/item">
            <div class="item">
              <h3>
                <a href="{link}" target="_blank">
                  <xsl:value-of select="title"/>
                </a>
              </h3>
              <span class="date">
                <xsl:value-of select="pubDate"/>
              </span>
              <p class="item-desc">
                <xsl:value-of select="description"/>
              </p>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
