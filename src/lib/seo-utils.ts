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
    relatedServices?: string[];
    relatedIndustries?: string[];
    relatedBlogs?: string[];
    relatedInsights?: string[];
}

const siteConfig = {
    name: "Chaitanya Kore",
    url: "https://www.chaitanyakore.in",
    author: "Chaitanya Kore",
};

export function generateSEOMetadata(data: SEOData, pathPrefix?: string): Metadata {
    const fullPath = pathPrefix ? `${pathPrefix}/${data.slug}` : `/${data.slug}`;
    const canonicalUrl = `${siteConfig.url}${fullPath}`;

    return {
        title: `${data.metaTitle} | ${siteConfig.name}`,
        description: data.metaDescription,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: data.metaTitle,
            description: data.metaDescription,
            url: canonicalUrl,
            siteName: siteConfig.name,
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: data.metaTitle,
            description: data.metaDescription,
            creator: '@chaitanya9184',
        },
    };
}

