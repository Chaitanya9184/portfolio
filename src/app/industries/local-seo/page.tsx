import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const localFaqs = [
    {
        question: "Why is traditional global SEO the wrong approach for a local business?",
        answer: "A global approach wastes budget trying to rank for highly competitive terms worldwide. Local SEO hyper-focuses on the exact city or neighborhood where your actual paying customers live, capturing immediate 'near me' or geo-modified purchasing intent."
    },
    {
        question: "How does AI Search affect Local SEO?",
        answer: "Users are increasingly asking AI tools for local recommendations (e.g., 'What is the highest-rated roofing company near me that handles storm damage?'). We ensure your business is cited in these AI-generated answers through precise schema markup, strong review profiles, and Answer Engine Optimization (AEO)."
    },
    {
        question: "What is the Map Pack and why is it important?",
        answer: "The 'Map Pack' is the set of 3 featured Google Maps results that appear at the very top of local searches. Over 60% of all local search clicks go to these three businesses. Optimizing your Google Business Profile to rank here is our top priority."
    },
    {
        question: "How long does it take to see results from Local SEO?",
        answer: "Unlike broader organic SEO which can take 6-12 months, Local SEO and Google Business Profile optimizations often show measurable improvements in phone calls, direction requests, and local rankings within 30 to 90 days."
    },
    {
        question: "Does my business need distinct landing pages for different cities?",
        answer: "Yes, if you serve multiple distinct areas without physical offices in each. Creating highly relevant, non-spammy 'city-service' pages helps you capture search intent beyond just your immediate zip code."
    }
];

const localSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Local SEO & Google Maps Optimization",
            "provider": {
                "@type": "Person",
                "name": "Chaitanya Kore"
            },
            "description": "Hyper-targeted Local SEO and Google Business Profile strategies to dominate local markets and AI search recommendations."
        },
        {
            "@type": "FAQPage",
            "mainEntity": localFaqs.map(faq => ({
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
    title: 'Local SEO & Maps Optimization Solutions | Chaitanya Kore',
    description: 'Specialized Local SEO, Google Business Profile, and Generative Engine Optimization strategies to dominate local markets.',
    alternates: {
        canonical: '/industries/local-seo',
    },
};

export default function LocalIndustryPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <Link href="/industries" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest mb-12 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6" /></svg>
                    All Industries
                </Link>

                {/* Hero */}
                <div className="mb-20">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
                        Local Search Dominance
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6">
                        Capture the Clients <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">In Your Backyard</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        When people search locally, they are ready to buy. A hyper-targeted local SEO strategy ensures your business is the immediate, undisputed answer precisely when your neighbors are looking.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-red-500">⚠️</span> The Local Search Challenge
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> <strong>The Map Pack Firewall:</strong> If you aren't in the top 3 Google Maps results, you are effectively invisible to local searchers.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> <strong>Fragmented Citations:</strong> Inconsistent business names, addresses, and phone numbers (NAP) across directories confuse algorithms and destroy trust.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> <strong>The AI Shift:</strong> Users now ask AI for complex local recommendations ("Who fixes burst pipes on Sundays near me?"), bypassing standard search entirely.</li>
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-amber-950/20 border border-amber-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-amber-400">⚡</span> The Hyper-Local Solution
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-amber-500/50 mt-1">&rarr;</span> <strong>Google Business Profile Authority:</strong> Deep optimization of your GBP to secure the top 3 Map Pack rankings.</li>
                            <li className="flex gap-3"><span className="text-amber-500/50 mt-1">&rarr;</span> <strong>Local Schema & Geo-Targeting:</strong> Implementing strict LocalBusiness structured data so search engines mathematically verify your exact service area.</li>
                            <li className="flex gap-3"><span className="text-amber-500/50 mt-1">&rarr;</span> <strong>AI Review Optimization:</strong> Managing and generating review signals that AI tools (like ChatGPT and Perplexity) rely on to cite you as the "best" option.</li>
                        </ul>
                    </div>
                </div>

                {/* Call To Action */}
                <div className="p-12 text-center rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0a0a0a] border border-zinc-800 relative overflow-hidden mb-24">
                    <div className="absolute inset-0 bg-amber-500/5 blur-3xl pointer-events-none" />
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Stop Losing Local Leads.</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto mb-8 relative z-10">
                        Let's build a local search moat that makes your business the default choice for customers in your exact service area.
                    </p>
                    <Link href="/roi-calculator" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors">
                        Calculate Your Organic ROI
                    </Link>
                </div>

                {/* FAQs */}
                <FAQSection faqs={localFaqs} title="Local SEO FAQs" />

                {/* Schema Markup */}
                <SchemaMarkup schema={localSchema} />

            </div>
        </main>
    );
}
