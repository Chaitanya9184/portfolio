import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fractional SEO Lead | SaaS Organic Growth Partnership',
    description: 'Executive-level programmatic SEO partnership. I embed with your product team to own ranking revenue and build scalable AI Search architecture.',
    alternates: {
        canonical: '/services/fractional-seo-lead',
    },
};

export default function FractionalSeoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
