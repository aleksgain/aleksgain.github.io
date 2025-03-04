import type { APIRoute } from 'astro';

// Get the current date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Define your site's pages
const pages = [
  {
    url: '/',
    lastmod: today,
    changefreq: 'monthly',
    priority: 1.0
  },
  {
    url: '/resume',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.8
  }
];

export const GET: APIRoute = ({ site }) => {
  // Generate the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${site?.origin ?? 'https://alexkri.net'}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}; 