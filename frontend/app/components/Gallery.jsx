"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/image1.png",
    alt: "Tandoori Platter",
    description:
      "A sizzling platter of grilled meats, perfectly spiced and served with mint chutney.",
    width: 600,
    height: 800,
  },
  {
    id: 2,
    src: "/gallery/image2.jpg",
    alt: "Butter Chicken",
    description:
      "Creamy, rich tomato curry with tender chicken – a true classic.",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    src: "/gallery/gallery3.jpg",
    alt: "Restaurant Interior",
    description:
      "Warm, inviting ambiance with elegant décor and soft lighting.",
    width: 600,
    height: 600,
  },
  {
    id: 4,
    src: "/gallery/project4.png",
    alt: "Gulab Jamun",
    description:
      "Golden, syrup-soaked milk dumplings – the perfect sweet ending.",
    width: 800,
    height: 800,
  },
  {
    id: 5,
    src: "/gallery/burger.jpg",
    alt: "Dining Atmosphere",
    description:
      "Enjoy a meal in our beautifully designed dining space.",
    width: 800,
    height: 600,
  },
  {
    id: 6,
    src: "/gallery/image6.jpg",
    alt: "Chef at Work",
    description:
      "Our chefs prepare each dish with passion and precision.",
    width: 600,
    height: 800,
  },
  {
    id: 7,
    src: "/gallery/image7.jpg",
    alt: "Lamb Rogan Josh",
    description:
      "Kashmiri-style lamb curry, slow-cooked with aromatic spices.",
    width: 600,
    height: 600,
  },
  {
    id: 8,
    src: "/gallery/project8.jpg",
    alt: "Restaurant Exterior",
    description:
      "Mother India's welcoming entrance – your journey begins here.",
    width: 800,
    height: 600,
  },
];

export default function GallerySection() {
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
        threshold: 0.15,
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

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white">
            A Feast for{" "}
            <span className="font-serif font-bold text-[#b8860b]">
              the Eyes
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-[#b8860b] mx-auto mt-4" />
          <p className="mt-4 text-[#b4ada6] font-light text-lg max-w-4xl mx-auto">
            Take a glimpse inside Mother India Bislett — from vibrant Indian
            flavours and beautifully prepared dishes to our warm and welcoming
            dining atmosphere. Explore the experience that awaits you in the
            heart of Oslo.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative break-inside-avoid mb-4 group overflow-hidden border border-[#e0d6cc] bg-[#f0ebe5] shadow-sm hover:shadow-xl transition-all duration-500 gallery-item"
              style={{
                transitionDelay: `${index * 0.08}s`,
              }}
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              {/* Hover Overlay – shows name & description at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="text-lg md:text-xl font-light tracking-wide">
                    {image.alt}
                  </h3>
                  <p className="mt-1 text-sm md:text-base font-light text-[#d6cdc0] max-w-xs">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .gallery-item {
          opacity: 0;
          transform: scale(0.9) translateY(20px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }
        .visible .gallery-item {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      `}</style>
    </section>
  );
}