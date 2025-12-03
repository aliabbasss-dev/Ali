"use client";

import { FaStar } from "react-icons/fa";

export default function StrategySession(){
  return (
    <section className="w-full bg-[#0B0B0B] py-24 px-6">
      <div className="max-w-7xl mx-auto bg-[#111111] rounded-3xl p-10 md:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT SIDE LIST */}
          <div>
            {/* Yellow header */}
            <div className="bg-[#F8C133] rounded-xl px-6 py-4 inline-block mb-6">
              <p className="text-black text-base font-medium">
                During this 45-minute session, you will:
              </p>
            </div>

            {/* LIST */}
            <div className="flex flex-col gap-4">
              {[
                "Build a clear performance plan for the next 30 days",
                "Identify what’s holding you back",
                "Pinpoint your skill gaps",
                "Fix time leaks and low-ROI habits",
                "Get a personalized pipeline roadmap",
                "Identify communication and negotiation gaps",
                "Determine your eligibility for the mentorship",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#1A1A1A] rounded-xl px-6 py-4 flex items-center justify-between"
                >
                  <p className="text-white text-base leading-relaxed">{item}</p>
                  <FaStar className="text-[#F8C133] text-lg" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE TEXT */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-4">
              THE PERFORMANCE <br />
              <span className="text-[#F8C133]">STRATEGY SESSION</span>
            </h2>

            <p className="text-[#C7C7C7] text-base leading-relaxed mb-6 max-w-md">
              Your path into the mentorship begins with the Performance Strategy Session.
            </p>

            <p className="text-[#C7C7C7] text-base leading-relaxed mb-10 max-w-md">
              Even if you never join the mentorship, the clarity, performance
              plan, and direction you gain in this session often prevent weeks
              of wasted time and missed opportunities worth far more than
              the AED 495 investment.
            </p>

            {/* BUTTON */}
            <button className="bg-[#F8C133] text-black font-semibold rounded-full px-8 py-4 text-base hover:opacity-90 transition">
              Book Your Performance Strategy Session
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
