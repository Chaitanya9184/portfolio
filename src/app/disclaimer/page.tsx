import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Disclaimer | Chaitanya Kore',
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
                <p>The information provided on www.chaitanyakore.in (including the blog, case studies, forecasting tools, and guides) is for general informational and educational purposes only. It does not constitute formal legal, financial, or professional SEO consulting advice outside the scope of a signed contract. While every effort is made to maintain accurate information, we make no representations or warranties of any kind regarding the completeness, accuracy, reliability, suitability, or availability of the information.</p>

                <h2>2. SEO & Forecasting Variability</h2>
                <p>Search engine algorithms (including Google Search, Google Gemini, and Perplexity AI) are third-party systems that update frequently and without warning. Past performance, including case studies and historical traffic metrics, does not guarantee future results. Tools such as our "SEO ROI Calculator" provide mathematical projections based on industry-standard models but cannot account for algorithmic volatility, competitive action, or macroeconomic shifts. Traffic and revenue forecasts are purely directional estimates, not guarantees.</p>

                <h2>3. "As Is" Content</h2>
                <p>All content on this site is provided "as is" and "as available". Any reliance you place on such information is strictly at your own risk. We disclaim any liability for any losses or damages in connection with the use of our website or reliance on information presented here.</p>

                <h2>4. External Links</h2>
                <p>Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>

                <h2>5. Case Studies</h2>
                <p>Case studies featured on this website are true accounts of previous work. However, certain client names, exact revenue figures, and proprietary data may have been anonymized or generalized to protect client confidentiality and comply with non-disclosure agreements (NDAs).</p>
            </div>
        </main>
    );
}
