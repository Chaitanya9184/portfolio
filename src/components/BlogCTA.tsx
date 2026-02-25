export default function BlogCTA() {
    return (
        <section className="relative w-full my-16 p-8 md:p-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">
            {/* Dynamic Background Glow */}
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-3xl group-hover:bg-blue-500/10 transition-colors duration-500 pointer-events-none" />

            <div className="relative z-10 flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                    Ready to dominate AI Search?
                </h3>
                <p className="text-zinc-400 text-sm md:text-base max-w-xl">
                    Implement these insights into your own strategy. Let&apos;s build a foundation that turns generative AI engines into your highest-converting acquisition channel.
                </p>
            </div>

            <a
                href="https://linkedin.com/in/chaitanya-kore-342069140"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 whitespace-nowrap inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
                Connect on LinkedIn
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
        </section>
    );
}
