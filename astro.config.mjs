// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real domain before launch (needed for sitemap and canonical URLs)
  site: 'https://jccabs.example',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});