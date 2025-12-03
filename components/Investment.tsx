"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function Investment(){
  return (
    <section className="w-full bg-[#070707] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold">
          INVESTMENT
        </h2>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT CARD */}
        <div className="bg-[#1A1A1A] rounded-3xl p-10 text-left">
          <h3 className="text-white text-2xl font-bold mb-6">
            Performance Strategy Session
          </h3>

          <p className="text-[#F8C133] text-4xl font-extrabold mb-8">
            AED 495
          </p>

          <div className="flex flex-col gap-4 mb-10">
            {[
              "45-minute diagnostic session",
              "30-day execution plan",
              "Skill + communication gap analysis",
              "Eligibility assessment",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <FaCheckCircle className="text-[#F8C133] text-xl" />
                <p className="text-white text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-[#C7C7C7] text-xs mb-6">
            This is the only purchasable step until accepted.
          </p>

          <button className="bg-[#F8C133] text-black font-semibold rounded-full px-8 py-4 text-base w-full hover:opacity-90 transition">
            Book your Session
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#F8C133] rounded-3xl p-10 text-left relative overflow-hidden">
          <h3 className="text-black text-2xl font-bold mb-6">
            Performance Mentorship
          </h3>

          <p className="text-black text-4xl font-extrabold mb-1">
            AED 3,195<span className="text-lg font-medium">/ Month</span>
          </p>

          <div className="flex flex-col gap-4 mt-8 mb-14">
            {[
              "Weekly 1:1 sessions (30–45 minutes)",
              "Structured weekly performance plan",
              "Communication + negotiation development",
              "Pipeline and deal strategy",
              "Ongoing support + accountability",
              "Monthly progress evaluation",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <FaCheckCircle className="text-black text-xl" />
                <p className="text-black text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1A1A1A] rounded-b-3xl -mx-10 px-10 py-4">
            <p className="text-[#C7C7C7] text-xs">
              Available only after completing the Strategy
              Session and being accepted into the program.
            </p>
          </div>
        </div>

      </div>

      {/* FOOTER TEXT */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <p className="text-[#C7C7C7] text-base leading-relaxed">
          Most agents lose more in missed opportunities than the cost of mentorship. 
          Even one additional transaction per quarter typically exceeds the full investment. 
          This program is designed to help serious agents operate at a level where consistent 
          deals — and higher commissions — become predictable outcomes.
        </p>
      </div>
    </section>
  );
}
