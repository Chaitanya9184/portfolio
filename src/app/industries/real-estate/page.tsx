import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const realEstateFaqs = [
    {
        question: "How can independent brokerages compete with Zillow and Realtor.com?",
        answer: "Aggregators dominate broad terms like 'homes for sale in Texas'. Independent brokerages win by targeting narrow neighborhood keywords. We do this by building deep local content and optimizing fast-loading property tech."
    },
    {
        question: "What is Real Estate Property Schema?",
        answer: "Property schema is hidden code injected into your site. It explicitly tells Google the exact price, bedrooms, and location. This allows Google to show rich visual snippets of your listings directly in search results."
    },
    {
        question: "Why is site architecture critical for real estate websites?",
        answer: "Real estate sites spawn thousands of expiring listing pages. If your architecture is poor, Google wastes time crawling dead listings. We fix your crawl budget so Google prioritizes your valuable neighborhood pages instead."
    },
    {
        question: "How does local SEO apply to Real Estate Agents?",
        answer: "Real estate is a strictly local game. We optimize your Google Business Profiles and acquire strong local citations. We build unique landing pages to capture buyers exactly when they are ready to transact."
    }
];

const realEstateSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Real Estate SEO & Local Search Optimization",
            "provider": {
                "@type": "Person",
                "name": "Chaitanya Kore"
            },
            "description": "Hyper-local SEO and technical architecture strategies for brokerages, agents, and property tech to outrank aggregators."
        },
        {
            "@type": "FAQPage",
            "mainEntity": realEstateFaqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        }
    ]
};

export const metadata: Metadata = {
    title: 'Real Estate SEO & Local Search Strategy | Chaitanya Kore',
    description: 'Hyper-local SEO and technical architecture strategies for brokerages, agents, and property tech to outrank aggregators.',
    alternates: {
        canonical: '/industries/real-estate',
    },
};

export default function RealEstateIndustryPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <Link href="/industries" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest mb-12 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6" /></svg>
                    All Industries
                </Link>

                {/* Hero */}
                <div className="mb-12">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                        Real Estate & PropTech
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6">
                        Outranking Aggregators <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">With Hyper-Local SEO</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        To beat massive MLS aggregators, you need flawless technical precision. We use advanced property schema and target local neighborhood search intent to steal market share.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-red-500">⚠️</span> The Real Estate Challenge
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Massive aggregators (Zillow, Realtor.com) dominate high-volume, generic geographic keywords.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Dynamic MLS feeds create thousands of thin, expiring pages that destroy your crawl budget and SEO health.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Poor local map pack visibility means competing agents intercept your local buyers and sellers.</li>
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-cyan-950/20 border border-cyan-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-cyan-400">⚡</span> The Organic Real Estate Solution
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-cyan-500/50 mt-1">&rarr;</span> <strong>Architecture & Crawl Budget:</strong> Structuring MLS data so Google only indexes high-value, active properties and evergreen neighborhood hubs.</li>
                            <li className="flex gap-3"><span className="text-cyan-500/50 mt-1">&rarr;</span> <strong>Hyper-Local Dominance:</strong> Deploying neighborhood-specific programmatic systems tailored for long-tail, high-intent buyers.</li>
                            <li className="flex gap-3"><span className="text-cyan-500/50 mt-1">&rarr;</span> <strong>Technical Schema:</strong> Implementing Advanced RealEstateListing schema APIs to secure rich results in the SERPs.</li>
                        </ul>
                    </div>
                </div>

                {/* Call To Action */}
                <div className="p-12 text-center rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0a0a0a] border border-zinc-800 relative overflow-hidden mb-24">
                    <div className="absolute inset-0 bg-cyan-500/5 blur-3xl pointer-events-none" />
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Dominate Your Local Market.</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto mb-8 relative z-10">
                        Stop fighting aggregators on their turf. Let's build a hyper-local search engine strategy that drives exclusive buyers and sellers directly to your agents.
                    </p>
                    <Link href="/roi-calculator" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors">
                        Calculate Your Organic ROI
                    </Link>
                </div>

                {/* FAQs */}
                <FAQSection faqs={realEstateFaqs} title="Real Estate SEO FAQs" />

                {/* Schema Markup */}
                <SchemaMarkup schema={realEstateSchema} />

            </div>
        </main>
    );
}
