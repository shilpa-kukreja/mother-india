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

  // Refs for each section to trigger animations
  const headingRef = useRef(null);
  const restaurantRef = useRef(null);
  const featuresRef = useRef(null);
  const faqRef = useRef(null);

  // Observer setup – reusing the same observer logic for each section
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

  // Data (unchanged)
  const restaurants = [
    {
      name: "Bislett",
      slug: "bislett",
      image: "/booking/image1.png",
      description: "Cozy atmosphere in the heart of Bislett.",
    },
    {
      name: "Sandvika",
      slug: "sandvika",
      image: "/booking/image2.jpeg",
      description: "Modern dining by the fjord.",
    },
    {
      name: "Økern",
      slug: "okern",
      image: "/booking/image3.jpg",
      description: "Spacious and elegant near Økern centre.",
    },
  ];

  const faqs = [
    {
      question: "Can I reserve a table for just dessert and drinks?",
      answer:
        "No, unfortunately. Due to table capacity, we require a full meal booking for all our guests. A minimum of one main course or two starters per person is required.",
    },
    {
      question: "Can I reserve a specific table in the restaurant?",
      answer:
        "We are happy to note your table preference, but we cannot guarantee that your request will be fulfilled.",
    },
    {
      question: "Can I share food between guests?",
      answer:
        "For the comfort of all guests, we ask that each person orders from their own plate. We encourage our guests to settle the bill via Vipps, card, or cash.",
    },
    {
      question: "Do you cater to allergies?",
      answer:
        "We do our best to accommodate all allergy requests, but we cannot guarantee that dishes are completely free of allergens.",
    },
    {
      question: "Do you have vegetarian and vegan options?",
      answer:
        "Yes, we offer many vegetarian and vegan dishes. Please see our menu for all options.",
    },
  ];

  const features = [
    {
      title: "Authentic Indian Flavours",
      description1:
        "Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey. Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey.Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey.",
      description2:
        "Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey. Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey.Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey.",
      image: "/booking/image1.png",
    },
    {
      title: "Warm & Welcoming Ambiance",
      description1:
        "Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey. Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey.Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey.",
      description2:
        "Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey. Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey.Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey.",
      image: "/booking/image2.jpeg",
    },
    {
      title: "Exceptional Service",
      description1:
        "Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey. Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey.Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey.",
      description2:
        "Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey. Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey.Our chefs bring decades of experience from India, using traditional spices and cooking techniques to deliver an unforgettable culinary journey.",
      image: "/booking/image3.jpg",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-70 pb-25 bg-[#faf8f6] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ===== HEADING ===== */}
          <div
            ref={headingRef}
            className="text-center mb-16 section-animate"
          >
            <h1 className="text-4xl md:text-5xl font-medium tracking-wide text-[#1a1a1a]">
              Book a Table
            </h1>
            <div className="w-16 h-0.5 bg-[#b8860b] mx-auto mt-4" />
            <p className="mt-4 text-[#6b5a4a] font-light text-lg max-w-2xl mx-auto">
              Choose your preferred restaurant and reserve your dining
              experience.
            </p>
          </div>

          {/* ===== THREE RESTAURANT CARDS ===== */}
          <div
            ref={restaurantRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 section-animate"
          >
            {restaurants.map((restaurant, index) => (
              <div
                key={restaurant.slug}
                className="group hover:shadow-lg transition-all duration-300 flex flex-col card-item"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full h-56 overflow-hidden bg-[#f0ebe5] border-b border-[#d6cdc0]">
                  <Image
                    src={restaurant.image}
                    alt={`${restaurant.name} restaurant`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-3xl font-medium tracking-wide text-[#1a1a1a]">
                    {restaurant.name}
                  </h3>
                  <p className="mt-1 text-lg text-[#6b5a4a] font-light">
                    {restaurant.description}
                  </p>
                  <div className="mt-5 pt-2 border-t border-b pb-2">
                    <Link
                      href={`/booking/${restaurant.slug}`}
                      className="inline-flex items-center gap-6 px-6 py-2 text-md tracking-widest uppercase font-medium text-[#b8860b] transition-colors"
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
          <div
            ref={featuresRef}
            className="mb-20 section-animate"
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-wide text-[#1a1a1a] text-center mb-12">
              Why Choose Mother India
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
                      <p className="mt-3 text-[#6b5a4a] font-light leading-relaxed">
                        {feature.description1}
                      </p>
                      <p className="mt-3 text-[#6b5a4a] font-light leading-relaxed">
                        {feature.description2}
                      </p>
                    </div>
                    <div
                      className={`w-full md:w-1/2 aspect-[6/4] bg-[#f0ebe5] ${
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
          <div
            ref={faqRef}
            className="max-w-3xl mx-auto section-animate"
          >
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
                    <span className="text-lg font-medium text-[#1a1a1a]">
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
                    <p className="text-[#6b5a4a] font-light leading-relaxed">
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
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .section-animate.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Restaurant cards – each slides up with stagger */
        .card-item {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .visible .card-item {
          opacity: 1;
          transform: translateY(0);
        }

        /* Feature rows – each slides up with stagger */
        .feature-row {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .visible .feature-row {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}