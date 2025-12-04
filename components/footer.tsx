"use client";

import Image from "next/image";
import logo from "@/public/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0B0B] py-32 px-6 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LEFT LOGO + TEXT */}
        <div className="flex items-center gap-8">
          <Image
            src={logo}
            alt="Performance Mentorship Logo"
            className="w-64 h-auto object-contain"
          />
          <div>
          </div>
        </div>

        {/* RIGHT COPYRIGHT */}
        <p className="text-white text-base">
          © 2025 Blackboard, Inc.
        </p>
      </div>
    </footer>
  );
}
