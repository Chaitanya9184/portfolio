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
