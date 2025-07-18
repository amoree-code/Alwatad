import React from 'react';

function Founder() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-12">
      {/* خلفية */}
      <div className="absolute top-60 left-0 right-0 h-96 bg-gradient-to-tr from-[#361585] to-[#301178] blur-[120px] opacity-60 -z-10" />

      {/* العنوان والوصف */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-tr from-[#D9D9D9] to-[#999999] bg-clip-text text-transparent">
          Simple Steps to Start Your Founder Journey
        </h1>
        <p className="text-sm sm:text-base text-[#888] max-w-xl">
          We've streamlined the application process to make it fast,
          transparent, and founder-friendly.
        </p>
      </div>

      {/* 🟡 الخط الزمني */}
      <div className="relative space-y-16">
        {/* Vertical line only on lg+ screens */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gray-600"></div>

        {/* كل خطوة */}
        {[
          {
            title: 'Step 1: Online Application',
            desc: 'Duration: Ongoing or until 12 June. Fill out a short application form with your startup overview, team background, and traction (if any).',
            tip: 'Includes: Team info, problem statement, solution, and 2-min intro video (optional)',
            icon: '📋',
            align: 'left',
            color: 'text-gray-400',
          },
          {
            title: 'Step 2: Application Review',
            desc: "Duration: 1-2 weeks. Our selection team evaluates your idea's potential, market fit, and founder readiness. You'll receive a status update via email.",
            tip: 'Tip: Strong applications show user insight, execution drive, and clarity of vision.',
            icon: '💡',
            align: 'right',
            color: 'text-red-400',
          },
          {
            title: 'Step 3: Founder Interview',
            desc: 'Duration: 30-45 minutes (virtual). Shortlisted founders are invited for an informal interview with our program leads and mentors.',
            tip: 'Focus: Problem-solution clarity, market understanding, team dynamics.',
            icon: '🎯',
            align: 'left',
            color: 'text-gray-400',
          },
          {
            title: 'Step 4: Final Selection & Offer',
            desc: 'Duration: Within 5 days after interview. Successful applicants receive a formal offer to join the next cohort, including program details and onboarding steps.',
            tip: 'Outcome: Welcome to the incubator!',
            icon: '🎉',
            align: 'right',
            color: 'text-yellow-400',
          },
        ].map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col lg:flex-row ${
              step.align === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center lg:items-start`}
          >
            {/* Content */}
            <div className="w-full lg:w-1/2 px-0 lg:px-8">
              <div className="bg-[#141414] border border-gray-700 rounded-lg p-6 relative">
                {/* Indicator Circle */}
                <div
                  className={`hidden lg:block absolute ${
                    step.align === 'left' ? '-right-3' : '-left-3'
                  } top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-600 rounded-full border-4 border-gray-900`}
                ></div>

                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{step.desc}</p>
                <div className={`flex items-start text-sm ${step.color}`}>
                  <span className="mr-2">{step.icon}</span>
                  <span>{step.tip}</span>
                </div>
              </div>
            </div>

            {/* Empty space for alignment only on lg+ */}
            <div className="hidden lg:block w-1/2 px-8"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Founder;
