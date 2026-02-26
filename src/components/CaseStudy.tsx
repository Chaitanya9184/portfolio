export default function CaseStudy() {
    const metrics = [
        { label: "Increase in 1st Page Keywords", value: "422%" },
        { label: "Increase in Ranking Keywords", value: "294%" },
        { label: "YoY Organic Sessions", value: "+69.8%" },
        { label: "YoY Organic Conversions", value: "+37.5%" },
    ];

    const challenges = [
        { title: "Low Organic Visibility", text: "Low brand visibility to new users." },
        { title: "Lack of Authority", text: "Lack of strong backlinks limited rankings." },
        { title: "Weak EEAT Signals", text: "Low author credibility reduced trust." },
        { title: "Suboptimal UI/UX", text: "Navigation issues led to poor user interaction." },
        { title: "Inefficient Funnel", text: "Traffic did not convert well." }
    ];

    const strategies = [
        { title: "Technical SEO Fixes", text: "Fixed headings, meta tags, and broken pages." },
        { title: "Content Optimization", text: "Optimized pages and wrote 12 new blogs to build authority." },
        { title: "Authority Building", text: "Built backlinks via PR and removed bad links." },
        { title: "Internal Linking", text: "Added internal links to help search engines find pages." },
        { title: "Meta & Heading Optimization", text: "Rewrote titles to boost clicks and target keywords." }
    ];

    return (
        <section className="relative w-full py-16 px-6 md:px-12 lg:px-24 bg-[#121212] overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-12">
                    <p className="text-zinc-500 text-sm tracking-widest uppercase mb-4 font-semibold">Featured Case Study</p>
                    <h2 className="text-5xl md:text-6xl text-white font-bold tracking-tighter mb-6 relative inline-block">
                        Scaling an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">eCommerce Brand</span>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-1/3 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full" />
                    </h2>
                    <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed font-light">
                        An SEO growth strategy for a premium insoles retailer. By fixing technical issues, building authority, and improving the funnel, we achieved massive organic growth and first-page rankings.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Metrics Spotlight (Spans 12 cols on mobile, 4 on desktop) */}
                    <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
                        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm h-full flex flex-col justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Performance <br /> Snapshot</h3>
                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                {metrics.map((metric, idx) => (
                                    <div key={idx}>
                                        <p className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">{metric.value}</p>
                                        <p className="text-[10px] text-zinc-500 uppercase tracking-[0.15em] font-semibold leading-tight">{metric.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Challenges (Spans 12 cols on mobile, 8 on desktop) */}
                    <div className="col-span-1 lg:col-span-8 p-8 md:p-10 rounded-3xl bg-zinc-900/30 border border-zinc-800 backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-50" />
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-sm font-bold">!</span>
                            <span className="tracking-tight">The Challenges</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {challenges.map((challenge, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/30 mt-2 shrink-0" />
                                    <div>
                                        <p className="text-zinc-200 font-semibold mb-1 text-base tracking-tight">{challenge.title}</p>
                                        <p className="text-sm text-zinc-400 leading-relaxed font-normal">{challenge.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Strategy & Execution (Spans all 12 cols) */}
                    <div className="col-span-1 lg:col-span-12 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-blue-900/10 to-purple-900/10 border border-blue-900/30 backdrop-blur-sm relative overflow-hidden hover:border-blue-500/30 transition-colors duration-500 group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3 relative z-10">
                            <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm">⚡</span>
                            Strategy & Execution
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                            {strategies.map((strategy, idx) => (
                                <div key={idx} className="bg-zinc-950/40 p-6 rounded-2xl border border-white/5 hover:bg-zinc-900/60 transition-colors">
                                    <p className="text-blue-300 font-bold mb-3 text-sm tracking-wide uppercase">{strategy.title}</p>
                                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">{strategy.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
