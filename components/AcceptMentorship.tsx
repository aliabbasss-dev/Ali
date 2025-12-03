"use client";

import { FaStar } from "react-icons/fa";

export default function AcceptMentorship(){
  return (
    <section className="w-full bg-[#0B0B0B] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-snug mb-2">
            WHO I ACCEPT INTO <br />
            THE <span className="text-[#F8C133]">MENTORSHIP</span> <br />
            (AND WHO I DON’T)
          </h2>

          <p className="text-[#C7C7C7] text-base leading-relaxed mb-10 max-w-md">
            I work with a limited number of agents at a time 
            to maintain quality and focus.
          </p>

          {/* YELLOW BOX */}
          <div className="bg-[#F8C133] rounded-xl px-6 py-4 inline-block">
            <p className="text-black italic text-base font-medium">
              This mentorship is for agents who are:
            </p>
          </div>
        </div>

        {/* RIGHT LIST */}
        <div className="flex flex-col gap-4">
          {[
            "Serious about a long-term real estate career in Dubai",
            "Coachable, focused, and open to feedback",
            "Ready to follow a structured weekly plan",
            "Consistent and disciplined",
            "Professional in communication",
            "Emotionally stable and able to execute",
            "Committed to building a real pipeline instead of chasing shortcuts",
          ].map((text, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A1A] rounded-xl px-6 py-4 flex items-center justify-between"
            >
              <p className="text-white text-base leading-relaxed">{text}</p>
              <FaStar className="text-[#F8C133] text-lg" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
