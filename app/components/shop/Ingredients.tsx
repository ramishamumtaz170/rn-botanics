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
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

       {/* Heading */}

<div className="flex flex-col items-center text-center">

  <p className="uppercase tracking-[0.35em] text-[#7C9A7D] text-sm font-medium">
    Botanical Blend
  </p>

  <h2 className="mt-5 text-2xl font-bold text-[#2E473B]">
    Nature's Finest Ingredients
  </h2>

  <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
    Every bottle is infused with carefully selected botanical oils and herbs,
    traditionally known for nourishing the scalp and supporting healthy hair.
  </p>

</div>
        {/* Ingredients Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">

          {ingredients.map((item) => (
            <div
              key={item}
              className="bg-[#F8F5EF] rounded-2xl p-6 text-center hover:shadow-lg transition duration-300"
            >
              
              <h3 className="font-semibold text-[#2E473B]">
                {item}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}