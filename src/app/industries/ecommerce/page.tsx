import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const ecommerceFaqs = [
    {
        question: "What makes eCommerce SEO different from regular SEO?",
        answer: "eCommerce SEO involves managing massive scale. You are not just optimizing 50 pages. You are managing 50,000 product pages and dynamic filters. We fix technical architecture and handle duplicate content like faceted search. We also build Product Schema markup to help you win rich snippets."
    },
    {
        question: "How do you handle out-of-stock products for SEO?",
        answer: "It depends if the item is gone forever or just out of stock for now. For short gaps, we keep the page live and add an email waitlist. For items that are gone for good, we use 301 redirects. We point them to the best parent category or a similar new product to save your SEO value."
    },
    {
        question: "What is the impact of Core Web Vitals on eCommerce?",
        answer: "Core Web Vitals measure site speed, interactivity, and visual stability. They directly influence Google rankings and your conversion rates. Slow eCommerce sites face high bounce rates and lost sales. A 1-second delay in page load time can reduce your sales by up to 7%."
    },
    {
        question: "How do you optimize for Answer Engine Optimization (AEO) in eCommerce?",
        answer: "AEO means making sure AI shopping tools (like Google SGE or ChatGPT) understand what you sell. We fix your technical product formatting and build detailed buying guides. These guides answer the exact complex questions buyers ask before they make a purchase."
    },
    {
        question: "How long does it take to see results for an eCommerce SEO campaign?",
        answer: "Technical fixes—like stopping index bloat or fixing canonical tags—often bring more traffic in 30 to 60 days. Broader category growth and content plans usually take 3 to 6 months to start driving strong, steady revenue."
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
                        eCommerce SEO is more than just adding keywords. It is about guiding crawl bots, structuring millions of products, and making sure buyers find you on Google, Shopping cards, and AI Answer Engines.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-4">The eCommerce Dilemma</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Huge, dynamic stores often have deep technical flaws. Duplicate pages from search filters, wasted crawl time on basic sorting tabs, and slow loading speeds will sink your rankings. Online stores also face a new threat: users asking AI tools for direct product suggestions instead of standard web searches.
                        </p>
                        <ul className="space-y-3">
                            {["Faceted search making duplicate content", "Index issues for millions of product pages", "Missing or broken Schema Markup"].map((issue, i) => (
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
                            <li><strong>Smart Crawl Management:</strong> We use strict canonical tags, tight robots.txt rules, and smart internal links so Google only crawls your best pages.</li>
                            <li><strong>AI Product Data (GEO):</strong> We build out rich product schema (Product, Review, Offer, AggregateRating). This helps AI shopping bots and Google Merchant Center read your sales inventory perfectly.</li>
                            <li><strong>Category Dominance:</strong> We turn simple collection pages into highly tuned landing pages that rank for big, profitable search terms.</li>
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
