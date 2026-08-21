// components/StorySection.jsx
"use client";

import Image from "next/image";
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";

export default function StorySection() {
  const milestones = [
    { year: "1985", text: "Founded by Gurdial Singh in Oslo with a vision to bring authentic Indian flavours to Norway." },
    { year: "2005", text: "Expanded to three locations, becoming a beloved name in Norwegian dining." },
    { year: "2023", text: "Relocated to a modern, elegant space – while preserving our rich culinary heritage." },
    { year: "2025", text: "Embracing sustainability, innovation, and community – writing the next chapter." },
  ];

  return (
    <section className="relative py-12 md:py-16 bg-[#faf8f6] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b8860b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#b8860b]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          {/* <span className="text-sm font-light tracking-[0.3em] uppercase text-[#b8860b] block mb-2">
            Our Story
          </span> */}
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#1a1a1a]">
            A Journey of <span className="font-serif font-bold text-[#b8860b]">Flavour</span> &amp; <span className="font-serif font-bold text-[#b8860b]">Tradition</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#b8860b] mx-auto mt-4" />
        </div>

        {/* Main content: two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            {/* Quote block */}
            <div className="relative pl-6 border-l-4 border-[#b8860b]">
              <FaQuoteLeft className="absolute -left-3 -top-2 text-[#b8860b]/20 text-3xl" />
              <p className="text-xl md:text-2xl font-light italic text-[#2a2520] leading-relaxed">
                “Our food is a bridge between cultures – a celebration of India’s rich heritage, crafted with love for the people of Oslo.”
              </p>
              <p className="text-sm font-light text-[#b8860b] mt-2 tracking-widest">
                — Gurdial Singh, Founder
              </p>
            </div>

            <p className="text-[#6b5a4a] font-light leading-relaxed">
              Mother India was born from a simple dream: to share the authentic, soulful flavours of India with the world. For over three decades, we have been a beloved part of Oslo’s culinary landscape, blending time‑honoured recipes with a warm, welcoming spirit.
            </p>
            <p className="text-[#6b5a4a] font-light leading-relaxed">
              Today, we honour our legacy while embracing innovation – from sustainable sourcing to modern dining experiences. Our kitchen is a celebration of spices, tradition, and the joy of gathering around a table.
            </p>

            {/* Vision for the future */}
            <div className="bg-white/60 border border-[#e0d6cc] p-6 rounded-sm shadow-sm">
              <h4 className="text-sm font-medium tracking-widest uppercase text-[#b8860b] mb-2">
                Looking Ahead
              </h4>
              <p className="text-[#6b5a4a] font-light text-sm leading-relaxed">
                We envision a future where Mother India continues to be a beacon of culinary excellence – expanding our reach, fostering community, and inspiring a new generation to discover the magic of Indian cuisine.
              </p>
            </div>
          </div>

          {/* Right: Image + decorative overlay */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden border border-[#d6cdc0] bg-[#f0ebe5] shadow-lg">
              <Image
                src="/booking/image2.jpeg" // replace with your own image
                alt="Mother India restaurant interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative frame overlay */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#b8860b] opacity-20 pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#b8860b] opacity-20 pointer-events-none" />

            {/* Small milestone timeline (overlaid on image) */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm border border-[#e0d6cc] p-4 shadow-sm hidden sm:block">
              <h5 className="text-xs font-medium tracking-widest uppercase text-[#b8860b] mb-2">
                Our Milestones
              </h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {milestones.slice(0, 4).map((m, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="font-medium text-[#b8860b]">{m.year}</span>
                    <span className="text-[#6b5a4a] font-light">{m.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative link */}
        {/* <div className="mt-16 text-center">
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase font-light text-[#b8860b] hover:text-[#9a7209] border-b border-[#b8860b] pb-1 transition-colors"
          >
            Discover more about our journey
            <FaArrowRight className="w-4 h-4" />
          </a>
        </div> */}
      </div>
    </section>
  );
}