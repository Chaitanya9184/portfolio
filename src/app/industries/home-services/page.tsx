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
                        Dominating The <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Google Map Pack</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        For HVAC, Roofing, Plumbing, and local contractors, visibility is survival. We build hyper-local search engines that intercept high-intent customers the moment their houses need fixing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-red-500">⚠️</span> The Home Services Challenge
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Bleeding margin to shared-lead platforms (Angi, HomeAdvisor) that sell the same lead to 5 competitors.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Google Ads / LSA costs rising uncontrollably, driving up Cost Per Lead (CPL) year over year.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Invisible in the local 'Map Pack', handing the most lucrative emergency jobs directly to competitors.</li>
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-orange-950/20 border border-orange-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-orange-400">⚡</span> The Local Map Pack Solution
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-orange-500/50 mt-1">&rarr;</span> <strong>Google Business Dominance:</strong> Relentless optimization of your GBP, review velocity, and localized citations.</li>
                            <li className="flex gap-3"><span className="text-orange-500/50 mt-1">&rarr;</span> <strong>City-Service Architectures:</strong> Building robust, fast-loading, neighborhood-specific landing pages that convert direct local searches.</li>
                            <li className="flex gap-3"><span className="text-orange-500/50 mt-1">&rarr;</span> <strong>LocalBusiness Schema:</strong> Injecting exact GPS coordinates, business hours, and operational areas directly into the code for Google to read.</li>
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
