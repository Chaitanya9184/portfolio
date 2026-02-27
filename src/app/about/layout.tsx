import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Chaitanya Kore | The Human behind the Strategy',
    description: 'Learn about my 8+ years of experience engineering organic growth engines for Enterprise and SaaS brands using technical SEO and AI Search (GEO).',
    alternates: {
        canonical: '/about',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
