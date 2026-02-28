import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

// Page Metadata
export const metadata: Metadata = {
    title: 'Chaitanya Kore | Author & SEO Professional',
    description: 'Chaitanya Kore is an SEO professional specializing in Technical SEO, Programmatic SEO, and AI Search Strategy for enterprise logic and SaaS growth.',
    alternates: {
        canonical: '/author/chaitanya-kore',
    },
};

export default function AuthorProfile() {
    // Advanced Structured Data (Person Schema)
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://www.chaitanyakore.in/#person",
        "name": "Chaitanya Kore",
        "url": "https://www.chaitanyakore.in/author/chaitanya-kore",
        "image": "https://www.chaitanyakore.in/sequence/frame_00_delay-0.066s.png",
        "jobTitle": "Senior SEO & AI Search Professional",
        "description": "Enterprise SEO specialist focusing on technical marketing, programmatic architectures, and Generative Engine Optimization.",
        "sameAs": [
            "https://in.linkedin.com/in/chaitanyakore",
            "https://twitter.com/chaitanyakore_"
        ],
        "knowsAbout": [
            "Search Engine Optimization",
            "Technical SEO",
            "Programmatic SEO",
            "Generative Engine Optimization (GEO)",
            "Web Architecture",
            "SaaS Marketing"
        ],
        "alumniOf": {
            "@type": "Organization",
            "name": "Various Leading Tech & Agency Firms"
        }
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />

            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                    {/* Placeholder for Author Image (using the logo style from homepage for now) */}
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 shadow-2xl">
                        <span className="text-4xl md:text-6xl text-zinc-500 font-bold italic">CK</span>
                    </div>

                    <div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
                            Chaitanya Kore
                        </h1>
                        <p className="text-xl text-indigo-400 font-bold mb-6">
                            Senior SEO & AI Search Professional
                        </p>
                        <p className="text-zinc-400 leading-relaxed text-lg max-w-2xl mb-6">
                            I am an organic growth engineer bridging the gap between technical architecture and measurable revenue. My work focuses on building sustainable search ecosystems for B2B Tech and Enterprise SaaS companies, shielding them from algorithm volatility by building topical authority and AI cite-worthiness.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://linkedin.com/in/chaitanyakore" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-blue-600/10 text-blue-400 text-sm font-bold hover:bg-blue-600/20 transition-colors border border-blue-500/20">
                                LinkedIn
                            </a>
                            <Link href="/hire-me" className="px-6 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-bold hover:bg-emerald-500/20 transition-colors border border-emerald-500/20">
                                Open to Work
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="space-y-16">
                    {/* Experience Timeline */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-white/20"></span>
                            Experience Timeline
                        </h2>
                        <div className="space-y-8 pl-4 border-l border-white/10 ml-4 relative">
                            {[
                                {
                                    year: "2022 - Present",
                                    role: "Head of AI Search Strategy",
                                    desc: "Pioneering GEO (Generative Engine Optimization) architectures for enterprise clients, optimizing for direct LLM citation rather than simple link-lists."
                                },
                                {
                                    year: "2019 - 2022",
                                    role: "Lead Technical SEO",
                                    desc: "Managed programmatic SEO implementations across large-scale Next.js architectures, securing millions in organic pipeline for SaaS platforms."
                                },
                                {
                                    year: "2017 - 2019",
                                    role: "SEO Specialist",
                                    desc: "Audited hundreds of enterprise websites, mastering log file analysis, crawl budget management, and schema implementation at scale."
                                }
                            ].map((xp, i) => (
                                <div key={i} className="relative">
                                    <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-indigo-500 border-2 border-[#0a0a0a]"></div>
                                    <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">{xp.year}</p>
                                    <h3 className="text-white font-bold text-lg mb-2">{xp.role}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{xp.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Notable Projects */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-white/20"></span>
                            Notable Projects & Methodology
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
                                <h3 className="text-white font-bold mb-2">Programmatic Hub Automation</h3>
                                <p className="text-zinc-400 text-sm">Developed automated content matrix systems that scale "Integration" and "Use Case" pages mapped strictly to product schemas.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
                                <h3 className="text-white font-bold mb-2">Semantic Entity Graphs</h3>
                                <p className="text-zinc-400 text-sm">Engineered comprehensive internal linking and JSON-LD strategies connecting authors to topics to claim unshakeable EEAT signals.</p>
                            </div>
                        </div>
                    </section>

                    {/* Published Insights Link */}
                    <section className="p-8 rounded-3xl bg-indigo-900/10 border border-indigo-500/20 flex flex-col items-center text-center mt-12">
                        <h2 className="text-2xl font-bold text-white mb-4">Read My Latest Insights</h2>
                        <p className="text-zinc-400 mb-8 max-w-md">I regularly publish deep-dives into technical SEO, AI Search, and revenue automation models.</p>
                        <Link href="/insights" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-colors">
                            Explore Insights Blog
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
