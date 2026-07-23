import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
  return (
    <div className="w-full bg-white rounded-[35px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

      {/* Product Image */}

      <div className="relative h-[420px] bg-[#F8F5EF] flex items-center justify-center p-10">

        {/* Launch Offer Badge */}

        <div className="absolute top-6 left-6 bg-[#C7A25A] text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-md">
          🔥 Launch Offer • 30% OFF
        </div>

        <Image
          src="/images/product.png"
          alt="R & N Botanics Signature Hair Oil"
          width={260}
          height={260}
          className="object-contain"
        />

      </div>

      {/* Product Info */}

      <div className="p-10 text-center">

        <p className="uppercase tracking-[0.25em] text-sm text-[#7C9A7D]">
          Signature Collection
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#2E473B]">
          R & N Botanics Signature Hair Oil
        </h2>

        <p className="mt-5 text-gray-600 leading-8">
          A luxurious botanical blend handcrafted with premium oils and
          carefully selected herbs to nourish your hair and elevate your
          everyday self-care ritual.
        </p>

        {/* Price */}

        <div className="mt-10">

          <p className="text-gray-500">
            100 ml
          </p>

          <p className="mt-3 text-xl text-gray-400 line-through">
            Rs. 2,000
          </p>

          <h3 className="mt-1 text-5xl font-bold text-[#2E473B]">
            Rs. 1,400
          </h3>

          <p className="mt-2 text-[#7C9A7D] font-semibold">
            Save Rs. 600 • 30% OFF
          </p>

        </div>

        {/* Launch Offer Box */}

        <div className="mt-8 bg-[#F8F5EF] rounded-2xl py-5 px-6">

          <p className="uppercase tracking-[0.2em] text-xs text-[#7C9A7D]">
            Limited Time Launch Offer
          </p>

          <p className="mt-2 text-xl font-semibold text-[#2E473B]">
            Valid for the First 15 Days
          </p>

        </div>

        {/* Button */}

        <Link
          href="/shop/hair-oil"
          className="inline-flex items-center justify-center mt-10 bg-[#2E473B] text-white px-10 py-4 rounded-full font-medium hover:bg-[#23392F] transition-all duration-300"
        >
          View Product
        </Link>

      </div>

    </div>
  );
}