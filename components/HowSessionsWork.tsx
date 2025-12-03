"use client";

import {
  FaWifi,
  FaMicrophoneSlash,
  FaCamera,
  FaStopwatch,
  FaBookOpen,
  FaLightbulb,
} from "react-icons/fa";

export default function HowSessionsWork() {
  return (
    <section className="w-full bg-[#0B0B0B] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-snug mb-2">
          HOW OUR <span className="text-[#F8C133]">SESSIONS</span> WORK
        </h2>

        <p className="text-[#C7C7C7] text-base leading-relaxed mb-14">
          To get maximum value from each session, I expect:
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

          {/* 1 */}
          <div className="bg-[#1A1A1A] rounded-xl px-6 py-5 flex items-center gap-4">
            <FaWifi className="text-[#F8C133] text-2xl" />
            <p className="text-white text-base font-medium">Stable internet connection</p>
          </div>

          {/* 2 */}
          <div className="bg-[#1A1A1A] rounded-xl px-6 py-5 flex items-center gap-4">
            <FaMicrophoneSlash className="text-[#F8C133] text-2xl" />
            <p className="text-white text-base font-medium">Distraction-free environment</p>
          </div>

          {/* 3 */}
          <div className="bg-[#1A1A1A] rounded-xl px-6 py-5 flex items-center gap-4">
            <FaCamera className="text-[#F8C133] text-2xl" />
            <p className="text-white text-base font-medium">Camera on</p>
          </div>

          {/* 4 */}
          <div className="bg-[#1A1A1A] rounded-xl px-6 py-5 flex items-center gap-4">
            <FaStopwatch className="text-[#F8C133] text-2xl" />
            <p className="text-white text-base font-medium">On time and prepared</p>
          </div>

          {/* 5 */}
          <div className="bg-[#1A1A1A] rounded-xl px-6 py-5 flex items-center gap-4">
            <FaBookOpen className="text-[#F8C133] text-2xl" />
            <p className="text-white text-base font-medium">Notes ready</p>
          </div>

          {/* 6 */}
          <div className="bg-[#1A1A1A] rounded-xl px-6 py-5 flex items-center gap-4">
            <FaLightbulb className="text-[#F8C133] text-2xl" />
            <p className="text-white text-base font-medium">Openness to direct feedback</p>
          </div>
        </div>

        {/* FOOTER TEXT */}
        <p className="text-[#C7C7C7] text-base leading-relaxed">
          These standards ensure we operate at a professional, high-performance level.
        </p>

      </div>
    </section>
  );
}
