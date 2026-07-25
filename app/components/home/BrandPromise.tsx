import {
  Leaf,
  Sparkles,
  PackageCheck,
  HeartHandshake,
} from "lucide-react";

export default function BrandPromise() {
  const promises = [
    {
      icon: Leaf,
      title: "100% Botanical",
      description: "Made with carefully selected botanical ingredients.",
    },
    {
      icon: HeartHandshake,
      title: "Handcrafted",
      description: "Prepared in small batches with exceptional care.",
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Luxury formulations designed for everyday self-care.",
    },
    {
      icon: PackageCheck,
      title: "Nationwide Delivery",
      description: "Fast and reliable shipping across Pakistan.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-[#7C9A7D] text-sm">
            Our Promise
          </p>

          <h4 className="mt-4 text-5xl font-bold text-[#2E473B]">
            Crafted With Nature,
            <br />
            Designed For You
          </h4>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {promises.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="text-center p-8 rounded-3xl hover:shadow-xl transition duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-[#F8F5EF] mx-auto flex items-center justify-center">

                  <Icon
                    size={34}
                    className="text-[#2E473B]"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#2E473B]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}