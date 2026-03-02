import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let data: any;
    try {
        data = await request.json();

        const newLead = await prisma.lead.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                company: data.company || null,
                message: data.message,
                formName: 'Contact Page',
                sourceUrl: 'https://www.chaitanyakore.in/contact'
            }
        });

        return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
    } catch (error: unknown) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const err = error as any;
        console.error('Error saving lead. Data:', data);
        console.error('Prisma Error Details:', {
            message: err.message,
            code: err.code,
            meta: err.meta,
            stack: err.stack
        });
        return NextResponse.json({
            success: false,
            error: 'Internal Server Error',
            details: err.message || 'Unknown error occurred'
        }, { status: 500 });
    }
}

export async function GET() {
    try {
        const leads = await prisma.lead.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json({ leads }, { status: 200 });
    } catch (error) {
        console.error('Error fetching leads:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
