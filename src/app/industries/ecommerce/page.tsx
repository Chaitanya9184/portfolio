import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const ecommerceFaqs = [
    {
        question: "What makes eCommerce SEO different from regular SEO?",
        answer: "eCommerce SEO involves managing massive scale. Instead of optimizing 50 pages, we're optimizing 50,000 product pages and dynamic category filters. It heavily involves technical architecture, crawl budget management, handling duplicate content (like faceted navigation), and Product Schema markup to win rich snippets."
    },
    {
        question: "How do you handle out-of-stock products for SEO?",
        answer: "It depends on whether the item is permanently discontinued or temporarily out of stock. For temporary shortages, we keep the page live with an email capture/waitlist. For permanently discontinued items, we implement 301 redirects to the most relevant parent category or an upgraded replacement product to preserve link equity."
    },
    {
        question: "What is the impact of Core Web Vitals on eCommerce?",
        answer: "Core Web Vitals (site speed, interactivity, and visual stability) directly impact Google rankings and, more importantly, your conversion rates. Slow eCommerce sites suffer from high bounce rates and cart abandonment. A 1-second delay in page load time can reduce conversions by up to 7%."
    },
    {
        question: "How do you optimize for Answer Engine Optimization (AEO) in eCommerce?",
        answer: "AEO for retail means ensuring AI shopping assistants (like Google's SGE or ChatGPT) understand exactly what you sell. We achieve this by enriching technical Product formatting, implementing detailed semantic HTML, and building comprehensive 'Buying Guides' that answer the complex questions users ask before purchasing."
    },
    {
        question: "How long does it take to see results for an eCommerce SEO campaign?",
        answer: "Technical improvements—like fixing indexation bloat or canonical issues—often show traffic increases within 30-60 days. Broader category authority and content-driven strategies typically take 3 to 6 months to yield significant compounding revenue."
    }
];

const ecommerceSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "eCommerce SEO & AI Search Optimization",
            "provider": {
                "@type": "Person",
                "name": "Chaitanya Kore"
            },
            "description": "Technical SEO, Faceted Navigation, and AI Discovery strategies specifically designed to scale eCommerce organic revenue."
        },
        {
            "@type": "FAQPage",
            "mainEntity": ecommerceFaqs.map(faq => ({
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
    title: 'eCommerce SEO & AI Search Solutions | Chaitanya Kore',
    description: 'Technical SEO, Faceted Navigation, and AI Discovery strategies specifically designed to scale eCommerce organic revenue.',
    alternates: {
        canonical: '/industries/ecommerce',
    },
};

export default function EcommerceIndustryPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <Link href="/industries" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest mb-12 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6" /></svg>
                    All Industries
                </Link>

                {/* Hero */}
                <div className="mb-20">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                        eCommerce Optimization
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6">
                        Converting Clicks to <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Organic Revenue</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        eCommerce SEO isn&apos;t just about keywords; it&apos;s about managing crawl budget, structuring millions of SKUs, and ensuring product discoverability across Google, Shopping graphs, and AI Answer Engines.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-4">The eCommerce Dilemma</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Massive, dynamic sites often struggle with technical debt. Duplicate content from faceted filtering, wasted crawl capacity on low-value sorting options, and poor site speed can destroy rankings. E-commerce brands also face the threat of users demanding direct product recommendations from AI, bypassing standard search results entirely.
                        </p>
                        <ul className="space-y-3">
                            {["Faceted Navigation cannibalization", "Indexation issues for large SKU counts", "Missing or invalid Schema Markup"].map((issue, i) => (
                                <li key={i} className="flex gap-2 text-sm text-zinc-500">
                                    <span className="text-zinc-700">✗</span> {issue}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900/20 to-zinc-900/40 border border-emerald-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4">The Technical Edge</h2>
                        <ul className="space-y-4 text-zinc-300 text-sm leading-relaxed mb-6">
                            <li><strong>Advanced Crawl Management:</strong> Implementing strategic canonicalization, robots.txt directives, and optimized internal linking to ensure Google crawls what matters most.</li>
                            <li><strong>Semantic Product Data (GEO):</strong> Enriching product schema (Product, Review, Offer, AggregateRating) so AI shopping assistants and Google&apos;s Merchant Center can parse your inventory perfectly.</li>
                            <li><strong>Category Dominance:</strong> Elevating collection/category pages to serve as high-converting landing pages for broad commercial queries.</li>
                        </ul>
                    </div>
                </div>

                <div className="p-12 text-center rounded-3xl bg-zinc-900/30 border border-zinc-800 mb-24">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to scale your store?</h2>
                    <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Discover how technical SEO can unlock compounding growth for your retail business.</p>
                    <a href="mailto:korechaitanya10@gmail.com" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-colors">
                        Request a Technical E-commerce Audit
                    </a>
                </div>

                {/* FAQs */}
                <FAQSection faqs={ecommerceFaqs} title="eCommerce SEO FAQs" />

                {/* Schema Markup */}
                <SchemaMarkup schema={ecommerceSchema} />

            </div>
        </main>
    );
}
