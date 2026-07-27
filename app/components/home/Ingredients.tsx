import Image from "next/image";

export default function Ingredients() {
  const ingredients = [
    {
      name: "Coconut Oil",
      image: "/images/ingredients/coconut.png",
      description: "Deeply moisturizes and nourishes dry hair.",
    },
    {
      name: "Mustard Oil",
      image: "/images/ingredients/mustard3.png",
      description: "Traditionally used to strengthen and nourish hair.",
    },
    {
      name: "Rosemary",
      image: "/images/ingredients/rosemary1.png",
      description: "Supports healthy-looking, fuller hair.",
    },
    {
      name: "Amla",
      image: "/images/ingredients/amla.png",
      description: "Rich in nutrients that help improve natural shine.",
    },
    {
      name: "Hibiscus",
      image: "/images/ingredients/hibiscus.png",
      description: "Helps condition and soften hair.",
    },
    {
      name: "Bhringraj",
      image: "/images/ingredients/bhringraj.png",
      description: "A treasured Ayurvedic herb for hair care.",
    },
    {
      name: "Fenugreek",
      image: "/images/ingredients/fenugreek.png",
      description: "Helps nourish and smooth the hair.",
    },
    {
      name: "Jatamansi",
      image: "/images/ingredients/jatamansi.png",
      description: "A traditional botanical used in herbal hair care.",
    },
  ];

  return (
    <section
      id="ingredients"
      className="scroll-mt-24 bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center flex flex-col items-center px-4">
          <p className="uppercase tracking-[0.25em] text-[#7C9A7D] text-xs sm:text-sm font-semibold">
            Botanical Blend
          </p>

          <h3 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2E473B]">
            Nature&apos;s Finest Ingredients
          </h3>

          <p className="mt-3 sm:mt-5 text-center text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto px-6 sm:px-0">
  Every bottle is handcrafted using premium botanical oils and
  carefully selected herbs inspired by traditional hair care rituals.
</p>
        </div>
{/* Ingredient Cards Grid: Centered on mobile with justify-items-center & max-w-[320px] */}
<div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-16 w-full px-4 sm:px-0">
  {ingredients.map((ingredient) => (
    <div
      key={ingredient.name}
      /* Capped at max-w-[320px] on mobile with mx-auto to guarantee perfect horizontal centering */
      className="group bg-[#F8F5EF] rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 flex flex-row items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full max-w-[320px] sm:max-w-none mx-auto"
    >
      {/* Left Side: Image */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
        <Image
          src={ingredient.image}
          alt={ingredient.name}
          width={45}
          height={45}
          className="object-contain sm:w-[55px] sm:h-[55px] transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Right Side: Title & Description */}
      <div className="flex-1 text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-[#2E473B]">
          {ingredient.name}
        </h3>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
          {ingredient.description}
        </p>
      </div>
    </div>
  ))}
</div>

{/* Additional Ingredients Box */}
<div className="mt-16 sm:mt-24 mb-12 sm:mb-20 flex justify-center">
  <div className="w-full max-w-4xl bg-[#F8F5EF] rounded-[24px] sm:rounded-[30px] p-6 sm:p-10 text-center shadow-sm">
    <h3 className="text-xl sm:text-2xl font-semibold text-[#2E473B]">
      Enriched With More Botanical Goodness
    </h3>

    <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed px-6 sm:px-0">
      Infused with Aloe Vera Oil, Vitamin E Oil, Shikakai, Reetha,
      Curry Leaves, Kalonji (Black Seed), Ratanjot and other carefully
      selected botanical herbs to create a rich and luxurious hair
      care experience.
    </p>
  </div>
</div>

      </div>
    </section>
  );
}