import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Get the current date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Define your site's pages
const pages = [
  {
    url: '/',
    lastmod: today,
    changefreq: 'daily',
    priority: 1.0
  },
  {
    url: '/about',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: '/resume',
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.8
  }
];

const posts = await getCollection('blog');
for (const post of posts) {
  pages.push({
    url: `/blog/${post.slug}`,
    lastmod: post.data.pubDate.toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: 0.6
  });
}

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