// Custom Premium SVG Icons
const AioIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-emerald-400">
        <path d="M12 2v8" />
        <path d="m16 4-4 4-4-4" />
        <rect width="16" height="12" x="4" y="6" rx="2" />
        <path d="M7 12h.01" />
        <path d="M17 12h.01" />
        <circle cx="12" cy="12" r="1.5" className="animate-pulse" />
    </svg>
);

const AeoIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-emerald-400">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
    </svg>
);

const GeoIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-emerald-400">
        <path d="M4.5 16.5c-1.5 1.26-2 3.33-1 4.5s3.24.5 4.5-1l10-10a3 3 0 1 0-3-3l-10.5 10.5Z" />
        <path d="m15 7 3 3" />
        <path d="M3.5 11V7" />
        <path d="M7 3.5h-4" />
    </svg>
);

export default function AiExpertise() {
    const expertises = [
        {
            title: "AIO",
            subtitle: "Artificial Intelligence Optimization",
            description: "I build content that AI models like ChatGPT and Gemini easily read and understand. Clear structure and smart data setup ensure bots find, crawl, and trust your brand.",
            icon: <AioIcon />
        },
        {
            title: "AEO",
            subtitle: "Answer Engine Optimization",
            description: "I help you win 'Position Zero' by writing direct, clear answers to common questions. I focus on how people talk and search using tools like Perplexity and Google AI Overviews.",
            icon: <AeoIcon />
        },
        {
            title: "GEO",
            subtitle: "Generative Engine Optimization",
            description: "I make sure your brand is named and linked inside AI chatbots. I help your content grow from just another web link into a top, trusted source for AI-generated answers.",
            icon: <GeoIcon />
        }
    ];

    return (
        <section className="relative w-full py-16 px-6 md:px-12 lg:px-24 bg-[#121212] overflow-hidden">
            {/* Background radial gradient to draw attention */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <p className="text-emerald-400 text-sm tracking-widest uppercase mb-4 font-semibold">The Future of Search</p>
                    <h2 className="text-5xl md:text-6xl text-white font-bold tracking-tighter mb-6 relative inline-block">
                        Mastering AI-Driven Discovery
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
                    </h2>
                    <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed font-light">
                        Search is changing from simple links to fast AI answers. To grow today, you need a new plan. I build smart content systems to help you dominate AI search platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expertises.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative flex flex-col p-8 rounded-3xl border border-emerald-900/40 bg-zinc-900/50 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/50 hover:bg-zinc-800/80 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]"
                        >
                            {/* Subtle sweep gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="mb-6 w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:border-emerald-500/50 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {item.icon}
                                </div>

                                <h3 className="text-3xl text-white font-bold tracking-tight mb-1">{item.title}</h3>
                                <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4">{item.subtitle}</p>
                                <p className="text-zinc-400 text-sm leading-relaxed font-normal group-hover:text-zinc-300 transition-colors">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Content ends here */}
            </div>
        </section>
    );
}
