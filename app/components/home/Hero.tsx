import Link from "next/link";
import Image from "next/image";
import { PRODUCT } from "@/app/constants/product";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#F8F5EF] pt-16 sm:pt-24 lg:pt-28 pb-12 lg:pb-20 px-5 sm:px-8 lg:px-12 w-full overflow-x-hidden"
    >
      {/* Grid Container */}
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-24 items-center">
        
        {/* Right Column: Image Frame */}
        <div className="flex justify-center order-1 lg:order-2 w-full">
          <div className="relative w-full max-w-[260px] xs:max-w-[290px] sm:max-w-[340px] lg:max-w-[430px] aspect-[4/5] sm:h-[420px] lg:h-[520px] rounded-[24px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden bg-[#E7E2D8] shadow-xl">
            <Image
              src={PRODUCT.image}
              alt={PRODUCT.name}
              fill
              priority
              className="object-contain p-3 sm:p-6 lg:p-8"
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 430px"
            />
          </div>
        </div>

        {/* Left Column: Text & Buttons */}
        <div className="w-full max-w-xl text-center lg:text-left order-2 lg:order-1 mx-auto lg:mx-0">
          <p className="uppercase tracking-[0.2em] text-[#7C9A7D] text-xs sm:text-sm font-semibold">
            Premium Botanical Care
          </p>

          <h1 className="mt-2 sm:mt-4 text-3xl sm:text-5xl lg:text-7xl font-bold text-[#2E473B] leading-tight sm:leading-tight">
            Everyday
            <br />
            Botanical Luxury
          </h1>

          {/* Added px-4 sm:px-0 for clear side margins on mobile */}
          <p className="mt-3 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed sm:leading-8 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0">
            Handcrafted botanical hair care powered by nature&apos;s finest ingredients.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
            <Link
              href="/shop"
              className="w-full max-w-[240px] sm:w-auto h-11 sm:h-12 px-6 sm:px-8 bg-[#2E473B] text-white rounded-full text-xs sm:text-sm uppercase tracking-wider font-medium shadow-md hover:bg-[#23392F] transition flex items-center justify-center active:scale-95"
            >
              Shop Collection
            </Link>

            <Link
              href="/#story"
              className="w-full max-w-[240px] sm:w-auto h-11 sm:h-12 px-6 sm:px-8 border border-[#2E473B] text-[#2E473B] rounded-full text-xs sm:text-sm uppercase tracking-wider font-medium hover:bg-[#2E473B] hover:text-white transition flex items-center justify-center active:scale-95"
            >
              Our Story
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}