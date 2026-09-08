import { useState } from "react";

function ProductTabs() {
  const [activeTab, setActiveTab] = useState("benefits");

  const content = {
    benefits: [
      "Helps keep your skin hydrated and nourished.",
      "Supports a healthy-looking skin barrier.",
      "Leaves skin feeling soft, smooth and refreshed.",
    ],

    ingredients: [
      "Thoughtfully selected skincare ingredients.",
      "Formulated to support hydration and skin comfort.",
      "Designed to work beautifully in your daily skincare routine.",
    ],

    howToUse: [
      "Apply to clean skin.",
      "Use the appropriate amount for your routine.",
      "Follow with the rest of your skincare products.",
    ],
  };

  return (
    <section className="mt-24 border-t border-[#e8dcc5] pt-20">

      {/* Heading */}
      <div className="text-center">

        <p className="text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]">
          KNOW YOUR PRODUCT
        </p>

        <h2 className="mt-4 font-['Cormorant_Garamond'] text-4xl font-semibold text-[#29231f] md:text-5xl">
          Everything You Need To Know
        </h2>

      </div>

      {/* Tab Buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">

        <button
          onClick={() => setActiveTab("benefits")}
          className={`cursor-pointer rounded-full px-7 py-3 text-sm font-semibold transition duration-300 ${
            activeTab === "benefits"
              ? "bg-[#29231f] text-white"
              : "border border-[#d8cbb9] bg-white text-[#29231f] hover:bg-[#e8dcc5]"
          }`}
        >
          BENEFITS
        </button>

        <button
          onClick={() => setActiveTab("ingredients")}
          className={`cursor-pointer rounded-full px-7 py-3 text-sm font-semibold transition duration-300 ${
            activeTab === "ingredients"
              ? "bg-[#29231f] text-white"
              : "border border-[#d8cbb9] bg-white text-[#29231f] hover:bg-[#e8dcc5]"
          }`}
        >
          INGREDIENTS
        </button>

        <button
          onClick={() => setActiveTab("howToUse")}
          className={`cursor-pointer rounded-full px-7 py-3 text-sm font-semibold transition duration-300 ${
            activeTab === "howToUse"
              ? "bg-[#29231f] text-white"
              : "border border-[#d8cbb9] bg-white text-[#29231f] hover:bg-[#e8dcc5]"
          }`}
        >
          HOW TO USE
        </button>

      </div>

      {/* Content */}
      <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-8 shadow-sm md:p-12">

        <div className="space-y-5">

          {content[activeTab].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8B6F5A]" />

              <p className="text-lg leading-8 text-gray-600">
                {item}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductTabs;