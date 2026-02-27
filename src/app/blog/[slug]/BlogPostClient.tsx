"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import VoiceReader from '@/components/VoiceReader';
import TableOfContents from '@/components/TableOfContents';
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

            const isExecutiveSummary = trimmed.toUpperCase().startsWith('## EXECUTIVE SUMMARY');
            const isKeyTakeaways = trimmed.toUpperCase().startsWith('## KEY TAKEAWAYS');

            if (isExecutiveSummary || isKeyTakeaways) {
                // Split by any newline sequence and filter empty lines
                const lines = trimmed.split(/\r?\n/).filter(line => line.trim());
                const headerLine = lines[0];
                const initialContent = lines.slice(1);

                const title = headerLine.replace(/^##\s+/, '').trim();
                const id = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                // Case-insensitive check for "summary" to catch "EXECUTIVE SUMMARY" or "Executive Summary"
                const isSummary = title.toLowerCase().includes('summary');

                const sectionContent: string[] = [...initialContent];
                let j = i + 1;
                while (j < paragraphs.length && !paragraphs[j].trim().startsWith('#')) {
                    sectionContent.push(paragraphs[j].trim());
                    j++;
                }

                rendered.push(
                    <div key={i} id={id} className={`mt-16 mb-12 p-8 md:p-12 rounded-[2.5rem] border backdrop-blur-xl relative overflow-hidden group scroll-mt-32 ${isSummary
                            ? 'bg-blue-600/5 border-blue-500/20 shadow-[0_0_50px_-12px_rgba(59,130,246,0.1)]'
                            : 'bg-emerald-600/5 border-emerald-500/20 shadow-[0_0_50px_-12px_rgba(16,185,129,0.1)]'
                        }`}>
                        <div className={`absolute top-0 left-0 w-1.5 h-full opacity-60 bg-gradient-to-b ${isSummary ? 'from-blue-500 to-indigo-600' : 'from-emerald-500 to-teal-600'
                            }`} />

                        <div className="relative z-10">
                            <span className={`text-[10px] font-bold uppercase tracking-[0.4em] block mb-4 ${isSummary ? 'text-blue-400' : 'text-emerald-400'
                                }`}>
                                {isSummary ? 'Strategic Overview' : 'Actionable Insights'}
                            </span>
                            <h2 className="!mt-0 !mb-8 text-3xl md:text-5xl font-bold text-white tracking-tighter flex items-center gap-4">
                                {isSummary ? 'Executive Summary' : 'Key Takeaways'}
                                <span className={`h-[1px] flex-1 ${isSummary ? 'bg-gradient-to-r from-blue-500/30 to-transparent' : 'bg-gradient-to-r from-emerald-500/30 to-transparent'
                                    }`} />
                            </h2>

                            <div className="space-y-6">
                                {sectionContent.length > 0 ? sectionContent.map((para, idx) => {
                                    if (para.includes('\n• ') || para.startsWith('• ') || para.startsWith('- ')) {
                                        const items = para.split(/\r?\n/).map(l => l.replace(/^[•-]\s*/, '').trim()).filter(Boolean);
                                        return (
                                            <ul key={idx} className="space-y-4 !mb-0">
                                                {items.map((item, sidx) => (
                                                    <li key={sidx} className="flex gap-4 text-white font-medium leading-relaxed group text-lg md:text-xl">
                                                        <span className={`${isSummary ? 'text-blue-500' : 'text-emerald-500'} mt-1.5 shrink-0`}>
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        );
                                    }
                                    return <p key={idx} className="text-zinc-200 text-xl font-medium leading-relaxed !mb-0">{para}</p>;
                                }) : (
                                    <p className="text-zinc-400 italic">No content found for this section.</p>
                                )}
                            </div>
                        </div>
                        <div className={`absolute -bottom-24 -right-24 w-64 h-64 blur-[100px] transition-colors pointer-events-none ${isSummary ? 'bg-blue-500/10' : 'bg-emerald-500/10'
                            }`} />
                    </div>
                );
                i = j;
                continue;
            }

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
            else {
                rendered.push(<p key={i} className="whitespace-pre-wrap text-zinc-300 text-base md:text-lg leading-relaxed mb-8">{trimmed}</p>);
            }
            i++;
        }
        return rendered;
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-0 px-6 md:px-12 lg:px-24">

            {/* ── ZONE 1: Two-column — sticky TOC left + article content right ── */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

                {/* Left: sticky On This Page index */}
                <aside className="hidden lg:block w-64 shrink-0 sticky top-32 self-start">
                    <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur-sm">
                        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4 pb-3 border-b border-zinc-800/60">On This Page</p>
                        <TableOfContents content={post.content} inline />
                    </div>
                </aside>

                {/* Right: article content */}
                <div className="flex-1 min-w-0 max-w-4xl">

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
                    <div className="mb-8">
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

                        {/* Expert Verdict */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-16 p-8 md:p-12 rounded-3xl bg-blue-600/5 border border-blue-500/20 relative overflow-hidden group"
                        >
                            <div className="relative z-10">
                                <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                                    <span className="w-8 h-[1px] bg-blue-500/50" />
                                    Expert Verdict
                                </h3>
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
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[120px] rounded-full" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 blur-[120px] rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* ── END ZONE 1 ── */}

            {/* ── ZONE 2: Full-width — FAQs, CTA, Footer ── */}
            <div className="max-w-7xl mx-auto mt-24">

                {/* FAQs */}
                {post.faqs && post.faqs.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <FAQSection faqs={post.faqs} title="Topic Frequently Asked Questions" />
                    </motion.div>
                )}

                {/* Compact Blog CTA */}
                <div className="mt-12 mb-12">
                    <BlogCTA />
                </div>
            </div>


        </main>
    );
}

