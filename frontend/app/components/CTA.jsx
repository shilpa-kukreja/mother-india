// components/CTASection.jsx
import Link from "next/link";
import { FaArrowRight, FaUtensils } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f6] py-16 md:py-16 md:pb-25">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-[#b8860b] rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-[#b8860b] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#b8860b] rounded-full blur-3xl opacity-10" />
      </div>

      {/* Decorative pattern (Indian-inspired) */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b8860b]/40 to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#b8860b]/40 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Small tagline */}
        <div className="inline-flex items-center gap-2 bg-[#b8860b]/10 text-[#b8860b] px-4 py-1.5 rounded-full text-sm font-light tracking-widest uppercase border border-[#b8860b]/20 mb-6">
          <FaUtensils className="w-4 h-4" />
          <span>Mother India Oslo</span>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-black leading-tight">
          <span className="font-serif font-bold text-[#b8860b]">Authentic</span> Indian Dining
          <br />
          <span className="text-lg md:text-xl font-light text-[#817c74] mt-4 block">
            Experience the warmth of India – in the heart of Oslo.
          </span>
        </h2>

        {/* Description */}
        {/* <p className="mt-4 text-[#b5a69a] font-light text-base max-w-lg mx-auto">
          Reserve your table for an unforgettable culinary journey, or order takeaway to enjoy our flavours at home.
        </p> */}

        {/* Two buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
          <Link
            href="/booking"
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-base font-medium tracking-widest uppercase text-black bg-[#b8860b] hover:bg-[#9a7209] transition-all duration-300 overflow-hidden shadow-lg shadow-[#b8860b]/20 hover:shadow-[#b8860b]/40 border border-[#b8860b]/30"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span>Book a Table</span>
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/takeaway"
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-base font-medium tracking-widest uppercase text-[#b8860b] bg-transparent hover:bg-[#b8860b]/10 transition-all duration-300 border-2 border-[#b8860b] shadow-lg shadow-[#b8860b]/10 hover:shadow-[#b8860b]/30"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#b8860b]/5 via-transparent to-[#b8860b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span>Takeaway</span>
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Small decorative element */}
        {/* <div className="mt-8 flex justify-center gap-3 text-[#b8860b]/60 text-2xl">
          <span>✦</span>
          <span>◆</span>
          <span>✦</span>
          <span>◆</span>
          <span>✦</span>
        </div> */}
      </div>
    </section>
  );
}