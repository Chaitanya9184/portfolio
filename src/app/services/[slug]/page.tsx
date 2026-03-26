{/* AEO vs SEO vs GEO: Key Differences (Category Ownership) */}
<div className="mb-24">
    <h2 className="text-3xl font-bold text-white mb-4 font-space-grotesk">AEO vs SEO vs GEO: Key Differences</h2>
    <p className="text-zinc-300 mb-4">
        If you’re wondering how AEO, SEO, and GEO compare, here’s the real-world breakdown I use with clients:
    </p>
    <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-zinc-200 border border-zinc-700 rounded-xl">
            <thead className="bg-zinc-900">
                <tr>
                    <th className="px-4 py-2 border-b border-zinc-700">Factor</th>
                    <th className="px-4 py-2 border-b border-zinc-700">SEO</th>
                    <th className="px-4 py-2 border-b border-zinc-700">AEO</th>
                    <th className="px-4 py-2 border-b border-zinc-700">GEO</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-zinc-800">
                    <td className="px-4 py-2 border-b border-zinc-700 font-bold">Goal</td>
                    <td className="px-4 py-2 border-b border-zinc-700">Rank in SERPs</td>
                    <td className="px-4 py-2 border-b border-zinc-700">Get cited in answers</td>
                    <td className="px-4 py-2 border-b border-zinc-700">Influence AI outputs</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border-b border-zinc-700 font-bold">Format</td>
                    <td className="px-4 py-2 border-b border-zinc-700">Pages</td>
                    <td className="px-4 py-2 border-b border-zinc-700">Snippets</td>
                    <td className="px-4 py-2 border-b border-zinc-700">Context</td>
                </tr>
                <tr className="bg-zinc-800">
                    <td className="px-4 py-2 border-b border-zinc-700 font-bold">Engines</td>
                    <td className="px-4 py-2 border-b border-zinc-700">Google</td>
                    <td className="px-4 py-2 border-b border-zinc-700">ChatGPT, Perplexity</td>
                    <td className="px-4 py-2 border-b border-zinc-700">LLM ecosystems</td>
                </tr>
            </tbody>
        </table>
    </div>
    <p className="text-zinc-400 mt-4 text-sm">
        Our approach follows a structured <Link href="/checklists/aeo" className="underline hover:text-blue-400">AEO content checklist</Link> and is reinforced by our <Link href="/insights/how-to-become-cited-source-chatgpt-perplexity-2026" className="underline hover:text-blue-400">AI citation strategy framework</Link>, so you’re not just ranking—you’re defining the category.
    </p>
</div>
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
            question: "What is Answer Engine Optimization (AEO) in SEO?",
            answer: "AEO is the process of structuring your content so that AI systems (like ChatGPT, Gemini, Perplexity) can extract, interpret, and cite your brand in generated answers. It goes beyond traditional SEO by focusing on extractability and citation likelihood."
        },
        {
            question: "How do AI search engines choose which sources to cite?",
            answer: "AI engines prioritize concise, well-structured answers, clear entity definitions, and content that matches multi-source consensus. Pages ranking #3–#8 in Google are often cited more than #1, as LLMs seek diversity and reliability."
        },
        {
            question: "Can I control whether ChatGPT or Perplexity cites my site?",
            answer: "You cannot directly control citations, but you can influence them by optimizing for extractability, clarity, and topical authority. Our approach maximizes your likelihood of being cited across AI answer engines."
        },
        {
            question: "What content formats get cited most by LLMs?",
            answer: "Definitions, lists, tables, and FAQ blocks are most frequently extracted and cited by LLMs. Structured data and schema markup further increase your chances."
        },
        {
            question: "Does AEO replace traditional SEO?",
            answer: "No—AEO builds on top of SEO. You still need to rank in Google, but AEO ensures your content is also ready for AI extraction and citation. The two strategies work together."
        },
        {
            question: "How long does it take to see citations appear in AI answers?",
            answer: "Most clients see new citations within 4–12 weeks, depending on crawl frequency and authority. We monitor and report on all new citations as they appear."
        },
        {
            question: "What platforms do you track for citations?",
            answer: "We track Google SGE, Perplexity, ChatGPT web search, and other emerging answer engines. Our monitoring covers both direct citations and indirect answer extraction."
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

    // Internal links for contextual linking
    const internalLinks = [
        { href: "/checklists/aeo", label: "AEO content checklist" },
        { href: "/insights/how-to-become-cited-source-chatgpt-perplexity-2026", label: "AI citation strategy" }
    ];

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

                {/* Humanized Expert Intro + Definition Block */}
                <div className="mb-12">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                        AEO & GEO Services
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6 font-space-grotesk">
                        {service.heading}
                    </h1>
                    <div className="bg-blue-950/20 border border-blue-900/30 rounded-2xl p-6 mb-4">
                        <strong className="block text-blue-300 mb-2">What is AEO? (In Plain English)</strong>
                        <p className="text-zinc-300 text-base">
                            If you want your brand to show up as the answer in ChatGPT, Perplexity, or Google’s AI Overviews, you need more than just good SEO. You need to structure your content so these systems can easily find, understand, and quote you. That’s what Answer Engine Optimization (AEO) is all about—making your expertise the go-to answer for both people and AI.
                        </p>
                    </div>
                </div>

                {/* Pain Points & Methodology */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-red-500">⚠️</span> Why Brands Miss AEO
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            {service.painPoints?.map((point, i) => (
                                <li key={i} className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> {point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 rounded-3xl bg-blue-950/20 border border-blue-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-blue-400">⚡</span> Step-by-Step Methodology
                        </h2>
                        <ol className="space-y-4 text-zinc-400 text-sm leading-relaxed list-decimal list-inside">
                            <li>
                                <strong>Entity Mapping & Topical Authority Graph:</strong> We identify and structure all key entities (brands, products, people, concepts) relevant to your niche. This forms the backbone for both Google and LLMs to understand your expertise. Example: For a SaaS client, we mapped 40+ unique features and industry terms, resulting in richer snippet coverage.
                            </li>
                            <li>
                                <strong>Query Intent Clustering (Conversational + Informational):</strong> We analyze not just keywords, but the actual questions users ask in ChatGPT, Perplexity, and Google SGE. This ensures your content answers the queries that AI engines surface. Example: We surfaced 120+ unique buyer-stage questions for a fintech client, leading to 3x more answer box wins.
                            </li>
                            <li>
                                <strong>Content Structuring for Extraction:</strong> We rewrite and format your content with extractable blocks—definitions, lists, tables, and Q&A. This makes it easy for LLMs to pull direct answers. Example: After adding a definition block and FAQ schema, a client’s page was cited in Perplexity for “What is AEO in SEO?”
                            </li>
                            <li>
                                <strong>Schema + Internal Linking for Context Reinforcement:</strong> We implement advanced schema markup and embed contextual internal links within your content. For example, our approach aligns with our <Link href="/checklists/aeo" className="underline hover:text-blue-400">AEO content checklist</Link> and <Link href="/insights/how-to-become-cited-source-chatgpt-perplexity-2026" className="underline hover:text-blue-400">AI citation strategy framework</Link>, ensuring every key topic is both crawlable and citable by AI engines.
                            </li>
                            <li>
                                <strong>Distribution Layer (Indexing, Citability Signals):</strong> We ensure your content is indexed by both Google and AI crawlers (PerplexityBot, GPTBot, etc.), and monitor for new citation signals. Example: Our monitoring detected 17 new Perplexity citations within 60 days of launch.
                            </li>
                            <li>
                                <strong>Monitoring: AI Citation Tracking + SERP Overlap:</strong> We track where and how your brand is cited in AI answers and compare overlap with traditional SERPs. This closes the loop between SEO and AEO/GEO.
                            </li>
                        </ol>
                    </div>
                </div>

                {/* Proof & Results with Real-World Citation Scenarios */}
                {service.proof && (
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold text-white mb-4 font-space-grotesk">Proof & Results</h2>
                        <ul className="space-y-3 text-zinc-300 text-base">
                            {service.proof.map((item, i) => (
                                <li key={i} className="flex gap-2"><span className="text-green-400">✔</span> {item}</li>
                            ))}
                        </ul>
                        <div className="mt-6 bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-2">Citation Examples</h3>
                            <ul className="space-y-3 text-zinc-200 text-sm">
                                <li>
                                    <strong>Query:</strong> “What is AEO in SEO?”<br />
                                    <strong>Result:</strong> Perplexity cited our definition section as a source for the answer, linking directly to our AEO Optimization page.
                                </li>
                                <li>
                                    <strong>Query:</strong> “Best practices for AI citation strategy?”<br />
                                    <strong>Result:</strong> ChatGPT web search referenced our <Link href="/insights/how-to-become-cited-source-chatgpt-perplexity-2026" className="underline hover:text-blue-400">AI citation strategy</Link> guide in its answer summary.
                                </li>
                                <li>
                                    <strong>Query:</strong> “AEO content checklist for 2026”<br />
                                    <strong>Result:</strong> Google SGE surfaced our <Link href="/checklists/aeo" className="underline hover:text-blue-400">AEO content checklist</Link> as a featured snippet and cited source.
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                {/* How to Get Cited in AI Search Engines (Advanced) */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-white mb-4 font-space-grotesk">How to Get Cited in AI Search Engines</h2>
                    <ul className="space-y-3 text-zinc-300 text-base">
                        <li className="flex gap-2"><span className="text-blue-400">→</span> LLMs prioritize concise, self-contained answers—put your definitive answer in the first 1–2 sentences, then elaborate below.</li>
                        <li className="flex gap-2"><span className="text-blue-400">→</span> Citations are biased toward pages with clear entity definitions and multi-source consistency. If your definition matches what’s cited elsewhere, you’re more likely to be referenced.</li>
                        <li className="flex gap-2"><span className="text-blue-400">→</span> Pages ranking #3–#8 in Google often get cited more than #1, as LLMs seek diversity and avoid over-relying on the top result.</li>
                        <li className="flex gap-2"><span className="text-blue-400">→</span> Use structured formats: lists, tables, and FAQ blocks are easier for AI to extract and cite than long paragraphs.</li>
                        <li className="flex gap-2"><span className="text-blue-400">→</span> Add FAQ schema and Q&A sections—these are prime extraction targets for both Google SGE and LLMs.</li>
                        <li className="flex gap-2"><span className="text-blue-400">→</span> Monitor your citations using tools like Perplexity, ChatGPT web search, and Google SGE. Update your content when you see new citation patterns emerge.</li>
                        <li className="flex gap-2"><span className="text-blue-400">→</span> For a full implementation guide, explore our <Link href="/checklists/aeo" className="underline hover:text-blue-400">AEO content checklist</Link> and learn how our <Link href="/insights/how-to-become-cited-source-chatgpt-perplexity-2026" className="underline hover:text-blue-400">AI citation strategy framework</Link> can help you become the cited source in AI answers.</li>
                    </ul>
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

                {/* Enhanced CTA for Conversion with Objection Handling */}
                <div className="p-12 text-center rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0a0a0a] border border-zinc-800 relative overflow-hidden mb-24">
                    <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none" />
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Ready to Win AI Search?</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto mb-4 relative z-10">
                        For B2B SaaS, fintech, and professional services brands seeking to own Position Zero in AI-powered search. Engagements start at $3,500/mo. Typical timeline: 6–12 weeks for first results.
                    </p>
                    <ul className="text-left text-zinc-300 text-sm max-w-xl mx-auto mb-6 relative z-10 space-y-2">
                        <li><strong>Does this replace SEO?</strong> No—AEO and GEO build on top of your SEO foundation. We ensure you win in both Google and AI answer engines.</li>
                        <li><strong>How long until I see citations?</strong> Most clients see new citations in 4–12 weeks, depending on authority and crawl frequency.</li>
                        <li><strong>What platforms do you track?</strong> We monitor Google SGE, Perplexity, ChatGPT web search, and more.</li>
                        <li><strong>What if I have questions?</strong> Every engagement includes a dedicated strategy call and ongoing support—no surprises, no jargon.</li>
                    </ul>
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

