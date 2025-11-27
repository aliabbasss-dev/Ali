"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center px-4 absolute top-6 left-0 z-50">
      <nav
        className="
          w-full max-w-6xl
          rounded-full
          backdrop-blur-xl
          bg-white/5
          border border-white/10
          shadow-[0_0_40px_rgba(0,0,0,0.45)]
          px-5 sm:px-8
          py-3
          flex items-center justify-between
        "
      >
        {/* LEFT FULL LOGO */}
        <Image
          src="/logo.png"
          alt="Performance Mentorship Logo"
          width={150}
          height={50}
          className="object-contain"
        />

        {/* RIGHT MENU BUTTON */}
        <button
          className="
            flex items-center gap-2
            bg-white/10
            rounded-full
            border border-white/10
            px-4 py-2
            text-white text-sm
            hover:bg-white/20
            transition-all duration-300
          "
        >
          <span className="text-base">☰</span>
          <span className="text-sm font-medium">Menu</span>
        </button>
      </nav>
    </div>
  );
}
