import React from "react";

const programs = [
  {
    title: "1. Early-Stage Incubation",
    description: "For Founders in idea or MVP phase",
    duration: "12 weeks",
    outcome:
      "Clarity on your target market, validated MVP, and a compelling investor pitch deck.",
    button: true,
    highlight: true,
    items: [
      "Business model validation",
      "Weekly mentorship & check-ins",
      "Product development support",
      "Market research guidance",
      "Pitch readiness training",
    ],
  },
  {
    title: "2. Growth & Scale Program",
    description: "For Startups with product-market fit",
    duration: "10 weeks",
    outcome:
      "Clarity on your target market, validated MVP, and a compelling investor pitch deck.",
    button: true,
    highlight: false,
    items: [
      "Business model validation",
      "Weekly mentorship & check-ins",
      "Product development support",
      "Market research guidance",
      "Pitch readiness training",
    ],
  },
  {
    title: "3. Industry-Specific Tracks",
    description: "For Startups in sectors like HealthTech, AgriTech, ...",
    duration: "8-10 weeks",
    outcome:
      "Clarity on your target market, validated MVP, and a compelling investor pitch deck.",
    button: true,
    highlight: false,
    items: [
      "Business model validation",
      "Weekly mentorship & check-ins",
      "Product development support",
      "Market research guidance",
      "Pitch readiness training",
    ],
  },
];

export default function StartupJourney() {
  return (
    <section className="w-full bg-gradient-to-b from-[#18122B] to-[#251B3A] py-10 px-2 sm:py-14 sm:px-4 md:py-16 md:px-6 lg:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="w-full sm:w-1/2">
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-semibold text-white mb-2 leading-tight">
              Built for Every <span className="text-[#A084E8]">Stage</span> of
              <br className="hidden md:block" />
              Your <span className="text-[#A084E8]">Startup</span> Journey
            </h2>
          </div>
          <div className="w-full sm:w-1/2 sm:text-right">
            <p className="text-gray-300 mt-2 sm:mt-0 max-w-xl sm:ml-auto text-base xs:text-lg">
              We offer tailored incubation programs designed to support founders
              at every phase—from initial idea validation to rapid scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {programs.map((prog) => (
            <div
              key={prog.title}
              className={`rounded-2xl p-1 ${
                prog.highlight
                  ? "bg-gradient-to-br from-[#A084E8] to-[#8B6AD9]"
                  : "bg-[#231942]"
              }`}
            >
              <div
                className={`h-full rounded-2xl ${
                  prog.highlight ? "bg-[#18122B] p-6" : "bg-[#231942] p-6"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-1 ${
                    prog.highlight ? "text-[#A084E8]" : "text-white"
                  }`}
                >
                  {prog.title}
                </h3>
                <p className="text-gray-300 text-sm mb-1">{prog.description}</p>
                <p className="text-gray-400 text-xs mb-1">
                  Duration: {prog.duration}
                </p>
                <p className="text-gray-300 text-xs mb-4">
                  Outcome: {prog.outcome}
                </p>
                {prog.button && (
                  <button
                    className={`w-full mb-4 py-2 rounded-lg font-medium transition-all ${
                      prog.highlight
                        ? "bg-gradient-to-r from-[#A084E8] to-[#8B6AD9] text-white hover:opacity-90"
                        : "bg-gradient-to-r from-[#A084E8] to-[#8B6AD9] text-white hover:opacity-90"
                    }`}
                  >
                    Apply Now
                  </button>
                )}
                <div
                  className={`mt-2 rounded-xl ${
                    prog.highlight ? "bg-[#A084E8]/10" : "bg-[#18122B]"
                  } p-4`}
                >
                  <p className="text-white text-sm font-semibold mb-2">
                    What You Get:
                  </p>
                  <ul className="space-y-2">
                    {prog.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-200 text-sm"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="10"
                            cy="10"
                            r="10"
                            fill={prog.highlight ? "#A084E8" : "#8B6AD9"}
                          />
                          <path
                            d="M6 10.5L9 13.5L14 8.5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
