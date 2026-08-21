// components/RestaurantsSection.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaClock, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

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

  return (
    <section className="relative py-20 md:py-28 bg-[#1a1715] overflow-hidden mt-35">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#b8860b] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#b8860b] rounded-full blur-3xl" />
      </div>

      {/* Subtle gold lines top and bottom */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b8860b]/30 to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#b8860b]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          {/* <span className="text-sm font-light tracking-[0.3em] uppercase text-[#b8860b] block mb-2">
            Our Locations
          </span> */}
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white">
            Welcome to <span className="font-serif font-bold text-[#b8860b]">Mother India</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#b8860b] mx-auto mt-4" />
          <p className="mt-4 text-[#d6cdc0] font-light text-lg max-w-2xl mx-auto">
            Three unique locations, one authentic experience. Find your nearest Mother India and savour the flavours.
          </p>
        </div>

        {/* Restaurant cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <div
              key={restaurant.slug}
              className={`group relative bg-[#2a2520] border ${
                restaurant.featured ? "border-[#b8860b]/60" : "border-[#4a3f37]"
              } overflow-hidden transition-all duration-500 hover:border-[#b8860b] hover:shadow-2xl hover:shadow-[#b8860b]/10`}
            >
              {/* Featured badge */}
              {/* {restaurant.featured && (
                <span className="absolute top-3 right-3 z-10 bg-[#b8860b] text-white text-[10px] tracking-widest uppercase px-3 py-1 shadow-lg">
                  Featured
                </span>
              )} */}

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

                {/* Address */}
                <div className="flex items-start gap-2 text-sm text-[#b5a69a]">
                  <FaMapMarkerAlt className="text-[#b8860b] text-base mt-0.5 flex-shrink-0" />
                  <span>{restaurant.address}</span>
                </div>

                {/* Hours */}
                {/* <div className="flex items-start gap-2 text-sm text-[#b5a69a]">
                  <FaClock className="text-[#b8860b] text-base mt-0.5 flex-shrink-0" />
                  <span>{restaurant.hours}</span>
                </div> */}

                {/* Button */}
                {/* <div className="pt-3">
                  <Link
                    href={`/booking/${restaurant.slug}`}
                    className="inline-flex items-center gap-2 text-sm tracking-widest uppercase font-medium text-[#b8860b] hover:text-white border-b border-[#b8860b] hover:border-white transition-colors pb-0.5"
                  >
                    Book a Table
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom link to all locations */}
        {/* <div className="mt-16 text-center">
          <Link
            href="/restaurants"
            className="inline-flex items-center gap-3 text-sm tracking-widest uppercase font-light text-[#b8860b] hover:text-[#9a7209] border border-[#b8860b] px-6 py-3 hover:bg-[#b8860b]/10 transition-colors"
          >
            View All Locations
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}