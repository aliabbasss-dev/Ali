"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full text-white overflow-hidden min-h-[750px] lg:min-h-[900px]">
      
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-24 lg:py-32 mt-30 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-10">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
              BECOME A HIGH-PERFORMING DUBAI <br />
              <span className="text-[#E3A721]">REAL ESTATE AGENT IN 90 DAYS</span>
            </h1>

            <p className="text-gray-300 max-w-lg text-sm sm:text-base leading-relaxed">
              Elite 1:1 Performance Mentorship for agents who want clarity, consistency,
              and a strong pipeline they can rely on.
            </p>

<button
  className="
    px-10 py-4 rounded-full text-base font-semibold
    bg-gradient-to-r from-[#E3A721] to-[#FFCC47]
    text-black shadow-md hover:brightness-110 transition-all
  "
>
  Book Your Performance Strategy Session
</button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full flex justify-center scale-110 lg:justify-end overflow-visible">
            <Image
              src="/Ali1.png"
              alt="Mentor"
              width={760}
              height={1100}
              priority
              className="
                object-contain 
                z-30 
                lg:-mb-70
                -mb-55
              "
            />
          </div>

        </div>
      </div>

      {/* SKYLINE BACKGROUND */}
      <div className="absolute bottom-36 left-0 w-full z-10">
        <Image
          src="/herobg.png"
          alt="Dubai Skyline"
          width={1600}
          height={800}
          className="w-full object-cover opacity-80"
        />
      </div>

      {/* ORANGE-GOLD BOTTOM STRIP */}
      <div className="w-full bg-[#E3A721] py-8 mt-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
<p className="text-black text-2xl sm:text-xl italic font-medium leading-relaxed">
  Clarity, structure, and performance coaching designed<br />
  to help you close more deals with better clients
</p>

        </div>
      </div>

    </section>
  );
}
