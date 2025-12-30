"use client";

import {
  FaCalendarAlt,
  FaQuestionCircle,
  FaFireAlt,
  FaArrowDown,
  FaMap,
  FaRunning,
  FaHourglassHalf,
  FaCloud,
  FaExclamationTriangle,
} from "react-icons/fa";

const reasons = [
  { icon: FaCalendarAlt, text: "Lacking structure or discipline" },
  { icon: FaArrowDown, text: "Inconsistent prospecting" },
  { icon: FaHourglassHalf, text: "Time wasted on unqualified leads" },
  { icon: FaQuestionCircle, text: "Poor vetting and messaging" },
  { icon: FaMap, text: "No system for pipeline growth" },
  { icon: FaCloud, text: "Unstructured follow-up" },
  { icon: FaFireAlt, text: "Burnout and loss of enthusiasm" },
  { icon: FaRunning, text: "Shortcuts over fundamentals" },
  { icon: FaExclamationTriangle, text: "No mentor to keep them accountable" },
];

export default function WhyDubaiAgentsFail() {
  return (
    <section className="w-full bg-[#0B0B0B] py-20 px-2 mt-20 max-sm:py-14 max-sm:mt-10">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl  leading-snug mb-12 max-sm:text-2xl max-sm:mb-8">
          WHY MOST <span className="text-[#F8C133]">DUBAI AGENTS </span> FAIL
           BEFORE THEY EVEN BEGIN
        </h2>

        {/* GRID — MOBILE = 2 COLUMNS */}
        <div className="grid max-sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4 max-sm:gap-3">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="
                  bg-[#1e1e1e] rounded-xl 
                  px-8 py-7 flex items-start gap-10

                  /* MOBILE TIGHTER SPACING */
                  max-sm:px-3 max-sm:py-3 
                  max-sm:gap-3
                "
              >
                {/* ICON */}
                <div className="bg-[#000000] rounded-lg p-1 flex items-center justify-center w-12 h-12 max-sm:w-8 max-sm:h-8">
                  <Icon className="text-[#F8C133] text-2xl max-sm:text-lg" />
                </div>

                {/* TEXT */}
                <p
                  className="
                    text-white text-base font-medium leading-snug
                    max-sm:text-xs max-sm:leading-tight max-sm:text-left
                  "
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
