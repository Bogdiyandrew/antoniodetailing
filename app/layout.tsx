import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antonio Detailing | Premium Auto Care",
  description: "Servicii profesionale de detailing în Corbeanca.",
  icons: {
    // Dacă ai mutat logo-ul în /app și l-ai numit icon.png, poți șterge liniile de mai jos
    // Browserul îl va găsi automat.
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-black 
          text-white 
          overflow-x-hidden 
          w-full 
          relative
        `}
      >
        <Header />

        {/* Main-ul acesta funcționează ca o barieră de siguranță. 
          Orice element care "fuge" în lateral va fi tăiat aici. 
        */}
        <main className="w-full overflow-x-hidden relative">
          {children}
        </main>
      </body>
    </html>
  );
}