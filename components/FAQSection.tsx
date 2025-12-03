"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQSection(){
  const faqs = [
    {
      q: "What happens after I pay?",
      a: "You'll be redirected to schedule your Strategy Session through Calendly.",
    },
    {
      q: "What if I don’t qualify?",
      a: "If you don’t qualify, you will not be accepted into the mentorship—no hard feelings.",
    },
    {
      q: "How many agents do you accept?",
      a: "I only accept a limited number of agents at a time to maintain quality and focus.",
    },
    {
      q: "Can beginners join?",
      a: "Yes, as long as they meet the criteria for discipline and long-term commitment.",
    },
    {
      q: "What if I’m already doing 1–2 deals a quarter?",
      a: "The mentorship can help you scale to consistent, predictable deal flow monthly.",
    },
    {
      q: "How does the referral program work?",
      a: "You and the referred agent each get a bonus tactical performance session worth AED 800.",
    },
    {
      q: "What if I need to reschedule?",
      a: "You may reschedule with advance notice according to the session guidelines.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#0B0B0B] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* LEFT TITLE */}
        <div>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-snug mb-2">
            FREQUENTLY ASKED
          </h2>
          <h2 className="text-[#F8C133] text-3xl md:text-4xl font-extrabold leading-snug">
            QUESTIONS
          </h2>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="flex flex-col gap-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A1A] rounded-xl px-6 py-4 cursor-pointer select-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex items-center justify-between">
                <p className="text-white text-base font-medium">{item.q}</p>
                <FaChevronDown
                  className={`text-white text-sm transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openIndex === idx && (
                <p className="text-[#C7C7C7] text-sm leading-relaxed mt-3">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
