"use client";

export default function StrategySession() {
  return (
    <section className="w-full bg-[#0B0B0B] py-24 max-sm:py-14 px-6 max-sm:px-4">
      <div
        className="
          max-w-7xl mx-auto bg-[#1e1e1e] rounded-3xl
          p-10 md:p-14 max-sm:p-6
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-sm:gap-10">

          {/* RIGHT SIDE TEXT (comes FIRST on mobile) */}
          <div className="text-white max-w-md order-1 lg:order-2">
            {/* HEADING */}
            <h1
              className="
                text-3xl md:text-4xl leading-snug mb-15
                max-sm:text-2xl max-sm:leading-tight max-sm:mb-6
              "
            >
              THE PERFORMANCE <br />
              <span className="text-[#F8C133]">STRATEGY SESSION</span>
            </h1>

            {/* PARA 1 */}
            <p
              className="
                text-white text-base leading-relaxed mb-25
                max-sm:text-sm max-sm:leading-tight max-sm:mb-4
              "
            >
              Your path into the mentorship begins with the Performance Strategy Session.
            </p>

            {/* PARA 2 */}
            <p
              className="
                text-white text-base leading-relaxed mb-30
                max-sm:text-sm max-sm:leading-tight max-sm:mb-6
              "
            >
              Even if you never join the mentorship, the clarity, performance plan, and
              direction you gain in this session often prevent weeks of wasted time and
              missed opportunities worth far more than the AED 495 investment.
            </p>

            {/* CTA BUTTON */}
            <a
              href="https://calendly.com/owainati/performance-strategy-session"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full block text-center rounded-full text-black font-semibold text-base py-4
                hover:opacity-90 transition
                bg-[linear-gradient(90deg,#F8C133_0%,#DCA32E_100%)]
                shadow-[0px_4px_10px_rgba(0,0,0,0.25)]
                max-sm:py-3 max-sm:text-sm
              "
            >
              Book Your Performance Strategy Session
            </a>
          </div>

          {/* LEFT SIDE LIST (comes SECOND on mobile) */}
          <div className="order-2 lg:order-1">
            {/* Yellow Header */}
            <div
              className="
                bg-[#F8C133] rounded-xl px-6 py-5 mb-6 w-full
                max-sm:px-4 max-sm:py-3 max-sm:mb-4
              "
            >
              <p className="text-black text-base font-medium max-sm:text-sm">
                During this 45-minute session, you will:
              </p>
            </div>

            {/* LIST */}
            <div className="flex flex-col gap-4 max-sm:gap-3">
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
                  className="
                    bg-[#121212] rounded-xl
                    px-6 py-4 flex items-center justify-between
                    max-sm:px-3 max-sm:py-3
                  "
                >
                  <p className="text-white text-base leading-relaxed max-sm:text-sm max-sm:leading-snug">
                    {item}
                  </p>

                  <img
                    src="/Star.png"
                    alt="star"
                    className="w-5 h-5 max-sm:w-4 max-sm:h-4 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
