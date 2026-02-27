"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TableOfContents from './TableOfContents';
import VoiceReader from './VoiceReader';
import FAQSection from './FAQSection';
import type { ClusterPage } from '@/lib/cluster-data';

interface ClusterClientProps {
    cluster: ClusterPage;
}

export default function ClusterClient({ cluster }: ClusterClientProps) {
    const renderContent = (content: string) => {
        // Split by double newline to get blocks
        const blocks = content.split('\n\n');
        const elements: React.ReactNode[] = [];
        let currentList: React.ReactNode[] = [];
        let listKeyCounter = 0;

        const parseTextFormat = (text: string) => {
            // Very simple markdown bold parser (handles **text**)
            const parts = text.split(/(\*\*.*?\*\*)/g);
            return parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="text-white bg-white/10 px-1 rounded font-bold">{part.slice(2, -2)}</strong>;
                }
                return part;
            });
        };

        const flushList = () => {
            if (currentList.length > 0) {
                elements.push(
                    <ul key={`list-${listKeyCounter++}`} className="list-none mb-8 space-y-4">
                        {currentList}
                    </ul>
                );
                currentList = [];
            }
        };

        blocks.forEach((block, blockIndex) => {
            // Check for headings first (usually isolated blocks)
            const trimmedBlock = block.trim();
            if (!trimmedBlock) return;

            if (trimmedBlock.startsWith('## ')) {
                flushList();
                const text = trimmedBlock.replace('## ', '');
                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                elements.push(<h2 key={`h2-${blockIndex}`} id={id} className="text-3xl md:text-5xl font-bold text-white mt-16 mb-8 tracking-tighter scroll-mt-32">{parseTextFormat(text)}</h2>);
                return;
            }
            if (trimmedBlock.startsWith('### ')) {
                flushList();
                const text = trimmedBlock.replace('### ', '');
                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                elements.push(<h3 key={`h3-${blockIndex}`} id={id} className="text-2xl font-bold text-white mt-12 mb-6 tracking-tight scroll-mt-32">{parseTextFormat(text)}</h3>);
                return;
            }

            // Split block by single newline to catch grouped bullets
            const lines = block.split('\n');
            let isParagraph = false;
            let currentParagraph = [];

            lines.forEach((line, lineIndex) => {
                const trimmed = line.trim();
                if (!trimmed) return;

                // Check if it's a bullet point (either • or - )
                if (trimmed.startsWith('• ') || trimmed.startsWith('- ')) {
                    if (isParagraph) {
                        flushList();
                        elements.push(<p key={`p-${blockIndex}-${lineIndex}-pre`} className="text-zinc-300 text-lg leading-relaxed mb-8">{parseTextFormat(currentParagraph.join(' '))}</p>);
                        currentParagraph = [];
                        isParagraph = false;
                    }
                    const text = trimmed.substring(2);
                    currentList.push(
                        <li key={`li-${blockIndex}-${lineIndex}`} className="flex items-start gap-4">
                            <span className="text-blue-500 mt-1.5 shrink-0">•</span>
                            <span className="text-zinc-300 text-lg leading-relaxed">{parseTextFormat(text)}</span>
                        </li>
                    );
                    return;
                }

                // Collect as paragraph
                flushList();
                isParagraph = true;
                currentParagraph.push(trimmed);
            });

            if (isParagraph && currentParagraph.length > 0) {
                elements.push(<p key={`p-${blockIndex}`} className="text-zinc-300 text-lg leading-relaxed mb-8">{parseTextFormat(currentParagraph.join(' '))}</p>);
            }
        });

        // Flush any remaining list items
        flushList();

        return elements;
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

                {/* TOC Sidebar */}
                <aside className="hidden lg:block w-72 shrink-0 sticky top-32 self-start">
                    <div className="p-6 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-xl">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6 pb-4 border-b border-zinc-800">Framework Index</p>
                        <TableOfContents content={cluster.content} inline />
                    </div>

                    {/* Pillar Link */}
                    <Link href={cluster.pillarLink} className="mt-6 flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                        <span className="text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">Back to {cluster.pillar}</span>
                    </Link>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 min-w-0 max-w-4xl">
                    <div className="mb-12">
                        <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-zinc-800 border border-white/5 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                            {cluster.pillar} Cluster
                        </div>
                        <h1 className="text-4xl md:text-6xl text-white font-bold tracking-tighter mb-8 leading-tight">
                            {cluster.title}
                        </h1>
                        <VoiceReader title={cluster.title} content={cluster.content} />
                    </div>

                    {/* Extraction Block (Quick Answer) */}
                    <section className="mb-16 p-8 md:p-12 rounded-[2.5rem] bg-indigo-600/5 border border-indigo-500/20 relative overflow-hidden group">
                        <h2 className="!mt-0 text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-6">Quick Answer (AI Chunk)</h2>
                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-tight">{cluster.extractionBlock.title}</h3>
                        <p className="text-zinc-300 text-lg leading-relaxed mb-0">
                            {cluster.extractionBlock.content}
                        </p>
                    </section>

                    {/* Main Content Body */}
                    <div className="prose prose-invert max-w-none mb-24">
                        {renderContent(cluster.content)}
                    </div>

                    {/* Original Insight Block */}
                    <section className="mb-24 p-10 rounded-[2.5rem] bg-emerald-600/5 border border-emerald-500/20 relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-black flex items-center justify-center font-black">!</div>
                                <h2 className="!my-0 text-white font-bold text-2xl tracking-tight">{cluster.originalInsight.title}</h2>
                            </div>
                            <p className="text-zinc-300 text-lg leading-relaxed italic">
                                &quot;{cluster.originalInsight.content}&quot;
                            </p>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full" />
                    </section>

                    {/* Checklist / Steps (if any) */}
                    {cluster.checklist && (
                        <section className="mb-24">
                            <h2 className="text-3xl font-bold text-white mb-8 tracking-tighter">Implementation Checklist</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {cluster.checklist.map((item, i) => (
                                    <div key={i} className="flex gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 items-center">
                                        <div className="w-6 h-6 rounded-lg bg-zinc-800 flex items-center justify-center text-emerald-500">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-zinc-300 font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Service CTA */}
                    <section className="p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5 relative overflow-hidden group">
                        <div className="relative z-10">
                            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Strategic Next Step</p>
                            <h2 className="text-3xl md:text-5xl text-white font-bold tracking-tighter mb-10 leading-tight max-w-xl">{cluster.serviceCTA.title}</h2>
                            <Link href="/contact" className="inline-block px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-widest rounded-2xl hover:scale-105 transition-transform active:scale-95">
                                Book a Strategic Call
                            </Link>
                        </div>
                        {/* Background Decorative Element */}
                        <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 blur-[120px] rounded-full group-hover:bg-indigo-500/20 transition-colors" />
                    </section>

                    {/* FAQs */}
                    <div className="mt-24">
                        <FAQSection faqs={cluster.faqs} title="Framework FAQs" />
                    </div>
                </div>
            </div>
        </main>
    );
}
