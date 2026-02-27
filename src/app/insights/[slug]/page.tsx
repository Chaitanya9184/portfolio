import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { clusters } from '@/lib/cluster-data';
import ClusterClient from '@/components/ClusterClient';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return clusters.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = clusters.find((p) => p.slug === params.slug);

    if (!post) return { title: 'Insight Not Found' };

    return {
        title: post.metaTitle || `${post.title} | Chaitanya Kore`,
        description: post.description,
        alternates: {
            canonical: `/insights/${post.slug}`,
        },
    };
}

export default function ClusterPage({ params }: Props) {
    const post = clusters.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return <ClusterClient cluster={post} />;
}
