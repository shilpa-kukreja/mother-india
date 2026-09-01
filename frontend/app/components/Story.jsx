// components/StorySection.jsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function StorySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const milestones = [
    { year: "1985", text: "Founded by Gurdial Singh in Oslo with a vision to bring authentic Indian flavours to Norway." },
    { year: "2005", text: "Expanded to three locations, becoming a beloved name in Norwegian dining." },
    { year: "2023", text: "Relocated to a modern, elegant space – while preserving our rich culinary heritage." },
    { year: "2025", text: "Embracing sustainability, innovation, and community – writing the next chapter." },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16 bg-[#faf8f6] overflow-visible mt-55"
    >

 {/* Decorative GIFs – left & right */}
      <div className="absolute -top-[150px] left-0 z-[60] pointer-events-none">
        <img
          src="/restaurants/source.gif"
          alt=""
          className="w-32 h-50 md:w-90 md:h-60 object-contain"
        />
      </div>
      <div className="absolute -top-[150px] right-0 z-[60] pointer-events-none">
        <img
          src="/restaurants/source.gif"
          alt=""
          className="w-32 h-50 md:w-90 md:h-60 object-contain"
        />
      </div>


      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b8860b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#b8860b]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#1a1a1a]">
            A Journey of <span className="font-serif font-bold text-[#b8860b]">Flavour</span> &amp; <span className="font-serif font-bold text-[#b8860b]">Tradition</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#b8860b] mx-auto mt-4" />
        </div>

        {/* Main content: two columns with slide animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text – slides in from left */}
          <div className="space-y-6 slide-left">
            {/* Quote block */}
            <div className="relative pl-6 border-l-4 border-[#b8860b]">
              <p className="text-xl md:text-2xl font-light italic text-[#2a2520] leading-relaxed">
                “Our food is a bridge between cultures – a celebration of India’s rich heritage, crafted with love for the people of Oslo.”
              </p>
              <p className="text-sm font-light text-[#b8860b] mt-2 tracking-widest">
                — Gurdial Singh, Founder
              </p>
            </div>

            <p className="text-[#6b5a4a] text-lg font-light leading-relaxed">
              Mother India was born from a simple dream: to share the authentic, soulful flavours of India with the world. For over three decades, we have been a beloved part of Oslo’s culinary landscape, blending time‑honoured recipes with a warm, welcoming spirit.
            </p>
            {/* <p className="text-[#6b5a4a] font-light leading-relaxed">
              Today, we honour our legacy while embracing innovation – from sustainable sourcing to modern dining experiences. Our kitchen is a celebration of spices, tradition, and the joy of gathering around a table.
            </p> */}

            {/* Vision for the future */}
            <div className="bg-white/60 border border-[#e0d6cc] p-6 rounded-sm shadow-sm">
              <h4 className="text-sm font-medium tracking-widest uppercase text-[#b8860b] mb-2">
                Looking Ahead
              </h4>
              <p className="text-[#6b5a4a] font-light text-md leading-relaxed">
                We envision a future where Mother India continues to be a beacon of culinary excellence – expanding our reach, fostering community, and inspiring a new generation to discover the magic of Indian cuisine.
              </p>
            </div>
          </div>

          {/* Right: Image – slides in from right */}
          <div className="relative slide-right">
            <div className="relative aspect-[7/6] overflow-hidden border border-[#d6cdc0] bg-[#f0ebe5] shadow-lg">
              <Image
                src="/booking/image2.jpeg"
                alt="Mother India restaurant interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .slide-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .slide-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .visible .slide-left {
          opacity: 1;
          transform: translateX(0);
        }
        .visible .slide-right {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </section>
  );
}