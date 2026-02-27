"use client";

import React from 'react';
import Link from 'next/link';

export default function FractionalSeoLead() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-widest">
                    Executive Partnership
                </div>
                <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-8 leading-[0.9]">
                    Fractional <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">SEO Lead</span>
                </h1>

                <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl">
                    High-level SEO leadership for Series A-C SaaS. I join your Slack, guide your product team, and own the organic growth metric.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h3 className="text-white font-bold text-xl mb-4">The Coverage:</h3>
                        <ul className="space-y-4">
                            {[
                                "Product & Engineering SEO Liaison",
                                "Programmatic SEO Architecture",
                                "Content Strategy & Editorial Oversight",
                                "Quarterly Impact Forecasting",
                                "Hiring & Agency Management"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-zinc-400 text-sm">
                                    <span className="text-purple-500">✦</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h3 className="text-white font-bold text-xl mb-4">Availability:</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Limited to 2 active partners at any time to ensure deep strategic integration and real business impact.
                        </p>
                        <div className="pt-6 border-t border-zinc-800">
                            <p className="text-white font-bold text-2xl mb-1">Retainer</p>
                            <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Starting at 5k/mo</p>
                        </div>
                    </div>
                </div>

                <Link href="/contact" className="inline-block w-full text-center md:w-auto px-12 py-5 bg-purple-600 text-white font-black uppercase text-sm tracking-widest rounded-2xl hover:bg-purple-500 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Check Availability
                </Link>
            </div>
        </main>
    );
}
