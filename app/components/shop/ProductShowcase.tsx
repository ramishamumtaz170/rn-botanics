"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProductShowcase() {
  const router = useRouter();
  const { addToCart } = useCart();

const handleBuyNow = () => {
  addToCart({
    id: 1,
    name: "R & N Botanics Signature Hair Oil",
    price: 1400,
    image: "/images/product.png",
    quantity: 1,
  });

  router.push("/checkout");
};

  const handleAddToCart = () => {
    addToCart({
      id: 1,
      name: "R & N Botanics Signature Hair Oil",
      price: 1400,
      image: "/images/product.png",
      quantity: 1,
    });

    toast.success(
      "R & N Botanics Signature Hair Oil added to your cart.",
      {
        duration: 2500,
      }
    );
  };

  return (
    <section className="w-full bg-white rounded-[40px] shadow-lg overflow-hidden">

      <div className="grid lg:grid-cols-2 gap-16 items-center p-10 md:p-16">

       {/* LEFT SIDE */}

<div className="flex justify-center">

  <div className="relative">

    {/* Soft Cream Circle */}

    <div className="absolute inset-0 flex items-center justify-center">

      <div className="w-[480px] h-[480px] rounded-full bg-[#F8F5EF]"></div>

    </div>

   {/* Launch Badge */}

<div
  className="absolute -top-6 -left-6 z-20
             bg-[#2E473B]
             text-white
             px-7 py-5
             shadow-2xl
             border border-[#C7A25A]"
>

  <p className="text-[11px] uppercase tracking-[0.25em] text-[#E8D6A7]">
    Launch Offer
  </p>

  <h3 className="mt-2 text-3xl font-bold leading-none">
    30% OFF
  </h3>

</div>
    {/* Size Badge */}

    <div className="absolute bottom-10 -right-4 z-20 bg-white px-5 py-3 rounded-full shadow-lg border border-[#ECE6DA]">

      <p className="text-sm font-semibold text-[#2E473B]">
        100 ml
      </p>

    </div>

    {/* Product Image */}

    <Image
      src="/images/product.png"
      alt="R & N Botanics Hair Oil"
      width={420}
      height={420}
      className="relative z-10 object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
    />

  </div>

</div>
        {/* RIGHT SIDE */}

        <div>

          {/* Collection */}

          <p className="uppercase tracking-[0.3em] text-sm text-[#7C9A7D] font-medium">
            Signature Collection
          </p>

          {/* Title */}

          <h2 className="mt-4 text-5xl font-bold leading-tight text-[#2E473B]">
            R & N Botanics
            <br />
            Signature Hair Oil
          </h2>

          {/* Description */}

          <p className="mt-8 text-lg leading-8 text-gray-600">
            A luxurious botanical blend handcrafted with premium oils and
            carefully selected herbs to nourish your scalp, strengthen every
            strand and restore natural shine.
          </p>

          {/* Rating */}

          <div className="mt-8 flex items-center gap-3">

            <span className="text-[#C7A25A] text-xl">
              ★★★★★
            </span>

            <span className="text-gray-500">
              Premium Botanical Formula
            </span>

          </div>

          {/* Price */}

          <div className="mt-10">

            <p className="text-xl text-gray-400 line-through">
              Rs. 2,000
            </p>

            <div className="flex items-center gap-4 mt-3 flex-wrap">

              <h3 className="text-5xl font-bold text-[#2E473B]">
                Rs. 1,400
              </h3>

              <span className="bg-[#E8F3EA] text-[#2E473B] px-4 py-2 rounded-full text-sm font-semibold">
                Save 30%
              </span>

            </div>

          </div>

          {/* Features */}

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-[#7C9A7D] text-xl">✓</span>
              <p className="text-gray-700">
                100% Botanical Ingredients
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#7C9A7D] text-xl">✓</span>
              <p className="text-gray-700">
                No Parabens • No Sulfates
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#7C9A7D] text-xl">✓</span>
              <p className="text-gray-700">
                Cruelty Free Formula
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#7C9A7D] text-xl">✓</span>
              <p className="text-gray-700">
                Small Batch Crafted
              </p>
            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            {/* Add to Cart */}

            <button
  onClick={handleAddToCart}
  className="flex-1 border-2 border-[#2E473B]
             text-[#2E473B]
             py-5 px-8
             rounded-full
             text-lg font-semibold
             hover:bg-[#F8F5EF]
             transition-all duration-300"
>
  Add to Cart
</button>
            {/* Buy Now */}
<button
  type="button"
  onClick={handleBuyNow}
  className="flex-1 flex items-center justify-center
             bg-[#2E473B]
             text-white
             py-5 px-8
             rounded-full
             text-lg font-semibold
             hover:bg-[#23392F]
             transition-all duration-300"
>
  Buy Now
</button>
          </div>

          {/* Trust Indicators */}

          <p className="mt-8 text-center sm:text-left text-sm text-gray-500 leading-7">
            ✓ Secure Checkout &nbsp;&nbsp;•&nbsp;&nbsp;
            ✓ Cash on Delivery Available &nbsp;&nbsp;•&nbsp;&nbsp;
            ✓ Premium Botanical Formula
          </p>
          {/* Product Highlights */}

<div className="mt-16 border-t border-[#ECE6DA] pt-10">

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

    <div>
      <h4 className="text-3xl font-bold text-[#2E473B]">12+</h4>
      <p className="mt-2 text-sm text-gray-500 uppercase tracking-wider">
        Botanical Herbs
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold text-[#2E473B]">100%</h4>
      <p className="mt-2 text-sm text-gray-500 uppercase tracking-wider">
        Natural Formula
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold text-[#2E473B]">100 ml</h4>
      <p className="mt-2 text-sm text-gray-500 uppercase tracking-wider">
        Bottle Size
      </p>
    </div>

    <div>
  <h4 className="text-3xl font-bold text-[#2E473B]">Premium</h4>
  <p className="mt-2 text-sm text-gray-500 uppercase tracking-wider">
    Quality
  </p>
</div>

  </div>

</div>

        </div>

      </div>

    </section>
  );
}