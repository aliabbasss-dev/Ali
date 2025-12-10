"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function Investment() {
  return (
    <section className="w-full bg-[#070707] py-20 px-6 max-sm:py-14 max-sm:px-4">
      
      {/* HEADING */}
      <div className="max-w-7xl mx-auto text-center mb-14 max-sm:mb-10">
        <h2 className="text-[#ffc72c] text-3xl md:text-4xl font-bold tracking-wide max-sm:text-2xl">
          INVESTMENT
        </h2>
      </div>

      {/* CARDS GRID */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-sm:gap-5">
        
        {/* LEFT CARD */}
        <div className="bg-[#1e1e1e] rounded-2xl px-7 py-8 flex flex-col max-sm:px-4 max-sm:py-6">
          
          {/* TITLE */}
          <h3 className="text-white text-xl md:text-2xl font-medium mb-4 max-sm:text-lg">
            Performance Strategy Session
          </h3>

          {/* PRICE */}
          <p className="text-[#F8C133] text-3xl md:text-4xl font-medium mb-6 max-sm:text-2xl max-sm:mb-4">
            AED 495
          </p>

          {/* BULLETS */}
          <div className="flex flex-col gap-5 mb-6 max-sm:gap-3 max-sm:mb-4">
            {[
              "45-minute diagnostic session",
              "30-day execution plan",
              "Skill + communication gap analysis",
              "Eligibility assessment",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <FaCheckCircle className="text-[#F8C133] text-lg max-sm:text-base" />
                <p className="text-white text-sm md:text-base leading-snug max-sm:text-xs">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* SMALL NOTE */}
          <p className="text-[#C7C7C7] text-[11px] mb-5 leading-snug max-sm:text-[10px] max-sm:mb-3">
            This is the only purchasable step until accepted.
          </p>

          {/* BUTTON */}
<a
  href="https://calendly.com/owainati/performance-strategy-session"
  target="_blank"
  rel="noopener noreferrer"
  className="
    w-full block text-center rounded-full text-black font-semibold
    text-sm md:text-base py-3 hover:opacity-90 transition
    bg-[linear-gradient(90deg,#F8C133_0%,#DCA32E_100%)]
    max-sm:py-2.5 max-sm:text-sm
  "
>
  Book your Session
</a>

        </div>

        {/* RIGHT CARD */}
        <div className="rounded-2xl overflow-hidden">
          
          {/* YELLOW TOP */}
          <div className="bg-[#F8C133] rounded-t-2xl px-7 py-8 max-sm:px-4 max-sm:py-6">

            {/* TITLE */}
            <h3 className="text-black text-xl md:text-2xl font-medium mb-4 max-sm:text-lg">
              Performance Mentorship
            </h3>

            {/* PRICE */}
            <p className="text-black text-3xl md:text-4xl font-medium mb-1 max-sm:text-2xl">
              AED 3,195
              <span className="text-sm md:text-base font-medium max-sm:text-xs">/ Month</span>
            </p>

            {/* BULLETS */}
            <div className="flex flex-col gap-5 mt-6 max-sm:gap-3 max-sm:mt-4">
              {[
                "Weekly 1:1 sessions (30–45 minutes)",
                "Structured weekly performance plan",
                "Communication + negotiation development",
                "Pipeline and deal strategy",
                "Ongoing support + accountability",
                "Monthly progress evaluation",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <FaCheckCircle className="text-black text-lg max-sm:text-base" />
                  <p className="text-black text-sm md:text-base leading-snug max-sm:text-xs">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-5 max-sm:h-3" />
          </div>

          {/* BOTTOM BLACK PANEL */}
          <div className="bg-[#1A1A1A] rounded-b-2xl px-7 py-3 max-sm:px-4 max-sm:py-2">
            <p className="text-[#C7C7C7] text-[11px] leading-snug max-sm:text-[10px]">
              Available only after completing the Strategy Session and being accepted into the program.
            </p>
          </div>
        </div>

      </div>

      {/* FOOTER TEXT */}
      <div className="max-w-3xl mx-auto text-center mt-14 max-sm:mt-10">
        <p className="text-[#C7C7C7] text-sm md:text-base leading-relaxed max-sm:text-xs max-sm:leading-snug">
          Most agents lose more in missed opportunities than the cost of mentorship.
          Even one additional transaction per quarter typically exceeds the full investment.
        </p>
      </div>

    </section>
  );
}
