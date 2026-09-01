// // app/contact/page.jsx (or pages/contact.js)
// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// export default function ContactPage() {
//   // Refs for each section
//   const headingRef = useRef(null);
//   const gridRef = useRef(null);
//   const footerRef = useRef(null);

//   useEffect(() => {
//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//           observer.unobserve(entry.target);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, {
//       threshold: 0.15,
//       rootMargin: "0px 0px -50px 0px",
//     });

//     const sections = [headingRef, gridRef, footerRef];
//     sections.forEach((ref) => {
//       if (ref.current) observer.observe(ref.current);
//     });

//     return () => {
//       sections.forEach((ref) => {
//         if (ref.current) observer.unobserve(ref.current);
//       });
//     };
//   }, []);

//   // Replace with your actual Google Maps embed URL
//   const mapEmbedUrl =
//     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.123456789!2d10.123456!3d59.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDA3JzI0LjUiTiAxMMKwMDcnMzEuNSJF!5e0!3m2!1sno!2sno!4v1234567890";

//   return (
//     <>
//       <Navbar />

//       <main className="pt-70 pb-23 bg-[#faf8f6] min-h-screen">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* ===== HEADING ===== */}
//           <div ref={headingRef} className="text-center mb-16 section-animate">
//             <h1 className="text-4xl md:text-5xl font-medium tracking-wide text-[#1a1a1a]">
//               Contact Us
//             </h1>
//             <div className="w-20 h-0.5 bg-[#b8860b] mx-auto mt-4" />
//             <p className="mt-4 text-[#6b5a4a] font-medium text-lg max-w-2xl mx-auto">
//               We look forward to hearing from you – visit us or get in touch for reservations.
//             </p>
//           </div>

//           {/* ===== THREE‑COLUMN GRID ===== */}
//           <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
//             {/* Column 1: Image – slides from left */}
//             <div className="relative h-64 md:h-auto min-h-[300px] overflow-hidden border border-[#d6cdc0] bg-[#f0ebe5] col-item col-left">
//               <Image
//                 src="/contact/restaurent.png"
//                 alt="Mother India restaurant interior"
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 33vw"
//               />
//             </div>

//             {/* Column 2: Two Rows – Contact Details (top) + Image (bottom) – slides from bottom */}
//             <div className="flex flex-col col-item col-center">
//               {/* Row 1: Contact Details */}
//               <div className="p-6 flex-1 text-center">
//                 <h2 className="text-2xl font-medium tracking-wide text-[#1a1a1a] border-b border-[#c49c75] pb-4">
//                   Get in Touch
//                 </h2>
//                 <ul className="mt-6 space-y-4">
//                   {[
//                     { icon: <FaPhoneAlt />, text: "+47 123 45 678", href: null },
//                     { icon: <FaEnvelope />, text: "post@motherindiaoslo.no", href: "mailto:post@motherindiaoslo.no" },
//                     { icon: <FaMapMarkerAlt />, text: "Karl Johans gate 1, 0154 Oslo, Norway", href: null },
//                   ].map((item, index) => (
//                     <li
//                       key={index}
//                       className="flex items-center gap-3 contact-item"
//                       style={{ transitionDelay: `${index * 0.1}s` }}
//                     >
//                       <span className="text-[#b8860b] text-lg">{item.icon}</span>
//                       {item.href ? (
//                         <a
//                           href={item.href}
//                           className="text-[#1a1a1a] font-light hover:text-[#b8860b] transition-colors"
//                         >
//                           {item.text}
//                         </a>
//                       ) : (
//                         <span className="text-[#1a1a1a] font-light">{item.text}</span>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Row 2: Image (takes remaining space) */}
//               <div className="relative w-full h-48 md:h-auto min-h-[150px] border-t border-[#d6cdc0] bg-[#f0ebe5] flex-1">
//                 <Image
//                   src="/contact/bottom.png"
//                   alt="Mother India dining experience"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                 />
//               </div>
//             </div>

//             {/* Column 3: Google Map – slides from right */}
//             <div className="relative h-64 md:h-auto min-h-[300px] border border-[#d6cdc0] overflow-hidden bg-[#e8e0d8] col-item col-right">
//               <iframe
//                 src={mapEmbedUrl}
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="absolute inset-0 w-full h-full"
//                 title="Mother India Oslo location"
//               />
//             </div>
//           </div>

//           {/* ===== ADDITIONAL INFO ===== */}
//           <div ref={footerRef} className="mt-16 text-center text-sm text-[#8a7a6a] font-medium border-t border-[#e0d6cc] pt-8 section-animate">
//             <p>We look forward to welcoming you – whether at the restaurant or over the phone.</p>
//           </div>
//         </div>
//       </main>

//       <Footer />

//       {/* ===== Animation Styles ===== */}
//       <style jsx>{`
//         .section-animate {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: opacity 0.8s ease, transform 0.8s ease;
//         }
//         .section-animate.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .col-item {
//           opacity: 0;
//           transition: opacity 0.8s ease, transform 0.8s ease;
//         }
//         .col-left {
//           transform: translateX(-40px);
//         }
//         .col-center {
//           transform: translateY(40px);
//         }
//         .col-right {
//           transform: translateX(40px);
//         }
//         .visible .col-item {
//           opacity: 1;
//           transform: translateX(0) translateY(0);
//         }

//         .contact-item {
//           opacity: 0;
//           transform: translateX(-20px);
//           transition: opacity 0.6s ease, transform 0.6s ease;
//         }
//         .visible .contact-item {
//           opacity: 1;
//           transform: translateX(0);
//         }
//       `}</style>
//     </>
//   );
// }

// app/contact/page.jsx (or pages/contact.js)
// app/contact/page.jsx (or pages/contact.js)
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";

export default function ContactPage() {
  // Refs for animations
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const gridRef = useRef(null);
  const footerRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

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

    const sections = [headingRef, formRef, gridRef, footerRef];
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.501093283163!2d10.728477177372323!3d59.92382696329269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e78389c0001%3A0x790ad6f2a5352330!2sPilestredet%2063%2C%200350%20Oslo%2C%20Norway!5e0!3m2!1sen!2sin!4v1788239230356!5m2!1sen!2sin";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* ===== ADD overflow-x-hidden to prevent horizontal scroll ===== */}
      <main className="pt-50 md:pt-70 pb-23 bg-[#faf8f6] min-h-screen overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div ref={headingRef} className="text-center mb-12 section-animate">
            <h1 className="text-4xl md:text-5xl font-medium tracking-wide text-[#1a1a1a]">
              Contact Us
            </h1>
            <div className="w-20 h-0.5 bg-[#b8860b] mx-auto mt-4" />
            <p className="mt-4 text-[#6b5a4a] font-medium text-lg max-w-2xl mx-auto">
              We look forward to hearing from you – visit us, give us a call, or
              send us a message.
            </p>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="max-w-3xl mx-auto mb-16 section-animate">
            <div className="bg-white border border-[#d6cdc0] p-6 md:p-8">
              <h2 className="text-2xl font-medium tracking-wide text-[#1a1a1a] border-b border-[#c49c75] pb-4 text-center">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-sm border ${errors.name ? "border-red-500" : "border-[#d6cdc0]"} bg-[#faf8f6] focus:outline-none focus:border-[#b8860b] transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-sm border ${errors.email ? "border-red-500" : "border-[#d6cdc0]"} bg-[#faf8f6] focus:outline-none focus:border-[#b8860b] transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm border border-[#d6cdc0] bg-[#faf8f6] focus:outline-none focus:border-[#b8860b] transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm border ${errors.message ? "border-red-500" : "border-[#d6cdc0]"} bg-[#faf8f6] focus:outline-none focus:border-[#b8860b] transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm tracking-widest uppercase font-medium text-white bg-[#b8860b] hover:bg-[#9a7209] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
                {submitStatus === "success" && (
                  <p className="text-green-600 text-sm text-center font-medium">
                    ✓ Message sent successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-500 text-sm text-center font-medium">
                    ✗ Failed to send. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* THREE‑COLUMN GRID */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          >
            {/* Column 1: Image */}
            <div className="relative h-64 md:h-auto min-h-[300px] overflow-hidden border border-[#d6cdc0] bg-[#f0ebe5] col-item col-left">
              <Image
                src="/contact/restaurent.png"
                alt="Mother India restaurant interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Column 2: Contact Details + Image */}
            <div className="flex flex-col col-item col-center">
              <div className="p-6 flex-1 text-center">
                <h2 className="text-2xl font-medium tracking-wide text-[#1a1a1a] border-b border-[#c49c75] pb-4">
                  Get in Touch
                </h2>
                <ul className="mt-6 space-y-4">
                  {[
                    {
                      icon: <FaPhoneAlt />,
                      text: "+4740727890",
                      href: null,
                    },
                    {
                      icon: <FaEnvelope />,
                      text: "post@motherindiaoslo.no",
                      href: "mailto:post@motherindiaoslo.no",
                    },
                    {
                      icon: <FaMapMarkerAlt />,
                      text: "Pilestredet 63, 0350 Oslo",
                      href: null,
                    },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 contact-item"
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-[#b8860b] text-lg">
                        {item.icon}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[#1a1a1a] font-light hover:text-[#b8860b] transition-colors"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-[#1a1a1a] font-light">
                          {item.text}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
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

            {/* Column 3: Google Map – with overflow protection */}
            <div className="relative h-64 md:h-auto min-h-[300px] border border-[#d6cdc0] overflow-hidden bg-[#e8e0d8] col-item col-right">
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Mother India Oslo location"
                />
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div
            ref={footerRef}
            className="mt-16 text-center text-sm text-[#8a7a6a] font-medium border-t border-[#e0d6cc] pt-8 section-animate"
          >
            <p>
              We look forward to welcoming you – whether at the restaurant or
              over the phone.
            </p>
          </div>
        </div>
      </main>

      <Footer />

      {/* Animation Styles */}
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

        .col-item {
          opacity: 0;
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }
        .col-left {
          transform: translateX(-40px);
        }
        .col-center {
          transform: translateY(40px);
        }
        .col-right {
          transform: translateX(40px);
        }
        .visible .col-item {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }

        .contact-item {
          opacity: 0;
          transform: translateX(-20px);
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }
        .visible .contact-item {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </>
  );
}