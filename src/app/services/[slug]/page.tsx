{/* AEO vs SEO vs GEO: Key Differences (Category Ownership) */}
<div className="mb-24">
    <h2 className="text-3xl font-bold text-white mb-4 font-space-grotesk">AEO vs SEO vs GEO: Key Differences</h2>
    <p className="text-zinc-300 mb-4">
        If you’re wondering how AEO, SEO, and GEO compare, here’s the real-world breakdown I use with clients:
    </p>
    <div className="overflow-x-auto rounded-2xl border border-blue-900/30 bg-blue-950/20 shadow-lg">
        <table className="min-w-full text-sm text-zinc-200">
            <thead className="bg-blue-900/40">
                <tr>
                    <th className="px-4 py-3 text-left font-bold border-r border-blue-900/30">Factor</th>
                    <th className="px-4 py-3 text-left font-bold border-r border-blue-900/30">SEO</th>
                    <th className="px-4 py-3 text-left font-bold border-r border-blue-900/30">AEO</th>
                    <th className="px-4 py-3 text-left font-bold">GEO</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-blue-900/10">
                    <td className="px-4 py-3 font-semibold text-blue-200 border-r border-blue-900/20">Goal</td>
                    <td className="px-4 py-3 border-r border-blue-900/20">Rank in SERPs</td>
                    <td className="px-4 py-3 border-r border-blue-900/20">Get cited in answers</td>
                    <td className="px-4 py-3">Influence AI outputs</td>
                </tr>
                <tr>
                    <td className="px-4 py-3 font-semibold text-blue-200 border-r border-blue-900/20">Format</td>
                    <td className="px-4 py-3 border-r border-blue-900/20">Pages</td>
                    <td className="px-4 py-3 border-r border-blue-900/20">Snippets</td>
                    <td className="px-4 py-3">Context</td>
                </tr>
                <tr className="bg-blue-900/10">
                    <td className="px-4 py-3 font-semibold text-blue-200 border-r border-blue-900/20">Engines</td>
                    <td className="px-4 py-3 border-r border-blue-900/20">Google</td>
                    <td className="px-4 py-3 border-r border-blue-900/20">ChatGPT, Perplexity</td>
                    <td className="px-4 py-3">LLM ecosystems</td>
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

                {/* Hero + Definition Info Box */}
                {/* 1. Definition (Hero already present) */}
                <div className="mb-12">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                        AEO & GEO Services
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 min-w-0">
                            <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-4 font-space-grotesk">
                                {service.heading}
                            </h1>
                            <p className="text-blue-200 text-lg mb-4 max-w-xl">Get your brand cited as the answer in AI search, not just ranked in Google.</p>
                            <ul className="space-y-2 mb-2 max-w-md">
                                <li className="flex items-center gap-2 text-zinc-200 text-base"><span className="text-blue-400">✔</span> Get cited in AI answers</li>
                                <li className="flex items-center gap-2 text-zinc-200 text-base"><span className="text-blue-400">✔</span> Capture zero-click traffic</li>
                                <li className="flex items-center gap-2 text-zinc-200 text-base"><span className="text-blue-400">✔</span> Outrank competitors in LLM responses</li>
                            </ul>
                        </div>
                        <div className="flex-1 flex justify-center items-center min-w-[220px]">
                            <div className="rounded-2xl bg-blue-950/40 border border-blue-900/40 p-8 flex flex-col items-center shadow-xl">
                                <svg width="64" height="64" fill="none" viewBox="0 0 64 64" className="text-blue-400 mb-4"><circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4"/><path d="M32 20v16l10 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
                                <span className="text-blue-200 text-lg font-semibold text-center">AEO: Become the cited answer in AI search</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pain Points & Methodology */}
                {/* 2. Why it Matters (Pain) + 3. How it Works (Methodology) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="p-8 rounded-3xl bg-red-950/10 border border-red-900/20 shadow-md max-w-xl mx-auto" style={{lineHeight:1.7}}>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-red-400">⚠️</span> Why Brands Miss AEO
                        </h2>
                        <ul className="space-y-4 text-zinc-300 text-base max-w-md">
                            {service.painPoints?.map((point, i) => (
                                <li key={i} className="flex gap-3 items-start"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="text-red-400 mt-1"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M12 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg> {point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 rounded-3xl bg-blue-950/10 border border-blue-900/20 shadow-md max-w-xl mx-auto" style={{lineHeight:1.7}}>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-blue-300">⚡</span> Step-by-Step Methodology
                        </h2>
                        <ol className="space-y-6 text-zinc-300 text-base max-w-md">
                            {/* Progressive Steps UI */}
                            <li className="group">
                                <div className="flex items-center gap-4 mb-1">
                                    <span className="text-3xl font-bold text-blue-400">1</span>
                                    <span className="font-semibold text-white">Entity Mapping & Topical Authority Graph</span>
                                </div>
                                <div className="text-blue-200 text-sm mb-1">Map all key entities and relationships in your niche.</div>
                                <details className="ml-10">
                                    <summary className="cursor-pointer text-blue-400 text-xs mb-1">See details</summary>
                                    <div className="text-zinc-400 text-sm mt-1">We identify and structure all key entities (brands, products, people, concepts) relevant to your niche. This forms the backbone for both Google and LLMs to understand your expertise. <span className="text-blue-400">Example:</span> For a SaaS client, we mapped 40+ unique features and industry terms, resulting in richer snippet coverage.</div>
                                </details>
                            </li>
                            <li className="group">
                                <div className="flex items-center gap-4 mb-1">
                                    <span className="text-3xl font-bold text-blue-400">2</span>
                                    <span className="font-semibold text-white">Query Intent Clustering</span>
                                </div>
                                <div className="text-blue-200 text-sm mb-1">Surface the real questions buyers ask in AI search.</div>
                                <details className="ml-10">
                                    <summary className="cursor-pointer text-blue-400 text-xs mb-1">See details</summary>
                                    <div className="text-zinc-400 text-sm mt-1">We analyze not just keywords, but the actual questions users ask in ChatGPT, Perplexity, and Google SGE. <span className="text-blue-400">Example:</span> We surfaced 120+ unique buyer-stage questions for a fintech client, leading to 3x more answer box wins.</div>
                                </details>
                            </li>
                            <li className="group">
                                <div className="flex items-center gap-4 mb-1">
                                    <span className="text-3xl font-bold text-blue-400">3</span>
                                    <span className="font-semibold text-white">Content Structuring for Extraction</span>
                                </div>
                                <div className="text-blue-200 text-sm mb-1">Format for direct answer extraction by LLMs.</div>
                                <details className="ml-10">
                                    <summary className="cursor-pointer text-blue-400 text-xs mb-1">See details</summary>
                                    <div className="text-zinc-400 text-sm mt-1">We rewrite and format your content with extractable blocks—definitions, lists, tables, and Q&A. <span className="text-blue-400">Example:</span> After adding a definition block and FAQ schema, a client’s page was cited in Perplexity for “What is AEO in SEO?”</div>
                                </details>
                            </li>
                            <li className="group">
                                <div className="flex items-center gap-4 mb-1">
                                    <span className="text-3xl font-bold text-blue-400">4</span>
                                    <span className="font-semibold text-white">Schema + Internal Linking</span>
                                </div>
                                <div className="text-blue-200 text-sm mb-1">Reinforce context for both Google and LLMs.</div>
                                <details className="ml-10">
                                    <summary className="cursor-pointer text-blue-400 text-xs mb-1">See details</summary>
                                    <div className="text-zinc-400 text-sm mt-1">We implement advanced schema markup and embed contextual internal links within your content. Our approach aligns with our <Link href="/checklists/aeo" className="underline hover:text-blue-400">AEO content checklist</Link> and <Link href="/insights/how-to-become-cited-source-chatgpt-perplexity-2026" className="underline hover:text-blue-400">AI citation strategy framework</Link>, ensuring every key topic is both crawlable and citable by AI engines.</div>
                                </details>
                            </li>
                            <li className="group">
                                <div className="flex items-center gap-4 mb-1">
                                    <span className="text-3xl font-bold text-blue-400">5</span>
                                    <span className="font-semibold text-white">Distribution Layer</span>
                                </div>
                                <div className="text-blue-200 text-sm mb-1">Ensure AI and Google index your content.</div>
                                <details className="ml-10">
                                    <summary className="cursor-pointer text-blue-400 text-xs mb-1">See details</summary>
                                    <div className="text-zinc-400 text-sm mt-1">We ensure your content is indexed by both Google and AI crawlers (PerplexityBot, GPTBot, etc.), and monitor for new citation signals. <span className="text-blue-400">Example:</span> Our monitoring detected 17 new Perplexity citations within 60 days of launch.</div>
                                </details>
                            </li>
                            <li className="group">
                                <div className="flex items-center gap-4 mb-1">
                                    <span className="text-3xl font-bold text-blue-400">6</span>
                                    <span className="font-semibold text-white">Monitoring: AI Citation Tracking</span>
                                </div>
                                <div className="text-blue-200 text-sm mb-1">Track citations and overlap with SERPs.</div>
                                <details className="ml-10">
                                    <summary className="cursor-pointer text-blue-400 text-xs mb-1">See details</summary>
                                    <div className="text-zinc-400 text-sm mt-1">We track where and how your brand is cited in AI answers and compare overlap with traditional SERPs. This closes the loop between SEO and AEO/GEO.</div>
                                </details>
                            </li>
                        </ol>
                    </div>
                </div>

                {/* Proof & Results with Real-World Citation Scenarios */}
                {/* 4. Proof & Results */}
                {service.proof && (
                    <div className="mb-24">
                        <div className="border-t border-zinc-800 mb-12" />
                        <h2 className="text-3xl font-bold text-white mb-4 font-space-grotesk">Proof & Results</h2>
                        <div className="bg-green-900/20 border border-green-800/30 rounded-2xl p-8 mb-6 shadow-md flex flex-col md:flex-row gap-8 items-center justify-center">
                            {/* Example KPIs, replace with dynamic values if available */}
                            <div className="flex flex-col items-center flex-1 min-w-[120px]">
                                <span className="text-4xl md:text-5xl font-extrabold text-green-400">+42%</span>
                                <span className="text-green-200 text-sm font-semibold mt-1">AI Visibility Growth</span>
                                <span className="text-zinc-400 text-xs mt-2 text-center">After AEO implementation (avg. client)</span>
                            </div>
                            <div className="flex flex-col items-center flex-1 min-w-[120px]">
                                <span className="text-4xl md:text-5xl font-extrabold text-green-400">17</span>
                                <span className="text-green-200 text-sm font-semibold mt-1">New Citations</span>
                                <span className="text-zinc-400 text-xs mt-2 text-center">Detected in Perplexity & ChatGPT (60 days)</span>
                            </div>
                            <div className="flex flex-col items-center flex-1 min-w-[120px]">
                                <span className="text-4xl md:text-5xl font-extrabold text-green-400">29%</span>
                                <span className="text-green-200 text-sm font-semibold mt-1">SERP Overlap</span>
                                <span className="text-zinc-400 text-xs mt-2 text-center">Google & AI answer engines</span>
                            </div>
                        </div>
                        <div className="bg-blue-950/20 border border-blue-900/30 rounded-2xl p-6 shadow-md">
                            <h3 className="text-xl font-bold text-white mb-4">Citation Examples</h3>
                            <div className="space-y-6">
                                {/* Example 1: Perplexity */}
                                <div className="rounded-xl bg-zinc-900/70 border border-zinc-800 p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-zinc-800 px-3 py-1 rounded text-zinc-300 text-xs font-mono">Perplexity</span>
                                        <span className="text-zinc-400 text-xs">Query:</span>
                                        <span className="bg-zinc-950 px-2 py-1 rounded text-blue-200 text-xs font-mono">What is AEO in SEO?</span>
                                    </div>
                                    <div className="bg-zinc-950 border border-blue-900/40 rounded p-3 text-sm text-zinc-200 mb-2">
                                        <span className="text-blue-400 font-semibold">“Answer Engine Optimization (AEO)</span> is the process of structuring your content so that AI systems can extract, interpret, and cite your brand in generated answers...” <span className="text-green-400 font-bold">[Your Brand Cited]</span>
                                    </div>
                                    <div className="text-xs text-zinc-400">Cited: <span className="underline text-blue-400">AEO Optimization page</span></div>
                                </div>
                                {/* Example 2: ChatGPT Web Search */}
                                <div className="rounded-xl bg-zinc-900/70 border border-zinc-800 p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-zinc-800 px-3 py-1 rounded text-zinc-300 text-xs font-mono">ChatGPT</span>
                                        <span className="text-zinc-400 text-xs">Query:</span>
                                        <span className="bg-zinc-950 px-2 py-1 rounded text-blue-200 text-xs font-mono">Best practices for AI citation strategy?</span>
                                    </div>
                                    <div className="bg-zinc-950 border border-blue-900/40 rounded p-3 text-sm text-zinc-200 mb-2">
                                        For a robust <span className="text-blue-400 font-semibold">AI citation strategy</span>, focus on extractable definitions, FAQ schema, and entity clarity. See: <Link href="/insights/how-to-become-cited-source-chatgpt-perplexity-2026" className="underline text-blue-400">AI citation strategy guide</Link> <span className="text-green-400 font-bold">[Your Brand Cited]</span>
                                    </div>
                                    <div className="text-xs text-zinc-400">Cited: <span className="underline text-blue-400">AI citation strategy</span></div>
                                </div>
                                {/* Example 3: Google SGE */}
                                <div className="rounded-xl bg-zinc-900/70 border border-zinc-800 p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-zinc-800 px-3 py-1 rounded text-zinc-300 text-xs font-mono">Google SGE</span>
                                        <span className="text-zinc-400 text-xs">Query:</span>
                                        <span className="bg-zinc-950 px-2 py-1 rounded text-blue-200 text-xs font-mono">AEO content checklist for 2026</span>
                                    </div>
                                    <div className="bg-zinc-950 border border-blue-900/40 rounded p-3 text-sm text-zinc-200 mb-2">
                                        <span className="text-blue-400 font-semibold">AEO content checklist</span> surfaced as a featured snippet and cited source for AI Overviews. <Link href="/checklists/aeo" className="underline text-blue-400">AEO content checklist</Link> <span className="text-green-400 font-bold">[Your Brand Cited]</span>
                                    </div>
                                    <div className="text-xs text-zinc-400">Cited: <span className="underline text-blue-400">AEO content checklist</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* How to Get Cited in AI Search Engines (Advanced) */}
                {/* 5. How to Win (Education) */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-white mb-8 font-space-grotesk">How to Get Cited in AI Search Engines</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-2xl p-6 flex flex-col items-start shadow-md">
                            <div className="flex items-center gap-3 mb-2">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-yellow-400"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                <span className="font-bold text-yellow-200">Concise, Self-Contained Answers</span>
                            </div>
                            <span className="text-zinc-300 text-base">Put your definitive answer in the first 1–2 sentences, then elaborate below.</span>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-2xl p-6 flex flex-col items-start shadow-md">
                            <div className="flex items-center gap-3 mb-2">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-yellow-400"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/></svg>
                                <span className="font-bold text-yellow-200">Entity Definitions & Consensus</span>
                            </div>
                            <span className="text-zinc-300 text-base">Pages with clear entity definitions and multi-source consistency get cited more.</span>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-2xl p-6 flex flex-col items-start shadow-md">
                            <div className="flex items-center gap-3 mb-2">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-yellow-400"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                <span className="font-bold text-yellow-200">Structured Formats</span>
                            </div>
                            <span className="text-zinc-300 text-base">Lists, tables, and FAQ blocks are easier for AI to extract and cite than long paragraphs.</span>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-2xl p-6 flex flex-col items-start shadow-md">
                            <div className="flex items-center gap-3 mb-2">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-yellow-400"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                <span className="font-bold text-yellow-200">Ranking Diversity</span>
                            </div>
                            <span className="text-zinc-300 text-base">Pages ranking #3–#8 in Google often get cited more than #1.</span>
                        </div>
                        {/* Card 5 */}
                        <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-2xl p-6 flex flex-col items-start shadow-md">
                            <div className="flex items-center gap-3 mb-2">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-yellow-400"><path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                <span className="font-bold text-yellow-200">FAQ Schema & Q&A</span>
                            </div>
                            <span className="text-zinc-300 text-base">Add FAQ schema and Q&A sections—prime extraction targets for Google SGE and LLMs.</span>
                        </div>
                        {/* Card 6 */}
                        <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-2xl p-6 flex flex-col items-start shadow-md">
                            <div className="flex items-center gap-3 mb-2">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-yellow-400"><path d="M4 4l16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                <span className="font-bold text-yellow-200">Monitor & Update</span>
                            </div>
                            <span className="text-zinc-300 text-base">Monitor citations in Perplexity, ChatGPT, Google SGE. Update content as patterns emerge.</span>
                        </div>
                        {/* Card 7 */}
                        <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-2xl p-6 flex flex-col items-start shadow-md">
                            <div className="flex items-center gap-3 mb-2">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-yellow-400"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/></svg>
                                <span className="font-bold text-yellow-200">Full Implementation Guide</span>
                            </div>
                            <span className="text-zinc-300 text-base">See our <Link href="/checklists/aeo" className="underline text-blue-400">AEO content checklist</Link> and <Link href="/insights/how-to-become-cited-source-chatgpt-perplexity-2026" className="underline text-blue-400">AI citation strategy framework</Link> for step-by-step help.</span>
                        </div>
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

                {/* Enhanced CTA for Conversion with Objection Handling */}
                {/* 6. CTA */}
                <div className="p-12 text-center rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0a0a0a] border border-zinc-800 relative overflow-hidden mb-24">
                    <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none" />
                    <h2 className="text-4xl font-extrabold text-red-400 mb-4 relative z-10">Stop Losing Visibility in AI Search</h2>
                    <p className="text-zinc-200 max-w-xl mx-auto mb-4 text-lg relative z-10">
                        If your competitors are being cited and you’re not, you’re already behind. <span className="text-blue-300 font-semibold">Get cited, win zero-click traffic, and own Position Zero in AI-powered search.</span>
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-8 mb-6 relative z-10">
                        <div className="flex-1 min-w-[180px]">
                            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 mb-2">
                                <span className="text-green-400 font-bold text-2xl">$3,500/mo</span>
                                <div className="text-zinc-400 text-xs">Starting engagement</div>
                            </div>
                        </div>
                        <div className="flex-1 min-w-[180px]">
                            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 mb-2">
                                <span className="text-blue-400 font-bold text-2xl">6–12 weeks</span>
                                <div className="text-zinc-400 text-xs">Typical timeline for first results</div>
                            </div>
                        </div>
                        <div className="flex-1 min-w-[180px]">
                            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 mb-2">
                                <span className="text-yellow-300 font-bold text-2xl">Position Zero</span>
                                <div className="text-zinc-400 text-xs">AI answer box & citations</div>
                            </div>
                        </div>
                    </div>
                    <ul className="text-left text-zinc-300 text-sm max-w-xl mx-auto mb-6 relative z-10 space-y-2">
                        <li><strong>Does this replace SEO?</strong> No—AEO and GEO build on top of your SEO foundation. We ensure you win in both Google and AI answer engines.</li>
                        <li><strong>How long until I see citations?</strong> Most clients see new citations in 4–12 weeks, depending on authority and crawl frequency.</li>
                        <li><strong>What platforms do you track?</strong> We monitor Google SGE, Perplexity, ChatGPT web search, and more.</li>
                        <li><strong>What if I have questions?</strong> Every engagement includes a dedicated strategy call and ongoing support—no surprises, no jargon.</li>
                    </ul>
                    <Link href="/contact" className="relative z-10 inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-400 to-green-400 text-black font-extrabold rounded-2xl text-lg shadow-lg hover:scale-105 hover:from-blue-300 hover:to-green-300 transition-all">
                        Book My AI Visibility Call
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

