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
    const triggerRef = React.useRef<HTMLDivElement>(null);
    const [leftOffset, setLeftOffset] = useState("50%");
    const [translateX, setTranslateX] = useState("-50%");

    // Dynamic positioning effect to prevent screen-edge clipping
    React.useEffect(() => {
        if (!isOpen || !triggerRef.current) return;

        const updatePosition = () => {
            const rect = triggerRef.current?.getBoundingClientRect();
            if (!rect) return;

            const menuWidth = 640; // The fixed width of our menu
            const viewportWidth = window.innerWidth;
            const margin = 16; // Minimum distance from screen edge

            // Calculate current center position
            const triggerCenter = rect.left + rect.width / 2;

            // Check Left Edge
            if (triggerCenter - menuWidth / 2 < margin) {
                // Shift right if overflow left
                setLeftOffset(`${margin}px`);
                setTranslateX("0%");
            }
            // Check Right Edge
            else if (triggerCenter + menuWidth / 2 > viewportWidth - margin) {
                // Shift left if overflow right
                setLeftOffset(`${viewportWidth - margin}px`);
                setTranslateX("-100%");
            }
            // Default: Perfect center
            else {
                setLeftOffset("50%");
                setTranslateX("-50%");
            }
        };

        updatePosition();
        window.addEventListener('resize', updatePosition);
        return () => window.removeEventListener('resize', updatePosition);
    }, [isOpen]);

    return (
        <div
            ref={triggerRef}
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className={`relative px-5 py-8 group transition-colors focus:outline-none ${isOpen ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
                <div className="relative z-10 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest">
                    {title}
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChevronDown size={14} />
                    </motion.div>
                </div>

                {/* Light source background effect */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 bg-emerald-500/10 blur-xl rounded-full scale-150" />
                    <div className="absolute inset-x-2 inset-y-6 bg-white/5 rounded-xl border border-white/5" />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, x: translateX, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, x: translateX, scale: 1 }}
                        exit={{ opacity: 0, y: 10, x: translateX, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full pt-2 w-[640px] max-w-[calc(100vw-2rem)]"
                        style={{ left: leftOffset }}
                    >
                        <div className="bg-[#121212]/95 backdrop-blur-2xl border border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-2xl overflow-hidden ring-1 ring-white/5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
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
