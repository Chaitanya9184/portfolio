import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SaaS SEO & AI Search Solutions | Chaitanya Kore',
    description: 'Specialized SEO and Generative Engine Optimization strategies for SaaS companies to reduce CAC and drive MRR.',
};

export default function SaaSIndustryPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <Link href="/industries" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest mb-12 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6" /></svg>
                    All Industries
                </Link>

                {/* Hero */}
                <div className="mb-20">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                        SaaS Growth
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6">
                        Scaling SaaS <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Beyond Paid Ads</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        Customer Acquisition Costs (CAC) in SaaS are at an all-time high. To achieve sustainable MRR growth, you need an organic acquisition engine that captures users at every stage of the funnel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-red-500">⚠️</span> The SaaS Challenge
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Relying heavily on Paid Search leads to unsustainable CAC and zero compounding equity.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Competitors with deep pockets outbid you on bottom-of-funnel (BOFU) terms.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Target audiences are using AI (Perplexity, ChatGPT) to find tool recommendations instead of traditional Google search.</li>
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-blue-950/20 border border-blue-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-blue-400">⚡</span> The Organic Solution
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-blue-500/50 mt-1">&rarr;</span> <strong>Programmatic SEO &amp; Alternates:</strong> Building scalable vs. competitor pages and use-case hubs that capture high-intent buyers.</li>
                            <li className="flex gap-3"><span className="text-blue-500/50 mt-1">&rarr;</span> <strong>AI Engine Optimization (GEO/AEO):</strong> Structuring product capabilities so your tool is cited when users ask ChatGPT &quot;What is the best software for [X]?&quot;</li>
                            <li className="flex gap-3"><span className="text-blue-500/50 mt-1">&rarr;</span> <strong>Technical Foundation:</strong> Ensuring your dynamic React/Next.js SaaS marketing site is flawlessly rendered and indexed by search bots.</li>
                        </ul>
                    </div>
                </div>

                {/* Call To Action */}
                <div className="p-12 text-center rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0a0a0a] border border-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none" />
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Stop Renting Your Traffic. Own It.</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto mb-8 relative z-10">
                        Let&apos;s build a compounding organic growth moat for your SaaS product using advanced Technical SEO and AI Search optimization.
                    </p>
                    <Link href="/roi-calculator" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors">
                        Calculate Your Organic ROI
                    </Link>
                </div>

            </div>
        </main>
    );
}
