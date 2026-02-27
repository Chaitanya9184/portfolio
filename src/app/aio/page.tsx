import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";

const aioFaqs = [
    {
        question: "What is Artificial Intelligence Optimization (AIO)?",
        answer: "AIO is the process of structuring and formatting your website's content specifically so that Large Language Models (LLMs) like ChatGPT, Claude, and Gemini can easily ingest, understand, and cite your brand as an authoritative source."
    },
    {
        question: "How is AIO different from traditional SEO?",
        answer: "Traditional SEO focuses on ranking web pages on search engine result pages (SERPs) using keywords and backlinks. AIO focuses on ensuring your brand and data are accurately represented inside the training data and real-time generation of AI models."
    },
    {
        question: "Why does my brand need AIO?",
        answer: "As users shift from traditional search engines to conversational AI for answers, being invisible to LLMs means losing market share. AIO ensures your brand is the definitive answer when users ask AI about your industry or products."
    },
    {
        question: "How do you optimize for AI models?",
        answer: "We focus on entity recognition, clear semantic HTML structuring, detailed schema markup, and ensuring your content possesses high 'Information Gain'—unique, expert insights that AI models prioritize over generic, copied content."
    }
];

export const metadata: Metadata = {
    title: 'Artificial Intelligence Optimization Strategy',
    description: 'Structure your brand\'s knowledge so AI models like ChatGPT and Gemini easily read, understand, and cite you as an authoritative source.',
    alternates: {
        canonical: '/aio',
    },
};

export default function AIOPage() {
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
                        AIO Strategy
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6">
                        Artificial Intelligence <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Optimization</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        I build content that AI models like ChatGPT and Gemini easily read and understand. Clear structure and smart data setup ensure bots find, crawl, and trust your brand.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-4">The AI Blindspot</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Most websites are built for human eyes and traditional Google bots. However, Large Language Models (LLMs) parse information differently. If your website lacks clear entities, semantic relationships, and clean data structures, AI models will hallucinate your competitors' features as your own or, worse, ignore you entirely.
                        </p>
                        <div className="p-4 bg-emerald-950/20 rounded-2xl border border-emerald-900/30">
                            <p className="text-emerald-300 font-medium italic text-sm">
                                "If ChatGPT doesn't know who you are and what you do with absolute certainty, you do not exist in the new discovery ecosystem."
                            </p>
                        </div>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900/20 to-zinc-900/40 border border-emerald-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Structuring for Machines</h2>
                        <ul className="space-y-4 text-zinc-300 text-sm leading-relaxed mb-6">
                            <li><strong>Entity Extraction:</strong> I define your business, products, and executives as clear, unambiguous 'Entities' using interconnected semantic structures and schema.</li>
                            <li><strong>Information Gain:</strong> AI models ignore duplicate content. I inject unique data, proprietary research, and expert opinions (EEAT) that force algorithms to cite you.</li>
                            <li><strong>Knowledge Graph Sync:</strong> Ensuring your brand narrative is consistent across the web properties that AI models trust most (Wikipedia, Wikidata, major publications).</li>
                        </ul>
                    </div>
                </div>

                <div className="p-12 text-center rounded-3xl bg-zinc-900/30 border border-zinc-800 mb-24">
                    <h2 className="text-3xl font-bold text-white mb-4">Make Your Brand AI-Readable</h2>
                    <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Let me audit your current digital footprint and build an architecture that LLMs actually understand and trust.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-colors">
                        Get an AIO Audit
                    </Link>
                </div>

                {/* FAQs */}
                <FAQSection faqs={aioFaqs} title="AIO FAQs" />

            </div>
        </main>
    );
}
