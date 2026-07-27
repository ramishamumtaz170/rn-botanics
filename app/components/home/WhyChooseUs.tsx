import {
  Leaf,
  Droplets,
  ShieldCheck,
  Sparkles,
  BadgeCheck,
  Recycle,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Leaf,
      title: "100% Botanical",
      description:
        "Made with carefully selected botanical oils and herbs.",
    },
    {
      icon: Droplets,
      title: "Premium Quality",
      description:
        "Every ingredient is chosen with quality and care in mind.",
    },
    {
      icon: ShieldCheck,
      title: "Free From Mineral Oil",
      description:
        "Our formula focuses on botanical ingredients without mineral oil.",
    },
    {
      icon: Sparkles,
      title: "Handcrafted",
      description:
        "Prepared in small batches with attention to every detail.",
    },
    {
      icon: BadgeCheck,
      title: "Traditional Formula",
      description:
        "Inspired by time-honored botanical hair care traditions.",
    },
    {
      icon: Recycle,
      title: "Small Batch Production",
      description:
        "Made in limited batches to maintain consistency and freshness.",
    },
  ];

  return (
    <section className="bg-[#F8F5EF] py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Heading Section (Centered) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
          <p className="uppercase tracking-[0.25em] text-[#7C9A7D] text-xs sm:text-sm font-semibold text-center">
            Why Choose Us
          </p>

          <h3 className="mt-3 sm:mt-5 text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2E473B] leading-tight text-center">
            Crafted With Nature,
            <br />
            Made With Care
          </h3>

          <p className="mt-3 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-xl mx-auto px-6 sm:px-0">
            Every bottle reflects our commitment to quality, craftsmanship,
            and carefully selected botanical ingredients.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16 w-full px-4 sm:px-0">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                /* Enforced flex flex-col items-center text-center for 100% centering */
                className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center w-full max-w-[320px] xs:max-w-[360px] sm:max-w-none mx-auto"
              >
                {/* Centered Icon Circle */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F8F5EF] flex items-center justify-center shrink-0 mx-auto">
                  <Icon
                    size={28}
                    className="text-[#2E473B] sm:hidden"
                  />
                  <Icon
                    size={34}
                    className="text-[#2E473B] hidden sm:block"
                  />
                </div>

                {/* Centered Title */}
                <h3 className="mt-5 sm:mt-8 text-xl sm:text-2xl font-semibold text-[#2E473B] text-center">
                  {feature.title}
                </h3>

                {/* Centered Description with side padding for mobile */}
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed text-center max-w-xs mx-auto px-2 sm:px-0">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}