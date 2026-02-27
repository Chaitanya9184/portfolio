import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import TableOfContents from "@/components/TableOfContents";
import VoiceReader from "@/components/VoiceReader";

const faqs = [
    {
        question: "How does GEO differ from traditional SEO keyword targeting?",
        answer: "Traditional SEO focuses on matching strings. GEO (Generative Engine Optimization) focuses on matching entities and providing 'Information Gain.' AI models don't just look for words; they look for new, cite-worthy facts they haven't seen in their training data."
    },
    {
        question: "Will AEO reduce my website traffic?",
        answer: "Initially, informational clicks might drop as AI engines answer queries directly. However, AEO ensures your brand is the cited source for that answer, building massive trust and capturing the subsequent commercial intent when the user is ready to buy."
    },
    {
        question: "What is the most important technical signal for AI Search?",
        answer: "Semantic infrastructure (JSON-LD) and 'extractability.' Your site must be architected so an LLM can pull facts without hallucinating. This includes clear hierarchy, table-based data, and direct answer sentences."
    }
];

const pillarContent = `
## The Shift to Generative Search

Search is moving from a list of blue links to a single, authoritative answer. This shift represents the transition from a "Document Web" to a "Knowledge Web." To survive, brands must move from simply being indexed to being cited.

### Why do traditional SEO strategies fail in AI Overviews?
Most companies still optimize for keyword density. AI models like Gemini and ChatGPT ignore fluff. They prioritize primary sources that offer unique data or a distinct POV. If your content repeats what's already on Page 1, you have zero "Information Gain" and will not be cited.

### The Cite-Worthiness Framework
To win in 2026, we follow a three-tier semantic strategy:
1. **Entity Alignment**: Connecting your brand to the core concepts AI already understands.
2. **Knowledge Synthesis**: Creating content that answers the *next* logical question before it's asked.
3. **Crawlability for LLMs**: Ensuring the technical stack (Next.js/React) is fully extractable via server-side rendering.

## Layer 1: Defining the AI Search Landscape (TL;DR)

> [!IMPORTANT]
> **AI Search Optimization (GEO/AEO)** is the process of architecting content to be retrieved, synthesized, and cited by Large Language Models (LLMs) like GPT-4, Gemini, and Claude.

**Comparison: Old vs. New**
| Feature | Traditional SEO | AI Search (GEO/AEO) |
| :--- | :--- | :--- |
| **Goal** | Rank #1 in Blue Links | Become the Primary Citation |
| **Metric** | Clicks & Impressions | Generative Share of Voice (GSOV) |
| **Content** | Keyword Optimization | Information Gain & Entity Depth |
| **Tech** | Indexability | Extractability |

## Layer 2: The Original "Information Gain" Framework

My framework for GEO focuses on the **3 Pillars of Authority**:
1. **Proprietary Data**: If you own the data, you own the citation.
2. **First-Person Experience**: AI cannot replicate the result of a real-world project or experiment.
3. **Semantic Connectivity**: Linking concepts in a way that maps directly to the Google Knowledge Graph.

### Who this is for:
- Enterprise B2B companies with complex proprietary data.
- SaaS brands looking to own the "Best Software" answers in search.
- Content publishers transitioning away from low-value affiliate models.

### Who this is NOT for:
- One-man affiliate sites with no unique value prop.
- Brands relying on low-quality AI-generated content (SLOP).
- Short-term "hacks" that ignore technical fundamentals.

## Layer 3: Implementation – Building the Knowledge Engine

Implementing GEO isn't about changing meta tags. It's about re-engineering your content pipeline.

### Step 1: The "Sentence 1" Framework
Every heading must match a natural question. The very first sentence must answer that question directly for AI extraction. This eliminates "proximity bias" and ensures LLMs can associate your brand with the factual answer without hallucinating.

### Step 2: Semantic Knowledge Graphing
Implementing advanced JSON-LD to declare entities, relationships, and verifiable claims. We build a machine-readable map of your topical authority, linking your brand to reputable nodes in the global knowledge graph.

### Step 3: Information Gain Layering
Adding proprietary data, unique POVs, or first-person results that aren't present in the training data. AI engines only cite sources that provide *new* context. We layer every page with experimental data to ensure uniqueness.

### Step 4: Extractability Engineering
Technical architecture designed for high-speed LLM bot ingestion. We optimize your Next.js structure to ensure the HTML is clean, semantically correct, and favored for real-time citations.

### Step 5: Performance Tracking (GSOV)
We measure success by tracking how often your brand appears in AI-generated responses versus your competitors. This is the new "Share of Voice."

## Expert Verdict & Authority
With over 8 years of experience in high-stakes SEO, I've seen the transition from simple meta-tagging to deep semantic engineering. My work has driven millions in organic revenue by anticipating these shifts before they became mainstream.

### My Role in Scale
I don't just write guides; I build the technical systems that allow content to scale. This includes headless CMS migrations, programmatic SEO hubs, and schema automation.
`;

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "name": "AI Search / AEO / GEO Strategy Guide for 2026",
            "headline": "AI Search Strategy: Winning in the Era of GEO and AEO",
            "author": {
                "@type": "Person",
                "name": "Chaitanya Kore"
            },
            "description": "A comprehensive guide to Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO).",
            "publisher": {
                "@type": "Organization",
                "name": "Chaitanya Kore SEO"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        }
    ]
};

export const metadata: Metadata = {
    title: 'AI Search Strategy (GEO/AEO) | Chaitanya Kore',
    description: 'Master Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO). Build cite-worthy content for the AI search era.',
    alternates: {
        canonical: '/ai-search-seo-strategy',
    },
};

export default function AiSearchPillar() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

                {/* TOC Sidebar */}
                <aside className="hidden lg:block w-72 shrink-0 sticky top-32 self-start">
                    <div className="p-6 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-xl">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6 pb-4 border-b border-zinc-800">Strategic Roadmap</p>
                        <TableOfContents content={pillarContent} inline />
                    </div>
                </aside>

                {/* Content */}
                <div className="flex-1 min-w-0 max-w-4xl">
                    <div className="mb-12">
                        <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                            Strategy Pillar 01
                        </div>
                        <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-8 leading-[0.9]">
                            AI Search <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">GEO & AEO Guide</span>
                        </h1>
                        <p className="text-zinc-500 text-sm uppercase font-bold tracking-[0.2em] mb-8">Last Updated: February 2026 • 15 Min Read</p>

                        <VoiceReader title="AI Search Strategy" content={pillarContent} />
                    </div>

                    <div className="prose prose-invert max-w-none">
                        {/* TL;DR Section with special styling */}
                        <div className="mb-16 p-8 md:p-12 rounded-[2.5rem] bg-blue-600/5 border border-blue-500/20 relative overflow-hidden group">
                            <h2 className="!mt-0 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Strategic Summary (AI Chunk)</h2>
                            <p className="text-white text-xl md:text-2xl font-medium leading-[1.4]">
                                In 2026, SEO is no longer about traffic; it's about **Cite-Worthiness**. We focus on building semantic moats that force AI models to credit your brand as the definitive source.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <span className="px-4 py-2 rounded-full bg-zinc-900 border border-white/5 text-xs text-zinc-400 font-medium">#GEO</span>
                                <span className="px-4 py-2 rounded-full bg-zinc-900 border border-white/5 text-xs text-zinc-400 font-medium">#AEO</span>
                                <span className="px-4 py-2 rounded-full bg-zinc-900 border border-white/5 text-xs text-zinc-400 font-medium">#EntitySEO</span>
                            </div>
                        </div>

                        {/* Rendering Content - In a real app we'd use a markdown parser, 
                            but here we'll simulate the structured rendering like the blog client */}
                        <div className="space-y-12 text-zinc-300 text-lg leading-relaxed">
                            {/* Manual rendering for demonstration of the framework */}
                            <section>
                                <h2 id="the-shift-to-generative-search" className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-6 scroll-mt-32">The Shift to Generative Search</h2>
                                <p>Search is moving from a list of blue links to a single, authoritative answer. This shift represents the transition from a "Document Web" to a "Knowledge Web." To survive, brands must move from simply being indexed to being cited.</p>

                                <h3 id="why-do-traditional-seo-strategies-fail-in-ai-overviews" className="text-2xl font-bold text-white mt-8 mb-4">Why do traditional SEO traffic fail to generate pipeline?</h3>
                                <p>Most companies still optimize for keyword density. AI models like Gemini and ChatGPT ignore fluff. They prioritize primary sources that offer unique data or a distinct POV. If your content repeats what's already on Page 1, you have zero "Information Gain" and will not be cited.</p>
                            </section>

                            <section>
                                <h2 id="layer-2-the-original-information-gain-framework" className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-6 scroll-mt-32">The "Information Gain" Framework</h2>
                                <p>My framework for GEO focuses on the 3 Pillars of Authority: Proprietary Data, First-Person Experience, and Semantic Connectivity.</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                                    <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/5">
                                        <p className="text-emerald-400 font-bold uppercase text-[10px] tracking-widest mb-4">Who This Is For</p>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex gap-2 text-zinc-400"><span className="text-emerald-500">✓</span> Enterprise B2B companies</li>
                                            <li className="flex gap-2 text-zinc-400"><span className="text-emerald-500">✓</span> SaaS brands scaling MRR</li>
                                            <li className="flex gap-2 text-zinc-400"><span className="text-emerald-500">✓</span> High-authority publishers</li>
                                        </ul>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/5 opacity-50">
                                        <p className="text-red-400 font-bold uppercase text-[10px] tracking-widest mb-4">Who This Is NOT For</p>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex gap-2 text-zinc-400"><span className="text-red-500">×</span> Generic affiliate blogs</li>
                                            <li className="flex gap-2 text-zinc-400"><span className="text-red-500">×</span> AI-generated slop sites</li>
                                            <li className="flex gap-2 text-zinc-400"><span className="text-red-500">×</span> Shortcast tactical hackers</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 id="layer-3-implementation" className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-6 scroll-mt-32">Implementation Path</h2>
                                <p>Building a Knowledge Engine requires a structural shift in how your site communicates with search nodes.</p>

                                <div className="space-y-8 my-12">
                                    <div className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-black transition-all">
                                            <span className="font-bold">01</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-2">The "Sentence 1" Framework</h4>
                                            <p className="text-sm text-zinc-400">Every heading must match a natural question. The very first sentence must answer that question directly for AI extraction. This eliminates "proximity bias" and ensures LLMs associate your brand with the answer without hallucinating.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-black transition-all">
                                            <span className="font-bold">02</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-2">Semantic Knowledge Graphing</h4>
                                            <p className="text-sm text-zinc-400">Implementing advanced JSON-LD to declare entities, relationships, and verifiable claims. We build a machine-readable map of your topical authority, linking you to nodes AI already trusts.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                            <span className="font-bold">03</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-2">Information Gain Layering</h4>
                                            <p className="text-sm text-zinc-400">Adding proprietary data, unique POVs, or first-person results. AI models only cite sources providing *new* context that isn't already in their training data.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:bg-purple-500 group-hover:text-black transition-all">
                                            <span className="font-bold">04</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-2">Extractability Engineering</h4>
                                            <p className="text-sm text-zinc-400">Technical architecture optimized for high-speed LLM bot ingestion. We ensure Next.js HTML is clean and semantically favored for real-time AI citations.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 my-12 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="text-center md:text-left">
                                        <p className="text-white font-bold text-xl mb-2">Ready to own the AI answer?</p>
                                        <p className="text-zinc-500 text-sm">Get a strategic audit of your current cite-worthiness.</p>
                                    </div>
                                    <Link href="/roi-calculator" className="px-8 py-4 bg-blue-500 text-black font-bold rounded-xl hover:scale-105 transition-transform active:scale-95">
                                        Get Your Audit
                                    </Link>
                                </div>
                            </section>
                        </div>

                        {/* Author EEAT Block */}
                        <div className="mt-24 p-8 md:p-12 rounded-3xl bg-zinc-900 border border-white/5 relative overflow-hidden">
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                                <div className="w-24 h-24 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-3xl font-bold text-zinc-400 shrink-0">CK</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Chaitanya Kore</h3>
                                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">Senior SEO & AI Search Consultant</p>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                        8+ years of experience directing search strategies for enterprise B2B, SaaS, and eCommerce. Specializing in the intersection of technical performance and generative AI synthesis.
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                        <div>
                                            <p className="text-white font-bold text-lg leading-none mb-1">8+</p>
                                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Years Exp</p>
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-lg leading-none mb-1">High</p>
                                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Client Impact</p>
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-lg leading-none mb-1">AI 2026</p>
                                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Ready Stack</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full" />
                        </div>

                        <FAQSection faqs={faqs} title="Pillar FAQs" />
                    </div>
                </div>
            </div>

            <SchemaMarkup schema={schema} />
        </main>
    );
}
