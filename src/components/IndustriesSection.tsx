"use client";

import React from 'react';
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
        name: 'Local Businesses',
        slug: 'local-seo',
        description: 'Dominate local search results and Google Maps with hyper-targeted Local SEO, Google Business Profile optimisation, and geo-specific content strategies.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/10',
        borderColor: 'border-amber-500/20',
        href: '/service-areas'
    }
];

export default function IndustriesSection() {
    return (
        <section className="w-full py-24 bg-[#0a0a0a] relative overflow-hidden text-center border-t border-zinc-900 border-dashed">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                {/* Header Section */}
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 relative inline-block"
                    >
                        Industries & <span className="text-emerald-500">Expertise.</span>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-zinc-500 max-w-2xl mx-auto text-lg"
                    >
                        Specialized organic growth strategies tailored to the unique technical challenges and search behaviors of high-growth sectors.
                    </motion.p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={(industry as { href?: string }).href ?? `/industries/${industry.slug}`} className="group block h-full text-left">
                                <div className={`h-full bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800/60 transition-all duration-300 relative overflow-hidden flex flex-col`}>

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
