"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/gallery1.jpg",
    alt: "Kylling Korma",
    description:
      "Mør kylling tilberedt i en rik, kremet og aromatisk karri med en delikat blanding av tradisjonelle indiske krydder.",
    width: 600,
    height: 800,
  },
  {
    id: 2,
    src: "/gallery/gallery2.jpg",
    alt: "Smørkylling",
    description:
      "Mør kylling småkokt i en rik, kremet tomatsaus, avsluttet med smør og aromatiske indiske krydder.",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    src: "/gallery/gallery3.jpg",
    alt: "Hyderabadi kyllingbiryani",
    description:
      "Duftende basmatiris lagvis med mør kylling, aromatiske krydder og friske urter, tilberedt i tradisjonell Hyderabadi-stil.",
    width: 600,
    height: 600,
  },
  {
    id: 4,
    src: "/gallery/gallery4.jpg",
    alt: "Punjabi samosa chaat",
    description:
      "Sprø punjabiske samosaer toppet med syrlige chutneyer, kremet yoghurt og smakfulle krydder for den perfekte chaat-opplevelsen.",
    width: 800,
    height: 800,
  },
  {
    id: 5,
    src: "/gallery/gallery5.jpg",
    alt: "Paneer butter masala",
    description:
      "Myk paneer tilberedt i en luksuriøs, kremet tomat- og smørsaus infundert med duftende indiske krydder.",
    width: 800,
    height: 600,
  },
  {
    id: 6,
    src: "/gallery/gallery6.jpg",
    alt: "Kylling koriander",
    description:
      "Saftig kylling tilberedt med frisk koriander, aromatiske urter og nøye utvalgte krydder for en livlig og smaksrik rett.",
    width: 600,
    height: 800,
  },
  {
    id: 7,
    src: "/gallery/gallery7.jpg",
    alt: "Pani Puri",
    description:
      "Sprø puris fylt med krydret, syrlig og forfriskende smaksvann, som skaper den perfekte eksplosjonen av indiske gatekjøkkensmaker.",
    width: 600,
    height: 600,
  },
  {
    id: 8,
    src: "/gallery/gallery8.jpg",
    alt: "Dal Makhni",
    description:
      "Langsomt tilberedte svarte linser blandet med smør, fløte og aromatiske krydder for en rik, glatt og trøstende punjabisk klassiker.",
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
            En fest for{" "}
            <span className="font-serif font-bold text-[#b8860b]">
              øynene
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-[#b8860b] mx-auto mt-4" />
          <p className="mt-4 text-[#b4ada6] font-light text-lg max-w-4xl mx-auto">
            Ta en titt inn i Mother India Bislett — fra levende indiske smaker
            og vakkert tilberedte retter til vår varme og imøtekommende
            spiseatmosfære. Opplev opplevelsen som venter deg i hjertet av Oslo.
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