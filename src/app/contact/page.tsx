import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Contact Me | Chaitanya Kore',
    description: 'Get in touch for expert SEO and AI Search consulting.',
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
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

                <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-8 shadow-xl">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="block text-sm font-medium text-zinc-300">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    required
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
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none"
                                placeholder="How can I help you grow your business?"
                            />
                        </div>

                        <button
                            type="button"
                            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide uppercase py-4 rounded-xl transition-colors duration-300 shadow-lg shadow-emerald-900/20"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
