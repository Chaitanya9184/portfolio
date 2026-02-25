export default function SeoPhilosophy() {
    return (
        <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#121212] overflow-hidden border-t border-zinc-900 border-dashed">

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-900/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-900/10 to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">

                {/* Visual Element */}
                <div className="w-full md:w-1/2 relative">
                    <div className="aspect-square w-full max-w-sm mx-auto relative group perspective-[1000px]">
                        {/* 3D-esque floating cards */}
                        <div className="absolute inset-0 bg-zinc-900 rounded-3xl border border-zinc-800 rotate-6 transition-transform duration-700 group-hover:rotate-12" />
                        <div className="absolute inset-0 bg-zinc-800 rounded-3xl border border-zinc-700 -rotate-3 transition-transform duration-700 group-hover:-rotate-6" />

                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-emerald-500/30 p-8 flex flex-col justify-center transition-transform duration-700 group-hover:translate-z-10 shadow-2xl backdrop-blur-md">
                            <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-500/10 rounded-full border border-emerald-500/20 flex items-center justify-center">
                                <span className="text-emerald-500">✨</span>
                            </div>
                            <p className="text-zinc-500 font-mono text-sm mb-2 line-through decoration-red-500/50">&quot;Keyword Stuffing&quot;</p>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-px w-8 bg-zinc-700" />
                                <span className="text-zinc-600 text-xs uppercase tracking-widest font-bold">Evolution</span>
                                <div className="h-px w-8 bg-zinc-700" />
                            </div>
                            <h3 className="text-3xl font-bold text-white tracking-tight">Solving <br /><span className="text-emerald-400">User Intent.</span></h3>
                            <p className="text-zinc-400 text-sm mt-4 border-l-2 border-emerald-500/30 pl-4">The algorithm follows the user. Solve for the user, and the algorithm follows you.</p>
                        </div>
                    </div>
                </div>

                {/* Philosophy Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-emerald-500 text-sm tracking-widest uppercase mb-4 font-semibold">SEO Philosophy</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6 relative inline-block">
                        Beyond the Keywords.
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-1/3 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
                    </h2>

                    <div className="space-y-6 text-zinc-400 text-lg leading-[1.8] mt-8 font-light">
                        <p>
                            The days of chasing strict word counts and keyword stuffing are over. Today, search engines use smart AI models to understand true meaning, context, and user satisfaction.
                        </p>
                        <p>
                            My philosophy is simple: <strong className="text-zinc-200 font-semibold">Optimize for the human, structure for the bot.</strong>
                        </p>
                        <p>
                            We must stop asking &quot;How many times does this keyword appear?&quot;. Instead, we should ask <strong className="text-emerald-400 font-medium">&quot;Does this content clearly answer the user&apos;s true question?&quot;</strong>. This simple mindset shift builds strong, lasting digital brand trust.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
