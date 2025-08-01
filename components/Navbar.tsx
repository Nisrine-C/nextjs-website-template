"use client";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveringTop, setHoveringTop] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Adjust if your hero isn't full viewport height

      // Show/hide navbar on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHide(true);
        setHoveringTop(false);
      } else {
        setHide(false);
      }

      // Show gradient background when scrolled past hero
      setShowBackground(currentScrollY > heroHeight * 0.8);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="max-md:hidden">
      {/* Invisible hover area at top of screen */}
      <div
        className="fixed top-0 left-0 right-0 h-[100px] z-40"
        onMouseEnter={() => setHoveringTop(true)}
        onMouseLeave={() => setHoveringTop(false)}
      />

      {/* Navbar with gradient background */}
      <nav
        className={`fixed top-0 left-0 right-0 flex items-center justify-center z-50 px-6 py-2 transition-all duration-500 ${
          showBackground ? "bg-white shadow-lg" : "bg-transparent"
        } ${hide && !hoveringTop ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div
          className={`h-12 w-12 border-2 flex items-center justify-center ${
            showBackground ? "border-black" : "border-white"
          }`}
        >
          <span
            className={` font-bold text-xl ${
              showBackground ? "text-black" : "text-white"
            }`}
          >
            AC
          </span>
        </div>
      </nav>
    </div>
  );
}
