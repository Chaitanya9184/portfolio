import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Legal Disclaimer & Professional Policies | Chaitanya Kore',
    description: 'Professional disclaimer for Chaitanya Kore, SEO consulting, forecasting tools, and AI search advice.',
    alternates: {
        canonical: '/disclaimer'
    }
};

export default function DisclaimerPage() {
    return (
        <main className="min-h-screen bg-[#121212] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto prose prose-invert">
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">Disclaimer</h1>
                <p className="text-sm text-zinc-500 mb-12">Last Updated: February 25, 2026</p>

                <h2>1. Professional Advice Disclaimer</h2>
                <p>The information provided on this website is for general educational purposes only. It does not replace formal legal, financial, or professional SEO consulting advice.</p>
                <ul>
                    <li>We try to keep all information accurate and up to date.</li>
                    <li>However, we make no guarantees regarding the completeness or reliability of the information.</li>
                    <li>Any action you take based on this website is strictly at your own risk.</li>
                </ul>

                <h2>2. SEO & Forecasting Variability</h2>
                <p>Search engine algorithms (like Google Search, Gemini, and Perplexity) change frequently without warning. Because of this:</p>
                <ul>
                    <li>Past performance and case studies do not guarantee future results.</li>
                    <li>Traffic and revenue forecasts (like our "SEO ROI Calculator") are directional estimates, not guarantees.</li>
                    <li>We cannot control algorithmic volatility or competitor actions.</li>
                </ul>

                <h2>3. "As Is" Content</h2>
                <p>All content on this site is provided "as is". We are not liable for any losses or damages connected to the use of our website.</p>

                <h2>4. External Links</h2>
                <p>Our website contains links to external sites that we do not own or maintain. We do not guarantee the accuracy or safety of any information on those external websites.</p>

                <h2>5. Case Studies & Confidentiality</h2>
                <p>The case studies featured here are true accounts of previous consulting work. To protect client confidentiality and comply with NDAs, we often anonymize specific names, brands, or exact revenue data.</p>
            </div>
        </main>
    );
}
