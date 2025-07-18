import React from 'react';

const Mission = () => {
  return (
    <div className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-200 mb-12">
          Our Mission & Vision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="border border-gray-500 rounded-lg p-6 bg-white/5 backdrop-blur-sm shadow-lg">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-500 pb-2">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We are on a mission to empower early-stage startups by providing
              them with hands-on mentorship, access to capital, and a thriving
              ecosystem that accelerates growth. We champion founders with bold
              ideas and the determination to solve meaningful problems.
            </p>
          </div>

          {/* Vision Card */}
          <div className="border border-gray-500 rounded-lg p-6 bg-white/5 backdrop-blur-sm shadow-lg">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-500 pb-2">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our vision is to become a leading launchpad for innovation—where
              diverse entrepreneurs from all backgrounds can transform their
              ideas into impactful, scalable ventures that shape the future of
              industries and communities around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
