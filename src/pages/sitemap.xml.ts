import type { APIRoute } from 'astro';
import { nav } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const urls = [...nav.map((n) => n.href), '/privacidad/'].map((href) => `  <url><loc>${new URL(href, site).href}</loc></url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
