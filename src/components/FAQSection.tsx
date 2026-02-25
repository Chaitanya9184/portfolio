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
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="w-full py-24 bg-[#0a0a0a] border-t border-zinc-900 border-dashed">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white tracking-tighter"
                    >
                        {title.split(' ').map((word, i, arr) => (
                            i === arr.length - 1 ? <span key={i} className="text-blue-500"> {word}</span> : <span key={i}>{word} </span>
                        ))}
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`border border-zinc-800 rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'bg-zinc-900/50 border-blue-500/30' : 'bg-transparent hover:border-zinc-700'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                            >
                                <h3 className={`text-lg md:text-xl font-bold ${openIndex === index ? 'text-white' : 'text-zinc-300'}`}>
                                    {faq.question}
                                </h3>
                                <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${openIndex === index ? 'border-blue-500 text-blue-400 bg-blue-500/10' : 'border-zinc-700 text-zinc-500 bg-zinc-900'}`}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </div>
                            </button>
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-zinc-400 leading-relaxed text-sm md:text-base">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
