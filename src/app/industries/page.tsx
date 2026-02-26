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
        title: 'Healthcare & MedTech',
        slug: 'healthcare',
        description: 'Driving patient acquisition through stringent E-E-A-T optimization, medical schema, and YMYL authority building.',
        stats: '7% of all Google daily searches are health-related. Google demands absolute authority for these YMYL queries.',
    },
    {
        title: 'Real Estate & PropTech',
        slug: 'real-estate',
        description: 'Outranking aggregators using hyper-local neighborhood hubs, property schema, and technical MLS architecture.',
        stats: '97% of home buyers use the internet in their search. Local SEO ensures you capture them before the aggregators do.',
    },
    {
        title: 'Finance & Fintech',
        slug: 'finance',
        description: 'Engineering digital trust and compliance-driven organic growth for banks, advisory firms, and Fintech platforms.',
        stats: 'Financial algorithms actively suppress content without proven E-E-A-T. Trust is the only currency that ranks.',
    },
    {
        title: 'Home Services',
        slug: 'home-services',
        description: 'Dominating the Google Map Pack and local search to intercept high-intent customers and lower reliance on paid leads.',
        stats: 'Local Map Pack results capture over 44% of total clicks for home service queries. If you aren\'t there, you lose the job.',
    }
];

export default function IndustriesPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                {/* Header */}
                <div className="mb-12 max-w-3xl">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {industries.map((ind) => (
                        <Link
                            href={`/industries/${ind.slug}`}
                            key={ind.slug}
                            className="group relative overflow-hidden flex flex-col h-full p-8 rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:bg-zinc-800/80 hover:border-emerald-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/20 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="relative z-10 mb-6">
                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">{ind.title}</h2>
                                <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                                    {ind.description}
                                </p>
                            </div>
                            <div className="relative z-10 mt-auto">
                                <div className="p-4 rounded-xl bg-emerald-900/10 border border-emerald-900/30 mb-6 group-hover:bg-emerald-900/20 group-hover:border-emerald-500/30 transition-all duration-300">
                                    <p className="text-xs text-emerald-300/80 font-medium italic">
                                        &quot;{ind.stats}&quot;
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-zinc-800/50 group-hover:border-emerald-500/30 transition-colors duration-300">
                                    <span className="text-sm font-bold text-emerald-500 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                                        View Strategy
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </span>
                                </div>
                            </div>
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
