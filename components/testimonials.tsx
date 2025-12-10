"use client";

import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import avatar from "@/public/avatar.png";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      text: `Working with Alex was a game changer for us! His expertise in the real estate market helped us find our dream home in no time.`,
      name: "Mickael Grants",
      role: "CEO of Apples to Oranges",
      rating: 5,
    },
    {
      text: `This session helped me build massive clarity. My whole performance changed in weeks.`,
      name: "Sarah Mitchell",
      role: "Dubai Real Estate Advisor",
      rating: 5,
    },
    {
      text: `Alex helped me fix my pipeline and my execution. Results improved instantly.`,
      name: "Thomas Green",
      role: "Sales Consultant",
      rating: 4,
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getPosition = (cardIndex : number) => {
    if (cardIndex === index) return "center";
    if (cardIndex === (index - 1 + testimonials.length) % testimonials.length) return "left";
    if (cardIndex === (index + 1) % testimonials.length) return "right";
    return "hidden";
  };

  return (
<section className="w-full bg-[#0B0B0B] py-24 max-sm:py-14 px-0 overflow-hidden">

  {/* Heading */}
  <div className="max-w-5xl mx-auto text-center px-6">
    <h2 className="text-white text-3xl md:text-4xl font-medium mb-2 max-sm:text-2xl">
      WHAT <span className="text-[#F8C133]">AGENTS</span> ARE SAYING
    </h2>
    <p className="text-[#C7C7C7] text-sm md:text-base max-sm:text-xs max-sm:leading-tight">
      THE REAL IMPACT OF WORKING TOGETHER — DIRECTLY FROM THE AGENTS.
    </p>
  </div>

  {/* TRACK */}
  <div className="
    relative w-full 
    h-[450px] md:h-[420px] 
    max-sm:h-[360px]
    flex items-center justify-center overflow-visible
  ">

    {testimonials.map((item, i) => {
      const pos = getPosition(i);

      const base = `
        absolute transition-all duration-500 ease-out 
        rounded-3xl shadow-xl 
        p-8 sm:p-10
        max-sm:p-5
      `;

      let style = "";

      if (pos === "center") {
        style = `
          w-[70%] sm:w-[60%] md:w-[600px]
          max-sm:w-[85%]
          bg-[#F8C133]
          scale-100 opacity-100 z-20 translate-x-0 
          py-20 max-sm:py-10
        `;
      } else if (pos === "left") {
        style = `
          hidden sm:block 
          w-[50%] md:w-[430px]
          bg-[#1A1A1A]
          scale-90 opacity-50 
          -translate-x-[50%] md:-translate-x-[58%]
          z-10 py-18
        `;
      } else if (pos === "right") {
        style = `
          hidden sm:block 
          w-[50%] md:w-[430px]
          bg-[#1A1A1A]
          scale-90 opacity-50 
          translate-x-[50%] md:translate-x-[58%]
          z-10 py-18
        `;
      }

      return (
        <div key={i} className={`${base} ${style}`}>
          <p className={`
            text-base sm:text-lg max-sm:text-sm
            leading-relaxed max-sm:leading-snug 
            mb-6 max-sm:mb-4
            ${pos === "center" ? "text-black" : "text-white"}
          `}>
            {item.text}
          </p>

          <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-3">
            
            {/* Avatar + Name */}
            <div className="flex items-center gap-3">
              <Image
                src={avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full max-sm:w-8 max-sm:h-8"
              />
              <div>
                <p className={`font-semibold ${pos === "center" ? "text-black" : "text-white"}`}>
                  {item.name}
                </p>
                <p className={`text-xs ${pos === "center" ? "text-black" : "text-white"}`}>
                  {item.role}
                </p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: item.rating }).map((_, starIndex) => (
                <FaStar
                  key={starIndex}
                  className={`text-lg max-sm:text-base ${
                    pos === "center" ? "text-black" : "text-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      );
    })}

    {/* ARROWS */}
    <button
      onClick={prevSlide}
      className="
        absolute left-5 sm:left-10 
        text-white text-3xl max-sm:text-2xl 
        hover:text-[#F8C133] transition 
        z-30 top-[50%] -translate-y-1/2
      "
    >
      <FaChevronLeft />
    </button>

    <button
      onClick={nextSlide}
      className="
        absolute right-5 sm:right-10 
        text-white text-3xl max-sm:text-2xl 
        hover:text-[#F8C133] transition 
        z-30 top-[50%] -translate-y-1/2
      "
    >
      <FaChevronRight />
    </button>

  </div>

  {/* DOTS */}
  <div className="flex justify-center gap-3 mt-12 max-sm:mt-6">
    {testimonials.map((_, dotIndex) => (
      <div
        key={dotIndex}
        className={`
          w-3 h-3 rounded-full
          ${dotIndex === index ? "bg-[#F8C133]" : "bg-[#555]"}
        `}
      />
    ))}
  </div>

</section>
  );
}
