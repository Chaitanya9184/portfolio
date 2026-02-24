"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";

const FRAME_COUNT = 75; // Total frames
const FRAME_PREFIX = "frame_";
const FRAME_SUFFIX = "_delay-0.066s.png";

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // Use an array of nulls to track frame loading status
    const [images, setImages] = useState<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
    const [isPriorityLoaded, setIsPriorityLoaded] = useState(false);
    const [isInitialFrameDrawn, setIsInitialFrameDrawn] = useState(false);

    // Scroll mapping
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Priority + Background Preloading
    useEffect(() => {
        let isAborted = false;
        const priorityFrames = 15; // Load first 15 frames immediately
        let priorityLoadedCount = 0;

        const loadFrame = (i: number, isPriority: boolean) => {
            const img = new Image();
            const formattedNum = i.toString().padStart(2, "0");

            img.onload = () => {
                if (isAborted) return;
                setImages(prev => {
                    const next = [...prev];
                    next[i] = img;
                    return next;
                });

                if (isPriority) {
                    priorityLoadedCount++;
                    if (priorityLoadedCount >= priorityFrames) {
                        setIsPriorityLoaded(true);
                    }
                }
            };

            img.onerror = () => {
                if (isPriority) {
                    priorityLoadedCount++;
                    if (priorityLoadedCount >= priorityFrames) {
                        setIsPriorityLoaded(true);
                    }
                }
            };

            img.src = `/sequence/${FRAME_PREFIX}${formattedNum}${FRAME_SUFFIX}`;
        };

        // 1. Kick off Priority Loading
        for (let i = 0; i < priorityFrames; i++) {
            loadFrame(i, true);
        }

        // 2. Kick off Background Loading after a short delay to prioritize priority frames
        const bgTimer = setTimeout(() => {
            for (let i = priorityFrames; i < FRAME_COUNT; i++) {
                if (isAborted) break;
                loadFrame(i, false);
            }
        }, 500);

        return () => {
            isAborted = true;
            clearTimeout(bgTimer);
        };
    }, []);

    // Helper to find the closest available frame if target is not yet loaded
    const getAvailableFrame = useCallback((targetIndex: number) => {
        const index = Math.floor(targetIndex);
        if (images[index]) return images[index];

        // Search for nearest loaded neighbor
        for (let i = 1; i < FRAME_COUNT; i++) {
            const prev = index - i;
            const next = index + i;
            if (prev >= 0 && images[prev]) return images[prev];
            if (next < FRAME_COUNT && images[next]) return images[next];
        }
        return null;
    }, [images]);

    // Draw frame to canvas based on scroll position
    const drawFrame = useCallback((index: number) => {
        if (!canvasRef.current) return false;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return false;

        const img = getAvailableFrame(index);
        if (!img) return false;

        // Ensure canvas size is synchronized
        if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        // Always fill background black to blend
        ctx.fillStyle = "#121212";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Object-fit: cover logic
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
            drawHeight = canvas.width / imgRatio;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        return true;
    }, [getAvailableFrame]);

    // Initial draw once priority images are loaded
    useEffect(() => {
        if (isPriorityLoaded && images[0]) {
            // Give the browser a moment to ensure canvas is properly in DOM
            const timer = setTimeout(() => {
                const drawn = drawFrame(0);
                if (drawn) {
                    setIsInitialFrameDrawn(true);
                }
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isPriorityLoaded, images, drawFrame]);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current && isInitialFrameDrawn) {
                drawFrame(frameIndex.get());
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isInitialFrameDrawn, drawFrame, frameIndex]);

    // Redraw on scroll
    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (isInitialFrameDrawn) {
            requestAnimationFrame(() => drawFrame(latest));
        }
    });

    return (
        <div ref={containerRef} className="relative w-full" style={{ height: "400vh" }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                {/* 
                  Only show loader if initial frame hasn't been drawn yet.
                  This ensures a seamless transition.
                */}
                {!isInitialFrameDrawn && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#121212] text-zinc-500 font-medium transition-opacity duration-500">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 border-2 border-zinc-800 border-t-emerald-500 rounded-full animate-spin" />
                            <span className="text-xs tracking-widest uppercase opacity-60">Initializing Experience...</span>
                        </div>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                />

                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}

// Inline Overlay component mapped to the same scroll progress
function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    // Title fades in earlier, out earlier
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.3], [50, -50]);

    // Section 2
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.3, 0.6], [50, -50]);

    // Section 3
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.6, 0.9], [50, -50]);

    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* Global dark scrim behind text to ensure it never gets lost in bright frames */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/30 via-transparent to-[#121212]/30" />

            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6)_0%,transparent_60%)]"
            >
                <div className="text-center text-white drop-shadow-2xl">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">Chaitanya Kore.</h1>
                    <p className="text-xl md:text-2xl text-emerald-400 font-medium tracking-wide uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">SEO Strategist / Team Lead</p>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-start px-12 md:px-32 bg-[radial-gradient(ellipse_at_left,rgba(0,0,0,0.7)_0%,transparent_70%)]"
            >
                <div className="text-white max-w-2xl drop-shadow-2xl">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                        Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-none">organic growth</span> for global brands.
                    </h2>
                </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-end px-12 md:px-32 bg-[radial-gradient(ellipse_at_right,rgba(0,0,0,0.7)_0%,transparent_70%)]"
            >
                <div className="text-right text-white max-w-2xl drop-shadow-2xl">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                        Focused on <br />
                        <span className="text-emerald-400 italic">AI-driven</span> search optimization.
                    </h2>
                </div>
            </motion.div>
        </div>
    );
}
