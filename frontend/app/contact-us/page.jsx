// app/contact/page.jsx (or pages/contact.js)
"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  // Replace with your actual Google Maps embed URL
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.123456789!2d10.123456!3d59.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDA3JzI0LjUiTiAxMMKwMDcnMzEuNSJF!5e0!3m2!1sno!2sno!4v1234567890";

  return (
    <>
      <Navbar />

      <main className="pt-70 pb-23 bg-[#faf8f6] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ===== HEADING ===== */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-medium tracking-wide text-[#1a1a1a]">
              Contact Us
            </h1>
            <div className="w-20 h-0.5 bg-[#b8860b] mx-auto mt-4" />
            <p className="mt-4 text-[#6b5a4a] font-medium text-lg max-w-2xl mx-auto">
              We look forward to hearing from you – visit us or get in touch for reservations.
            </p>
          </div>

          {/* ===== THREE‑COLUMN GRID ===== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Column 1: Image */}
            <div className="relative h-64 md:h-auto min-h-[300px] overflow-hidden border border-[#d6cdc0] bg-[#f0ebe5]">
              <Image
                src="/contact/restaurent.png"
                alt="Mother India restaurant interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Column 2: Two Rows – Contact Details (top) + Image (bottom) */}
            <div className="flex flex-col">
              {/* Row 1: Contact Details */}
              <div className="p-6 flex-1 text-center">
                <h2 className="text-2xl font-medium tracking-wide text-[#1a1a1a] border-b border-[#c49c75] pb-4">
                  Get in Touch
                </h2>
                <ul className="mt-6 space-y-4 ">
                  <li className="flex items-center gap-3">
                    <FaPhoneAlt className="text-[#b8860b] text-lg" />
                    <span className="text-[#1a1a1a] font-light">+47 123 45 678</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaEnvelope className="text-[#b8860b] text-lg" />
                    <a
                      href="mailto:post@motherindiaoslo.no"
                      className="text-[#1a1a1a] font-light hover:text-[#b8860b] transition-colors"
                    >
                      post@motherindiaoslo.no
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-[#b8860b] text-lg" />
                    <address className="not-italic text-[#1a1a1a] font-light">
                      Karl Johans gate 1,
                      0154 Oslo, Norway
                    </address>
                  </li>
                </ul>
              </div>

              {/* Row 2: Image (takes remaining space) */}
              <div className="relative w-full h-48 md:h-auto min-h-[150px] border-t border-[#d6cdc0] bg-[#f0ebe5] flex-1">
                <Image
                  src="/contact/bottom.png"
                  alt="Mother India dining experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Column 3: Google Map */}
            <div className="relative h-64 md:h-auto min-h-[300px] border border-[#d6cdc0] overflow-hidden bg-[#e8e0d8]">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Mother India Oslo location"
              />
            </div>
          </div>

          {/* ===== ADDITIONAL INFO ===== */}
          <div className="mt-16 text-center text-sm text-[#8a7a6a] font-medium border-t border-[#e0d6cc] pt-8">
            <p>We look forward to welcoming you – whether at the restaurant or over the phone.</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}