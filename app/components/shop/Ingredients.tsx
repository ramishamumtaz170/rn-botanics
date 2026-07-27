import { Leaf } from "lucide-react";

export default function Ingredients() {
  const ingredients = [
    "Mustard Oil",
    "Coconut Oil",
    "Amla",
    "Rosemary",
    "Hibiscus",
    "Bhringraj",
    "Fenugreek",
    "Jatamansi",
    "Reetha",
    "Aloe Vera",
    "Vitamin E",
    "Kalonji",
  ];

  return (
    <section className="py-8 sm:py-12 bg-white px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center w-full px-4">
          <p className="uppercase tracking-[0.25em] text-[#7C9A7D] text-xs sm:text-sm font-semibold">
            Botanical Blend
          </p>

          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2E473B]">
            Nature&apos;s Finest Ingredients
          </h2>

          <p className="mt-3 max-w-xl mx-auto text-center text-xs sm:text-base text-gray-600 leading-relaxed px-4 sm:px-0">
            Every bottle is infused with carefully selected botanical oils and herbs,
            traditionally known for nourishing the scalp and supporting healthy hair.
          </p>
        </div>

        {/* Compact & Stylish Botanical Pill Badges */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 mt-6 sm:mt-8 max-w-5xl mx-auto px-2">
          {ingredients.map((item) => (
            <div
              key={item}
              className="bg-[#F8F5EF] hover:bg-[#E8F3EA] border border-[#E8E2D6] hover:border-[#7C9A7D] rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center gap-2 transition-all duration-300 shadow-xs hover:scale-105 cursor-default"
            >
              {/* Botanical Dot Accent */}
              <span className="w-2 h-2 rounded-full bg-[#7C9A7D] shrink-0"></span>

              <h3 className="font-bold text-[#2E473B] text-xs sm:text-sm whitespace-nowrap">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}