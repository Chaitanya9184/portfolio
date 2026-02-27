import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";

const aeoFaqs = [
    {
        question: "What is Answer Engine Optimization (AEO)?",
        answer: "AEO is the practice of optimizing content specifically to be featured as the direct answer in Answer Engines, such as Google's AI Overviews (SGE), Perplexity, and featured snippets."
    },
    {
        question: "How does AEO differ from keyword optimization?",
        answer: "Instead of targeting broad keywords (like 'CRM software'), AEO targets the specific conversational questions users ask (like 'What is the best CRM software with email automation for small businesses?'). The goal is to provide the most concise, accurate answer possible."
    },
    {
        question: "Why is 'Position Zero' important in AEO?",
        answer: "In AI-driven search, the engine often answers the user's query directly at the top of the page ('Position Zero'). If you own that position, you gain immense brand authority and intercept the user before they scroll down to traditional search results."
    },
    {
        question: "How do you format content for AEO?",
        answer: "We use 'Inverted Pyramid' writing, placing the direct answer in the first sentence. We aggressively utilize bulleted lists, structured tables, definitive statements, and specific FAQ schema markup to make extraction seamless for bots."
    }
];

export const metadata: Metadata = {
    title: 'Answer Engine Optimization (AEO) Strategy | Chaitanya Kore',
    description: 'Win Position Zero by writing direct, clear answers to common questions. Optimize for Perplexity, Google AI Overviews, and conversational search.',
    alternates: {
        canonical: '/aeo',
    },
};

export default function AEOPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest mb-12 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6" /></svg>
                    Back to Home
                </Link>

                {/* Hero */}
                <div className="mb-12">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                        AEO Strategy
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6">
                        Answer Engine <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Optimization</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        I help you win 'Position Zero' by writing direct, clear answers to common questions. I focus on how people talk and search using tools like Perplexity and Google AI Overviews.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-4">The Fluff Penalty</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Traditional SEO taught writers to create 2,000-word articles full of fluff just to answer a simple question. Answer Engines (like Perplexity or Google's SGE) hate fluff. They want immediate, factual accuracy. If your content buries the answer in paragraph six, the engine will extract the answer from your competitor who put it in sentence one.
                        </p>
                        <div className="p-4 bg-emerald-950/20 rounded-2xl border border-emerald-900/30">
                            <p className="text-emerald-300 font-medium italic text-sm">
                                "In the AEO era, brevity and formatting are the ultimate ranking factors. Cut the intro, give the answer."
                            </p>
                        </div>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900/20 to-zinc-900/40 border border-emerald-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Engineering Extractability</h2>
                        <ul className="space-y-4 text-zinc-300 text-sm leading-relaxed mb-6">
                            <li><strong>Direct Answer Formats:</strong> I rewrite your core content using the 'Inverted Pyramid'—giving the definitive answer immediately, followed by supporting details.</li>
                            <li><strong>Conversational Intent Mapping:</strong> I map the exact long-tail, natural language questions your buyers are asking voice assistants and chatbots.</li>
                            <li><strong>HTML Parsing Paths:</strong> I use strict semantic lists (ul/ol), bolding, and data tables that AI extraction algorithms favor when formulating their synthesized responses.</li>
                        </ul>
                    </div>
                </div>

                <div className="p-12 text-center rounded-3xl bg-zinc-900/30 border border-zinc-800 mb-24">
                    <h2 className="text-3xl font-bold text-white mb-4">Dominate Position Zero</h2>
                    <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Stop losing traffic to AI overviews. Instead, let's engineer your content so that your brand becomes the overview.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-colors">
                        Re-Format for Answer Engines
                    </Link>
                </div>

                {/* FAQs */}
                <FAQSection faqs={aeoFaqs} title="AEO FAQs" />

            </div>
        </main>
    );
}
