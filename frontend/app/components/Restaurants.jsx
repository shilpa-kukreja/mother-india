"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function RestaurantsSection() {
  // Only Bislett
  const restaurant = {
    name: "Bislett",
    slug: "bislett",
    image: "/restaurants/image1.png",
    address: "Bislettgata 12, 0154 Oslo",
    hours: "Mon–Tue 15:00–23:00 · Wed–Sat 14:00–23:00 · Sun 14:00–22:00",
    description:
      "A cozy, intimate atmosphere in the heart of the city – perfect for a romantic dinner or a quiet evening.",
    featured: true,
  };

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

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 bg-[#1a1715] overflow-visible mt-50"
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

      {/* Decorative blur circles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#b8860b] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#b8860b] rounded-full blur-3xl" />
      </div>

      {/* Gold lines */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b8860b]/30 to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#b8860b]/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white">
            Welcome to{" "}
            <span className="font-serif font-bold text-[#b8860b]">
              Mother India
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-[#b8860b] mx-auto mt-4" />
          <p className="mt-4 text-[#d6cdc0] font-light text-lg max-w-2xl mx-auto">
            Discover our flagship location in the heart of Oslo.
          </p>
        </div>

        {/* Single Restaurant Card – prominently displayed */}
        <div className="flex justify-center">
          <div className="group relative bg-[#2a2520] border-2 border-[#b8860b]/60 overflow-hidden transition-all duration-500 hover:border-[#b8860b] hover:shadow-2xl hover:shadow-[#b8860b]/20 max-w-2xl w-full card-item">
            {/* Image */}
            <div className="relative w-full h-80 md:h-96 overflow-hidden bg-[#1a1715]">
              <Image
                src={restaurant.image}
                alt={`${restaurant.name} restaurant`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1715]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="p-8 text-[#d6cdc0] space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-medium tracking-wide text-white">
                  {restaurant.name}
                </h3>
                <span className="px-4 py-1 text-xs tracking-widest uppercase border border-[#b8860b] text-[#b8860b] bg-[#b8860b]/10">
                  Featured
                </span>
              </div>
              <p className="text-base font-light text-[#b5a69a] leading-relaxed">
                {restaurant.description}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-[#b5a69a]">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#b8860b] text-base flex-shrink-0" />
                  <span>{restaurant.address}</span>
                </div>
                <div className="flex items-center gap-2 sm:ml-4">
                  <FaClock className="text-[#b8860b] text-base flex-shrink-0" />
                  <span>{restaurant.hours}</span>
                </div>
              </div>
              {/* Optional CTA */}
              <div className="pt-4">
                <a
                  href="/booking/bislett"
                  className="inline-block px-6 py-2 text-sm tracking-widest uppercase font-medium text-white bg-[#b8860b] hover:bg-[#9a7209] transition-colors"
                >
                  Book a Table
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .card-item {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }
        .visible .card-item {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
