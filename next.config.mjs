/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // Apply these headers to all routes in the application
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://formspree.io https://www.google-analytics.com;"
                    }
                ],
            },
        ];
    },
    async redirects() {
        return [
            // Trailing slash canonical redirect (301)
            { source: '/:path+/', destination: '/:path+', permanent: true },

            // Industry & Service Redirects (Permanent 301)
            { source: '/industries/saas', destination: '/industries/b2b-saas', permanent: true },
            { source: '/industries/finance', destination: '/industries/fintech', permanent: true },
            { source: '/industries/ecommerce', destination: '/industries/ecommerce-marketplaces', permanent: true },
            { source: '/industries/b2b-tech', destination: '/industries/enterprise-software', permanent: true },
            { source: '/industries/healthcare', destination: '/industries/healthcare-it', permanent: true },
            { source: '/industries/real-estate', destination: '/industries/professional-services', permanent: true },
            { source: '/ai-search-seo-strategy', destination: '/services/aeo-optimization', permanent: true },
            { source: '/seo-for-revenue-growth', destination: '/services/seo-revenue-growth-strategy', permanent: true },
            { source: '/technical-seo-for-saas', destination: '/services/technical-seo-audit', permanent: true },
            { source: '/services/ai-search-audit', destination: '/services/aeo-optimization', permanent: true },
            { source: '/services/technical-seo-for-saas', destination: '/services/technical-seo-audit', permanent: true },

            // Blog Redirects (Permanent 301)
            { source: '/blog/aeo-for-b2b-saas-roi-guide', destination: '/blog/is-aeo-worth-it-for-b2b-saas-2026', permanent: true },
            { source: '/blog/geo-cac-reduction-saas-strategies', destination: '/blog/how-geo-reduces-cac-for-saas', permanent: true },
            { source: '/blog/seo-vs-ppc-saas-roi-comparison', destination: '/blog/seo-vs-ppc-for-saas-roi-2026', permanent: true },
            { source: '/blog/b2b-seo-pipeline-timeline-guide', destination: '/blog/how-long-does-b2b-seo-take-to-generate-pipeline-2026', permanent: true },
            { source: '/blog/seo-mql-generation-enterprise-software', destination: '/blog/can-seo-generate-mqls-for-enterprise-software-2026', permanent: true },
            { source: '/blog/measuring-ai-search-visibility-roi', destination: '/blog/how-to-measure-roi-from-ai-search-visibility-2026', permanent: true },
            { source: '/blog/is-traditional-seo-dead-guide', destination: '/blog/is-traditional-seo-dead-in-2026', permanent: true },
            { source: '/blog/how-to-win-ai-search-citations', destination: '/blog/how-to-become-cited-source-chatgpt-perplexity-2026', permanent: true },
            { source: '/blog/ai-overviews-impact-organic-traffic', destination: '/blog/business-impact-ai-overviews-organic-traffic-2026', permanent: true },
            { source: '/blog/structuring-content-for-ai-extraction', destination: '/blog/how-to-structure-content-ai-extraction', permanent: true },
            { source: '/blog/aeo-content-format-checklist-guide', destination: '/blog/aeo-content-format-checklist-2026', permanent: true },
            { source: '/blog/building-geo-content-clusters-guide', destination: '/blog/how-to-build-geo-content-clusters', permanent: true },
            { source: '/blog/entity-seo-b2b-strategies', destination: '/blog/entity-seo-for-b2b-saas-2026', permanent: true },
            { source: '/blog/optimizing-for-ai-citations', destination: '/blog/how-to-optimize-for-ai-citations-step-by-step', permanent: true },
            { source: '/blog/advanced-schema-for-ai-search', destination: '/blog/schema-for-ai-search-2026', permanent: true },
            { source: '/blog/programmatic-seo-saas-comparison', destination: '/blog/programmatic-seo-saas-comparison-pages', permanent: true },
            { source: '/blog/technical-seo-large-saas-sites-guide', destination: '/blog/technical-seo-large-saas-sites-2026', permanent: true },
            { source: '/blog/topical-authority-enterprise-seo', destination: '/blog/how-to-build-topical-authority-enterprise-seo', permanent: true },
            { source: '/blog/best-saas-seo-strategy-2026', destination: '/blog/best-seo-strategy-for-saas-2026', permanent: true },
            { source: '/blog/best-aeo-agency-for-b2b', destination: '/blog/best-aeo-agency-for-b2b-2026', permanent: true },
            { source: '/blog/geo-vs-traditional-seo', destination: '/blog/geo-vs-traditional-seo-the-2026-comparison', permanent: true },
            { source: '/blog/in-house-seo-vs-consultant', destination: '/blog/in-house-seo-vs-consultant-for-saas-2026', permanent: true },
            { source: '/blog/technical-seo-vs-content-seo-saas', destination: '/blog/technical-seo-vs-content-seo-for-saas-2026', permanent: true },
            { source: '/blog/companies-winning-ai-search-visibility', destination: '/blog/which-companies-winning-ai-search-visibility-2026', permanent: true },
            { source: '/blog/top-ai-seo-experts-enterprise', destination: '/blog/top-ai-seo-experts-for-enterprise-2026', permanent: true },
            { source: '/blog/enterprise-ai-search-optimization-costs', destination: '/blog/cost-of-ai-search-optimization-enterprise-2026', permanent: true },

            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'chaitanyakore.in',
                    },
                ],
                destination: 'https://www.chaitanyakore.in/:path*',
                permanent: true, // Forces a 301 redirect
            },
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'www.chaitanyakore.com',
                    },
                ],
                destination: 'https://www.chaitanyakore.in/:path*',
                permanent: true,
            },
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'chaitanyakore.com',
                    },
                ],
                destination: 'https://www.chaitanyakore.in/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
