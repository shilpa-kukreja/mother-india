// app/booking/page.jsx (or pages/booking.js)
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function BookingPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  
  // State to trigger animation classes
  const [visible, setVisible] = useState({
    heading: false,
    restaurant: false,
    features: false,
    faq: false,
  });

  // Refs for animations
  const headingRef = useRef(null);
  const restaurantRef = useRef(null);
  const featuresRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-id");
          setVisible((prev) => ({ ...prev, [id]: true }));
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    });

    const elements = [
      { ref: headingRef, id: "heading" },
      { ref: restaurantRef, id: "restaurant" },
      { ref: featuresRef, id: "features" },
      { ref: faqRef, id: "faq" },
    ];

    elements.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute("data-id", id);
        observer.observe(ref.current);
      }
    });

    return () => {
      elements.forEach(({ ref }) => {
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
      bookingUrl:
        "https://booking.resdiary.com/widget/Standard/RestaurantMotherIndia/34642",
      image: "/booking/book.jpg",
    },
  ];

  const faqs = [
    {
      question: "Hvilken type indisk mat serverer dere?",
      answer:
        "Vi serverer autentisk indisk mat inspirert av de rike kulinariske tradisjonene fra Nord-India. Menyen vår kombinerer klassiske indiske favoritter med nøye tilberedte retter laget med tradisjonelle krydder og matlagingsteknikker.",
    },
    {
      question: "Hvor sterkt er maten?",
      answer:
        "Kryddernivået varierer fra rett til rett. Mange av våre retter kan tilpasses din smak, enten du foretrekker mildt, medium eller sterkt. Hvis du er usikker, vil vårt personale gjerne anbefale noe.",
    },
    {
      question: "Hva er nordindisk mat kjent for?",
      answer:
        "Nordindisk mat er kjent for sine rike smaker, aromatiske krydder, kremete karriretter, tandoori-tilberedning og nybakte brød. Populære ingredienser inkluderer kardemomme, spisskummen, koriander, gurkemeie, ingefær, hvitløk og garam masala.",
    },
    {
      question: "Hva gjør Mother India annerledes?",
      answer:
        "Mother India har servert indisk mat i Oslo siden 1993. Vårt fokus er på autentiske smaker, tradisjonelle tilberedningsmetoder, nøye utvalgte krydder og varm indisk gjestfrihet.",
    },
    {
      question: "Bruker dere tradisjonelle indiske krydder?",
      answer:
        "Ja. Krydder er en essensiell del av indisk matlaging, og vi velger og kombinerer dem nøye for å skape balanserte og aromatiske smaker i våre retter.",
    },
  ];

  const features = [
    {
      title: "Autentiske indiske smaker",
      description1:
        "Opplev de rike og aromatiske smakene fra Nord-India. Våre retter tilberedes med nøye utvalgte krydder og tradisjonelle teknikker for å skape en autentisk smak av India.",
      description2:
        "Fra klassiske favoritter til nøye sammensatte spesialiteter – hver tallerken er tilberedt med omtanke for smak, kvalitet og tradisjon.",
      image: "/booking/1.jpg",
    },
    {
      title: "Varm og innbydende atmosfære",
      description1:
        "Tre inn i en avslappet og innbydende atmosfære der indisk gjestfrihet står i sentrum. Enten du kommer for en uformell middag, en familiesammenkomst eller en spesiell kveld, er vår restaurant et sted for god mat og godt selskap.",
      description2:
        "Våre kokker har flere tiår med erfaring fra India og bruker tradisjonelle krydder og teknikker for å levere en uforglemmelig kulinarisk reise.",
      image: "/booking/2.jpg",
    },
    {
      title: "Fremragende service",
      description1:
        "Fra du ankommer, er teamet vårt her for å gjøre matopplevelsen din hyggelig. Vi kombinerer oppmerksom service med ekte gjestfrihet for å sikre at hver gjest føler seg godt ivaretatt.",
      description2:
        "Len deg tilbake, utforsk smakene av India og la oss ta oss av resten.",
      image: "/booking/3.jpg",
    },
  ];

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="pb-18 pt-10 bg-[#faf8f6] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-4">
            <img
              src="/booking/logo.png"
              alt="Mother India Bislett"
              className="h-auto max-w-full"
            />
          </div>

          {/* ===== HEADING ===== */}
          <div
            ref={headingRef}
            className={`text-center mb-8 transition-all duration-700 ease-out ${
              visible.heading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-medium tracking-wide text-[#1a1a1a]">
              Bestill bord
            </h1>
            <div className="w-40 h-0.5 bg-[#b8860b] mx-auto mt-4" />
            <p className="mt-4 text-[#6b5a4a] font-light text-lg max-w-4xl mx-auto">
              Reserver bord på Mother India Bislett og nyt en autentisk indisk
              matopplevelse i hjertet av Oslo.
            </p>
          </div>

          {/* ===== SINGLE RESTAURANT CARD (centered) ===== */}
          <div
            ref={restaurantRef}
            className={`flex justify-center mb-10 transition-all duration-700 ease-out ${
              visible.restaurant ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {restaurants.map((restaurant, index) => (
              <div
                key={restaurant.bookingUrl}
                className="group transition-all duration-700 ease-out flex flex-col max-w-7xl w-full"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* ---- Row 1: Image ---- */}
                <div className="relative w-full overflow-hidden bg-[#f0ebe5]">
                  <img
                    src={restaurant.image}
                    alt={`${restaurant.name} restaurant`}
                    style={{ width: "100%" }}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* ---- Row 2: Two columns with gap ---- */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-5 items-start">
                  
                  {/* Left column: content */}
                  <div className="w-full md:w-4/6 p-5 flex flex-col border border-[#d6cdc0] ">
                    <h3 className="text-3xl font-medium tracking-wide text-[#1a1a1a] mb-4">
                      Om Mother India
                    </h3>
                    <p className="text-lg text-[#6b5a4a] font-light leading-relaxed mb-6">
                      Mother India i Oslo er Norges eldste Indiske restaurant. Restauranten åpnet sine dører i 1993, og har siden da blitt drevet av den samme familien. Restauranten er som regel fullsatt og bordreservasjon er derfor anbefalt. Maten som serveres er hovedsakelig fra det nord-indiske kjøkken og kokkenes oppskrifter har vært en godt bevart hemmelighet de siste 20 år.
                    </p>

                    <h3 className="text-2xl font-medium tracking-wide text-[#1a1a1a] mb-2">
                      Book bord
                    </h3>
                    <p className="text-sm font-semibold text-[#b8860b] mb-2">
                      NB! Reservasjon på nett gjelder kun Mother India Bislett
                    </p>
                    <p className="text-lg text-[#6b5a4a] font-light leading-relaxed mb-6">
                      Bordreservasjon gjennom hjemmesiden må gjøres minst 9 timer før ønsket tid. Du kan alltid ringe inn din bordreservasjon hvis du er utenfor denne tidsfristen. Du vil motta en bekreftelse per epost når vi har ført inn din reservasjon i vårt system.
                    </p>

                    <h3 className="text-2xl font-medium tracking-wide text-[#1a1a1a] mb-3">
                      Åpningstider
                    </h3>
                    <div className="mb-6 space-y-2 text-[#6b5a4a] text-lg font-light">
                      <div className="flex justify-between border-b border-gray-200 pb-1">
                        <span>Mandag - Lørdag</span>
                        <span>16:00 – 22:00</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-1">
                        <span>Søndag</span>
                        <span>15:00 – 21:00</span>
                      </div>
                    </div>

                    {/* ===== NEW CONTACT INFORMATION SECTION ===== */}
                    <h3 className="text-2xl font-medium tracking-wide text-[#1a1a1a] mb-3">
                      Kontaktinformasjon
                    </h3>
                    <div className="text-[#6b5a4a] text-lg font-light space-y-1">
                      {/* <p>Restaurant Mother India</p> */}
                      <p>Pilestredet 63, 0350 Oslo</p>
                     
                    </div>
                  </div>

                  {/* Right column: iframe */}
                  <div className="w-full md:w-2/6 flex flex-col border border-[#d6cdc0] bg-white">
                    {/* iframe wrapper - Reduced min-height to 600px */}
                    <div className="relative w-full max-w-[600px] mx-auto flex-1 min-h-[620px]">
                      {!iframeLoaded && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#faf8f6] border border-[#d6cdc0]">
                          <div className="w-8 h-8 border-4 border-[#d6cdc0] border-t-[#b8860b] rounded-full animate-spin"></div>
                          <span className="text-sm text-[#6b5a4a] font-light">
                            Laster bestillingsskjema …
                          </span>
                        </div>
                      )}

                      {/* iframe - Reduced height to 620px */}
                      <iframe
                        src={restaurant.bookingUrl}
                        title={`Bestill bord – ${restaurant.name}`}
                        allowTransparency="true"
                        frameBorder="0"
                        scrolling="auto"
                        onLoad={() => setIframeLoaded(true)}
                        className={`block w-full h-[620px] border-none mx-auto bg-transparent transition-opacity duration-500 ${
                          iframeLoaded ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== WHY CHOOSE US ===== */}
          <div
            ref={featuresRef}
            className={`mb-20 transition-all duration-700 ease-out ${
              visible.features ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-medium  text-[#1a1a1a] text-center mb-5 md:mb-20">
              Hvorfor velge Mother India Bislett
            </h2>
            <div className="space-y-12">
              {features.map((feature, index) => {
                const isTextLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-stretch overflow-hidden transition-all duration-700 ease-out"
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
          <div
            ref={faqRef}
            className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${
              visible.faq ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-wide text-[#1a1a1a] text-center mb-8">
              Ofte stilte spørsmål
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
    </>
  );
}