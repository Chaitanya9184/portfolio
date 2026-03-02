import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const data = await request.json();

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
        console.error('Error saving lead:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
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
