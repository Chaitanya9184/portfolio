import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { clusters } from '@/lib/cluster-data';
import industriesData from '@/data/seo/industries.json';
import servicesData from '@/data/seo/services.json';

const BASE_URL = 'https://www.chaitanyakore.in';
const TODAY = new Date();

function parsePostDate(dateStr: string): Date {
    const parsed = new Date(dateStr);
    return isNaN(parsed.getTime()) ? TODAY : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
    // ─── 1. Homepage ─────────────────────────────────────────────────────────
    const homepage: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: TODAY,
            changeFrequency: 'daily',
            priority: 1.0,
        },
    ];

    // ─── 2. Core service & conversion pages ──────────────────────────────────
    const corePages = [
        '/hire-me',
        '/seo-for-revenue-growth',
        '/ai-search-seo-strategy',
        '/technical-seo-for-saas',
        '/roi-calculator',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: TODAY,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // ─── 3. Section index pages ───────────────────────────────────────────────
    const sectionPages = [
        '/blog',
        '/geo',
        '/aeo',
        '/insights',
        '/industries',
        '/services',
        '/tools',
        '/checklists',
        '/checklists/aeo',
        '/checklists/geo',
        '/about',
        '/contact',
        '/author/chaitanya-kore',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: TODAY,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // ─── 4. Tool sub-pages ───────────────────────────────────────────────────
    const toolPages = [
        '/tools/ai-visibility-checker',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: TODAY,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // ─── 5. Industry pages ────────────────────────────────────────────────────
    const industryPages = industriesData.industries.map((ind) => ({
        url: `${BASE_URL}/industries/${ind.slug}`,
        lastModified: TODAY,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // ─── 6. Service pages ─────────────────────────────────────────────────────
    const servicePages = servicesData.services.map((srv) => ({
        url: `${BASE_URL}/services/${srv.slug}`,
        lastModified: TODAY,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // ─── 7. Blog posts ────────────────────────────────────────────────────────
    const blogPages = blogPosts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: parsePostDate(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // ─── 8. Insight cluster pages ─────────────────────────────────────────────
    const insightPages = clusters.map((cluster) => ({
        url: `${BASE_URL}/insights/${cluster.slug}`,
        lastModified: TODAY,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // ─── 9. Legal / policy pages ─────────────────────────────────────────────
    const legalPages = [
        '/disclaimer',
        '/privacy-policy',
        '/terms-of-service',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: TODAY,
        changeFrequency: 'yearly' as const,
        priority: 0.3,
    }));

    return [
        ...homepage,
        ...corePages,
        ...sectionPages,
        ...toolPages,
        ...industryPages,
        ...servicePages,
        ...blogPages,
        ...insightPages,
        ...legalPages,
    ];
}

