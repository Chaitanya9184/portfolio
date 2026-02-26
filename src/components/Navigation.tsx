"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = React.useState(true);

    React.useEffect(() => {
        // If we are on the homepage, the navigation should only appear AFTER
        // the user has scrolled past the 400vh ScrollyCanvas sequence.
        if (pathname === '/') {
            const handleScroll = () => {
                // ScrollyCanvas is 400vh, so we show the nav after ~380vh to match the transition
                // between the last frame and the next section.
                const triggerPoint = window.innerHeight * 3.8;
                if (window.scrollY > triggerPoint) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            };

            // Check initial state
            handleScroll();

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        } else {
            // On other pages, navigation is always visible
            setIsVisible(true);
        }
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 z-50 w-full bg-[#121212]/80 backdrop-blur-xl border-b border-zinc-900 shadow-sm transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">

                {/* Logo / Brand */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-bold text-white group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors">
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
                    <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                        Contact
                    </Link>
                </nav>

                {/* LinkedIn CTA */}
                <div className="flex items-center">
                    <a
                        href="https://linkedin.com/in/chaitanya-kore-342069140"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-colors flex items-center gap-2"
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
