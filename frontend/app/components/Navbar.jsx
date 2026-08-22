"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "Home", href:"/"},
        { name: "Booking", href: "/booking" },
        { name: "Menu", href: "/menu" },
        { name: "Gift Cards", href: "/gift-cards" },
        { name: "Contact", href: "/contact-us" },
    ];

    return (
        <nav
            className={`
                fixed top-0 left-0 w-full z-50 
                transition-all duration-300 ease-in-out
                ${
                    isScrolled
                        // ? "bg-white/95 backdrop-blur-sm shadow-sm py-2 pt-10 "
                        // : "bg-[#DFB342] backdrop-blur-sm py-3 pt-10"

                         ? "bg-white backdrop-blur-sm shadow-sm py-2 pt-10 "
                        : "bg-[#faf8f6] backdrop-blur-sm py-3 pt-10"
                }
                }
            `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                {/* ========== FIRST ROW ========== */}
                <div className="flex items-center justify-between">
                    {/* Left: Opening Hours - NOW BIGGER (text-base) */}
                    <div className="hidden sm:block text-base text-[#5a5a5a] font-light tracking-wide leading-relaxed">
                        <div><span className="font-medium">Monday – Tuesday:</span> 15:00 – 23:00</div>
                        <div><span className="font-medium">Wednesday – Saturday:</span> 14:00 – 23:00</div>
                        <div><span className="font-medium">Sunday:</span> 14:00 – 22:00</div>
                    </div>

                    {/* Center: Logo (image) - you can adjust width/height as needed */}
                    <Link
                        href="/"
                        className="flex-shrink-0"
                    >
                        <img src="logo/logo.png" alt="Mother India Oslo" className="h-12 md:h-18 w-auto" />
                    </Link>

                    {/* Right: Two Buttons - NOW STACKED VERTICALLY and BIGGER */}
                    <div className="flex flex-col items-end gap-2">
                        <Link
                            href="/booking"
                            className="hidden sm:inline-block px-8 py-2.5 text-base tracking-widest uppercase font-medium text-white bg-[#b8860b] rounded-full hover:bg-[#9a7209] transition-all duration-200 shadow-sm hover:shadow-md text-center w-full"
                        >
                            Book a Table
                        </Link>
                        <Link
                            href="/takeaway"
                            className="hidden sm:inline-block px-8 py-2.5 text-base tracking-widest uppercase font-medium text-[#1a1a1a] border border-[#ebe5e0] rounded-full hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-200 text-center w-full"
                        >
                            Takeaway
                        </Link>
                        {/* Mobile hamburger - placed separately so it stays on the right */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="sm:hidden flex flex-col items-center justify-center w-8 h-8 group mt-1"
                            aria-label="Toggle menu"
                        >
                            <span
                                className={`block h-[2px] w-5 bg-[#1a1a1a] transition-all duration-300 ease-in-out ${
                                    isOpen ? "rotate-45 translate-y-1.5" : ""
                                }`}
                            />
                            <span
                                className={`block h-[2px] w-5 bg-[#1a1a1a] transition-all duration-300 ease-in-out mt-1.5 ${
                                    isOpen ? "opacity-0" : ""
                                }`}
                            />
                            <span
                                className={`block h-[2px] w-5 bg-[#1a1a1a] transition-all duration-300 ease-in-out mt-1.5 ${
                                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                                }`}
                            />
                        </button>
                    </div>
                </div>

                {/* ========== DIVIDER ========== */}
                <hr className="my-4 border-t-2 border-[#63615f]" />

                {/* ========== SECOND ROW: Navigation Tabs - NOW BIGGER (text-base) ========== */}
                <div className="hidden sm:flex items-center justify-center gap-10 lg:gap-14 py-1">
                    {navLinks.map((link) => {
                        const isActive =
                            pathname === link.href ||
                            (link.href !== "/" && pathname?.startsWith(link.href));

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`
                                    text-base tracking-[0.15em] uppercase font-medium
                                    transition-colors duration-300
                                    ${
                                        isActive
                                            ? "text-[#926c0b]"
                                            : "text-[#333333] hover:text-[#b8860b]"
                                    }
                                `}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* ========== MOBILE DROPDOWN ========== */}
            <div
                className={`
                    sm:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md
                    border-t border-[#e8e0d8] shadow-lg transition-all duration-400 ease-in-out overflow-hidden
                    ${isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <div className="flex flex-col px-6 py-4 space-y-4">
                    {/* Mobile Hours - bigger (text-base) */}
                    <div className="text-base text-[#5a5a5a] font-light tracking-wide leading-relaxed border-b border-[#e8e0d8] pb-3">
                        <div>Monday – Tuesday: 15:00 – 23:00</div>
                        <div>Wednesday – Saturday: 14:00 – 23:00</div>
                        <div>Sunday: 14:00 – 22:00</div>
                    </div>

                    {/* Mobile Navigation Links - even bigger (text-lg) */}
                    {navLinks.map((link) => {
                        const isActive =
                            pathname === link.href ||
                            (link.href !== "/" && pathname?.startsWith(link.href));

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`
                                    py-2 text-lg tracking-[0.15em] uppercase font-light
                                    transition-all duration-200
                                    ${
                                        isActive
                                            ? "text-[#b8860b]"
                                            : "text-[#333333] hover:text-[#b8860b]"
                                    }
                                `}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    {/* Mobile Action Buttons - bigger (text-lg) */}
                    <div className="flex flex-col gap-2 pt-2 border-t border-[#e8e0d8]">
                        <Link
                            href="/booking"
                            className="w-full text-center py-3 text-lg tracking-widest uppercase font-medium text-white bg-[#b8860b] rounded-full hover:bg-[#9a7209] transition-all"
                        >
                            Book a Table
                        </Link>
                        <Link
                            href="/takeaway"
                            className="w-full text-center py-3 text-lg tracking-widest uppercase font-medium text-[#1a1a1a] border border-[#d4c5b5] rounded-full hover:border-[#b8860b] hover:text-[#b8860b] transition-all"
                        >
                            Takeaway
                        </Link>
                    </div>

                    <div className="text-center text-sm tracking-[0.2em] text-[#8a7a6a] uppercase font-light pt-2">
                        Mother India · Oslo
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;