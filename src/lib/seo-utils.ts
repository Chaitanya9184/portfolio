import { Metadata } from 'next';

export interface SEOData {
    slug: string;
    name: string;
    heading: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    painPoints?: string[];
    solutions?: string[];
}

const siteConfig = {
    name: "Chaitanya's Portfolio",
    url: "https://chaitanya.dev", // Replace with actual URL
    author: "Chaitanya",
};

export function generateSEOMetadata(data: SEOData): Metadata {
    return {
        title: `${data.metaTitle} | ${siteConfig.name}`,
        description: data.metaDescription,
        alternates: {
            canonical: `${siteConfig.url}/${data.slug}`,
        },
        openGraph: {
            title: data.metaTitle,
            description: data.metaDescription,
            url: `${siteConfig.url}/${data.slug}`,
            siteName: siteConfig.name,
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: data.metaTitle,
            description: data.metaDescription,
            creator: '@chaitanya', // Replace with actual handle
        },
    };
}
