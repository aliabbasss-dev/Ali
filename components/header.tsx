"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("scroll", closeMenu);
    return () => window.removeEventListener("scroll", closeMenu);
  }, []);

  const menuItems = [
    { label: "About", id: "about" },
    { label: "Performance Mentorship", id: "performance" },
    { label: "Skills for Dubai Agents", id: "skills" },
    { label: "Strategy Session", id: "strategy" },
    { label: "Investment", id: "investment" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full flex justify-center px-4 absolute top-6 left-0 z-50">
        <nav
          className="
            w-full max-w-6xl
            rounded-full
            backdrop-blur-xl
            bg-white/5
            border border-white/10
            shadow-[0_0_40px_rgba(0,0,0,0.45)]
            px-5 sm:px-8 py-3
            flex items-center justify-between
          "
        >
<Image
  src="/logo.png"
  alt="Performance Mentorship Logo"
  width={70}
  height={70}
  className="object-contain w-20 h-20 -my-4"

/>


          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="
              flex items-center gap-2
              bg-white/10 rounded-full border border-white/10
              px-4 py-2
              text-white text-sm font-medium
              hover:bg-white/20 transition-all duration-300
            "
          >
            <span className="text-base">☰</span>
            Menu
          </button>
        </nav>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* SLIDE-DOWN MENU */}
      <div
        className={`
          fixed top-0 left-0 w-full z-50
          bg-[#111] border-b border-white/10 backdrop-blur-xl
          overflow-hidden transform transition-all duration-500
          ${open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="pt-28 pb-10 px-8 flex flex-col gap-6 max-w-6xl mx-auto text-white">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                text-left w-full text-lg font-medium 
                hover:text-[#F8C133] transition
              "
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
