import React from "react";

const IncubatorAbout = () => {
  return (
    <div className="bg-gradient-to-tr from-[#2b0a53] via-[#3d1178] to-[#1f032c] text-white py-24 px-6 mt-8 ">
      <div className="max-w-4xl mx-auto text-center">
        {/* العنوان */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-200">
          Join the Incubator
        </h2>

        {/* الفقرة 1 */}
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Ready to turn your startup vision into reality?
          <br />
          We’re looking for driven founders with bold ideas and the
          determination to build something that matters.
        </p>

        {/* الفقرة 2 */}
        <p className="text-lg text-gray-300 leading-relaxed mb-10">
          Whether you’re validating an MVP or preparing to raise your first
          round, our incubator provides the mentorship, resources, and network
          to help you grow.
        </p>

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-white/10 border border-white/30 text-white rounded-md shadow-md hover:bg-white/20 transition">
            Start Your Application
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md shadow-lg hover:opacity-90 transition">
            Join Our Interest List
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncubatorAbout;
