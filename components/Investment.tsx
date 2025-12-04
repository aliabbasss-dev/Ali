"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function Investment() {
  return (
    <section className="w-full bg-[#070707] py-20 px-6">
      
      {/* HEADING */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-[#ffc72c] text-3xl md:text-4xl font-bold tracking-wide">
          INVESTMENT
        </h2>
      </div>

      {/* CARDS GRID — SMALLER WIDTH */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT CARD */}
        <div className="bg-[#1e1e1e] rounded-2xl px-7 py-8 flex flex-col">
          
          {/* TITLE (Bigger now) */}
          <h3 className="text-white text-xl md:text-2xl font-medium mb-4">
            Performance Strategy Session
          </h3>

          {/* PRICE (Bigger now) */}
          <p className="text-[#F8C133] text-3xl md:text-4xl font-medium mb-6">
            AED 495
          </p>

          {/* BULLETS */}
          <div className="flex flex-col gap-5 mb-6">
            {[
              "45-minute diagnostic session",
              "30-day execution plan",
              "Skill + communication gap analysis",
              "Eligibility assessment",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <FaCheckCircle className="text-[#F8C133] text-lg" />
                <p className="text-white text-sm md:text-base leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* SMALL NOTE */}
          <p className="text-[#C7C7C7] text-[11px] mb-5 leading-snug">
            This is the only purchasable step until accepted.
          </p>

          {/* BUTTON */}
          <button
            className="
              w-full
              rounded-full
              text-black
              font-semibold
              text-sm md:text-base
              py-3
              bg-[linear-gradient(90deg,#F8C133_0%,#DCA32E_100%)]
              hover:opacity-90
              transition
            "
          >
            Book your Session
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="rounded-2xl overflow-hidden">
          
          {/* YELLOW TOP */}
          <div className="bg-[#F8C133] rounded-t-2xl px-7 py-8">

            {/* TITLE (Bigger now) */}
            <h3 className="text-black text-xl md:text-2xl font-medium mb-4">
              Performance Mentorship
            </h3>

            {/* PRICE (Bigger now) */}
            <p className="text-black text-3xl md:text-4xl font-medium mb-1">
              AED 3,195
              <span className="text-sm md:text-base font-medium">/ Month</span>
            </p>

            {/* BULLETS */}
            <div className="flex flex-col gap-5 mt-6">
              {[
                "Weekly 1:1 sessions (30–45 minutes)",
                "Structured weekly performance plan",
                "Communication + negotiation development",
                "Pipeline and deal strategy",
                "Ongoing support + accountability",
                "Monthly progress evaluation",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <FaCheckCircle className="text-black text-lg" />
                  <p className="text-black text-sm md:text-base leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-5" />
          </div>

          {/* BOTTOM BLACK PANEL (Compact) */}
          <div className="bg-[#1A1A1A] rounded-b-2xl px-7 py-3">
            <p className="text-[#C7C7C7] text-[11px] leading-snug">
              Available only after completing the Strategy Session and being accepted into the program.
            </p>
          </div>
        </div>

      </div>

      {/* FOOTER TEXT */}
      <div className="max-w-3xl mx-auto text-center mt-14">
        <p className="text-[#C7C7C7] text-sm md:text-base leading-relaxed">
          Most agents lose more in missed opportunities than the cost of mentorship.
          Even one additional transaction per quarter typically exceeds the full investment.
        </p>
      </div>

    </section>
  );
}
