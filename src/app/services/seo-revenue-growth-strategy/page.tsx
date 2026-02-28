"use client";

import React from 'react';
import Link from 'next/link';

export default function SeoRevenueGrowthStrategy() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                    Service Implementation
                </div>
                <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-8 leading-[0.9]">
                    SEO Revenue <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Growth Strategy</span>
                </h1>

                <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl">
                    Move beyond vanity metrics and traffic graphs that flatline. I build comprehensive systems that tie organic search directly to closed-won revenue for B2B Tech & SaaS.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h2 className="text-white font-bold text-xl mb-4">What's Included:</h2>
                        <ul className="space-y-4">
                            {[
                                "Revenue Attribution Modeling",
                                "TAM-to-Keyword Mapping",
                                "Bottom-of-Funnel Conversion Tactics",
                                "Competitor Entity Hijacking",
                                "Full-Funnel Content Architecture"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-zinc-400 text-sm">
                                    <span className="text-blue-500">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h2 className="text-white font-bold text-xl mb-4">The Outcome:</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            A fully mapped pipeline that treats SEO as a measurable sales engine, not just a marketing channel. You will know exactly what an organic visitor is worth, and where they convert.
                        </p>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-0">
                            We shift the focus from "ranking for keywords" to "owning the buyer journey," ensuring your landing pages, hubs, and technical structures are aligned with how your ideal customers actually buy.
                        </p>
                    </div>
                </div>

                <Link href="/contact" className="inline-block w-full text-center md:w-auto px-12 py-5 bg-blue-600 text-white font-black uppercase text-sm tracking-widest rounded-2xl hover:bg-blue-500 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Start the Growth Engine
                </Link>
            </div>
        </main>
    );
}
