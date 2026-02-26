import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Chaitanya Kore',
    description: 'Terms of Service for consulting engagements and use of the Chaitanya Kore SEO website.',
    alternates: {
        canonical: '/terms-of-service'
    }
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-[#121212] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto prose prose-invert">
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">Terms of Service</h1>
                <p className="text-sm text-zinc-500 mb-12">Last Updated: February 25, 2026</p>

                <h2>1. Introduction</h2>
                <p>Welcome to www.chaitanyakore.in. By accessing this website, you agree to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.</p>

                <h2>2. Use License</h2>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul>
                    <li>modify or copy the materials;</li>
                    <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                    <li>attempt to decompile or reverse engineer any software contained on this website;</li>
                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                    <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>

                <h2>3. Disclaimer</h2>
                <p>The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                <h2>4. Limitations</h2>
                <p>In no event shall Chaitanya Kore or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if we have been notified orally or in writing of the possibility of such damage.</p>

                <h2>5. Consulting Services</h2>
                <p>Any consulting services referenced or booked via this site are subject to separate master service agreements (MSAs) or statements of work (SOWs) and are out of scope for general website terms. General SEO advice is provided 'as is'.</p>

                <h2>6. Revisions and Errata</h2>
                <p>The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on this website are accurate, complete, or current. We may make changes to the materials contained on the website at any time without notice.</p>

                <h2>7. Applicable Law</h2>
                <p>Any claim relating to this website shall be governed by local laws without regard to its conflict of law provisions.</p>
            </div>
        </main>
    );
}
