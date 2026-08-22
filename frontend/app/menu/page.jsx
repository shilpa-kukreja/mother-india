// app/meny/page.jsx (or pages/meny.js)
"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ===== MENU DATA ===== (keep your own items here)
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
  // {
  //   id: 6,
  //   name: "Lamb Rogan Josh",
  //   description: "Kashmiri style lamb curry",
  //   price: "265,-",
  //   category: "Hovedmeny",
  //   image: "/images/menu/rogan-josh.jpg",
  // },
  // {
  //   id: 7,
  //   name: "Dal Makhani",
  //   description: "Slow cooked black lentils",
  //   price: "195,-",
  //   category: "Hovedmeny",
  //   image: "/images/menu/dal.jpg",
  // },
  // {
  //   id: 8,
  //   name: "Garlic Naan",
  //   description: "Tandoor baked bread with garlic",
  //   price: "45,-",
  //   category: "Brød & Dessert",
  //   image: "/images/menu/naan.jpg",
  // },
  // {
  //   id: 9,
  //   name: "Gulab Jamun",
  //   description: "Milk dumplings in rose syrup",
  //   price: "85,-",
  //   category: "Brød & Dessert",
  //   image: "/images/menu/gulab-jamun.jpg",
  // },
  // {
  //   id: 10,
  //   name: "Mango Lassi",
  //   description: "Yogurt smoothie with mango",
  //   price: "65,-",
  //   category: "Drikkemeny",
  //   image: "/images/menu/lassi.jpg",
  // },
  // {
  //   id: 11,
  //   name: "Craft Beer",
  //   description: "Local Norwegian IPA",
  //   price: "95,-",
  //   category: "Drikkemeny",
  //   image: "/images/menu/beer.jpg",
  // },
];

const categories = ["All", ...new Set(menuData.map((item) => item.category))];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showEnglish, setShowEnglish] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  return (
    <>
      <Navbar />

      <main className="pt-70 pb-29 bg-[#faf8f6] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER – centered */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-medium tracking-wide text-[#1a1a1a]">
              MOTHER INDIA MENU
            </h1>
            <div className="w-30 h-0.5 bg-[#b8860b] mx-auto mt-4" />
            {/* Language toggle (commented out) */}
          </div>

          {/* ===== PREMIUM CATEGORY FILTERS ===== */}
          <div className="relative mb-12">
            {/* Decorative divider above */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#b8860b]/30 to-transparent" />

            <div className="relative flex flex-wrap justify-center gap-3 md:gap-4 bg-black px-4 py-2 rounded-full shadow-sm border border-2 border-[#cca074]  max-w-3xl mx-auto">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      relative px-5 py-4 text-sm font-medium tracking-wide uppercase
                      transition-all duration-300 ease-in-out
                      rounded-full border-2
                      ${
                        isActive
                          ? "border-[#b8860b] bg-[#b8860b]/5 text-[#b8860b] shadow-sm"
                          : "border-transparent text-[#cfc8c1] hover:border-[#d6cdc0] hover:bg-white/50 hover:text-[#1a1a1a]"
                      }
                    `}
                  >
                    {category}
                    {/* Active underline (pill variant) – optional subtle bar */}
                    {/* {isActive && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-[#b8860b] rounded-full" />
                    )} */}
                  </button>
                );
              })}
            </div>
          </div>

          {/* MENU GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white border border-[#d6cdc0] shadow-sm hover:shadow-lg transition-all duration-300"
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
            ))}
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
    </>
  );
}