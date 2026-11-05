import type { APIRoute } from 'astro';

// The @astrojs/sitemap integration writes the page list to sitemap-0.xml (and an index at sitemap-index.xml).
// This gives it the standard /sitemap.xml address that people and search tools look for first.
export const GET: APIRoute = ({ site }) =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${new URL('/sitemap-0.xml', site)}</loc></sitemap>
</sitemapindex>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
