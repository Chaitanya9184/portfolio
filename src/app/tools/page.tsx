import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
    title: 'AI Search & SEO Tools | Professional Growth Utilities',
    description: 'Free professional tools for auditing AI search visibility, forecasting SEO ROI, and optimizing for the generative search era.',
    alternates: {
        canonical: '/tools',
    },
};

const tools = [
    {
        title: "SEO ROI Calculator",
        description: "Professional revenue forecasting based on search volume and ranking opportunity distributions.",
        href: "/roi-calculator", // Keep original for now to avoid breaking existing links
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/20"
    },
    {
        title: "AI Visibility Checker",
        description: "Audit your content for 'Generative Search Visibility' (GSV). Diagnostics for AEO/GEO readiness.",
        href: "/tools/ai-visibility-checker",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v8" />
                <path d="m4.93 4.93 5.66 5.66" />
                <path d="M2 12h8" />
                <path d="m4.93 19.07 5.66-5.66" />
                <path d="M12 22v-8" />
                <path d="m19.07 19.07-5.66-5.66" />
                <path d="M22 12h-8" />
                <path d="m19.07 4.93-5.66 5.66" />
            </svg>
        ),
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20"
    }
];

export default function ToolsHubPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
                        Growth <span className="text-blue-500">Utilities.</span>
                    </h1>
                    <p className="text-zinc-500 text-lg md:text-xl leading-relaxed">
                        Data-driven tools built for the generative search era. Audit your performance, forecast your outcome, and scale your influence.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tools.map((tool, idx) => (
                        <Link key={idx} href={tool.href}>
                            <div className={`group p-8 rounded-[2.5rem] bg-zinc-900/40 border ${tool.borderColor} backdrop-blur-xl relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1`}>
                                <div className="relative z-10">
                                    <div className={`w-12 h-12 rounded-2xl ${tool.bgColor} ${tool.color} flex items-center justify-center mb-6 border border-white/5`}>
                                        {tool.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                                        {tool.title}
                                    </h2>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {tool.description}
                                    </p>

                                    <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                                        Launch Tool
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Background Glow */}
                                <div className={`absolute -bottom-24 -right-24 w-64 h-64 blur-[100px] transition-opacity duration-500 opacity-0 group-hover:opacity-40 ${tool.bgColor}`} />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Coming Soon / Utility Mission */}
                <div className="mt-32 p-12 rounded-[3.5rem] bg-zinc-900/20 border border-white/5 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Why build tools for the open web?</h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                        In an era defined by AI summarization, transparency and data ownership are the only moats. I build these utilities to help brands move from guessing to knowing exactly how they are seen by generative engines.
                    </p>
                </div>
            </div>
        </main>
    );
}
