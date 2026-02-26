"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res?.error) {
                setError("Invalid email or password");
            } else {
                router.push("/admin/leads");
                router.refresh();
            }
        } catch (err) {
            setError("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-8 shadow-xl text-white">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block mb-6">
                        <div className="w-12 h-12 mx-auto rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sm font-bold text-white hover:border-emerald-500/50 hover:text-emerald-400 transition-colors">
                            CK
                        </div>
                    </Link>
                    <h1 className="text-2xl font-bold tracking-tight mb-2">Admin Dashboard</h1>
                    <p className="text-zinc-400 text-sm">Sign in to manage your leads.</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-300">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-sans"
                            placeholder="admin@chaitanyakore.in"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-zinc-300">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-sans"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide uppercase py-4 rounded-xl transition-colors duration-300 shadow-lg shadow-emerald-900/20 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Authenticating...' : 'Secure Sign In'}
                    </button>
                </form>
            </div>
        </main>
    );
}
