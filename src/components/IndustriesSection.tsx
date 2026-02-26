"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const industries = [
    {
        name: 'SaaS & Technology',
        slug: 'saas',
        description: 'Accelerate user acquisition and MRR growth with targeted technical SEO and AI-driven content strategies for B2B SaaS platforms.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/20'
    },
    {
        name: 'Enterprise eCommerce',
        slug: 'ecommerce',
        description: 'Dominate product categories, optimize faceted navigation, and maximize visibility across Search and generative AI shopping experiences.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
        ),
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/20'
    },
    {
        name: 'B2B Enterprise',
        slug: 'b2b-tech',
        description: 'Generate high-quality leads and establish topical authority through rigorous technical optimization and comprehensive content clusters.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/20'
    },
    {
        name: 'Healthcare & MedTech',
        slug: 'healthcare',
        description: 'Drive secure patient acquisition through E-E-A-T optimization, strict medical schema, and YMYL authority building.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/20'
    },
    {
        name: 'Real Estate & PropTech',
        slug: 'real-estate',
        description: 'Outrank massive aggregators with hyper-local neighborhood strategies, property schema, and technical architecture.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        color: 'text-cyan-400',
        bgColor: 'bg-cyan-500/10',
        borderColor: 'border-cyan-500/20'
    },
    {
        name: 'Finance & Fintech',
        slug: 'finance',
        description: 'Engineer digital trust and compliance-driven organic growth for banks, advisory firms, and complex Fintech products.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        color: 'text-violet-400',
        bgColor: 'bg-violet-500/10',
        borderColor: 'border-violet-500/20'
    },
    {
        name: 'Home Services',
        slug: 'home-services',
        description: 'Dominate the Google Map Pack and local search to intercept high-intent customers and lower reliance on paid leads.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        color: 'text-orange-400',
        bgColor: 'bg-orange-500/10',
        borderColor: 'border-orange-500/20'
    }
];

export default function IndustriesSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="w-full py-24 bg-[#0a0a0a] relative overflow-hidden text-center border-t border-zinc-900 border-dashed">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tighter relative inline-block text-left"
                    >
                        Industries & <br className="hidden md:block" /><span className="text-emerald-500">Expertise.</span>
                        <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
                    </motion.h2>

                    {/* Desktop Navigation Controls */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="p-4 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all group"
                            aria-label="Scroll left"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 group-hover:-translate-x-1 transition-transform"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-4 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all group"
                            aria-label="Scroll right"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                {/* Industries Carousel */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-4 -mx-4 md:px-0 md:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden items-stretch"
                >
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.slug}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                            className="flex-none w-[85vw] sm:w-[340px] md:w-[380px] snap-center shrink-0 h-auto"
                        >
                            <Link href={(industry as { href?: string }).href ?? `/industries/${industry.slug}`} className="group block h-full text-left">
                                <div className={`h-full bg-zinc-950 border border-zinc-800/60 rounded-3xl p-8 hover:bg-zinc-900 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col`}>

                                    {/* Subtle Top Glow for Card definition */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${industry.color}`} />

                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl ${industry.bgColor} ${industry.color} flex items-center justify-center mb-6 border ${industry.borderColor}`}>
                                        {industry.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                        {industry.name}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">
                                        {industry.description}
                                    </p>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-zinc-500 group-hover:text-emerald-400 transition-colors text-xs font-bold uppercase tracking-widest mt-auto">
                                        Explore Solutions
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>

                                    {/* Hover gradient effect */}
                                    <div className="absolute -inset-px rounded-3xl border-2 border-transparent group-hover:border-emerald-500/20 transition-all duration-300 pointer-events-none" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <Link href="/industries" className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-emerald-500 hover:text-black transition-all duration-300 group">
                        View All Industries
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
