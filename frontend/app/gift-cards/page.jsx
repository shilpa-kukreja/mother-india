// app/gift-cards/page.jsx (or pages/gift-cards.js)
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaGift, FaUtensils, FaClock } from "react-icons/fa";

export default function GiftCardsPage() {
  // Refs for each section
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const howRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    });

    const sections = [headingRef, cardsRef, howRef];
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const giftCards = [
    {
      id: 1,
      title: "Tandoori-kveld",
      description1:
        "En krydret fest for to – inkluderer vår signatur tandoori-platter, naan, raita og en flaske indisk vin.",
      description2:
        "En krydret fest for to – inkluderer vår signatur tandoori-platter, naan, raita og en flaske indisk vin.",
      description3:
        "En krydret fest for to – inkluderer vår signatur tandoori-platter, naan, raita og en flaske indisk vin.",
      price: "NOK 1 400",
      image: "/giftcards/gift1.jpg",
      link: "/gift-cards/buy/tandoori",
      icon: <FaUtensils className="text-[#b8860b] text-xl" />,
      tag: "Mest populær",
    },
    {
      id: 2,
      title: "Kongelig Thali",
      description1:
        "Et komplett måltid servert på en tradisjonell thali – 5 karriretter, ris, brød, dessert og en mango lassi.",
      description2:
        "Et komplett måltid servert på en tradisjonell thali – 5 karriretter, ris, brød, dessert og en mango lassi.",
      description3:
        "Et komplett måltid servert på en tradisjonell thali – 5 karriretter, ris, brød, dessert og en mango lassi.",
      price: "NOK 2 200",
      image: "/giftcards/gift2.jpg",
      link: "/gift-cards/buy/thali",
      icon: <FaGift className="text-[#b8860b] text-xl" />,
      tag: "Familiefavoritt",
    },
    {
      id: 3,
      title: "Kryddereise",
      description1:
        "En 7-retters smaksmeny kuratert av vår kjøkkensjef, med vinpakke og en krydderboks å ta med hjem.",
      description2:
        "En 7-retters smaksmeny kuratert av vår kjøkkensjef, med vinpakke og en krydderboks å ta med hjem.",
      description3:
        "En 7-retters smaksmeny kuratert av vår kjøkkensjef, med vinpakke og en krydderboks å ta med hjem.",
      price: "NOK 3 200",
      image: "/giftcards/gift3.jpg",
      link: "/gift-cards/buy/spice",
      icon: <FaClock className="text-[#b8860b] text-xl" />,
      tag: "Eksklusiv",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-50 md:pt-70 pb-25 bg-[#faf8f6] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ===== HEADING ===== */}
          <div ref={headingRef} className="text-center mb-12 section-animate">
            <h1 className="text-4xl md:text-5xl font-medium tracking-wide text-[#1a1a1a]">
              Gavekort
            </h1>
            <div className="w-16 h-0.5 bg-[#b8860b] mx-auto mt-4" />
            <p className="mt-4 text-[#6b5a4a] font-medium text-lg max-w-4xl mx-auto">
              Gi gaven av en uforglemmelig indisk matopplevelse hos Mother India.
            </p>
          </div>

          {/* ===== GIFT CARD CARDS ===== */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {giftCards.map((card, index) => (
              <div
                key={card.id}
                className="group border-2 border-[#d6cdc0] hover:border-[#b8860b] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden card-item"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#b8860b]/10 rotate-45 translate-x-6 -translate-y-6" />
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-[#b8860b]/10 rotate-45 -translate-x-6 translate-y-6" />

                {/* Tag */}
                {card.tag && (
                  <span className="absolute top-2 right-2 z-10 bg-[#b8860b] text-white text-[10px] tracking-widest uppercase px-3 py-1">
                    {card.tag}
                  </span>
                )}

                <div className="relative w-full h-60 overflow-hidden bg-[#f0ebe5] border-b border-[#d6cdc0]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1 relative z-0">
                  <div className="flex items-center gap-2 mb-4">
                    {card.icon}
                    <h3 className="text-xl font-medium tracking-wide text-[#1a1a1a]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-md text-[#6b5a4a] leading-relaxed flex-1">
                    {card.description1}
                  </p>
                  <p className="text-md text-[#6b5a4a] leading-relaxed flex-1">
                    {card.description2}
                  </p>
                  <p className="text-md text-[#6b5a4a] leading-relaxed flex-1">
                    {card.description3}
                  </p>
                  {/* <div className="mt-4 pt-4 border-t border-[#e0d6cc] flex items-center justify-between">
                    <span className="text-xl font-medium text-[#b8860b]">
                      {card.price}
                    </span>
                    <Link
                      href={card.link}
                      className="inline-flex items-center gap-2 border-t border-b px-6 py-2 text-md tracking-widest uppercase font-medium text-[#b8860b] transition-colors"
                    >
                      <Image
                        src="/booking/btn-arrow.svg"
                        alt="arrow"
                        width={50}
                        height={30}
                      />
                      Kjøp nå
                    </Link>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* ===== HOW IT WORKS ===== */}
          {/* <div ref={howRef} className="mt-20 max-w-4xl mx-auto text-center section-animate">
            <h2 className="text-3xl font-medium tracking-wide text-[#1a1a1a] mb-8">
              Slik fungerer det
              <div className="w-16 h-0.5 bg-[#b8860b] mx-auto mt-2" />
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[#6b5a4a] font-light">
              <div className="p-4 border border-2 border-[#e0d6cc] bg-white how-item" style={{ transitionDelay: '0.1s' }}>
                <span className="text-3xl block mb-2">🛒</span>
                <p className="text-md font-medium">
                  Velg ditt gavekort og kjøp online.
                </p>
              </div>
              <div className="p-4 border border-2 border-[#e0d6cc] bg-white how-item" style={{ transitionDelay: '0.2s' }}>
                <span className="text-3xl block mb-2">📧</span>
                <p className="text-md font-medium">
                  Motta en digital kupong på e-post umiddelbart.
                </p>
              </div>
              <div className="p-4 border border-2 border-[#e0d6cc] bg-white how-item" style={{ transitionDelay: '0.3s' }}>
                <span className="text-3xl block mb-2">🍛</span>
                <p className="text-md font-medium">
                  Innløs på alle Mother India-restauranter – gyldig i 1 år.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </main>

      <Footer />

      {/* ===== Animation Styles ===== */}
      <style jsx>{`
        .section-animate {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }
        .section-animate.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .card-item {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }
        .visible .card-item {
          opacity: 1;
          transform: translateY(0);
        }

        .how-item {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }
        .visible .how-item {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}