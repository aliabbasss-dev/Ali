"use client";

import { useState, useEffect } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";
import Image from "next/image";
import avatar from "@/public/avatar.png";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      text: `Ali pretty much fast-tracked my entire start in real estate. I came in fresh out of uni, clueless, and he got me closing legit off-plan deals in a couple of months. No pep talks, no sugar coating. Just clear steps, real guidance, and a system that works. He made the whole thing feel doable.`,
      name: "Shashank",
      role: "CEO of Apples to Oranges",
      rating: 5,
    },
    {
      text: `I'd been in the game for a couple of years but felt stuck. Ali helped me break through that wall. He tightened up how I work, showed me how to negotiate properly, and suddenly I was closing deals consistently instead of getting lucky here and there. He keeps it real and focuses on what actually moves the needle.`,
      name: "Siddhanth",
      role: "Dubai Real Estate Advisor",
      rating: 4,
    },
    {
      text: `I've been doing real estate for a long time, but I was burnt out and all over the place. Ali helped me get my structure back. Better routines, better focus, and better results without feeling drained. He brought clarity at a time I really needed it.`,
      name: "Ambani",
      role: "Sales Consultant",
      rating: 5,
    },
    {
      text: `I was new to Dubai, new to sales, and new to real estate. Basically starting from zero. Ali helped me land my first few big deals within my first three months. He explains everything in a simple way, shows you exactly what to do, and somehow makes you feel like you can actually pull it off.`,
      name: "Natella",
      role: "Micro Consultant",
      rating: 5,
    },
    {
      text: `I already knew what I was doing, but I wanted to level up. Ali pushed me to think bigger, clean up my approach with clients, and be more intentional. My performance definitely jumped. He's the guy you go to when you want to stop coasting.`,
      name: "Rein",
      role: "Micro Consultant",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto slide for desktop
  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  // Get previous and next indices
  const prevIndex = (index - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (index + 1) % testimonials.length;

  // Rating stars component
  const RatingStars = ({
    rating,
    isCenter,
  }: {
    rating: number;
    isCenter: boolean;
  }) => {
    const totalStars = 5;
    const filledStars = Math.min(rating, totalStars);
    const emptyStars = totalStars - filledStars;

    return (
      <div className="flex items-center gap-1">
        {/* Filled Stars */}
        {[...Array(filledStars)].map((_, i) => (
          <FaStar
            key={`filled-${i}`}
            className={`${
              isCenter ? "text-black" : "text-[#F8C133]"
            } text-sm sm:text-base`}
          />
        ))}

        {/* Empty Stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <FaStar
            key={`empty-${i}`}
            className={`${
              isCenter ? "text-black/30" : "text-[#444]"
            } text-sm sm:text-base`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="w-full bg-[#0B0B0B] py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl mb-3">
            WHAT <span className="text-[#F8C133]">AGENTS</span> ARE SAYING
          </h2>
          <p className="text-[#C7C7C7] text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            THE REAL IMPACT OF WORKING TOGETHER — DIRECTLY FROM THE AGENTS.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative w-full h-[500px] sm:h-[480px] md:h-[450px] flex items-center justify-center overflow-visible">
          {/* LEFT CARD (Previous) */}
          <div
            className={`
              absolute transition-all duration-500 ease-out
              rounded-3xl shadow-xl
              p-6 sm:p-8
              bg-[#1A1A1A]
              border border-[#333]
              w-[300px] sm:w-[350px] md:w-[400px]
              opacity-70 scale-90
              -translate-x-[140%] sm:-translate-x-[130%] md:-translate-x-[120%]
              cursor-pointer hover:opacity-80
              z-10
              ${isMobile ? "hidden" : "block"}
            `}
            onClick={() => goToSlide(prevIndex)}
          >
            <FaQuoteLeft className="text-2xl text-[#F8C133]/20 mb-4" />
            <p className="text-white text-sm sm:text-base leading-relaxed mb-6 line-clamp-6">
              {testimonials[prevIndex].text}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">

                <div>
                  <p className="text-white font-semibold">
                    {testimonials[prevIndex].name}
                  </p>
                  <p className="text-[#C7C7C7] text-xs">
                    {testimonials[prevIndex].role}
                  </p>
                </div>
              </div>
              <RatingStars
                rating={testimonials[prevIndex].rating}
                isCenter={false}
              />
            </div>
          </div>

          {/* CENTER CARD (Active) */}
          <div
            className={`
              absolute transition-all duration-500 ease-out
              rounded-3xl shadow-2xl
              p-6 sm:p-8 md:p-10
              bg-[#F8C133]
              border border-[#F8C133]
              w-[90%] sm:w-[85%] md:w-[700px] lg:w-[650px]
              max-w-[95vw]
              scale-100 opacity-100
              z-20
            `}
          >
            <FaQuoteLeft className="text-2xl sm:text-3xl text-black/20 mb-4" />
        <p className="text-black text-sm sm:text-base md:text-lg leading-snug sm:leading-relaxed mb-6 sm:mb-8">

              {testimonials[index].text}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
              
                <div>
                  <p className="text-black font-medium">
                    {testimonials[index].name}
                  </p>
                  <p className="text-black/70 text-sm">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
              <RatingStars
                rating={testimonials[index].rating}
                isCenter={true}
              />
            </div>
          </div>

          {/* RIGHT CARD (Next) */}
          <div
            className={`
              absolute transition-all duration-500 ease-out
              rounded-3xl shadow-xl
              p-6 sm:p-8
              bg-[#1A1A1A]
              border border-[#333]
              w-[300px] sm:w-[350px] md:w-[400px]
              opacity-70 scale-90
              translate-x-[140%] sm:translate-x-[130%] md:translate-x-[120%]
              cursor-pointer hover:opacity-80
              z-10
              ${isMobile ? "hidden" : "block"}
            `}
            onClick={() => goToSlide(nextIndex)}
          >
            <FaQuoteLeft className="text-2xl text-[#F8C133]/20 mb-4" />
            <p className="text-white text-sm sm:text-base leading-relaxed mb-6 line-clamp-6">
              {testimonials[nextIndex].text}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">

                <div>
                  <p className="text-white font-semibold">
                    {testimonials[nextIndex].name}
                  </p>
                  <p className="text-[#C7C7C7] text-xs">
                    {testimonials[nextIndex].role}
                  </p>
                </div>
              </div>
              <RatingStars
                rating={testimonials[nextIndex].rating}
                isCenter={false}
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="
              absolute left-0 sm:left-4 md:left-8
              text-white text-2xl sm:text-3xl
              hover:text-[#F8C133] transition-all duration-300
              z-30 top-1/2 -translate-y-1/2
              bg-black/50 hover:bg-black/70 
              rounded-full w-10 h-10 sm:w-12 sm:h-12 
              flex items-center justify-center
              active:scale-95
            "
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="
              absolute right-0 sm:right-4 md:right-8
              text-white text-2xl sm:text-3xl
              hover:text-[#F8C133] transition-all duration-300
              z-30 top-1/2 -translate-y-1/2
              bg-black/50 hover:bg-black/70 
              rounded-full w-10 h-10 sm:w-12 sm:h-12 
              flex items-center justify-center
              active:scale-95
            "
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-12 sm:mt-16">
          {testimonials.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => goToSlide(dotIndex)}
              className={`
                w-2 h-2 sm:w-3 sm:h-3 rounded-full 
                transition-all duration-300 
                ${
                  dotIndex === index
                    ? "bg-[#F8C133] scale-125"
                    : "bg-[#555] hover:bg-[#777]"
                }
                focus:outline-none focus:ring-2 focus:ring-[#F8C133]/50
              `}
              aria-label={`Go to testimonial ${dotIndex + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4">
          <span className="text-[#F8C133] font-semibold text-base sm:text-lg">
            {index + 1}
          </span>
          <span className="text-[#C7C7C7] mx-2">/</span>
          <span className="text-[#C7C7C7] text-base sm:text-lg">
            {testimonials.length}
          </span>
        </div>
      </div>
    </section>
  );
}