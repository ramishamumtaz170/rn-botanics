"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { PRODUCT } from "@/app/constants/product";

export default function CallToAction() {
  const router = useRouter();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: PRODUCT.id,
      name: PRODUCT.name,
      price: PRODUCT.salePrice,
      image: PRODUCT.image,
      quantity: 1,
      cap: "Nozzle Applicator Cap",
    });

    toast.success(`${PRODUCT.name} added to your cart.`);
  };

  const handleBuyNow = () => {
    addToCart({
      id: PRODUCT.id,
      name: PRODUCT.name,
      price: PRODUCT.salePrice,
      image: PRODUCT.image,
      quantity: 1,
      cap: "Nozzle Applicator Cap",
    });

    router.push("/checkout");
  };

  return (
    /* Reduced section padding (py-12 sm:py-16 lg:py-20) and added side margins */
    <section className="py-12 sm:py-16 lg:py-20 bg-[#2E473B] px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex justify-center">

        {/* Card constrained to max-w-4xl with compact padding (p-6 sm:p-10 lg:p-14) */}
        <div className="w-full max-w-4xl bg-[#355244] rounded-[28px] sm:rounded-[36px] border border-[#4E6B5C] p-6 sm:p-10 lg:p-14 text-center shadow-2xl">

          {/* Tagline */}
          <p className="uppercase tracking-[0.25em] text-[#C7A25A] text-xs sm:text-sm font-semibold">
            Ready to Experience Nature?
          </p>

          {/* Main Heading */}
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F8F5EF] leading-tight">
            Transform Your
            <br />
            Hair Care Routine
          </h2>

          {/* Description */}
          <p className="mt-3 sm:mt-5 max-w-xl mx-auto text-xs sm:text-base text-[#D8D4CC] leading-relaxed px-2 sm:px-0">
            Discover the nourishing power of carefully selected botanical oils
            and herbs. Give your hair the care it deserves with our handcrafted
            Signature Hair Oil.
          </p>

          {/* Price Section */}
          <div className="mt-6 sm:mt-8">
            <p className="text-[#BDB4A5] line-through text-base sm:text-lg">
              Rs. {PRODUCT.originalPrice.toLocaleString()}
            </p>

            <div className="mt-2 flex justify-center items-center gap-3 sm:gap-4 flex-wrap">
              <h3 className="text-3xl sm:text-5xl font-bold text-white">
                Rs. {PRODUCT.salePrice.toLocaleString()}
              </h3>

              <span className="bg-[#C7A25A] text-[#2E473B] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                Save {PRODUCT.discount}%
              </span>
            </div>
          </div>

          {/* Buttons: Sleek & Proportional */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full">
            
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px]
                         h-11 sm:h-12 px-6 sm:px-8
                         rounded-full
                         border-2 border-white
                         text-white
                         text-xs sm:text-sm uppercase tracking-wider font-semibold
                         flex items-center justify-center
                         hover:bg-white hover:text-[#2E473B]
                         transition-all duration-300
                         active:scale-95 shadow-md"
            >
              Add to Cart
            </button>

            {/* Buy Now Button */}
            <button
              type="button"
              onClick={handleBuyNow}
              className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px]
                         h-11 sm:h-12 px-6 sm:px-8
                         rounded-full
                         bg-[#C7A25A]
                         text-[#2E473B]
                         text-xs sm:text-sm uppercase tracking-wider font-semibold
                         flex items-center justify-center
                         hover:bg-[#D7B56D]
                         transition-all duration-300
                         active:scale-95 shadow-md"
            >
              Buy Now
            </button>

          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-[#D8D4CC] text-xs sm:text-sm font-medium">
            <span>✓ 100% Botanical Formula</span>
            <span>✓ Secure Checkout</span>
            <span>✓ Cash on Delivery</span>
          </div>

        </div>

      </div>
    </section>
  );
}