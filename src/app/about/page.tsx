"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import NextImage from "next/image";

import CaseStudy from "@/components/CaseStudy";
import Link from "next/link";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const EmailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const AcademicIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
);

const AwardIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
);

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Sequence images logic
    const totalFrames = 75;
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        for (let i = 0; i < totalFrames; i++) {
            const img = new Image();
            const frameNum = i.toString().padStart(2, '0');
            img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    // Map scroll progress to frame index, finishing early (30% down the page)
    const frameIndex = useTransform(scrollYProgress, [0, 0.3], [0, totalFrames - 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    useEffect(() => {
        return frameIndex.onChange((v) => {
            setCurrentFrame(Math.min(totalFrames - 1, Math.round(v)));
        });
    }, [frameIndex]);

    return (
        <main className="bg-black min-h-screen font-sans selection:bg-white selection:text-black">

            {/* Hero Section with Sticky Sequence */}
            <div ref={containerRef} className="relative h-[400vh]">
                <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                    {/* Background Sequence */}
                    <motion.div className="absolute inset-0 z-0 bg-[#0a0a0a]" style={{ scale }}>
                        {/* Always eagerly render the first frame to fix LCP. Once React mounts and preloads other frames, currentFrame will dictate the source. */}
                        <NextImage
                            src={`/sequence/frame_${currentFrame.toString().padStart(2, '0')}_delay-0.066s.png`}
                            alt="Chaitanya Kore"
                            priority={true}
                            fill
                            sizes="100vw"
                            className="object-cover transform scale-105 opacity-40 mix-blend-luminosity grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                    </motion.div>

                    {/* Content Overlay */}
                    <div className="relative z-10 container mx-auto px-6">
                        <motion.div
                            style={{ opacity: useTransform(scrollYProgress, [0, 0.4], [1, 0]) }}
                            className="max-w-4xl"
                        >
                            <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.5em] mb-4 block">The Human behind the Strategy</span>
                            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 italic">
                                About Chaitanya Kore.
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-2xl font-medium">
                                I don't just "do SEO". I build growth engines for the next generation of search.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="relative z-20">
                    {/* Section 1: The Philosophy */}
                    <div className="py-24 md:py-32">
                        <div className="container mx-auto px-6">
                            <div className="max-w-3xl mb-16">
                                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter italic mb-12">I believe SEO is broken.</h2>
                                <div className="space-y-8 text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
                                    <p>
                                        Most agencies are still selling 2018 tactics in a 2026 world. They focus on keyword rankings, but rankings don't pay the bills. Revenue does.
                                    </p>
                                    <p>
                                        My journey started with a simple observation: Search is moving from a list of links to a list of answers. If you're not optimized for AI citation (GEO/AEO), you're becoming invisible.
                                    </p>
                                    <p>
                                        I spent years in the trenches of SaaS and B2B Tech, realizing that technical excellence is just the entry fee. Real growth happens when you align your site's architecture with how LLMs actually think.
                                    </p>
                                </div>
                            </div>

                            {/* Combined Section: Credentials & Experience Timeline (Two-Column Layout) */}
                            <div className="mb-40">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                                    {/* Left Side: Professional Profile (Credentials) */}
                                    <div className="lg:col-span-5 space-y-12">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                        >
                                            <p className="text-emerald-500 text-[10px] tracking-[0.4em] uppercase mb-6 font-black opacity-100">The Expertise</p>
                                            <h2 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-8 leading-tight italic">
                                                Senior SEO &<br />
                                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 not-italic">AI Search Expert.</span>
                                            </h2>
                                            <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-light">
                                                8+ years of experience driving organic growth for e-commerce, SaaS, and enterprise brands globally.
                                                Currently leading AI-driven search strategies (AEO/GEO) to ensure discoverability across generative answer platforms.
                                            </p>

                                            {/* Contact Quick Links */}
                                            <div className="grid grid-cols-1 gap-3 mb-10">
                                                {[
                                                    { icon: <PhoneIcon />, label: "+91-7875269281", href: "tel:+917875269281" },
                                                    { icon: <EmailIcon />, label: "korechaitanya10@gmail.com", href: "mailto:korechaitanya10@gmail.com" },
                                                    { icon: <LinkedInIcon />, label: "LinkedIn Profile", href: "https://linkedin.com/in/chaitanya-kore-342069140" }
                                                ].map((contact, i) => (
                                                    <a
                                                        key={i}
                                                        href={contact.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 hover:bg-zinc-800/60 transition-all group"
                                                    >
                                                        <span className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 border border-zinc-700 transition-colors">
                                                            {contact.icon}
                                                        </span>
                                                        <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors font-medium">{contact.label}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </motion.div>

                                        <div className="space-y-8">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5"
                                            >
                                                <p className="text-white text-sm font-bold tracking-widest uppercase flex items-center gap-2 mb-6">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                    Core Methodology
                                                </p>
                                                <div className="flex flex-wrap gap-3">
                                                    {["Growth Strategy", "AI Search", "Audit", "Leadership", "Programmatic"].map(skill => (
                                                        <span key={skill} className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] text-zinc-400 font-semibold uppercase tracking-widest">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5"
                                                >
                                                    <p className="text-white text-[10px] font-bold uppercase tracking-widest mb-4 opacity-50">Education</p>
                                                    <p className="text-white font-bold mb-1 tracking-tight">BBA (Marketing)</p>
                                                    <p className="text-xs text-zinc-500">Pune University | 2017</p>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5"
                                                >
                                                    <p className="text-white text-[10px] font-bold uppercase tracking-widest mb-4 opacity-50">Certifications</p>
                                                    <div className="space-y-2">
                                                        {["Google Analytics", "HubSpot Master"].map(cert => (
                                                            <div key={cert} className="flex items-center gap-2 text-[10px] text-zinc-400 font-bold uppercase">
                                                                <div className="w-1 h-1 rounded-full bg-blue-500" />
                                                                {cert}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side: Interactive Journey (Experience) */}
                                    <div className="lg:col-span-7">
                                        <Experience />
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack - Keeps its full width below */}
                            <div className="relative z-30 py-32 border-y border-white/5 bg-black/80 backdrop-blur-xl mb-32 -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24">
                                <TechStack />
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Personal Experience */}
                    <div className="min-h-screen flex items-center bg-zinc-900/10 backdrop-blur-sm">
                        <div className="container mx-auto px-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                                <div>
                                    <h2 className="text-4xl font-bold text-white tracking-tighter mb-8 text-indigo-400">First-hand Experience.</h2>
                                    <p className="text-zinc-400 mb-8 leading-relaxed">
                                        I've lived through the major Google core updates. I've seen brands lose 80% of their traffic overnight and helped them pivot into search dominance by shifting focus to topical depth and entity authority.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: "Started", val: "2017" },
                                            { label: "Growth Engineered", val: "Consistent" },
                                            { label: "ROI Driven", val: "100%" },
                                            { label: "AI Focused", val: "Always" }
                                        ].map((stat, i) => (
                                            <div key={i} className="p-4 rounded-2xl border border-white/5 bg-white/5">
                                                <p className="text-white font-bold text-2xl mb-1">{stat.val}</p>
                                                <p className="text-zinc-500 text-[10px] uppercase tracking-widest">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight italic">"Growth is a choice, not a byproduct."</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                                        My process is simple but rigorous. No fluff, no "best-guesses". I use data to forecast exactly where your organic revenue will come from, and then I build the path to get there.
                                    </p>
                                    <Link href="/contact" className="inline-block px-10 py-5 bg-indigo-500 text-white font-bold rounded-2xl hover:bg-indigo-400 transition-colors text-center">
                                        Let's Work Together
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Case Studies Section */}
            <div className="relative z-30 bg-black py-16">
                <div className="container mx-auto px-6 mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">Proven Results.</h2>
                    <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">Real-world examples of how aligning architecture with search intent drives massive organic growth.</p>
                </div>
                <CaseStudy />
            </div>
        </main>
    );
}
