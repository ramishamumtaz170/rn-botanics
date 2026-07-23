"use client";

import { useState } from "react";

export default function ProductInfoTabs() {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "ingredients", label: "Ingredients" },
    { id: "benefits", label: "Benefits" },
    { id: "usage", label: "How To Use" },
  ];

  return (
    <section className="mt-28">

      {/* Heading */}

      <div className="text-center">

        <p className="uppercase tracking-[0.35em] text-[#7C9A7D] text-sm font-medium">
          Product Information
        </p>

        <h2 className="mt-5 text-5xl font-bold text-[#2E473B]">
          Everything You Need To Know
        </h2>

      </div>

      {/* Tabs */}

      <div className="mt-14 flex flex-wrap justify-center gap-4">

        {tabs.map((tab) => (

          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-7 py-3 rounded-full transition-all duration-300 font-medium ${
              activeTab === tab.id
                ? "bg-[#2E473B] text-white"
                : "bg-white text-[#2E473B] hover:bg-[#EEF3ED]"
            }`}
          >
            {tab.label}
          </button>

        ))}

      </div>

      {/* Content */}

      <div className="mt-12 bg-white rounded-[35px] shadow-lg p-10 md:p-14">

        {activeTab === "description" && (

          <div className="space-y-6">

            <p className="text-lg leading-8 text-gray-600">
              R & N Botanics Signature Hair Oil is handcrafted with carefully
              selected botanical oils and traditional herbs to nourish the scalp,
              strengthen roots and support healthy hair growth.
            </p>

            <p className="text-lg leading-8 text-gray-600">
              Every bottle is made in small batches to maintain quality,
              freshness and effectiveness for your daily hair care routine.
            </p>

          </div>

        )}

        {activeTab === "ingredients" && (

          <div className="grid sm:grid-cols-2 gap-6">

            {[
              "Mustard Oil",
              "Coconut Oil",
              "Castor Oil",
              "Amla",
              "Fenugreek",
              "Rosemary",
              "Hibiscus",
              "Aloe Vera",
              "Kalonji",
              "Vitamin E",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 bg-[#F8F5EF] rounded-2xl p-4"
              >

                <span className="text-[#7C9A7D] text-xl">
                  ✓
                </span>

                <span className="text-[#2E473B] font-medium">
                  {item}
                </span>

              </div>

            ))}

          </div>

        )}

        {activeTab === "benefits" && (

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Promotes Healthy Hair Growth",
              "Reduces Hair Fall",
              "Strengthens Hair Roots",
              "Deeply Nourishes Scalp",
              "Adds Natural Shine",
              "Helps Repair Dry Hair",
              "Suitable For All Hair Types",
              "100% Botanical Formula",
            ].map((benefit) => (

              <div
                key={benefit}
                className="flex items-center gap-4 bg-[#F8F5EF] rounded-2xl p-5"
              >

                <span className="text-[#2E473B] text-xl">
                  🌿
                </span>

                <span className="text-[#2E473B]">
                  {benefit}
                </span>

              </div>

            ))}

          </div>

        )}

        {activeTab === "usage" && (

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                step: "01",
                title: "Apply",
                desc: "Apply a generous amount directly to your scalp."
              },
              {
                step: "02",
                title: "Massage",
                desc: "Massage gently for 5–10 minutes."
              },
              {
                step: "03",
                title: "Leave",
                desc: "Leave for at least 2–3 hours or overnight."
              },
              {
                step: "04",
                title: "Wash",
                desc: "Wash with a mild shampoo."
              },
            ].map((item) => (

              <div
                key={item.step}
                className="border border-[#E8E3DA] rounded-3xl p-8"
              >

                <div className="w-14 h-14 rounded-full bg-[#2E473B] text-white flex items-center justify-center font-bold">
                  {item.step}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#2E473B]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}