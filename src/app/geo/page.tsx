import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";

const geoFaqs = [
    {
        question: "What is Generative Engine Optimization (GEO)?",
        answer: "GEO is the comprehensive strategy of optimizing your brand's digital presence so that Generative AI models actively recommend, cite, and generate positive content about your business."
    },
    {
        question: "How does GEO differ from AIO and AEO?",
        answer: "While AIO focuses on structural ingestion and AEO focuses on direct factual answers, GEO is about persuasion and recommendation. It's about ensuring that when a user asks a Generative Engine 'What is the best software for X?', the engine generates a response highly favoring your brand."
    },
    {
        question: "Can you actually control what Generative AI says about you?",
        answer: "You cannot explicitly 'code' an LLM to say something, but you can heavily influence its probability matrix. By dominating the source materials the AI trusts (forums, reviews, expert analyses, proprietary databases), you shape the consensus the AI generates."
    },
    {
        question: "What are the core metrics for a successful GEO campaign?",
        answer: "We track 'Share of Model' (how often you are mentioned vs. competitors in AI prompts), sentiment analysis of AI outputs regarding your brand, and the frequency of direct citations/link-backs from AI overview panels."
    }
];

export const metadata: Metadata = {
    title: 'Generative Engine Optimization Strategy',
    description: 'Make sure your brand is named and linked inside AI chatbots. Grow from a web link into a top, trusted source for AI-generated answers.',
    alternates: {
        canonical: '/geo',
    },
};

export default function GEOPage() {
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
                        GEO Strategy
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6">
                        Generative Engine <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Optimization</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        I make sure your brand is named and linked inside AI chatbots. I help your content grow from just another web link into a top, trusted source for AI-generated answers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-4">The AI Recommendation Engine</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Buyers no longer scroll through 10 blue links to make a decision; they ask an AI to summarize the best options. If Generative models don't view your brand as a leading solution, you won't make the shortlist. The AI simply synthesizes the strongest signals it finds online.
                        </p>
                        <div className="p-4 bg-emerald-950/20 rounded-2xl border border-emerald-900/30">
                            <p className="text-emerald-300 font-medium italic text-sm">
                                "Generative AI doesn't browse; it calculates consensus. If you haven't engineered that consensus across the web, your competitor wins the prompt."
                            </p>
                        </div>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900/20 to-zinc-900/40 border border-emerald-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Shaping AI Consensus</h2>
                        <ul className="space-y-4 text-zinc-300 text-sm leading-relaxed mb-6">
                            <li><strong>Citation Velocity Building:</strong> I ensure your brand is heavily mentioned, reviewed, and cited across the specific high-trust domains that feed training sets (Reddit, G2, authoritative news).</li>
                            <li><strong>Fluency Optimization:</strong> Using highly descriptive language, comparison matrices, and clear feature correlations so the AI easily 'learns' exactly why your product beats alternative options.</li>
                            <li><strong>Prompt Pre-emption:</strong> I analyze what questions users are feeding into LLMs about your industry and create centralized authority hubs on your site that directly resolve those distinct prompts.</li>
                        </ul>
                    </div>
                </div>

                <div className="p-12 text-center rounded-3xl bg-zinc-900/30 border border-zinc-800 mb-24">
                    <h2 className="text-3xl font-bold text-white mb-4">Become the AI's Default Answer</h2>
                    <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Prepare your brand for the post-search-engine era by shaping how the world's most powerful AI models perceive you.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-colors">
                        Start Your GEO Strategy
                    </Link>
                </div>

                {/* FAQs */}
                <FAQSection faqs={geoFaqs} title="GEO FAQs" />

            </div>
        </main>
    );
}
