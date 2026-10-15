
"use client";

import { useRef, useState, type UIEvent } from "react";
import type { Product } from "@/app/constants/product";

type ProductInfoTabsProps = {
  product: Product;
};

type TabKey = "description" | "ingredients" | "benefits" | "usage";

type UsageStep = {
  title: string;
  description: string;
};

type IngredientSection = {
  title: string;
  description: string;
  items: string[];
};

export default function ProductInfoTabs({
  product,
}: ProductInfoTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("description");
  const [activeStep, setActiveStep] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const tabs: { key: TabKey; label: string }[] = [
    { key: "description", label: "Description" },
    { key: "ingredients", label: "Ingredients" },
    { key: "benefits", label: "Benefits" },
    { key: "usage", label: "How To Use" },
  ];

  // Product detection
  const isOil = product.type === "oil";
  const isShampoo = product.type === "shampoo";
  const isComb = product.type === "comb";

  const bundleItemsText = (product.bundleItems ?? [])
    .join(" ")
    .toLowerCase();

  const isCompleteBundle =
    bundleItemsText.includes("comb") &&
    bundleItemsText.includes("shampoo") &&
    bundleItemsText.includes("oil");

  const isOilShampooBundle =
    bundleItemsText.includes("shampoo") &&
    bundleItemsText.includes("oil") &&
    !isCompleteBundle;

  const isBundle = isOilShampooBundle || isCompleteBundle;

  // Individual product ingredients
  const oilIngredients = [
    "Mustard Oil",
    "Coconut Oil",
    "Aloe Vera Oil",
    "Vitamin E Oil",
    "Amla",
    "Fenugreek",
    "Rosemary",
    "Hibiscus",
    "Kalonji (Black Seed)",
    "Bhringraj",
    "Reetha",
    "Shikakai",
  ];

  const shampooIngredients = [
    "Amla",
    "Reetha",
    "Shikakai",
    "Rosemary",
    "Hibiscus",
    "Aloe Vera",
    "Vitamin E",
    "Flaxseed",
    "Coffee",
    "Decyl Glucoside",
    "Cocobetain",
    "Keratin",
    "Silk Protein",
  ];

  // Bundle ingredients are displayed separately by product.
  const oilShampooBundleIngredients: IngredientSection[] = [
    {
      title: "Signature Hair Oil",
      description:
        "A botanical blend of oils and traditional herbs for your hair-care routine.",
      items: oilIngredients,
    },
    {
      title: "Coffee Velvet Shampoo",
      description:
        "A coffee-inspired, sulfate-free shampoo featuring cleansing and hair-care ingredients.",
      items: shampooIngredients,
    },
  ];

  const completeBundleIngredients: IngredientSection[] = [
    ...oilShampooBundleIngredients,
  ];

  // Benefits
  const oilBenefits = [
    "Helps reduce hair fall",
    "Nourishes the scalp and hair",
    "Helps strengthen hair from the roots",
    "Supports healthy-looking hair",
    "Helps improve shine and softness",
    "Helps care for dry and frizzy hair",
  ];

  const shampooBenefits = [
    "Cleanses the hair and scalp",
    "Helps leave hair feeling soft and smooth",
    "Helps improve the appearance of shine",
    "Helps manage dry-looking and frizzy hair",
    "Combines hair care with botanical ingredients",
  ];

  const combBenefits = [
    "Helps detangle hair gently",
    "Designed for comfortable everyday grooming",
    "Helps reduce pulling while combing when used gently",
    "Suitable for everyday hair-care routines",
    "A simple addition to your hair-care essentials",
  ];

  const oilShampooBundleBenefits = [
    "Combines pre-wash oiling with everyday cleansing",
    "Helps nourish the scalp and hair with a botanical oil blend",
    "Helps reduce hair fall and care for dry-looking hair",
    "Helps leave hair feeling soft, smooth, and manageable",
    "Supports a simple, consistent hair-care routine",
  ];

  const completeBundleBenefits = [
    ...oilShampooBundleBenefits,
    "Includes a wooden comb for everyday grooming",
    "Helps detangle hair with gentle, controlled strokes",
    "Brings oiling, cleansing, and grooming together in one set",
  ];

  const benefits = isCompleteBundle
    ? completeBundleBenefits
    : isOilShampooBundle
      ? oilShampooBundleBenefits
      : isOil
        ? oilBenefits
        : isShampoo
          ? shampooBenefits
          : isComb
            ? combBenefits
            : [];

  // Usage instructions
  const combUsageSteps: UsageStep[] = [
    {
      title: "Start",
      description:
        "Start with dry or slightly damp hair and gently separate any large tangles with your fingers.",
    },
    {
      title: "Divide",
      description:
        "Divide your hair into manageable sections, especially if it is long or thick.",
    },
    {
      title: "Comb",
      description:
        "Begin at the ends and work upward gradually, using gentle strokes without pulling.",
    },
    {
      title: "Care",
      description:
        "Clean the comb regularly and store it in a dry, clean place.",
    },
  ];

  const oilUsageSteps: UsageStep[] = [
    {
      title: "Apply",
      description:
        "Part your hair and apply the oil directly to your scalp using the nozzle.",
    },
    {
      title: "Massage",
      description:
        "Gently massage your scalp with your fingertips to distribute the oil.",
    },
    {
      title: "Leave In",
      description:
        "Leave it on for 2–3 hours or overnight, according to your preference.",
    },
    {
      title: "Wash",
      description:
        "Wash your hair with shampoo and style as usual.",
    },
  ];

  const shampooUsageSteps: UsageStep[] = [
    {
      title: "Wet",
      description:
        "Thoroughly wet your hair and scalp with lukewarm water.",
    },
    {
      title: "Apply",
      description:
        "Apply a suitable amount of shampoo to your wet scalp and hair.",
    },
    {
      title: "Massage",
      description:
        "Gently massage your scalp to work the shampoo through your hair.",
    },
    {
      title: "Rinse",
      description:
        "Rinse thoroughly with water. Repeat if needed.",
    },
  ];

  // Bundle 1: Signature Hair Oil + Coffee Velvet Shampoo
  const oilShampooBundleUsageSteps: UsageStep[] = [
    {
      title: "Apply Oil",
      description:
        "Part your hair and apply Signature Hair Oil directly to your scalp using the nozzle.",
    },
    {
      title: "Massage",
      description:
        "Gently massage your scalp with your fingertips to distribute the oil.",
    },
    {
      title: "Leave In",
      description:
        "Leave the oil on for 2–3 hours or overnight, according to your preference.",
    },
    {
      title: "Cleanse",
      description:
        "Wet your hair, apply Coffee Velvet Shampoo, massage your scalp gently, and rinse thoroughly.",
    },
  ];

  // Bundle 2: Signature Hair Oil + Coffee Velvet Shampoo + Wooden Comb
  const completeBundleUsageSteps: UsageStep[] = [
    ...oilShampooBundleUsageSteps,
    {
      title: "Detangle",
      description:
        "Once your hair is dry or slightly damp, use the wooden comb gently. Start at the ends and work upward.",
    },
  ];

  const usageSteps: UsageStep[] = isCompleteBundle
    ? completeBundleUsageSteps
    : isOilShampooBundle
      ? oilShampooBundleUsageSteps
      : isOil
        ? oilUsageSteps
        : isShampoo
          ? shampooUsageSteps
          : isComb
            ? combUsageSteps
            : [];

  // Reset the usage carousel when switching tabs
  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    setActiveStep(0);

    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  // Carousel controls
  const goToStep = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = carousel.querySelectorAll<HTMLElement>(
      "[data-usage-card]"
    );
    const card = cards[index];

    if (!card) return;

    carousel.scrollTo({
      left: card.offsetLeft - carousel.offsetLeft,
      behavior: "smooth",
    });

    setActiveStep(index);
  };

  const moveStep = (direction: -1 | 1) => {
    if (usageSteps.length === 0) return;

    const nextIndex = Math.max(
      0,
      Math.min(usageSteps.length - 1, activeStep + direction)
    );

    goToStep(nextIndex);
  };

  const handleCarouselScroll = (event: UIEvent<HTMLDivElement>) => {
    const carousel = event.currentTarget;
    const cards = carousel.querySelectorAll<HTMLElement>(
      "[data-usage-card]"
    );

    if (!cards.length) return;

    const carouselCenter =
      carousel.scrollLeft + carousel.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - carouselCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveStep(closestIndex);
  };

  return (
    <section className="w-full bg-[#F8F5EF]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
  
{/* Tabs */}
<div className="flex flex-nowrap gap-4 overflow-x-auto border-b border-[#2E473B]/15 sm:gap-7 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
  {tabs.map((tab) => (
    <button
      key={tab.key}
      type="button"
      onClick={() => handleTabChange(tab.key)}
      className={`relative shrink-0 whitespace-nowrap pb-3 text-xs transition-colors sm:pb-4 sm:text-base ${
        activeTab === tab.key
          ? "font-semibold text-[#2E473B]"
          : "text-[#2E473B]/60 hover:text-[#2E473B]"
      }`}
    >
      {tab.label}

      {activeTab === tab.key && (
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#2E473B]" />
      )}
    </button>
  ))}
</div>

        <div className="min-h-[250px] py-7 sm:py-9">
          {/* Description */}
          {activeTab === "description" && (
            <div className="max-w-3xl">
              <h2 className="mb-4 font-serif text-2xl text-[#2E473B] sm:text-3xl">
                {isCompleteBundle
                  ? "The Complete Haircare Bundle"
                  : isOilShampooBundle
                    ? "The Oil + Shampoo Bundle"
                    : isShampoo
                      ? "Meet Coffee Velvet Shampoo"
                      : isOil
                        ? "Our Signature Hair Oil"
                        : isComb
                          ? "Everyday Wooden Comb"
                          : "Product Details"}
              </h2>

              <p className="whitespace-pre-line text-sm leading-7 text-[#2E473B]/75 sm:text-base">
                {product.description}
              </p>

              {isBundle && (
                <p className="mt-4 text-sm leading-7 text-[#2E473B]/75 sm:text-base">
                  {isCompleteBundle
                    ? "Bring together Signature Hair Oil, Coffee Velvet Shampoo, and a Wooden Comb for a simple hair-care routine that includes pre-wash oiling, cleansing, and gentle detangling."
                    : "Pair Signature Hair Oil with Coffee Velvet Shampoo to bring pre-wash oiling and cleansing together in one convenient hair-care set."}
                </p>
              )}

              {isOil && (
                <p className="mt-4 text-sm leading-7 text-[#2E473B]/75 sm:text-base">
                  Created with a blend of oils and traditional botanical
                  ingredients, our Signature Hair Oil is designed to make
                  hair care a nourishing part of your everyday self-care
                  routine.
                </p>
              )}

              {isShampoo && (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      title: "Sulfate-Free Formula",
                      description:
                        "A sulfate-free option for your everyday hair-care routine.",
                    },
                    {
                      title: "Botanical Ingredients",
                      description:
                        "Made with ingredients selected for a botanical-inspired hair-care routine.",
                    },
                    {
                      title: "Everyday Hair Care",
                      description:
                        "Designed to fit into your regular hair-washing routine.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-[#2E473B]/10 bg-white/60 p-5"
                    >
                      <h3 className="mb-2 font-medium text-[#2E473B]">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-6 text-[#2E473B]/70">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {isComb && (
                <div className="mt-5">
                  <p className="text-sm leading-7 text-[#2E473B]/75 sm:text-base">
                    Make everyday grooming simpler with our Wooden Comb.
                    Designed to complement your hair-care routine, it helps
                    you detangle and arrange your hair with gentle strokes.
                  </p>
                </div>
              )}

              {product.bundleItems?.length ? (
                <div className="mt-6">
                  <h3 className="mb-3 font-medium text-[#2E473B]">
                    Included in this set
                  </h3>
                  <ul className="space-y-2">
                    {product.bundleItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[#2E473B]/75"
                      >
                        <span className="text-[#7C9A7D]">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          )}

          {/* Ingredients */}
          {activeTab === "ingredients" && (
            <div>
              <h2 className="mb-3 font-serif text-2xl text-[#2E473B] sm:text-3xl">
                {isComb ? "Material & Care" : "Ingredients"}
              </h2>

              <p className="mb-6 max-w-2xl text-sm leading-6 text-[#2E473B]/70 sm:text-base">
                {isCompleteBundle
                  ? "Explore the ingredients in each hair-care formula included in this set. The wooden comb is an accessory, not an additional formula."
                  : isOilShampooBundle
                    ? "Explore the ingredients in each product included in your hair-care duo."
                    : isOil
                      ? "A thoughtfully prepared blend of oils and traditional botanical ingredients."
                      : isShampoo
                        ? "A botanical-inspired blend featuring ingredients used in hair care."
                        : isComb
                          ? "Learn more about the material and care of your wooden comb."
                          : "Explore the details of this product."}
              </p>

              {isComb ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-[#2E473B]/10 bg-white/60 p-5">
                    <h3 className="mb-2 font-medium text-[#2E473B]">
                      Material
                    </h3>
                    <p className="text-sm leading-6 text-[#2E473B]/70">
                      Wooden construction
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#2E473B]/10 bg-white/60 p-5">
                    <h3 className="mb-2 font-medium text-[#2E473B]">
                      Care Instructions
                    </h3>
                    <p className="text-sm leading-6 text-[#2E473B]/70">
                      Keep clean and dry. Avoid prolonged soaking in water.
                    </p>
                  </div>
                </div>
              ) : isBundle ? (
                <div className="space-y-6">
                  {(isCompleteBundle
                    ? completeBundleIngredients
                    : oilShampooBundleIngredients
                  ).map((section: IngredientSection) => (
                    <div
                      key={section.title}
                      className="rounded-2xl border border-[#2E473B]/10 bg-white/60 p-5 sm:p-6"
                    >
                      <h3 className="mb-2 font-serif text-xl text-[#2E473B] sm:text-2xl">
                        {section.title}
                      </h3>

                      <p className="mb-4 text-sm leading-6 text-[#2E473B]/70">
                        {section.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                        {section.items.map((ingredient) => (
                          <div
                            key={ingredient}
                            className="rounded-xl border border-[#2E473B]/10 bg-[#F8F5EF] px-4 py-3"
                          >
                            <span className="text-sm text-[#2E473B]">
                              {ingredient}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {isCompleteBundle && (
                    <div className="rounded-2xl border border-[#2E473B]/10 bg-white/60 p-5 sm:p-6">
                      <h3 className="mb-2 font-serif text-xl text-[#2E473B] sm:text-2xl">
                        Wooden Comb
                      </h3>

                      <p className="mb-4 text-sm leading-6 text-[#2E473B]/70">
                        An additional grooming accessory included in the
                        Complete Haircare Bundle.
                      </p>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl border border-[#2E473B]/10 bg-[#F8F5EF] px-4 py-3">
                          <span className="text-sm text-[#2E473B]">
                            Wooden construction
                          </span>
                        </div>

                        <div className="rounded-xl border border-[#2E473B]/10 bg-[#F8F5EF] px-4 py-3">
                          <span className="text-sm text-[#2E473B]">
                            Keep clean and dry
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (isOil ? oilIngredients : isShampoo ? shampooIngredients : []).length > 0 ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {(isOil ? oilIngredients : shampooIngredients).map(
                    (ingredient) => (
                      <div
                        key={ingredient}
                        className="rounded-xl border border-[#2E473B]/10 bg-white/60 px-4 py-4"
                      >
                        <span className="text-sm text-[#2E473B]">
                          {ingredient}
                        </span>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <p className="text-sm leading-7 text-[#2E473B]/70">
                  Detailed ingredient information will be added soon.
                </p>
              )}
            </div>
          )}

          {/* Benefits */}
          {activeTab === "benefits" && (
            <div>
              <h2 className="mb-6 font-serif text-2xl text-[#2E473B] sm:text-3xl">
                {isCompleteBundle
                  ? "Your Complete Haircare Routine"
                  : isOilShampooBundle
                    ? "Why Choose This Haircare Duo?"
                    : isShampoo
                      ? "Why You’ll Love It"
                      : isOil
                        ? "The Benefits"
                        : isComb
                          ? "Comb Benefits"
                          : "Product Benefits"}
              </h2>

              {benefits.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 rounded-xl bg-white/60 p-4"
                    >
                      <span className="mt-0.5 text-[#7C9A7D]">✦</span>
                      <p className="text-sm leading-6 text-[#2E473B]/80 sm:text-base">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm leading-7 text-[#2E473B]/70">
                  Product benefits will be added soon.
                </p>
              )}
            </div>
          )}

          {/* How to use */}
          {activeTab === "usage" && (
            <div>
              <h2 className="mb-3 font-serif text-2xl text-[#2E473B] sm:text-3xl">
                {isCompleteBundle
                  ? "How To Use Your Complete Bundle"
                  : isOilShampooBundle
                    ? "How To Use Your Haircare Duo"
                    : "How To Use"}
              </h2>

              <p className="mb-6 text-sm text-[#2E473B]/65 sm:text-base">
                {isCompleteBundle
                  ? "Follow these steps to incorporate all three essentials into your routine."
                  : isOilShampooBundle
                    ? "Combine pre-wash oiling with your hair-washing routine."
                    : isOil
                      ? "Make your hair-care routine a little more special."
                      : isShampoo
                        ? "Follow these simple steps for your hair-washing routine."
                        : isComb
                          ? "Follow these steps for gentle, everyday hair grooming."
                          : "Usage instructions will be added soon."}
              </p>

              {usageSteps.length > 0 ? (
                <>
                  <div
                    ref={carouselRef}
                    onScroll={handleCarouselScroll}
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  >
                    {usageSteps.map((step, index) => (
                      <article
                        key={step.title}
                        data-usage-card
                        className="w-[85%] shrink-0 snap-center rounded-2xl border border-[#2E473B]/10 bg-white/70 p-5 sm:w-[46%] sm:p-6 lg:w-[31%]"
                      >
                        <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#2E473B] text-sm text-white">
                          {index + 1}
                        </span>

                        <h3 className="mb-2 font-serif text-xl text-[#2E473B]">
                          {step.title}
                        </h3>

                        <p className="text-sm leading-6 text-[#2E473B]/70">
                          {step.description}
                        </p>
                      </article>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => moveStep(-1)}
                      disabled={activeStep === 0}
                      aria-label="Previous usage step"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2E473B]/20 text-xl text-[#2E473B] transition hover:bg-[#2E473B] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#2E473B]"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={() => moveStep(1)}
                      disabled={activeStep === usageSteps.length - 1}
                      aria-label="Next usage step"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2E473B]/20 text-xl text-[#2E473B] transition hover:bg-[#2E473B] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#2E473B]"
                    >
                      →
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-sm leading-7 text-[#2E473B]/70">
                  Usage instructions will be added soon.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
