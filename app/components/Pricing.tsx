"use client";

import { Check, Zap } from "lucide-react";

const PRICES = [
    {
        name: "Interior Deep Clean",
        price: "350",
        currency: "RON",
        description: "Reîmprospătare totală a habitaclului. Ideal pentru familii.",
        features: [
            "Aspirare detaliată (inclusiv portbagaj)",
            "Curățare tapițerie (injecție-extracție)",
            "Igienizare AC cu Ozon",
            "Dressing plastice mat/lucios",
            "Curățare geamuri interior"
        ],
        highlight: false
    },
    {
        name: "Full Pachet (Promo)",
        price: "450",
        currency: "RON",
        description: "Cea mai populară alegere. Interior + Exterior complet.",
        features: [
            "Tot ce include pachetul Interior",
            "Spălare exterioară detaliată",
            "Decontaminare vopsea",
            "Aplicare ceară solidă (protecție 3 luni)",
            "Dressing anvelope & chedere"
        ],
        highlight: true,
        tag: "OFERTĂ LIMITATĂ"
    },
    {
        name: "Polish & Protecție",
        price: "800",
        currency: "RON",
        description: "Pentru mașini care au nevoie de corecție lac.",
        features: [
            "Spălare & Decontaminare",
            "Polish Profesional (1-2 pași)",
            "Eliminare zgârieturi fine",
            "Polimerizare Faruri (Gratuit)",
            "Protecție Ceramică Lite"
        ],
        highlight: false
    }
];

export default function Pricing() {
    return (
        <section
            id="preturi"
            className="relative py-24 px-6 z-20 border-t border-white/10 overflow-hidden"
            style={{
                // Pattern CSS pentru efectul de Carbon Fiber
                backgroundColor: '#111',
                backgroundImage: `
                    linear-gradient(27deg, #151515 5px, transparent 5px),
                    linear-gradient(207deg, #151515 5px, transparent 5px),
                    linear-gradient(36deg, #222 5px, transparent 5px),
                    linear-gradient(216deg, #222 5px, transparent 5px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 0, 10px 10px, 0 10px'
            }}
        >
            {/* Suprapunere gradient pentru a întuneca marginile (Vignette) */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950/80 pointer-events-none" />

            {/* Background Glow - ajustat pentru a fi mai vizibil pe carbon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                        INVESTIȚIE <span className="text-cyan-500">TRANSPARENTĂ</span>
                    </h2>
                    <p className="text-zinc-300 max-w-xl mx-auto text-lg drop-shadow-md">
                        Fără costuri ascunse. Prețurile sunt estimative și pot varia ușor în funcție de dimensiunea mașinii (SUV/Berlina).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PRICES.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 backdrop-blur-sm ${plan.highlight
                                ? "bg-zinc-900/90 border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.2)] scale-105 z-10"
                                : "bg-zinc-900/60 border-white/5 hover:border-white/20 hover:bg-zinc-900/80"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg flex items-center gap-2">
                                    <Zap className="w-3 h-3 fill-white" /> {plan.tag}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-zinc-400 text-sm h-10">{plan.description}</p>
                            </div>

                            <div className="mb-8 flex items-baseline gap-1">
                                <span className="text-sm text-zinc-500 font-medium">de la</span>
                                <span className={`text-5xl font-black ${plan.highlight ? "text-white" : "text-zinc-300"}`}>
                                    {plan.price}
                                </span>
                                <span className="text-xl font-bold text-cyan-500">{plan.currency}</span>
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                                        <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-cyan-400" : "text-zinc-600"}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Link actualizat catre ancora #programare */}
                            <a
                                href="#programare"
                                className={`w-full py-4 rounded-xl font-bold text-center transition-all shadow-lg ${plan.highlight
                                    ? "bg-white text-black hover:bg-cyan-50 hover:scale-105 active:scale-95"
                                    : "bg-white/10 text-white hover:bg-white/20 border border-white/5 hover:scale-105 active:scale-95"
                                    }`}
                            >
                                Programează-te
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}