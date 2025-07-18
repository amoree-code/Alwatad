import React, { useState } from 'react';

function Frequently() {
  const [openItems, setOpenItems] = useState({ 0: true }); // First item open by default

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      question: 'How are mentors selected ?',
      answer:
        'Our mentors are carefully vetted based on their startup experience, industry knowledge, and commitment to founder success. Many are former founders, VCs, or domain experts.',
    },
    {
      question: 'Can I choose my mentor ?',
      answer:
        "Yes, you can express preferences for mentor selection based on your industry, stage, and specific needs. We'll match you with the most suitable mentor from our network.",
    },
    {
      question: 'What does a typical mentoring session look like ?',
      answer:
        'Mentoring sessions are typically 1-hour focused discussions covering strategy, challenges, and actionable next steps. Sessions can be in-person or virtual, depending on preferences.',
    },
    {
      question: 'Is mentorship ongoing or one-time?',
      answer:
        'Mentorship can be both ongoing and one-time depending on your needs. We offer flexible arrangements from single consultations to long-term mentoring relationships.',
    },
    {
      question: 'Who are some of your most active mentors?',
      answer:
        'Our mentor network includes successful entrepreneurs, industry veterans, and investment professionals across various sectors including tech, healthcare, fintech, and more.',
    },
    {
      question: 'How do I become a mentor?',
      answer:
        'To become a mentor, you need relevant startup or industry experience, a passion for helping founders, and time to commit. Apply through our mentor application process for review.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Title */}
            <div className="border-2 border-dashed border-purple-500 p-8 rounded-lg">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Frequently Asked Questions
              </h1>
            </div>

            {/* Right - Description */}
            <div className="flex items-center">
              <p className="text-gray-300 text-lg leading-relaxed">
                Got questions about how mentorship works in our incubator? Here
                are the answers to what founders ask most.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <div
                    className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                      openItems[index] ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {openItems[index] && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Frequently;
