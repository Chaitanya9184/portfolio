"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/blog-data';
import SchemaMarkup from "@/components/SchemaMarkup";

const blogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AI Search Insights | AEO, GEO & Technical SEO Blog",
    "description": "Expert analysis and deep dives into the evolution of AI-driven search (GEO/AEO) and advanced technical SEO strategies for 2026.",
    "url": "https://www.chaitanyakore.in/blog/"
};

export default function BlogClient() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 relative inline-block">
                            AI Search <span className="text-blue-500">Insights.</span>
                            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                        </h1>
                        <p className="text-zinc-500 max-w-2xl text-lg md:text-xl leading-relaxed">
                            Deep dives into the evolution of AEO, GEO, and technical SEO in 2026. Expert analysis for the generative search era.
                        </p>
                    </motion.div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/blog/${post.slug}`} className="group block h-full">
                                <div className="h-full bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8 backdrop-blur-xl hover:bg-zinc-800/40 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden flex flex-col">
                                    {/* Category Badge */}
                                    <div className="flex items-center gap-2 mb-6">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${post.category === 'GEO' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                            post.category === 'AEO' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                                'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                            }`}>
                                            {post.category}
                                        </span>
                                        <span className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">{post.date}</span>
                                    </div>

                                    <h2 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                                        {post.title}
                                    </h2>

                                    <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                                        Read Analysis
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>

                                    {/* Hover Glow */}
                                    <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/5 blur-[100px] group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Back to Home Link */}
                <div className="mt-20 flex justify-center">
                    <Link href="/" className="text-zinc-600 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2 border-t border-zinc-900 pt-12 w-full justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 rotate-180">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        Back to Portfolio
                    </Link>
                </div>
            </div>

            <SchemaMarkup schema={blogSchema} />
        </main>
    );
}
