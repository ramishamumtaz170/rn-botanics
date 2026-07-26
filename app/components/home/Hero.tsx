import Link from "next/link";
import Image from "next/image";
import { PRODUCT } from "@/app/constants/product";


export default function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen bg-[#F8F5EF] flex items-start lg:items-center pt-28 lg:pt-20"
>
    <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* Left */}
        <div className="max-w-xl text-center lg:text-left order-2 lg:order-1">

          <p className="uppercase tracking-[0.25em] text-[#7C9A7D] text-xs md:text-sm font-medium">
            Premium Botanical Care
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold text-[#2E473B] leading-tight">
            Everyday
            <br />
            Botanical Luxury
          </h1>

          <p className="mt-5 md:mt-8 text-base md:text-lg text-gray-600 leading-7 md:leading-8 max-w-lg mx-auto lg:mx-0">
            Handcrafted botanical hair care powered by nature's finest ingredients.
          </p>

          {/* Buttons */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

            <Link
              href="/shop"
              className="w-full sm:w-auto h-12 px-8 bg-[#2E473B] text-white rounded-full text-sm uppercase tracking-[0.15em] font-medium shadow-md hover:bg-[#23392F] transition flex items-center justify-center"
            >
              Shop Collection
            </Link>

            <Link
              href="/#story"
              className="w-full sm:w-auto h-12 px-8 border border-[#2E473B] text-[#2E473B] rounded-full text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#2E473B] hover:text-white transition flex items-center justify-center"
            >
              Our Story
            </Link>

          </div>

        </div>

        {/* Right */}
       <div className="flex justify-center order-1 lg:order-2">

  <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[430px] h-[320px] sm:h-[400px] lg:h-[520px] rounded-[32px] lg:rounded-[40px] overflow-hidden bg-[#E7E2D8] shadow-xl">

    <Image
      src={PRODUCT.image}
      alt={PRODUCT.name}
      fill
      priority
      className="object-contain p-6"
    />

  </div>

</div>
      </div>
    </section>
  );
}