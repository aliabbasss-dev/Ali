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
    <section className="w-full bg-[#0B0B0B] py-24 max-sm:py-14 px-6 max-sm:px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-white text-3xl md:text-4xl leading-snug mb-2 max-sm:text-2xl max-sm:leading-tight">
          HOW OUR <span className="text-[#F8C133]">SESSIONS</span> WORK
        </h2>

        <p className="text-[#C7C7C7] text-base leading-relaxed mb-14 max-sm:text-sm max-sm:mb-8">
          To get maximum value from each session, I expect:
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:gap-4 mb-16 max-sm:mb-10">

          {[
            { icon: FaWifi, text: "Stable internet connection" },
            { icon: FaMicrophoneSlash, text: "Distraction-free environment" },
            { icon: FaCamera, text: "Camera on" },
            { icon: FaStopwatch, text: "On time and prepared" },
            { icon: FaBookOpen, text: "Notes ready" },
            { icon: FaLightbulb, text: "Openness to direct feedback" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="
                  bg-[#1e1e1e] rounded-xl 
                  px-8 py-6 flex items-center gap-5
                  max-sm:px-4 max-sm:py-4 max-sm:gap-3
                "
              >
                {/* ICON WRAPPER */}
                <div className="
                  w-12 h-12 flex items-center justify-center bg-black rounded-full
                  max-sm:w-9 max-sm:h-9
                ">
                  <Icon className="text-[#F8C133] text-xl max-sm:text-lg" />
                </div>

                {/* TEXT */}
                <p className="
                  text-white text-lg font-medium leading-snug
                  max-sm:text-sm max-sm:leading-snug
                ">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* FOOTER TEXT */}
        <p className="text-[#C7C7C7] text-base md:text-lg font-medium leading-relaxed max-sm:text-sm max-sm:leading-tight">
          These standards ensure we operate at a professional, high-performance level.
        </p>

      </div>
    </section>
  );
}
