"use client";

import React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/blog-data';
import VoiceReader from '@/components/VoiceReader';

const BlogPostPage = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link href="/blog" className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 rotate-180">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        Back to Insights
                    </Link>
                </motion.div>

                {/* Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${post.category === 'GEO' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                post.category === 'AEO' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                    'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                }`}>
                                {post.category}
                            </span>
                            <span className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">{post.date}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-tight">
                            {post.title}
                        </h1>
                    </motion.div>

                    <VoiceReader title={post.title} content={post.content} />
                </div>

                {/* Content */}
                <div className="prose prose-invert max-w-none">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-300 text-lg md:text-xl leading-relaxed space-y-8"
                    >
                        {post.content.split('\n\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </motion.div>

                    {/* Expert Verdict Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 p-8 md:p-12 rounded-3xl bg-blue-600/5 border border-blue-500/20 relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-blue-500/50" />
                                Expert Verdict
                            </h4>
                            <p className="text-white text-xl md:text-2xl font-medium leading-normal italic">
                                &quot;{post.verdict}&quot;
                            </p>
                            <div className="mt-8 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] font-bold text-zinc-400">CK</div>
                                <div>
                                    <p className="text-white text-sm font-bold">Chaitanya Kore</p>
                                    <p className="text-zinc-500 text-xs">Senior SEO & AI Search Professional</p>
                                </div>
                            </div>
                        </div>

                        {/* Background Glows */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[120px] rounded-full" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 blur-[120px] rounded-full" />
                    </motion.div>
                </div>

                {/* Footer Navigation */}
                <div className="mt-24 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-500 text-sm">
                    <p>© 2026 AI Search Insights. Professional Analysis by Chaitanya Kore.</p>
                    <div className="flex gap-8">
                        <Link href="/blog" className="hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]">All Insights</Link>
                        <Link href="/" className="hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]">Portfolio Home</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BlogPostPage;
