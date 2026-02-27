import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SEO Strategy Sprint | Content & Architecture Roadmap',
    description: 'A 14-day intensive sprint delivering a fully actionable SEO roadmap, encompassing programmatic strategy, entity structuring, and AI content workflows.',
    alternates: {
        canonical: '/services/seo-strategy-sprint',
    },
};

export default function SeoStrategySprintLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
