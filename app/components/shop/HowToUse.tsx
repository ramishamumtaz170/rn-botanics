export default function HowToUse() {
  const steps = [
    {
      number: "01",
      title: "Apply",
      description:
        "Apply a generous amount of hair oil directly to your scalp and along the lengths of your hair.",
    },
    {
      number: "02",
      title: "Massage",
      description:
        "Gently massage with your fingertips for 5–10 minutes to stimulate the scalp and improve absorption.",
    },
    {
      number: "03",
      title: "Leave",
      description:
        "Leave the oil on for at least 2–3 hours or overnight for deep nourishment.",
    },
    {
      number: "04",
      title: "Wash",
      description:
        "Rinse thoroughly with a mild shampoo and enjoy softer, healthier-looking hair.",
    },
  ];

  return (
    <section className="bg-[#F8F5EF] pt-40 pb-32 mt-20">
          <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

       <div className="flex flex-col items-center text-center w-full">
          <p className="uppercase tracking-[0.35em] text-[#7C9A7D] text-sm font-medium">
            Simple Routine
          </p>

          <h2 className="mt-5 text-5xl font-bold text-[#2E473B]">
            How To Use
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-center text-lg leading-8 text-gray-600">
            Follow these simple steps to get the best results from your
            R & N Botanics Signature Hair Oil.
          </p>

        </div>

        {/* Steps */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-full bg-[#2E473B] text-white flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#2E473B]">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}