"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { blogPosts } from '@/lib/blog-data';

export default function BlogCarousel() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({
        container: sectionRef,
    });

    return (
        <section className="w-full py-32 bg-[#050505] overflow-hidden border-t border-zinc-900 border-dashed">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-4"
                        >
                            Latest Intelligence
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
                        >
                            AI Search <span className="text-zinc-500">& Insights.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/blog"
                            className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                        >
                            View All Insights
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Carousel Container */}
            <div
                ref={sectionRef}
                className="flex gap-6 overflow-x-auto pb-12 px-6 md:px-12 lg:px-24 no-scrollbar snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="min-w-[300px] md:min-w-[400px] snap-start"
                    >
                        <Link href={`/blog/${post.slug}`} className="block group h-full">
                            <div className="relative h-full p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-blue-500/30 hover:bg-zinc-900/50 transition-all flex flex-col">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${post.category === 'GEO' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                        post.category === 'AEO' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                            'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                        }`}>
                                        {post.category}
                                    </span>
                                    <span className="text-zinc-600 text-[9px] uppercase font-bold tracking-widest">{post.date}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-8 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                                    Read Analysis
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 transition-transform group-hover:translate-x-1">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>

                                {/* Subtle Background Icon or Glow */}
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                                    <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Custom Scroll Progress Indicator */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-8 flex justify-center">
                <div className="w-48 h-[2px] bg-zinc-900 rounded-full relative overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-blue-500 origin-left"
                        style={{ scaleX: scrollXProgress }}
                    />
                </div>
            </div>
        </section>
    );
}
