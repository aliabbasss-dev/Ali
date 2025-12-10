"use client";

import Image from "next/image";
import logo from "@/public/logo.png";

export default function Footer() {
  return (
    <footer className="
      w-full bg-[#0B0B0B] py-32 px-6 border-t border-[#1A1A1A]
      max-sm:py-16 max-sm:px-4
    ">
      <div
        className="
          max-w-7xl mx-auto flex items-center justify-between
          max-sm:flex-col max-sm:justify-center max-sm:gap-6
        "
      >
        
        {/* LEFT LOGO */}
        <div className="flex items-center gap-8 max-sm:flex-col max-sm:gap-4">
          <Image
            src={logo}
            alt="Performance Mentorship Logo"
            className="w-64 h-auto object-contain max-sm:w-40"
          />
        </div>

        {/* RIGHT COPYRIGHT */}
        <p className="text-white text-base max-sm:text-sm max-sm:opacity-80">
          © 2025 Blackboard, Inc.
        </p>
      </div>
    </footer>
  );
}
