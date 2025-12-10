"use client";

import Image from "next/image";
import building from "@/public/building.png";

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

            /* MOBILE FIX */
            max-sm:py-20 max-sm:px-5
          "
        >

          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">
            <Image
              src={building}
              alt="Building"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* TEXT */}
          <div className="relative z-10 max-w-xl max-sm:max-w-sm">
            <h2 className="
              text-white text-3xl md:text-4xl font-medium leading-snug mb-6
              max-sm:text-2xl max-sm:leading-tight max-sm:mb-4
            ">
              READY TO UPGRADE YOUR <br />
              REAL ESTATE <span className="text-[#F8C133]">PERFORMANCE?</span>
            </h2>

            <button
              className="
                bg-[#F8C133] text-black font-medium rounded-full 
                px-8 py-4 mt-4 text-base hover:opacity-90 transition

                /* MOBILE SIZE */
                max-sm:px-6 max-sm:py-3 max-sm:text-sm max-sm:mt-3
              "
            >
              Book Your Performance Strategy Session
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
