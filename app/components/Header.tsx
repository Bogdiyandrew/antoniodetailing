"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const NAV_ITEMS = [
    { label: "Servicii", href: "#servicii" },
    { label: "Portofoliu", href: "#portofoliu" },
    { label: "Prețuri", href: "#preturi" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Detectăm scroll-ul, dar nu mai schimbăm înălțimea
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
                    // Header-ul devine negru DOAR dacă am dat scroll ȘI meniul de mobil e închis
                    isScrolled && !isMobileMenuOpen
                        ? "bg-black/90 backdrop-blur-xl border-b border-white/10"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* LOGO - Fixat pe alb */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative w-16 h-16 md:w-20 md:h-20 transition-all duration-300 group-hover:scale-105">
                            <Image
                                src="/logoremove.png"
                                alt="Antonio Detailing Logo"
                                fill
                                className="object-contain filter brightness-0 invert"
                                priority
                            />
                        </div>
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* ACTION BUTTON & MOBILE TOGGLE */}
                    <div className="flex items-center gap-4">
                        <a
                            href="tel:0737595948"
                            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-cyan-400 transition-all"
                        >
                            <Phone className="w-4 h-4" />
                            <span>0737 595 948</span>
                        </a>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-white hover:text-cyan-400 transition-colors z-50"
                        >
                            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU OVERLAY */}
            <div
                className={`fixed inset-0 z-40 bg-black/98 backdrop-blur-3xl transition-transform duration-500 md:hidden flex flex-col justify-center items-center gap-8 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}

                <a
                    href="tel:0737595948"
                    className="mt-8 px-8 py-4 bg-white text-black rounded-full text-xl font-bold flex items-center gap-3 active:scale-95 transition-transform"
                >
                    <Phone className="w-6 h-6" /> Sună acum
                </a>
            </div>
        </>
    );
}