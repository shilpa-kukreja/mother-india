"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function RestaurantsSection() {
  const restaurants = [
    {
      name: "Bislett",
      slug: "bislett",
      image: "/restaurants/image1.png",
      address: "Bislettgata 12, 0154 Oslo",
      hours: "Mon–Tue 15:00–23:00 · Wed–Sat 14:00–23:00 · Sun 14:00–22:00",
      description: "A cozy, intimate atmosphere in the heart of the city – perfect for a romantic dinner or a quiet evening.",
      featured: true,
    },
    {
      name: "Sandvika",
      slug: "sandvika",
      image: "/restaurants/image2.jpeg",
      address: "Strandpromenaden 5, 1337 Sandvika",
      hours: "Mon–Tue 15:00–23:00 · Wed–Sat 14:00–23:00 · Sun 14:00–22:00",
      description: "Modern dining with a breathtaking view of the fjord – ideal for celebrations and gatherings.",
      featured: false,
    },
    {
      name: "Økern",
      slug: "okern",
      image: "/restaurants/image3.jpg",
      address: "Økernveien 50, 0573 Oslo",
      hours: "Mon–Tue 15:00–23:00 · Wed–Sat 14:00–23:00 · Sun 14:00–22:00",
      description: "Spacious and elegant, a hidden gem near Økern centre – perfect for larger groups and events.",
      featured: false,
    },
  ];

  // Ref for the section container – to observe when it becomes visible
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When section is visible, add the "visible" class to trigger animations
            entry.target.classList.add("visible");
            // Optionally, you can unobserve after first trigger
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // trigger when 20% of the section is visible
        rootMargin: "0px 0px -50px 0px", // slightly offset for better timing
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

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 bg-[#1a1715] overflow-visible mt-50"
    >


 {/* Left & Right decorative GIFs */}
 {/* left */}
  <div className="absolute -top-[150px] left-0 z-[60] pointer-events-none">
    <img
      src="/restaurants/giphy.gif"
      alt=""
      className="w-32 h-50 md:w-60 md:h-60 object-contain"
    />
  </div>


{/* right */}
  <div className="absolute -top-[150px] right-0 z-[60] pointer-events-none">
    <img
      src="/restaurants/giphy.gif"
      alt=""
      className="w-32 h-50 md:w-60 md:h-60 object-contain"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white">
            Welcome to <span className="font-serif font-bold text-[#b8860b]">Mother India</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#b8860b] mx-auto mt-4" />
          <p className="mt-4 text-[#d6cdc0] font-light text-lg max-w-2xl mx-auto">
            Three unique locations, one authentic experience. Find your nearest Mother India and savour the flavours.
          </p>
        </div>

        {/* Restaurant cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <div
              key={restaurant.slug}
              className={`group relative bg-[#2a2520] border ${
                restaurant.featured ? "border-[#b8860b]/60" : "border-[#4a3f37]"
              } overflow-hidden transition-all duration-500 hover:border-[#b8860b] hover:shadow-2xl hover:shadow-[#b8860b]/10 card-item`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden bg-[#1a1715]">
                <Image
                  src={restaurant.image}
                  alt={`${restaurant.name} restaurant`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1715]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 text-[#d6cdc0] space-y-3">
                <h3 className="text-2xl font-medium tracking-wide text-white">
                  {restaurant.name}
                </h3>
                <p className="text-sm font-light text-[#b5a69a] leading-relaxed">
                  {restaurant.description}
                </p>
                <div className="flex items-start gap-2 text-sm text-[#b5a69a]">
                  <FaMapMarkerAlt className="text-[#b8860b] text-base mt-0.5 flex-shrink-0" />
                  <span>{restaurant.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .card-item {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .visible .card-item {
          opacity: 1;
          transform: translateY(0);
        }
        .visible .card-item:nth-child(1) { transition-delay: 0.1s; }
        .visible .card-item:nth-child(2) { transition-delay: 0.2s; }
        .visible .card-item:nth-child(3) { transition-delay: 0.3s; }
      `}</style>
    </section>
  );
}