import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Search Audit | GEO & AEO Technical Assessment',
    description: 'A deep-dive technical assessment that maps your brand\'s footprint in LLMs and generative search engines, identifying critical gaps in entity SEO.',
    alternates: {
        canonical: '/services/ai-search-audit',
    },
};

export default function AiSearchAuditLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
