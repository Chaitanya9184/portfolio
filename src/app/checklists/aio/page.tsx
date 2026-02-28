import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AIO (AI Overviews) Google Checklist',
    description: 'A dedicated checklist to trigger and optimize your brand for Google AI Overviews.',
    alternates: {
        canonical: '/checklists/aio',
    },
};

export default function AIOChecklistPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest mb-12 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6" /></svg>
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-6xl text-white font-bold tracking-tighter mb-6">
                    AIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">(Google AI Overviews)</span> Checklist
                </h1>

                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
                    Google's AI Overviews require a hybrid approach of traditional technical SEO and Generative LLM formatting. Follow this checklist to capture AIO real estate.
                </p>

                <div className="space-y-12">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center text-sm">1</span>
                            Intent Satisfaction & Depth
                        </h2>
                        <ul className="space-y-4">
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-purple-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Target Long-Tail Informational Queries</strong>
                                        AIOs trigger most frequently on complex, multi-layered queries ("How do I...", "What is the difference between...", "steps to fix xyz"). Ensure your content structure matches these complex intents perfectly.
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-purple-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Information Gain via Original Data</strong>
                                        Google prioritizes content offering "Information Gain"—original data, proprietary research, or unique quotes not found in the baseline consensus of top ranking pages.
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-purple-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Comprehensive Topic Clusters</strong>
                                        If AIO pulls from multiple sites to build an answer, your goal is to have the most comprehensive, interlinked cluster so Google relies primarily on your domain for the entire synthesized response.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center text-sm">2</span>
                            On-Page Structure & Synthesis
                        </h2>
                        <ul className="space-y-4">
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-purple-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Nested H2/H3 Hierarchies</strong>
                                        Ensure absolute perfection in your HTML heading structure. `H2` is the core topic. `H3` are the sub-steps. Google's Gemini model relies heavily on heading hierarchy to understand document segmentation.
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-purple-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Inline Citations & External Links</strong>
                                        Link out to highly trusted, authoritative domains (.gov, .edu, Tier 1 news) within your factual claims to piggyback on their authority signals.
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-purple-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">"TL;DR" Summaries at the Top</strong>
                                        Provide an executive summary or "Key Takeaways" bulleted list immediately below the H1 to give the Googlebot a pre-synthesized abstract of the article.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center text-sm">3</span>
                            Google-Specific Signals (E-E-A-T)
                        </h2>
                        <ul className="space-y-4">
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-purple-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Demonstrate "Experience"</strong>
                                        Use first-person language ("In my testing...", "When I implemented...") and visual proof (original screenshots, videos, graphs) to satisfy Google's 'Experience' quality rater guideline.
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-purple-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Maintain traditional PageSpeed</strong>
                                        Core Web Vitals matter. If your site is too slow or block-renders Javascript, Gemini (the engine powering AIO) will struggle to parse it efficiently.
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
