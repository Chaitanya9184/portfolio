import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 - Page Not Found | Chaitanya Kore',
    description: 'The requested search matrix or digital pathway could not be located.',
};

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10 text-center">
                <div className="inline-flex px-3 py-1 mb-8 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest">
                    HTTP 404 Error
                </div>

                <h1 className="text-8xl md:text-[120px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 tracking-tighter mb-4">
                    404
                </h1>

                <h2 className="text-2xl md:text-4xl text-white font-bold tracking-tight mb-6">
                    Page Not Found
                </h2>

                <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                    The requested URL was not found on this server. It might have been moved, deleted, or you may have followed a broken link.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-colors w-full sm:w-auto mt-4 sm:mt-0">
                        Return Home
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                    <Link href="/industries" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors w-full sm:w-auto mt-4 sm:mt-0">
                        View Industries
                    </Link>
                </div>
            </div>
        </main>
    );
}
