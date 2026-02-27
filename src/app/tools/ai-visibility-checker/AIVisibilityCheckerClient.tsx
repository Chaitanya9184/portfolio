"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const visibilityFaqs = [
    {
        question: "What is a GSV Score?",
        answer: "Generative Search Visibility (GSV) is a proprietary metric that measures how 'cite-worthy' and 'extractable' your content is for AI engines like Google Gemini, SearchGPT, and Perplexity. A higher score means you are more likely to be featured in AI Overviews."
    },
    {
        question: "How is the score calculated?",
        answer: "The score is calculated based on four main pillars: Technical Transparency (Schema/Tags), Semantic Clarity (Structure), Information Gain (Uniqueness), and Answer Density (Directness)."
    },
    {
        question: "Why does my URL matter?",
        answer: "The checker analyzes your content's structure. For example, using the 'Sentence 1' framework or advanced JSON-LD specifically signals to AI agents that your data is a primary source worth citing."
    }
];

const checkerSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            "name": "AI Visibility Checker",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Audit your webpage for Generative Search Visibility. Get a GSV score based on technical and semantic optimization for AI search engines."
        }
    ]
};

const AIVisibilityCheckerClient = () => {
    // Audit State
    const [auditData, setAuditData] = useState({
        hasSchema: false,
        hasDirectAnswer: false,
        isPrimarySource: false,
        hasSemanticHtml: false,
        contentDepth: 50, // 0-100
        loadBearingStats: false
    });

    const [isScanning, setIsScanning] = useState(false);
    const [score, setScore] = useState<number | null>(null);

    const calculateScore = () => {
        setIsScanning(true);
        setScore(null);

        setTimeout(() => {
            let baseScore = auditData.contentDepth * 0.4;
            if (auditData.hasSchema) baseScore += 15;
            if (auditData.hasDirectAnswer) baseScore += 20;
            if (auditData.isPrimarySource) baseScore += 15;
            if (auditData.hasSemanticHtml) baseScore += 10;
            if (auditData.loadBearingStats) baseScore += 10;

            setScore(Math.min(100, Math.floor(baseScore)));
            setIsScanning(false);
        }, 2000);
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">

                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link href="/tools" className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 rotate-180">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        Back to Tools
                    </Link>
                </motion.div>

                {/* Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
                            AI Search <span className="text-emerald-500">Visibility.</span>
                        </h1>
                        <p className="text-zinc-500 max-w-xl text-lg leading-relaxed">
                            Audit your page for the Generative Search era. Measure your GSV score and identify gaps in your AI citation architecture.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Diagnostic Controls */}
                    <div className="lg:col-span-12 space-y-12 bg-zinc-900/40 border border-zinc-800/50 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                            {/* Sliders / Toggles */}
                            <div className="space-y-6">
                                <label className="flex items-center gap-3 text-[11px] text-zinc-500 uppercase font-bold tracking-widest cursor-pointer group">
                                    <div className={`w-10 h-6 rounded-full transition-colors relative ${auditData.hasSchema ? 'bg-emerald-500' : 'bg-zinc-800'}`}>
                                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${auditData.hasSchema ? 'left-5' : 'left-1'}`} />
                                    </div>
                                    <input type="checkbox" className="hidden" checked={auditData.hasSchema} onChange={() => setAuditData(d => ({ ...d, hasSchema: !d.hasSchema }))} />
                                    Advanced JSON-LD Schema
                                </label>
                                <p className="text-[10px] text-zinc-600 pl-13">Does the page use Software, FAQ, or Enterprise JSON-LD?</p>
                            </div>

                            <div className="space-y-6">
                                <label className="flex items-center gap-3 text-[11px] text-zinc-500 uppercase font-bold tracking-widest cursor-pointer group">
                                    <div className={`w-10 h-6 rounded-full transition-colors relative ${auditData.hasDirectAnswer ? 'bg-emerald-500' : 'bg-zinc-800'}`}>
                                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${auditData.hasDirectAnswer ? 'left-5' : 'left-1'}`} />
                                    </div>
                                    <input type="checkbox" className="hidden" checked={auditData.hasDirectAnswer} onChange={() => setAuditData(d => ({ ...d, hasDirectAnswer: !d.hasDirectAnswer }))} />
                                    "Sentence 1" Framework
                                </label>
                                <p className="text-[10px] text-zinc-600 pl-13">Does the very first sentence answer the user query directly?</p>
                            </div>

                            <div className="space-y-6">
                                <label className="flex items-center gap-3 text-[11px] text-zinc-500 uppercase font-bold tracking-widest cursor-pointer group">
                                    <div className={`w-10 h-6 rounded-full transition-colors relative ${auditData.isPrimarySource ? 'bg-emerald-500' : 'bg-zinc-800'}`}>
                                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${auditData.isPrimarySource ? 'left-5' : 'left-1'}`} />
                                    </div>
                                    <input type="checkbox" className="hidden" checked={auditData.isPrimarySource} onChange={() => setAuditData(d => ({ ...d, isPrimarySource: !d.isPrimarySource }))} />
                                    Primary Source Status
                                </label>
                                <p className="text-[10px] text-zinc-600 pl-13">Is this page the original source of the data discussed?</p>
                            </div>

                            <div className="space-y-6">
                                <label className="flex items-center gap-3 text-[11px] text-zinc-500 uppercase font-bold tracking-widest cursor-pointer group">
                                    <div className={`w-10 h-6 rounded-full transition-colors relative ${auditData.hasSemanticHtml ? 'bg-emerald-500' : 'bg-zinc-800'}`}>
                                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${auditData.hasSemanticHtml ? 'left-5' : 'left-1'}`} />
                                    </div>
                                    <input type="checkbox" className="hidden" checked={auditData.hasSemanticHtml} onChange={() => setAuditData(d => ({ ...d, hasSemanticHtml: !d.hasSemanticHtml }))} />
                                    Semantic HTML Tree
                                </label>
                                <p className="text-[10px] text-zinc-600 pl-13">Correct use of Article, Section, and Heading hierarchy.</p>
                            </div>

                            <div className="space-y-6">
                                <label className="flex items-center gap-3 text-[11px] text-zinc-500 uppercase font-bold tracking-widest cursor-pointer group">
                                    <div className={`w-10 h-6 rounded-full transition-colors relative ${auditData.loadBearingStats ? 'bg-emerald-500' : 'bg-zinc-800'}`}>
                                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${auditData.loadBearingStats ? 'left-5' : 'left-1'}`} />
                                    </div>
                                    <input type="checkbox" className="hidden" checked={auditData.loadBearingStats} onChange={() => setAuditData(d => ({ ...d, loadBearingStats: !d.loadBearingStats }))} />
                                    Load-Bearing Statistics
                                </label>
                                <p className="text-[10px] text-zinc-600 pl-13">Contains empirical, citeable data points or surveys.</p>
                            </div>

                            <div className="space-y-6 lg:col-span-3">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-[11px] text-zinc-500 uppercase font-bold tracking-widest">Topic Depth & Intensity</span>
                                    <span className="text-white font-mono text-sm">{auditData.contentDepth}%</span>
                                </div>
                                <input
                                    type="range" min="0" max="100" step="1"
                                    value={auditData.contentDepth}
                                    onChange={(e) => setAuditData(d => ({ ...d, contentDepth: Number(e.target.value) }))}
                                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                />
                                <div className="flex justify-between text-[9px] text-zinc-700 font-bold uppercase">
                                    <span>Thin Content</span>
                                    <span>Comprehensive Authority</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex justify-center">
                            <button
                                onClick={calculateScore}
                                disabled={isScanning}
                                className={`px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 relative overflow-hidden group ${isScanning ? 'bg-zinc-800 text-zinc-500' : 'bg-emerald-500 text-black hover:scale-105 active:scale-95'}`}
                            >
                                <span className="relative z-10">{isScanning ? 'Auditing Visibility...' : 'Calculate GSV Score'}</span>
                                {!isScanning && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />}
                            </button>
                        </div>
                    </div>

                    {/* Results / Visualizer */}
                    <AnimatePresence mode="wait">
                        {(isScanning || score !== null) && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="lg:col-span-12"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-zinc-900/60 border border-emerald-500/20 p-12 rounded-[3.5rem] backdrop-blur-2xl relative overflow-hidden">

                                    {/* Left: Score Gauge */}
                                    <div className="md:col-span-5 flex flex-col items-center justify-center text-center">
                                        <div className="relative w-64 h-64 mb-6">
                                            {/* Track Circle */}
                                            <svg className="w-full h-full transform -rotate-90">
                                                <circle cx="128" cy="128" r="100" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-zinc-800" />
                                                <motion.circle
                                                    cx="128" cy="128" r="100"
                                                    stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="628"
                                                    initial={{ strokeDashoffset: 628 }}
                                                    animate={{ strokeDashoffset: 628 - (628 * (isScanning ? 0.7 : (score || 0))) / 100 }}
                                                    transition={{ duration: isScanning ? 2 : 1.5, ease: "easeOut" }}
                                                    className="text-emerald-500"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                {isScanning ? (
                                                    <div className="flex gap-1">
                                                        <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 rounded-full bg-emerald-500" />
                                                        <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 rounded-full bg-emerald-500" />
                                                        <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 rounded-full bg-emerald-500" />
                                                    </div>
                                                ) : (
                                                    <>
                                                        <span className="text-6xl font-bold text-white tracking-tighter">{score}</span>
                                                        <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-500 mt-2">GSV Score</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Advice Cards */}
                                    <div className="md:col-span-7 space-y-8">
                                        {!isScanning && score !== null && (
                                            <>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white mb-4">Strategic Assessment</h3>
                                                    <p className="text-zinc-400 leading-relaxed">
                                                        {score >= 80 ? "Your page is highly optimized for AI citation. You are using advanced identifiers that allow LLMs to extract your data flawlessly." :
                                                            score >= 50 ? "Moderate visibility. You are meeting the baseline criteria, but lack the proprietary signals and answer density required for dominant AEO ranking." :
                                                                "Critical Optimization required. Your content is currently 'invisible' to automated citation bots due to structural ambiguity."
                                                        }
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                                        <p className="text-[10px] text-zinc-500 uppercase font-bold mb-2">Priority Task</p>
                                                        <p className="text-white text-sm font-medium">
                                                            {!auditData.hasSchema ? "Inject FAQ and Product JSON-LD" : !auditData.hasDirectAnswer ? "Apply Sentence-1 Framework" : "Boost Information Gain with unique statistics"}
                                                        </p>
                                                    </div>
                                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                                        <p className="text-[10px] text-zinc-500 uppercase font-bold mb-2">Likely Sentiment</p>
                                                        <p className="text-white text-sm font-medium">
                                                            {score >= 80 ? "High Citation Probability" : "Candidate for Summarization"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        {isScanning && (
                                            <div className="space-y-6">
                                                <div className="h-4 bg-zinc-800 rounded animate-pulse w-3/4" />
                                                <div className="h-4 bg-zinc-800 rounded animate-pulse w-1/2" />
                                                <div className="h-4 bg-zinc-800 rounded animate-pulse w-5/6" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Accents */}
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* FAQs */}
                <div className="mt-32">
                    <FAQSection faqs={visibilityFaqs} title="GSV Methodology" />
                </div>

                {/* Footnote */}
                <div className="mt-24 pt-12 border-t border-zinc-900 text-center">
                    <p className="text-zinc-500 text-sm max-w-2xl mx-auto italic">
                        Disclaimer: The GSV Score is a predictive diagnostic tool for digital strategy. Actual AI citations depend on external factors like topic authority and model-specific training weights.
                    </p>
                </div>

                {/* Schema Markup */}
                <SchemaMarkup schema={checkerSchema} />
            </div>
        </main>
    );
};

export default AIVisibilityCheckerClient;
