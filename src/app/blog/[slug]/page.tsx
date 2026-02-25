import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import BlogPostClient from './BlogPostClient';

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) {
        return {
            title: 'Article Not Found | AI Search Insights',
        };
    }

    return {
        title: `${post.title} | AI Search Insights`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            url: `https://chaitanyakore.com/blog/${post.slug}/`,
            images: [
                {
                    url: post.image || '/blog-placeholder.jpg',
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image || '/blog-placeholder.jpg'],
        }
    };
}

export default function BlogPostPage({ params }: Props) {
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return <BlogPostClient post={post} />;
}
