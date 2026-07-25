"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { PRODUCT } from "@/app/constants/product";

export default function ProductShowcase() {
  const router = useRouter();
  const { addToCart } = useCart();

const handleBuyNow = () => {
  addToCart({
  id: PRODUCT.id,
  name: PRODUCT.name,
  price: PRODUCT.salePrice,
  image: PRODUCT.image,
  quantity: 1,
});

  router.push("/checkout");
};

  const handleAddToCart = () => {
    addToCart({
  id: PRODUCT.id,
  name: PRODUCT.name,
  price: PRODUCT.salePrice,
  image: PRODUCT.image,
  quantity: 1,
});

toast.success(`${PRODUCT.name} added to your cart.`);
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


    {/* Product Image */}

    <Image
      src={PRODUCT.image}
alt={PRODUCT.name}
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
  {PRODUCT.name}
</h2>
          {/* Description */}

          <p className="mt-8 text-lg leading-8 text-gray-600">
            {PRODUCT.description}
          </p>

          {/* Rating */}

          <div className="mt-8 flex items-center gap-3">

            <span className="text-[#C7A25A] text-xl">
              ★★★★★
            </span>

            <span className="text-gray-500">
              {PRODUCT.tagline}
            </span>

          </div>

          {/* Price */}

          <div className="mt-10">

            <p className="text-xl text-gray-400 line-through">
  Rs. {PRODUCT.originalPrice.toLocaleString()}
</p>

<div className="flex items-center gap-4 mt-3 flex-wrap">
  <h3 className="text-5xl font-bold text-[#2E473B]">
    Rs. {PRODUCT.salePrice.toLocaleString()}
  </h3>

  <span className="bg-[#E8F3EA] text-[#2E473B] px-4 py-2 rounded-full text-sm font-semibold">
    Save {PRODUCT.discount}%
  </span>
</div>
          </div>

          {/* Features */}

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-[#7C9A7D] text-xl">✓</span>
              <p className="text-gray-700">
  {PRODUCT.formula} Ingredients
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
            ✓ ✓ {PRODUCT.tagline}
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
      <h4 className="text-3xl font-bold text-[#2E473B]">
  {PRODUCT.bottleSize}
</h4>      <p className="mt-2 text-sm text-gray-500 uppercase tracking-wider">
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