// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Custom domain used for sitemap, robots.txt, canonical URLs, and schema.org metadata
  site: 'https://www.jccabstvm.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});