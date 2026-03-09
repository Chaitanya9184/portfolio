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
    X,
    TrendingUp,
    Bot,
    PenTool,
    Link as LinkIcon,
    Briefcase,
    GraduationCap,
    Repeat,
    UserCog
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="relative px-5 py-2 group">
            <span className="relative z-10 text-zinc-400 group-hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">
                {children}
            </span>
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-full scale-150" />
                <div className="absolute inset-0 bg-white/5 rounded-xl border border-white/5" />
            </div>
        </Link>
    );
}

export default function Navigation() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = React.useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const expertiseItems = [
        {
            title: "AEO Optimization",
            description: "Audit and optimize for AI Answer Engines like Perplexity and ChatGPT.",
            href: "/services/aeo-optimization",
            icon: <Search size={20} />
        },
        {
            title: "Fractional SEO Lead",
            description: "Executive SEO leadership to scale growth engines and internal teams.",
            href: "/services/fractional-seo-lead",
            icon: <UserCog size={20} />
        },
        {
            title: "SEO Revenue Strategy",
            description: "Direct alignment of SEO growth with bottom-line revenue goals.",
            href: "/services/seo-revenue-growth-strategy",
            icon: <TrendingUp size={20} />
        },
        {
            title: "SEO Strategy Sprint",
            description: "High-intensity mapping of high-intent organic validation wins.",
            href: "/services/seo-strategy-sprint",
            icon: <Zap size={20} />
        },
        {
            title: "Technical SEO Audit",
            description: "Fixing JS rendering and indexation gridlocks at enterprise scale.",
            href: "/services/technical-seo-audit",
            icon: <BarChart3 size={20} />
        },
        {
            title: "Programmatic SEO",
            description: "Building automated landing page engines for long-tail dominance.",
            href: "/services/programmatic-seo-engine",
            icon: <Repeat size={20} />
        },
        {
            title: "Content Velocity",
            description: "Accelerating topical authority through expert content clusters.",
            href: "/services/content-velocity-machine",
            icon: <PenTool size={20} />
        },
        {
            title: "Link Authority",
            description: "Data-driven digital PR and high-authority entity linking.",
            href: "/services/link-authority-builder",
            icon: <LinkIcon size={20} />
        }
    ];

    const industryItems = [
        {
            title: "B2B SaaS",
            description: "Data-driven growth strategies for modern SaaS platforms.",
            href: "/industries/b2b-saas",
            icon: <Cpu size={20} />
        },
        {
            title: "Healthcare IT",
            description: "E-E-A-T and HIPAA-compliant SEO for medical technology.",
            href: "/industries/healthcare-it",
            icon: <HeartPulse size={20} />
        },
        {
            title: "FinTech SEO",
            description: "Trust-signal engineering for high-stakes YMYL sectors.",
            href: "/industries/fintech",
            icon: <Wallet size={20} />
        },
        {
            title: "eCommerce SEO",
            description: "Scale online retail with technical faceted search optimization.",
            href: "/industries/ecommerce-marketplaces",
            icon: <ShoppingCart size={20} />
        },
        {
            title: "Enterprise Software",
            description: "Authority building for complex, long-cycle B2B markets.",
            href: "/industries/enterprise-software",
            icon: <Building2 size={20} />
        },
        {
            title: "Cybersecurity",
            description: "Technical moat building for high-intent security brands.",
            href: "/industries/cybersecurity",
            icon: <ShieldCheck size={20} />
        },
        {
            title: "EdTech & Learning",
            description: "Scale student or institutional growth with learning content.",
            href: "/industries/edtech",
            icon: <GraduationCap size={20} />
        },
        {
            title: "Professional Services",
            description: "Convert expert knowledge into organic lead generation.",
            href: "/industries/professional-services",
            icon: <Briefcase size={20} />
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
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-center relative">

                {/* Logo / Brand - Left Aligned */}
                <div className="absolute left-6 md:left-12 lg:left-24">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-bold text-white group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors">
                            CK
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation Links - Center Aligned */}
                <nav className="hidden md:flex items-center gap-2">
                    <NavLink href="/about">About</NavLink>

                    <MegaMenu title="Expertise" items={expertiseItems} />
                    <MegaMenu title="Industries" items={industryItems} />

                    <NavLink href="/blog">AI Insights</NavLink>
                    <NavLink href="/roi-calculator">ROI Predictor</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </nav>

                {/* LinkedIn CTA (Desktop) - Right Aligned */}
                <div className="hidden lg:flex items-center absolute right-6 md:right-12 lg:right-24">
                    <a
                        href="https://linkedin.com/in/chaitanya-kore-342069140"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-colors flex items-center gap-2"
                    >
                        Connect
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
                        className="md:hidden border-t border-zinc-900 bg-[#121212] overflow-y-auto max-h-[calc(100vh-80px)]"
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
