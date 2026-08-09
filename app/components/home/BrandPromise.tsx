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
    /* Increased top & bottom spacing (my-6 sm:my-12 py-20 sm:py-28 lg:py-32) */
    <section className="bg-white my-4 sm:my-8 py-16 sm:py-28 lg:py-6 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-20 px-4">
          <p className="mt-2 sm:mt-4 uppercase tracking-[0.25em] text-[#7C9A7D] text-xs sm:text-sm font-semibold">
            Our Promise
          </p>

          <h4 className="mt-2 sm:mt-4 text-2xl sm:text-3xl lg:text-2xl font-bold text-[#2E473B] leading-tight">
            Crafted With Nature,
            <br />
            Designed For You
          </h4>
        </div>

        {/* Promises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {promises.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl hover:shadow-xl transition duration-300 bg-[#FAF8F5] md:bg-transparent"
              >
                {/* Green Background & Skin/Cream Icon */}
                <div className="w-10 h-10 sm:w-20 sm:h-20 rounded-full bg-[#2E473B] flex items-center justify-center shrink-0 shadow-md">
                  <Icon
                    size={28}
                    className="text-[#F8F5EF] sm:hidden"
                  />
                  <Icon
                    size={34}
                    className="text-[#F8F5EF] hidden sm:block"
                  />
                </div>

                <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-semibold text-[#2E473B]">
                  {item.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto px-4 sm:px-0">
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