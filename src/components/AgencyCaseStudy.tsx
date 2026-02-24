const ChallengesIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
    </svg>
);

const StrategyIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

export default function AgencyCaseStudy() {
    const challenges = [
        { title: "Low SERP Visibility", text: "Limited rankings for relevant organic keywords and minimal non-branded search presence." },
        { title: "Local SEO Gaps", text: "Location-based optimizations were not properly implemented, impacting regional reach." },
        { title: "Technical & On-Page Issues", text: "Missing/inconsistent meta tags, 404 errors, missing schema, and indexing inconsistencies." },
        { title: "Irregular Content", text: "Inconsistent blog publishing limited content freshness and topical authority growth." }
    ];

    const strategies = [
        {
            category: "Technical & Local SEO",
            items: ["Comprehensive technical SEO audit", "Resolved indexing and site health issues", "Fixed NAP inconsistencies", "Optimized Google Business Profile"]
        },
        {
            category: "On-Page Optimisation",
            items: ["Optimized core service pages with target keywords", "Fixed non-sequential H1 tags", "Improved heading hierarchy", "Optimized meta titles and descriptions"]
        },
        {
            category: "Content Strategy",
            items: ["Created blog topic recommendations for high-intent keywords", "Advised on long-term topical authority structure", "Provided consistent publishing guidance"]
        },
        {
            category: "CRO & UX Optimisation",
            items: ["Designed dedicated CTAs with service-specific messaging", "Improved CTA placement for better conversions", "Enhanced overall user flow for lead actions"]
        }
    ];

    // Data for the visual graph
    const metrics = [
        { label: "Key Events", value: "380%", height: "h-[100%]", color: "from-emerald-400 to-emerald-600", delay: "delay-[100ms]" },
        { label: "Impressions", value: "296%", height: "h-[85%]", color: "from-blue-400 to-blue-600", delay: "delay-[200ms]" },
        { label: "Engagement Time", value: "40%", height: "h-[35%]", color: "from-indigo-400 to-indigo-600", delay: "delay-[300ms]" },
        { label: "Organic Clicks", value: "18%", height: "h-[20%]", color: "from-purple-400 to-purple-600", delay: "delay-[400ms]" },
        { label: "Total Users", value: "9.5%", height: "h-[12%]", color: "from-pink-400 to-pink-600", delay: "delay-[500ms]" },
    ];

    return (
        <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden border-t border-zinc-900 border-dashed">
            {/* Background accents */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-12 items-end mb-20">
                    <div className="flex-1">
                        <h3 className="text-emerald-500 text-sm tracking-widest uppercase mb-4 font-semibold">Featured Case Study</h3>
                        <h2 className="text-5xl md:text-6xl text-white font-bold tracking-tighter mb-6">
                            Growth Strategy for a <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">Digital Marketing Agency</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl font-light">
                            A comprehensive 6-month engagement focusing on technical SEO, targeted content strategy,
                            local search visibility, and UX improvements to drive massive increases in qualified leads and key conversion events.
                        </p>
                    </div>
                </div>

                {/* Challenges & Strategy Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

                    {/* Challenges */}
                    <div className="p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 border border-zinc-700 shadow-inner">
                                <ChallengesIcon />
                            </span>
                            <span className="tracking-tight">Initial Challenges</span>
                        </h3>
                        <div className="space-y-6">
                            {challenges.map((challenge, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 mt-2.5 shrink-0" />
                                    <div>
                                        <h4 className="text-zinc-200 font-semibold mb-1 text-base tracking-tight">{challenge.title}</h4>
                                        <p className="text-sm text-zinc-400 leading-relaxed font-normal">{challenge.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Strategy */}
                    <div className="p-10 rounded-3xl bg-gradient-to-br from-emerald-900/10 to-indigo-900/10 border border-emerald-900/30 backdrop-blur-sm shadow-2xl shadow-emerald-900/20">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/20 shadow-inner">
                                <StrategyIcon />
                            </span>
                            Execution Strategy
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {strategies.map((strategy, idx) => (
                                <div key={idx} className="space-y-3">
                                    <h4 className="text-emerald-400 font-bold text-xs uppercase tracking-[0.2em]">{strategy.category}</h4>
                                    <ul className="space-y-3">
                                        {strategy.items.map((item, i) => (
                                            <li key={i} className="text-sm text-zinc-400 flex gap-2 items-start leading-relaxed font-normal">
                                                <span className="text-emerald-500/50 mt-1">›</span>
                                                <span className="">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Growth Graphs Section */}
                <div className="p-10 rounded-3xl bg-zinc-950/80 border border-zinc-900 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-50" />

                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-white mb-2">6-Month Performance Growth</h3>
                        <p className="text-zinc-400">Year-over-Year improvements across key digital metrics.</p>
                    </div>

                    {/* Visual CSS Bar Chart */}
                    <div className="relative h-[300px] w-full max-w-4xl mx-auto flex items-end justify-between gap-4 md:gap-8 pb-10 border-b border-zinc-800">
                        {/* Y-Axis Guidelines (absolute, behind bars) */}
                        <div className="absolute inset-0 flex flex-col justify-between pb-10 pointer-events-none">
                            {[400, 300, 200, 100, 0].map((val, idx) => (
                                <div key={idx} className="flex items-center gap-4 w-full">
                                    <span className="text-[10px] text-zinc-600 font-mono w-8 text-right hidden md:block">{val}%</span>
                                    <div className="flex-1 border-t border-zinc-800/50 border-dashed" />
                                </div>
                            ))}
                        </div>

                        {/* The Bars */}
                        {metrics.map((metric, idx) => (
                            <div key={idx} className="group relative flex flex-col items-center justify-end flex-1 h-full z-10 transition-transform duration-500 hover:-translate-y-2 cursor-default">

                                {/* Floating Value Tag (Hover/Persistent) */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-12 bg-white text-black text-sm font-bold py-1 px-3 rounded-md shadow-xl whitespace-nowrap">
                                    +{metric.value}
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-border-t border-x-4 border-t-4 border-x-transparent border-white" />
                                </div>

                                {/* The Bar Itself */}
                                <div className={`w-full max-w-[80px] rounded-t-lg bg-gradient-to-t ${metric.color} shadow-lg shadow-black/50 relative overflow-hidden ${metric.height}`}>
                                    {/* Glass overlay */}
                                    <div className="absolute inset-0 bg-white/10" />
                                    {/* Persistent value text inside bar for larger screens if it fits, else hidden */}
                                    <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white font-bold text-lg hidden md:block drop-shadow-md">
                                        +{metric.value.replace('%', '')}
                                    </span>
                                </div>

                                {/* Label below axis */}
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center w-full">
                                    <span className="text-xs md:text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
                                        {metric.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
