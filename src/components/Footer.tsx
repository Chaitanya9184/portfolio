"use client";

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full py-12 bg-[#050505] border-t border-zinc-900 border-dashed">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                    <p className="text-zinc-500/50 text-sm tracking-wide">© {new Date().getFullYear()} Chaitanya Kore.</p>
                    <div className="flex items-center gap-4 text-xs font-medium text-zinc-400">
                        <Link href="/privacy-policy" className="hover:text-zinc-100 transition-colors">Privacy Policy</Link>
                        <span className="text-zinc-800">|</span>
                        <Link href="/terms-of-service" className="hover:text-zinc-100 transition-colors">Terms of Service</Link>
                        <span className="text-zinc-800">|</span>
                        <Link href="/disclaimer" className="hover:text-zinc-100 transition-colors">Disclaimer</Link>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-widest font-bold">
                    <div className="flex gap-6 border-r border-zinc-800 pr-8 mr-2 overflow-hidden">
                        <span className="text-zinc-600 block shrink-0">Pillars:</span>
                        <Link href="/ai-search-seo-strategy" className="text-zinc-500 hover:text-white transition-colors">AI Search</Link>
                        <Link href="/seo-for-revenue-growth" className="text-zinc-500 hover:text-emerald-400 transition-colors">Revenue SEO</Link>
                        <Link href="/technical-seo-for-saas" className="text-zinc-500 hover:text-blue-400 transition-colors">SaaS Tech</Link>
                    </div>
                    <Link href="/industries" className="text-zinc-500 hover:text-emerald-400 transition-colors">Industries</Link>
                    <Link href="/roi-calculator" className="text-zinc-500 hover:text-blue-400 transition-colors">ROI Predictor</Link>
                    <Link href="/blog" className="text-zinc-500 hover:text-blue-400 transition-colors">AI Insights</Link>
                    <Link href="/contact" className="text-zinc-500 hover:text-purple-400 transition-colors">Contact</Link>
                    <a href="https://linkedin.com/in/chaitanya-kore-342069140" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
