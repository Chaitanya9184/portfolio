import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { clusters } from '@/lib/cluster-data';

export default function sitemap(): MetadataRoute.Sitemap {
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
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: (route === '' ? 'monthly' : 'weekly') as "monthly" | "weekly",
        priority: route === '' ? 1 : 0.8,
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

    return [...staticRoutes, ...blogRoutes, ...insightRoutes];
}
