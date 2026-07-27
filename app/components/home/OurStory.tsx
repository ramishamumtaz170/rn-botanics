import Image from "next/image";

export default function OurStory() {
  return (
    <section
      id="story"
      /* Added my-12 sm:my-20 lg:my-24 and py-20 sm:py-28 lg:py-36 for clear visual separation before & after */
      className="bg-[#F8F5EF] my-12 sm:my-20 lg:my-24 py-20 sm:py-28 lg:py-36 px-5 sm:px-8 lg:px-10 w-full overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Image */}
        <div className="relative w-full">
          <div className="overflow-hidden rounded-[28px] sm:rounded-[40px] shadow-2xl">
            <Image
              src="/images/our-story.jpg"
              alt="Our Story"
              width={700}
              height={600}
              className="w-full h-[280px] sm:h-[360px] md:h-[450px] lg:h-[600px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left mx-auto lg:mx-0 max-w-xl lg:max-w-none">
          <p className="uppercase tracking-[0.25em] text-[#7C9A7D] text-xs sm:text-sm font-semibold">
            Our Story
          </p>

          <h4 className="mt-3 sm:mt-5 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E473B] leading-tight">
            Rooted In Nature,
            <br />
            Crafted With Purpose.
          </h4>

          <p className="mt-4 sm:mt-8 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed sm:leading-8 px-2 sm:px-0">
            At <span className="font-semibold text-[#2E473B]">R & N Botanics</span>,
            we believe healthy, beautiful hair begins with nature. Crafted with premium botanical oils and nourishing herbs.
          </p>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed sm:leading-8 px-2 sm:px-0">
            Every bottle is handcrafted in small batches using carefully selected botanical ingredients for trusted, luxurious hair care.
          </p>

          <div className="mt-8 sm:mt-10 w-24 h-[2px] bg-[#2E473B] mx-auto lg:mx-0"></div>
        </div>

      </div>
    </section>
  );
}