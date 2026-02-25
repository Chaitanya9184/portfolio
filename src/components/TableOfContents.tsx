"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Heading {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents({ content }: { content: string }) {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        // Extract headings from markdown-like content (##, ###)
        const lines = content.split('\n');
        const extractedHeadings: Heading[] = [];

        lines.forEach((line) => {
            const match = line.match(/^(#{2,4})\s+(.+)$/);
            if (match) {
                const level = match[1].length;
                const text = match[2];
                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                extractedHeadings.push({ id, text, level });
            }
        });

        setHeadings(extractedHeadings);

        // Intersection Observer to highlight active heading
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-10% 0% -80% 0%' }
        );

        extractedHeadings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [content]);

    if (headings.length === 0) return null;

    return (
        <nav className="hidden lg:block sticky top-32 self-start w-64 mr-12 shrink-0">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
            >
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-800" />

                <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500 mb-6 pl-6">
                    On this page
                </h4>

                <ul className="space-y-4">
                    {headings.map((heading) => (
                        <li
                            key={heading.id}
                            style={{ paddingLeft: `${(heading.level - 2) * 1 + 1.5}rem` }}
                            className="relative"
                        >
                            <AnimatePresence>
                                {activeId === heading.id && (
                                    <motion.div
                                        layoutId="active-toc"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                                    />
                                )}
                            </AnimatePresence>

                            <a
                                href={`#${heading.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`block text-xs font-medium transition-all duration-300 hover:text-white ${activeId === heading.id ? 'text-white' : 'text-zinc-500'
                                    }`}
                            >
                                {heading.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </nav>
    );
}
