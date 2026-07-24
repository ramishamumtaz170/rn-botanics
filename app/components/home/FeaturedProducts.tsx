import Image from "next/image";
import Link from "next/link";
import { PRODUCT } from "@/app/constants/product";


export default function FeaturedProducts() {
  return (
    <section className="bg-[#F8F5EF] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-[#7C9A7D] text-sm">
            Signature Collection
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#2E473B]">
            Crafted For Healthy Hair
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Experience our handcrafted botanical hair oil made with carefully
            selected herbs and premium oils to nourish your scalp, reduce hair
            fall and promote naturally healthy, stronger hair.
          </p>

        </div>

        {/* Product Card */}

        <div className="mt-20 flex justify-center">

          <div className="bg-white rounded-[36px] shadow-xl overflow-hidden max-w-md w-full hover:-translate-y-2 transition duration-500">

            {/* Product Image */}

            <div className="relative bg-[#F8F5EF] flex justify-center p-10">

              {/* Discount Badge */}

              <span className="absolute top-6 right-6 bg-[#C7A25A] text-[#2E473B] px-4 py-2 rounded-full text-sm font-semibold">
  {PRODUCT.discount}% OFF
</span>
              <Image
  src={PRODUCT.image}
  alt={PRODUCT.name}
    width={250}
                height={250}
                className="object-contain"
              />

            </div>

            {/* Product Details */}

            <div className="p-8 text-center">

              <h3 className="text-3xl font-bold text-[#2E473B]">
                {PRODUCT.name}
              </h3>

              <p className="mt-2 text-gray-600">
                {PRODUCT.tagline}              </p>

              {/* Pricing */}

              <div className="mt-6 flex items-center justify-center gap-3">

                <span className="text-gray-400 line-through text-xl">
                  Rs. {PRODUCT.originalPrice.toLocaleString()}
                </span>

                <span className="bg-[#E8F3EA] text-[#2E473B] px-3 py-1 rounded-full text-sm font-semibold">
                  Save Rs. {(PRODUCT.originalPrice - PRODUCT.salePrice).toLocaleString()}                </span>

              </div>

              <h4 className="text-5xl font-bold text-[#2E473B] mt-3">
                Rs. {PRODUCT.salePrice.toLocaleString()}
              </h4>

              <p className="mt-5 text-sm text-[#7C9A7D] font-medium">
                {PRODUCT.bottleSize} • {PRODUCT.tagline}
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-flex justify-center items-center w-full bg-[#2E473B] text-white rounded-full py-4 text-lg font-semibold hover:bg-[#23392F] transition-all duration-300"
              >
                Shop Now
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}