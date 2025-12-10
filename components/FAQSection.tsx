"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQSection() {
  const allFaqs = [
    { q: "What is the Performance Strategy Session?", a: "A 45-minute 1:1 diagnostic call where we identify your challenges, skill gaps, and build a clear 30-day action plan. It’s not a sales pitch — it’s real value." },
    { q: "Why is it paid?", a: "To ensure commitment, avoid no-shows, and keep the session focused on real strategy, not hype." },
    { q: "What if I don’t qualify for the mentorship?", a: "You still get the full diagnostic and a complete 30-day plan. You can reapply later once you’ve implemented it." },
    { q: "Is this only for new agents?", a: "No. Many agents doing 1–2 deals a quarter join because they need structure, consistency, and better communication skills." },
    { q: "I’m brand new. Can I still join?", a: "Yes — if you’re serious and coachable. You’ll learn the fundamentals most agents never build." },
    { q: "How is this different from other “coaches” in Dubai?", a: "No hype, no vague motivation. This is practical, execution-focused guidance backed by 20 years of real experience and AED 500M in closed sales." },
    { q: "Will this help me get more leads?", a: "Yes — by building a proper pipeline, qualifying correctly, and executing consistently. No shortcuts or gimmicks." },
    { q: "Do you cover mindset?", a: "Yes — but framed as performance mindset — discipline, clarity, communication, and decision-making. Not motivation." },
    { q: "How long are the sessions?", a: "30–45 minutes, depending on progress and focus for that week." },
    { q: "What results can I expect?", a: "Better qualification, stronger communication, improved consistency, and more predictable deal flow — if you execute." },
    { q: "Is there a contract?", a: "No. It’s month-to-month. Stay only if you’re getting value." },
    { q: "Can I pause or cancel?", a: "Yes — anytime before your next billing cycle." },
    { q: "What if I need to reschedule?", a: "No problem with a minimum 6-hour notice." },
    { q: "How many agents do you work with?", a: "A limited number to maintain quality and focus." },
    { q: "I'm not confident — is this for me?", a: "Yes. Confidence comes from structure, communication skills, and repetition — not experience alone." },
    { q: "I've done training before. How is this different?", a: "Most training is generic. This is weekly, real-time guidance tailored to the Dubai market." },
    { q: "Do I get support between sessions?", a: "Yes — for quick questions or tactical adjustments." },
    { q: "Will you help with negotiation?", a: "Yes — these are core parts of the program, rooted in deal psychology and behavioral communication." },
    { q: "Is there a refund policy?", a: "The Strategy Session is non-refundable. Mentorship renewals can be cancelled anytime before the next billing cycle." },
    { q: "How do I know if this is right for me?", a: "If you want structure, clarity, consistency, and real results — it's right." },
    { q: "What if I can’t afford it?", a: "One additional deal per quarter normally exceeds the entire cost." },
    { q: "Can I apply again if I don’t qualify?", a: "Yes — once you’ve implemented your initial 30-day plan." },
    { q: "How does the referral program work?", a: "If someone you refer joins, both of you get a free AED 800 tactical session." },
    { q: "Will this help with burnout?", a: "Yes — structure and clarity reduce overwhelm and help you focus only on what matters." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showMore, setShowMore] = useState(false);

  const firstFive = allFaqs.slice(0, 5);
  const remainingFaqs = allFaqs.slice(5);

  return (
    <section className="w-full bg-[#0B0B0B] py-24 px-6 max-sm:px-4">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 text-center">
          FREQUENTLY ASKED <span className="text-[#F8C133]">QUESTIONS</span>
        </h2>

        <div className="flex flex-col gap-3">

          {/* Show first 5 always */}
          {firstFive.map((item, idx) => (
            <FAQItem
              key={idx}
              item={item}
              idx={idx}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}

          {/* Show More button */}
          {!showMore && (
            <button
              className="text-[#F8C133] font-medium underline mt-3 text-sm w-fit mx-auto"
              onClick={() => setShowMore(true)}
            >
              View More
            </button>
          )}

          {/* Remaining FAQs only appear AFTER View More */}
          {showMore && (
            <>
              {remainingFaqs.map((item, idx) => (
                <FAQItem
                  key={idx + 100}
                  item={item}
                  idx={idx + 100}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))}

              {/* View Less ALWAYS comes at bottom */}
              <button
                className="text-[#F8C133] font-medium underline mt-3 text-sm w-fit mx-auto"
                onClick={() => {
                  setShowMore(false);
                  setOpenIndex(null);
                }}
              >
                View Less
              </button>
            </>
          )}

        </div>
      </div>
    </section>
  );
}

// Reusable FAQ Component
function FAQItem({ item, idx, openIndex, setOpenIndex }: any) {
  return (
    <div
      className="bg-[#1A1A1A] rounded-xl px-6 py-5 cursor-pointer"
      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
    >
      <div className="flex justify-between items-center">
        <p className="text-white text-base md:text-lg font-medium">{item.q}</p>
        <FaChevronDown
          className={`text-white transition-transform duration-300 ${
            openIndex === idx ? "rotate-180" : ""
          }`}
        />
      </div>

      {openIndex === idx && (
        <p className="text-[#C7C7C7] mt-3 text-sm md:text-base leading-relaxed">
          {item.a}
        </p>
      )}
    </div>
  );
}
