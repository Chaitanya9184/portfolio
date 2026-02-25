import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SEO Services in India | Chaitanya Kore',
    description: 'Expert SEO, Local SEO, and AI Search solutions across top tier cities in India including Mumbai and Pune.',
};

const locations = [
    {
        city: 'Mumbai',
        slug: 'mumbai',
        tag: 'Financial Capital',
        desc: 'Dominate the hyper-competitive Mumbai market with localization, Maps SEO, and enterprise search strategies suited for India\'s commercial hub.',
    },
    {
        city: 'Pune',
        slug: 'pune',
        tag: 'IT Hub',
        desc: 'Capture the tech-savvy demographic of Pune. Tailored SEO for SaaS startups, educational institutions, and emerging tech companies.',
    }
];

export default function ServiceAreasPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                {/* Header */}
                <div className="mb-20 max-w-3xl">
                    <p className="text-orange-500 text-sm tracking-widest uppercase mb-4 font-semibold">Local SEO Presence</p>
                    <h1 className="text-5xl md:text-6xl text-white font-bold tracking-tighter mb-6 relative inline-block">
                        Service Areas in India
                        <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
                    </h1>
                    <p className="text-zinc-400 text-lg leading-relaxed font-light">
                        While I serve global clients across North America and Europe, I maintain a strong localized SEO presence in key Indian markets. If your business operates in these competitive cities, precision Local SEO and Geo-targeted content is your strongest moat.
                    </p>
                </div>

                {/* Cities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {locations.map((loc) => (
                        <Link
                            href={`/service-areas/${loc.slug}`}
                            key={loc.slug}
                            className="group block p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:bg-zinc-800/60 hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute right-0 top-0 w-32 h-32 bg-orange-500/5 rounded-bl-[100px] transition-colors group-hover:bg-orange-500/10 pointer-events-none" />
                            <span className="inline-block px-3 py-1 mb-4 rounded-md bg-zinc-800 text-orange-400 text-xs font-bold uppercase tracking-wider">
                                {loc.tag}
                            </span>
                            <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">SEO Services in {loc.city}</h2>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                {loc.desc}
                            </p>
                            <span className="text-sm font-bold text-orange-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                                View Local Strategy
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </span>
                        </Link>
                    ))}
                </div>

            </div>
        </main>
    );
}
