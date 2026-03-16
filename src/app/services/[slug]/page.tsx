import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import servicesData from '@/data/seo/services.json';
import industriesData from '@/data/seo/industries.json';
import { blogPosts, BlogPost } from '@/lib/blog-data';
import { generateSEOMetadata, SEOData } from '@/lib/seo-utils';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import BlogCarousel from "@/components/BlogCarousel";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

function getService(slug: string): SEOData | undefined {
    return (servicesData.services as SEOData[]).find((srv) => srv.slug === slug);
}

export async function generateStaticParams() {
    return servicesData.services.map((srv) => ({
        slug: srv.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getService(slug);
    if (!service) return {};
    return generateSEOMetadata(service, '/services');
}

export default async function DynamicServicePage({ params }: PageProps) {
    const { slug } = await params;
    const service = getService(slug);

    if (!service) {
        notFound();
    }

    const defaultFaqs = [
        {
            question: `How does your ${service.name} differ from other agencies?`,
            answer: `Our ${service.name} is built on a "revenue-first" philosophy. We don't just look for traffic; we look for the specific search patterns that lead to conversions and business growth.`
        },
        {
            question: "What is the primary deliverable for this service?",
            answer: "Depending on the scope, you receive a technical roadmap, implemented code changes (if scoped), and a continuous performance tracking dashboard."
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.heading,
        "description": service.description,
        "provider": {
            "@type": "Person",
            "name": "Chaitanya Kore"
        }
    };

    // Find related industry details
    const relatedIndustries = service.relatedIndustries?.map(slug =>
        (industriesData.industries as SEOData[]).find(i => i.slug === slug)
    ).filter(Boolean) as SEOData[];

    // Find related blog details
    const relatedBlogs = (service.relatedBlogs?.map(slug =>
        blogPosts.find(b => b.slug === slug)
    ).filter(Boolean) as BlogPost[]) || [];

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest mb-12">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                    <span>/</span>
                    <span className="text-zinc-300">{service.name}</span>
                </nav>

                {/* Hero */}
                <div className="mb-12">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                        Service Portfolio
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6 font-space-grotesk">
                        {service.heading}
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        {service.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* Pain Points */}
                    <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-red-500">⚠️</span> Challenges We Solve
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            {service.painPoints?.map((point, i) => (
                                <li key={i} className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> {point}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div className="p-8 rounded-3xl bg-blue-950/20 border border-blue-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-blue-400">⚡</span> Our Methodology
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            {service.solutions?.map((sol, i) => (
                                <li key={i} className="flex gap-3"><span className="text-blue-500/50 mt-1">&rarr;</span> {sol}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Related Industries (Internal Linking) */}
                {relatedIndustries.length > 0 && (
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold text-white mb-8 font-space-grotesk">Target Verticals</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedIndustries.map((ind) => (
                                <Link
                                    key={ind.slug}
                                    href={`/industries/${ind.slug}`}
                                    className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 transition-all group"
                                >
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{ind.name}</h3>
                                    <p className="text-zinc-500 text-sm line-clamp-2">{ind.description}</p>
                                    <div className="mt-4 flex items-center gap-2 text-blue-500 text-xs font-bold uppercase tracking-widest">
                                        View Strategy <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Dynamic CTA */}
                <div className="p-12 text-center rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0a0a0a] border border-zinc-800 relative overflow-hidden mb-24">
                    <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none" />
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Scale Your Organic Moat</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto mb-8 relative z-10">
                        Let&apos;s build a technical SEO engine that compounds. Stop wasting time on tactics that don&apos;t move the needle.
                    </p>
                    <Link href="/contact" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors">
                        Book a Strategy Call
                    </Link>
                </div>

            </div>

            <div className="mt-24">
                <BlogCarousel
                    title="Related Insights"
                    subtitle="& SEO Intelligence."
                    posts={relatedBlogs}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <FAQSection faqs={defaultFaqs} title={`${service.name} Details`} />
                <SchemaMarkup schema={schema} />
            </div>
        </main>
    );
}

