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
    <section className="bg-[#F8F5EF] py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-[#7C9A7D] text-sm font-medium">
            Why Choose Us
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E473B] leading-tight">
            Crafted With Nature,
            <br />
            Made With Care
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Every bottle reflects our commitment to quality, craftsmanship,
            and carefully selected botanical ingredients.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[32px] p-10 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-[#F8F5EF] flex items-center justify-center">

                  <Icon
                    size={34}
                    className="text-[#2E473B]"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#2E473B]">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
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