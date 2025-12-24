"use client";

import Image from "next/image";
import buildingDesktop from "@/public/building.png";
import buildingMobile from "@/public/mbk.png";

export default function UpgradeCTA() {
  return (
    <section className="w-full bg-[#0B0B0B] py-40 max-sm:py-20 px-6 max-sm:px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* CARD */}
        <div
          className="
            relative rounded-3xl overflow-hidden 
            py-40 px-10 flex items-center justify-start
            shadow-[0_0_80px_rgba(0,0,0,0.7)] drop-shadow-xl
            max-sm:py-20 max-sm:px-5
          "
        >

          {/* DESKTOP BACKGROUND IMAGE */}
          <div className="absolute inset-0 hidden sm:block">
            <Image
              src={buildingDesktop}
              alt="Building desktop"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* MOBILE BACKGROUND IMAGE */}
          <div className="absolute inset-0 block sm:hidden">
            <Image
              src={buildingMobile}
              alt="Building mobile"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* TEXT */}
          <div className="relative z-10 max-w-xl max-sm:max-w-sm">
            <h2
              className="
                text-white text-3xl md:text-4xl font-medium leading-snug mb-6
                max-sm:text-2xl max-sm:leading-tight max-sm:mb-4
              "
            >
              READY TO UPGRADE YOUR <br />
              REAL ESTATE <span className="text-[#F8C133]">PERFORMANCE?</span>
            </h2>

            <a
              href="https://calendly.com/owainati/performance-strategy-session"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-[#F8C133] text-black font-medium rounded-full 
                px-8 py-4 mt-4 text-base hover:opacity-90 transition
                max-sm:px-6 max-sm:py-3 max-sm:text-sm max-sm:mt-3
                inline-block
              "
            >
              Book Your Performance Strategy Session
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
