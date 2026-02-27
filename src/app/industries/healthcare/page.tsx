import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const healthcareFaqs = [
    {
        question: "Why is E-E-A-T so critical for Healthcare SEO?",
        answer: "Google treats healthcare as 'Your Money or Your Life' (YMYL). If your content lacks proven E-E-A-T, Google hides it to protect users. We build trust using medical reviewer schemas, author bios, and strong citations."
    },
    {
        question: "How do AI Search engines treat medical queries?",
        answer: "AI engines like Perplexity want clinical, peer-reviewed facts. They ignore generic marketing content. Generative Engine Optimization (GEO) in healthcare means directly answering medical queries with high precision to become the trusted LLM citation."
    },
    {
        question: "What is local SEO for multi-location clinics?",
        answer: "For healthcare providers with many locations, we build local landing pages at scale. We heavily optimize your Google Business Profiles. When a patient searches 'cardiologist near me', your local clinic appears in the top 3 Map Pack to drive immediate bookings."
    },
    {
        question: "Can SEO help with patient acquisition costs?",
        answer: "Yes. Healthcare Google Ads are extremely expensive. Strong organic search captures patients exactly when they research symptoms. This drastically lowers your long-term patient acquisition cost."
    }
];

const healthcareSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Healthcare SEO & Medical Search Optimization",
            "provider": {
                "@type": "Person",
                "name": "Chaitanya Kore"
            },
            "description": "Specialized YMYL SEO and E-E-A-T optimization strategies for hospitals, clinics, and MedTech companies to drive patient acquisition."
        },
        {
            "@type": "FAQPage",
            "mainEntity": healthcareFaqs.map(faq => ({
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
    title: 'Healthcare SEO & Medical Search Solutions | Chaitanya Kore',
    description: 'Specialized YMYL SEO and E-E-A-T optimization strategies for hospitals, clinics, and MedTech companies to drive patient acquisition.',
    alternates: {
        canonical: '/industries/healthcare',
    },
};

export default function HealthcareIndustryPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <Link href="/industries" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest mb-12 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6" /></svg>
                    All Industries
                </Link>

                {/* Hero */}
                <div className="mb-12">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                        Healthcare & MedTech
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6">
                        Winning Patient Trust <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">In the Era of YMYL</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        In healthcare, Google doesn't just look for content; it looks for *Authority*. I help medical brands and clinics build the trust signals needed to dominate search results and protect their patients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-red-500">⚠️</span> The High Stakes of Medical Search
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Google’s "Your Money or Your Life" (YMYL) filters are brutal. One wrong step and your site disappears from search overnight.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Most clinics rely on generic "Patient Directories" that take a huge commission and give you zero brand equity.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Patients are increasingly asking AI models for symptom advice, and if your expertise isn't structured correctly, you aren't being cited.</li>
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-emerald-950/20 border border-emerald-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400">⚡</span> How I Secure Your Authority
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-emerald-500/50 mt-1">&rarr;</span> <strong>E-E-A-T Fortification:</strong> I implement deep schema for medical reviewers and authors to prove to Google that your content is trustworthy.</li>
                            <li className="flex gap-3"><span className="text-emerald-500/50 mt-1">&rarr;</span> <strong>Local Map Dominance:</strong> I build hyper-local infrastructure so that when a patient searches "near me," your clinic is the first and only logical choice.</li>
                            <li className="flex gap-3"><span className="text-emerald-500/50 mt-1">&rarr;</span> <strong>Patient Intent Mapping:</strong> I align your content with the actual journey a patient takes—from initial worry to booking a consultation.</li>
                        </ul>
                    </div>
                </div>

                {/* Call To Action */}
                <div className="p-12 text-center rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0a0a0a] border border-zinc-800 relative overflow-hidden mb-24">
                    <div className="absolute inset-0 bg-emerald-500/5 blur-3xl pointer-events-none" />
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Protect & Grow Your Digital Practice.</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto mb-8 relative z-10">
                        Let's build a secure, compliant, and highly authoritative search engine presence that turns medical searches into booked patients.
                    </p>
                    <Link href="/roi-calculator" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors">
                        Calculate Your Organic ROI
                    </Link>
                </div>

                {/* FAQs */}
                <FAQSection faqs={healthcareFaqs} title="Healthcare SEO FAQs" />

                {/* Schema Markup */}
                <SchemaMarkup schema={healthcareSchema} />

            </div>
        </main>
    );
}
