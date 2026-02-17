export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10 text-center relative z-40">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

                <div className="mb-6 flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
                    <span className="font-bold text-xl tracking-tighter text-white">ANTONIO DETAILING</span>
                </div>

                <p className="text-zinc-600 text-sm mb-8">
                    Professional Auto Detailing • Corbeanca, Ilfov
                </p>

                <div className="text-zinc-800 text-xs uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} Antonio Detailing. All rights reserved.
                </div>

            </div>
        </footer>
    );
}