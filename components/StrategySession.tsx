"use client";

import { FaStar } from "react-icons/fa";

export default function StrategySession(){
  return (
    <section className="w-full bg-[#0B0B0B] py-24 px-6">
      <div className="max-w-7xl mx-auto bg-[#1e1e1e] rounded-3xl p-10 md:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT SIDE LIST */}
<div>
  {/* Yellow header (full width + taller) */}
  <div className="bg-[#F8C133] rounded-xl px-6 py-5 mb-6 w-full">
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
        className="bg-[#121212] rounded-xl px-6 py-4 flex items-center justify-between"
      >
        <p className="text-white text-base leading-relaxed">
          {item}
        </p>

        <img
          src="/Star.png"
          alt="star"
          className="w-5 h-5 object-contain"
        />
      </div>
    ))}
  </div>
</div>


          {/* RIGHT SIDE TEXT */}

<div className="text-white max-w-md">

  {/* HEADING */}
  <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-15">
    THE PERFORMANCE <br />
    <span className="text-[#F8C133]">STRATEGY SESSION</span>
  </h1>

  {/* PARA 1 */}
  <p className="text-white text-base leading-relaxed mb-25">
    Your path into the mentorship begins with the Performance Strategy Session.
  </p>

  {/* PARA 2 */}
  <p className="text-white text-base leading-relaxed mb-30">
    Even if you never join the mentorship, the clarity, performance plan, and
    direction you gain in this session often prevent weeks of wasted time and
    missed opportunities worth far more than the AED 495 investment.
  </p>

  {/* FULL-WIDTH GRADIENT BUTTON */}
  <button
    className="
      w-full
      rounded-full
      text-black 
      font-semibold
      text-base
      py-4
      hover:opacity-90 
      transition
      bg-[linear-gradient(90deg,#F8C133_0%,#DCA32E_100%)]
      shadow-[0px_4px_10px_rgba(0,0,0,0.25)]
    "
  >
    Book Your Performance Strategy Session
  </button>
</div>


        </div>
      </div>
    </section>
  );
}
