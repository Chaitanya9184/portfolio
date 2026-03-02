"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HireMeClient = () => {
    const valueProps = [
        {
            title: "Revenue Over Rankings",
            description: "Most SEOs stop at traffic. I focus on qualified pipeline and bottom-line revenue impact.",
            icon: "⚜️"
        },
        {
            title: "AI First Methodology",
            description: "Leading the shift from legacy SEO to AEO/GEO citation strategies for LLMs.",
            icon: "✧"
        },
        {
            title: "Deep Technical Edge",
            description: "Direct engineering collaboration to build programmatic & high-performance search infrastructure.",
            icon: "⚙️"
        },
        {
            title: "Scale-Proven Strategy",
            description: "Experience managing 10k+ page domains and high-7-figure organic growth budgets.",
            icon: "◈"
        }
    ];

    return (
        <main className="min-h-screen bg-[#050505] selection:bg-[#D4AF37]/30 font-sans">
            {/* Background Texture & Glows */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-900/50 blur-[100px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-[0.03]" />
            </div>

            <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Header - Executive Style */}
                    <div className="mb-32 border-l border-[#D4AF37]/20 pl-8 md:pl-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.4em] mb-6"
                        >
                            Executive Search & Growth Advisory
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-9xl text-white font-light tracking-tighter mb-8 leading-[0.8] uppercase"
                        >
                            Chaitanya <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A028] font-black italic">Kore</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-zinc-500 text-xl md:text-3xl leading-snug max-w-3xl font-light tracking-tight"
                        >
                            Bridging the definitive gap between <span className="text-zinc-200">technical execution</span> and <span className="text-[#D4AF37]">enterprise revenue growth</span>.
                        </motion.p>
                    </div>

                    {/* Why Hire Me (The Edge) */}
                    <section className="mb-40">
                        <div className="flex items-end justify-between mb-16 gap-8">
                            <h2 className="text-white font-black text-4xl tracking-tighter uppercase italic">
                                The Value <span className="text-[#D4AF37] not-italic">Proposition</span>
                            </h2>
                            <div className="h-px bg-gradient-to-r from-[#D4AF37]/40 to-transparent flex-1 mb-4 hidden md:block" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                            {valueProps.map((prop, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-10 bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 hover:border-[#D4AF37]/30 transition-all duration-700 group relative overflow-hidden"
                                >
                                    <div className="text-[#D4AF37]/50 text-4xl mb-8 group-hover:scale-110 group-hover:text-[#D4AF37] transition-all duration-500">{prop.icon}</div>
                                    <h3 className="text-zinc-100 font-bold text-xl mb-4 tracking-tight uppercase group-hover:text-white transition-colors">{prop.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed font-light group-hover:text-zinc-400 transition-colors uppercase tracking-wider">{prop.description}</p>
                                    {/* Gold Accent Line */}
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Leadership Grid - Editorial Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
                        <div className="space-y-16">
                            <div>
                                <h3 className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.5em] mb-8 border-b border-[#D4AF37]/10 pb-4 inline-block">Service Specialization</h3>
                                <div className="space-y-6">
                                    {[
                                        "Programmatic SEO Architecture",
                                        "Generative Engine (GEO) Dominance",
                                        "Entity-Based Knowledge Graphs",
                                        "SSR/Edge-Level Search Optimization"
                                    ].map(item => (
                                        <div key={item} className="flex items-center justify-between group cursor-default">
                                            <span className="text-zinc-300 text-2xl font-light tracking-tight group-hover:text-[#D4AF37] transition-colors">{item}</span>
                                            <div className="w-8 h-px bg-zinc-800 group-hover:w-16 group-hover:bg-[#D4AF37] transition-all duration-500" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-900/10 p-12 rounded-[2rem] border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8">
                                <span className="text-[120px] font-black text-white/5 leading-none select-none">Impact</span>
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-12 relative z-10 tracking-tighter italic">Leadership <span className="text-[#D4AF37] not-italic">& Outcomes</span></h3>
                            <div className="grid grid-cols-1 gap-8 relative z-10">
                                {[
                                    { label: "Pipeline Velocity", detail: "Accelerating predictable organic revenue" },
                                    { label: "Team Maturity", detail: "Building high-output SEO engineering units" },
                                    { label: "Board Alignment", detail: "Translating search data into business value" }
                                ].map((item, i) => (
                                    <div key={i} className="group">
                                        <p className="text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-zinc-400 text-lg font-light tracking-tight transition-colors group-hover:text-zinc-200">{item.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* High-End CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative text-center py-32 border-t border-b border-zinc-900"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />
                        <h2 className="text-5xl md:text-8xl text-white font-black tracking-tighter mb-12 leading-none uppercase italic">
                            Request <span className="text-[#D4AF37] not-italic">Consultation</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/contact" className="group relative px-16 py-6 bg-transparent text-white font-black uppercase text-xs tracking-[0.3em] overflow-hidden transition-all">
                                <div className="absolute inset-0 bg-white scale-y-100 group-hover:scale-y-0 transition-transform duration-500 origin-top" />
                                <div className="absolute inset-0 border border-white" />
                                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">Secure Strategy Review</span>
                            </Link>
                            <a href="https://linkedin.com/in/chaitanya-kore-342069140" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#D4AF37] transition-all font-bold uppercase text-[10px] tracking-[0.4em]">
                                Digital Footprint / LinkedIn
                            </a>
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
