import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const financeFaqs = [
    {
        question: "Why is SEO for Finance harder than other industries?",
        answer: "Finance is a strict 'Your Money or Your Life' (YMYL) category. Google aggressively scrutinizes financial content for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). Without verified credentials, robust author entities, and flawless technical architecture, even great content will be algorithmically suppressed."
    },
    {
        question: "How do you optimize financial calculators and tools?",
        answer: "Calculators are powerful link magnets and high-intent conversion pathways. We optimize them by injecting specific FinancialProduct and SoftwareApplication schemas, accelerating their rendering speed (Core Web Vitals), and surrounding them with long-form, entity-rich intent content."
    },
    {
        question: "What is the role of AI Search (GEO) in Fintech?",
        answer: "Users are increasingly asking AI like Perplexity 'What is the best high-yield savings account?' instead of Googling it. Generative Engine Optimization (GEO) ensures your Fintech product is properly structured in knowledge graphs and cited as the safest, most authoritative recommendation."
    },
    {
        question: "How do you handle compliance and SEO at the same time?",
        answer: "We build SEO strategies that integrate directly with strict financial compliance requirements (FINRA, SEC). We focus on rigid, technically sound site architecture and PR-backed authority building rather than relying on aggressive, non-compliant content marketing."
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
                <div className="mb-20">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-widest">
                        Finance & Fintech
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6">
                        Engineering Trust <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">In a YMYL Ecosystem</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        In the financial sector, ranking isn't just about keywords—it's about algorithmically proving Absolute Trust. We build unshakeable E-E-A-T foundations for banks, wealth managers, and Fintech disruptors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-red-500">⚠️</span> The Financial Challenge
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Google's ruthless YMYL filters algorithmically suppress sites lacking institutional trust signals.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Severe competition from legacy mega-brands (NerdWallet, Bankrate) monopolizing commercial intent queries.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Complex compliance (SEC/FINRA) restrictions paralyzing agile content creation.</li>
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-violet-950/20 border border-violet-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-violet-400">⚡</span> The Organic Solution
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-violet-500/50 mt-1">&rarr;</span> <strong>Authoritative E-E-A-T Engine:</strong> Integrating FinancialProduct schema, expert review frameworks, and digital PR.</li>
                            <li className="flex gap-3"><span className="text-violet-500/50 mt-1">&rarr;</span> <strong>Calculators & Interactive Tools:</strong> Building indexable, high-performance financial tools that attract natural backlinks.</li>
                            <li className="flex gap-3"><span className="text-violet-500/50 mt-1">&rarr;</span> <strong>Long-Tail AI Citations:</strong> Optimizing targeted data points so generative AI models cite your platform as the source of truth.</li>
                        </ul>
                    </div>
                </div>

                {/* Call To Action */}
                <div className="p-12 text-center rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0a0a0a] border border-zinc-800 relative overflow-hidden mb-24">
                    <div className="absolute inset-0 bg-violet-500/5 blur-3xl pointer-events-none" />
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Establish Digital Authority.</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto mb-8 relative z-10">
                        Stop losing highly qualified investors to aggregators. Let's build a flawless organic engine that converts trust into compounding financial growth.
                    </p>
                    <Link href="/roi-calculator" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors">
                        Calculate Your Organic ROI
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
