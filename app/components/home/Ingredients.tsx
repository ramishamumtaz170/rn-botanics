
import Image from "next/image";

export default function Ingredients() {
  const ingredients = [
    {
      name: "Amla",
      image: "/images/ingredients/amla.png",
      description: "A traditional botanical treasured in hair care.",
    },
    {
      name: "Reetha",
      image: "/images/ingredients/reetha.png",
      description: "A traditional ingredient used in herbal hair care.",
    },
    {
      name: "Shikakai",
      image: "/images/ingredients/shikakai.png",
      description: "A botanical long valued in traditional hair rituals.",
    },
    {
      name: "Rosemary",
      image: "/images/ingredients/rosemary1.png",
      description: "An aromatic herb included in botanical hair care.",
    },
    {
      name: "Hibiscus",
      image: "/images/ingredients/hibiscus.png",
      description: "A flower cherished in traditional hair-care rituals.",
    },
    {
      name: "Aloe Vera",
      image: "/images/ingredients/aloe-vera.png",
      description: "A familiar botanical used in personal-care formulations.",
    },
    {
      name: "Vitamin E",
      image: "/images/ingredients/vitamin-e.png",
      description: "A widely used ingredient in personal-care products.",
    },
    {
      name: "Bhringraj",
      image: "/images/ingredients/bhringraj.png",
      description: "A traditional Ayurvedic botanical for hair care.",
    },
    {
      name: "Fenugreek",
      image: "/images/ingredients/fenugreek.png",
      description: "A seed traditionally used in herbal hair-care rituals.",
    },
    {
      name: "Black Seed",
      image: "/images/ingredients/black-seed.png",
      description: "Also known as kalonji, a traditional botanical ingredient.",
    },
    {
      name: "Flaxseed",
      image: "/images/ingredients/flaxseed.png",
      description: "A plant-derived ingredient used in hair-care formulations.",
    },
  ];

  return (
    <section
      id="ingredients"
      className="scroll-mt-24 w-full overflow-x-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading Section */}
        <div className="flex w-full flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7C9A7D] sm:text-sm">
            Inspired by Nature
          </p>

          <h3 className="mt-3 font-serif text-3xl text-[#2E473B] sm:mt-4 sm:text-4xl lg:text-5xl">
            Nature&apos;s Finest Ingredients
          </h3>

          <p className="mx-auto mt-4 max-w-2xl px-4 text-center text-sm leading-relaxed text-gray-600 sm:mt-5 sm:px-0 sm:text-base md:text-lg">
            Discover the botanicals and traditional ingredients that
            inspire R &amp; N Botanics. Each product has its own
            thoughtfully developed formulation, crafted with care
            for your everyday hair-care ritual.
          </p>
        </div>

        {/* Ingredient Cards Grid */}
        <div className="mt-10 grid w-full grid-cols-1 justify-items-center gap-4 px-2 sm:mt-14 sm:grid-cols-2 sm:gap-5 sm:px-0 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.name}
              className="group mx-auto flex w-full max-w-[380px] flex-row items-center gap-4 rounded-[24px] bg-[#F8F5EF] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-[28px] sm:p-6"
            >
              {/* Ingredient Image */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-sm sm:h-20 sm:w-20">
                <Image
                  src={ingredient.image}
                  alt={ingredient.name}
                  width={55}
                  height={55}
                  className="h-11 w-11 object-contain transition duration-300 group-hover:scale-105 sm:h-[55px] sm:w-[55px]"
                />
              </div>

              {/* Ingredient Name & Description */}
              <div className="min-w-0 flex-1 text-left">
                <h3 className="text-lg font-semibold text-[#2E473B] sm:text-xl">
                  {ingredient.name}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:mt-2 sm:text-sm">
                  {ingredient.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mx-auto mt-12 max-w-3xl text-center sm:mt-16">
          <div className="mx-auto mb-5 h-px w-16 bg-[#7C9A7D]" />

          <p className="font-serif text-xl italic text-[#2E473B] sm:text-2xl">
            Rooted in Tradition. Inspired by Nature.
          </p>

          <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
            Thoughtfully bringing botanical inspiration into your everyday care.
          </p>
        </div>
      </div>
    </section>
  );
}
