import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// CHANGE THIS to your real domain once you have it (used for SEO, sitemap, RSS).
export default defineConfig({
  site: 'https://kavya.example.com',
  integrations: [sitemap()],
});
