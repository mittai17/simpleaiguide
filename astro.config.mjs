import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mittai17.github.io',
  base: '/simpleaiguide/',
  integrations: [tailwind()],
  outDir: 'docs',
  build: {
  },
});
