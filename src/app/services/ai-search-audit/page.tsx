"use client";

import React from 'react';
import Link from 'next/link';

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
                    Stop guessing. Get a technical blueprint of how Large Language Models (LLMs) perceive, extract, and cite your brand.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h3 className="text-white font-bold text-xl mb-4">What's Included:</h3>
                        <ul className="space-y-4">
                            {[
                                "GSOV (Generative Share of Voice) Baseline",
                                "Entity Relationship Mapping",
                                "Technical Extractability Audit",
                                "Cite-Worthiness Content Gap Analysis",
                                "Structured Data (Next-Gen) Review"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-zinc-400 text-sm">
                                    <span className="text-emerald-500">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h3 className="text-white font-bold text-xl mb-4">The Outcome:</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-0">
                            A technical roadmap designed to flip your site from "indexed" to "cited" in Gemini, SearchGPT, and Perplexity responses.
                        </p>
                    </div>
                </div>

                <Link href="/contact" className="inline-block w-full text-center md:w-auto px-12 py-5 bg-emerald-500 text-black font-black uppercase text-sm tracking-widest rounded-2xl hover:bg-emerald-400 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Request Your Audit
                </Link>
            </div>
        </main>
    );
}
