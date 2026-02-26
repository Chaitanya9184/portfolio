import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: 'Lead Management | Admin',
};

export const dynamic = 'force-dynamic';

interface Lead {
    id: string;
    createdAt: string;
    firstName: string;
    lastName: string;
    email: string;
    company?: string;
    message: string;
}

export default async function LeadsAdminPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/admin/login");
    }

    const dataFilePath = path.join(process.cwd(), 'data', 'leads.json');
    let leads: Lead[] = [];

    if (fs.existsSync(dataFilePath)) {
        const fileData = fs.readFileSync(dataFilePath, 'utf8');
        try {
            leads = JSON.parse(fileData);
            leads.reverse(); // Newest first
        } catch {
            leads = [];
        }
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-24 font-sans selection:bg-blue-500/30">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tighter text-white mb-2">Lead Matrix</h1>
                        <p className="text-zinc-400">Manage incoming contact form submissions.</p>
                    </div>
                    <Link href="/" className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-sm font-semibold rounded-xl transition-colors">
                        Back to Site
                    </Link>
                </div>

                {leads.length === 0 ? (
                    <div className="p-16 text-center bg-zinc-900/50 rounded-3xl border border-zinc-800">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-500">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                                <path d="M18 14h-8" />
                                <path d="M15 18h-5" />
                                <path d="M10 6h8v4h-8V6Z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">No Leads Captured Yet</h3>
                        <p className="text-zinc-500 text-sm max-w-sm mx-auto">When users submit the contact form, they will appear right here.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {leads.map((lead: Lead) => (
                            <div key={lead.id} className="p-6 bg-zinc-900/40 backdrop-blur-sm rounded-3xl border border-zinc-800/80 flex flex-col gap-5 hover:border-blue-500/40 hover:bg-zinc-800/40 transition-all group">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{lead.firstName} {lead.lastName}</h3>
                                        <p className="text-xs text-zinc-500 flex items-center gap-1.5 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
                                            {new Date(lead.createdAt).toLocaleString(undefined, {
                                                month: 'short',
                                                day: 'numeric',
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3 bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800 text-zinc-400">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                        </div>
                                        <a href={`mailto:${lead.email}`} className="text-sm text-blue-400 hover:text-blue-300 font-medium truncate">{lead.email}</a>
                                    </div>
                                    {lead.company && (
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800 text-zinc-400">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M3 21h18" /><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3" /><path d="M19 21v-4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4" /></svg>
                                            </div>
                                            <p className="text-sm text-zinc-300 font-medium truncate">{lead.company}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4 pt-2">
                                    <div>
                                        <span className="block text-[10px] text-zinc-500 uppercase font-bold mb-1 tracking-wider">Message</span>
                                        <p className="text-sm text-zinc-300 font-medium leading-relaxed">{lead.message}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
