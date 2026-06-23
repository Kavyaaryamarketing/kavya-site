import { getCollection } from 'astro:content';

// Builds /sitemap.xml from your static pages + every journal & lab post.
// No external plugin, so nothing to break on deploy.
export async function GET(context) {
  const base = context.site.href.replace(/\/$/, '');

  const staticPaths = ['', '/about', '/now', '/newsletter', '/colophon', '/journal', '/lab'];

  const journal = await getCollection('journal', (p) => !p.data.draft);
  const lab = await getCollection('lab', (p) => !p.data.draft);

  const urls = [
    ...staticPaths.map((p) => ({ loc: `${base}${p}/`.replace(/\/+$/, '/') })),
    ...journal.map((p) => ({ loc: `${base}/journal/${p.slug}/`, lastmod: p.data.date })),
    ...lab.map((p) => ({ loc: `${base}/lab/${p.slug}/`, lastmod: p.data.date })),
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url><loc>${u.loc}</loc>` +
          (u.lastmod ? `<lastmod>${new Date(u.lastmod).toISOString().split('T')[0]}</lastmod>` : '') +
          `</url>`
      )
      .join('\n') +
    `\n</urlset>\n`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
