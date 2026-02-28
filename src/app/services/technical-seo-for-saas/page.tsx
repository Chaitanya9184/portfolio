"use client";

import React from 'react';
import Link from 'next/link';

export default function TechnicalSeoForSaas() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-widest">
                    Service Implementation
                </div>
                <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-8 leading-[0.9]">
                    Technical SEO <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">For SaaS Scale</span>
                </h1>

                <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl">
                    Bridging the gap between engineering execution and organic growth. I architect modern Javascript frameworks (Next.js/React) for maximum search visibility and crawl efficiency.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h2 className="text-white font-bold text-xl mb-4">The Coverage:</h2>
                        <ul className="space-y-4">
                            {[
                                "Next.js / SSR Rendering Architecture",
                                "Programmatic SEO Infrastructure",
                                "Enterprise Crawl Budget Management",
                                "Automated JSON-LD Injection",
                                "Core Web Vitals Optimization"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-zinc-400 text-sm">
                                    <span className="text-orange-500">✦</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h2 className="text-white font-bold text-xl mb-4">The Outcome:</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            A technical foundation that treats organic search as a scalable product feature. We fix the underlying indexation and rendering issues so your content team's work actually gets seen.
                        </p>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-0">
                            By aligning your engineering stack with search bot requirements, we ensure that new pages are indexed instantly, existing pages maintain high core web vital scores, and complex application logic does not block discovery.
                        </p>
                    </div>
                </div>

                <Link href="/contact" className="inline-block w-full text-center md:w-auto px-12 py-5 bg-orange-600 text-white font-black uppercase text-sm tracking-widest rounded-2xl hover:bg-orange-500 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Audit Your Infrastructure
                </Link>
            </div>
        </main>
    );
}
