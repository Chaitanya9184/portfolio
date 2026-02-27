"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import NextImage from "next/image";

import CaseStudy from "@/components/CaseStudy";
import Link from "next/link";

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
                            src={images.length > 0 ? images[currentFrame]?.src : `/sequence/frame_00_delay-0.066s.png`}
                            alt="Chaitanya Kore"
                            priority={true}
                            fill
                            className="object-cover transform scale-105 opacity-40 mix-blend-luminosity grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                    </motion.div>

                    {/* Content Overlay */}
                    <div className="relative z-10 container mx-auto px-6">
                        <motion.div
                            style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                            className="max-w-4xl"
                        >
                            <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.5em] mb-4 block">The Human behind the Strategy</span>
                            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 italic">
                                Chaitanya Kore.
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
                    <div className="min-h-screen flex items-center">
                        <div className="container mx-auto px-6">
                            <div className="max-w-3xl">
                                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-12">I believe SEO is broken.</h2>
                                <div className="space-y-8 text-zinc-400 text-lg md:text-xl leading-relaxed">
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
