import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Industries We Serve | SEO & AI Search Solutions',
    description: 'Specialized SEO, AEO, and GEO strategies tailored for SaaS, eCommerce, B2B Tech, and local businesses.',
};

const industries = [
    {
        title: 'SaaS (Software as a Service)',
        slug: 'saas',
        description: 'Reducing CAC and driving high-intent MRR through targeted technical SEO and AI Search (AEO/GEO) visibility.',
        stats: '70% of B2B buyers start with a generic search. Is your SaaS tool the answer they find?',
    },
    {
        title: 'eCommerce & Retail',
        slug: 'ecommerce',
        description: 'Scaling organic revenue with advanced faceted navigation SEO, schema markup, and optimized product discovery.',
        stats: 'Organic search drives 39% of all digital purchases. Dominate the SERP and capture high-intent shoppers.',
    },
    {
        title: 'B2B Tech & Enterprise',
        slug: 'b2b-tech',
        description: 'Building topical authority and establishing thought leadership in complex, long-sales-cycle B2B environments.',
        stats: 'B2B researchers do 12 searches on average prior to engaging on a specific brand&apos;s site.',
    }
];

export default function IndustriesPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                {/* Header */}
                <div className="mb-20 max-w-3xl">
                    <p className="text-emerald-500 text-sm tracking-widest uppercase mb-4 font-semibold">Specialized Expertise</p>
                    <h1 className="text-5xl md:text-6xl text-white font-bold tracking-tighter mb-6 relative inline-block">
                        Industries & Solutions
                        <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
                    </h1>
                    <p className="text-zinc-400 text-lg leading-relaxed font-light">
                        Every industry faces unique digital acquisition challenges. Whether it&apos;s the high CAC of SaaS, the complex architectures of eCommerce, or the long sales cycles of B2B Enterprise—I engineer tailored SEO and AI Search strategies to ensure you dominate your specific market.
                    </p>
                </div>

                {/* Industry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((ind) => (
                        <Link
                            href={`/industries/${ind.slug}`}
                            key={ind.slug}
                            className="group block p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:bg-zinc-800/60 hover:border-emerald-500/30 transition-all duration-300"
                        >
                            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{ind.title}</h2>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                {ind.description}
                            </p>
                            <div className="p-4 rounded-xl bg-emerald-900/10 border border-emerald-900/30 mb-6">
                                <p className="text-xs text-emerald-300/80 font-medium italic">
                                    &quot;{ind.stats}&quot;
                                </p>
                            </div>
                            <span className="text-sm font-bold text-emerald-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                                View Strategy
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </span>
                        </Link>
                    ))}
                </div>

            </div>
        </main>
    );
}
