import React from 'react';

const HeroAbout = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black text-white">
      {/* الخلفية المتدرجة البنفسجية */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#361585] to-[#301178] blur-[140px] opacity-70 z-0" />

      {/* المحتوى */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
          <span className="block">Build Bold. Launch</span>
          <span className="block">Smarter. Grow Fast.</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          We empower early-stage startups with the tools, mentorship, and
          network they need to turn ideas into scalable businesses. Join a
          thriving community where innovation meets real-world traction.
        </p>
      </div>
    </div>
  );
};

export default HeroAbout;
