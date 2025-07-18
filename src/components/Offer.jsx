import React from "react";

const features = [
  {
    title: "Expert Mentorship",
    description:
      "Learn directly from seasoned entrepreneurs, investors, and industry leaders who guide you every step of the way.",
    rotate: "-rotate-3",
  },
  {
    title: "Collaborative Workspace",
    description:
      "Learn directly from seasoned entrepreneurs, investors, and industry leaders who guide you every step of the way.",
    rotate: "-rotate-1",
  },
  {
    title: "Funding Access",
    description:
      "Learn directly from seasoned entrepreneurs, investors, and industry leaders who guide you every step of the way.",
    rotate: "rotate-1",
  },
  {
    title: "Business Dev Support",
    description:
      "Learn directly from seasoned entrepreneurs, investors, and industry leaders who guide you every step of the way.",
    rotate: "rotate-3",
  },
];

const Offer = () => {
  return (
    <div className="relative text-white py-20 px-6">
      <div className="absolute inset-9 bg-gradient-to-tr from-[#361585] to-[#301178] blur-[140px] opacity-70 z-0" />

      <div className="max-w-7xl mx-auto text-center">
        {/* العنوان */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          What We{" "}
          <span className="text-blue-400 bg-white/10 px-2 py-1 rounded-md">
            Offer
          </span>
        </h2>

        {/* الوصف */}
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          We provide everything early-stage founders need to turn great ideas
          into successful businesses.
        </p>

        {/* البطاقات */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className={`w-full sm:w-[280px] bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 shadow-lg transform ${item.rotate} hover:rotate-0 transition duration-300`}
            >
              <h3 className="text-xl font-semibold mb-3 border-b border-gray-500 inline-block pb-1">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
