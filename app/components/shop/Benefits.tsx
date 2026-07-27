export default function Benefits() {
  const benefits = [
    {
      title: "Promotes Hair Growth",
      emoji: "🌱",
    },
    {
      title: "Reduces Hair Fall",
      emoji: "🍃",
    },
    {
      title: "Adds Natural Shine",
      emoji: "✨",
    },
    {
      title: "Strengthens Hair Roots",
      emoji: "🌿",
    },
  ];

  return (
    <section className="bg-[#F8F5EF] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center w-full px-4">
          <p className="uppercase tracking-[0.25em] text-[#7C9A7D] text-xs sm:text-sm font-semibold">
            Why Choose Us
          </p>

          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2E473B]">
            Botanical Benefits
          </h2>
        </div>

        {/* Compact Benefits Row (Icon Left, Title Right) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-6 sm:mt-8 w-full">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#E8E2D6] hover:border-[#7C9A7D] flex flex-row items-center gap-3.5 sm:gap-4 w-full max-w-[320px] xs:max-w-[360px] sm:max-w-none mx-auto"
            >
              {/* Icon on Left */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#E8F3EA] flex items-center justify-center text-lg sm:text-xl shrink-0 group-hover:scale-105 transition-transform duration-300">
                <span>{benefit.emoji}</span>
              </div>

              {/* Title on Right */}
              <h3 className="text-base sm:text-lg font-bold text-[#2E473B] text-left leading-snug">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}