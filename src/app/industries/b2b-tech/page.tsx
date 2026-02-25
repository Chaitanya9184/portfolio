import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'B2B Tech SEO & Content Strategy | Chaitanya Kore',
    description: 'Expert SEO and Thought Leadership content strategies for B2B Technology and Enterprise organizations.',
};

export default function B2BTechIndustryPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <Link href="/industries" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest mb-12 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6" /></svg>
                    All Industries
                </Link>

                {/* Hero */}
                <div className="mb-20">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest">
                        B2B Enterprise Authority
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6">
                        Navigating Complex <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Sales Cycles with SEO</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        In B2B tech, buyers aren&apos;t just looking for software; they&apos;re looking for enterprise solutions, integrations, and thought leadership. Average buying teams consist of 6-10 decision-makers testing your brand against competitors over 12+ months.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-4">The Trust Deficit</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Enterprise buyers don&apos;t trust generic landing pages. They require whitepapers, API documentation, deep technical articles, and comparisons. If your brand isn&apos;t answering their highly specific, long-tail queries, your competitor is.
                        </p>
                        <div className="p-4 bg-purple-950/20 rounded-2xl border border-purple-900/30">
                            <p className="text-purple-300 font-medium italic text-sm">
                                &quot;According to Gartner, 77% of B2B buyers state that their latest purchase was very complex or difficult. Content is the only way to simplify it.&quot;
                            </p>
                        </div>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-zinc-900/40 border border-purple-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Establishing AI Authority</h2>
                        <ul className="space-y-4 text-zinc-300 text-sm leading-relaxed mb-6">
                            <li><strong>Entity SEO (AEO):</strong> Ensuring your brand, key executives, and proprietary methodologies are recognized as distinct entities by Google&apos;s Knowledge Graph and AI models.</li>
                            <li><strong>Hub &amp; Spoke Architecture:</strong> Structuring content pillars around core competencies (e.g., &quot;Cloud Native Security&quot; -&gt; &quot;Kubernetes Best Practices&quot;, &quot;Container Scanning&quot;) to build undeniable topical authority.</li>
                            <li><strong>Thought Leadership Distribution:</strong> Optimizing expert articles to rank for the exact long-tail phrases decision-makers and engineers are searching for.</li>
                        </ul>
                    </div>
                </div>

                <div className="p-12 text-center rounded-3xl bg-zinc-900/30 border border-zinc-800">
                    <h2 className="text-3xl font-bold text-white mb-4">Align Your Content With Sales</h2>
                    <p className="text-zinc-400 mb-8 max-w-xl mx-auto">See how an integrated B2B SEO strategy can generate high-quality MQLs and support your enterprise sales team.</p>
                    <a href="mailto:korechaitanya10@gmail.com" className="inline-flex items-center justify-center px-8 py-4 bg-purple-500 text-zinc-950 font-bold rounded-xl hover:bg-purple-400 transition-colors">
                        Request a B2B Strategy Session
                    </a>
                </div>

            </div>
        </main>
    );
}
