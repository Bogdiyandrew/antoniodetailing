import Hero from "./components/Hero";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";

export default function Home() {
  return (
    <main className="relative bg-black w-full min-h-screen">
      {/* HERO FIXED: Stă blocat pe fundal sub restul conținutului */}
      <div className="fixed inset-0 z-0 h-screen w-full">
        <Hero />
      </div>

      {/* CORTINA: Conținutul care urcă și acoperă Hero-ul */}
      {/* mt-[100vh] este obligatoriu aici pentru a lăsa Hero-ul vizibil la început */}
      <div className="relative z-10 bg-black mt-[100vh] shadow-[0_-50px_100px_rgba(0,0,0,1)]">
        <Services />
        <BeforeAfter />
        <Pricing />
        <BookingForm />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}