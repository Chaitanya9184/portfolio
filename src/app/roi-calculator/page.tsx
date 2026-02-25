import React from 'react';
import { Metadata } from 'next';
import SeoRoiCalculatorClient from './SeoRoiCalculatorClient';

export const metadata: Metadata = {
    title: 'SEO ROI Calculator | Predictive Revenue Forecasting for 2026',
    description: 'Calculate the potential revenue and ROI of your SEO investment. Professional forecasting tool based on search volume, CTR distributions, and conversion metrics.',
    openGraph: {
        title: 'SEO ROI Opportunity Calculator | Chaitanya Kore',
        description: 'Professionally forecast your organic growth and ROI. Data-driven estimates for eCommerce and SaaS brands.',
        url: 'https://www.chaitanyakore.in/roi-calculator/',
    }
};

export default function RoiCalculatorPage() {
    return <SeoRoiCalculatorClient />;
}
