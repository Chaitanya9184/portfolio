import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Technical SEO for SaaS | Scale Your Search Infrastructure',
    description: 'Modern technical SEO for React and Next.js SaaS platforms. Optimize crawl budget, programmatic infrastructure, and JS rendering for maximum visibility.',
    alternates: {
        canonical: 'https://www.chaitanyakore.in/services/technical-seo-for-saas',
    }
};

export default function TechnicalSeoForSaas() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-widest">
                    Service Implementation
                </div>
                <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-8 leading-[0.9]">
                    Technical SEO <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">For SaaS Scale</span>
                </h1>

                <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl">
                    Bridging the gap between engineering execution and organic growth. I architect modern Javascript frameworks (Next.js/React) for maximum search visibility and crawl efficiency. We treat SEO as a <strong>product feature</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h2 className="text-white font-bold text-xl mb-4">The Coverage:</h2>
                        <ul className="space-y-4">
                            {[
                                "Next.js / SSR Rendering Architecture",
                                "Programmatic SEO Infrastructure",
                                "Enterprise Crawl Budget Management",
                                "Automated JSON-LD Injection",
                                "Core Web Vitals Optimization",
                                "Headless CMS SEO Configuration"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-zinc-400 text-sm">
                                    <span className="text-orange-500">✦</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
                        <h2 className="text-white font-bold text-xl mb-4">The Infrastructure Payoff:</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            A technical foundation that treats organic search as a scalable product feature. We fix the underlying indexation and rendering issues so your content team's work actually gets seen.
                        </p>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-0">
                            By aligning your engineering stack with search bot requirements, we ensure that new pages are indexed instantly, existing pages maintain high core web vital scores, and complex application logic does not block discovery.
                        </p>
                    </div>
                </div>

                {/* Expanded Content Section */}
                <div className="mb-16 p-10 rounded-[2.5rem] bg-zinc-900/20 border border-white/5">
                    <h2 className="text-white font-bold text-2xl mb-6">Built for Modern Racks</h2>
                    <div className="prose prose-invert max-w-none text-zinc-400 text-sm leading-relaxed space-y-6">
                        <p>
                            SaaS SEO is fundamentally different from traditional publishing. Your application likely has thousands of dynamic pages, complex state management, and an ever-evolving feature set. My technical audit goes beyond simple "broken link" checks.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                            <div className="space-y-3">
                                <h3 className="text-white font-bold text-base">Programmatic Excellence</h3>
                                <p>Scaling to 100k+ pages requires more than just templates. I help you build programmatic SEO systems that generate high-value, unique landing pages at scale without sacrificing quality or crawl budget.</p>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-white font-bold text-base">JS Rendering Audits</h3>
                                <p>If Googlebot can't execute your JS, it can't index your value. We verify SSR (Server-Side Rendering) and Hydration status to ensure 100% content extractability for both traditional and AI-driven crawlers.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link href="/contact" className="inline-block w-full text-center md:w-auto px-12 py-5 bg-orange-600 text-white font-black uppercase text-sm tracking-widest rounded-2xl hover:bg-orange-500 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Audit Your Infrastructure
                </Link>
            </div>
        </main>
    );
}
