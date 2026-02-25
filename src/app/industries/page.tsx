import { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from "@/components/SchemaMarkup";

const industriesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Industries We Serve | SEO & AI Search Solutions",
    "description": "Specialized SEO, AEO, and GEO strategies tailored for SaaS, eCommerce, B2B Tech, and local businesses.",
    "url": "https://www.chaitanyakore.in/industries/"
};

export const metadata: Metadata = {
    title: 'Industries We Serve | SEO & AI Search Solutions',
    description: 'Specialized SEO, AEO, and GEO strategies tailored for SaaS, eCommerce, B2B Tech, and local businesses.',
    alternates: {
        canonical: '/industries',
    },
};

const industries = [
    {
        title: 'SaaS (Software as a Service)',
        slug: 'saas',
        description: 'Lowering your customer costs and driving strong MRR through focused technical SEO and AI Search visibility.',
        stats: '70% of B2B buyers start with a broad search. Is your SaaS tool the first answer they find?',
    },
    {
        title: 'eCommerce & Retail',
        slug: 'ecommerce',
        description: 'Growing organic sales with smart faceted search fixes, deep schema tools, and tuned product placement.',
        stats: 'Organic search drives 39% of all digital purchases. Dominate the search page and capture active buyers.',
    },
    {
        title: 'B2B Tech & Enterprise',
        slug: 'b2b-tech',
        description: 'Building deep trust and showing clear thought leadership in long, complex B2B sales pipelines.',
        stats: 'B2B buyers do 12 searches on average before they ever talk to a sales team on a brand website.',
    },
    {
        title: 'Local Businesses',
        slug: 'local-seo',
        description: 'Command local search rankings and Google Maps intent with hyper-targeted geographical SEO and business profile optimization.',
        stats: '46% of all Google searches link to local information. Make sure your business owns your neighborhood.',
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
                        Every industry faces unique digital growth problems. SaaS struggles with high ad costs. eCommerce faces huge technical site grids. B2B Enterprise deals with slow, complex sales cycles. I build custom SEO and AI Search plans to help you beat your specific market challenges.
                    </p>
                </div>

                {/* Industry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
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

                {/* Additional SEO Content Section */}
                <div className="mt-24 pt-16 border-t border-zinc-900 border-dashed">
                    <h2 className="text-3xl md:text-4xl text-white font-bold tracking-tighter mb-8">
                        Why Industry-Specific Search Strategies Matter
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-400 text-lg leading-relaxed font-light">
                        <div>
                            <p className="mb-6">
                                A simple keyword strategy no longer works. Modern search engines use advanced machine learning, like GEO and AEO, to understand exactly what a user wants. A leader looking for enterprise software searches very differently than someone buying retail shoes. We plan for that.
                            </p>
                            <p>
                                For SaaS brands, the goal is catching high-intent traffic near the end of the buying cycle. This lowers your customer acquisition cost (CAC). We link your product features into deep, connected topic clusters. This proves your software is the definitive answer to complex business problems.
                            </p>
                        </div>
                        <div>
                            <p className="mb-6">
                                eCommerce requires a completely different technical foundation. We optimize your store filters so search engine bots can efficiently crawl massive product lists without wasting their limit. Advanced Product Schema code is crucial holding rich snippets and visibility in AI Overviews, where users increasingly compare prices directly on the search results page.
                            </p>
                            <p>
                                B2B Tech and Enterprise markets face long, complex sales journeys. Research shows that B2B buyers do over a dozen searches before ever reaching out to sales. Our strategy focuses on holding unshakeable trust and brand authority. By answering hard technical questions through structured data and expert-led content, we ensure your brand is cited as the primary authority throughout the buyer&apos;s journey.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <SchemaMarkup schema={industriesSchema} />
        </main>
    );
}
