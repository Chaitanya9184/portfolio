import { blogPosts } from '@/lib/blog-data';

export async function GET() {
    const baseUrl = 'https://www.chaitanyakore.in';

    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/tools',
        '/tools/ai-visibility-checker',
        '/roi-calculator',
        '/seo-for-revenue-growth',
        '/ai-search-seo-strategy',
        '/technical-seo-for-saas',
        '/services/fractional-seo-lead',
        '/services/seo-strategy-sprint',
        '/services/ai-search-audit',
        '/geo',
        '/aeo',
        '/aio',
        '/industries',
        '/industries/finance',
        '/industries/b2b-tech',
        '/industries/ecommerce',
        '/industries/home-services',
        '/industries/saas',
        '/industries/healthcare',
        '/industries/real-estate',
        '/disclaimer',
        '/privacy-policy',
        '/terms-of-service'
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '' ? 'monthly' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
