"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
    title: string;
    description: string;
    href: string;
    icon?: React.ReactNode;
}

interface MegaMenuProps {
    title: string;
    items: MenuItem[];
}

export default function MegaMenu({ title, items }: MegaMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className={`flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest py-8 focus:outline-none ${isOpen ? 'text-white' : ''}`}
            >
                {title}
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown size={14} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[720px]"
                    >
                        <div className="bg-[#121212]/95 backdrop-blur-2xl border border-zinc-800 rounded-2xl p-6 shadow-2xl overflow-hidden ring-1 ring-white/5">
                            <div className="grid grid-cols-2 gap-4">
                                {items.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                                    >
                                        {item.icon && (
                                            <div className="mt-1 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-500 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors">
                                                {item.icon}
                                            </div>
                                        )}
                                        <div>
                                            <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">
                                                {item.title}
                                            </div>
                                            <div className="text-xs text-zinc-500 line-clamp-2 leading-relaxed font-medium">
                                                {item.description}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Decorative gradient corner */}
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
