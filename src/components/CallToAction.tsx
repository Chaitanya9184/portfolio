export default function CallToAction() {
    return (
        <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden flex items-center justify-center border-t border-zinc-900 border-dashed">

            {/* Dynamic Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <div className="w-full max-w-4xl h-64 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto">
                <div className="p-[2px] rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 overflow-hidden relative group">

                    {/* Animated gradient border effect via CSS mask / padding */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-50 blur-lg transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative bg-zinc-950 rounded-[22px] p-12 md:p-20 flex flex-col items-center text-center overflow-hidden">

                        {/* Inner subtle grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

                        <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 relative z-10 inline-block">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Scale?</span>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full" />
                        </h2>

                        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-12 relative z-10 font-medium">
                            Let&apos;s build a search strategy that focuses on user intent, drives qualified traffic, and actively grows your bottom line.
                        </p>

                        <a
                            href="https://linkedin.com/in/chaitanya-kore-342069140"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] duration-300"
                        >
                            <span>Connect on LinkedIn</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
