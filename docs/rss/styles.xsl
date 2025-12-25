<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>Simple AI Guide - RSS Feed</title>
        <meta charset="utf-8"/>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
            max-width: 768px;
            margin: 0 auto;
            padding: 2rem;
            color: #1e293b;
            background-color: #f8fafc;
          }
          header {
            background-color: white;
            padding: 2rem;
            border-radius: 1rem;
            margin-bottom: 2rem;
            border: 1px solid #e2e8f0;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
            text-align: center;
          }
          h1 {
            font-size: 2rem;
            color: #4f46e5;
            margin-bottom: 0.5rem;
          }
          p {
            color: #64748b;
            line-height: 1.5;
          }
          a {
            color: #4f46e5;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .post {
            background-color: white;
            padding: 1.5rem;
            margin-bottom: 1rem;
            border-radius: 0.75rem;
            border: 1px solid #e2e8f0;
            transition: transform 0.2s;
          }
          .post:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
          }
          .post h3 {
            margin: 0 0 0.5rem 0;
            font-size: 1.25rem;
          }
           .meta {
             font-size: 0.875rem;
             color: #94a3b8;
             margin-bottom: 0.5rem;
           }
        </style>
      </head>
      <body>
        <header>
           <h1>Simple AI Guide</h1>
           <p>Learn Artificial Intelligence for free. A step-by-step guide to AI, Machine Learning, and tools like ChatGPT.</p>
           <p>
             <strong><xsl:value-of select="count(//item)"/></strong> articles avaialble.
             <a href="/">Visit Website &#8594;</a>
           </p>
        </header>

        <xsl:for-each select="//item">
          <div class="post">
            <div class="meta">
              Posted on <xsl:value-of select="substring(pubDate, 0, 17)"/>
            </div>
            <h3>
              <a target="_blank">
                <xsl:attribute name="href">
                  <xsl:value-of select="link"/>
                </xsl:attribute>
                <xsl:value-of select="title"/>
              </a>
            </h3>
            <p>
              <xsl:value-of select="description"/>
            </p>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
