"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VoiceReaderProps {
    title: string;
    content: string;
}

const VoiceReader: React.FC<VoiceReaderProps> = ({ title, content }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [gender, setGender] = useState<'male' | 'female'>('female');
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        const loadVoices = () => {
            if (synth) {
                const availableVoices = synth.getVoices();
                setVoices(availableVoices);
            }
        };

        loadVoices();
        if (synth && synth.onvoiceschanged !== undefined) {
            synth.onvoiceschanged = loadVoices;
        }

        return () => {
            if (synth) {
                synth.cancel();
            }
        };
    }, [synth]);

    const handlePlay = () => {
        if (!synth) return;

        if (isPaused) {
            synth.resume();
            setIsPaused(false);
            setIsPlaying(true);
            return;
        }

        // Cancel any ongoing speech
        synth.cancel();

        const fullText = `${title}. ${content}`;
        const utterance = new SpeechSynthesisUtterance(fullText);

        // Find suitable voice based on gender
        const selectedVoice = voices.find(v => {
            const name = v.name.toLowerCase();
            if (gender === 'female') {
                return name.includes('female') || name.includes('samantha') || name.includes('victoria') || name.includes('google us english');
            } else {
                return name.includes('male') || name.includes('daniel') || name.includes('alex') || name.includes('google uk english male');
            }
        }) || voices[0];

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        utterance.onend = () => {
            setIsPlaying(false);
            setIsPaused(false);
        };

        utteranceRef.current = utterance;
        synth.speak(utterance);
        setIsPlaying(true);
    };

    const handlePause = () => {
        if (synth && isPlaying) {
            synth.pause();
            setIsPaused(true);
            setIsPlaying(false);
        }
    };

    const handleStop = () => {
        if (synth) {
            synth.cancel();
            setIsPlaying(false);
            setIsPaused(false);
        }
    };

    return (
        <div className="mb-12">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-4 bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-xl rounded-full px-6 py-3"
            >
                {/* Visualizer (Mini) */}
                <div className="flex items-end gap-0.5 h-3 w-4">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            animate={isPlaying ? { height: [4, 12, 4] } : { height: 4 }}
                            transition={isPlaying ? { duration: 0.8, repeat: Infinity, delay: i * 0.2 } : {}}
                            className="w-1 bg-blue-500 rounded-full"
                        />
                    ))}
                </div>

                <div className="w-[1px] h-4 bg-zinc-800" />

                {/* Voice Toggle */}
                <div className="flex items-center gap-2 bg-black/20 rounded-full p-1 border border-zinc-800/30">
                    <button
                        onClick={() => setGender('male')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${gender === 'male' ? 'bg-blue-600 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >
                        Male
                    </button>
                    <button
                        onClick={() => setGender('female')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${gender === 'female' ? 'bg-blue-600 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >
                        Female
                    </button>
                </div>

                <div className="w-[1px] h-4 bg-zinc-800" />

                {/* Controls */}
                <div className="flex items-center gap-3">
                    {!isPlaying ? (
                        <button
                            onClick={handlePlay}
                            className="bg-zinc-800/80 hover:bg-zinc-700 text-white p-2 rounded-full transition-colors flex items-center justify-center group"
                            title="Listen"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 translate-x-[1px]">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    ) : (
                        <button
                            onClick={handlePause}
                            className="bg-zinc-800/80 hover:bg-zinc-700 text-white p-2 rounded-full transition-colors flex items-center justify-center"
                            title="Pause"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </svg>
                        </button>
                    )}

                    {(isPlaying || isPaused) && (
                        <button
                            onClick={handleStop}
                            className="bg-zinc-800/30 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 p-2 rounded-full transition-all border border-transparent hover:border-red-500/30"
                            title="Stop"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M6 6h12v12H6z" />
                            </svg>
                        </button>
                    )}
                </div>

                <div className="flex flex-col ml-1">
                    <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest leading-none">Listen to Post</span>
                    <span className="text-[9px] text-zinc-500 font-mono mt-1 leading-none">{isPlaying ? 'Playing Narration' : isPaused ? 'Paused' : 'Native AI Voice'}</span>
                </div>
            </motion.div>
        </div>
    );
};

export default VoiceReader;
