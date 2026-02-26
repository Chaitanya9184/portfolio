"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ChallengesIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
    </svg>
);

const StrategyIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

const CircularProgress = ({ value, label, color, size = 120 }: { value: string, label: string, color: string, size?: number }) => {
    const rawValue = parseFloat(value.replace('%', ''));
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    // Cap percentage at 100 for visual ring, though data can be higher
    const percentage = Math.min(rawValue, 100);
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative" style={{ width: size, height: size }}>
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                    {/* Background track */}
                    <circle
                        cx="50" cy="50" r={radius}
                        className="stroke-zinc-800"
                        strokeWidth="8" fill="transparent"
                    />
                    {/* Animated Progress */}
                    <motion.circle
                        cx="50" cy="50" r={radius}
                        className={`stroke-current ${color}`}
                        strokeWidth="8" fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: offset }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">+{value}</span>
                </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">{label}</span>
        </div>
    );
};

export default function AgencyCaseStudy() {
    const challenges = [
        { title: "Low SERP Visibility", text: "Limited rankings for relevant organic keywords and minimal non-branded search presence." },
        { title: "Local SEO Gaps", text: "Location-based optimizations were not properly implemented, impacting regional reach." },
        { title: "Technical & On-Page Issues", text: "Missing/inconsistent meta tags, 404 errors, missing schema, and indexing inconsistencies." },
        { title: "Irregular Content", text: "Inconsistent blog publishing limited content freshness and topical authority growth." }
    ];

    const strategies = [
        {
            category: "Technical & Local SEO",
            items: ["Comprehensive technical SEO audit", "Resolved indexing and site health issues", "Fixed NAP inconsistencies", "Optimized Google Business Profile"]
        },
        {
            category: "On-Page Optimisation",
            items: ["Optimized core service pages with target keywords", "Fixed non-sequential H1 tags", "Improved heading hierarchy", "Optimized meta titles and descriptions"]
        },
        {
            category: "Content Strategy",
            items: ["Created blog topic recommendations for high-intent keywords", "Advised on long-term topical authority structure", "Provided consistent publishing guidance"]
        },
        {
            category: "CRO & UX Optimisation",
            items: ["Designed dedicated CTAs with service-specific messaging", "Improved CTA placement for better conversions", "Enhanced overall user flow for lead actions"]
        }
    ];

    return (
        <section className="relative w-full py-16 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden border-t border-zinc-900 border-dashed">
            {/* Background accents */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-12 items-end mb-12">
                    <div className="flex-1">
                        <p className="text-emerald-500 text-sm tracking-widest uppercase mb-4 font-semibold">Featured Case Study</p>
                        <h2 className="text-5xl md:text-6xl text-white font-bold tracking-tighter mb-6 relative inline-block">
                            Growth Strategy for a <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">Digital Marketing Agency</span>
                            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-emerald-400 to-transparent rounded-full" />
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl font-light">
                            A comprehensive 6-month engagement focusing on technical SEO, targeted content strategy,
                            local search visibility, and UX improvements to drive massive increases in qualified leads and key conversion events.
                        </p>
                    </div>
                </div>

                {/* Challenges & Strategy Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

                    {/* Challenges */}
                    <div className="p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 border border-zinc-700 shadow-inner">
                                <ChallengesIcon />
                            </span>
                            <span className="tracking-tight">Initial Challenges</span>
                        </h3>
                        <div className="space-y-6">
                            {challenges.map((challenge, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 mt-2.5 shrink-0" />
                                    <div>
                                        <p className="text-zinc-200 font-semibold mb-1 text-base tracking-tight">{challenge.title}</p>
                                        <p className="text-sm text-zinc-400 leading-relaxed font-normal">{challenge.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Strategy */}
                    <div className="p-10 rounded-3xl bg-gradient-to-br from-emerald-900/10 to-indigo-900/10 border border-emerald-900/30 backdrop-blur-sm shadow-2xl shadow-emerald-900/20">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/20 shadow-inner">
                                <StrategyIcon />
                            </span>
                            Execution Strategy
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {strategies.map((strategy, idx) => (
                                <div key={idx} className="space-y-3">
                                    <p className="text-emerald-400 font-bold text-xs uppercase tracking-[0.2em]">{strategy.category}</p>
                                    <ul className="space-y-3">
                                        {strategy.items.map((item, i) => (
                                            <li key={i} className="text-sm text-zinc-400 flex gap-2 items-start leading-relaxed font-normal">
                                                <span className="text-emerald-500/50 mt-1">›</span>
                                                <span className="">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Growth Impact Dashboard */}
                <div className="relative">
                    <div className="text-center mb-8">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter relative inline-block">
                            6-Month Impact Dashboard
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-zinc-500 to-transparent rounded-full" />
                        </h3>
                        <p className="text-zinc-400 text-lg font-light">Performance growth across high-intent conversion metrics.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Hero Metric: Key Events */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="md:col-span-2 lg:row-span-2 p-12 rounded-[2.5rem] bg-gradient-to-br from-emerald-500/20 to-zinc-900 border border-emerald-500/30 flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-emerald-500/10"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-emerald-500/20 transition-colors duration-500" />
                            <div>
                                <p className="text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Core Objective</p>
                                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Key Events Increase</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium">Direct attribution to conversion-focused local SEO optimizations.</p>
                            </div>
                            <div className="mt-12 flex items-baseline gap-2">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="text-8xl md:text-9xl font-black text-emerald-500 tracking-tighter drop-shadow-2xl"
                                >
                                    +380<span className="text-4xl md:text-5xl ml-1">%</span>
                                </motion.span>
                            </div>
                        </motion.div>

                        {/* Impressions Card */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 flex flex-col justify-center gap-4 relative group"
                        >
                            <div className="text-5xl font-bold text-blue-400 tracking-tighter drop-shadow-lg">+296%</div>
                            <div>
                                <p className="text-zinc-200 font-bold text-sm tracking-tight mb-1">Impressions</p>
                                <p className="text-zinc-500 text-xs font-light">Expanded reach via high-intent keyword ranking improvements.</p>
                            </div>
                        </motion.div>

                        {/* Engagement Time Card */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 flex flex-col justify-center gap-4 relative group"
                        >
                            <div className="text-5xl font-bold text-indigo-400 tracking-tighter drop-shadow-lg">+40%</div>
                            <div>
                                <p className="text-zinc-200 font-bold text-sm tracking-tight mb-1">Engagement</p>
                                <p className="text-zinc-500 text-xs font-light">Improved user flow and page-level UX enhancements.</p>
                            </div>
                        </motion.div>

                        {/* Circular Metrics (Bottom Row) */}
                        <div className="md:col-span-2 p-10 rounded-[2.5rem] bg-zinc-900/30 border border-zinc-800 flex items-center justify-around gap-8 md:gap-12 flex-wrap">
                            <CircularProgress value="18%" label="Organic Clicks" color="text-purple-500" />
                            <div className="w-px h-16 bg-zinc-800 hidden sm:block" />
                            <CircularProgress value="9.5%" label="Total Users" color="text-pink-500" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
