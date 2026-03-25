import { Metadata } from 'next';
import Link from 'next/link';
import servicesData from '@/data/seo/services.json';
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
    title: 'Expertise & SEO Services | Chaitanya Kore',
    description: 'High-impact SEO services including AI Search audits, technical SEO at scale, and fractional growth leadership.',
    alternates: {
        canonical: '/services',
    },
};

const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Expertise & SEO Services | Chaitanya Kore",
    "description": "High-impact SEO services including AI Search audits, technical SEO at scale, and fractional growth leadership.",
    "url": "https://www.chaitanyakore.in/services"
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                {/* Header */}
                <div className="mb-12 max-w-3xl">
                    <p className="text-blue-500 text-sm tracking-widest uppercase mb-4 font-semibold">Our Methodology</p>
                    <h1 className="text-5xl md:text-6xl text-white font-bold tracking-tighter mb-6 relative inline-block">
                        Services & Expertise
                        <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                    </h1>
                    <p className="text-zinc-400 text-lg leading-relaxed font-light">
                        I specialize in the high-leverage technical and strategic work that standard agencies ignore. From AI search readiness to engineering-led technical SEO, every strategy is built to drive pipeline revenue, not just vanity metrics.
                    </p>
                </div>

                {/* Service Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {servicesData.services.map((srv) => (
                        <Link
                            href={`/services/${srv.slug}`}
                            key={srv.slug}
                            className="group relative overflow-hidden flex flex-col h-full p-8 rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:bg-zinc-800/80 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="relative z-10 mb-6">
                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{srv.name}</h2>
                                <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                                    {srv.description}
                                </p>
                            </div>
                            <div className="relative z-10 mt-auto">
                                <div className="pt-4 border-t border-zinc-800/50 group-hover:border-blue-500/30 transition-colors duration-300">
                                    <span className="text-sm font-bold text-blue-500 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                                        Learn More
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>

            <SchemaMarkup schema={servicesSchema} />
        </main>
    );
}
