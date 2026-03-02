import React from 'react';
import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Contact Chaitanya Kore | Technical SEO & AEO Consultation',
    description: 'Get in touch for a technical SEO audit, AEO strategy, or to discuss organic growth for your SaaS or eCommerce brand. Dedicated support for B2B Tech.',
    alternates: {
        canonical: 'https://www.chaitanyakore.in/contact',
    },
    openGraph: {
        title: 'Contact Chaitanya Kore | Technical SEO & AEO Consultation',
        description: 'Ready to scale your organic revenue? Contact Chaitanya for expert SEO and AEO guidance.',
        url: 'https://www.chaitanyakore.in/contact',
    }
};

export default function ContactPage() {
    return <ContactClient />;
}
