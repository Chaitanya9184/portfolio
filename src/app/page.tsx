import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chaitanya Kore | AEO, GEM & SEO Strategist',
  description: 'Specializing in Technical SEO, AEO, and GEM (Generative Engine Marketing) for SaaS, eCommerce, and B2B Enterprise brands.',
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
    question: "What is the difference between traditional SEO and Generative Engine Optimization (GEO)?",
    answer: "Old SEO chases basic keyword rankings. GEO (Generative Engine Optimization) builds content that AI tools like Google AI Overviews trust. It requires clear data structures and direct answers to make your brand the top AI citation."
  },
  {
    question: "How long does it take to see ROI from technical SEO improvements?",
    answer: "Content takes 3 to 6 months to rank. Technical SEO fixes show results much faster. When we fix dead links, boost speed, and clear index bloat, Google quickly re-crawls your site. This often drives new traffic in just 4 to 8 weeks."
  },
  {
    question: "What platforms do you specialize in for Enterprise SEO?",
    answer: "I work deeply with big platforms like Shopify Plus, WordPress, and custom Next.js apps. The core SEO strategy stays the same. However, fixing technical issues requires deep knowledge of how each distinct CMS system is engineered."
  },
  {
    question: "How do Entity SEO and AEO benefit B2B SaaS companies?",
    answer: "Answer Engine Optimization (AEO) trains Google to see your software features as indisputable facts. When enterprise buyers ask complex questions, AI engines recommend your tool instantly."
  },
  {
    question: "Do you guarantee top rankings on Google?",
    answer: "No honest expert guarantees exact rankings, because algorithms constantly change. I do guarantee flawless technical architecture and cutting-edge AI strategies. This methodology has a proven history of driving massive organic growth."
  }
];

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.chaitanyakore.in/#person",
      "name": "Chaitanya Kore",
      "jobTitle": "AEO, GEM and SEO Strategist",
      "url": "https://www.chaitanyakore.in/",
      "image": "https://www.chaitanyakore.in/sequence/frame_00_delay-0.066s.png",
      "sameAs": [
        "https://linkedin.com/in/chaitanya-kore-342069140"
      ],
      "description": "Chaitanya Kore is an AEO, GEM and SEO Strategist specializing in Technical SEO, AEO (Answer Engine Optimization), and GEM (Generative Engine Marketing) for SaaS, eCommerce, and B2B Enterprise brands."
    },
    {
      "@type": "WebSite",
      "@id": "https://www.chaitanyakore.in/#website",
      "url": "https://www.chaitanyakore.in/",
      "name": "Chaitanya Kore | AEO, GEM and SEO Strategist",
      "description": "Expert in Technical SEO, AEO, and GEM (Generative Engine Marketing).",
      "publisher": { "@id": "https://www.chaitanyakore.in/#person" }
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
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "founder": { "@id": "https://www.chaitanyakore.in/#person" },
      "knowsAbout": [
        "Technical SEO",
        "Generative Engine Marketing",
        "Answer Engine Optimization",
        "Growth Strategy",
        "Organic Acquisition",
        "SaaS Marketing",
        "eCommerce SEO"
      ]
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
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.chaitanyakore.in/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.chaitanyakore.in/"
        }
      ]
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
        <p className="text-zinc-500 max-w-2xl mx-auto text-lg">Real-world growth plans put to work across top B2B agencies, major direct-to-buyer eCommerce stores, and local groups.</p>
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
