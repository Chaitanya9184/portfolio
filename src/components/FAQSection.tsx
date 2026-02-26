"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FAQ {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs: FAQ[];
    title?: string;
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <section className="w-full py-12 mb-12 bg-[#0a0a0a] border-t border-zinc-900 border-dashed relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-blue-500/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-12">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tighter relative inline-block"
                    >
                        {title.split(' ').map((word, i, arr) => (
                            i === arr.length - 1 ? <span key={i} className="text-blue-500"> {word}</span> : <span key={i}>{word} </span>
                        ))}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                    </motion.h3>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-start">
                    {/* Left Side: Questions List */}
                    <div className="w-full lg:w-5/12 flex flex-col gap-3 relative">
                        {/* Decorative Vertical Line (Timeline effect) */}
                        <div className="absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent hidden lg:block" />

                        {faqs.map((faq, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`relative flex items-center gap-6 p-4 rounded-2xl text-left transition-all duration-300 group ${isActive ? 'bg-zinc-900/60 shadow-xl shadow-black/40 ring-1 ring-white/5' : 'hover:bg-zinc-900/30'
                                        }`}
                                >
                                    {/* Number Node */}
                                    <div className="relative z-10 flex-shrink-0 hidden sm:block">
                                        <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 border ${isActive
                                            ? 'bg-blue-500 border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                                            : 'bg-[#0a0a0a] border-zinc-800 text-zinc-500 group-hover:border-zinc-700'
                                            }`}>
                                            <span className="text-sm font-bold font-mono">0{index + 1}</span>
                                        </div>
                                        {/* Animated active indicator ring */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="faq-active-ring"
                                                className="absolute -inset-1 rounded-full border border-blue-500/30"
                                                initial={false}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </div>

                                    <h3 className={`text-lg md:text-xl font-bold transition-all duration-300 ${isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                                        }`}>
                                        {faq.question}
                                    </h3>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Side: Answer Display */}
                    <div className="w-full lg:w-7/12 static lg:sticky lg:top-32 mt-8 lg:mt-0">
                        <div className="relative w-full min-h-[400px] p-8 md:p-12 rounded-[2rem] bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-xl overflow-hidden flex flex-col shadow-2xl">
                            {/* Decorative background shape inside the answer box */}
                            <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
                            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

                            <div className="mb-8 relative z-10 flex items-center justify-between">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                    Detailed Answer
                                </span>
                                <span className="text-zinc-700 font-mono text-sm font-bold">
                                    0{activeIndex + 1} / 0{faqs.length}
                                </span>
                            </div>

                            <div className="relative z-10 flex-1 flex flex-col justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, y: -15, filter: "blur(5px)" }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                                            {faqs[activeIndex].question}
                                        </h4>
                                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-8" />
                                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
                                            {faqs[activeIndex].answer}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
