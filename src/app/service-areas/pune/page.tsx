import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SEO Services in Pune | Expert B2B & Tech SEO | Chaitanya Kore',
    description: 'Looking to hire an SEO Expert in Pune? Specializing in B2B SaaS, IT companies, and educational institutes in the Pune region.',
};

export default function PuneSEOPage() {
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
                        Technical SEO <br className="hidden md:block" />
                        Expertise in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-500">Pune</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        Pune is an IT powerhouse and startup incubator. Tech-savvy audiences require data-backed, highly technical SEO and thought leadership content strategies to capture demand.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Market */}
                    <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-4">The Pune Landscape</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Home to global IT parks in Hinjewadi and Magarpatta, Pune&apos;s business landscape is largely B2B and SaaS-driven. Traditional local SEO tactics are less effective here compared to international inbound marketing strategies.
                        </p>
                        <div className="flex flex-col gap-3 mt-8">
                            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-2">Ideal Verticals:</h3>
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-zinc-800 rounded-md text-zinc-300 text-xs font-medium">B2B SaaS Products</span>
                                <span className="px-3 py-1 bg-zinc-800 rounded-md text-zinc-300 text-xs font-medium">IT Services & Agencies</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-zinc-800 rounded-md text-zinc-300 text-xs font-medium">EdTech Platforms</span>
                                <span className="px-3 py-1 bg-zinc-800 rounded-md text-zinc-300 text-xs font-medium">Manufacturing Tech</span>
                            </div>
                        </div>
                    </div>

                    {/* How I Help */}
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-emerald-900/20 border border-emerald-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Strategic Focus for Pune</h2>
                        <ul className="space-y-4 text-zinc-300 text-sm leading-relaxed mb-6">
                            <li><strong>International SEO (Hreflang):</strong> For Pune-based IT firms targeting US, UK, and European markets, I ensure flawless international targeting.</li>
                            <li><strong>Developer-led Content:</strong> Bridging the gap between engineering jargon and search-friendly commercial queries.</li>
                            <li><strong>Brand Mentions &amp; AEO:</strong> Getting your startup listed in AI-generated rundowns of &quot;Top tech companies in Pune&quot; or &quot;Best offshore IT services&quot;.</li>
                        </ul>
                    </div>
                </div>

                <div className="p-12 text-center rounded-3xl bg-gradient-to-b from-zinc-900/80 to-[#0a0a0a] border border-zinc-800 relative overflow-hidden">
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Scale Your Startup Organically</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto mb-8 relative z-10">
                        Stop burning venture capital on high-CAC ads. Build an organic engine that compounds over time.
                    </p>
                    <Link href="/#contact" className="relative z-10 inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-zinc-900 font-bold rounded-xl hover:bg-emerald-400 transition-colors">
                        Book a Growth Consultation
                    </Link>
                </div>

            </div>
        </main>
    );
}
