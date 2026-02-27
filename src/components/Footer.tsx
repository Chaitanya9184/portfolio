"use client";

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-[#050505] border-t border-zinc-900 border-dashed pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Column 1: Brand & Mission */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="text-xl font-bold text-white tracking-tighter">
                            Chaitanya <span className="text-zinc-500 font-light">Kore</span>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                            Engineering organic growth for high-stakes SaaS and B2B brands. Specializing in Technical SEO and the transition to AI Search (GEO/AEO).
                        </p>
                        <div className="flex gap-4">
                            <a href="https://linkedin.com/in/chaitanya-kore-342069140" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500/50 transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Strategy Pillars */}
                    <div>
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Strategy Pillars</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/ai-search-seo-strategy" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">AI Search (GEO/AEO)</Link></li>
                            <li><Link href="/seo-for-revenue-growth" className="text-zinc-500 hover:text-emerald-400 text-sm transition-colors">Revenue SEO Hub</Link></li>
                            <li><Link href="/technical-seo-for-saas" className="text-zinc-500 hover:text-blue-500 text-sm transition-colors">SaaS Scale Tech</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Solutions */}
                    <div>
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Solutions</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/industries" className="text-zinc-500 hover:text-white text-sm transition-colors">Industry Expertise</Link></li>
                            <li><Link href="/industries/saas" className="text-zinc-500 hover:text-white text-sm transition-colors">SaaS Growth</Link></li>
                            <li><Link href="/industries/healthcare" className="text-zinc-500 hover:text-white text-sm transition-colors">Healthcare SEO</Link></li>
                            <li><Link href="/industries/real-estate" className="text-zinc-500 hover:text-white text-sm transition-colors">Real Estate SEO</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Growth Tools */}
                    <div>
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Growth Tools</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/tools" className="text-emerald-500 hover:text-white text-sm transition-colors font-bold">All Tools Hub ↗</Link></li>
                            <li><Link href="/roi-calculator" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">ROI Predictor</Link></li>
                            <li><Link href="/tools/ai-visibility-checker" className="text-zinc-500 hover:text-emerald-400 text-sm transition-colors">AI Visibility Checker</Link></li>
                            <li><Link href="/blog" className="text-zinc-500 hover:text-white text-sm transition-colors mt-2 block pt-4 border-t border-zinc-900 border-dashed">AI Insights Blog</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 text-xs">© {new Date().getFullYear()} Chaitanya Kore. All rights reserved.</p>
                    <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
