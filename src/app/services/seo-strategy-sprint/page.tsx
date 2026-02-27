"use client";

import React from 'react';
import Link from 'next/link';

export default function StrategySprint() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                    High-Velocity Consulting
                </div>
                <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-8 leading-[0.9]">
                    SEO Growth <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Strategy Sprint</span>
                </h1>

                <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl">
                    14 days to unlock your revenue floor. We align your SEO roadmap directly with MRR and Pipeline, not just traffic.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h2 className="text-white font-bold text-xl mb-4">The Process:</h2>
                        <ul className="space-y-4">
                            {[
                                "Revenue-Intent Keyword Mapping",
                                "Pipeline Forecasting & ROI Modeling",
                                "Competitive Conversion Gap Analysis",
                                "Content-to-Sales Funnel Architecture",
                                "Executive Roadmap Presentation"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-zinc-400 text-sm">
                                    <span className="text-blue-500">→</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h2 className="text-white font-bold text-xl mb-4">Why This?</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            Perfect for B2B Tech & SaaS teams who need strategic clarity and a prioritized backlog that hits business metrics this quarter. Long-term retains are great, but sometimes you just need the playbook to execute in-house.
                        </p>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-0">
                            Over 14 intensive days, we audit your current architecture, map the intent of your hottest leads, and give your writers and developers the exact sprint plan they need to drive measurable MRR from organic search.
                        </p>
                    </div>
                </div>

                <Link href="/contact" className="inline-block w-full text-center md:w-auto px-12 py-5 bg-blue-500 text-black font-black uppercase text-sm tracking-widest rounded-2xl hover:bg-blue-400 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Secure Your Sprint
                </Link>
            </div>
        </main>
    );
}
