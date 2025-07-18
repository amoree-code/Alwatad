import React from "react";

function Founder() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mt-8">
      <div className="absolute top-60 left-0 right-0 h-96  bg-gradient-to-tr from-[#361585] to-[#301178] blur-[120px] opacity-60" />

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl bg-gradient-to-tr from-[#D9D9D9] to-[#999999] bg-clip-text text-transparent">
          Simple Steps to Start Your Founder Journey{" "}
        </h1>
        <span className="w-1/3 text-[#888]">
          We've streamlined the application process to make it fast,
          transparent, and founder-friendly.
        </span>
      </div>

      {/* Process Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gray-600"></div>

        {/* Step 1: Online Application */}
        <div className="relative flex items-center mb-16">
          <div className="w-1/2 pr-8">
            <div className="bg-[#141414] border border-gray-700 rounded-lg p-6 relative">
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-600 rounded-full border-4 border-gray-900"></div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Step 1: Online Application
              </h3>
              <p className="text-gray-300 mb-4">
                Duration: Ongoing or until 12 June Fill out a short application
                form with your startup overview, team background, and traction
                (if any).
              </p>
              <div className="flex items-start text-gray-400 text-sm">
                <span className="mr-2">📋</span>
                <span>
                  Includes: Team info, problem statement, solution, and 2-min
                  intro video (optional)
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-8"></div>
        </div>

        {/* Step 2: Application Review */}
        <div className="relative flex items-center mb-16">
          <div className="w-1/2 pr-8"></div>
          <div className="w-1/2 pl-8">
            <div className="bg-[#141414] border border-gray-700 rounded-lg p-6 relative">
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-600 rounded-full border-4 border-gray-900"></div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Step 2: Application Review
              </h3>
              <p className="text-gray-300 mb-4">
                Duration: 1-2 weeks
                <br />
                Our selection team evaluates your idea's potential, market fit,
                and founder readiness. You'll receive a status update via email.
              </p>
              <div className="flex items-start text-red-400 text-sm">
                <span className="mr-2">💡</span>
                <span>
                  Tip: Strong applications show user insight, execution drive,
                  and clarity of vision.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Founder Interview */}
        <div className="relative flex items-center mb-16">
          <div className="w-1/2 pr-8">
            <div className="bg-[#141414] border border-gray-700 rounded-lg p-6 relative">
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-600 rounded-full border-4 border-gray-900"></div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Step 3: Founder Interview
              </h3>
              <p className="text-gray-300 mb-4">
                Duration: 30-45 minutes (virtual)
                <br />
                Shortlisted founders are invited for an informal interview with
                our program leads and mentors.
              </p>
              <div className="flex items-start text-gray-400 text-sm">
                <span className="mr-2">🎯</span>
                <span>
                  Focus: Problem-solution clarity, market understanding, team
                  dynamics
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-8"></div>
        </div>

        {/* Step 4: Final Selection & Offer */}
        <div className="relative flex items-center">
          <div className="w-1/2 pr-8"></div>
          <div className="w-1/2 pl-8">
            <div className="bg-[#141414] border border-gray-700 rounded-lg p-6 relative">
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-600 rounded-full border-4 border-gray-900"></div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Step 4: Final Selection & Offer
              </h3>
              <p className="text-gray-300 mb-4">
                Duration: Within 5 days after interview
                <br />
                Successful applicants receive a formal offer to join the next
                cohort, including program details and onboarding steps.
              </p>
              <div className="flex items-start text-yellow-400 text-sm">
                <span className="mr-2">🎉</span>
                <span>Outcome: Welcome to the incubator!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
