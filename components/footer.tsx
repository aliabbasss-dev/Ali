"use client";

import Image from "next/image";
import logo from "@/public/logo.png"; // replace with your actual logo

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0B0B] py-12 px-6 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LEFT LOGO + TEXT */}
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt="Performance Mentorship Logo"
            className="w-14 h-auto object-contain"
          />
          <div>
            <p className="text-[#F8C133] text-sm tracking-wider font-semibold">
              PERFORMANCE
            </p>
            <p className="text-[#F8C133] text-sm tracking-wider font-semibold">
              MENTORSHIP
            </p>
          </div>
        </div>

        {/* RIGHT COPYRIGHT */}
        <p className="text-[#C7C7C7] text-xs">© 2025 Blackboard, Inc.</p>
      </div>
    </footer>
  );
}
