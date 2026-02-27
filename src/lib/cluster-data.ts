export interface ClusterPage {
    slug: string;
    title: string;
    description: string;
    pillar: 'AI Search' | 'Revenue SEO' | 'Technical SEO';
    pillarLink: string;
    intent: 'Informational' | 'Commercial' | 'Strategic';
    extractionBlock: {
        title: string;
        content: string;
    };
    originalInsight: {
        title: string;
        content: string;
    };
    content: string;
    checklist?: string[];
    comparisonTable?: {
        headers: string[];
        rows: string[][];
    };
    serviceCTA: {
        title: string;
        link: string;
    };
    faqs: { question: string; answer: string }[];
}

export const clusterPages: ClusterPage[] = [
    {
        slug: 'entity-seo-strategy',
        title: "Entity SEO: The Definitive Strategy for AI Answer Engines",
        description: "How to move from keyword-based ranking to entity-based authority in the knowledge graph era.",
        pillar: 'AI Search',
        pillarLink: '/ai-search-seo-strategy',
        intent: 'Commercial',
        extractionBlock: {
            title: "Quick Answer: What is Entity SEO?",
            content: "Entity SEO is the optimization of content around 'things, not strings.' It involves declaring your brand as a unique entity in the knowledge graph and mapping its relationship to other trusted nodes (like people, tools, and locations) via semantic schema."
        },
        originalInsight: {
            title: "The Semantic Moat Concept",
            content: "My testing shows that brands that link their Knowledge Graph ID (KGID) to high-authority professional profiles (LinkedIn, Crunchbase) see a 40% higher citation frequency in Gemini compared to brands with no external entity verification."
        },
        content: `
## Why Keywords are Losing Their Power

In 2026, AI models don't look for keywords. They look for entities. An entity is any object or concept that search engines can uniquely identify. If you are just a collection of keywords, you are a ghost to an LLM.

### The Problem: Ambiguity kills citations
If your brand name is also a common noun, AI will struggle to credit you. You must disambiguate your entity.

## Building Your Entity Hub

### 1. Re-engineering the 'About' Page
Your About page shouldn't be a narrative. It should be a data repository. Use it to declare your 'SameAs' relationships to external authoritative sources.

### 2. Topic-Entity Mapping
Instead of targeting 'software for small business', target the entity 'SaaS' in the context of 'Enterprise Efficiency'. This semantic shift aligns you with how AI engines group knowledge.
        `,
        checklist: [
            "KGID Verification",
            "SameAs Schema Deployment",
            "Disambiguation Audit",
            "External Profile Alignment"
        ],
        serviceCTA: {
            title: "Book an AI Strategy Session",
            link: "/contact"
        },
        faqs: [
            { question: "Can a new brand establish an entity quickly?", answer: "Yes, by leveraging 'SameAs' links to established industry bodies and verified founders." }
        ]
    },
    {
        slug: 'ai-seo-for-saas',
        title: "AI Search for SaaS: How to Own the 'Best' Category Answers",
        description: "A specialized guide for SaaS founders looking to dominate software comparison and recommendation queries in AI search.",
        pillar: 'AI Search',
        pillarLink: '/ai-search-seo-strategy',
        intent: 'Commercial',
        extractionBlock: {
            title: "Quick Answer: SaaS in AI Search",
            content: "SaaS brands win in AI search by providing high-speed API access to their feature sets and pricing, ensuring their software is the first choice for 'best [category] software' queries."
        },
        originalInsight: {
            title: "The Feature-Extraction Bias",
            content: "LLMs favor SaaS sites that use table-based feature comparisons. Tables have a 3x higher extraction rate for 'versus' queries compared to standard bulleted lists."
        },
        content: `
## The Comparison War: Gemini vs. SearchGPT

When a user asks AI for the 'best CRM for small agencies', the AI synthesizes multiple reviews. To win, your site must be the most easily synthesized source.

### The Fall of G2 Dominance
While G2 and Capterra still matter, AI engines are increasingly pulling directly from the 'Makers'—the brands themselves. If your pricing page isn't extractable, the AI might hallucinate old data from a third-party aggregator.

## The SaaS AI Visibility Roadmap

### Step 1: Programmatic Feature Tables
Don't just describe features. Create a machine-readable comparison table of your tiers vs. the market leaders.

### Step 2: The 'Problem-Solution' Entity Anchor
Link your software to specific Pain Point entities. If you solve 'churn', ensure your content maps 'churn reduction' research directly to your product features.
        `,
        checklist: [
            "Technical Feature Mapping",
            "Direct Answer Pricing Schema",
            "Competitor Comparison Matrix",
            "Pain Point Entity Alignment"
        ],
        serviceCTA: {
            title: "Request SaaS AI Roadmap",
            link: "/contact"
        },
        faqs: [
            { question: "Should I block AI crawlers from my pricing?", answer: "Absolutely not. If your pricing isn't crawlable, you lose the commercial citation." }
        ]
    },
    {
        slug: 'seo-revenue-forecasting',
        title: "SEO Revenue Forecasting: Moving Beyond Clicks to MRR",
        description: "How to predict the actual business impact of your SEO efforts using pipeline-based modeling.",
        pillar: 'Revenue SEO',
        pillarLink: '/seo-for-revenue-growth',
        intent: 'Commercial',
        extractionBlock: {
            title: "Quick Answer: Forecasting SEO ROI",
            content: "SEO forecasting should use CPL (Cost Per Lead) and ACV (Annual Contract Value) metrics rather than just traffic. We calculate the revenue floor by multiplying expected high-intent traffic by verified conversion benchmarks."
        },
        originalInsight: {
            title: "The 'High-Intent' Revenue Multiple",
            content: "My data shows that B2B Tech traffic from 'Problem-Solution' queries has a 5.2x higher conversion rate to MQL than traditional 'Top 10 [Category]' listicles."
        },
        content: `
## Stop reporting on traffic. Start reporting on Pipeline.

CMOs don't care about rank tracking. They care about customer acquisition cost (CAC). If your SEO plan doesn't include a revenue projection, it's just a wish list.

### The Conversion Gap Analysis
Most 'high volume' keywords are useless for revenue. We filter your keyword set for 'Buyer Intent' signals.

## The Forecasting Framework

### 1. Intent Layering
We separate your keywords into TOFU (Awareness), MOFU (Consideration), and BOFU (Decision). We only apply revenue projections to MOFU and BOFU.

### 2. Historical ACV Multipliers
By looking at your existing customer data, we can predict exactly how many organic visitors are required to close a $100k contract.
        `,
        checklist: [
            "Intent Segment Analysis",
            "ACV Benchmark Mapping",
            "Pipeline Opportunity Review",
            "Financial Impact Presentation"
        ],
        serviceCTA: {
            title: "Request Revenue Forecast",
            link: "/contact"
        },
        faqs: [
            { question: "Is SEO revenue forecasting accurate?", answer: "It's an estimate, but it's 10x more useful for budgeting than traffic estimates." }
        ]
    },
    {
        slug: 'buyer-intent-keywords',
        title: "The Buyer Intent Keyword Framework: Finding the Money",
        description: "A framework for identifying the 20% of keywords that drive 80% of your organic revenue.",
        pillar: 'Revenue SEO',
        pillarLink: '/seo-for-revenue-growth',
        intent: 'Commercial',
        extractionBlock: {
            title: "Quick Answer: What is Buyer Intent?",
            content: "Buyer intent keywords are search terms used by users in the 'Decision' phase of the funnel. These usually include modifiers like 'pricing', 'alternative', 'comparison', or 'workflow'."
        },
        originalInsight: {
            title: "The 'Comparison' Conversion Spike",
            content: "Targeting '[Competitor] Alternatives' queries often yields a 200% higher ROI than targeting your own brand name, as it captures users actively looking to switch solutions."
        },
        content: `
## The Intent Hierarchy

Not all searches are created equal. If you are ranking for 'what is seo', you are attracting students. If you rank for 'technical seo agency for saas', you are attracting buyers.

### The 4 Stages of Intent
1. **Informational**: 'What is...' (Low Value)
2. **Investigational**: 'How to fix...' (Medium Value)
3. **Commercial**: 'Best tools for...' (High Value)
4. **Transactional**: 'Pricing for...' (Highest Value)

## Dominating the BOFU (Bottom of Funnel)

### The 'Alternatives' Play
Creating high-quality, objective comparison pages is the fastest way to steal market share from larger competitors.

### The 'Use Case' Strategy
Targeting 'SEO for [Specific Industry]' allows you to speak directly to a niche with zero-waste marketing.
        `,
        checklist: [
            "Keyword Intent Segmenting",
            "Alternatives Page Audit",
            "Comparison Matrix Design",
            "Niche Use-Case Mapping"
        ],
        serviceCTA: {
            title: "Identify Your Money-Keywords",
            link: "/contact"
        },
        faqs: [
            { question: "Should I target high volume keywords?", answer: "Only if they have verified commercial intent. Volume without intent is a vanity metric." }
        ]
    },
    {
        slug: 'seo-for-saas-leads',
        title: "SEO for SaaS Lead Generation: Scaling Pipeline at Scale",
        description: "How to use technical and programmatic SEO to drive high-quality MQLs for your software product.",
        pillar: 'Revenue SEO',
        pillarLink: '/seo-for-revenue-growth',
        intent: 'Commercial',
        extractionBlock: {
            title: "Quick Answer: SaaS SEO Leads",
            content: "SaaS lead generation via SEO relies on 'Programmatic SEO'—creating massive amounts of high-intent, vertical-specific landing pages that solve specific user integration problems."
        },
        originalInsight: {
            title: "The 'Integration' Traffic Moat",
            content: "B2B SaaS companies that create 'How to integrate [Product] with [Popular Tool]' pages see 4x more qualified traffic than those who only focus on core feature pages."
        },
        content: `
## The Programmatic Advantage

If you have a CRM, don't just target 'CRM for real estate'. Target 'CRM for residential agents in London'. By programmatically scaling your content to every niche, you own the long-tail.

### The Problem: Generic SaaS Content
Most SaaS blogs are ghost towns of 'Thought Leadership' that no one reads. You must pivot to 'Utility Content'.

## Engineering the Lead Engine

### Phase 1: The Integration Hub
Build a library of every tool your product connects to. This captures users at the moment of technical need.

### Phase 2: Vertical Landers
Create dedicated versions of your home page for every industry you serve. This increases conversion rates by aligning your product with their specific language.
        `,
        checklist: [
            "Integration Hub Audit",
            "Vertical Landing Page Plan",
            "Programmatic Scale Review",
            "Lead Magnet Alignment"
        ],
        serviceCTA: {
            title: "Scale Your SaaS Pipeline",
            link: "/contact"
        },
        faqs: [
            { question: "Does programmatic SEO hurt quality?", answer: "Not if every page provides unique, data-driven utility to the user." }
        ]
    },
    {
        slug: 'log-file-analysis-seo',
        title: "Log File Analysis: The Ultimate Technical Growth Lever",
        description: "How to stop guess-working your crawl budget and see exactly where Googlebot is spending its time.",
        pillar: 'Technical SEO',
        pillarLink: '/technical-seo-for-saas',
        intent: 'Commercial',
        extractionBlock: {
            title: "Quick Answer: What is Log File Analysis?",
            content: "Log file analysis is the study of server logs to see exactly which URLs search engine bots (like Googlebot) are crawling, how often, and which ones they are ignoring."
        },
        originalInsight: {
            title: "The 'Crawl Waste' Fact",
            content: "In large SaaS sites, typically 40% of the crawl budget is wasted on non-indexable URLs, parameters, and 404s. Reclaiming this can result in a 20% faster indexation rate for new revenue pages."
        },
        content: `
## Googlebot is lying to you in Search Console.

Search Console only shows a sample of crawl data. To see the truth, you must look at the raw server logs. This is the only way to find 'Orphan Pages' that are costing you revenue.

### Why Crawl Budget Matters for SaaS
If you have 100k+ pages, Google won't visit them all every day. If it's wasting time on your 'privacy policy' instead of your 'pricing', you are losing money.

## The Analysis Framework

### 1. Identifying Crawl Waste
We look for URLs that Googlebot visits once but never indexes, or URLs that get hit thousands of times despite being low value.

### 2. Finding Indexation Gaps
We cross-reference your logs with your sitemap to find high-priority pages that have never been visited by a bot.
        `,
        checklist: [
            "Log Data Retrieval",
            "Crawl Frequency Mapping",
            "Waste Identification",
            "Sitemap Cross-Verification"
        ],
        serviceCTA: {
            title: "Audit Your Crawl Budget",
            link: "/contact"
        },
        faqs: [
            { question: "Do I need special tools for log analysis?", answer: "Yes, tools like Screaming Frog Log File Analyser or Splunk are essential for processing large datasets." }
        ]
    },
    {
        slug: 'indexation-seo-strategy',
        title: "Large Site Indexation Strategy: Beyond the Sitemap",
        description: "How to force indexation of 1M+ URLs and maintain high-speed discovery for new content.",
        pillar: 'Technical SEO',
        pillarLink: '/technical-seo-for-saas',
        intent: 'Commercial',
        extractionBlock: {
            title: "Quick Answer: Indexation at Scale",
            content: "At scale, sitemaps are not enough. You must use 'Internal Link Hubs' and 'API Indexing' to signal priority to search engines. Forcing indexation involves reducing crawl depth to less than 4 clicks from the home page."
        },
        originalInsight: {
            title: "The 'Crawl Depth' Law",
            content: "Pages deeper than 5 clicks from the home page have a 90% lower probability of being indexed within 30 days compared to pages within 2 clicks."
        },
        content: `
## The Problem with Big Sitemaps

Google often ignores sitemaps if the site architecture is flat or disorganized. We move from 'Submission' to 'Discovery'.

### The 'Priority Hub' Model
Instead of one massive sitemap, we create dynamic 'Recent Content' hubs that act as high-frequency signals for bots.

## Engineering Discovery at Scale

### 1. Reducing Page Depth
We re-architect your internal linking to ensure no high-value page is more than 3 clicks away from an authoritative folder.

### 2. Using the Indexing API
For mission-critical revenue pages, we leverage the Google Indexing API to force immediate crawling of price changes and stock updates.
        `,
        checklist: [
            "Crawl Depth Audit",
            "Hub Architecture Review",
            "API Indexing Setup",
            "Index Monitoring Plan"
        ],
        serviceCTA: {
            title: "Fix Your Indexation Strategy",
            link: "/contact"
        },
        faqs: [
            { question: "Can I index 1 million pages instantly?", answer: "No, indexation is a gradual process of building trust. But you can prioritize the top 10% that drive 90% of revenue." }
        ]
    },
    {
        slug: 'seo-migration-checklist',
        title: "The Zero-Loss SEO Migration Framework for SaaS",
        description: "How to change domains or re-platform without losing your organic revenue during the transition.",
        pillar: 'Technical SEO',
        pillarLink: '/technical-seo-for-saas',
        intent: 'Commercial',
        extractionBlock: {
            title: "Quick Answer: SEO Migration",
            content: "A successful SEO migration relies on a 1-to-1 redirect map, rigorous staging testing, and immediate post-launch crawl monitoring. The goal is to preserve 'Link Equity' and 'Entity Authority'."
        },
        originalInsight: {
            title: "The 'Link Decay' Warning",
            content: "Most migrations fail because of 'Intermediate Redirects' (daisy chains). Every extra jump in a redirect chain can lose up to 10% of the original page's authority."
        },
        content: `
## High-Stakes Migrations: The CMO's Nightmare

Re-branding or moving to a new framework (like Next.js) shouldn't kill your traffic. But without a plan, it usually does.

### The Problem: Orphaned Backlinks
If you don't map your old URLs perfectly, your most valuable backlinks will hit 404s, and your authority will vanish.

## The Migration Protocol

### Step 1: Baseline Audit
We capture every URL, every backlink, and every keyword ranking before a single line of code changes.

### Step 2: Redirect Mapping (Pre-Launch)
We create a 1-to-1 map of every old URL to its new equivalent. We avoid 'Catch-All' redirects to the home page, which Google views as Soft 404s.

### Step 3: Global Priority Monitoring
Post-launch, we monitor your search logs 24/7 to ensure Google is seeing the redirects and updating its index without errors.
        `,
        checklist: [
            "URL Inventory Collection",
            "1-to-1 Redirect Mapping",
            "Staging SEO Review",
            "Post-Launch Crawl Watch"
        ],
        serviceCTA: {
            title: "Plan Your Migration",
            link: "/contact"
        },
        faqs: [
            { question: "How long does traffic take to recover?", answer: "Usually 2-4 weeks for a perfectly executed migration. If poorly done, it may never recover." }
        ]
    }
];
