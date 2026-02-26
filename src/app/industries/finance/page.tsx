import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const financeFaqs = [
    {
        question: "Why is finance SEO hard?",
        answer: "Finance is a 'Your Money or Your Life' (YMYL) space. Google filters this content strictly. Your content needs verified trust and clear authors to rank well."
    },
    {
        question: "How do you optimize calculators?",
        answer: "Calculators attract links and drive sales. We make them fast. We add proper schema and helpful content around them."
    },
    {
        question: "How does AI Search affect Fintech?",
        answer: "People ask AI for financial advice directly. Generative Engine Optimization (GEO) structures your data. This helps AI tools cite your brand as a top choice."
    },
    {
        question: "How do you handle SEO compliance?",
        answer: "We build SEO plans that follow SEC and FINRA rules. We focus on a solid site setup and PR trust, avoiding risky content."
    }
];

const financeSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Finance & Fintech SEO Solutions",
            "provider": {
                "@type": "Person",
                "name": "Chaitanya Kore"
            },
            "description": "Enterprise SEO and YMYL optimization for banks, Fintech startups, and financial advisory firms to build unbeatable Trust."
        },
        {
            "@type": "FAQPage",
            "mainEntity": financeFaqs.map(faq => ({
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
    title: 'Fintech & Financial SEO Strategy | Chaitanya Kore',
    description: 'Enterprise SEO and YMYL optimization for banks, Fintech startups, and financial advisory firms to build unbeatable Trust.',
    alternates: {
        canonical: '/industries/finance',
    },
};

export default function FinanceIndustryPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <Link href="/industries" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest mb-12 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6" /></svg>
                    All Industries
                </Link>

                {/* Hero */}
                <div className="mb-12">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-widest">
                        Finance & Fintech
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6">
                        Building Trust <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">In Finance SEO</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        In finance, ranking means proving your trust to Google. We build strong SEO foundations for banks, wealth managers, and Fintech startups.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-red-500">⚠️</span> The SEO Challenge
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Google's YMYL filters hide sites that lack strong trust signals.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Huge brands like NerdWallet dominate commercial search results.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Strict SEC and FINRA rules make fast content creation hard.</li>
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-violet-950/20 border border-violet-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-violet-400">⚡</span> Our Search Solution
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-violet-500/50 mt-1">&rarr;</span> <strong>Strong E-E-A-T Engine:</strong> We use proper schema, expert reviews, and digital PR.</li>
                            <li className="flex gap-3"><span className="text-violet-500/50 mt-1">&rarr;</span> <strong>Interactive Tools:</strong> We build fast financial tools that earn natural links.</li>
                            <li className="flex gap-3"><span className="text-violet-500/50 mt-1">&rarr;</span> <strong>AI Citations:</strong> We optimize your data so AI models cite your platform as a top source.</li>
                        </ul>
                    </div>
                </div>

                {/* Call To Action */}
                <div className="p-12 text-center rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0a0a0a] border border-zinc-800 relative overflow-hidden mb-24">
                    <div className="absolute inset-0 bg-violet-500/5 blur-3xl pointer-events-none" />
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Gain Digital Authority.</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto mb-8 relative z-10">
                        Stop losing investors to massive brands. Build an organic search engine that turns trust into steady growth.
                    </p>
                    <Link href="/roi-calculator" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors">
                        Calculate Your ROI
                    </Link>
                </div>

                {/* FAQs */}
                <FAQSection faqs={financeFaqs} title="Financial SEO FAQs" />

                {/* Schema Markup */}
                <SchemaMarkup schema={financeSchema} />

            </div>
        </main>
    );
}
