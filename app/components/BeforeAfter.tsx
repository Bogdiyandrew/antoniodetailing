"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
    {
        id: 1,
        title: "Renault ZOE",
        before: "/before1.jpg",
        after: "/after1.jpg",
        tags: ["Detailing interior complet"]
    },
    {
        id: 2,
        title: "Volkswagen",
        before: "/before2.jpg",
        after: "/after2.jpg",
        tags: ["Full Interior"]
    },
    {
        id: 3,
        title: "Skoda",
        before: "/before3.jpg",
        after: "/after3.jpg",
        tags: ["Curățare Tapițerie"]
    },
    {
        id: 4,
        title: "VW Passat",
        before: "/before4.jpg",
        after: "/after4.jpg",
        tags: ["Recondiționare faruri"]
    }
];

function ComparisonSlider({ project }: { project: typeof PROJECTS[0] }) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    }, []);

    return (
        <div className="flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] snap-center">
            <div
                ref={containerRef}
                className="relative aspect-[4/5] md:aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl group select-none cursor-col-resize touch-none"

                // --- FIX PENTRU BUG-UL DE DESKTOP ---
                onPointerDown={(e) => {
                    setIsDragging(true);
                    // Îi spunem browserului că acest element "prinde" toate mișcările mouse-ului
                    (e.target as HTMLElement).setPointerCapture(e.pointerId);
                    handleMove(e.clientX);
                }}
                onPointerMove={(e) => {
                    if (isDragging) {
                        handleMove(e.clientX);
                    }
                }}
                onPointerUp={() => setIsDragging(false)}
                onPointerCancel={() => setIsDragging(false)}
            // ------------------------------------
            >
                {/* AFTER - Imaginea de fundal */}
                <Image
                    src={project.after}
                    alt="After"
                    fill
                    className="object-cover pointer-events-none"
                    draggable={false}
                    priority
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-[10px] font-bold text-cyan-400 border border-cyan-500/30 z-20 uppercase tracking-widest">
                    AFTER
                </div>

                {/* BEFORE - Reparata cu Clip-Path */}
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                    }}
                >
                    <Image
                        src={project.before}
                        alt="Before"
                        fill
                        className="object-cover"
                        draggable={false}
                        priority
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-[10px] font-bold text-zinc-400 border border-white/10 uppercase tracking-widest">
                        BEFORE
                    </div>
                </div>

                {/* SLIDER HANDLE */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-cyan-500 z-30 shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl transition-transform ${isDragging ? 'scale-110 shadow-cyan-500/50' : 'group-hover:scale-105'}`}>
                        <MoveHorizontal className={`w-5 h-5 transition-colors ${isDragging ? 'text-cyan-500' : 'text-cyan-600'}`} />
                    </div>
                </div>

                {/* INFO OVERLAY */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 z-40 pointer-events-none">
                    <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight italic">{project.title}</h3>
                    <div className="flex gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] bg-cyan-500/10 backdrop-blur-sm px-3 py-1 rounded-full text-cyan-300 border border-cyan-500/20 uppercase font-bold tracking-tighter">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function BeforeAfter() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.7;
            const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="portofoliu" className="relative bg-black py-24 z-20 border-t border-white/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                            VEZI <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500 font-outline-2">DIFERENȚA</span>
                        </h2>
                        <p className="text-zinc-500 uppercase text-[10px] tracking-[0.3em] font-bold">Rezultate care vorbesc de la sine</p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-white/10 bg-zinc-900/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all active:scale-90"
                            aria-label="Proiectul anterior"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-white/10 bg-zinc-900/50 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-black transition-all active:scale-90"
                            aria-label="Proiectul următor"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 scroll-smooth"
                >
                    {PROJECTS.map((project) => (
                        <ComparisonSlider key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
}