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
      },
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
    {
      year: "1985",
      text: "Founded by Gurdial Singh in Oslo with a vision to bring authentic Indian flavours to Norway.",
    },
    {
      year: "2005",
      text: "Expanded to three locations, becoming a beloved name in Norwegian dining.",
    },
    {
      year: "2023",
      text: "Relocated to a modern, elegant space – while preserving our rich culinary heritage.",
    },
    {
      year: "2025",
      text: "Embracing sustainability, innovation, and community – writing the next chapter.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-18 md:py-16 bg-[#faf8f6] overflow-visible mt-35 md:mt-55"
    >
      {/* ===== DESKTOP DECORATIVE GIFS (hidden on mobile) ===== */}
      <div className="absolute -top-[150px] -left-[50px] z-[60] pointer-events-none hidden md:block">
        <img
          src="/restaurants/source.gif"
          alt=""
          className="w-32 h-50 md:w-90 md:h-60 object-contain"
        />
      </div>
      <div className="absolute -top-[150px] -right-[50px] z-[60] pointer-events-none hidden md:block">
        <img
          src="/restaurants/source.gif"
          alt=""
          className="w-32 h-50 md:w-90 md:h-60 object-contain"
        />
      </div>

      {/* ===== MOBILE DECORATIVE GIFS (hidden on desktop) ===== */}
      <div className="absolute -top-[40px] -left-[20px] z-[60] pointer-events-none block md:hidden">
        <img
          src="/restaurants/source.gif"
          alt=""
          className="w-33 h-32 object-contain "
        />
      </div>
      <div className="absolute -top-[40px] -right-[20px] z-[60] pointer-events-none block md:hidden">
        <img
          src="/restaurants/source.gif"
          alt=""
          className="w-33 h-32 object-contain "
        />
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b8860b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#b8860b]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#1a1a1a]">
            A Taste of{" "}
            <span className="font-serif font-bold text-[#b8860b]">India</span>{" "}
            in the{" "}
            <span className="font-serif font-bold text-[#b8860b]">
              Heart of Oslo
            </span>
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
                “We want every guest to experience the warmth, flavours and
                traditions of India — right here in the heart of Oslo.”
              </p>
              <p className="text-sm font-light text-[#b8860b] mt-2 tracking-widest">
                — Mother India Bislett
              </p>
            </div>

            <p className="text-[#6b5a4a] text-lg font-light leading-relaxed">
              At Mother India Bislett, we bring the rich and diverse flavours of
              Indian cuisine to one of Oslo’s most vibrant neighbourhoods. Our
              menu is inspired by traditional Indian recipes, carefully prepared
              with aromatic spices, fresh ingredients and a passion for
              authentic taste.{" "}
            </p>

            {/* Vision for the future */}
            <div className="bg-white/60 border border-[#e0d6cc] p-6 rounded-sm shadow-sm">
              <h4 className="text-sm font-medium tracking-widest uppercase text-[#b8860b] mb-2">
                Looking Ahead
              </h4>
              <p className="text-[#6b5a4a] font-light text-md leading-relaxed">
                Our goal is simple: to create memorable dining experiences
                through great food, warm hospitality and the timeless traditions
                of Indian cuisine. At Bislett, we look forward to welcoming both
                familiar faces and new guests to our table — and sharing the
                flavours of India with Oslo for years to come.
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
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }
        .slide-right {
          opacity: 0;
          transform: translateX(50px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
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
