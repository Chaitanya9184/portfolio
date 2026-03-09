import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { clusters } from '@/lib/cluster-data';
import industriesData from '@/data/seo/industries.json';
import servicesData from '@/data/seo/services.json';

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
        '/blog',
        '/geo',
        '/aeo',
        '/checklists/aeo',
        '/checklists/geo',
        '/industries',
        '/services',
        '/author/chaitanya-kore',
        '/technical-seo-for-saas',
        '/disclaimer',
        '/privacy-policy',
        '/terms-of-service'
    ];

    const industryRoutes = industriesData.industries.map((ind) => `/industries/${ind.slug}`);
    const serviceRoutes = servicesData.services.map((srv) => `/services/${srv.slug}`);

    const allStaticRoutes = [...staticRoutes, ...industryRoutes, ...serviceRoutes];

    const routes = allStaticRoutes.map((route) => ({
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
