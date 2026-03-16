import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { clusters } from '@/lib/cluster-data';
import ClusterClient from '@/components/ClusterClient';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return clusters.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = clusters.find((p) => p.slug === slug);

    if (!post) return { title: 'Insight Not Found' };

    return {
        title: post.metaTitle || `${post.title} | Chaitanya Kore`,
        description: post.description,
        alternates: {
            canonical: `/insights/${post.slug}`,
        },
    };
}

export default async function ClusterPage({ params }: Props) {
    const { slug } = await params;
    const post = clusters.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return <ClusterClient cluster={post} />;
}
