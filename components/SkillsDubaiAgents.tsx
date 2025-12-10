"use client";

import { FaMicrophone, FaRocket, FaHandshake, FaUser, FaLightbulb } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function SkillsDubaiAgents() {
  return (
    <section className="w-full bg-[#0B0B0B] py-24 max-sm:py-14 px-6 max-sm:px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-snug mb-4 max-sm:text-2xl max-sm:leading-tight">
          THE SKILLS DUBAI AGENTS MUST <span className="text-[#F8C133]">MASTER TO WIN</span>
        </h2>

        <p className="text-[#C7C7C7] text-base md:text-lg leading-relaxed mb-16 max-w-2xl mx-auto max-sm:text-sm max-sm:leading-tight">
          Most agents focus only on leads and listings. Top performers focus on the skills 
          that actually close deals. Inside the mentorship, you will develop:
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:gap-4 mb-16">

          {/* CARD 1 */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 max-sm:p-4 min-h-[220px] max-sm:min-h-[140px] text-left">
            <FaMicrophone className="text-[#F8C133] text-3xl max-sm:text-xl mb-4" />
            <h3 className="text-white text-2xl max-sm:text-lg font-semibold mb-3">Communication Skills</h3>
            <p className="text-[#C7C7C7] text-sm leading-relaxed max-sm:text-xs max-sm:leading-snug">
              Speak with authority, qualify faster, and influence decisions.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 max-sm:p-4 min-h-[220px] max-sm:min-h-[140px] text-left">
            <FaRocket className="text-[#F8C133] text-3xl max-sm:text-xl mb-4" />
            <h3 className="text-white text-2xl max-sm:text-lg font-semibold mb-3">Performance Mindset</h3>
            <p className="text-[#C7C7C7] text-sm leading-relaxed max-sm:text-xs max-sm:leading-snug">
              Stay composed, focused, and resilient under pressure.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 max-sm:p-4 min-h-[220px] max-sm:min-h-[140px] text-left">
            <FaHandshake className="text-[#F8C133] text-3xl max-sm:text-xl mb-4" />
            <h3 className="text-white text-2xl max-sm:text-lg font-semibold mb-3">Negotiation Strategy</h3>
            <p className="text-[#C7C7C7] text-sm leading-relaxed max-sm:text-xs max-sm:leading-snug">
              Leverage deal psychology to protect price, win trust, and close stronger.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 max-sm:p-4 min-h-[220px] max-sm:min-h-[140px] text-left">
            <FaUser className="text-[#F8C133] text-3xl max-sm:text-xl mb-4" />
            <h3 className="text-white text-2xl max-sm:text-lg font-semibold mb-3">Client Management</h3>
            <p className="text-[#C7C7C7] text-sm leading-relaxed max-sm:text-xs max-sm:leading-snug">
              Set boundaries, control the process, and avoid time-wasters.
            </p>
          </div>

          {/* LOGO MIDDLE */}
          <div className="flex items-center justify-center min-h-[220px] max-sm:min-h-[140px]">
            <div className="text-center">
              <Image 
                src={logo} 
                alt="Performance Mentorship" 
                className="mx-auto mb-4 w-64 max-sm:w-28"
              />
            </div>
          </div>

          {/* CARD 5 */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 max-sm:p-4 min-h-[220px] max-sm:min-h-[140px] text-left">
            <FaLightbulb className="text-[#F8C133] text-3xl max-sm:text-xl mb-4" />
            <h3 className="text-white text-2xl max-sm:text-lg font-semibold mb-3">Daily Execution Discipline</h3>
            <p className="text-[#C7C7C7] text-sm leading-relaxed max-sm:text-xs max-sm:leading-snug">
              The habits and structure that separate closers from quitters.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
