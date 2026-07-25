export default function Benefits() {
  const benefits = [
    {
      title: "Promotes Hair Growth",
      description:
        "A carefully selected blend of botanical oils and herbs helps nourish the scalp and support healthier hair growth.",
    },
    {
      title: "Reduces Hair Fall",
      description:
        "Strengthens the hair from the roots to help reduce breakage and minimize everyday hair fall with regular use.",
    },
    {
      title: "Adds Natural Shine",
      description:
        "Restores softness and enhances your hair's natural shine without leaving a greasy residue.",
    },
    {
      title: "Strengthens Hair Roots",
      description:
        "Deeply nourishes the scalp and roots to improve overall hair strength and resilience.",
    },
  ];

  return (
    <section className="py-32 bg-[#F8F5EF]">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <div className="flex flex-col items-center text-center">

          <p className="uppercase tracking-[0.35em] text-[#7C9A7D] text-sm font-medium">
            Why Choose Us
          </p>

          <h2 className="mt-5 text-2xl font-bold text-[#2E473B]">
            Botanical Benefits
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-600 leading-8">
            Every bottle is thoughtfully handcrafted using nature's finest
            ingredients to support healthier, stronger, and shinier hair.
          </p>

        </div>


        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >

              <div className="w-14 h-14 rounded-full bg-[#EDF4EE] flex items-center justify-center text-2xl mb-6">
                {benefit.title === "Promotes Hair Growth" && "🌱"}
                {benefit.title === "Reduces Hair Fall" && "🍃"}
                {benefit.title === "Adds Natural Shine" && "✨"}
                {benefit.title === "Strengthens Hair Roots" && "🌿"}
              </div>

              <h3 className="text-2xl font-bold text-[#2E473B]">
                {benefit.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {benefit.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}