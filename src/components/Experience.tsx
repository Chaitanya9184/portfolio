'use client';

import { motion } from 'framer-motion';

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const EmailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const AcademicIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
);

const AwardIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
);

export default function Experience() {
    const experiences = [
        {
            role: "AI and SEO Strategist",
            company: "WSI ALM Corp",
            period: "Jun 2024 – Present",
            description: [
                "Lead SEO strategy and execution for multiple international clients across SaaS, e-commerce, and B2B sectors.",
                "Conduct advanced technical SEO audits, keyword research, and competitive analysis to identify scalable growth opportunities.",
                "Drive site architecture improvements, page speed optimization, and content relevance, resulting in consistent traffic and conversion gains.",
                "Manage and mentor SEO specialists, ensuring delivery quality, skill development, and KPI achievement.",
                "Collaborate with cross-functional teams to align SEO initiatives with broader business goals and measurable ROI.",
            ]
        },
        {
            role: "Team Lead – Execution Specialist",
            company: "WSI ALM Corp",
            period: "Dec 2023 – Jun 2024",
            description: [
                "Managed execution workflows across diverse SEO projects, ensuring timely delivery and quality control.",
                "Translated complex SEO strategies into actionable tasks for execution teams.",
                "Identified and resolved operational bottlenecks to improve delivery efficiency and outcomes.",
                "Played a key role in mentoring team members and maintaining alignment with client expectations.",
            ]
        },
        {
            role: "SEO Account Manager",
            company: "WSI ALM Corp",
            period: "Nov 2022 – Dec 2023",
            description: [
                "Owned end-to-end SEO strategy, execution, and reporting for multiple client accounts.",
                "Led regular client communications covering performance, insights, and roadmap planning.",
                "Developed and implemented SEO strategies focused on rankings, traffic quality, and conversions.",
            ]
        },
        {
            role: "SEO Team Lead",
            company: "GO MO Group Marketing Services",
            period: "Jan 2022 – Nov 2022",
            description: [
                "Managed a team of 19 SEO analysts supporting 70+ active projects across international markets.",
                "Led capacity planning, forecasting, performance reviews, and career development for team members.",
                "Oversaw quality of SEO deliverables and ensured KPI achievement across client portfolios.",
                "Coordinated with stakeholders in India and Sweden to align SEO execution with client business objectives.",
            ]
        }
    ];

    return (
        <div className="w-full">
            <div className="mb-16">
                <p className="text-emerald-500 text-xs tracking-[0.3em] uppercase mb-4 font-bold">The Journey</p>
                <h2 className="text-4xl md:text-5xl text-white font-bold tracking-tighter mb-6 leading-tight relative inline-block italic">
                    Experience & Impact
                    <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-emerald-400 to-transparent rounded-full" />
                </h2>
            </div>

            <div className="relative border-l border-zinc-900 ml-5 pl-10 space-y-16">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="relative group">
                        {/* Timeline dot */}
                        <div className="absolute -left-[54px] top-2 flex items-center justify-center w-8 h-8 rounded-full border border-zinc-800 bg-black text-slate-500 shadow z-10 transition-colors group-hover:bg-zinc-900 group-hover:text-emerald-400">
                            <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-emerald-400 transition-colors" />
                        </div>

                        {/* Content Card */}
                        <div className="w-full p-8 rounded-3xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-500/20 group-hover:bg-zinc-800/40">
                            <div className="flex flex-col mb-6">
                                <span className="text-emerald-400 text-[10px] font-mono tracking-widest mb-2 uppercase opacity-80">{exp.period}</span>
                                <h3 className="text-2xl text-white font-bold tracking-tight mb-1">{exp.role}</h3>
                                <span className="text-zinc-500 text-sm font-medium">{exp.company}</span>
                            </div>
                            <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed font-normal group-hover:text-zinc-300 transition-colors">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="shrink-0 w-1 h-1 rounded-full bg-zinc-800 mt-2" />
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

                {/* Summarized Experience */}
                <div className="relative group">
                    <div className="absolute -left-[54px] top-2 flex items-center justify-center w-8 h-8 rounded-full border border-zinc-800 bg-black text-slate-500 shadow z-10 transition-colors group-hover:bg-zinc-900 group-hover:text-emerald-400">
                        <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-emerald-400 transition-colors" />
                    </div>
                    <div className="w-full p-8 rounded-3xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-500/20 group-hover:bg-zinc-800/40">
                        <div className="flex flex-col mb-4">
                            <span className="text-emerald-400 text-[10px] font-mono tracking-widest mb-2 uppercase opacity-80">May 2021 – Dec 2021</span>
                            <h3 className="text-2xl text-white font-bold tracking-tight mb-1">Team Lead – SEO</h3>
                            <span className="text-zinc-500 text-sm font-medium">Tradebuilder Technology Pvt. Ltd.</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Planned and executed SEO strategies for 20+ startups and eCommerce businesses monthly.
                        </p>
                    </div>
                </div>

                <div className="pt-8">
                    <p className="text-zinc-600 text-xs tracking-widest uppercase font-bold opacity-50 italic">
                        PREVIOUS ROLES: Marketing Associate, Junior SEO Strategist, Junior SEO Analyst (2017—2021)
                    </p>
                </div>
            </div>
        </div>
    );
}
