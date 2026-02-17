"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
    return (
        <section className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* FUNDAL: Imaginea și Gradient-urile */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/ph2.jpeg"
                    alt="Premium Auto Detailing"
                    fill
                    className="object-cover opacity-40 animate-ken-burns"
                    priority
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,1)_100%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />
            </div>

            {/* CONȚINUT CENTRAL */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
                <div className="mb-8 inline-flex items-center px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl animate-float">
                    <span className="text-[10px] md:text-xs font-mono text-zinc-400 tracking-[0.4em] uppercase">
                        Antonio Detailing • EST 2020
                    </span>
                </div>

                <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none mb-8 flex flex-col items-center select-none uppercase">
                    <span className="text-white drop-shadow-2xl">Premium</span>
                    <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_2px,transparent_2px,transparent_4px),linear-gradient(to_bottom,#ffffff_0%,#71717a_50%,#18181b_100%)]">
                            Detailing
                        </span>
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-50"></span>
                    </span>
                </h1>

                <p className="text-sm md:text-lg text-zinc-400 max-w-xl font-light leading-relaxed mb-12">
                    Tehnologie de ultimă generație pentru protecția și restaurarea vopselei.
                    <span className="text-zinc-200 font-medium block mt-2 uppercase tracking-widest text-[10px] md:text-xs">
                        Nu spălăm mașini, le transformăm
                    </span>
                </p>

                <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
                    <a href="#programare" className="w-full sm:w-auto px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-zinc-200 transition-all active:scale-95 text-center">
                        Programează-te
                    </a>
                    <a href="#portofoliu" className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white/5 transition-all text-center">
                        Vezi Portofoliu
                    </a>
                </div>
            </div>

            {/* SOCIAL & INDICATOR */}
            <div className="absolute bottom-10 left-6 md:left-10 z-20 flex flex-col gap-6">
                <a href="https://instagram.com/antonio.detailing" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </a>
                <a href="https://wa.me/40737595948" target="_blank" className="text-zinc-500 hover:text-green-500 transition-colors">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                </a>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-line"></div>
                </div>
            </div>
        </section>
    );
}