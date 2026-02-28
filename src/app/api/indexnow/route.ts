import { NextResponse } from 'next/server';
import sitemap from '@/app/sitemap';

export async function POST() {
    try {
        const sitemapData = sitemap();
        const urlList = sitemapData.map((item) => item.url);
        
        const host = 'www.chaitanyakore.in';
        const key = '9ebd8c8a1e2f47cfa9e3d9e8b6b0d9ac';
        const keyLocation = `https://${host}/${key}.txt`;

        const indexNowPayload = {
            host,
            key,
            keyLocation,
            urlList,
        };

        const response = await fetch('https://api.indexnow.org/IndexNow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Host': 'api.indexnow.org',
            },
            body: JSON.stringify(indexNowPayload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('IndexNow Submission Failed:', errorText);
            return NextResponse.json({ error: 'Submission failed', details: errorText }, { status: response.status });
        }

        return NextResponse.json({ success: true, submittedCount: urlList.length });
    } catch (error) {
        console.error('Error submitting to IndexNow:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function GET() {
    // Expose a GET method so it is easy to trigger via simple chron jobs or browser visits for testing.
    return POST();
}
