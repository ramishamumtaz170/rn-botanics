export default function FeaturedProducts() {
  return (
    <section className="bg-[#F8F5EF] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center flex flex-col items-center">

  <p className="uppercase tracking-[0.3em] text-[#7C9A7D] text-sm">
    Signature Collection
  </p>

  <h2 className="mt-4 text-5xl font-bold text-[#2E473B]">
    Crafted For Healthy Hair
  </h2>

  <p className="mt-6 max-w-2xl text-center text-gray-600 leading-8">
    Our first botanical formulation is designed to deeply nourish,
    strengthen and restore your hair naturally.
  </p>

</div>
        {/* Product Card */}

        <div className="mt-20 flex justify-center">

          <div className="bg-white rounded-[32px] shadow-lg overflow-hidden w-[360px] hover:-translate-y-2 transition-all duration-500">

            {/* Image */}

            <div className="h-[350px] bg-[#E9E3D8] flex items-center justify-center">

              <span className="text-[#7C9A7D] tracking-[0.2em] uppercase">
                Product Image
              </span>

            </div>

            {/* Content */}

            <div className="p-8">

              <h3 className="text-3xl font-semibold text-[#2E473B]">
                Luxury Hair Oil
              </h3>

              <p className="mt-3 text-gray-600">
                Botanical Hair Treatment
              </p>

              <p className="mt-6 text-2xl font-bold text-[#2E473B]">
                Rs. XXXX
              </p>

              <button className="mt-8 w-full bg-[#2E473B] text-white rounded-full py-4 uppercase tracking-[0.15em] hover:bg-[#22372d] transition-all">
                Shop Now
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}