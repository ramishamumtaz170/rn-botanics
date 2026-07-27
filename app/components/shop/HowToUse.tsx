"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HowToUse() {
  const steps = [
    {
      number: "01",
      title: "Apply",
      description:
        "Apply a generous amount of hair oil directly to your scalp and along the lengths of your hair.",
    },
    {
      number: "02",
      title: "Massage",
      description:
        "Gently massage with your fingertips for 5–10 minutes to stimulate the scalp and improve absorption.",
    },
    {
      number: "03",
      title: "Leave",
      description:
        "Leave the oil on for at least 2–3 hours or overnight for deep nourishment.",
    },
    {
      number: "04",
      title: "Wash",
      description:
        "Rinse thoroughly with a mild shampoo and enjoy softer, healthier-looking hair.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll smoothly to specific step card
  const scrollToStep = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[index] as HTMLElement;
      if (card) {
        container.scrollTo({
          left: card.offsetLeft - container.offsetLeft - 16,
          behavior: "smooth",
        });
      }
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    scrollToStep(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(steps.length - 1, activeIndex + 1);
    scrollToStep(newIndex);
  };

  // Sync scroll indicator on manual touch/mouse swipe
  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.firstElementChild?.clientWidth || 300;
      const index = Math.round(scrollLeft / (cardWidth + 24));
      if (index !== activeIndex && index >= 0 && index < steps.length) {
        setActiveIndex(index);
      }
    }
  };

  return (
    <section className="bg-[#F8F5EF] pt-10 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="text-left max-w-xl">
            <p className="uppercase tracking-[0.25em] text-[#7C9A7D] text-xs sm:text-sm font-semibold">
              Simple Routine
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2E473B]">
              How To Use
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              Follow these simple steps to get the best results from your
              R & N Botanics Signature Hair Oil.
            </p>
          </div>

          {/* Navigation Arrows for ALL Screen Sizes */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous step"
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${
                activeIndex === 0
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-[#2E473B] text-[#2E473B] hover:bg-[#2E473B] hover:text-white active:scale-95 shadow-sm"
              }`}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={handleNext}
              disabled={activeIndex === steps.length - 1}
              aria-label="Next step"
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${
                activeIndex === steps.length - 1
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-[#2E473B] text-[#2E473B] hover:bg-[#2E473B] hover:text-white active:scale-95 shadow-sm"
              }`}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Slider */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`snap-start shrink-0 w-[280px] xs:w-[320px] sm:w-[360px] md:w-[380px] bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border ${
                activeIndex === index
                  ? "border-[#7C9A7D] ring-2 ring-[#7C9A7D]/20"
                  : "border-transparent"
              }`}
            >
              <div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2E473B] text-white flex items-center justify-center text-xl font-bold shadow-md">
                  {step.number}
                </div>

                <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-bold text-[#2E473B]">
                  {step.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Step Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToStep(idx)}
              aria-label={`Go to step ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-8 bg-[#2E473B]"
                  : "w-2.5 bg-gray-300 hover:bg-[#7C9A7D]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}