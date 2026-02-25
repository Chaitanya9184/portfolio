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

      {/* 
        The Experience component sits below the Expertise section
      */}
      <Experience />

      {/* Peer Endorsements Section (Moved UP per request) */}
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

      {/* Tech Stack Component */}
      <TechStack />

      {/* SEO Philosophy / User Intent Section */}
      <SeoPhilosophy />

      {/* Strong Call To Action Banner */}
      <CallToAction />

      {/* Featured Blog Insights Carousel */}
      <BlogCarousel />

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
