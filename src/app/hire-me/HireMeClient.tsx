"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HireMeClient = () => {
    const valueProps = [
        {
            title: "Revenue Over Rankings",
            description: "Most SEOs stop at traffic. I focus on qualified pipeline and bottom-line revenue impact.",
            icon: "🚀"
        },
        {
            title: "AI First Methodology",
            description: "Leading the shift from legacy SEO to AEO/GEO citation strategies for LLMs.",
            icon: "🤖"
        },
        {
            title: "Deep Technical Edge",
            description: "Direct engineering collaboration to build programmatic & high-performance search infrastructure.",
            icon: "⚡"
        },
        {
            title: "Scale-Proven Strategy",
            description: "Experience managing 10k+ page domains and high-7-figure organic growth budgets.",
            icon: "📈"
        }
    ];

    return (
        <main className="min-h-screen bg-black selection:bg-indigo-500/30 font-sans">
            {/* Standard Brand Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-emerald-500/10 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Header - Aligned with Homepage Brand */}
                    <div className="mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex px-4 py-1 mb-8 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]"
                        >
                            Executive Search & Growth Advisory
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl text-white font-black tracking-tighter mb-8 leading-[0.9] italic"
                        >
                            The Search Era Needs<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 not-italic">New Leadership.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-3xl font-light tracking-tight"
                        >
                            I help Series B-D SaaS platforms bridge the gap between <span className="text-white hover:text-blue-400 transition-colors">technical search execution</span> and <span className="text-white hover:text-emerald-400 transition-colors">enterprise revenue growth</span>.
                        </motion.p>
                    </div>

                    {/* Why Hire Me (The Edge) */}
                    <section className="mb-32">
                        <div className="flex items-end justify-between mb-16 gap-8">
                            <h2 className="text-white font-black text-3xl tracking-tighter uppercase italic">
                                The <span className="text-blue-500 not-italic">Edge</span>
                            </h2>
                            <div className="h-px bg-gradient-to-r from-zinc-800 to-transparent flex-1 mb-3" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {valueProps.map((prop, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-10 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 hover:border-blue-500/20 hover:bg-zinc-900/50 transition-all group"
                                >
                                    <div className="text-2xl mb-8 group-hover:scale-110 transition-transform duration-500">{prop.icon}</div>
                                    <h3 className="text-white font-bold text-xl mb-4 tracking-tight">{prop.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed font-light group-hover:text-zinc-300 transition-colors">{prop.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Service Specialization & Outcomes */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
                        <div className="p-12 rounded-[3rem] bg-zinc-900/20 border border-white/5 space-y-12">
                            <div>
                                <h3 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12">Service Specialization</h3>
                                <div className="space-y-6">
                                    {[
                                        "Programmatic SEO Architecture",
                                        "Generative Engine (GEO) Dominance",
                                        "Entity-Based Knowledge Graphs",
                                        "SSR/Edge-Level Search Optimization"
                                    ].map(item => (
                                        <div key={item} className="flex items-center gap-4 text-zinc-400 group cursor-default">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors" />
                                            <span className="text-xl font-medium tracking-tight group-hover:text-white transition-colors">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-12 rounded-[3rem] bg-zinc-900/20 border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8">
                                <span className="text-[120px] font-black text-white/5 leading-none select-none">Goal</span>
                            </div>
                            <h3 className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12 relative z-10">Strategic Outcomes</h3>
                            <div className="grid grid-cols-1 gap-10 relative z-10">
                                {[
                                    { label: "Pipeline Velocity", detail: "Accelerating predictable organic revenue" },
                                    { label: "Team Maturity", detail: "Building high-output SEO engineering units" },
                                    { label: "Board Alignment", detail: "Translating search data into business value" }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <p className="text-white text-lg font-bold tracking-tight mb-2 italic">{item.label}</p>
                                        <p className="text-zinc-500 text-sm font-light tracking-wide">{item.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Standard Action CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-emerald-500/20 rounded-[3rem]"
                    >
                        <div className="bg-[#0a0a0a] rounded-[2.9rem] p-12 md:p-20 text-center relative overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
                            <h2 className="text-4xl md:text-7xl text-white font-black tracking-tighter mb-12 leading-none uppercase italic">
                                Ready to scale <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 not-italic">Organic Revenue?</span>
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Link href="/contact" className="px-12 py-5 bg-indigo-500 text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-indigo-400 transition-all hover:scale-105 active:scale-95">
                                    Book Strategy Review
                                </Link>
                                <a href="https://linkedin.com/in/chaitanya-kore-342069140" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all font-bold uppercase text-[10px] tracking-[0.3em]">
                                    Detailed Career View
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default HireMeClient;
                </div >
            </div >
        </main >
    );
};

export default HireMeClient;
