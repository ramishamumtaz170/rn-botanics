import Image from "next/image";

export default function OurStory() {
  return (
    <section  id="story" className="bg-[#F8F5EF] py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[40px] shadow-2xl">

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
        <div>

          <p className="uppercase tracking-[0.3em] text-[#7C9A7D] text-sm font-medium">
            Our Story
          </p>

          <h3 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E473B] leading-tight">
            Rooted In Nature,
            <br />
            Crafted With Purpose.
          </h3>

          <p className="mt-8 text-lg text-gray-600 leading-9">
            At <span className="font-semibold text-[#2E473B]">R & N Botanics</span>,
            We believe healthy, beautiful hair begins with nature. Crafted with premium botanical oils and nourishing herbs.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-9">
            Every bottle is handcrafted in small batches using carefully selected botanical ingredients for trusted, luxurious hair care.</p>

          <div className="mt-10 w-24 h-[2px] bg-[#2E473B]"></div>

        </div>

      </div>
    </section>
  );
}