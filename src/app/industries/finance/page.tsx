import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const financeFaqs = [
    {
        question: "Why is SEO for Finance harder than other industries?",
        answer: "Finance is a strict 'Your Money or Your Life' (YMYL) space. Google heavily filters financial content for E-E-A-T. Without verified trust, clear authors, and great tech, your content will fail to rank."
    },
    {
        question: "How do you optimize financial calculators and tools?",
        answer: "Calculators are strong link magnets and conversion tools. We optimize them for maximum speed. We add FinancialProduct schema and surround them with deeply helpful, intent-driven content."
    },
    {
        question: "What is the role of AI Search (GEO) in Fintech?",
        answer: "Users now ask AI platforms 'What is the best high-yield savings account?' directly. Generative Engine Optimization (GEO) ensures your product is structured properly. This forces AI tools to cite your brand as the safest, top recommendation."
    },
    {
        question: "How do you handle compliance and SEO at the same time?",
        answer: "We build SEO strategies that align directly with SEC and FINRA rules. Rather than using aggressive, non-compliant content, we focus on rock-solid site architecture and PR authority building."
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">In Financial Markets</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        In finance, ranking high means proving you are safe and reliable. We help banks and fintech startups build the trust Google needs to see.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-red-500">⚠️</span> The Growth Problem
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Google is very strict with money-related sites. If trust is low, you won't rank.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Giant brands often own the top spots, making it hard for new names to be seen.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Tough rules and compliance often slow down how fast you can grow your content.</li>
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-violet-950/20 border border-violet-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-violet-400">⚡</span> The Strategy for Growth
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-violet-500/50 mt-1">&rarr;</span> <strong>Proven Authority:</strong> We use clear data and expert reviews to show you are a leader in your field.</li>
                            <li className="flex gap-3"><span className="text-violet-500/50 mt-1">&rarr;</span> <strong>Smart Tools:</strong> We build fast, useful tools like payment calculators that earn links naturally.</li>
                            <li className="flex gap-3"><span className="text-violet-500/50 mt-1">&rarr;</span> <strong>AI Visibility:</strong> We optimize your data so AI search engines recommend your brand first.</li>
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
