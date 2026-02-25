import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const mumbaiFaqs = [
    {
        question: "Why is local SEO important for Mumbai businesses?",
        answer: "Mumbai is a massive, highly competitive market. Users search with hyper-local intent (e.g., 'Financial consultant in BKC' or 'Software agency Andheri'). Local SEO ensures you capture this high-intent traffic by dominating the Google Map Pack and localized organic search results."
    },
    {
        question: "How do you rank a Google Business Profile in a saturated market like Mumbai?",
        answer: "Ranking in the 'Local Pack' requires more than just filling out a profile. We focus on continuous profile optimization, managing local citations (NAP consistency), generating targeted reviews, and building strong localized backlinks from relevant Indian domains."
    },
    {
        question: "Can you help with SEO for multi-location chains in Maharashtra?",
        answer: "Yes, we specialize in multi-location architecture. If you have branches in Mumbai, Pune, and Nagpur, we build localized landing pages and manage distinct Google Business Profiles for each location to ensure you rank no matter where the searcher is located."
    },
    {
        question: "What is the difference between local SEO and Enterprise SEO in Mumbai?",
        answer: "Enterprise SEO focuses on scaling massive websites (like eCommerce or national news portals) to capture broad market share. Local SEO focuses intensely on geographic relevance. However, large Mumbai-based corporations often need a hybrid approach: enterprise-grade technical architecture combined with localized relevance."
    },
    {
        question: "How long does it take to see results from local SEO?",
        answer: "Visible improvements in Google Maps and local listings often occur within 45 to 90 days as we clean up citations and optimize the GBP profile. Broader organic rankings for competitive local terms typically take 3 to 6 months to stabilize."
    }
];

const mumbaiSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Local SEO Consulting Mumbai",
            "provider": {
                "@type": "Person",
                "name": "Chaitanya Kore"
            },
            "areaServed": {
                "@type": "City",
                "name": "Mumbai",
                "sameAs": "https://en.wikipedia.org/wiki/Mumbai"
            },
            "description": "Expert Local SEO and AI Search consulting for businesses based in Mumbai and the surrounding MMR region."
        },
        {
            "@type": "FAQPage",
            "mainEntity": mumbaiFaqs.map(faq => ({
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
    title: 'SEO Expert in Mumbai | Top SEO Consultant | Chaitanya Kore',
    description: 'Looking for a Top SEO Expert in Mumbai? I provide enterprise SEO, local search optimization, and AI SEO consulting for Mumbai-based businesses.',
};

export default function MumbaiSEOPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <Link href="/service-areas" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest mb-12 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6" /></svg>
                    All Service Areas
                </Link>

                {/* Hero */}
                <div className="mb-20">
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6 leading-tight">
                        Premium SEO <br className="hidden md:block" />
                        Consulting in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Mumbai</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        Mumbai is India&apos;s financial and commercial capital. To stand out here, generic SEO won&apos;t cut it. You need aggressive localized strategies, Map Pack dominance, and high-authority digital PR.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Market */}
                    <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-4">The Mumbai Market</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            From FinTech startups in BKC to legacy real estate developers in South Bombay, the search landscape is saturated. Ranking requires outmaneuvering established players with superior technical health and targeted topical relevance.
                        </p>
                        <div className="flex flex-col gap-3 mt-8">
                            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-2">Key Local Ranking Factors:</h3>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 mt-1">&#10003;</span>
                                <p className="text-zinc-400 text-sm">Hyper-local Google Business Profile (GBP) optimization for micro-markets (e.g., &quot;SEO Bandra&quot;, &quot;Finance tools Andheri&quot;).</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-500 mt-1">&#10003;</span>
                                <p className="text-zinc-400 text-sm">Mobile-first indexing compliance—crucial for Mumbai&apos;s massive smartphone commuter demographic.</p>
                            </div>
                        </div>
                    </div>

                    {/* How I Help */}
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-900/20 to-zinc-900/40 border border-orange-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4">How I Help Mumbai Businesses</h2>
                        <ul className="space-y-4 text-zinc-300 text-sm leading-relaxed mb-6">
                            <li><strong>Enterprise Architecture:</strong> For large corporate sites, I engineer scalable URL structures and crawl management plans.</li>
                            <li><strong>Local AI Search (GEO):</strong> Positioning your Mumbai-based business as the featured answer when users ask AI tools for &quot;Best [Service] near me&quot;.</li>
                            <li><strong>Conversion Rate Optimization:</strong> Driving traffic is step one; optimizing local landing pages for immediate inquiry is step two.</li>
                        </ul>
                    </div>
                </div>

                <div className="p-12 text-center rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0a0a0a] border border-zinc-800 relative overflow-hidden mb-24">
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Dominate the Local SERP</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto mb-8 relative z-10">
                        Are you a Mumbai business losing digital market share? Let&apos;s discuss a custom growth roadmap.
                    </p>
                    <Link href="/#contact" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors">
                        Get a Local Audit
                    </Link>
                </div>

                {/* FAQs */}
                <FAQSection faqs={mumbaiFaqs} title="Mumbai SEO FAQs" />

                {/* Schema Markup */}
                <SchemaMarkup schema={mumbaiSchema} />

            </div>
        </main>
    );
}
