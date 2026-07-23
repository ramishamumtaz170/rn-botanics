export default function OurPhilosophy() {
  return (
    <section className="bg-[#2E473B] py-32 mt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="flex flex-col items-center text-center">

          <p className="uppercase tracking-[0.35em] text-[#BFCBB8] text-sm font-medium">
            Our Philosophy
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F5EF] leading-tight">
            Nature Deserves
            <br />
            To Be Trusted.
          </h2>

          <p className="mt-8 max-w-3xl text-center text-lg leading-9 text-[#E6DFD3]">
            At <span className="font-semibold text-[#F8F5EF]">R & N Botanics</span>, we
            believe beautiful hair begins with nature. Every bottle is
            thoughtfully handcrafted using carefully selected botanical oils
            and herbs, inspired by generations of traditional wisdom and
            refined with modern craftsmanship.
          </p>

          {/* Divider */}

          <div className="w-24 h-px bg-[#7C9A7D] my-16"></div>

        </div>

        {/* Values */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center">

          <div>
            <h3 className="text-5xl font-bold text-[#F8F5EF]">
              12+
            </h3>

            <p className="mt-4 uppercase tracking-[0.2em] text-[#D7D1C5] text-sm">
              Botanical Ingredients
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#F8F5EF]">
              100%
            </h3>

            <p className="mt-4 uppercase tracking-[0.2em] text-[#D7D1C5] text-sm">
              Botanical Formula
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#F8F5EF]">
              Small
            </h3>

            <p className="mt-4 uppercase tracking-[0.2em] text-[#D7D1C5] text-sm">
              Batch Crafted
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}