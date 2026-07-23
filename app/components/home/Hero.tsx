export default function Hero() {
  return (
    <section       id="home"
 className="min-h-screen bg-[#F8F5EF] flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left Content */}
        <div className="max-w-xl">

          <p className="uppercase tracking-[0.3em] text-[#7C9A7D] text-sm font-medium">
            Premium Botanical Care
          </p>

          <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold text-[#2E473B] leading-[1.05]">
            Everyday
            <br />
            Botanical Luxury
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-lg">
            Discover luxurious botanical products crafted with nature's finest
            ingredients to nourish your hair and elevate your daily self-care
            ritual.
          </p>
          <br />

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap items-center gap-5">

            <button
              className="h-12 px-6  bg-[#2E473B] text-white rounded-full text-sm uppercase tracking-[0.15em] font-medium shadow-md hover:bg-[#23392F] hover:shadow-xl transition-all duration-300"
            >
              Shop Collection
            </button>

            <button
              className="h-12 px-6 border border-[#2E473B] text-[#2E473B] rounded-full text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#2E473B] hover:text-white hover:shadow-lg transition-all duration-300"
            >
              Our Story
            </button>

          </div>

        </div>

        {/* Right Content */}
        <div className="flex justify-center">

          <div className="w-full max-w-[430px] h-[520px] rounded-[40px] bg-[#E7E2D8] shadow-xl flex items-center justify-center">

            <p className="text-[#7C9A7D] text-lg tracking-widest uppercase">
              Product Image
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}