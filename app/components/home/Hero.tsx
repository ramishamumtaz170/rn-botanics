import Link from "next/link";
import Image from "next/image";
import { PRODUCT } from "@/app/constants/product";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#F8F5EF] flex items-center pt-24 pb-12 sm:pt-28 lg:pt-20"
    >
      {/* Container with responsive side margins (px-5 sm:px-8 lg:px-10) */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Text & CTA */}
        <div className="max-w-xl text-center lg:text-left order-2 lg:order-1 mx-auto lg:mx-0">
          <p className="uppercase tracking-[0.2em] text-[#7C9A7D] text-xs sm:text-sm font-semibold">
            Premium Botanical Care
          </p>

          <h1 className="mt-3 sm:mt-4 text-3xl sm:text-5xl lg:text-7xl font-bold text-[#2E473B] leading-tight sm:leading-tight">
            Everyday
            <br />
            Botanical Luxury
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed sm:leading-8 max-w-lg mx-auto lg:mx-0">
            Handcrafted botanical hair care powered by nature&apos;s finest ingredients.
          </p>

          {/* Buttons: Responsive height, padding, font size & spacing */}
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/shop"
              className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 bg-[#2E473B] text-white rounded-full text-xs sm:text-sm uppercase tracking-widest font-medium shadow-md hover:bg-[#23392F] transition flex items-center justify-center active:scale-95"
            >
              Shop Collection
            </Link>

            <Link
              href="/#story"
              className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 border border-[#2E473B] text-[#2E473B] rounded-full text-xs sm:text-sm uppercase tracking-widest font-medium hover:bg-[#2E473B] hover:text-white transition flex items-center justify-center active:scale-95"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Right Column: Image Frame */}
        <div className="flex justify-center order-1 lg:order-2 w-full">
          {/* 
            Frame sizing adjusted with responsive aspect ratio & max-width 
            so it scales gracefully on smaller mobile screens 
          */}
          <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] lg:max-w-[430px] aspect-[4/5] sm:h-[420px] lg:h-[520px] rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden bg-[#E7E2D8] shadow-xl">
            <Image
              src={PRODUCT.image}
              alt={PRODUCT.name}
              fill
              priority
              className="object-contain p-4 sm:p-6 lg:p-8"
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 430px"
            />
          </div>
        </div>

      </div>
    </section>
  );
}