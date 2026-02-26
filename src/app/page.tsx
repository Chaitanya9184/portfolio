import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chaitanya Kore | SEO & AI Search Expert',
  description: 'Specializing in Technical SEO, AI Search Optimization (GEO/AEO), and organic acquisition for SaaS, eCommerce, and B2B Enterprise brands.',
  alternates: {
    canonical: '/',
  },
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
    question: "How is traditional SEO different from GEO?",
    answer: "Old SEO chases keywords. GEO builds content that AI tools trust. It needs clear data and direct answers to make your brand a top citation."
  },
  {
    question: "How long does it take to see SEO results?",
    answer: "Content takes 3 to 6 months to rank. Technical fixes show results faster. Fixing dead links and boosting speed makes Google crawl faster. This can drive new traffic in weeks."
  },
  {
    question: "What platforms do you work with?",
    answer: "I work with platforms like Shopify Plus, WordPress, and Next.js. The core SEO strategy remains the same. But fixing technical issues needs deep knowledge of each system."
  },
  {
    question: "How do Entity SEO and AEO help B2B SaaS?",
    answer: "Answer Engine Optimization (AEO) trains Google to see your software features as facts. When buyers ask questions, AI engines recommend your tool instantly."
  },
  {
    question: "Do you guarantee top Google rankings?",
    answer: "No honest expert can guarantee exact rankings because algorithms change. I do guarantee strong technical setup and AI strategies. This approach has a proven history of driving growth."
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
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 relative inline-block">
          Proven Impact.
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-lg">Real-world growth plans working for top B2B agencies, major eCommerce stores, and local groups.</p>
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


    </main>
  );
}
