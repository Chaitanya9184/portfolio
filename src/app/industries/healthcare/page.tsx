import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const healthcareFaqs = [
    {
        question: "Why is E-E-A-T so critical for Healthcare SEO?",
        answer: "Google categorizes healthcare as 'Your Money or Your Life' (YMYL). If your content lacks proven Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T), algorithms will actively suppress it to protect users. We structure medical reviewer schemas, author bios, and citation networks to prove medical authority to Google."
    },
    {
        question: "How do AI Search engines treat medical queries?",
        answer: "AI engines like Perplexity and ChatGPT prioritize authoritative, peer-reviewed, and clinically backed sources over generic marketing content. Generative Engine Optimization (GEO) in healthcare requires structuring data (schema) and directly answering medical queries with high precision to become the trusted LLM citation."
    },
    {
        question: "What is local SEO for multi-location clinics?",
        answer: "For healthcare providers with multiple locations, we build automated, scalable local landing pages and optimize Google Business Profiles. This ensures that when a patient searches 'cardiologist near me', your specific local clinic appears in the top 3 Map Pack results, driving immediate booked appointments."
    },
    {
        question: "Can SEO help with patient acquisition costs?",
        answer: "Yes. Healthcare CPCs (Cost Per Click) on Google Ads are notoriously expensive. A strong organic presence captures patients at the exact moment they are researching symptoms or doctors, drastically lowering the blended cost to acquire a new patient over time."
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
                        Scaling Patient Acquisition <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">With YMYL Authority</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        In the healthcare sector, Google's algorithms demand absolute authority. We build E-E-A-T driven search strategies that dominate local map packs, rank highly competitive medical terms, and drive secure patient conversions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-red-950/20 border border-red-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-red-500">⚠️</span> The Healthcare Challenge
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Severe YMYL algorithmic penalties for content lacking verified medical expertise.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Fragmented local strategy causing multi-location clinics to lose to generic aggregator directories.</li>
                            <li className="flex gap-3"><span className="text-red-500/50 mt-1">→</span> Low conversion rates on generic medical symptom keywords that don't capture actual patient intent.</li>
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-emerald-950/20 border border-emerald-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400">⚡</span> The Organic Solution
                        </h2>
                        <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                            <li className="flex gap-3"><span className="text-emerald-500/50 mt-1">&rarr;</span> <strong>E-E-A-T Optimization:</strong> Implementing strict medical reviewer schemas, author entities, and verifiable trust signals.</li>
                            <li className="flex gap-3"><span className="text-emerald-500/50 mt-1">&rarr;</span> <strong>Hyper-Local Infrastructure:</strong> Building scalable, GEO-targeted landing pages to dominate the local 'near me' search intent.</li>
                            <li className="flex gap-3"><span className="text-emerald-500/50 mt-1">&rarr;</span> <strong>Intent-Driven Content:</strong> Mapping the patient journey from symptom awareness to booking the appointment.</li>
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
