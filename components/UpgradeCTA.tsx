"use client";

import Image from "next/image";
import building from "@/public/building.png"; // replace with your actual image

export default function UpgradeCTA(){
  return (
    <section className="w-full bg-[#0B0B0B] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* CARD */}
        <div className="bg-[#111111] rounded-3xl px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* LEFT TEXT BLOCK */}
          <div className="flex-1 text-left">
            <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-snug mb-6">
              READY TO UPGRADE YOUR <br />
              REAL ESTATE <span className="text-[#F8C133]">PERFORMANCE?</span>
            </h2>

            <button className="bg-[#F8C133] text-black font-semibold rounded-full px-8 py-4 text-base hover:opacity-90 transition">
              Book Your Performance Strategy Session
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1">
            <Image
              src={building}
              alt="Building"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
