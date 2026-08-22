// components/GallerySection.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/image1.png",
    alt: "Tandoori Platter",
    description: "A sizzling platter of grilled meats, perfectly spiced and served with mint chutney.",
    width: 600,
    height: 800,
  },
  {
    id: 2,
    src: "/gallery/image2.jpg",
    alt: "Butter Chicken",
    description: "Creamy, rich tomato curry with tender chicken – a true classic.",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    src: "/gallery/gallery3.jpg",
    alt: "Restaurant Interior",
    description: "Warm, inviting ambiance with elegant décor and soft lighting.",
    width: 600,
    height: 600,
  },
  {
    id: 4,
    src: "/gallery/project4.png",
    alt: "Gulab Jamun",
    description: "Golden, syrup‑soaked milk dumplings – the perfect sweet ending.",
    width: 800,
    height: 800,
  },
  {
    id: 5,
    src: "/gallery/burger.jpg",
    alt: "Dining Atmosphere",
    description: "Enjoy a meal in our beautifully designed dining space.",
    width: 800,
    height: 600,
  },
  {
    id: 6,
    src: "/gallery/image6.jpg",
    alt: "Chef at Work",
    description: "Our chefs prepare each dish with passion and precision.",
    width: 600,
    height: 800,
  },
  {
    id: 7,
    src: "/gallery/image7.jpg",
    alt: "Lamb Rogan Josh",
    description: "Kashmiri‑style lamb curry, slow‑cooked with aromatic spices.",
    width: 600,
    height: 600,
  },
  {
    id: 8,
    src: "/gallery/project8.jpg",
    alt: "Restaurant Exterior",
    description: "Mother India's welcoming entrance – your journey begins here.",
    width: 800,
    height: 600,
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
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

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white">
            A Feast for the <span className="font-serif font-bold text-[#b8860b]">Eyes</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#b8860b] mx-auto mt-4" />
          <p className="mt-4 text-[#b4ada6] font-light text-lg max-w-2xl mx-auto">
            Explore the vibrant colours, warm ambiance, and exquisite dishes that make Mother India a culinary destination.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 [&>div]:mb-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative break-inside-avoid cursor-pointer group overflow-hidden border border-[#e0d6cc] bg-[#f0ebe5] shadow-sm hover:shadow-xl transition-all duration-500 gallery-item"
              style={{ transitionDelay: `${index * 0.08}s` }}
              onClick={() => openLightbox(image)}
            >
              <div className="relative w-full" style={{ maxHeight: '400px' }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto max-h-[400px] object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 bg-[#1a1715]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm tracking-widest uppercase font-light border border-white/60 px-4 py-2">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 z-10 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 text-white hover:text-[#b8860b] transition-all duration-200 flex items-center justify-center border border-white/30 hover:border-[#b8860b]"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 pt-12 pl-50 text-white">
              <h3 className="text-2xl md:text-3xl font-light tracking-wide">
                {selectedImage.alt}
              </h3>
              {selectedImage.description && (
                <p className="mt-1 text-sm md:text-base font-light text-[#d6cdc0] max-w-2xl">
                  {selectedImage.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Animation styles */}
      <style jsx>{`
        .gallery-item {
          opacity: 0;
          transform: scale(0.9) translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .visible .gallery-item {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        /* Staggered delays are applied inline via style prop */
      `}</style>
    </section>
  );
}