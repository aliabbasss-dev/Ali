"use client";

import {
  FaMicrophone,
  FaRocket,
  FaHandshake,
  FaUser,
  FaLightbulb,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaMicrophone />,
    title: "Communication Skills",
    desc: "Speak with authority, qualify faster, and influence decisions.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Mindset",
    desc: "Stay composed, focused, and resilient under pressure.",
  },
  {
    icon: <FaHandshake />,
    title: "Negotiation Strategy",
    desc: "Leverage deal psychology to protect price, win trust, and close stronger.",
  },
  {
    icon: <FaUser />,
    title: "Client Management",
    desc: "Set boundaries, control the process, and avoid time-wasters.",
  },
  {
    icon: <FaLightbulb />,
    title: "Daily Execution Discipline",
    desc: "The habits and structure that separate closers from quitters.",
  },
];

export default function SkillsDubaiAgents() {
  return (
    <section className="w-full bg-[#0B0B0B] py-24 max-sm:py-16 px-6 max-sm:px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-white text-3xl md:text-4xl leading-tight mb-4">
          THE SKILLS DUBAI AGENTS MUST{" "}
          <span className="text-[#F8C133]">MASTER TO WIN</span>
        </h2>

        <p className="text-[#C7C7C7] text-base md:text-lg leading-relaxed mb-20 max-w-2xl mx-auto max-sm:text-sm max-sm:mb-14">
          Most agents focus only on leads and listings. Top performers focus on the
          skills that actually close deals. Inside the mentorship, you will develop:
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-sm:gap-6">

          {/* TOP ROW */}
          {skills.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="
                bg-[#151515]
                rounded-2xl
                p-6 md:p-8                 /* 🔽 smaller on mobile */
                min-h-[180px] md:min-h-[220px]
                text-left
                transition-all
                hover:-translate-y-1
                hover:shadow-xl hover:shadow-black/40
                border border-white/5
              "
            >
              <div className="text-[#F8C133] text-2xl md:text-3xl mb-4 md:mb-5">
                {item.icon}
              </div>

              <h3 className="text-white text-lg md:text-xl font-semibold mb-2 md:mb-3">
                {item.title}
              </h3>

              <p className="text-[#C7C7C7] text-[13px] md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* BOTTOM ROW */}
          <div className="
            md:col-span-3
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-6 md:gap-8
          ">
            {skills.slice(3).map((item, i) => (
              <div key={i} className="w-full sm:max-w-[340px]">
                <div
                  className="
                    bg-[#151515]
                    rounded-2xl
                    p-6 md:p-8
                    min-h-[180px] md:min-h-[220px]
                    text-left
                    transition-all
                    hover:-translate-y-1
                    hover:shadow-xl hover:shadow-black/40
                    border border-white/5
                  "
                >
                  <div className="text-[#F8C133] text-2xl md:text-3xl mb-4 md:mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2 md:mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[#C7C7C7] text-[13px] md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
