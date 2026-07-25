import {
  Leaf,
  Droplets,
  FlaskConical,
  Sparkles,
} from "lucide-react";

export default function OurProcess() {
  const steps = [
    {
      icon: Leaf,
      title: "Carefully Selected Herbs",
      description:
        "Premium botanical herbs are carefully selected to create every batch with exceptional quality.",
    },
    {
      icon: Droplets,
      title: "Botanical Infusion",
      description:
        "The herbs are slowly infused into nourishing botanical oils to preserve their natural goodness.",
    },
    {
      icon: FlaskConical,
      title: "Handcrafted In Small Batches",
      description:
        "Every bottle is handcrafted with patience, care, and attention to every detail.",
    },
    {
      icon: Sparkles,
      title: "Ready To Nourish",
      description:
        "A luxurious botanical blend prepared to become part of your daily hair care ritual.",
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="w-full flex flex-col items-center text-center">

          <p className="uppercase tracking-[0.3em] text-[#7C9A7D] text-sm font-medium">
            Our Process
          </p>

          <h3 className="mt-5 text-2xl md:text-5xl lg:text-6xl font-bold text-[#2E473B] leading-tight">
            From Nature To Your Hair
          </h3>

          <p className="mt-6 max-w-3xl text-lg text-gray-600 leading-8 text-center">
            Every bottle follows a thoughtful journey—from carefully selected
            botanicals to a handcrafted blend made with love.
          </p>

        </div>

        {/* Timeline */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-24">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >

                {/* Desktop Connecting Line */}

                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-[#D9D3C8]"></div>
                )}

                {/* Icon */}

                <div className="relative z-10 w-20 h-20 rounded-full bg-[#F8F5EF] shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105">

                  <Icon
                    size={34}
                    className="text-[#2E473B]"
                  />

                </div>

                {/* Step Number */}

                <div className="mt-6 w-10 h-10 rounded-full bg-[#2E473B] text-white flex items-center justify-center font-semibold shadow-md">
                  {index + 1}
                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-semibold text-[#2E473B] leading-snug">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-gray-600 leading-7 max-w-xs">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}