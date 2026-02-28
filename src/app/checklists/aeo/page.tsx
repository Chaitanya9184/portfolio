import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AEO (Answer Engine Optimization) Checklist',
    description: 'A complete step-by-step checklist for optimizing your brand for Answer Engines like Perplexity and SearchGPT.',
    alternates: {
        canonical: '/checklists/aeo',
    },
};

export default function AEOChecklistPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest mb-12 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6" /></svg>
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-6xl text-white font-bold tracking-tighter mb-6">
                    AEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">(Answer Engine Optimization)</span> Checklist
                </h1>

                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
                    Follow this technical checklist to optimize your website for pure Answer Engines like Perplexity, ChatGPT, and Claude.
                </p>

                <div className="space-y-12">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm">1</span>
                            Direct Answer Structuring
                        </h2>
                        <ul className="space-y-4">
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-blue-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Employ the "Sentence 1" Framework</strong>
                                        Ensure the target keyword or question is answered directly in the first sentence of the section before expanding into details. Avoid preamble or fluff.
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-blue-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Use Clear Subject-Verb-Object (SVO) Syntax</strong>
                                        LLMs interpret SVO sentence structures far more easily. Simplify complex syntax where factual extraction is the main goal.
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-blue-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Create Dedicated Definition Blocks</strong>
                                        Use specific <code>&lt;div&gt;</code> blocks or highlighted callouts specifically defining terms. E.g., "What is [Product]? [Product] is a..."
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm">2</span>
                            Factual Density & Formatting
                        </h2>
                        <ul className="space-y-4">
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-blue-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Increase Factual Density</strong>
                                        Inject specific, verifiable data points (numbers, statistics, dates) into your content. LLMs prioritize sources with high empirical evidence over opinion.
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-blue-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Implement Synthesizable Tables</strong>
                                        Use standard HTML <code>&lt;table&gt;</code> tags for comparative data. Avoid using CSS grid or Flexbox for data presentation, as bots struggle to parse visual grids as tabular data.
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-blue-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Structured Lists (ul/ol)</strong>
                                        Use explicit bolding on the first 2-3 words of every list item (e.g., <strong>Feature 1:</strong> description), ensuring the engine can easily extract key points as bulleted lists.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm">3</span>
                            Technical & Schema Optimization
                        </h2>
                        <ul className="space-y-4">
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-blue-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Implement FAQPage Schema</strong>
                                        Mark up every literal Q&A section on your site with properly nested <code>FAQPage</code> JSON-LD.
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-blue-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Remove JS Render Blocking</strong>
                                        Ensure core factual content is present in the initial server-rendered HTML (SSR/SSG). Do not rely solely on CSR for content you need Perplexity to scrape quickly.
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 rounded border border-blue-500/50 mt-1 flex-shrink-0" />
                                    <div>
                                        <strong className="text-white block mb-1">Verify Crawler Accessibility</strong>
                                        Ensure AI-specific user agents (e.g., <code>GPTBot</code>, <code>PerplexityBot</code>, <code>ClaudeBot</code>) are explicitly allowed in `robots.txt` unless you specifically need to gate proprietary data.
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
