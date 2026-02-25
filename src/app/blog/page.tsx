import React from 'react';
import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
    title: 'AI Search Insights | AEO, GEO & Technical SEO Blog',
    description: 'Expert analysis and deep dives into the evolution of AI-driven search (GEO/AEO) and advanced technical SEO strategies for 2026.',
    alternates: {
        canonical: '/blog',
    },
    openGraph: {
        title: 'AI Search Insights | Chaitanya Kore',
        description: 'Deep dives into the evolution of AEO, GEO, and technical SEO in 2026. Expert analysis for the generative search era.',
        type: 'website',
        url: 'https://www.chaitanyakore.in/blog/',
    }
};

export default function BlogPage() {
    return <BlogClient />
}
