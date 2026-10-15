
import {
  Leaf,
  Droplets,
  ShieldCheck,
  Sparkles,
  BadgeCheck,
  Recycle,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Botanical Inspiration",
    description:
      "Inspired by nature and traditional botanical self-care rituals.",
  },
  {
    icon: Droplets,
    title: "Thoughtfully Selected",
    description:
      "Ingredients are considered carefully for each product's purpose.",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    description:
      "We value attention to detail throughout our product-making process.",
  },
  {
    icon: Sparkles,
    title: "Made With Care",
    description:
      "Every product reflects our passion for thoughtful everyday self-care.",
  },
  {
    icon: BadgeCheck,
    title: "Tradition Meets Today",
    description:
      "Traditional botanical inspiration meets modern self-care routines.",
  },
  {
    icon: Recycle,
    title: "A Thoughtful Approach",
    description:
      "We aim to make everyday care feel meaningful, considered, and personal.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="w-full overflow-x-hidden bg-[#F8F5EF] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        {/* Editorial Heading */}
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#7C9A7D] sm:text-sm">
            The R &amp; N Difference
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-[#2E473B] sm:mt-5 sm:text-4xl lg:text-5xl">
            Thoughtfully Crafted,
            <br />
            <span className="italic">Inspired by Nature.</span>
          </h2>

          {/* <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8">
            We bring together botanical inspiration, traditional
            self-care rituals, and a passion for thoughtful
            formulations to make everyday care feel special.
          </p> */}
        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid w-full grid-cols-1 justify-items-center gap-5 px-2 sm:mt-16 sm:grid-cols-2 sm:gap-6 sm:px-0 lg:grid-cols-3 lg:gap-7">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group mx-auto flex w-full max-w-[400px] flex-col items-center rounded-[24px] border border-[#E7E7DD] bg-white/80 px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#7C9A7D]/50 hover:shadow-xl hover:shadow-[#2E473B]/5 sm:rounded-[28px] sm:px-8 sm:py-10"
              >
                <span className="mb-5 font-serif text-xs italic text-[#7C9A7D]">
                  0{index + 1}
                </span>

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F8F5EF] transition-colors duration-300 group-hover:bg-[#E9EDE3] sm:h-[76px] sm:w-[76px]">
                  <Icon
                    size={30}
                    strokeWidth={1.5}
                    className="text-[#2E473B]"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 font-serif text-xl text-[#2E473B] sm:mt-6 sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-gray-600">
                  {feature.description}
                </p>

                <div className="mt-6 h-px w-8 bg-[#7C9A7D] transition-all duration-300 group-hover:w-14" />
              </article>
            );
          })}
        </div>

        {/* Closing Brand Statement */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="font-serif text-xl italic text-[#2E473B] sm:text-2xl">
            Everyday Botanical Luxury
          </p>
        </div>
      </div>
    </section>
  );
}
