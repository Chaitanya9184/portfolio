import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'GEO (Generative Engine Optimization) Checklist',
    description: 'A complete step-by-step checklist for optimizing your brand to be highly recommended by Generative AI models.',
    alternates: {
        canonical: '/checklists/geo',
    },
};

export default function GEOChecklistPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest mb-12 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6" /></svg>
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-6xl text-white font-bold tracking-tighter mb-6">
                    GEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">(Generative Engine Optimization)</span> Checklist
                </h1>

                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
                    Ensure your brand is naturally recommended by LLMs when users ask for the "best options" or "top competitors" in your industry.
                </p>

                <div className="space-y-12">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-sm">1</span>
                            Brand Entity Establishment
                        </h2>
                        <ul className="space-y-4">
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-emerald-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Establish `Organization` Schema</strong>
                                        Implement comprehensive `Organization` schema on the homepage. Include `sameAs` links pointing to the brand's verified Wikipedia, Crunchbase, LinkedIn, and G2 records.
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-emerald-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Maintain an Updated Knowledge Panel</strong>
                                        Ensure your Google Knowledge Panel is claimed, accurate, and regularly updated. LLMs still heavily rely on Google's Knowledge Graph for base entity validation.
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-emerald-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Consistent NAP-W (Name, Address, Phone, Website)</strong>
                                        Ensure the target brand's core entity details are perfectly consistent across all Tier-1 third-party directories.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-sm">2</span>
                            Off-Page Citation Velocity
                        </h2>
                        <ul className="space-y-4">
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-emerald-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Dominate High-Trust Aggregators</strong>
                                        Secure positive sentiment and high review volume on platforms known to be in LLM training corpuses (G2, Capterra, Reddit, StackOverflow, TrustRadius).
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-emerald-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Digital PR & Brand Mentions</strong>
                                        Drive natural, unlinked brand mentions on top-tier news sites. LLMs measure the *frequency* of co-occurrence between your brand entity and target topics.
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-emerald-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Competitor "Vs" Content Optimization</strong>
                                        Ensure third-party sites writing "Brand X vs. Brand Y" articles explicitly mention your brand's unique value props in high-density factual formats.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-sm">3</span>
                            Sentiment Shaping & Influence
                        </h2>
                        <ul className="space-y-4">
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-emerald-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Publish Strong Opinionated Content</strong>
                                        LLMs synthesize the consensus. Publish highly opinionated, structurally sound "Why X is better than Y" thought leadership articles to heavily influence the weights algorithms assign to industry topics.
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-emerald-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Own the "Alternatives To" Space</strong>
                                        If you challenge an incumbent, create dense web pages that directly compare features, pricing, and integrations to your competitor. Let the LLM absorb this structured comparison data.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
}
