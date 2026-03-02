"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MegaMenu from './MegaMenu';
import {
    BarChart3,
    Zap,
    Search,
    Globe,
    ShieldCheck,
    ShoppingCart,
    Building2,
    Cpu,
    HeartPulse,
    Wallet,
    Menu,
    X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = React.useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const expertiseItems = [
        {
            title: "Fractional SEO Lead",
            description: "Strategic leadership for scaling teams and complex organic growth engines.",
            href: "/services/fractional-seo-lead",
            icon: <ShieldCheck size={20} />
        },
        {
            title: "SEO Strategy Sprint",
            description: "A 4-week roadmap to identify and capture high-intent revenue opportunities.",
            href: "/services/seo-strategy-sprint",
            icon: <Zap size={20} />
        },
        {
            title: "AI Search Audit",
            description: "Specialized assessment of how AI engines (Gemini, Perplexity) cite your brand.",
            href: "/services/ai-search-audit",
            icon: <Search size={20} />
        },
        {
            title: "Technical SEO and Data",
            description: "Advanced log analysis, indexation at scale, and semantic schema architecture.",
            href: "/services/technical-seo-for-saas",
            icon: <BarChart3 size={20} />
        }
    ];

    const industryItems = [
        {
            title: "SaaS & B2B Tech",
            description: "Dominate the recommendation layer for software-as-a-service platforms.",
            href: "/industries/saas",
            icon: <Cpu size={20} />
        },
        {
            title: "Finance & Healthcare",
            description: "Trust-critical SEO for high-compliance and regulated industries.",
            href: "/industries/finance",
            icon: <Wallet size={20} />
        },
        {
            title: "Ecommerce & Real Estate",
            description: "Scaling high-volume, data-driven platforms for maximum visibility.",
            href: "/industries/ecommerce",
            icon: <ShoppingCart size={20} />
        }
    ];

    React.useEffect(() => {
        // Close mobile menu on route change
        setIsMobileMenuOpen(false);
    }, [pathname]);

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
                    setIsMobileMenuOpen(false);
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
                    <Link href="/about" className="text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                        About
                    </Link>

                    <MegaMenu title="Expertise" items={expertiseItems} />
                    <MegaMenu title="Industries" items={industryItems} />

                    <Link href="/blog" className="text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                        AI Insights
                    </Link>
                    <Link href="/roi-calculator" className="text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                        ROI Predictor
                    </Link>
                    <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                        Contact
                    </Link>
                </nav>

                {/* LinkedIn CTA (Desktop) */}
                <div className="hidden lg:flex items-center">
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

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-zinc-900 bg-[#121212] overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            <Link href="/about" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white">About</Link>

                            <div className="flex flex-col gap-4">
                                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black">Expertise</div>
                                {expertiseItems.map(item => (
                                    <Link key={item.href} href={item.href} className="text-sm font-bold text-zinc-300 hover:text-white flex items-center gap-3">
                                        <span className="text-emerald-500">{item.icon}</span>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black">Industries</div>
                                {industryItems.map(item => (
                                    <Link key={item.href} href={item.href} className="text-sm font-bold text-zinc-300 hover:text-white flex items-center gap-3">
                                        <span className="text-emerald-500">{item.icon}</span>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>

                            <Link href="/blog" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white">AI Insights</Link>
                            <Link href="/roi-calculator" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white">ROI Predictor</Link>
                            <Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white">Contact</Link>

                            <a
                                href="https://linkedin.com/in/chaitanya-kore-342069140"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-colors flex items-center justify-center gap-2"
                            >
                                LinkedIn
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
