"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#0f0f0f] text-white overflow-hidden">
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              BECOME A HIGH-PERFORMING DUBAI <br />
              <span className="text-[#E3A721]">REAL ESTATE AGENT IN 90 DAYS</span>
            </h1>

            <p className="text-gray-300 max-w-lg text-sm sm:text-base leading-relaxed">
              Elite 1:1 Performance Mentorship for agents who want clarity, consistency,
              and a strong pipeline they can rely on.
            </p>

            <button
              className="
                px-6 py-3 rounded-full text-sm font-medium
                bg-gradient-to-r from-[#E3A721] to-[#FFCC47]
                text-black shadow-md hover:opacity-90 transition-all
              "
            >
              Book Your Performance Strategy Session
            </button>
          </div>

          {/* RIGHT IMAGE (MAN) */}
          {/* RIGHT IMAGE (MAN) */}
<div className="relative w-full flex justify-center lg:justify-end overflow-visible">
  <Image
    src="/Ali1.png"
    alt="Mentor"
    width={650}
    height={900}
    priority
    className="
      object-contain 
      z-30 
      lg:-mb-32     /* Pull image down to touch yellow strip */
      -mb-20        /* Mobile version */
    "
  />
</div>

        </div>
      </div>

      {/* SKYLINE BACKGROUND (BOTTOM FADE) */}
      <div className="absolute bottom-24 left-0 w-full z-10">
        <Image
          src="/herobg.png" // ← Replace with actual skyline image
          alt="Dubai Skyline"
          width={1600}
          height={400}
          className="w-full object-cover opacity-80"
        />
      </div>

      {/* ORANGE-GOLD BOTTOM STRIP */}
      <div className="w-full bg-[#E3A721] py-6 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-black text-sm sm:text-base font-medium leading-relaxed">
            Clarity, structure, and performance coaching designed<br />
            to help you close more deals with better clients
          </p>
        </div>
      </div>

      {/* DARK FADE OVERLAY */}
      <div className="absolute inset-0 bg-yellow pointer-events-none"></div>
    </section>
  );
}
