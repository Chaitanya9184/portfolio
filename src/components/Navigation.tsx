"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navigation() {
    const pathname = usePathname();

    // Do not show navigation on the homepage
    if (pathname === '/') {
        return null;
    }

    return (
        <header className="sticky top-0 z-50 w-full bg-[#121212]/80 backdrop-blur-xl border-b border-zinc-900 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">

                {/* Logo / Brand */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-bold text-white group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                        CK
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/blog" className="text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                        AI Insights
                    </Link>
                    <Link href="/roi-calculator" className="text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                        ROI Predictor
                    </Link>
                    <Link href="/industries" className="text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                        Industries
                    </Link>
                    <Link href="/service-areas" className="text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                        Service Areas
                    </Link>
                </nav>

                {/* LinkedIn CTA */}
                <div className="flex items-center">
                    <a
                        href="https://linkedin.com/in/chaitanya-kore-342069140"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-colors flex items-center gap-2"
                    >
                        Connect on LinkedIn
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </div>

            </div>
        </header>
    );
}
