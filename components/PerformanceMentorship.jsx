"use client";

import { FaStar } from "react-icons/fa";

export default function PerformanceMentorship() {
  return (
    <section className="w-full bg-[#0F0F0F] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-snug mb-2">
            THE PERFORMANCE
          </h2>

          <h2 className="text-[#F8C133] text-3xl md:text-4xl font-extrabold leading-snug mb-6">
            MENTORSHIP.
          </h2>

          <p className="text-[#C7C7C7] text-base leading-relaxed mb-8 max-w-lg">
            A structured, high-accountability mentorship program designed to turn 
            serious agents into consistent performers.
          </p>

          <p className="text-[#F8C133] text-base italic leading-relaxed max-w-lg">
            The mentorship runs month-to-month. You stay as long as you’re 
            getting value
          </p>
        </div>

        {/* RIGHT LIST */}
        <div className="flex flex-col gap-4">
          {[
            "Weekly 1:1 performance sessions",
            "Clear weekly execution plan",
            "Daily structure and accountability",
            "Pipeline building + deal strategy",
            "High-quality client qualification",
            "Performance mindset development",
            "Communication, influence, and negotiation skills",
            "Fundamentals proven across international markets",
          ].map((text, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FaStar className="text-[#F8C133] text-lg mt-1" />
              <p className="text-white text-base leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
