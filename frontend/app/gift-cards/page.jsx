// app/gift-cards/page.jsx (or pages/gift-cards.js)
"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaArrowRight, FaGift, FaUtensils, FaClock } from "react-icons/fa";

export default function GiftCardsPage() {
  const giftCards = [
    {
      id: 1,
      title: "Tandoori Night",
      description1:
        "A fiery feast for two – includes our signature tandoori platter, naan, raita, and a bottle of Indian wine.",
      description2:
        "A fiery feast for two – includes our signature tandoori platter, naan, raita, and a bottle of Indian wine.",
      description3:
        "A fiery feast for two – includes our signature tandoori platter, naan, raita, and a bottle of Indian wine.",

      price: "NOK 1,400",
      image: "/giftcards/image1.png",
      link: "/gift-cards/buy/tandoori",
      icon: <FaUtensils className="text-[#b8860b] text-xl" />,
      tag: "Most Popular",
    },
    {
      id: 2,
      title: "Royal Thali",
      description1:
        "A complete meal served on a traditional thali – 5 curries, rice, bread, dessert, and a mango lassi.",
      description2:
        "A complete meal served on a traditional thali – 5 curries, rice, bread, dessert, and a mango lassi.",
      description3:
        "A complete meal served on a traditional thali – 5 curries, rice, bread, dessert, and a mango lassi.",

      price: "NOK 2,200",
      image: "/giftcards/image2.jpeg",
      link: "/gift-cards/buy/thali",
      icon: <FaGift className="text-[#b8860b] text-xl" />,
      tag: "Family Favorite",
    },
    {
      id: 3,
      title: "Spice Journey",
      description1:
        "A 7‑course tasting menu curated by our head chef, with wine pairings and a take‑home spice box.",
      description2:
        "A 7‑course tasting menu curated by our head chef, with wine pairings and a take‑home spice box.",
      description3:
        "A 7‑course tasting menu curated by our head chef, with wine pairings and a take‑home spice box.",

      price: "NOK 3,200",
      image: "/giftcards/image3.jpg",
      link: "/gift-cards/buy/spice",
      icon: <FaClock className="text-[#b8860b] text-xl" />,
      tag: "Exclusive",
    },
    // {
    //   id: 4,
    //   title: "Custom Amount",
    //   description: "Create a gift card for any occasion – choose your own amount and add a personal message.",
    //   price: "From NOK 300",
    //   image: "/giftcards/custom.jpg",
    //   link: "/gift-cards/buy/custom",
    //   icon: <FaGift className="text-[#b8860b] text-xl" />,
    //   tag: "Flexible",
    // },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-70 pb-25 bg-[#faf8f6] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ===== HEADING ===== */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-medium tracking-wide text-[#1a1a1a]">
              Gift Cards
            </h1>
            <div className="w-16 h-0.5 bg-[#b8860b] mx-auto mt-4" />
            <p className="mt-4 text-[#6b5a4a] font-medium text-lg max-w-2xl mx-auto">
              Give the gift of an unforgettable Indian dining experience. Choose
              from our curated culinary journeys or create your own.
            </p>
            {/* Decorative spice/diya motif */}
            {/* <div className="flex justify-center gap-2 mt-4 text-[#b8860b] text-2xl">
              <span>✦</span>
              <span>🌶️</span>
              <span>✦</span>
              <span>🪔</span>
              <span>✦</span>
            </div> */}
          </div>

          {/* ===== GIFT CARD CARDS ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {giftCards.map((card) => (
              <div
                key={card.id}
                className="group  border-2 border-[#d6cdc0] hover:border-[#b8860b] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden"
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

                <div className="p-5 flex flex-col flex-1  relative z-0">
                  <div className="flex items-center gap-2 mb-4">
                    {card.icon}
                    <h3 className="text-xl font-medium tracking-wide text-[#1a1a1a]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-md text-[#6b5a4a]  leading-relaxed flex-1">
                    {card.description1}
                  </p>
                   <p className="text-md text-[#6b5a4a]  leading-relaxed flex-1">
                    {card.description2}
                  </p>
                   <p className="text-md text-[#6b5a4a]  leading-relaxed flex-1">
                    {card.description3}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#e0d6cc] flex items-center justify-between">
                    <span className="text-xl font-medium text-[#b8860b]">
                      {card.price}
                    </span>
                    <Link
                      href={``}
                      className="inline-flex items-center gap-2 border-t border-b px-6 py-2 text-md tracking-widest uppercase font-medium text-[#b8860b] transition-colors"
                    >
                      <Image
                        src="/booking/btn-arrow.svg"
                        alt="arrow"
                        width={50}
                        height={30}
                      />
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== HOW IT WORKS (optional extra) ===== */}
          <div className="mt-20 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-medium tracking-wide text-[#1a1a1a] mb-8">
              How It Works
                <div className="w-16 h-0.5 bg-[#b8860b] mx-auto mt-2" />

            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[#6b5a4a] font-light">
              <div className="p-4 border border-2 border-[#e0d6cc] bg-white">
                <span className="text-3xl block mb-2">🛒</span>
                <p className="text-md  font-medium">
                  Choose your gift card and purchase online.
                </p>
              </div>
              <div className="p-4 border border-2 border-[#e0d6cc] bg-white">
                <span className="text-3xl block mb-2">📧</span>
                <p className="text-md  font-medium">
                  Receive a digital voucher via email instantly.
                </p>
              </div>
              <div className="p-4 border border-2 border-[#e0d6cc] bg-white">
                <span className="text-3xl block mb-2">🍛</span>
                <p className="text-md  font-medium">
                  Redeem at any Mother India location – good for 1 year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
