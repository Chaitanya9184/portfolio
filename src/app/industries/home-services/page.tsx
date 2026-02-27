import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const homeServicesFaqs = [
    {
        question: "How do you beat massive lead generation platforms (like Angi, Thumbtack)?",
        answer: "Lead gen platforms dilute your brand and pit you against cheap competitors. We beat them by dominating the Google Map Pack (Local 3-Pack) and building hyper-local, city-specific service pages that capture users searching for immediate, trusted local help."
    },
    {
        question: "What is the key to ranking in the Google Map Pack?",
        answer: "Map Pack rankings depend on Proximity, Prominence, and Relevance. We optimize your Google Business Profile (GBP), manage geo-tagged review velocity, construct local citation signals, and implement LocalBusiness schema to force Google to recognize your local authority."
    },
    {
        question: "How do Local Service Ads (LSAs) work with Organic SEO?",
        answer: "LSAs sit at the very top of Google for home services. They are critical for immediate leads, but they are expensive. A synergistic strategy uses LSAs for instant visibility while building the Organic and Map Pack foundation to lower your overall blended Cost Per Lead (CPL) long term."
    },
    {
        question: "Why do I need a separate page for every city I serve?",
        answer: "Google's algorithm values hyper-relevance. A user in 'Austin' searching for 'emergency plumber' wants to see an Austin-specific result. Dedicated, unique city-service pages satisfy this local intent perfectly without resorting to spammy doorway pages."
    }
];

const homeServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Home Services SEO & Local Map Pack Dominance",
            "provider": {
                "@type": "Person",
                "name": "Chaitanya Kore"
            },
            "description": "Hyper-local SEO strategies for Home Services companies (HVAC, Plumbing, Roofing) to dominate the Google Map Pack and slash reliance on paid leads."
        },
        {
            "@type": "FAQPage",
            "mainEntity": homeServicesFaqs.map(faq => ({
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
    title: 'Home Services SEO & Local Maps | Chaitanya Kore',
    description: 'Hyper-local SEO strategies for Home Services companies (HVAC, Plumbing, Roofing) to dominate the Google Map Pack and slash reliance on paid leads.',
    alternates: {
        canonical: '/industries/home-services',
    },
};

export default function HomeServicesIndustryPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <Link href="/industries" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest mb-12 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6" /></svg>
                    All Industries
                </Link>

                {/* Hero */}
                <div className="mb-12">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
                        Home Services
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6">
                        Owning the Local <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Map Pack Search</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        In home services, if you aren't in the top 3 of the Google Map Pack, you don't exist. I help contractors and local businesses stop renting leads and start owning their local search results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-red-500">⚠️</span> The Shared Lead "Burn"
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Platforms like Angi and Thumbtack sell the same lead to 5 of your competitors, forcing you into a 'Race to the Bottom' on price.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Your Google Ads costs are likely skyrocketing as national brands outbid you for your own local keywords.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> If your Google Business Profile isn't optimized, you're handing the most lucrative emergency jobs directly to your competitors.</li>
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-orange-950/20 border border-orange-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-orange-400">⚡</span> My Local Dominance Framework
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-orange-500/50 mt-1">&rarr;</span> <strong>Google Business Optimization:</strong> I don't just 'fill out' your profile; I optimize for review velocity and localized citation signals to force you into the top 3.</li>
                            <li className="flex gap-3"><span className="text-orange-500/50 mt-1">&rarr;</span> <strong>Hyper-Local Infrastructure:</strong> I build city-specific and service-specific landing pages that capture customers the second their house needs a fix.</li>
                            <li className="flex gap-3"><span className="text-orange-500/50 mt-1">&rarr;</span> <strong>Technical Local Schema:</strong> I inject exact GPS coordinates and service area data directly into your code so Google knows exactly which neighborhoods you own.</li>
                        </ul>
                    </div>
                </div>

                {/* Call To Action */}
                <div className="p-12 text-center rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0a0a0a] border border-zinc-800 relative overflow-hidden mb-24">
                    <div className="absolute inset-0 bg-orange-500/5 blur-3xl pointer-events-none" />
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Stop Paying For Shared Leads.</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto mb-8 relative z-10">
                        Let's build a proprietary local lead generation machine that you actually own, drastically lowering your Cost Per Lead.
                    </p>
                    <Link href="/roi-calculator" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors">
                        Calculate Your Organic ROI
                    </Link>
                </div>

                {/* FAQs */}
                <FAQSection faqs={homeServicesFaqs} title="Home Services SEO FAQs" />

                {/* Schema Markup */}
                <SchemaMarkup schema={homeServicesSchema} />

            </div>
        </main>
    );
}
