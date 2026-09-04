"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/gallery1.jpg",
    alt: "Chicken Korma",
    description:
      "Tender chicken cooked in a rich, creamy and aromatic curry with a delicate blend of traditional Indian spices.",
    width: 600,
    height: 800,
  },
  {
    id: 2,
    src: "/gallery/gallery2.jpg",
    alt: "Butter Chicken",
    description:
      "Tender chicken simmered in a rich, creamy tomato-based sauce, finished with butter and aromatic Indian spices.",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    src: "/gallery/gallery3.jpg",
    alt: "Hyderabadi Chicken Biryani",
    description:
      "Fragrant basmati rice layered with tender chicken, aromatic spices and fresh herbs, prepared in the traditional Hyderabadi style.",
    width: 600,
    height: 600,
  },
  {
    id: 4,
    src: "/gallery/gallery4.jpg",
    alt: "Punjabi Samosa Chaat",
    description:
      "Crispy Punjabi samosas topped with tangy chutneys, creamy yogurt and flavorful spices for the perfect chaat experience.",
    width: 800,
    height: 800,
  },
  {
    id: 5,
    src: "/gallery/gallery5.jpg",
    alt: "Paneer Butter Masala",
    description:
      "Soft paneer cooked in a luxurious, creamy tomato and butter gravy infused with fragrant Indian spices.",
    width: 800,
    height: 600,
  },
  {
    id: 6,
    src: "/gallery/gallery6.jpg",
    alt: "Chicken Coriander",
    description:
      "Juicy chicken cooked with fresh coriander, aromatic herbs and carefully selected spices for a vibrant and flavorful dish.",
    width: 600,
    height: 800,
  },
  {
    id: 7,
    src: "/gallery/gallery7.jpg",
    alt: "Pani Puri",
    description:
      "Crispy puris filled with spicy, tangy and refreshing flavored water, creating the perfect burst of Indian street-food flavors.",
    width: 600,
    height: 600,
  },
  {
    id: 8,
    src: "/gallery/gallery8.jpg",
    alt: "Dal Makhni",
    description:
      "Slow-cooked black lentils blended with butter, cream and aromatic spices for a rich, smooth and comforting Punjabi classic.",
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