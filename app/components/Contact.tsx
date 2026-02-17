"use client";

import { MapPin, Phone, Instagram, Facebook, Clock, Navigation } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative bg-black py-24 px-6 z-30 border-t border-white/10">

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Partea Stângă: Info & Program */}
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                        GATA DE <span className="text-cyan-500">ACȚIUNE?</span>
                    </h2>
                    <p className="text-zinc-400 text-lg mb-12">
                        Nu lăsa mașina să aștepte. Programează o vizită la garajul nostru din Corbeanca.
                    </p>

                    <div className="space-y-8">
                        {/* Card Telefon */}
                        <a
                            href="tel:0737595948"
                            className="flex items-center gap-6 p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-cyan-500 hover:bg-cyan-900/10 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                                <Phone className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Sună-ne Acum</p>
                                <p className="text-3xl md:text-4xl font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    0737 595 948
                                </p>
                            </div>
                        </a>

                        {/* Locație */}
                        <div className="flex items-start gap-6 p-6">
                            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Locație Garaj</h4>
                                <p className="text-zinc-400 mb-4">
                                    Strada Sos. Unirii, Sat Tamași 355,<br />
                                    Corbeanca 077065
                                </p>
                                <a
                                    href="https://waze.com/ul?q=Antonio%20Detailing"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 font-bold text-sm uppercase tracking-wide border-b border-cyan-500/30 pb-1"
                                >
                                    <Navigation className="w-4 h-4" /> Deschide în Waze / Maps
                                </a>
                            </div>
                        </div>

                        {/* Program - ACTUALIZAT */}
                        <div className="flex items-start gap-6 p-6">
                            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white shrink-0">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div className="w-full">
                                <h4 className="text-xl font-bold text-white mb-4">Program Lucru</h4>
                                <ul className="text-zinc-400 space-y-3 w-full max-w-sm">
                                    <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                        <span>Luni:</span>
                                        <span className="text-white font-mono font-medium">08:30 – 20:40</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                        <span>Marți - Sâmbătă:</span>
                                        <span className="text-white font-mono font-medium">08:30 – 20:30</span>
                                    </li>
                                    <li className="flex justify-between items-center pt-1">
                                        <span>Duminică:</span>
                                        <span className="text-red-500 font-bold uppercase text-sm">Închis</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partea Dreaptă: Harta */}
                <div className="flex flex-col gap-8 h-full">
                    <div className="w-full h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17740.34273040396!2d26.009516277848164!3d44.585967654490425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b21b0020b5fdf1%3A0x717d2e561a50c716!2sAntonio%20Detailing!5e0!3m2!1sro!2sro!4v1771326855398!5m2!1sro!2sro"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <a
                            href="https://instagram.com/antonio.detailing"
                            target="_blank"
                            className="flex items-center justify-center gap-3 py-4 bg-zinc-900 rounded-2xl border border-white/5 hover:bg-gradient-to-r hover:from-purple-900/50 hover:to-pink-900/50 hover:border-pink-500/30 transition-all group"
                        >
                            <Instagram className="w-6 h-6 text-zinc-400 group-hover:text-pink-500" />
                            <span className="font-bold text-zinc-300">Instagram</span>
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61558554176907"
                            target="_blank"
                            className="flex items-center justify-center gap-3 py-4 bg-zinc-900 rounded-2xl border border-white/5 hover:bg-blue-900/20 hover:border-blue-500/30 transition-all group"
                        >
                            <Facebook className="w-6 h-6 text-zinc-400 group-hover:text-blue-500" />
                            <span className="font-bold text-zinc-300">Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}