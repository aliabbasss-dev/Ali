"use client";

import Image from "next/image";
import aliImg from "@/public/ali.png"; // update this path to your actual image

export default function MeetAliSection() {

  return (
    <section className="w-full bg-[#0F0F0F] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src={aliImg}
              alt="Ali"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-6">
            <span className="text-[#F8C133]">MEET ALI</span> — FOR AGENTS WHO <br />
            WANT RESULTS, NOT MOTIVATION
          </h2>

          <p className="text-[#C7C7C7] text-base leading-relaxed mb-6">
            Ali Owainati brings 20 years of professional experience and a decade in real
            estate across Dubai and Canada. He has closed over AED 500M in residential
            sales, operated on both the brokerage and developer sides, and built
            high-performing sales teams in two competitive markets.
          </p>

          <p className="text-[#C7C7C7] text-base leading-relaxed">
            He’s also a Certified Negotiation Expert (CNE), trained in deal psychology,
            communication strategy, and high-stakes decision-making. Ali’s approach is
            direct and grounded — no hype, no vague motivation, just practical,
            sales-focused guidance built on real experience. His mentorship blends structure,
            clarity, communication mastery, and negotiation fundamentals to help agents
            operate with confidence, discipline, and results they can actually measure.
          </p>
        </div>
      </div>
    </section>
  );
}
