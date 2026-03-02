import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Search & GEO Strategy Audit | Prepare for Generative Search',
    description: 'Get a technical blueprint of how LLMs perceive and cite your brand. Our GEO strategy audit flips your site from indexed to cited in Gemini, SearchGPT, and Perplexity.',
    alternates: {
        canonical: 'https://www.chaitanyakore.in/services/ai-search-audit',
    }
};

export default function AiSearchAudit() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                    Service Assessment
                </div>
                <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-8 leading-[0.9]">
                    AI Search & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">GEO Strategy Audit</span>
                </h1>

                <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl">
                    Stop guessing. Get a technical blueprint of how Large Language Models (LLMs) perceive, extract, and cite your brand. Transition from "found" to "recommended."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h2 className="text-white font-bold text-xl mb-4">What's Included:</h2>
                        <ul className="space-y-4">
                            {[
                                "GSOV (Generative Share of Voice) Baseline",
                                "Entity Relationship Mapping",
                                "Technical Extractability Audit",
                                "Cite-Worthiness Content Gap Analysis",
                                "Structured Data (Next-Gen) Review",
                                "Retrieval-Augmented Generation (RAG) Modeling"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-zinc-400 text-sm">
                                    <span className="text-emerald-500">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h2 className="text-white font-bold text-xl mb-4">The Retrieval Intelligence:</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            A technical roadmap designed to flip your site from "indexed" to "cited" in Gemini, SearchGPT, and Perplexity responses. We don't just deliver a spreadsheet of errors; we deliver a prioritized action plan.
                        </p>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-0">
                            By the end of the audit, your engineering and content teams will know exactly what schema to implement, how to rewrite introductions for the "Sentence 1" framework, and where to inject empirical data to become the undisputed primary source directly in AI Overviews.
                        </p>
                    </div>
                </div>

                {/* Expanded Content Section */}
                <div className="mb-16 p-10 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/10">
                    <h2 className="text-white font-bold text-2xl mb-6">Winning the Retrieval Era</h2>
                    <div className="prose prose-invert max-w-none text-zinc-400 text-sm leading-relaxed space-y-6">
                        <p>
                            In 2026, SEO is no longer about keywords; it's about <strong>Information Gain</strong> and <strong>verifiability</strong>. AI models are trained to ignore redundant content. If your brand just repeats what others say, you'll never be cited as a primary source.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                            <div className="space-y-3 p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                                <h3 className="text-emerald-400 font-bold text-base">Extraction Testing</h3>
                                <p>We run your core assets through a proprietary suite of LLM extractors to identify where the machine "gets confused" or fails to identify your brand as the expert authority.</p>
                            </div>
                            <div className="space-y-3 p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                                <h3 className="text-emerald-400 font-bold text-base">Citation Optimization</h3>
                                <p>We identify "unclaimed citations"—queries where your brand should be the primary source but isn't—and provide the exact content architecture needed to reclaim that authority.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link href="/contact" className="inline-block w-full text-center md:w-auto px-12 py-5 bg-emerald-500 text-black font-black uppercase text-sm tracking-widest rounded-2xl hover:bg-emerald-400 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Request Your Audit
                </Link>
            </div>
        </main>
    );
}
