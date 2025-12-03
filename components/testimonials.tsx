"use client";

import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import avatar from "@/public/avatar.png"; // replace with actual avatar

export default function TestimonialsSlider() {
  const testimonials = [
    {
      text: `Working with Alex was a game changer for us! His expertise in the real estate market helped us find our dream home in no time. He was attentive, knowledgeable, and always available to answer our questions. We couldn’t have asked for a better consultant!`,
      name: "Mickael Grants",
      role: "CEO of Apples to Oranges",
      rating: 5,
    },
    {
      text: `Working with Alex was a game changer for us! His expertise in the real estate market helped us find our dream home in no time. He was attentive, knowledgeable, and always available to answer our questions. We couldn’t have asked for a better consultant!`,
      name: "Mickael Grants",
      role: "CEO of Apples to Oranges",
      rating: 5,
    },
    {
      text: `Working with Alex was a game changer for us! His expertise in the real estate market helped us find our dream home in no time. He was attentive, knowledgeable, and always available to answer our questions. We couldn’t have asked for a better consultant!`,
      name: "Mickael Grants",
      role: "CEO of Apples to Oranges",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full bg-[#0B0B0B] py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-2">
          WHAT <span className="text-[#F8C133]">AGENTS</span> ARE SAYING
        </h2>
        <p className="text-[#C7C7C7] text-sm md:text-base">
          THE REAL IMPACT OF WORKING TOGETHER — DIRECTLY FROM THE AGENTS.
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative flex items-center justify-center">
        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-0 text-white text-xl hover:text-[#F8C133] transition"
        >
          <FaChevronLeft />
        </button>

        {/* CENTER SLIDE */}
        <div className="w-full md:w-[60%] bg-[#F8C133] rounded-3xl p-8 text-left mx-4 shadow-lg">
          <p className="text-black text-base leading-relaxed mb-6">
            {testimonials[index].text}
          </p>

          <div className="flex items-center justify-between">
            {/* PROFILE */}
            <div className="flex items-center gap-3">
              <Image
                src={avatar}
                alt={testimonials[index].name}
                className="w-10 h-10 object-cover rounded-full"
              />
              <div>
                <p className="text-black font-semibold text-sm">
                  {testimonials[index].name}
                </p>
                <p className="text-black text-xs">{testimonials[index].role}</p>
              </div>
            </div>

            {/* RATING */}
            <div className="flex items-center gap-1">
              {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                <FaStar key={i} className="text-black text-lg" />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-0 text-white text-xl hover:text-[#F8C133] transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-[#F8C133]" : "bg-[#555]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
