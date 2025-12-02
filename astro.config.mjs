import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://simpleaiguide.tech',
  integrations: [tailwind(), sitemap()],
  outDir: 'docs',
  build: {
    outDir: 'docs',
  },
});