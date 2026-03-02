import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { clusters } from '@/lib/cluster-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.chaitanyakore.in';

    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/hire-me',
        '/tools',
        '/tools/ai-visibility-checker',
        '/roi-calculator',
        '/seo-for-revenue-growth',
        '/ai-search-seo-strategy',
        '/technical-seo-for-saas',
        '/blog',
        '/geo',
        '/aeo',
        '/aio',
        '/checklists/aeo',
        '/checklists/geo',
        '/checklists/aio',
        '/services/seo-revenue-growth-strategy',
        '/services/fractional-seo-lead',
        '/services/technical-seo-for-saas',
        '/services/ai-search-audit',
        '/services/seo-strategy-sprint',
        '/industries',
        '/industries/finance',
        '/industries/b2b-tech',
        '/industries/ecommerce',
        '/industries/home-services',
        '/industries/saas',
        '/industries/healthcare',
        '/industries/real-estate',
        '/author/chaitanya-kore',
        '/disclaimer',
        '/privacy-policy',
        '/terms-of-service'
    ];

    const routes = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: (route === '' ? 'monthly' : 'weekly') as 'monthly' | 'weekly',
        priority: route === '' ? 1.0 : 0.8,
    }));

    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const insightRoutes = clusters.map((cluster) => ({
        url: `${baseUrl}/insights/${cluster.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...routes, ...blogRoutes, ...insightRoutes];
}
