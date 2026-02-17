import Image from "next/image";

export default function Services() {
    return (
        <section id="servicii" className="relative bg-zinc-950 py-24 px-6 z-10 overflow-hidden">
            {/* Fundal cu Grid Subtil */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                {/* Header Secțiune */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-2 uppercase">
                            Laborator
                        </h2>
                        <p className="text-zinc-400 max-w-md text-lg">
                            Standarde de laborator în fiecare detaliu.
                        </p>
                    </div>
                    <div className="hidden md:block text-right">
                        <span className="text-xs font-mono text-cyan-500 border border-cyan-500/30 px-3 py-1 rounded bg-cyan-500/5">
                            ANTONIO DETAILING
                        </span>
                    </div>
                </div>

                {/* CONTAINER CARUSEL (Mobil) / GRID (Desktop) */}
                <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0 md:auto-rows-[300px]">

                    {/* CARD 1: INTERIOR - Buton eliminat */}
                    <div className="group flex-shrink-0 w-[85vw] md:w-auto h-[450px] md:h-auto md:col-span-2 snap-center relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 hover:border-cyan-500/50 transition-all duration-500">
                        <div className="absolute inset-0">
                            <Image
                                src="/serv1.jpeg"
                                alt="Arhitectură interior"
                                fill
                                className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">Arhitectură interior & AC</h3>
                                <p className="text-zinc-400 text-sm max-w-sm">
                                    Igienizare cu ozon și tratamente premium pentru materiale nobile.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: CERAMIC */}
                    <div className="group flex-shrink-0 w-[85vw] md:w-auto h-[450px] md:h-auto md:row-span-2 snap-center relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 hover:border-purple-500/50 transition-all duration-500">
                        <div className="absolute inset-0">
                            <Image
                                src="/serv2.jpeg"
                                alt="Scut molecular ceramic"
                                fill
                                className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-3xl font-bold text-white mb-2">Scut molecular ceramic</h3>
                            <p className="text-zinc-400 text-sm">
                                Protecție extremă și luciu de oglindă.
                            </p>
                        </div>
                    </div>

                    {/* CARD 3: POLISH */}
                    <div className="group flex-shrink-0 w-[85vw] md:w-auto h-[450px] md:h-auto snap-center relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 hover:border-blue-500/50 transition-all duration-500">
                        <div className="absolute inset-0">
                            <Image
                                src="/serv3.jpeg"
                                alt="Corecție Optică Lac"
                                fill
                                className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-bold text-white mb-1">Corecție optică lac</h3>
                            <p className="text-zinc-400 text-sm">
                                Eliminarea defectelor pentru reflexii perfecte.
                            </p>
                        </div>
                    </div>

                    {/* CARD 4: FARURI */}
                    <div className="group flex-shrink-0 w-[85vw] md:w-auto h-[450px] md:h-auto snap-center relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 hover:border-yellow-500/50 transition-all duration-500">
                        <div className="absolute inset-0">
                            <Image
                                src="/serv4.jpeg"
                                alt="Restaurare Fotometrică"
                                fill
                                className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-bold text-white mb-1">Restaurare fotometrică</h3>
                            <p className="text-zinc-400 text-sm">
                                Claritate maximă prin polimerizare profesională.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}