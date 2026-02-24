export default function Recommendations() {
    const recommendations = [
        {
            name: "Lakshmi Priya",
            title: "Digital Marketing Consultant | 800+ Clients Consulted",
            date: "June 11, 2025",
            text: "I've had the pleasure of working alongside Chaitanya and watching his incredible growth from an analyst to a team lead and now a Manager. He's someone who takes his work seriously, is extremely thorough and sincere, and is always ready to support his colleagues. I've learned a lot from him—both in terms of work and how to handle challenges with a clear, thoughtful approach. Beyond the professional side, Chaitanya is fun to work with, a great friend, and a genuinely good human being. I'd confidently recommend him anywhere!",
        },
        {
            name: "Parth Shah",
            title: "Campaign Success Manager | IIM Indore | Boston Institute of Analytics",
            date: "February 10, 2025",
            text: "Chaitanya is an composed and exceptionally committed individual, consistently immersed in his work with his headphones on, meticulously focusing and exploring new avenues and strategies. He would undeniably be a valuable asset to any organization he joins.",
        },
        {
            name: "Ankush Sehgal",
            title: "Fractional CGO 🚀 for 7-Figure Agencies | AI Integration Trainer",
            date: "September 30, 2024",
            text: "Chaitanya is one of the most reliable and technically skilled people I have met in my 10yrs of experience in the industry.\nHe is extremely humble and grounded but the knowledge behind packs a punch.\nHe always in the learning mode which is the reason behind his active knowledge.",
        },
        {
            name: "Mohini Sharma",
            title: "Project Manager – Web Maintenance Department ALM Corp",
            date: "November 30, 2023",
            text: "I am delighted to write a recommendation for my esteemed colleague, Chaitanya Kore (CK). Over the past year, I have had the pleasure of collaborating with CK on numerous projects, and I must express my admiration for his exceptional qualities.\n\nCK's zest, determination, and resilient attitude have left a lasting impression on everyone fortunate enough to work alongside him. His leadership skills and unwavering support have proven invaluable to our team and other departments. CK's passion for learning, particularly in the realms of SEO, AI, and technical expertise, has not only expanded his knowledge but has also been instrumental in resolving significant issues in our day-to-day operations.\nWhat sets CK apart is his compulsive analysis habits, which enable him to delve deep into problems and swiftly identify effective solutions. It comes as no surprise that he has been promoted in less than 12 months, a testament to his dedication and contributions.\n\nOne of CK's most admirable qualities is his ability to vocalize his opinions while maintaining a calm demeanor, even in the most stressful situations. I have personally learned a great deal from him, both in terms of technical expertise and professional composure.\n\nIn conclusion, I wholeheartedly recommend Chaitanya Kore as an invaluable asset to any team or project. His combination of leadership, technical proficiency, and unwavering determination makes him a standout professional. It has been a pleasure working alongside CK, and I am confident that he will continue to excel in all his future endeavors.",
        }
    ];

    return (
        <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-zinc-900 border-dashed">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h3 className="text-blue-400 text-sm tracking-widest uppercase mb-4 font-semibold">Endorsements</h3>
                    <h2 className="text-5xl md:text-6xl text-white font-bold tracking-tighter mb-6">Proven Influence</h2>
                    <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed font-light">
                        Collaborating with leaders across the globe to redefine what search success looks like.
                        Here is what partners and clients have to say.
                    </p>
                </div>

                {/* Masonry-like grid using CSS columns */}
                <div className="columns-1 md:columns-2 gap-8 space-y-8">
                    {recommendations.map((rec, idx) => (
                        <div
                            key={idx}
                            className="break-inside-avoid relative p-8 rounded-3xl border border-zinc-800/60 bg-zinc-900/30 backdrop-blur-md transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800/40 group"
                        >
                            {/* Quotation icon watermarked */}
                            <div className="absolute top-6 right-8 text-6xl text-zinc-800/50 font-serif leading-none pointer-events-none group-hover:text-blue-500/10 transition-colors">
                                &quot;
                            </div>

                            <div className="relative z-10">
                                <div className="mb-6 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                        {rec.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-white font-semibold">{rec.name}</h4>
                                        <p className="text-xs text-zinc-500 mt-0.5 line-clamp-1 group-hover:line-clamp-none transition-all duration-300">{rec.title}</p>
                                        <span className="text-[10px] uppercase tracking-wider text-blue-400/80 font-mono mt-1 block">{rec.date}</span>
                                    </div>
                                </div>

                                <p className="text-zinc-300/90 text-sm leading-relaxed mb-6 font-normal group-hover:text-white transition-colors duration-500">
                                    &quot;{rec.text}&quot;
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
