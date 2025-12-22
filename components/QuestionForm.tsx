"use client";

export default function QuestionForm() {
  return (
    <section className="w-full bg-[#0B0B0B] py-40 max-sm:py-20 px-6 max-sm:px-4">
      
      {/* HEADING */}
      <div className="max-w-7xl mx-auto text-center mb-24 max-sm:mb-12">
        <h2 className="text-white text-4xl md:text-5xl mb-10 max-sm:text-3xl max-sm:mb-6">
          HAVE A <span className="text-[#F8C133]">QUESTION?</span>
        </h2>

        <p className="text-[#C7C7C7] text-base md:text-lg leading-relaxed max-w-5xl mx-auto max-sm:text-sm max-sm:leading-snug">
          If you have a quick clarification before booking your Performance Strategy Session,
          use the form below. For personalized guidance, mindset coaching, negotiation
          strategy, or performance planning, please book the Strategy Session.
        </p>
      </div>

      {/* FORM BLOCK */}
      <div className="max-w-7xl mx-auto bg-[#1e1e1e] rounded-3xl p-14 max-sm:p-6">
        <form className="flex flex-col gap-10 max-sm:gap-6">
          
          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-sm:gap-6">
            
            <div className="text-left">
              <label className="text-white text-lg font-medium mb-2 block max-sm:text-base">
                Name
              </label>
              <input
                type="text"
                placeholder="your name"
                className="w-full bg-[#121212] text-white px-6 py-4 rounded-md text-base max-sm:px-4 max-sm:py-3 max-sm:text-sm focus:outline-none"
              />
            </div>

            <div className="text-left">
              <label className="text-white text-lg font-medium mb-2 block max-sm:text-base">
                Email
              </label>
              <input
                type="email"
                placeholder="your email"
                className="w-full bg-[#121212] text-white px-6 py-4 rounded-md text-base max-sm:px-4 max-sm:py-3 max-sm:text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* BROKERAGE / QUESTION */}
          <div className="text-left">
            <label className="text-white text-lg font-medium mb-2 block max-sm:text-base">
              Brokerage
            </label>
            <textarea
              placeholder="Your Question"
              className="
                w-full bg-[#121212] text-white px-6 py-4 rounded-md min-h-[150px] text-base
                max-sm:px-4 max-sm:py-3 max-sm:text-sm max-sm:min-h-[110px]
                focus:outline-none
              "
            />
            <p className="text-[#C7C7C7] text-xs max-sm:text-[10px] text-right mt-1">
              max 500 characters
            </p>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="
              bg-[#F8C133] text-black font-semibold rounded-full 
              px-12 py-4 text-base mx-auto w-56
              hover:opacity-90 transition

              max-sm:w-44 max-sm:py-3 max-sm:text-sm
            "
          >
            Submit
          </button>

        </form>
      </div>

    </section>
  );
}
