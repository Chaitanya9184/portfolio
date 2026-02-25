"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const roiFaqs = [
    {
        question: "How accurate is this SEO ROI calculator?",
        answer: "This calculator provides a directional forecast based on standard industry CTR curves (like the Advanced Web Ranking CTR study) and your specific business metrics. While it's a powerful tool for projecting potential revenue, real-world rankings fluctuate daily based on algorithm updates and competitor actions."
    },
    {
        question: "What is the source of the Click-Through Rate (CTR) data?",
        answer: "We use a blended average of modern CTR studies, weighted towards non-branded, commercial intent queries. For example, Rank #1 typically sees a ~39% CTR, while Rank #5 drops to ~5%. These metrics reflect a standard desktop/mobile blend without heavy AI Overview interference."
    },
    {
        question: "Should I input AOV or LTV for the 'Avg. Customer Value'?",
        answer: "It depends on your business model. For eCommerce, use Average Order Value (AOV) unless you have high recurring purchases. For SaaS or B2B Enterprise, always use Customer Lifetime Value (LTV), as the initial monthly subscription fee does not reflect the true value of acquiring an organic customer."
    },
    {
        question: "Why is the target position only up to #10?",
        answer: "Page 2 of Google captures less than 1% of total clicks. Ranking #11 or #50 generates functionally the same amount of traffic (near zero). SEO ROI focuses on moving keywords from Page 2 to Page 1, or moving them from the bottom of Page 1 to the top 3 spots."
    },
    {
        question: "How should I calculate my Monthly SEO Investment?",
        answer: "Factor in the fully loaded cost of your organic growth program. This includes retainer fees for an SEO consultant/agency, content production costs (freelancers, tools), and technical development hours required to implement the recommended optimizations."
    }
];

const roiSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            "name": "SEO ROI Calculator",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            },
            "description": "Calculate the potential revenue and ROI of your SEO investment based on search volume, CTR distributions, and conversion metrics."
        },
        {
            "@type": "FAQPage",
            "mainEntity": roiFaqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        }
    ]
};

const SeoRoiCalculatorClient = () => {
    // Advanced Calculator States
    const [searchVolume, setSearchVolume] = useState(50000);
    const [currentRank, setCurrentRank] = useState(8);
    const [targetRank, setTargetRank] = useState(1);
    const [convRate, setConvRate] = useState(2.5);
    const [aov, setAov] = useState(150);
    const [cost, setCost] = useState(3000);

    // CTR Benchmarks (Industry Standard)
    const ctrMap: Record<number, number> = {
        1: 39.6, 2: 18.4, 3: 10.1, 4: 7.6, 5: 5.4,
        6: 4.1, 7: 3.0, 8: 2.1, 9: 1.7, 10: 1.3
    };

    // Live Search Ticker
    const [liveSearches, setLiveSearches] = useState(0);
    const SEARCHES_PER_SEC = 99000;

    useEffect(() => {
        const startTime = Date.now();
        const interval = setInterval(() => {
            const elapsed = (Date.now() - startTime) / 1000;
            setLiveSearches(Math.floor(elapsed * SEARCHES_PER_SEC));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // Derived Metrics
    const currentCTR = ctrMap[currentRank] || 1;
    const targetCTR = ctrMap[targetRank] || 39.6;

    const currentTraffic = searchVolume * (currentCTR / 100);
    const targetTraffic = searchVolume * (targetCTR / 100);
    const incrementalTraffic = targetTraffic - currentTraffic;

    const currentRevenue = currentTraffic * (convRate / 100) * aov;
    const targetRevenue = targetTraffic * (convRate / 100) * aov;
    const incrementalRevenue = targetRevenue - currentRevenue;

    const monthlyProfit = incrementalRevenue - cost;
    const annualOpportunity = incrementalRevenue * 12;
    const roi = cost > 0 ? (monthlyProfit / cost) * 100 : 0;

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24 selection:bg-blue-500/30">
            <div className="max-w-6xl mx-auto">

                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link href="/" className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 rotate-180">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        Back to Portfolio
                    </Link>
                </motion.div>

                {/* Header & Live Ticker */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
                            SEO ROI <span className="text-blue-500">Opportunity.</span>
                        </h1>
                        <p className="text-zinc-500 max-w-xl text-lg leading-relaxed">
                            Professional growth forecasting based on Search Volume and Ranking Opportunity. Calculate the hidden revenue trapped in your current search positions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-xl rounded-3xl p-6 min-w-[300px]"
                    >
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-2">Google Searches (Live)</p>
                        <div className="text-3xl font-mono font-bold text-blue-400">
                            {liveSearches.toLocaleString()}
                        </div>
                        <p className="text-[9px] text-zinc-600 mt-2 italic">*Global searches executed since you landed here.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Inputs Section */}
                    <div className="lg:col-span-12 space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                            {/* Monthly Search Volume */}
                            <div className="space-y-6">
                                <label className="flex justify-between text-[11px] text-zinc-500 uppercase font-bold tracking-widest">
                                    <span>Monthly Search Volume</span>
                                    <span className="text-white">{searchVolume.toLocaleString()}</span>
                                </label>
                                <input
                                    type="range" min="1000" max="500000" step="1000"
                                    value={searchVolume} onChange={(e) => setSearchVolume(Number(e.target.value))}
                                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                                <div className="flex justify-between text-[9px] text-zinc-700 font-bold uppercase">
                                    <span>1k</span>
                                    <span>500k</span>
                                </div>
                            </div>

                            {/* Current Rank */}
                            <div className="space-y-6">
                                <label className="flex justify-between text-[11px] text-zinc-500 uppercase font-bold tracking-widest">
                                    <span>Current Avg. Position</span>
                                    <span className="text-white">#{currentRank}</span>
                                </label>
                                <input
                                    type="range" min="1" max="10" step="1"
                                    value={currentRank} onChange={(e) => setCurrentRank(Number(e.target.value))}
                                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                                <div className="flex justify-between text-[9px] text-zinc-700 font-bold uppercase">
                                    <span>#1</span>
                                    <span>#10</span>
                                </div>
                                <p className="text-[9px] text-zinc-600 uppercase tracking-tight">Estimated CTR: {currentCTR}%</p>
                            </div>

                            {/* Target Rank */}
                            <div className="space-y-6">
                                <label className="flex justify-between text-[11px] text-zinc-500 uppercase font-bold tracking-widest">
                                    <span>Target Avg. Position</span>
                                    <span className="text-blue-500">#{targetRank}</span>
                                </label>
                                <input
                                    type="range" min="1" max="10" step="1"
                                    value={targetRank} onChange={(e) => setTargetRank(Number(e.target.value))}
                                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                                <div className="flex justify-between text-[9px] text-zinc-700 font-bold uppercase">
                                    <span>#1</span>
                                    <span>#10</span>
                                </div>
                                <p className="text-[9px] text-blue-500/60 uppercase tracking-tight">Target CTR: {targetCTR}%</p>
                            </div>

                            {/* Conversion Rate */}
                            <div className="space-y-6">
                                <label className="flex justify-between text-[11px] text-zinc-500 uppercase font-bold tracking-widest">
                                    <span>Conversion Rate (%)</span>
                                    <span className="text-white">{convRate}%</span>
                                </label>
                                <input
                                    type="range" min="0.1" max="15" step="0.1"
                                    value={convRate} onChange={(e) => setConvRate(Number(e.target.value))}
                                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                            </div>

                            {/* AOV / LTV */}
                            <div className="space-y-6">
                                <label className="flex justify-between text-[11px] text-zinc-500 uppercase font-bold tracking-widest">
                                    <span>Avg. Customer Value ($)</span>
                                    <span className="text-white">${aov}</span>
                                </label>
                                <input
                                    type="range" min="10" max="5000" step="10"
                                    value={aov} onChange={(e) => setAov(Number(e.target.value))}
                                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                            </div>

                            {/* Investment */}
                            <div className="space-y-6">
                                <label className="flex justify-between text-[11px] text-zinc-500 uppercase font-bold tracking-widest">
                                    <span>Monthly SEO Investment</span>
                                    <span className="text-white">${cost.toLocaleString()}</span>
                                </label>
                                <input
                                    type="range" min="1000" max="50000" step="500"
                                    value={cost} onChange={(e) => setCost(Number(e.target.value))}
                                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

                        {/* Traffic Gain */}
                        <motion.div layout className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 backdrop-blur-sm">
                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-4 block">Monthly Traffic Gain</span>
                            <div className="text-4xl font-bold text-white mb-2">
                                +{Math.floor(incrementalTraffic).toLocaleString()}
                            </div>
                            <div className="text-xs text-blue-500 font-bold uppercase">Target: {Math.floor(targetTraffic).toLocaleString()} visits</div>
                        </motion.div>

                        {/* Revenue Opportunity */}
                        <motion.div layout className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 backdrop-blur-sm">
                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-4 block">Monthly Revenue Gain</span>
                            <div className="text-4xl font-bold text-white mb-2">
                                ${Math.floor(incrementalRevenue).toLocaleString()}
                            </div>
                            <div className="text-xs text-blue-500 font-bold uppercase">Post-Growth Forecast</div>
                        </motion.div>

                        {/* Annual Opportunity */}
                        <motion.div layout className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group">
                            <span className="text-[10px] text-blue-400 uppercase tracking-widest font-bold mb-4 block">Annual Opportunity</span>
                            <div className="text-4xl font-bold text-white mb-2">
                                ${Math.floor(annualOpportunity).toLocaleString()}
                            </div>
                            <div className="text-xs text-blue-400 font-bold uppercase">Incremental Revenue</div>
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full" />
                        </motion.div>

                        {/* Estimated ROI */}
                        <motion.div layout className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
                            <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-bold mb-4 block">Predicted ROI</span>
                            <div className="text-4xl font-bold text-white mb-1">
                                {roi.toFixed(0)}%
                            </div>
                            <div className="text-xs text-emerald-400 font-bold uppercase">Efficiency Ratio</div>
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-emerald-500/10 blur-2xl rounded-full" />
                        </motion.div>

                    </div>

                </div>

                {/* FAQs */}
                <div className="mt-24">
                    <FAQSection faqs={roiFaqs} title="Calculator FAQs" />
                </div>

                {/* Footnote */}
                <div className="mt-24 pt-12 border-t border-zinc-900 text-center">
                    <p className="text-zinc-500 text-sm max-w-2xl mx-auto italic">
                        Disclaimer: This calculator provides estimates based on your inputs. Real-world SEO ROI depends on competition, technical health, and market volatility in 2026 search ecosystems (AEO/GEO).
                    </p>
                </div>

                {/* Schema Markup */}
                <SchemaMarkup schema={roiSchema} />
            </div>
        </main>
    );
};

export default SeoRoiCalculatorClient;
