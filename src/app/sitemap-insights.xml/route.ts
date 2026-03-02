import { clusters } from '@/lib/cluster-data';

export async function GET() {
    const baseUrl = 'https://www.chaitanyakore.in';

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${clusters.map(cluster => `
  <url>
    <loc>${baseUrl}/insights/${cluster.slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
