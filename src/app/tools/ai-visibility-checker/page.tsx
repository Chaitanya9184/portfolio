import React from 'react';
import { Metadata } from 'next';
import AIVisibilityCheckerClient from './AIVisibilityCheckerClient';

export const metadata: Metadata = {
    title: 'AI Visibility Checker | GEO & AEO Search Diagnostic Tool',
    description: 'Audit your website for the Generative Search era. Measure your Generative Search Visibility (GSV) and optimize for AI citation bots.',
    alternates: {
        canonical: '/tools/ai-visibility-checker',
    },
    openGraph: {
        title: 'AI GSV Visibility Checker | Chaitanya Kore',
        description: 'Audit your content for AI search optimization. Get actionable insights to boost your citation probability in LLM responses.',
        url: 'https://www.chaitanyakore.in/tools/ai-visibility-checker/',
    }
};

export default function AIVisibilityCheckerPage() {
    return <AIVisibilityCheckerClient />;
}
