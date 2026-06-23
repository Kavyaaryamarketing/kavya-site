import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Your live site URL (used for SEO, sitemap, RSS, social previews).
// When you add a custom domain later, change this line to that domain.
export default defineConfig({
  site: 'https://kavya-site.vercel.app',
  integrations: [sitemap()],
});
