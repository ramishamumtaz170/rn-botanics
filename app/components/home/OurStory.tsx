import Image from "next/image";

export default function OurStory() {
  return (
    <section
      id="story"
      /* Added top padding pt-16 sm:pt-24 to separate image from WhyChooseUs section above */
      className="bg-[#F8F5EF] pt-16 sm:pt-24 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-12 w-full overflow-x-hidden"
    >
      {/* Reduced mobile gap to gap-6 */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center">
        
        {/* Left Image: Compact height on mobile (h-[200px]) */}
        <div className="relative w-full max-w-md lg:max-w-none mx-auto">
          <div className="overflow-hidden rounded-[24px] sm:rounded-[40px] shadow-xl">
            <Image
              src="/images/our-story.jpg"
              alt="Our Story"
              width={700}
              height={500}
              className="w-full h-[200px] sm:h-[320px] md:h-[420px] lg:h-[550px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left mx-auto lg:mx-0 max-w-xl lg:max-w-none w-full">
          <p className="uppercase tracking-[0.25em] text-[#7C9A7D] text-xs sm:text-sm font-semibold">
            Our Story
          </p>

          <h3 className="mt-2 sm:mt-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E473B] leading-tight">
            Rooted In Nature,
            <br />
            Crafted With Purpose.
          </h3>

          {/* Paragraphs with px-4 sm:px-0 and max-w-md to fix mobile screen collisions */}
          <p className="mt-3 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed sm:leading-8 max-w-md lg:max-w-none mx-auto px-4 sm:px-0 text-center lg:text-left">
            At <span className="font-semibold text-[#2E473B]">R & N Botanics</span>,
            we believe healthy, beautiful hair begins with nature. Crafted with premium botanical oils and nourishing herbs.
          </p>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed sm:leading-8 max-w-md lg:max-w-none mx-auto px-4 sm:px-0 text-center lg:text-left">
            Every bottle is handcrafted in small batches using carefully selected botanical ingredients for trusted, luxurious hair care.
          </p>

          <div className="mt-6 sm:mt-8 w-20 sm:w-24 h-[2px] bg-[#2E473B] mx-auto lg:mx-0"></div>
        </div>

      </div>
    </section>
  );
}