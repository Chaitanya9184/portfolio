import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const dataFilePath = path.join(process.cwd(), 'data', 'leads.json');

interface Lead {
    id: string;
    createdAt: string;
    firstName: string;
    lastName: string;
    email: string;
    company?: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Ensure directory exists
        const dir = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        // Read existing leads
        let leads: Lead[] = [];
        if (fs.existsSync(dataFilePath)) {
            const fileData = fs.readFileSync(dataFilePath, 'utf8');
            try {
                leads = JSON.parse(fileData);
            } catch {
                leads = [];
            }
        }

        // Add new lead
        const newLead: Lead = {
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            company: data.company,
            message: data.message
        };

        leads.push(newLead);
        fs.writeFileSync(dataFilePath, JSON.stringify(leads, null, 2), 'utf8');

        return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
    } catch (error) {
        console.error('Error saving lead:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET() {
    try {
        let leads: Lead[] = [];
        if (fs.existsSync(dataFilePath)) {
            const fileData = fs.readFileSync(dataFilePath, 'utf8');
            try {
                leads = JSON.parse(fileData);
            } catch {
                leads = [];
            }
        }
        return NextResponse.json({ leads }, { status: 200 });
    } catch {
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
