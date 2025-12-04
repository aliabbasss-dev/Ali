"use client";

import Image from "next/image";
import building from "@/public/building.png";

export default function UpgradeCTA() {
  return (
    <section className="w-full bg-[#0B0B0B] py-40 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* CARD */}
        <div
          className="
            relative
            rounded-3xl
            overflow-hidden
            py-40 px-10
            flex items-center
            justify-start
rounded-3xl
            /* 🔥 SHADOW ADDED */
            shadow-[0_0_80px_rgba(0,0,0,0.7)]
            drop-shadow-xl
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

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* LEFT TEXT BLOCK */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-white text-3xl md:text-4xl font-medium leading-snug mb-6">
              READY TO UPGRADE YOUR <br />
              REAL ESTATE <span className="text-[#F8C133]">PERFORMANCE?</span>
            </h2>

            <button className="bg-[#F8C133] text-black font-medium rounded-full px-8 py-4 mt-4 text-base hover:opacity-90 transition">
              Book Your Performance Strategy Session
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
