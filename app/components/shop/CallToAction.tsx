import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-32 bg-[#2E473B]">

      <div className="max-w-7xl mx-auto px-6 flex justify-center">

  <div className="w-full max-w-5xl bg-[#355244] rounded-[40px] border border-[#4E6B5C] p-12 md:p-20 text-center">
          {/* Small Heading */}

          <p className="uppercase tracking-[0.35em] text-[#C7A25A] text-sm font-medium">
            Ready to Experience Nature?
          </p>

          {/* Main Heading */}

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-[#F8F5EF] leading-tight">
            Transform Your
            <br />
            Hair Care Routine
          </h2>

          {/* Description */}

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-[#D8D4CC]">
            Discover the nourishing power of carefully selected botanical oils
            and herbs. Give your hair the care it deserves with our handcrafted
            Signature Hair Oil.
          </p>

          {/* Price */}

          <div className="mt-12">

            <p className="text-[#BDB4A5] line-through text-2xl">
              Rs. 2,000
            </p>

            <div className="mt-3 flex justify-center items-center gap-5 flex-wrap">

              <h3 className="text-6xl font-bold text-white">
                Rs. 1,400
              </h3>

              <span className="bg-[#C7A25A] text-[#2E473B] px-5 py-2 rounded-full font-semibold">
                Save 30%
              </span>

            </div>

          </div>

         {/* Buttons */}

<div className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-6 w-full">

  {/* Add to Cart */}

  <button
    className="w-full sm:w-auto min-w-[240px]
               px-10 py-5
               rounded-full
               border-2 border-white
               text-white
               text-lg font-semibold
               whitespace-nowrap
               flex items-center justify-center
               hover:bg-white hover:text-[#2E473B]
               transition-all duration-300"
  >
    Add to Cart
  </button>

  {/* Buy Now */}

  <Link
    href="/checkout"
    className="w-full sm:w-auto min-w-[240px]
               px-10 py-5
               rounded-full
               bg-[#C7A25A]
               text-[#2E473B]
               text-lg font-semibold
               whitespace-nowrap
               flex items-center justify-center
               hover:bg-[#D7B56D]
               transition-all duration-300"
  >
    Buy Now
  </Link>

</div>
          {/* Bottom Trust Text */}

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-[#D8D4CC] text-sm">

            <span>✓ 100% Botanical Formula</span>

            <span>✓ Secure Checkout</span>

            <span>✓ Cash on Delivery Available</span>

          </div>

        </div>

      </div>

    </section>
  );
}