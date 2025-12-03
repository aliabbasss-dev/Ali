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
  {
    icon: FaCalendarAlt,
    text: "No weekly structure \nor discipline",
  },
  {
    icon: FaArrowDown,
    text: "Inconsistent \nprospecting",
  },
  {
    icon: FaHourglassHalf,
    text: "Time wasted on \nunqualified leads",
  },
  {
    icon: FaQuestionCircle,
    text: "Poor qualification and \nweak messaging",
  },
  {
    icon: FaMap,
    text: "No system for \npipeline growth",
  },
  {
    icon: FaCloud,
    text: "Unstructured \nfollow-up",
  },
  {
    icon: FaFireAlt,
    text: "Burnout and loss \nof enthusiasm",
  },
  {
    icon: FaRunning,
    text: "Chasing shortcuts instead \nof fundamentals",
  },
  {
    icon: FaExclamationTriangle,
    text: "No mentor to keep them \naccountable",
  },
];

export default function WhyDubaiAgentsFail() {
  return (
    <section className="w-full bg-[#0B0B0B] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-snug mb-12">
          WHY MOST <span className="text-[#F8C133]">DUBAI AGENTS</span> FAIL
          <br />
          BEFORE THEY EVEN BEGIN
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  bg-[#1A1A1A] rounded-xl px-6 py-5
                  flex items-center gap-4
                "
              >
                <Icon className="text-[#F8C133] text-2xl" />
                <p className="text-white text-sm font-medium leading-snug whitespace-pre-line">
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
