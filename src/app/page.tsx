import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chaitanya Kore | Senior SEO & AI Search (AEO/GEO) Professional',
  description: 'Specializing in Technical SEO, AI Search Optimization (GEO/AEO), and organic acquisition for SaaS, eCommerce, and B2B Enterprise brands.',
};

import ScrollyCanvas from "@/components/ScrollyCanvas";
import AiExpertise from "@/components/AiExpertise";
import Experience from "@/components/Experience";
import Recommendations from "@/components/Recommendations";
import AgencyCaseStudy from "@/components/AgencyCaseStudy";
import CaseStudy from "@/components/CaseStudy";
import CommunityCaseStudy from "@/components/CommunityCaseStudy";
import TechStack from "@/components/TechStack";
import SeoPhilosophy from "@/components/SeoPhilosophy";
import CallToAction from "@/components/CallToAction";
import BlogCarousel from "@/components/BlogCarousel";
import IndustriesSection from "@/components/IndustriesSection";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

const homeFaqs = [
  {
    question: "What is the difference between traditional SEO and Generative Engine Optimization (GEO)?",
    answer: "Traditional SEO focuses on optimizing for 10 blue links via keywords and backlinks. GEO (Generative Engine Optimization) focuses on structuring data and content to be cited by AI engines like Google's AI Overviews, Perplexity, and ChatGPT. It requires deep semantic structuring and high 'Information Gain' to ensure your brand is the primary source."
  },
  {
    question: "How long does it take to see ROI from technical SEO improvements?",
    answer: "While content can take 3-6 months to mature, technical SEO fixes—such as resolving indexation bloat, improving Core Web Vitals, and repairing broken architecture—often yield measurable traffic and ranking improvements within 4 to 8 weeks as search engines re-crawl the optimized foundation."
  },
  {
    question: "What platforms do you specialize in for Enterprise SEO?",
    answer: "My expertise spans enterprise CMS and eCommerce platforms including Shopify Plus, WordPress (VIP), Magento (Adobe Commerce), and custom Next.js/React headless architectures. Strategy is platform-agnostic, but technical execution requires deep platform-specific knowledge."
  },
  {
    question: "How do Entity SEO and AEO benefit B2B SaaS companies?",
    answer: "Answer Engine Optimization (AEO) and Entity SEO help establish your brand and key features as distinct 'entities' in the Google Knowledge Graph. For SaaS, this means when enterprise buyers ask complex, multi-layered questions, AI engines recognize your product as the authoritative solution, dominating the AI Overview."
  },
  {
    question: "Do you guarantee top rankings on Google?",
    answer: "No reputable SEO professional guarantees specific rankings, as Google's algorithm is proprietary and constantly changing. I guarantee the implementation of best-in-class technical infrastructure, modern GEO strategies, and data-driven content architectures that historically drive significant organic growth and pipeline value."
  }
];

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.chaitanyakore.in/#website",
      "url": "https://www.chaitanyakore.in/",
      "name": "Chaitanya Kore",
      "description": "Senior SEO & AI Search Professional specializing in Technical SEO, GEO, and organic acquisition."
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.chaitanyakore.in/#service",
      "name": "Chaitanya Kore - SEO Consulting",
      "image": "https://www.chaitanyakore.in/sequence/frame_00_delay-0.066s.png",
      "url": "https://www.chaitanyakore.in/",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.chaitanyakore.in/#faq",
      "mainEntity": homeFaqs.map(faq => ({
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] selection:bg-blue-500/30">
      {/* 
        The ScrollyCanvas component contains its own 500vh container 
        with the sticky canvas overlay 
      */}
      <ScrollyCanvas />

      {/* High-impact AIO/AEO/GEO Section */}
      <AiExpertise />

      {/* Industries Section */}
      <IndustriesSection />

      {/* SEO Philosophy / User Intent Section */}
      <SeoPhilosophy />

      {/* Peer Endorsements Section */}
      <Recommendations />

      {/* --- RECENT IMPACT / CASE STUDIES --- */}
      <div className="w-full pt-32 pb-16 bg-[#050505] text-center border-t border-zinc-900 border-dashed">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">Proven Impact.</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-lg">Real-world growth strategies executed across B2B agencies, direct-to-consumer enterprise eCommerce, and local organizations.</p>
      </div>

      {/* Agency Marketing Growth Case Study */}
      <AgencyCaseStudy />

      {/* Featured eCommerce Case Study Section */}
      <CaseStudy />

      {/* Community Organization Case Study */}
      <CommunityCaseStudy />

      {/* 
        The Experience component sits below the Expertise section
      */}
      <Experience />

      {/* Tech Stack Component */}
      <TechStack />

      {/* Featured Blog Insights Carousel */}
      <BlogCarousel />

      {/* FAQs */}
      <FAQSection faqs={homeFaqs} title="SEO & Technical Expertise FAQs" />

      {/* Strong Call To Action Banner */}
      <CallToAction />

      {/* JSON-LD Schema */}
      <SchemaMarkup schema={homeSchema} />

      {/* Simple Footer */}
      <footer className="w-full py-12 bg-[#050505] border-t border-zinc-900 border-dashed">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center opacity-50">
          <p className="text-zinc-500 text-sm tracking-wide mb-4 md:mb-0">© 2026 Chaitanya Kore. All Rights Reserved.</p>
          <div className="flex flex-wrapjustify-center gap-6 text-[10px] uppercase tracking-widest font-bold">
            <Link href="/industries" className="text-zinc-500 hover:text-emerald-400 transition-colors">Industries</Link>
            <Link href="/service-areas" className="text-zinc-500 hover:text-orange-400 transition-colors">Service Areas</Link>
            <Link href="/roi-calculator" className="text-zinc-500 hover:text-blue-400 transition-colors">ROI Predictor</Link>
            <Link href="/blog" className="text-zinc-500 hover:text-blue-400 transition-colors">AI Insights</Link>
            <a href="https://linkedin.com/in/chaitanya-kore-342069140" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
