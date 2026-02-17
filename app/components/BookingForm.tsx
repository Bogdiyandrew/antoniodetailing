"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ro } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Check, Car, User, ArrowRight, ArrowLeft, Send, Phone, Calendar as CalendarIcon, Clock, Loader2 } from "lucide-react";

// Definim pachetele
const SERVICES = [
    { id: "interior", name: "Interior Clean", price: "350 RON" },
    { id: "full", name: "Full Pachet (Promo)", price: "450 RON" },
    { id: "polish", name: "Polish & Protecție", price: "800 RON" },
    { id: "faruri", name: "Polimerizare Faruri", price: "150 RON" },
];

const TIME_SLOTS = ["09:00", "12:00", "15:00"];

export default function BookingForm() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // State pentru date
    const [selectedDate, setSelectedDate] = useState<Date>();
    const [formData, setFormData] = useState({
        service: "",
        time: "",
        carType: "Sedan",
        name: "",
        phone: ""
    });

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log("Date trimise:", {
            ...formData,
            date: selectedDate ? format(selectedDate, "dd.MM.yyyy") : "Nesetată"
        });

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <section id="programare" className="relative py-24 px-6 bg-zinc-950 z-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-zinc-900 border border-green-500/30 p-12 rounded-3xl shadow-[0_0_50px_rgba(34,197,94,0.2)] animate-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-10 h-10" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Programare reușită!</h2>
                        <p className="text-zinc-400 text-lg mb-8">
                            Mulțumim, <span className="text-white font-bold">{formData.name}</span>! <br />
                            Antonio a primit detaliile și te va contacta în scurt timp pentru confirmare.
                        </p>
                        <button
                            onClick={() => {
                                setStep(1);
                                setIsSuccess(false);
                                setFormData({ service: "", time: "", carType: "Sedan", name: "", phone: "" });
                                setSelectedDate(undefined);
                            }}
                            className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full font-bold transition-all cursor-pointer"
                        >
                            Fă o altă programare
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="programare" className="relative py-24 px-6 bg-zinc-950 z-20">

            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                        PROGRAMARE <span className="text-cyan-500">RAPIDĂ</span>
                    </h2>
                    <p className="text-zinc-400">Completează detaliile și Antonio va primi notificarea instant.</p>
                </div>

                {/* Progress Bar */}
                <div className="flex justify-center mb-10">
                    <div className="flex gap-2">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className={`h-1.5 w-16 rounded-full transition-all duration-500 ${step >= i ? "bg-cyan-500 shadow-[0_0_10px_#06b6d4]" : "bg-zinc-800"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Main Card */}
                <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl min-h-[500px] flex flex-col">

                    <div className="p-6 md:p-10 flex-1">

                        {/* PASUL 1: SERVICII */}
                        {step === 1 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-300">
                                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-sm font-mono">01</span>
                                    Ce facem pentru mașina ta?
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {SERVICES.map((srv) => (
                                        <button
                                            key={srv.id}
                                            onClick={() => setFormData({ ...formData, service: srv.name })}
                                            className={`group p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-center items-center text-center gap-2 ${formData.service === srv.name
                                                ? "bg-cyan-500 text-black border-cyan-500 shadow-[0_0_25px_rgba(6,182,212,0.4)] scale-[1.02]"
                                                : "bg-black/40 border-white/10 text-zinc-300 hover:border-white/30 hover:bg-white/5"
                                                }`}
                                        >
                                            <span className="block font-bold text-lg">{srv.name}</span>
                                            <span className={`font-mono text-xl ${formData.service === srv.name ? "text-black font-black" : "text-cyan-400 font-bold"}`}>{srv.price}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* PASUL 2: CALENDAR & DETALII */}
                        {step === 2 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-300 grid lg:grid-cols-2 gap-12">

                                {/* Coloana Stanga: Tip Masina + Ora */}
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <Car className="text-cyan-500" /> Tip Vehicul
                                        </h3>
                                        <div className="grid grid-cols-3 gap-3">
                                            {["Sedan", "SUV", "Coupe"].map((type) => (
                                                <button
                                                    key={type}
                                                    onClick={() => setFormData({ ...formData, carType: type })}
                                                    className={`py-4 rounded-xl border text-sm font-bold transition-all flex flex-col items-center gap-2 ${formData.carType === type
                                                        ? "bg-white text-black border-white shadow-lg"
                                                        : "bg-black/40 border-white/10 text-zinc-400 hover:text-white hover:bg-white/5"
                                                        }`}
                                                >
                                                    <Car className="w-5 h-5" />
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <Clock className="text-cyan-500" /> Ora Preferată
                                        </h3>
                                        <div className="grid grid-cols-3 gap-3">
                                            {TIME_SLOTS.map((time) => (
                                                <button
                                                    key={time}
                                                    onClick={() => setFormData({ ...formData, time: time })}
                                                    className={`py-3 rounded-xl border text-sm font-bold transition-all ${formData.time === time
                                                        ? "bg-cyan-500/20 text-cyan-400 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                                                        : "bg-black/40 border-white/10 text-zinc-400 hover:text-white hover:bg-white/5"
                                                        }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Coloana Dreapta: Calendar Custom */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <CalendarIcon className="text-cyan-500" /> Alege Ziua
                                    </h3>

                                    <div className="bg-black/40 border border-white/10 rounded-2xl p-4 flex justify-center">
                                        <style>{`
                      .rdp { --rdp-cell-size: 40px; --rdp-accent-color: #06b6d4; --rdp-background-color: #06b6d4; margin: 0; }
                      .rdp-day { color: #e4e4e7; }
                      .rdp-day_outside { opacity: 0.2; }
                      .rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]) { background-color: var(--rdp-accent-color); color: black; font-weight: bold; }
                      .rdp-day:hover:not([disabled]):not(.rdp-day_selected) { background-color: rgba(255,255,255,0.1); }
                      .rdp-caption_label { color: white; font-weight: bold; font-size: 1.1rem; }
                      .rdp-nav_button { color: #06b6d4; }
                      .rdp-head_cell { color: #71717a; font-size: 0.8rem; text-transform: uppercase; font-weight: bold; }
                      .rdp-day_disabled { opacity: 0.2; text-decoration: line-through; }
                    `}</style>
                                        <DayPicker
                                            mode="single"
                                            selected={selectedDate}
                                            onSelect={setSelectedDate}
                                            locale={ro}
                                            disabled={{ before: new Date() }}
                                            showOutsideDays
                                            fixedWeeks
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* PASUL 3: CONTACT & CONFIRMARE */}
                        {step === 3 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-300">
                                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                                    Ultimul pas! Confirmă datele.
                                </h3>

                                <div className="max-w-md mx-auto space-y-6">
                                    <div className="bg-gradient-to-br from-zinc-800 to-black p-6 rounded-2xl border border-white/10">
                                        <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Rezumat Programare</h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-zinc-400">Pachet:</span>
                                                <span className="text-white font-bold">{formData.service || "Neselectat"}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-zinc-400">Vehicul:</span>
                                                <span className="text-white font-bold">{formData.carType}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-zinc-400">Data & Ora:</span>
                                                <span className="text-cyan-400 font-bold">
                                                    {selectedDate ? format(selectedDate, "dd MMM") : "-"} / {formData.time || "-"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-cyan-500 transition-colors" />
                                            <input
                                                type="text"
                                                placeholder="Nume"
                                                className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-cyan-500 focus:outline-none transition-all placeholder:text-zinc-600"
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-cyan-500 transition-colors" />
                                            <input
                                                type="tel"
                                                placeholder="Număr telefon"
                                                className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-cyan-500 focus:outline-none transition-all placeholder:text-zinc-600"
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Footer Card: Butoane Navigare */}
                    <div className="p-6 md:p-8 bg-black/40 border-t border-white/5 flex justify-between items-center">
                        {step > 1 ? (
                            <button
                                onClick={handleBack}
                                disabled={isSubmitting}
                                className="flex items-center gap-2 px-6 py-3 rounded-full text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
                            >
                                <ArrowLeft className="w-4 h-4" /> Înapoi
                            </button>
                        ) : <div />}

                        {step < 3 ? (
                            <button
                                onClick={handleNext}
                                disabled={step === 1 && !formData.service}
                                className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-cyan-400 hover:scale-105 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer"
                            >
                                Continuă <ArrowRight className="w-4 h-4" />
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                disabled={!formData.name || !formData.phone || isSubmitting}
                                className="flex items-center gap-2 px-8 py-4 bg-cyan-500 text-black rounded-full font-bold hover:bg-cyan-400 hover:scale-105 disabled:opacity-50 disabled:scale-100 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] cursor-pointer"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" /> Se trimite...
                                    </>
                                ) : (
                                    <>
                                        Trimite
                                    </>
                                )}
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}