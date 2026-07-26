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
      className="scroll-mt-24 bg-white py-28"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center flex flex-col items-center">

          <p className="uppercase tracking-[0.3em] text-[#7C9A7D] text-sm">
            Botanical Blend
          </p>


          <h3 className="mt-4 text-2xl font-bold text-[#2E473B]">
            Nature's Finest Ingredients
          </h3>


          <p className="mt-6 max-w-3xl text-center text-gray-600 leading-8">
            Every bottle is handcrafted using premium botanical oils and
            carefully selected herbs inspired by traditional hair care rituals.
          </p>

        </div>



        {/* Ingredient Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 mb-28">

          {ingredients.map((ingredient) => (

            <div
              key={ingredient.name}
              className="group bg-[#F8F5EF] rounded-[30px] p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="w-32 h-32 mx-auto rounded-full bg-white shadow-md flex items-center justify-center">

                <Image
                  src={ingredient.image}
                  alt={ingredient.name}
                  width={90}
                  height={90}
                  className="object-contain transition duration-500 group-hover:scale-110"
                />

              </div>


              <h3 className="mt-8 text-2xl font-semibold text-[#2E473B]">
                {ingredient.name}
              </h3>


              <p className="mt-4 text-gray-600 leading-7">
                {ingredient.description}
              </p>


            </div>

          ))}

        </div>



        {/* Additional Ingredients */}

        <div className="mt-32 mb-32 flex justify-center">

          <div className="w-full max-w-4xl bg-[#F8F5EF] rounded-[30px] p-10 text-center shadow-sm">


            <h3 className="text-2xl font-semibold text-[#2E473B]">
              Enriched With More Botanical Goodness
            </h3>


            <p className="mt-5 text-gray-600 leading-8">
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