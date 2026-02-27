import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const saasFaqs = [
    {
        question: "Why is traditional SEO no longer enough for SaaS companies?",
        answer: "SaaS buyers are increasingly turning to AI tools (like ChatGPT or Perplexity) to discover and compare software. Traditional SEO only targets standard search engines. Our approach incorporates Generative Engine Optimization (GEO) to ensure your product is cited as the premier solution in AI-driven answers."
    },
    {
        question: "What is Programmatic SEO for SaaS?",
        answer: "Programmatic SEO involves creating hundreds or thousands of high-quality, intent-driven landing pages (such as 'Your Product vs. Competitor' or 'Software for [Specific Industry]') at scale, capturing long-tail BOFU (Bottom of Funnel) search demand efficiently."
    },
    {
        question: "How do you reduce Customer Acquisition Cost (CAC) through SEO?",
        answer: "By building a compounding organic traffic engine. While paid ads stop generating leads the moment you stop paying, organic content continues to attract high-intent buyers month over month, significantly lowering your blended CAC over time."
    },
    {
        question: "Do you help with technical SEO for Next.js and React marketing sites?",
        answer: "Yes. Many modern SaaS marketing sites are built on JavaScript frameworks (Next.js, React). If not configured correctly (using SSR or SSG), search engines struggle to render and index the content. I specialize in fixing these JavaScript SEO issues."
    },
    {
        question: "How do we measure the success of an organic SaaS campaign?",
        answer: "We focus on pipeline revenue and MRR (Monthly Recurring Revenue), not just traffic. We track organic sign-ups, demo requests, and the conversion rate of non-branded BOFU terms to ensure organic efforts directly impact the bottom line."
    }
];

const saasSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "SaaS SEO & AI Search Optimization",
            "provider": {
                "@type": "Person",
                "name": "Chaitanya Kore"
            },
            "description": "Specialized SEO and Generative Engine Optimization strategies for SaaS companies to reduce CAC and drive MRR."
        },
        {
            "@type": "FAQPage",
            "mainEntity": saasFaqs.map(faq => ({
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
    title: 'SaaS SEO & AI Search Solutions | Chaitanya Kore',
    description: 'Specialized SEO and Generative Engine Optimization strategies for SaaS companies to reduce CAC and drive MRR.',
    alternates: {
        canonical: '/industries/saas',
    },
};

export default function SaaSIndustryPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <Link href="/industries" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest mb-12 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6" /></svg>
                    All Industries
                </Link>

                {/* Hero */}
                <div className="mb-12">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                        SaaS Growth
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6">
                        Stop Renting Your SaaS <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Pipeline from Google Ads</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        I’ve seen too many SaaS founders burn millions on PPC just to keep their MRR flat. I help you build an organic engine that actually compounds over time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-red-500">⚠️</span> The SaaS "Trap" I See Daily
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Relying on Paid Search is like renting a house. The moment you stop paying, your traffic vanishes and you have zero equity.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> You’re fighting giants with 10x your budget on generic keywords, causing your CAC to skyrocket.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Your potential buyers are already moving to AI search (Perplexity, ChatGPT) for recommendations, and you’re invisible there.</li>
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-blue-950/20 border border-blue-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-blue-400">⚡</span> How I Build Your Moat
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-blue-500/50 mt-1">&rarr;</span> <strong>Programmatic Scale:</strong> I don't just target one keyword; I build thousands of high-intent "Vs." and "Alternative" pages that capture buyers in the decision phase.</li>
                            <li className="flex gap-3"><span className="text-blue-500/50 mt-1">&rarr;</span> <strong>AI Citation Engineering (GEO):</strong> I structure your product data so that when someone asks AI for the "best software," your tool is the primary citation.</li>
                            <li className="flex gap-3"><span className="text-blue-500/50 mt-1">&rarr;</span> <strong>Technical Excellence:</strong> I fix the Next.js and React rendering issues that keep most SaaS sites from ever being indexed properly.</li>
                        </ul>
                    </div>
                </div>

                {/* Call To Action */}
                <div className="p-12 text-center rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0a0a0a] border border-zinc-800 relative overflow-hidden mb-24">
                    <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none" />
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Stop Renting Your Traffic. Own It.</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto mb-8 relative z-10">
                        Let&apos;s build a compounding organic growth moat for your SaaS product using advanced Technical SEO and AI Search optimization.
                    </p>
                    <Link href="/roi-calculator" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors">
                        Calculate Your Organic ROI
                    </Link>
                </div>

                {/* FAQs */}
                <FAQSection faqs={saasFaqs} title="SaaS SEO FAQs" />

                {/* Schema Markup */}
                <SchemaMarkup schema={saasSchema} />

            </div>
        </main>
    );
}
