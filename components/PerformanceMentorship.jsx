"use client";

export default function PerformanceMentorship() {
  return (
    <section className="w-full bg-[#0F0F0F] py-24 max-sm:py-14 px-6 max-sm:px-4">
      <div
        className="
          w-full 
          max-w-[1400px] 
          mx-auto 
          grid grid-cols-1 lg:grid-cols-2 
          gap-12
          px-6 lg:px-20
          max-sm:px-0
        "
      >
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-white text-3xl md:text-4xl leading-snug mb-2 max-sm:text-2xl max-sm:leading-tight">
            THE PERFORMANCE
            <br />
            <span className="text-[#F8C133]">MENTORSHIP</span>
          </h2>

          <p className="text-[#C7C7C7] text-base leading-relaxed mb-8 max-sm:text-sm max-sm:leading-tight">
            A structured, high-accountability mentorship program designed to turn 
            serious agents into consistent performers.
          </p>

          <p className="text-[#F8C133] text-base pt-8 italic leading-relaxed max-sm:text-sm max-sm:leading-tight max-sm:pt-4">
            The mentorship runs month-to-month. You stay as long as you’re 
            getting value
          </p>
        </div>

        {/* RIGHT LIST */}
        <div className="flex ml-0 lg:ml-40 flex-col gap-5 max-sm:gap-3">

          {[
            "Weekly 1:1 performance sessions",
            "Clear weekly execution plan",
            "Daily structure and accountability",
            "Pipeline building + deal strategy",
            "High-quality client qualification",
            "Performance mindset development",
            "Communication, influence, and negotiation skills",
            "Fundamentals proven across international markets",
          ].map((text, idx) => (
            <div key={idx} className="flex items-start gap-3 max-sm:gap-2">
              
              {/* Star Icon */}
              <img
                src="/Star.png"
                alt="star"
                className="w-5 h-5 max-sm:w-4 max-sm:h-4 mt-1 object-contain"
              />

              <p className="text-white text-base leading-relaxed max-sm:text-sm max-sm:leading-tight">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
