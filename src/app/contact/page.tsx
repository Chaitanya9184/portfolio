"use client";

import React, { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6 md:px-12">
                <div className="mb-12">
                    <p className="text-emerald-500 text-sm tracking-widest uppercase mb-4 font-semibold">Let's Connect</p>
                    <h1 className="text-5xl md:text-6xl text-white font-bold tracking-tighter mb-6 relative inline-block">
                        Get In Touch
                        <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
                    </h1>
                    <p className="text-zinc-400 text-lg leading-relaxed font-light">
                        Whether you need a full technical SEO audit, a strategic GEO/AEO plan, or just want to discuss organic growth for your brand, I'm here to help. Fill out the form below and I'll get back to you shortly.
                    </p>
                </div>

                <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-8 shadow-xl mb-16">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="block text-sm font-medium text-zinc-300">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                                    placeholder="Jane"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="block text-sm font-medium text-zinc-300">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-zinc-300">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                                placeholder="jane@company.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="company" className="block text-sm font-medium text-zinc-300">Company (Optional)</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                                placeholder="Your Company Name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-medium text-zinc-300">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none"
                                placeholder="How can I help you grow your business?"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide uppercase py-4 rounded-xl transition-colors duration-300 shadow-lg shadow-emerald-900/20 disabled:opacity-50"
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                                <p className="text-emerald-400/80 text-sm">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                            </div>
                        )}
                        {status === 'error' && (
                            <p className="text-red-500 text-sm text-center bg-red-500/5 border border-red-500/20 py-3 rounded-xl">Failed to send message. Please try again or email me directly.</p>
                        )}
                    </form>
                </div>

                {/* Direct Channels */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                    <div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:border-emerald-500/30 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2">Direct Email</h4>
                        <p className="text-zinc-500 text-sm mb-4">For fast support or collaboration inquiries.</p>
                        <a href="mailto:korechaitanya10@gmail.com" className="text-emerald-500 font-medium hover:text-emerald-400 transition-colors">korechaitanya10@gmail.com</a>
                    </div>
                    <div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:border-blue-500/30 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2">Professional Network</h4>
                        <p className="text-zinc-500 text-sm mb-4">Connect with me for industry updates.</p>
                        <a href="https://linkedin.com/in/chaitanya-kore-342069140" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium hover:text-blue-400 transition-colors">LinkedIn Profile ↗</a>
                    </div>
                </div>

                {/* The Strategic Process */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl text-white font-bold tracking-tight mb-4">The Strategic Process</h2>
                        <p className="text-zinc-500 max-w-xl mx-auto">How we transform your search presence from visibility to revenue.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { step: '01', title: 'Discovery & Audit', desc: 'A deep dive into your technical infrastructure and current entity footprint in the knowledge graph.', color: 'from-blue-500 to-indigo-600' },
                            { step: '02', title: 'Architecture & Design', desc: 'Crafting the programmatic SEO framework and mapping conversion funnels for AI search extraction.', color: 'from-emerald-500 to-teal-600' },
                            { step: '03', title: 'Scale & Monitoring', desc: 'Deploying content hubs and continuous AI performance tracking for sustained organic MoM growth.', color: 'from-purple-500 to-pink-600' }
                        ].map((item, i) => (
                            <div key={i} className="group relative p-10 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/10 overflow-hidden">
                                {/* Step Indicator */}
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-black text-lg mb-8 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                                    {item.step}
                                </div>

                                <h4 className="text-white font-bold text-2xl mb-4 tracking-tight">{item.title}</h4>
                                <p className="text-zinc-500 text-base leading-relaxed group-hover:text-zinc-400 transition-colors">{item.desc}</p>

                                {/* Hover Glow */}
                                <div className={`absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br ${item.color} blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Strategic FAQs */}
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl text-white font-bold tracking-tight mb-12">Frequent Questions</h2>
                    <div className="space-y-6 text-left">
                        {[
                            { q: 'How long until we see ROI?', a: 'Typical Technical SEO and AEO pivots show leading indicators (mentions and citations) in 4-6 weeks, with revenue impact at 3-6 months.' },
                            { q: 'What is the GEO transition?', a: 'It is the shift from keyword-based ranking to "Generative Engine Optimization," focusing on being the primary source that AI models cite.' },
                            { q: 'Do you work with agencies?', a: 'Yes, I consult for premium SaaS agencies looking to add technical depth and AI-readiness to their existing service suites.' }
                        ].map((faq, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60">
                                <h4 className="text-white font-bold mb-3 flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    {faq.q}
                                </h4>
                                <p className="text-zinc-400 text-sm leading-relaxed ml-4.5">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
