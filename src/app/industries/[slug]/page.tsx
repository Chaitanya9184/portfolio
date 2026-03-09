import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import industriesData from '@/data/seo/industries.json';
import servicesData from '@/data/seo/services.json';
import { generateSEOMetadata, SEOData } from '@/lib/seo-utils';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import BlogCarousel from "@/components/BlogCarousel";

interface PageProps {
    params: {
        slug: string;
    };
}

function getIndustry(slug: string): SEOData | undefined {
    return (industriesData.industries as SEOData[]).find((ind) => ind.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const industry = getIndustry(params.slug);
    if (!industry) return {};
    return generateSEOMetadata(industry, '/industries');
}

export default function DynamicIndustryPage({ params }: PageProps) {
    const industry = getIndustry(params.slug);

    if (!industry) {
        notFound();
    }

    const defaultFaqs = [
        {
            question: `Why is specialized SEO important for ${industry.name}?`,
            answer: `${industry.name} faces unique challenges in search, from high competition to specific user intent patterns. Our specialized approach addresses these directly.`
        },
        {
            question: `How long does it take to see results in the ${industry.name} sector?`,
            answer: "While SEO is a long-term play, specialized strategies typically show early signals within 3-6 months as authority builds."
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": industry.heading,
        "description": industry.description,
        "provider": {
            "@type": "Person",
            "name": "Chaitanya Kore"
        }
    };

    // Find related service details
    const relatedServices = industry.relatedServices?.map(slug =>
        (servicesData.services as SEOData[]).find(s => s.slug === slug)
    ).filter(Boolean) as SEOData[];

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest mb-12">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
                    <span>/</span>
                    <span className="text-zinc-300">{industry.name}</span>
                </nav>

                {/* Hero */}
                <div className="mb-12">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                        {industry.name} Strategy
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6 font-space-grotesk">
                        {industry.heading}
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        {industry.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* Pain Points */}
                    <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-red-500">⚠️</span> Industry Challenges
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            {industry.painPoints?.map((point, i) => (
                                <li key={i} className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> {point}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div className="p-8 rounded-3xl bg-emerald-950/20 border border-emerald-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400">⚡</span> Our Data-Driven Solution
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            {industry.solutions?.map((sol, i) => (
                                <li key={i} className="flex gap-3"><span className="text-emerald-500/50 mt-1">&rarr;</span> {sol}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Related Services (Internal Linking) */}
                {relatedServices.length > 0 && (
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold text-white mb-8 font-space-grotesk">Recommended Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedServices.map((service) => (
                                <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-all group"
                                >
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{service.name}</h3>
                                    <p className="text-zinc-500 text-sm line-clamp-2">{service.description}</p>
                                    <div className="mt-4 flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-widest">
                                        View Solution <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Dynamic CTA */}
                <div className="p-12 text-center rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0a0a0a] border border-zinc-800 relative overflow-hidden mb-24">
                    <div className="absolute inset-0 bg-emerald-500/5 blur-3xl pointer-events-none" />
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Ready to Dominate {industry.name} Search?</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto mb-8 relative z-10">
                        Let&apos;s build a compounding organic growth moat for your {industry.name} business using advanced Technical SEO and AI Search optimization.
                    </p>
                    <Link href="/contact" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors">
                        Get Your Free Audit
                    </Link>
                </div>

            </div>

            {/* Industry Specific Blogs */}
            <div className="mt-24">
                <BlogCarousel
                    industry={industry.slug}
                    title={`${industry.name} Search`}
                    subtitle="& Intelligence."
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <FAQSection faqs={defaultFaqs} title={`${industry.name} SEO FAQs`} />
                <SchemaMarkup schema={schema} />
            </div>
        </main>
    );
}

