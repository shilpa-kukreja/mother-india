// app/meny/page.jsx (or pages/meny.js)
"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ===== MENU DATA =====
const menuData = [
  {
    id: 1,
    name: "Tandoori Platter",
    description: "Assorted grilled meats with mint chutney",
    price: "295,-",
    category: "Chef's Table",
    image: "/menu/menu1.jpg",
  },
  {
    id: 2,
    name: "Butter Chicken",
    description: "Classic creamy tomato curry",
    price: "245,-",
    category: "Chef's Table",
    image: "/images/menu/butter-chicken.jpg",
  },
  {
    id: 3,
    name: "5-Course Tasting",
    description: "Seasonal selection of signature dishes",
    price: "595,-",
    category: "Smaks meny",
    image: "/images/menu/tasting.jpg",
  },
  {
    id: 4,
    name: "Lunch Thali",
    description: "Variety of small portions with rice and bread",
    price: "185,-",
    category: "Lunsj meny",
    image: "/images/menu/thali.jpg",
  },
  {
    id: 5,
    name: "Samosa",
    description: "Crispy pastry with spiced potato filling",
    price: "95,-",
    category: "Forrett",
    image: "/images/menu/samosa.jpg",
  },
];

const categories = ["All", ...new Set(menuData.map((item) => item.category))];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  return (
    <>
      <Navbar />

      <main className="pt-50 md:pt-70 pb-29 bg-[#faf8f6] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-medium tracking-wide text-[#1a1a1a]">
              MOTHER INDIA MENU
            </h1>
            <div className="w-30 h-0.5 bg-[#b8860b] mx-auto mt-4" />
          </div>

          {/* PREMIUM CATEGORY FILTERS */}
          <div className="relative mb-12">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#b8860b]/30 to-transparent" />
            <div className="relative flex flex-wrap justify-center gap-3 md:gap-4 bg-black px-4 py-8 shadow-sm border border-2 border-[#cca074] max-w-3xl mx-auto">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      relative px-5 py-3 text-sm font-medium tracking-wide uppercase
                      transition-all duration-300 ease-in-out border-2
                      ${
                        isActive
                          ? "border-[#b8860b] bg-[#b8860b]/5 text-[#b8860b] shadow-sm"
                          : "border-transparent text-[#cfc8c1] hover:border-[#d6cdc0] hover:bg-white/50 hover:text-[#1a1a1a]"
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* MENU GRID with side-specific animations */}
          <div
            key={activeCategory} // forces re‑render on filter change
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {filteredItems.map((item, index) => {
              const isLeft = index % 2 === 0; // even = left, odd = right
              return (
                <div
                  key={item.id}
                  className={`group bg-white border border-[#d6cdc0] shadow-sm hover:shadow-lg transition-all duration-300 menu-item ${isLeft ? 'slide-left' : 'slide-right'}`}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div
                    className="relative w-full aspect-[7/10] overflow-hidden bg-[#f0ebe5] cursor-pointer border-b border-[#d6cdc0]"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>
                  <div className="p-6 bg-white">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-medium tracking-wide text-[#b8860b]">
                        {item.name}
                      </h3>
                      <span className="text-base font-medium text-[#b8860b] whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[#6b5a4a] font-medium leading-relaxed">
                      {item.description}
                    </p>
                    <span className="inline-block mt-4 text-[10px] tracking-[0.2em] uppercase text-[#695d50] border border-[#c78a49] px-3 py-0.5">
                      {item.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#8a7a6a] font-light">No items in this category yet.</p>
            </div>
          )}

          {/* PAGINATION */}
          <div className="mt-16 flex justify-center space-x-2 text-sm text-[#8a7a6a]">
            <span className="px-4 py-1.5 border border-[#ddd2c6] bg-white">1</span>
            <span className="px-4 py-1.5 border border-transparent hover:border-[#b8860b] transition-colors cursor-pointer">2</span>
            <span className="px-4 py-1.5 border border-transparent hover:border-[#b8860b] transition-colors cursor-pointer">3</span>
          </div>
        </div>
      </main>

      {/* FULL-SCREEN IMAGE POPUP */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full h-full max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-1 right-1 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white hover:text-[#b8860b] transition-all duration-200 flex items-center justify-center border border-white/30 hover:border-[#b8860b]"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Image
              src={selectedImage}
              alt="Menu item full view"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
          </div>
        </div>
      )}

      <Footer />

      {/* ===== Custom CSS for animations ===== */}
      <style jsx>{`
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .menu-item {
          opacity: 0; /* start invisible */
          animation-duration: 0.7s;
          animation-fill-mode: forwards;
          animation-timing-function: ease-out;
        }
        .slide-left {
          animation-name: slideLeft;
        }
        .slide-right {
          animation-name: slideRight;
        }
      `}</style>
    </>
  );
}