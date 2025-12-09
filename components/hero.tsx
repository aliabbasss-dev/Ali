"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full text-white overflow-hidden">

      {/* HERO WRAPPER WITH BACKGROUND */}
      <div className="relative w-full pb-32 sm:pb-40 lg:pb-48">

        {/* FULL HERO SKYLINE BACKGROUND */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/herobg.png"
            alt="Dubai Skyline"
            fill
            className="object-cover object-bottom opacity-100"
          />
        </div>

        {/* MAIN HERO CONTENT */}
        <div className="max-w-7xl mx-auto mt-10 px-5 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6 sm:space-y-8">
              <h1
                className="
                  font-bold leading-tight
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                "
              >
                BECOME A HIGH-PERFORMING DUBAI <br />
                <span className="text-[#E3A721]">
                  REAL ESTATE AGENT IN 90 DAYS
                </span>
              </h1>

              <p
                className="
                  text-gray-300 leading-relaxed
                  text-sm sm:text-base md:text-lg
                  max-w-xs sm:max-w-sm md:max-w-md
                "
              >
                Elite 1:1 Performance Mentorship for agents who want clarity,
                consistency, and a strong pipeline they can rely on.
              </p>

              {/* BUTTON */}
              <button
                className="
                  px-8 sm:px-10
                  py-3 sm:py-4
                  rounded-full
                  text-sm sm:text-base font-semibold
                  bg-gradient-to-r from-[#E3A721] to-[#FFCC47]
                  text-black shadow-md
                  hover:brightness-110 transition-all
                "
              >
                Book Your Performance Strategy Session
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full flex justify-center lg:justify-end overflow-visible z-30">

              <Image
                src="/Ali1.png"
                alt="Mentor"
                width={760}
                height={1100}
                priority
                className="
                  object-contain z-30
                  w-[280px] -mb-20
                  sm:w-[300px] sm:-mb-16
                  md:w-[420px] md:-mb-24
                  lg:w-[520px] lg:-mb-32
                  xl:w-[620px] xl:-mb-40
                  2xl:w-[720px] 2xl:-mb-48
                "
              />
            </div>

          </div>
        </div>
      </div>

      {/* GOLD STRIP (NOW VISIBLE) */}
      <div className="w-full bg-[#E3A721] py-6 sm:py-8 px-4 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <p
            className="
              text-black font-medium italic leading-relaxed
              text-lg sm:text-xl lg:text-2xl
            "
          >
            Clarity, structure, and performance coaching designed <br />
            to help you close more deals with better clients
          </p>
        </div>
      </div>

    </section>
  );
}
