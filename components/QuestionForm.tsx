"use client";

export default function QuestionForm() {
  return (
    <section className="w-full bg-[#0B0B0B] py-40 px-6">
      
      {/* 🔥 SUPER WIDE HEADING */}
      <div className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-white text-4xl md:text-5xl font-medium mb-10">
          HAVE A <span className="text-[#F8C133]">QUESTION?</span>
        </h2>

        <p className="text-[#C7C7C7] text-base md:text-lg leading-relaxed max-w-5xl mx-auto">
          If you have a quick clarification before booking your Performance Strategy Session,
          use the form below. For personalized guidance, mindset coaching, negotiation
          strategy, or performance planning, please book the Strategy Session.
        </p>
      </div>

      {/* 🔥 SUPER WIDE FORM BLOCK */}
<div className="max-w-7xl mx-auto bg-[#1e1e1e] rounded-3xl p-14">
  <form className="flex flex-col gap-10">
    
    {/* NAME + EMAIL */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="text-left">
        <label className="text-white text-lg font-medium mb-2 block">
          Name
        </label>
        <input
          type="text"
          placeholder="your name"
          className="w-full bg-[#121212] text-white px-6 py-4 rounded-md text-base focus:outline-none"
        />
      </div>

      <div className="text-left">
        <label className="text-white text-lg font-medium mb-2 block">
          Email
        </label>
        <input
          type="email"
          placeholder="your email"
          className="w-full bg-[#121212] text-white px-6 py-4 rounded-md text-base focus:outline-none"
        />
      </div>
    </div>

    {/* BROKERAGE / QUESTION */}
    <div className="text-left">
      <label className="text-white text-lg font-medium mb-2 block">
        Brokerage
      </label>
      <textarea
        placeholder="Your Question"
        className="w-full bg-[#121212] text-white px-6 py-4 rounded-md min-h-[150px] text-base focus:outline-none"
      />
      <p className="text-[#C7C7C7] text-xs text-right mt-1">
        max 500 characters
      </p>
    </div>

    {/* SUBMIT BUTTON */}
    <button
      type="submit"
      className="bg-[#F8C133] text-black font-semibold rounded-full px-12 py-4 text-base mx-auto w-56 hover:opacity-90 transition"
    >
      Submit
    </button>

  </form>
</div>

    </section>
  );
}
