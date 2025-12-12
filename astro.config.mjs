import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://simpleaiguide.tech',
  integrations: [mdx(), tailwind(), sitemap()],
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  },
  prefetch: {
    defaultStrategy: 'viewport'
  },
  outDir: 'docs',
  build: {
    outDir: 'docs',
  },
  redirects: {
    '/blog/best-ai-tools': '/blog/category/best-ai-tools',
    '/blog/news': '/blog/category/news',
    '/blog/comparisons': '/blog/category/comparisons',
    '/blog/prompt-engineering': '/blog/category/prompt-engineering',
  }
});