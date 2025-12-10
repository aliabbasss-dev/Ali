"use client";

import Image from "next/image";
import aliImg from "@/public/ali.png";

export default function MeetAliSection() {
  return (
    <section className="w-full bg-[#0F0F0F] py-20 max-sm:py-14 px-6 max-sm:px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 max-sm:gap-8">
        
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-3xl overflow-hidden max-sm:rounded-2xl">
            <Image
              src={aliImg}
              alt="Ali"
              className="
                w-full h-auto object-cover
                max-sm:max-h-[320px]
              "
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="w-full lg:w-1/2 text-white max-sm:text-center lg:text-left">
          <h2
            className="
              text-3xl md:text-4xl font-extrabold leading-snug mb-6
              max-sm:text-2xl max-sm:leading-tight max-sm:mb-4
            "
          >
            <span className="text-[#F8C133]">MEET ALI</span> — FOR AGENTS WHO <br className="max-sm:hidden" />
            WANT RESULTS, NOT MOTIVATION
          </h2>

          <p
            className="
              text-[#C7C7C7] text-base leading-relaxed mb-6
              max-sm:text-sm max-sm:leading-snug max-sm:mb-4 max-sm:max-w-md max-sm:mx-auto
            "
          >
            Ali Owainati brings 20 years of professional experience and a decade in real
            estate across Dubai and Canada. He has closed over AED 500M in residential
            sales, operated on both the brokerage and developer sides, and built
            high-performing sales teams in two competitive markets.
          </p>

          <p
            className="
              text-[#C7C7C7] text-base leading-relaxed
              max-sm:text-sm max-sm:leading-snug max-sm:max-w-md max-sm:mx-auto
            "
          >
            He’s also a Certified Negotiation Expert (CNE), trained in deal psychology,
            communication strategy, and high-stakes decision-making. Ali’s approach is
            direct and grounded — no hype, no vague motivation, just practical,
            sales-focused guidance. His mentorship blends structure, clarity,
            communication mastery, and negotiation fundamentals to help agents operate with
            confidence, discipline, and results they can actually measure.
          </p>
        </div>
      </div>
    </section>
  );
}
