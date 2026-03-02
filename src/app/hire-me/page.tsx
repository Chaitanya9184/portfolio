import React from 'react';
import { Metadata } from 'next';
import HireMeClient from './HireMeClient';

export const metadata: Metadata = {
    title: 'Hire Chaitanya Kore | Fractional SEO Director & Growth Lead',
    description: 'Looking for SEO leadership? Chaitanya Kore builds and scales high-performance organic growth teams for SaaS and Enterprise. Expert in Technical SEO & AEO.',
    alternates: {
        canonical: 'https://www.chaitanyakore.in/hire-me',
    },
    openGraph: {
        title: 'Hire Chaitanya Kore | SEO Leadership for SaaS & Enterprise',
        description: 'Fractional SEO Director expertise for Series A-C startups. Drive predictable revenue from organic search.',
        url: 'https://www.chaitanyakore.in/hire-me',
    }
};

export default function HireMePage() {
    return <HireMeClient />;
}
