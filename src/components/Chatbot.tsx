"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom Icons
const BotIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
);


const CloseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
);

const SendIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
    </svg>
);

interface Message {
    id: number;
    type: 'bot' | 'user';
    text: string;
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState<'chat' | 'form'>('chat');
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, type: 'bot', text: "Hello! I'm CK-AI, Chaitanya's digital twin. How can I help you explore his SEO & AI Search expertise today?" }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Form State
    const [formData, setFormData] = useState({
        website: '',
        competitors: '',
        keywords: ''
    });

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputText.trim()) return;

        const userMsg: Message = { id: Date.now(), type: 'user', text: inputText };
        setMessages(prev => [...prev, userMsg]);
        const currentInput = inputText; // Store current input
        setInputText('');
        setIsTyping(true);

        // Simulated AI Response Logic
        setTimeout(() => {
            const response = getBotResponse(currentInput);

            if (response === "TRIGGER_FORM") {
                const botMsg: Message = {
                    id: Date.now() + 1,
                    type: 'bot',
                    text: "I'd love to help Chaitanya build a custom AI + SEO strategy for you! Please fill out these quick details so he has everything he needs to analyze your niche."
                };
                setMessages(prev => [...prev, botMsg]);
                setTimeout(() => setView('form'), 1000);
            } else {
                const botMsg: Message = { id: Date.now() + 1, type: 'bot', text: response };
                setMessages(prev => [...prev, botMsg]);
            }
            setIsTyping(false);
        }, 1500);
    };

    const getBotResponse = (input: string) => {
        const text = input.toLowerCase();

        // Strategy & Lead Gen Hook (Triggers Form)
        if (text.includes('strategy') || text.includes('plan') || text.includes('growth') || text.includes('analyze')) {
            return "TRIGGER_FORM";
        }

        // Conversational Keywords
        if (text.includes('hi') || text.includes('hello') || text.includes('hey')) {
            return "Hi there! I'm here to help you explore Chaitanya's work. Are you interested in his SEO experience, AI search strategies (GEO/AEO), or looking for a custom growth plan?";
        }

        if (text.includes('seo')) {
            return "Chaitanya treats SEO as a growth lever. He specializes in Technical SEO audits, content strategy, and driving organic ROI. Would you like to see a case study of how he scaled an eCommerce brand?";
        }

        if (text.includes('ai') || text.includes('aeo') || text.includes('geo')) {
            return "Chaitanya is a leader in Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO). He ensures brands remain visible as search shifts to platforms like Perplexity, Gemini, and SearchGPT. Want to see an AI strategy for your business?";
        }

        if (text.includes('experience') || text.includes('work') || text.includes('years')) {
            return "He has over 8 years of experience in the search industry, currently leading SEO strategies at WSI ALM Corp for global SaaS and E-commerce brands.";
        }

        if (text.includes('contact') || text.includes('call') || text.includes('meeting') || text.includes('book') || text.includes('calendar')) {
            return "The best way to connect is via LinkedIn or by booking a meeting through his calendar link. You can also drop your details here, and I'll make sure he gets them!";
        }

        // Fallback: Always provide the form if unsure
        return "TRIGGER_FORM";
    };

    const sanitize = (str: string) => str.replace(/[<>]/g, '').trim();

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic sanitization
        const cleanData = {
            website: sanitize(formData.website),
            competitors: sanitize(formData.competitors),
            keywords: sanitize(formData.keywords)
        };

        console.log('Sanitized Lead Data:', cleanData);

        setView('chat');
        const botMsg: Message = {
            id: Date.now(),
            type: 'bot',
            text: "Got it! Chaitanya will review your site and competitors to build a bespoke AI + SEO strategy. In the meantime, feel free to book a 15-min discovery call here: [Link to Calendar]. We'll be in touch soon!"
        };
        setMessages(prev => [...prev, botMsg]);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] font-sans">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="mb-6 w-[360px] md:w-[400px] h-[580px] rounded-3xl overflow-hidden bg-zinc-900/80 border border-zinc-800/50 backdrop-blur-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border-b border-zinc-800 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400">
                                    <BotIcon />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">CK-AI Assistant</h4>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full hover:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white transition-colors"
                            >
                                <CloseIcon />
                            </button>
                        </div>

                        {/* Messages / Form Area */}
                        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-zinc-800 relative">
                            {view === 'chat' ? (
                                <div className="space-y-6">
                                    {messages.map((msg) => (
                                        <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`flex gap-3 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                                {msg.type === 'bot' && (
                                                    <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-blue-400 shrink-0 mt-1">
                                                        <BotIcon />
                                                    </div>
                                                )}
                                                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.type === 'user'
                                                    ? 'bg-blue-600 text-white rounded-tr-none'
                                                    : 'bg-zinc-800/50 text-zinc-200 border border-zinc-700/50 rounded-tl-none'
                                                    }`}>
                                                    {msg.text}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div className="flex gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-blue-400 shrink-0">
                                                    <BotIcon />
                                                </div>
                                                <div className="bg-zinc-800/30 border border-zinc-700/50 p-4 rounded-2xl rounded-tl-none flex gap-1 items-center">
                                                    <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                                    <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                                    <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="h-full flex flex-col justify-center"
                                >
                                    <h5 className="text-white font-bold mb-4 flex items-center gap-2">
                                        <div className="w-1 h-4 bg-blue-500 rounded-full" />
                                        Strategy Details
                                    </h5>
                                    <form onSubmit={handleFormSubmit} className="space-y-4">
                                        <div>
                                            <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1.5 block">Website URL</label>
                                            <input
                                                required
                                                type="url"
                                                placeholder="https://yourbrand.com"
                                                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                value={formData.website}
                                                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1.5 block">Top 3 Competitors</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Competitor A, B, C"
                                                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                value={formData.competitors}
                                                onChange={(e) => setFormData({ ...formData, competitors: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1.5 block">Top 3 Target Keywords</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Keyword 1, 2, 3"
                                                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                value={formData.keywords}
                                                onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl py-3 font-bold text-sm shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all mt-4"
                                        >
                                            Request AI Strategy
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setView('chat')}
                                            className="w-full text-zinc-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                                        >
                                            Back to Chat
                                        </button>
                                    </form>
                                </motion.div>
                            )}
                        </div>

                        {/* Input Area (Hidden in form view) */}
                        {view === 'chat' && (
                            <div className="p-4 bg-zinc-950/50 border-t border-zinc-800/50">
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        value={inputText}
                                        onChange={(e) => setInputText(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                        placeholder="Ask me anything..."
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                    <button
                                        onClick={handleSend}
                                        disabled={!inputText.trim()}
                                        className="absolute right-2 w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <SendIcon />
                                    </button>
                                </div>
                                <p className="text-[9px] text-zinc-600 text-center mt-3 uppercase tracking-widest font-bold font-mono">Powered by Chaitanya&apos;s AI Knowledge Base</p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-colors duration-500 ${isOpen ? 'bg-zinc-900 text-white border border-zinc-800' : 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white hover:shadow-blue-600/20'
                    }`}
            >
                <div className="relative">
                    {isOpen ? <CloseIcon /> : <BotIcon />}
                    {!isOpen && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                        </span>
                    )}
                </div>
            </motion.button>
        </div>
    );
};

export default Chatbot;
