import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const b2bFaqs = [
    {
        question: "How does SEO for B2B tech and enterprise differ from B2C?",
        answer: "B2B Tech SEO deals with complex, multi-stakeholder buying committees and long sales cycles (often 6-18 months). Instead of optimizing for high-volume transactional keywords like in B2C, we optimize for intent-heavy, low-volume technical queries, thought leadership topics, and integration comparisons."
    },
    {
        question: "What role does Entity SEO play in B2B marketing?",
        answer: "In B2B, trust and authority are paramount. Entity SEO (and AEO) ensures that search engines and AI models (like ChatGPT) recognize your brand, your executives, and your proprietary methodologies as authoritative 'entities'. This increases the likelihood that AI will recommend your software when enterprise buyers ask complex questions."
    },
    {
        question: "How long is the typical SEO ROI timeline for B2B Enterprise?",
        answer: "Because of the length of the B2B sales cycle, SEO ROI is typically measured in 6 to 12-month cohorts. However, leading indicators of success—such as increased rankings for core 'Hub' pages, higher engagement on technical documentation, and growth in non-branded organic MQLs—are usually visible within 3 to 4 months."
    },
    {
        question: "What is the optimal content strategy for complex B2B products?",
        answer: "A 'Hub & Spoke' architecture works best. We create comprehensive Pillar Pages (Hubs) around core competencies (e.g., 'Cloud Security') and link them to highly specific, technical sub-topics (Spokes) like 'Kubernetes Container Scanning'. This builds undeniable topical authority."
    },
    {
        question: "How do you track the ROI of B2B SEO with long sales cycles?",
        answer: "We move beyond vanity metrics like traffic. We integrate SEO data with your CRM (HubSpot, Salesforce) to track organic Marketing Qualified Leads (MQLs), pipeline velocity, and closed-won revenue directly attributed to organic search touchpoints over the 12+ month buyer journey."
    }
];

const b2bSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "B2B Tech SEO & Content Strategy",
            "provider": {
                "@type": "Person",
                "name": "Chaitanya Kore"
            },
            "description": "Expert SEO and Thought Leadership content strategies for B2B Technology and Enterprise organizations to navigate complex sales cycles."
        },
        {
            "@type": "FAQPage",
            "mainEntity": b2bFaqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        }
    ]
};

export const metadata: Metadata = {
    title: 'B2B Tech SEO & Content Strategy | Chaitanya Kore',
    description: 'Expert SEO and Thought Leadership content strategies for B2B Technology and Enterprise organizations.',
    alternates: {
        canonical: '/industries/b2b-tech',
    },
};

export default function B2BTechIndustryPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <Link href="/industries" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest mb-12 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6" /></svg>
                    All Industries
                </Link>

                {/* Hero */}
                <div className="mb-12">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest">
                        B2B Enterprise Authority
                    </div>
                    <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-6">
                        Navigating the Enterprise <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Decision-Making Maze</span>
                    </h1>
                    <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                        In B2B tech, you aren't selling to a person; you're selling to a committee. I help you build the technical authority and thought leadership needed to win over every stakeholder in the room.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    {/* The Problem */}
                    <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-4">The "Silent" Buying Cycle</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Enterprise buyers spend 70% of their journey researching before they ever talk to your sales team. If your site doesn't answer their highly complex technical questions, you've lost the deal before you even knew it existed.
                        </p>
                        <div className="p-4 bg-purple-950/20 rounded-2xl border border-purple-900/30">
                            <p className="text-purple-300 font-medium italic text-sm">
                                "The biggest risk in B2B is being 'Good Enough' but invisible. I make sure your expertise is unavoidable."
                            </p>
                        </div>
                    </div>

                    {/* The Solution */}
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-zinc-900/40 border border-purple-900/30">
                        <h2 className="text-2xl font-bold text-white mb-4">My B2B Authority System</h2>
                        <ul className="space-y-4 text-zinc-300 text-sm leading-relaxed mb-6">
                            <li><strong>Entity-Based Trust:</strong> I ensure search engines recognize your brand and executives as the definitive 'Entities' for your specific technical category.</li>
                            <li><strong>Hub & Spoke Mastery:</strong> I architect your site to channel authority from massive Pillar pages down to the hyper-specific sub-topics that engineers actually care about.</li>
                            <li><strong>Sales-Aligned SEO:</strong> I don't just target keywords; I target the questions your sales team hears daily, turning your website into their best closing tool.</li>
                        </ul>
                    </div>
                </div>

                <div className="p-12 text-center rounded-3xl bg-zinc-900/30 border border-zinc-800 mb-24">
                    <h2 className="text-3xl font-bold text-white mb-4">Align Your Content With Sales</h2>
                    <p className="text-zinc-400 mb-8 max-w-xl mx-auto">See how an integrated B2B SEO strategy can generate high-quality MQLs and support your enterprise sales team.</p>
                    <a href="mailto:korechaitanya10@gmail.com" className="inline-flex items-center justify-center px-8 py-4 bg-purple-500 text-zinc-950 font-bold rounded-xl hover:bg-purple-400 transition-colors">
                        Request a B2B Strategy Session
                    </a>
                </div>

                {/* FAQs */}
                <FAQSection faqs={b2bFaqs} title="B2B SEO FAQs" />

                {/* Schema Markup */}
                <SchemaMarkup schema={b2bSchema} />

            </div>
        </main>
    );
}
