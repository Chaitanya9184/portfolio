"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Brand SVG Icons
const ScreamingFrogIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M7 10h10" />
        <path d="M7 14h10" />
        <path d="M12 2v20" />
        <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
        <circle cx="8" cy="10" r="1.5" fill="currentColor" />
        <circle cx="16" cy="10" r="1.5" fill="currentColor" />
    </svg>
);

const SeRankingIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
    </svg>
);

const ProRankTrackerIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v20" />
        <path d="m2 12 10-10 10 10" />
        <path d="m2 17 10-10 10 10" />
    </svg>
);

const GaIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 20v-8a2 2 0 0 1 2-2h1" />
        <path d="M9 20v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
        <path d="M17 20v-14a2 2 0 0 1 2-2h2" />
        <path d="M3 20h18" />
    </svg>
);

const GtmIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9h18" />
        <path d="M3 15h18" />
        <path d="M9 3v18" />
        <path d="M15 3v18" />
    </svg>
);

const AhrefsIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
);

const WordpressIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 11l2 6" />
        <path d="M12 11l-2 6" />
        <path d="M14 13h-4" />
        <path d="M12 7v4" />
    </svg>
);

const GscIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M8 11h6" />
        <path d="M11 8v6" />
    </svg>
);

const LookerIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path d="M8 8v8" />
        <path d="M12 12v4" />
        <path d="M16 4v16" />
    </svg>
);

const GenSparkIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="m13 2-2 10h8l-9 10 2-10H4l9-10z" />
    </svg>
);

const ChatGptIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
    </svg>
);

const GeminiIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z" />
        <path d="M12 8v4" />
        <path d="M10 10h4" />
    </svg>
);

const AntiGravityIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8c0 4-4 4-4 4s4 0 4 4 4-4 4-4-4 0-4-4z" className="animate-pulse" />
    </svg>
);

export default function TechStack() {
    const tools = [
        { name: "Screaming Frog", level: "Advanced", icon: <ScreamingFrogIcon />, color: "from-emerald-950/40 to-emerald-900/10", accent: "text-emerald-400", from: "from-emerald-400", glow: "group-hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.3)]" },
        { name: "SE Ranking", level: "Advanced", icon: <SeRankingIcon />, color: "from-blue-950/40 to-blue-900/10", accent: "text-blue-400", from: "from-blue-400", glow: "group-hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)]" },
        { name: "ProRankTracker", level: "Advanced", icon: <ProRankTrackerIcon />, color: "from-indigo-950/40 to-indigo-900/10", accent: "text-indigo-400", from: "from-indigo-400", glow: "group-hover:shadow-[0_0_50px_-10px_rgba(99,102,241,0.3)]" },
        { name: "Google Analytics", level: "Advanced", icon: <GaIcon />, color: "from-amber-950/40 to-orange-900/10", accent: "text-amber-400", from: "from-amber-400", glow: "group-hover:shadow-[0_0_50px_-10px_rgba(245,158,11,0.3)]" },
        { name: "Google Tag Manager", level: "Advanced", icon: <GtmIcon />, color: "from-cyan-950/40 to-sky-900/10", accent: "text-cyan-400", from: "from-cyan-400", glow: "group-hover:shadow-[0_0_50px_-10px_rgba(6,182,212,0.3)]" },
        { name: "Ahrefs", level: "Advanced", icon: <AhrefsIcon />, color: "from-orange-950/40 to-red-900/10", accent: "text-orange-400", from: "from-orange-400", glow: "group-hover:shadow-[0_0_50px_-10px_rgba(249,115,22,0.3)]" },
        { name: "WordPress", level: "Advanced", icon: <WordpressIcon />, color: "from-sky-950/40 to-blue-950/10", accent: "text-sky-400", from: "from-sky-400", glow: "group-hover:shadow-[0_0_50px_-10px_rgba(14,165,233,0.3)]" },
        { name: "Search Console", level: "Advanced", icon: <GscIcon />, color: "from-teal-950/40 to-emerald-950/10", accent: "text-teal-400", from: "from-teal-400", glow: "group-hover:shadow-[0_0_50px_-10px_rgba(20,184,166,0.3)]" },
        { name: "Looker Studio", level: "Advanced", icon: <LookerIcon />, color: "from-violet-950/40 to-purple-950/10", accent: "text-violet-400", from: "from-violet-400", glow: "group-hover:shadow-[0_0_50px_-10px_rgba(139,92,246,0.3)]" },
        { name: "GenSpark", level: "Mid (Learning)", icon: <GenSparkIcon />, color: "from-fuchsia-950/40 to-pink-900/10", accent: "text-fuchsia-400", from: "from-fuchsia-400", glow: "group-hover:shadow-[0_0_50px_-10px_rgba(217,70,239,0.3)]" },
        { name: "ChatGPT", level: "Mid (Learning)", icon: <ChatGptIcon />, color: "from-emerald-950/40 to-teal-900/10", accent: "text-emerald-400", from: "from-emerald-400", glow: "group-hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.3)]" },
        { name: "Gemini", level: "Mid (Learning)", icon: <GeminiIcon />, color: "from-blue-950/40 to-indigo-900/10", accent: "text-blue-400", from: "from-blue-400", glow: "group-hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)]" },
        { name: "Google Antigravity", level: "Just Started", icon: <AntiGravityIcon />, color: "from-red-950/40 to-orange-950/10", accent: "text-red-400", from: "from-red-400", glow: "group-hover:shadow-[0_0_50px_-10px_rgba(239,68,68,0.3)]" },
    ];

    return (
        <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden border-t border-zinc-900 border-dashed">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_60%)] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-500 text-sm tracking-widest uppercase mb-4 font-semibold"
                    >
                        The Arsenal
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl text-white font-bold tracking-tighter mb-6 relative inline-block"
                    >
                        Tech & Tools Stack
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Mastering a sophisticated toolkit that blends industry-standard technical analysis with cutting-edge AI acceleration.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {tools.map((tool, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -8, rotateX: 2, rotateY: 2 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className={`group relative p-8 rounded-[2rem] bg-gradient-to-br ${tool.color} border border-white/5 backdrop-blur-xl transition-all duration-500 hover:border-white/20 ${tool.glow} overflow-hidden`}
                        >
                            {/* Noise Texture Overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

                            {/* Floating Gradient Flare */}
                            <div className={`absolute -top-24 -left-24 w-48 h-48 bg-white/10 blur-[60px] rounded-full group-hover:bg-white/20 transition-colors duration-700`} />

                            <div className="flex items-start justify-between mb-8 relative z-10">
                                <div className={`p-4 rounded-2xl bg-black/40 border border-white/5 ${tool.accent} group-hover:scale-110 group-hover:bg-black/60 transition-all duration-500 shadow-inner`}>
                                    {tool.icon}
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-black opacity-60">Status</span>
                                    <p className={`text-[10px] font-black ${tool.accent} mt-1 uppercase tracking-wider`}>{tool.level}</p>
                                </div>
                            </div>

                            <p className="text-xl text-white font-black tracking-tight mb-8 relative z-10 group-hover:translate-x-1 transition-transform duration-500">{tool.name}</p>

                            {/* Level Indicator Shell */}
                            <div className="relative h-2 w-full bg-black/40 rounded-full overflow-hidden border border-white/5 p-[1px]">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{
                                        width: tool.level.includes("Advanced") ? "95%" :
                                            tool.level.includes("Mid") ? "65%" : "30%"
                                    }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                                    className={`h-full rounded-full bg-gradient-to-r ${tool.from} to-white/60 shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
                                />
                            </div>

                            {/* Subtle scanline effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] -top-[100%] group-hover:top-[100%] transition-all duration-[1.5s] ease-in-out pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Custom styles for the Noise Texture */}
            <style jsx>{`
                .rounded-2rem { border-radius: 2rem; }
            `}</style>
        </section>
    );
}
