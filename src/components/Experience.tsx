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
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-blue-500 text-xs tracking-[0.3em] uppercase mb-4 font-bold">The Journey</p>
                <h2 className="text-4xl md:text-6xl text-white font-bold tracking-tighter mb-6 leading-tight relative inline-block">
                    Experience & Impact
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full" />
                </h2>
                <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
                    8+ years of hands-on experience driving organic growth for global SaaS and eCommerce leaders.
                </p>
            </div>

            <div className="relative">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* Timeline dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-colors group-hover:bg-zinc-800 group-hover:text-blue-400">
                            <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-blue-400 transition-colors" />
                        </div>

                        {/* Content Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm transition-all duration-300 group-hover:border-zinc-700 group-hover:bg-zinc-800/60">
                            <div className="flex flex-col mb-4">
                                <span className="text-blue-400 text-[10px] font-mono tracking-widest mb-1 uppercase opacity-80">{exp.period}</span>
                                <p className="text-xl text-white font-bold tracking-tight">{exp.role}</p>
                                <span className="text-zinc-400 text-sm font-medium">{exp.company}</span>
                            </div>
                            <ul className="list-disc pl-4 space-y-3 text-zinc-400 text-[13px] leading-relaxed font-normal group-hover:text-zinc-300 transition-colors">
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

                {/* Added older experiences summarized to keep layout clean, but could add all of them */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-colors group-hover:bg-zinc-800 group-hover:text-blue-400">
                        <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-blue-400 transition-colors" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm transition-all duration-300 group-hover:border-zinc-700 group-hover:bg-zinc-800/60">
                        <div className="flex flex-col mb-4">
                            <span className="text-blue-400 text-[10px] font-mono tracking-widest mb-1 uppercase opacity-80">May 2021 – Dec 2021</span>
                            <p className="text-xl text-white font-bold tracking-tight">Team Lead – SEO</p>
                            <span className="text-zinc-400 text-sm font-medium">Tradebuilder Technology Pvt. Ltd.</span>
                        </div>
                        <ul className="list-disc pl-4 space-y-3 text-zinc-400 text-[13px] leading-relaxed font-normal group-hover:text-zinc-300 transition-colors">
                            <li>Planned and executed SEO strategies for startups and eCommerce businesses.</li>
                            <li>Managed SEO and content planning for 20+ projects on a monthly basis.</li>
                        </ul>
                    </div>
                </div>

                <div className="relative flex flex-col items-center mt-12 mb-8">
                    <span className="text-zinc-600 text-sm italic">Previous Roles: Marketing Associate (SEO), Junior SEO Strategist, Junior SEO Analyst, Junior Off-Page Analyst (2017—2021)</span>
                </div>

            </div>
        </div>
    );
}
