"use client";

export default function AcceptMentorship() {
  return (
    <section className="w-full bg-[#0B0B0B] py-24 max-sm:py-14 px-6 max-sm:px-4">

      {/* DARK GRAY COMPARTMENT */}
      <div
        className="
          max-w-7xl mx-auto bg-[#1e1e1e] rounded-[32px]
          px-10 py-16 
          grid grid-cols-1 lg:grid-cols-2 gap-16
          max-sm:px-4 max-sm:py-8 max-sm:gap-10
        "
      >
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between">
          
          {/* TEXT */}
          <div>
            <h2 className="
              text-white text-3xl md:text-4xl font-extrabold leading-snug
              max-sm:text-2xl max-sm:leading-tight
            ">
              WHO I ACCEPT INTO <br />
              THE <span className="text-[#F8C133]">MENTORSHIP</span> <br />
              (AND WHO I DON’T)
            </h2>

            <p className="
              text-[#C7C7C7] text-base leading-relaxed max-w-md
              mt-6 mb-4
              max-sm:text-sm max-sm:leading-tight max-sm:mt-4
            ">
              I work with a limited number of agents at a time 
              to maintain quality and focus.
            </p>
          </div>

          {/* CTA BOX */}
          <div className="
            bg-[#F8C133] rounded-lg 
            px-5 py-3 inline-block w-fit mt-10
            max-sm:px-3 max-sm:py-2 max-sm:mt-6
          ">
            <p className="text-black italic text-base font-medium max-sm:text-sm">
              This mentorship is for agents who are:
            </p>
          </div>
        </div>

        {/* RIGHT LIST */}
        <div className="flex flex-col gap-4 max-sm:gap-3">
          {[
            "Serious about a long-term real estate career in Dubai",
            "Coachable, focused, and open to feedback",
            "Ready to follow a structured weekly plan",
            "Consistent and disciplined",
            "Professional in communication",
            "Emotionally stable and able to execute",
            "Committed to building a real pipeline instead of chasing shortcuts",
          ].map((text, idx) => (
            <div
              key={idx}
              className="
                bg-[#121212] rounded-xl 
                px-6 py-4 flex items-center justify-between
                max-sm:px-3 max-sm:py-3
              "
            >
              <p className="text-white text-base leading-relaxed max-sm:text-sm max-sm:leading-snug">
                {text}
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
    </section>
  );
}
