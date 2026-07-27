import Image from "next/image";
import Link from "next/link";
import { PRODUCT } from "@/app/constants/product";

export default function FeaturedProducts() {
  return (
    <section className="bg-[#F8F5EF] pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden flex flex-col items-center justify-center text-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center text-center">

        {/* Heading Section */}
        <div className="text-center max-w-3xl w-full mx-auto px-4 flex flex-col items-center justify-center">
          <p className="uppercase tracking-[0.25em] text-[#7C9A7D] text-xs sm:text-sm font-semibold text-center">
            Signature Collection
          </p>

          <h3 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2E473B] text-center">
            Crafted For Healthy Hair
          </h3>

          <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto text-center">
            Nourish your scalp and strengthen your hair with our handcrafted botanical hair oil.
          </p>
        </div>

        {/* Product Card Wrapper */}
        <div className="mt-8 sm:mt-12 flex justify-center w-full">
          <div className="bg-white rounded-[28px] sm:rounded-[36px] shadow-xl overflow-hidden max-w-md w-full hover:-translate-y-1 transition duration-500 mx-auto flex flex-col items-center text-center">

            {/* Product Image Container */}
            <div className="relative bg-[#F8F5EF] flex justify-center items-center w-full p-6 sm:p-10">
              {/* Discount Badge */}
              <span className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#C7A25A] text-[#2E473B] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                {PRODUCT.discount}% OFF
              </span>

              <Image
                src={PRODUCT.image}
                alt={PRODUCT.name}
                width={220}
                height={220}
                className="object-contain sm:w-[250px] sm:h-[250px] mx-auto"
              />
            </div>

            {/* Product Details */}
            <div className="p-6 sm:p-8 text-center flex flex-col items-center justify-center w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2E473B] text-center w-full">
                {PRODUCT.name}
              </h2>

              {/* Price Row */}
              <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 w-full">
                <span className="text-gray-400 line-through text-lg sm:text-xl">
                  Rs. {PRODUCT.originalPrice.toLocaleString()}
                </span>

                <span className="bg-[#E8F3EA] text-[#2E473B] px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  Save Rs. {(PRODUCT.originalPrice - PRODUCT.salePrice).toLocaleString()}
                </span>
              </div>

              <h4 className="text-3xl sm:text-5xl font-bold text-[#2E473B] mt-2 sm:mt-3 text-center w-full">
                Rs. {PRODUCT.salePrice.toLocaleString()}
              </h4>

              {/* CTA Button capped at max-w-[260px] sm:max-w-[280px] */}
              <Link
                href="/shop"
                className="mt-6 sm:mt-8 inline-flex items-center justify-center 
                           w-full max-w-[260px] sm:max-w-[280px] mx-auto
                           bg-[#C7A25A] text-[#2E473B]
                           rounded-full py-3.5 sm:py-4 px-6
                           text-base sm:text-lg font-bold
                           shadow-md
                           hover:bg-[#D7B56D]
                           hover:shadow-lg
                           transition-all duration-300
                           active:scale-95 text-center"
              >
                Shop Now →
              </Link>

              {/* Product Info */}
              <p className="mt-6 sm:mt-8 text-sm sm:text-base text-gray-600 leading-relaxed px-2 sm:px-0 text-center w-full">
                {PRODUCT.tagline}
              </p>

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#7C9A7D] font-medium text-center w-full">
                {PRODUCT.bottleSize} • 100% Botanical Formula
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}