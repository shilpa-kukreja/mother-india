// components/JoinSection.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaUtensils, FaGlassCheers } from "react-icons/fa";

export default function JoinSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#faf8f6] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b8860b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#b8860b]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Decorative tag */}
            <div className="inline-flex items-center gap-2 bg-[#b8860b]/10 text-[#b8860b] px-4 py-1.5 rounded-full text-sm font-light tracking-widest uppercase border border-[#b8860b]/20">
              <FaUtensils className="w-4 h-4" />
              <span>Mother India Oslo</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#1a1a1a] leading-tight">
              Join Our <span className="font-serif font-bold text-[#b8860b]">Family Table</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#b8860b]" />

            {/* Description */}
            <p className="text-[#6b5a4a] font-light text-lg leading-relaxed">
              Become a part of our story. We invite you to experience the rich heritage and authentic flavours that have made Mother India a beloved name for over three decades.
            </p>
            <p className="text-[#6b5a4a] font-light text-lg leading-relaxed">
              From the first bite to the last, you'll taste the love and dedication that goes into every dish – a journey of spices, tradition, and warm hospitality.
            </p>

            {/* Events highlight */}
            <div className="bg-white/70 border border-[#e0d6cc] p-6 rounded-sm shadow-sm">
              <div className="flex items-start gap-3">
                <FaGlassCheers className="text-[#b8860b] text-2xl mt-1" />
                <div>
                  <h4 className="text-sm font-medium tracking-widest uppercase text-[#1a1a1a]">
                    Perfect for Events
                  </h4>
                  <p className="text-sm text-[#6b5a4a] font-light leading-relaxed">
                    With capacity for up to <span className="text-[#b8860b] font-medium">150 guests</span>, our venues are ideal for corporate parties, private celebrations, and intimate gatherings. We adapt to your needs for a seamless, memorable event.
                  </p>
                </div>
              </div>
            </div>

            {/* Daily service */}
            <div className="flex items-center gap-4 text-sm text-[#6b5a4a] font-light">
              <span className="text-[#b8860b] text-2xl">✦</span>
              <span>We serve food and drinks with the same love and quality, every day of the week.</span>
              <span className="text-[#b8860b] text-2xl">✦</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/booking"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-medium tracking-widest uppercase text-white bg-[#b8860b] hover:bg-[#9a7209] transition-all duration-300 shadow-lg shadow-[#b8860b]/20 hover:shadow-[#b8860b]/40 border border-[#b8860b]/30"
              >
                Book a Table
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/restaurants"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-medium tracking-widest uppercase text-[#b8860b] bg-transparent hover:bg-[#b8860b]/10 transition-all duration-300 border-2 border-[#b8860b]"
              >
                Visit Us
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Image + decorative frame */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden border border-[#d6cdc0] bg-[#f0ebe5] shadow-lg">
              <Image
                src="/join/restaurant-family.jpg" // replace with your own image
                alt="Mother India family dining experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative overlay – subtle gold corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#b8860b] opacity-30 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#b8860b] opacity-30 pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-[#e0d6cc] shadow-lg p-4 max-w-xs hidden sm:block">
              <p className="text-sm font-light text-[#6b5a4a] leading-relaxed">
                <span className="text-[#b8860b] font-medium">✦</span> "A taste of India, a feeling of home."
              </p>
            </div>

            {/* Decorative corner motifs */}
            <div className="absolute -top-3 -right-3 flex gap-1 text-[#b8860b]/20 text-4xl">
              <span>◆</span>
              <span>✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}