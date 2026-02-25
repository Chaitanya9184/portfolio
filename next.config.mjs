/** @type {import('next').NextConfig} */
const nextConfig = {
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
