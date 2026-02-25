"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import VoiceReader from '@/components/VoiceReader';
import FAQSection from '@/components/FAQSection';
import BlogCTA from '@/components/BlogCTA';
import type { BlogPost } from '@/lib/blog-data';

interface BlogPostClientProps {
    post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
    // Custom renderer for Markdown-style headings and paragraphs
    const renderContent = (content: string) => {
        const paragraphs = content.split('\n\n').filter(p => p.trim());
        const rendered: React.ReactNode[] = [];

        let i = 0;
        while (i < paragraphs.length) {
            const trimmed = paragraphs[i].trim();

            // Check for Card Sections (Executive Summary or Key Takeaways)
            const isExecutiveSummary = trimmed.toUpperCase().startsWith('## EXECUTIVE SUMMARY');
            const isKeyTakeaways = trimmed.toUpperCase().startsWith('## KEY TAKEAWAYS');

            if (isExecutiveSummary || isKeyTakeaways) {
                const title = trimmed.replace('## ', '');
                const id = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                const contentText = paragraphs[i + 1]?.trim() || '';

                rendered.push(
                    <div key={i} id={id} className="my-16 p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl relative overflow-hidden group scroll-mt-32">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-emerald-500 opacity-60" />

                        <div className="relative mb-8">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500/60 block mb-4">Strategic Brief</span>
                            <p className="!mt-0 !mb-0 text-3xl md:text-5xl font-bold text-white tracking-tighter !bg-none [background-clip:unset] [-webkit-text-fill-color:unset] [-webkit-background-clip:unset] border-none after:hidden flex items-center gap-4">
                                {title.toLowerCase().includes('summary') ? 'Executive Analysis' :
                                    title.toLowerCase().includes('takeaways') ? 'Key Takeaways' : title}
                                <span className="h-[1px] bg-gradient-to-r from-blue-500/30 to-transparent flex-1" />
                            </p>
                        </div>
                        {contentText.includes('\n• ') ? (
                            <ul className="space-y-4">
                                {contentText.split('\n').filter(l => l.startsWith('• ')).map((item, idx) => (
                                    <li key={idx} className="flex gap-4 text-zinc-300 leading-relaxed font-medium text-base md:text-lg">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <span className="flex-1">{item.replace('• ', '')}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium m-0">
                                {contentText}
                            </p>
                        )}
                        {/* Decorative background pulse */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/5 blur-[100px] group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
                    </div>
                );
                i += 2; // Skip the next paragraph as it was merged into the card
                continue;
            }

            // Regular headings with ID for TOC
            if (trimmed.startsWith('## ')) {
                const text = trimmed.replace('## ', '');
                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                rendered.push(<p key={i} id={id} className="scroll-mt-32 text-3xl font-bold text-white mt-12 mb-6 tracking-tight">{text}</p>);
            }
            else if (trimmed.startsWith('### ')) {
                const text = trimmed.replace('### ', '');
                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                rendered.push(<p key={i} id={id} className="scroll-mt-32 text-2xl font-bold text-white mt-10 mb-4 tracking-tight">{text}</p>);
            }
            else if (trimmed.startsWith('#### ')) {
                const text = trimmed.replace('#### ', '');
                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                rendered.push(<p key={i} id={id} className="scroll-mt-32 text-xl font-bold text-zinc-400 mt-8 mb-4">{text}</p>);
            }
            // Bullet points (fallback for other sections)
            else if (trimmed.includes('\n• ')) {
                const lines = trimmed.split('\n');
                const title = lines[0];
                const items = lines.slice(1).map(l => l.replace('• ', ''));
                rendered.push(
                    <div key={i} className="my-12">
                        <p className="font-bold text-white mb-6 uppercase tracking-[0.2em] text-[10px] opacity-70 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-blue-500/50" />
                            {title}
                        </p>
                        <ul className="space-y-4">
                            {items.map((item, idx) => (
                                <li key={idx} className="flex gap-4 text-zinc-300 leading-relaxed group text-base md:text-lg">
                                    <span className="text-blue-500 mt-1 transition-transform group-hover:scale-125">•</span>
                                    <span className="group-hover:text-zinc-100 transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            }
            // Regular paragraph
            else {
                rendered.push(<p key={i} className="whitespace-pre-wrap text-zinc-300 text-base md:text-lg leading-relaxed mb-8">{trimmed}</p>);
            }
            i++;
        }
        return rendered;
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-0 px-6 md:px-12 lg:px-24">
            {/* Single-column content wrapper */}
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
                        <h2 className="sr-only">{post.metaTitle || post.title}</h2>
                    </motion.div>

                    <VoiceReader title={post.title} content={post.content} />
                </div>

                {/* Article Body */}
                <div className="prose prose-invert max-w-none">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        {renderContent(post.content)}
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
                                    <p className="text-zinc-500 text-xs">Senior SEO &amp; AI Search Professional</p>
                                </div>
                            </div>
                        </div>

                        {/* Background Glows */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[120px] rounded-full" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 blur-[120px] rounded-full" />
                    </motion.div>
                </div>

                {/* FAQs — immediately after Expert Verdict */}
                {post.faqs && post.faqs.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-20"
                    >
                        <FAQSection faqs={post.faqs} title="Topic Frequently Asked Questions" />
                    </motion.div>
                )}

                {/* Compact Blog CTA */}
                <div className="mt-12 mb-20">
                    <BlogCTA />
                </div>
            </div>

            {/* Page-level Footer — full width, outside the content column */}
            <footer className="w-full mt-0 py-10 border-t border-zinc-900 border-dashed">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm">
                    <p className="text-xs">© 2026 AI Search Insights. Professional Analysis by Chaitanya Kore.</p>
                    <div className="flex gap-8">
                        <Link href="/blog" className="hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]">All Insights</Link>
                        <Link href="/" className="hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]">Portfolio Home</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
