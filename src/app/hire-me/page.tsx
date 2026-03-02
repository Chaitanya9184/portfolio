"use client";

import React from 'react';
import Link from 'next/link';

export default function HireMe() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                    Open To Work / Consulting
                </div>
                <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-8 leading-[0.9]">
                    Hire Chaitanya: <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">SEO Leadership</span>
                </h1>

                <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl">
                    I build, scale, and lead high-performance organic growth teams for Series A-C SaaS and Enterprise platforms.
                </p>

                {/* Roles Targeted */}
                <div className="mb-16">
                    <h2 className="text-white font-bold text-2xl mb-6">Roles I'm Targeting:</h2>
                    <div className="flex flex-wrap gap-4">
                        <span className="px-6 py-3 rounded-full bg-zinc-900 border border-white/10 text-emerald-400 font-bold">Head of SEO</span>
                        <span className="px-6 py-3 rounded-full bg-zinc-900 border border-white/10 text-emerald-400 font-bold">VP, Organic Growth</span>
                        <span className="px-6 py-3 rounded-full bg-zinc-900 border border-white/10 text-emerald-400 font-bold">Principal Technical SEO</span>
                        <span className="px-6 py-3 rounded-full bg-zinc-900 border border-white/10 text-emerald-400 font-bold">Director of Search Strategy</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Leadership Scope */}
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h2 className="text-white font-bold text-xl mb-4">Leadership Scope:</h2>
                        <ul className="space-y-4">
                            {[
                                "Cross-Functional Alignment (Product, Eng, Content)",
                                "Building & Mentoring In-House SEO Teams",
                                "Managing 7-Figure Agency & Tool Budgets",
                                "Board-Level Reporting (CAC, LTV, ROI)",
                                "Evangelizing Search Across the Organization"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-zinc-400 text-sm">
                                    <span className="text-emerald-500">❖</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Key Business Outcomes */}
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h2 className="text-white font-bold text-xl mb-4">Key Business Outcomes:</h2>
                        <ul className="space-y-4">
                            {[
                                "Predictable Pipeline from Organic Search",
                                "Defending Market Share against AI/LLMs",
                                "Lowering Blended Customer Acquisition Cost (CAC)",
                                "Scaling Programmatic SEO Infrastructure",
                                "Market Expansion via Internationalization"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-zinc-400 text-sm">
                                    <span className="text-emerald-500">📈</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="inline-block flex-1 text-center px-12 py-5 bg-emerald-600 text-black font-black uppercase text-sm tracking-widest rounded-2xl hover:bg-emerald-500 transition-all hover:scale-[1.02] active:scale-[0.98]">
                        Email Me directly
                    </Link>
                    <a href="https://linkedin.com/in/chaitanyakore" target="_blank" rel="noopener noreferrer" className="inline-block flex-1 text-center px-12 py-5 bg-[#0077b5] text-white font-bold uppercase text-sm tracking-widest rounded-2xl hover:bg-blue-600 transition-all hover:scale-[1.02] active:scale-[0.98]">
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </main>
    );
}
