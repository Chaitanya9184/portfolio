// /Users/work-alm/Downloads/Portfolio/src/components/Projects.tsx
export default function Projects() {
    const projects = [
        {
            title: "Ethereal UI",
            description: "A comprehensive design system built with Next.js, Framer Motion, and Tailwind CSS. Focused on fluid micro-interactions.",
            year: "2026",
            tags: ["React", "Motion", "Design Systems"],
        },
        {
            title: "Neon Finance",
            description: "A dark-mode first dashboard for crypto portfolio tracking with real-time WebGL data visualizations.",
            year: "2025",
            tags: ["WebGL", "Three.js", "WebSockets"],
        },
        {
            title: "Spatial Audio Studio",
            description: "Browser-based application for editing and previewing spatial audio tracks with an interactive 3D canvas interface.",
            year: "2024",
            tags: ["WebAudio API", "Canvas", "TypeScript"],
        }
    ];

    return (
        <section className="relative w-full bg-[#0a0a0a] py-16 px-6 md:px-12 lg:px-24">
            {/* Subtle top gradient blending from #121212 to #0a0a0a */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#121212] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <p className="text-zinc-500 text-sm tracking-widest uppercase mb-4">Selected Work</p>
                    <h2 className="text-5xl md:text-6xl text-white font-bold tracking-tighter">Case Studies</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative flex flex-col justify-end p-8 h-[400px] rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/20 backdrop-blur-xl transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-800/40"
                        >
                            {/* Subtle hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 via-zinc-800/0 to-zinc-700/0 group-hover:via-zinc-800/10 group-hover:to-zinc-600/20 transition-all duration-700" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-zinc-500 text-sm font-mono">{project.year}</span>
                                    <div className="flex gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 text-xs rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-2xl text-white font-semibold mb-3 tracking-tight">{project.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors">
                                    {project.description}
                                </p>

                                <div className="flex items-center text-sm font-medium text-white/80 group-hover:text-white transition-colors cursor-pointer">
                                    <span>View Project</span>
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
