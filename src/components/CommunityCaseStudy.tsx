const TimeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const ScopeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="m2 2 20 20" />
        <path d="M16 22h6v-6" />
        <path d="M8 2H2v6" />
    </svg>
);

const BarrierIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m3 9 18 6" />
        <path d="m3 15 18-6" />
    </svg>
);

const ScaleIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="m19 20-3.5-3.5" />
        <circle cx="11" cy="11" r="6" />
    </svg>
);

const SectionChallengesIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    </svg>
);

const SectionStrategyIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M20 7h-9" />
        <path d="M14 17H5" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="7" cy="7" r="3" />
    </svg>
);

export default function CommunityCaseStudy() {
    const challenges = [
        { title: "Limited Resource Allocation", text: "Working within a highly constrained monthly SEO package (only 2 hours/month, 5 keywords).", icon: <TimeIcon /> },
        { title: "Narrow Keyword Scope", text: "A small keyword set restricts visibility and growth potential in a highly competitive market.", icon: <ScopeIcon /> },
        { title: "Approval Bottlenecks", text: "Internal website change approvals created friction, slowing down CRO implementation.", icon: <BarrierIcon /> },
        { title: "Resistance to Scaling", text: "The organization was reluctant to upgrade their package despite the scale of their goals.", icon: <ScaleIcon /> }
    ];

    const strategies = [
        { title: "On-Page Optimizations", text: "Surgical improvements to meta titles, descriptions, headers, and keyword placement on core static pages." },
        { title: "Blog Optimization", text: "Optimized existing long-form content to target broader informational queries and expand the search footprint." },
        { title: "L1 Technical Audit", text: "Executed foundational checks for page speed, mobile compatibility, and core web vitals to ensure baseline health." },
        { title: "Quick-Win Issue Resolution", text: "Addressed broken links, formatting errors, and minor design inconsistencies hindering both UX and crawling." }
    ];

    const metrics = [
        { label: "Targeted Key Events (All)", value: "470%" },
        { label: "Targeted Key Events (Organic)", value: "436%" },
        { label: "All Channel Traffic", value: "184%" },
        { label: "Organic Sessions", value: "130%" },
        { label: "Organic Engaged Sessions", value: "102%" },
        { label: "Organic Total Users", value: "93%" },
        { label: "Organic New Users", value: "82%" }
    ];

    return (
        <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#121212] overflow-hidden border-t border-zinc-900 border-dashed">
            {/* Background radial glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)] rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <p className="text-amber-500 text-sm tracking-widest uppercase mb-4 font-semibold">Featured Case Study</p>
                    <h2 className="text-5xl md:text-6xl text-white font-bold tracking-tighter mb-6 relative inline-block">
                        Hyper-Local Growth for a <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Community Organization</span>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-amber-400 to-transparent rounded-full" />
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed font-light">
                        A testament to efficiency. Tasked with growing a vibrant local community portal on an extremely limited
                        support retainer, we focused entirely on high-impact optimizations, yielding unprecedented triple-digit growth in both traffic and conversions within 6 months.
                    </p>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Conversions Highlight (Spans 4 cols on desktop) */}
                    <div className="col-span-1 lg:col-span-4 p-8 rounded-3xl bg-amber-950/20 border border-amber-900/30 backdrop-blur-sm relative overflow-hidden group flex flex-col justify-center text-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent pointer-events-none" />
                        <h3 className="text-amber-500 font-bold mb-2 uppercase tracking-[0.2em] text-[10px]">Conversion Explosion</h3>
                        <div className="mb-8">
                            <span className="text-6xl md:text-7xl font-bold text-white tracking-tighter group-hover:text-amber-400 transition-colors duration-300">+436%</span>
                            <p className="text-zinc-400 mt-2 font-medium tracking-tight">Organic Key Events</p>
                        </div>
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-6" />
                        <div>
                            <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter group-hover:text-amber-300 transition-colors duration-300">+470%</span>
                            <p className="text-zinc-500 mt-2 text-xs font-medium uppercase tracking-wide">All-Channel Key Events</p>
                        </div>
                    </div>

                    {/* Traffic Metrics Visualized (Spans 8 cols) */}
                    <div className="col-span-1 lg:col-span-8 p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm">
                        <h3 className="text-xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">Organic Traffic Growth (6 Months)</h3>
                        <div className="space-y-6">
                            {metrics.slice(2).map((metric, idx) => {
                                // Determine width based on the percentage value for visual impact
                                const numVal = parseInt(metric.value.replace('%', ''));
                                const widthPercent = Math.min(100, Math.max(10, (numVal / 200) * 100)); // normalized for visual display maxing at 200 visually

                                return (
                                    <div key={idx} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 group">
                                        <span className="text-sm font-medium text-zinc-400 w-48 shrink-0">{metric.label}</span>
                                        <div className="flex-1 flex items-center gap-4">
                                            {/* CSS Animated Bar */}
                                            <div className="h-6 bg-zinc-800 rounded-full overflow-hidden flex-1 relative">
                                                <div
                                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-600 to-orange-400 rounded-full transition-all duration-1000 ease-out"
                                                    style={{ width: `${widthPercent}%` }}
                                                />
                                            </div>
                                            <span className="text-white font-bold tracking-tight w-16 text-right">+{metric.value}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Constraints & Challenges */}
                    <div className="col-span-1 lg:col-span-6 p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 border border-zinc-700 shadow-inner">
                                <SectionChallengesIcon />
                            </span>
                            The Constraints
                        </h3>
                        <div className="space-y-4">
                            {challenges.map((c, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-zinc-950/50 border border-white/5 hover:border-white/10 transition-colors group">
                                    <span className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-amber-500/80 border border-zinc-800 group-hover:text-amber-400 transition-colors">
                                        {c.icon}
                                    </span>
                                    <div className="flex-1">
                                        <h4 className="text-white font-semibold text-base mb-1 tracking-tight">{c.title}</h4>
                                        <p className="text-zinc-400 text-sm leading-relaxed font-normal">{c.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Strategies */}
                    <div className="col-span-1 lg:col-span-6 p-8 rounded-3xl bg-gradient-to-br from-amber-900/10 to-orange-900/5 border border-amber-900/20 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/20 shadow-inner">
                                <SectionStrategyIcon />
                            </span>
                            The High-Impact Strategy
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {strategies.map((s, i) => (
                                <div key={i} className="flex flex-col gap-2 p-5 rounded-2xl bg-zinc-900/60 border border-amber-500/10 hover:border-amber-500/30 transition-colors">
                                    <h4 className="text-amber-400 font-bold text-xs uppercase tracking-[0.2em]">{s.title}</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed font-normal">{s.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
