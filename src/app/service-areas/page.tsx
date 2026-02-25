import { Metadata } from 'next';
import Link from 'next/link';
import SchemaMarkup from "@/components/SchemaMarkup";

const serviceAreasSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Local SEO Service Areas | Chaitanya Kore",
    "description": "Strategic Local SEO and AI Search consulting across key Indian markets including Mumbai and Pune.",
    "url": "https://www.chaitanyakore.in/service-areas/"
};

export const metadata: Metadata = {
    title: 'SEO Services in India | Chaitanya Kore',
    description: 'Expert SEO, Local SEO, and AI Search solutions across top tier cities in India including Mumbai and Pune.',
    alternates: {
        canonical: '/service-areas',
    },
};

const locations = [
    {
        city: 'Mumbai',
        slug: 'mumbai',
        tag: 'Financial Capital',
        desc: 'Win the tough Mumbai market. We use local maps, smart content, and strong search tactics built for the financial heart of India.',
    },
    {
        city: 'Pune',
        slug: 'pune',
        tag: 'IT Hub',
        desc: 'Reach the smart, tech-focused buyers of Pune. We craft clear SEO plans for fast SaaS startups, top schools, and growing tech leaders.',
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
                        I guide global clients across North America and Europe. I also keep a strong focus on key Indian markets. If you do business in these fast, crowded cities, you need sharp Local SEO. We use Geo-targeted content to build your strongest lead source.
                    </p>
                </div>

                {/* Cities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
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

                {/* Additional SEO Content Section */}
                <div className="mt-24 pt-16 border-t border-zinc-900 border-dashed">
                    <h2 className="text-3xl md:text-4xl text-white font-bold tracking-tighter mb-8">
                        The Power of Localized Search Precision
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-400 text-lg leading-relaxed font-light">
                        <div>
                            <p className="mb-6">
                                Competing in massive Indian markets like Mumbai and Pune requires more than basic keyword research. You need precise, localized search strategies. Search engines now prioritize proximity and strict local intent. We go beyond simple directory listings to build a robust local entity graph for your business.
                            </p>
                            <p>
                                Our approach to local SEO integrates traditional mappack optimization with advanced Generative Engine Optimization (GEO). We ensure that AI tools like Google Gemini accurately understand where your business operates. We use hyper-local schema markup to link your services directly to neighborhood geocoordinates, sending clear trust signals to the algorithms.
                            </p>
                        </div>
                        <div>
                            <p className="mb-6">
                                In highly competitive regions, zero-click searches are the norm. Customers want answers instantly without loading a full website. We structure your digital presence to win these interactions. By optimizing your Google Business Profile, managing local reviews, and building targeted local content silos, we ensure your brand controls the top of the search results page.
                            </p>
                            <p>
                                Whether you are a local branch of a national enterprise or an aspiring startup in Pune&apos;s tech hubs, a targeted localization strategy drives real revenue. It captures high-intent traffic from users who are ready to engage, visit, or purchase right now. Let us help you dominate your local market.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <SchemaMarkup schema={serviceAreasSchema} />
        </main>
    );
}
