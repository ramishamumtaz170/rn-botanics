"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How often should I use the hair oil?",
    answer:
      "For best results, apply the oil 2–3 times a week. Massage gently into your scalp and hair, leave it for a few hours or overnight, then wash with a mild shampoo.",
  },
  {
    question: "Is it suitable for all hair types?",
    answer:
      "Yes. Our botanical blend is suitable for most hair types and is crafted for both men and women.",
  },
  {
    question: "Does it contain mineral oil?",
    answer:
      "No. Our formula focuses on botanical oils and carefully selected herbs without mineral oil.",
  },
  {
    question: "What ingredients are used?",
    answer:
      "Our blend contains Mustard Oil, Coconut Oil, Aloe Vera Oil, Vitamin E Oil, Amla, Reetha, Hibiscus, Rosemary, Fenugreek, Bhringraj, Jatamansi, Curry Leaves, Kalonji, Onion Seeds, Cinnamon, Ratanjot and other botanical herbs.",
  },
  {
    question: "Can I use it regularly?",
    answer:
      "Yes. Regular use as part of your hair care routine helps nourish and condition your hair naturally.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F8F5EF] py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="w-full flex justify-center">
          <div className="max-w-3xl text-center">

            <p className="uppercase tracking-[0.35em] text-[#7C9A7D] text-sm font-medium">
              FAQ
            </p>

            <h3 className="mt-5 text-2xl md:text-6xl lg:text-7xl font-bold text-[#2E473B] leading-[1.05]">
              Frequently Asked
              <br />
              Questions
            </h3>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              Everything you need to know about R & N Botanics Hair Oil.
            </p>

          </div>
        </div>

        {/* FAQ List */}

        <div className="mt-20 flex justify-center">

          <div className="w-full max-w-3xl">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="border-b border-[#D9D2C8]"
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-7"
                >

                  <span className="text-left text-xl font-medium text-[#2E473B]">
                    {faq.question}
                  </span>

                  <span className="text-3xl text-[#2E473B] ml-8">
                    {openIndex === index ? "−" : "+"}
                  </span>

                </button>

                {openIndex === index && (

                  <div className="pb-8 pr-10">

                    <p className="text-gray-600 leading-8">
                      {faq.answer}
                    </p>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}