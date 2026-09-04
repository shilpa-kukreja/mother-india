// app/booking/page.jsx (or pages/booking.js)
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function BookingPage() {
  const [openIndex, setOpenIndex] = useState(0);

  // Refs for animations
  const headingRef = useRef(null);
  const restaurantRef = useRef(null);
  const featuresRef = useRef(null);
  const faqRef = useRef(null);

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

    const sections = [headingRef, restaurantRef, featuresRef, faqRef];
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ===== Only Bislett remains =====
  const restaurants = [
    {
      name: "Mother India Bislett",
      slug: "https://booking.resdiary.com/widget/Standard/RestaurantMotherIndia/34642",
      image: "/booking/banner.jpg",
      description:
        "Mother India is one of Oslo's established Indian restaurants, opening its doors in 1993 and remaining family-run ever since. At Bislett, we welcome our guests with authentic flavours inspired by the rich traditions of North Indian cuisine. Our chefs prepare each dish using carefully selected spices, traditional cooking techniques and recipes that have been cherished and refined over the years. As the restaurant can often be busy, we recommend making a table reservation in advance.",
    },
  ];

  const faqs = [
    {
      question: "What type of Indian cuisine do you serve?",
      answer:
        "We serve authentic Indian cuisine inspired by the rich culinary traditions of North India. Our menu combines classic Indian favourites with carefully prepared dishes made using traditional spices and cooking techniques.",
    },
    {
      question: "How spicy is the food?",
      answer:
        "The level of spice varies from dish to dish. Many of our dishes can be adjusted to suit your preference, whether you enjoy mild, medium, or spicy flavours. If you are unsure, our staff will be happy to recommend something.",
    },
    {
      question: "What is North Indian cuisine known for?",
      answer:
        "North Indian cuisine is known for its rich flavours, aromatic spices, creamy curries, tandoori cooking, and freshly prepared breads. Popular ingredients include cardamom, cumin, coriander, turmeric, ginger, garlic, and garam masala.",
    },
    {
      question: "What makes Mother India different?",
      answer:
        "Mother India has been serving Indian food in Oslo since 1993. Our focus is on authentic flavours, traditional cooking methods, carefully selected spices, and warm Indian hospitality.",
    },
    {
      question: "Do you use traditional Indian spices?",
      answer:
        "Yes. Spices are an essential part of Indian cuisine, and we carefully select and combine them to create balanced and aromatic flavours in our dishes.",
    },
  ];

  const features = [
    {
      title: "Authentic Indian Flavours",
      description1:
        "Experience the rich and aromatic flavours of North India. Our dishes are prepared with carefully selected spices and traditional cooking techniques to create an authentic taste of India.",
      description2:
        "From classic favourites to carefully crafted specialities, every plate is prepared with attention to flavour, quality and tradition.",
      image: "/booking/feature1.jpg",
    },
    {
      title: "Warm & Welcoming Ambiance",
      description1:
        "Step into a relaxed and inviting atmosphere where Indian hospitality takes centre stage. Whether you're joining us for a casual meal, a family gathering or a special evening, our restaurant is a place to enjoy good food and good company.",
      description2:
        "Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey.",
      image: "/booking/feature2.jpg",
    },
    {
      title: "Exceptional Service",
      description1:
        "From the moment you arrive, our team is here to make your dining experience enjoyable. We combine attentive service with genuine hospitality to ensure that every guest feels well looked after.",
      description2:
        "Sit back, explore the flavours of India and let us take care of the rest.",
      image: "/booking/feature3.jpg",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-45 md:pt-62 pb-25 bg-[#faf8f6] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-4">
            <img
              src="/booking/logo.png"
              alt="Mother India Bislett"
              className="h-auto max-w-full"
            />
          </div>
          {/* ===== HEADING ===== */}
          <div ref={headingRef} className="text-center mb-8 section-animate">
            <h1 className="text-4xl md:text-5xl font-medium tracking-wide text-[#1a1a1a]">
              Book a Table
            </h1>
            <div className="w-40 h-0.5 bg-[#b8860b] mx-auto mt-4" />
            <p className="mt-4 text-[#6b5a4a] font-light text-lg max-w-4xl mx-auto">
              Reserve your table at Mother India Bislett and enjoy an authentic Indian dining experience in the heart of Oslo.
            </p>
          </div>

          {/* ===== SINGLE RESTAURANT CARD (centered) ===== */}
          <div
            ref={restaurantRef}
            className="flex justify-center mb-10 section-animate"
          >
            {restaurants.map((restaurant, index) => (
              <div
                key={restaurant.slug}
                className="group hover:shadow-lg transition-all duration-300 flex flex-col max-w-5xl w-full card-item"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full h-64 overflow-hidden bg-[#f0ebe5] border border-[#d6cdc0]">
                  <img
                    src={restaurant.image}
                    alt={`${restaurant.name} restaurant`}
                      style={{ width: "100%" }}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 ">
                  <h3 className="text-3xl font-medium tracking-wide text-[#1a1a1a]">
                    {restaurant.name}
                  </h3>
                  <p className="mt-1 text-lg text-[#6b5a4a] font-light">
                    {restaurant.description}
                  </p>
                  <div className="mt-5 pt-2 border-t border-b pb-2">
                    <Link
                      href={`${restaurant.slug}`}
                      target="blank"
                      className="inline-flex items-center gap-6 px-6 py-2 text-md tracking-widest uppercase font-medium text-[#b8860b] transition-colors "
                    >
                      <Image
                        src="/booking/btn-arrow.svg"
                        alt="arrow"
                        width={60}
                        height={30}
                      />
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== WHY CHOOSE US ===== */}
          {/* <div ref={featuresRef} className="mb-20 section-animate"> */}
                    <div ref={featuresRef} className="mb-20 ">

            <h2 className="text-3xl md:text-4xl font-medium  text-[#1a1a1a] text-center mb-5 md:mb-20">
              Why Choose Mother India Bislett
            </h2>
            <div className="space-y-12">
              {features.map((feature, index) => {
                const isTextLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-stretch overflow-hidden feature-row"
                    style={{ transitionDelay: `${index * 0.15}s` }}
                  >
                    <div
                      className={`w-full md:w-1/2 p-8 flex flex-col justify-center ${
                        isTextLeft ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <h3 className="text-2xl font-medium tracking-wide text-[#1a1a1a]">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-[#6b5a4a] text-lg font-light leading-relaxed">
                        {feature.description1}
                      </p>
                      <p className="mt-3 text-[#6b5a4a] text-lg font-light leading-relaxed">
                        {feature.description2}
                      </p>
                      
                    </div>
                    <div
                      className={`w-full md:w-1/2 aspect-[6/3] bg-[#f0ebe5] ${
                        isTextLeft ? "md:order-2" : "md:order-1"
                      }`}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===== FAQ SECTION ===== */}
          <div ref={faqRef} className="max-w-3xl mx-auto section-animate">
            <h2 className="text-3xl md:text-4xl font-medium tracking-wide text-[#1a1a1a] text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index
                      ? "bg-transparent border-transparent shadow-none"
                      : "bg-white border border-[#d6cdc0] shadow-sm"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-xl font-medium text-[#1a1a1a]">
                      {faq.question}
                    </span>
                    <span className="ml-4 text-[#b8860b]">
                      {openIndex === index ? (
                        <FaChevronUp className="w-5 h-5" />
                      ) : (
                        <FaChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100 p-5 pt-0"
                        : "max-h-0 opacity-0 p-0"
                    }`}
                  >
                    <p className="text-[#6b5a4a] text-lg font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

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

        .feature-row {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }
        .visible .feature-row {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
