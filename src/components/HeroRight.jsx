import React from 'react';

function HeroRight() {
  const icons = {
    one: [
      '/icons/Frame.svg',
      '/icons/Group3.svg',
      '/icons/Group1.svg',
      '/icons/Frame(1).svg',
    ],
    tow: [
      '/icons/Frame(1).svg',
      '/icons/Group1.svg',
      '/icons/Frame.svg',
      '/icons/Group3.svg',
    ],
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Top icons */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {icons.one.map((icon, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[60px] sm:w-[70px] lg:w-[80px] h-[60px] sm:h-[70px] lg:h-[80px] px-2.5 py-2.5 bg-white bg-opacity-30 rounded-full shadow-2xl shadow-white/30 backdrop-blur-md"
          >
            <img src={icon} alt="" className="w-full h-auto" />
          </div>
        ))}
      </div>

      {/* Middle section */}
      <div className="w-full max-w-md sm:max-w-lg lg:w-[470px] h-auto sm:h-[400px] flex flex-col items-center justify-center gap-4 px-6 py-8 rounded-lg bg-white bg-opacity-30 shadow-2xl text-center">
        <h2 className="text-2xl sm:text-3xl text-white">
          Trusted by more than
        </h2>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-[#6D2EFF] to-[#BDA1FF] bg-clip-text text-transparent">
          500,000+
        </h1>
        <h3 className="text-xl sm:text-2xl text-white">Companies</h3>
      </div>

      {/* Bottom icons */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {icons.tow.map((icon, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[60px] sm:w-[70px] lg:w-[80px] h-[60px] sm:h-[70px] lg:h-[80px] px-2.5 py-2.5 bg-white bg-opacity-30 rounded-full shadow-2xl shadow-white/30 backdrop-blur-md"
          >
            <img src={icon} alt="" className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroRight;
