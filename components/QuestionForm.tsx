"use client";

export default function QuestionForm(){
  return (
    <section className="w-full bg-[#0B0B0B] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">

        {/* HEADING */}
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-2">
          HAVE A <span className="text-[#F8C133]">QUESTION?</span>
        </h2>

        <p className="text-[#C7C7C7] text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          If you have a quick clarification before booking your Performance Strategy Session,
          use the form below. For personalized guidance, mindset coaching, negotiation
          strategy, or performance planning, please book the Strategy Session.
        </p>
      </div>

      {/* FORM */}
      <div className="max-w-4xl mx-auto bg-[#111111] rounded-3xl p-10">
        <form className="flex flex-col gap-6">
          
          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-left">
              <label className="text-white text-base font-medium mb-2 block">
                Name
              </label>
              <input
                type="text"
                placeholder="your name"
                className="w-full bg-[#1A1A1A] text-white px-4 py-3 rounded-md focus:outline-none"
              />
            </div>

            <div className="text-left">
              <label className="text-white text-base font-medium mb-2 block">
                Email
              </label>
              <input
                type="email"
                placeholder="your email"
                className="w-full bg-[#1A1A1A] text-white px-4 py-3 rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* BROKERAGE */}
          <div className="text-left">
            <label className="text-white text-base font-medium mb-2 block">
              Brokerage
            </label>
            <textarea
              placeholder="Your Question"
              className="w-full bg-[#1A1A1A] text-white px-4 py-3 rounded-md min-h-[120px] focus:outline-none"
            />
            <p className="text-[#C7C7C7] text-xs text-right mt-1">
              max 500 characters
            </p>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="bg-[#F8C133] text-black font-semibold rounded-full px-8 py-3 text-base mx-auto w-40 hover:opacity-90 transition"
          >
            Submit
          </button>

        </form>
      </div>
    </section>
  );
}
