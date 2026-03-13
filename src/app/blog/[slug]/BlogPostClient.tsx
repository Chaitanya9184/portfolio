"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import VoiceReader from '@/components/VoiceReader';
import TableOfContents from '@/components/TableOfContents';
import FAQSection from '@/components/FAQSection';
import BlogCTA from '@/components/BlogCTA';
import type { BlogPost } from '@/lib/blog-data';
import SchemaMarkup from '@/components/SchemaMarkup';

interface BlogPostClientProps {
    post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
    // Custom renderer for Markdown-style headings and paragraphs
    const renderContent = (rawContent: string) => {
        // Parses inline **bold**, *italic*, and [text](url) markdown within a text string
        const parseTextFormat = (text: string): React.ReactNode[] => {
            // Split on bold, italic, and markdown link patterns
            const tokenRegex = /(\*\*.*?\*\*|\*[^*]+\*|_[^_]+_|\[[^\]]+\]\([^)]+\))/g;
            const parts = text.split(tokenRegex);
            return parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <span key={i} className="text-blue-400 font-bold">{part.slice(2, -2)}</span>;
                }
                if ((part.startsWith('*') && part.endsWith('*') && part.length > 2) ||
                    (part.startsWith('_') && part.endsWith('_') && part.length > 2)) {
                    // Recursively parse the inner content so nested links work
                    return <em key={i} className="text-zinc-400 italic">{parseTextFormat(part.slice(1, -1))}</em>;
                }
                // Markdown link: [label](url)
                const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                if (linkMatch) {
                    return (
                        <a
                            key={i}
                            href={linkMatch[2]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline underline-offset-2 hover:text-blue-300 transition-colors"
                        >
                            {linkMatch[1]}
                        </a>
                    );
                }
                return part;
            });
        };

        // Pre-process inline bullets: replace " • " with "\n• " so they are parsed together
        const formattedBullets = rawContent.replace(/(\S)\s*•\s+/g, '$1\n• ');
        // Inject an extra newline after a heading if it is immediately followed by something (like a list)
        const contentWithNewlines = formattedBullets.replace(/^(#{2,6}[^\n]+)\n([^\n])/gm, '$1\n\n$2');
        const paragraphs = contentWithNewlines.split('\n\n').filter(p => p.trim());
        const rendered: React.ReactNode[] = [];

        let i = 0;
        while (i < paragraphs.length) {
            const trimmed = paragraphs[i].trim();

            const isExecutiveSummary = trimmed.toUpperCase().startsWith('## EXECUTIVE SUMMARY');
            const isKeyTakeaways = trimmed.toUpperCase().startsWith('## KEY TAKEAWAYS');

            if (isExecutiveSummary || isKeyTakeaways) {
                const lines = trimmed.split(/\r?\n/).filter(line => line.trim());
                const headerLine = lines[0];
                const initialContent = lines.slice(1);

                const title = headerLine.replace(/^##\s+/, '').trim();
                const id = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                const isSummary = title.toLowerCase().includes('summary');

                const sectionContent: string[] = [...initialContent];
                let j = i + 1;
                while (j < paragraphs.length && !paragraphs[j].trim().startsWith('#')) {
                    sectionContent.push(paragraphs[j].trim());
                    j++;
                }

                rendered.push(
                    <div key={i} id={id} className={`mt-16 mb-12 p-8 md:p-10 rounded-3xl border backdrop-blur-xl relative overflow-hidden group scroll-mt-32 ${isSummary
                        ? 'bg-blue-500/5 border-blue-500/10'
                        : 'bg-emerald-500/5 border-emerald-500/10'
                        }`}>
                        <div className="relative z-10">
                            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] block mb-3 opacity-60 ${isSummary ? 'text-blue-400' : 'text-emerald-400'
                                }`}>
                                {isSummary ? 'Section Overview' : 'Quick Key Points'}
                            </span>
                            <h3 className="!mt-0 !mb-6 text-2xl md:text-3xl font-bold text-white tracking-tight">
                                {title}
                            </h3>

                            <div className="space-y-4">
                                {sectionContent.length > 0 ? sectionContent.map((para, idx) => {
                                    if (para.includes('\n• ') || para.startsWith('• ') || para.startsWith('- ')) {
                                        const items = para.split(/\r?\n/).map(l => l.replace(/^[•-]\s*/, '').trim()).filter(Boolean);
                                        return (
                                            <ul key={idx} className="space-y-3 !mb-0">
                                                {items.map((item, sidx) => (
                                                    <li key={sidx} className="flex gap-3 text-zinc-300 leading-[1.8] text-base md:text-lg">
                                                        <span className={`${isSummary ? 'text-blue-500' : 'text-emerald-500'} mt-1.5 shrink-0`}>
                                                            <div className="w-1.5 h-1.5 rounded-full bg-current" />
                                                        </span>
                                                        <span>{parseTextFormat(item)}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        );
                                    }
                                    return <p key={idx} className="text-zinc-300 text-lg leading-[1.8] !mb-0">{parseTextFormat(para)}</p>;
                                }) : null}
                            </div>
                        </div>
                    </div>
                );
                i = j;
                continue;
            }

            if (trimmed.startsWith('## ')) {
                const text = trimmed.replace(/^##\s+/, '');
                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                rendered.push(<h2 key={i} id={id} className="scroll-mt-32 text-3xl font-bold text-white mt-12 mb-6 tracking-tight">{parseTextFormat(text)}</h2>);
            }
            else if (trimmed.startsWith('### ')) {
                const text = trimmed.replace(/^###\s+/, '');
                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                rendered.push(<h3 key={i} id={id} className="scroll-mt-32 text-2xl font-bold text-white mt-10 mb-4 tracking-tight">{parseTextFormat(text)}</h3>);
            }
            else if (trimmed.startsWith('#### ')) {
                const text = trimmed.replace(/^####\s+/, '');
                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                rendered.push(<h4 key={i} id={id} className="scroll-mt-32 text-xl font-bold text-blue-400 mt-8 mb-4 tracking-tight border-l-2 border-blue-500/30 pl-4">{parseTextFormat(text)}</h4>);
            }
            else if (trimmed.startsWith('##### ')) {
                const text = trimmed.replace(/^#####\s+/, '');
                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                rendered.push(<h5 key={i} id={id} className="scroll-mt-32 text-lg font-bold text-emerald-400/90 mt-6 mb-3 uppercase tracking-wider">{parseTextFormat(text)}</h5>);
            }
            else if (trimmed.startsWith('###### ')) {
                const text = trimmed.replace(/^######\s+/, '');
                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                rendered.push(<h6 key={i} id={id} className="scroll-mt-32 text-base font-bold text-zinc-500 mt-6 mb-2 uppercase tracking-widest">{parseTextFormat(text)}</h6>);
            }
            else if (trimmed.startsWith('• ') || trimmed.startsWith('- ') || trimmed.startsWith('* ') ||
                trimmed.includes('\n• ') || trimmed.includes('\n- ') || trimmed.includes('\n* ')) {
                const lines = trimmed.split('\n');
                // A line is a bullet if it starts with •, -, or *
                const isBullet = (l: string) => /^\s*[•\-*]\s+/.test(l);
                const hasTitle = !isBullet(lines[0]);
                const title = hasTitle ? lines[0] : null;
                const items = (hasTitle ? lines.slice(1) : lines).map(l => l.replace(/^\s*[•\-*]\s+/, ''));

                rendered.push(
                    <div key={i} className="my-12">
                        {title && (
                            <p className="font-bold text-white mb-6 uppercase tracking-[0.2em] text-[10px] opacity-70 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-blue-500/50" />
                                {parseTextFormat(title)}
                            </p>
                        )}
                        <ul className="space-y-4">
                            {items.map((item, idx) => (
                                <li key={idx} className="flex gap-4 text-zinc-300 leading-[1.8] group text-base md:text-lg">
                                    <span className="text-blue-500 mt-1 transition-transform group-hover:scale-125">•</span>
                                    <span className="group-hover:text-zinc-100 transition-colors">{parseTextFormat(item)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            }
            else {
                rendered.push(<p key={i} className="whitespace-pre-wrap text-zinc-300 text-base md:text-lg leading-[1.8] mb-8">{parseTextFormat(trimmed)}</p>);
            }
            i++;
        }
        return rendered;
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.chaitanyakore.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.chaitanyakore.in/blog/"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://www.chaitanyakore.in/blog/${post.slug}`
            }
        ]
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-0 px-6 md:px-12 lg:px-24">
            <SchemaMarkup schema={breadcrumbSchema} />
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

                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-12">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white transition-colors">Insights</Link>
                        <span>/</span>
                        <span className="text-zinc-400">{post.title}</span>
                    </nav>

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
                                <p className="text-white text-xl md:text-2xl font-medium leading-[1.6] italic">
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

