import React from "react";

function HeroRight() {
  const icons = {
    one: [
      "/icons/Frame.svg",
      "/icons/Group3.svg",
      "/icons/Group1.svg",
      "/icons/Frame(1).svg",
    ],
    tow: [
      "/icons/Frame(1).svg",
      "/icons/Group1.svg",
      "/icons/Frame.svg",
      "/icons/Group3.svg",
    ],
  };
  return (
    <div>
      <div className="flex items-center justify-center gap-8">
        {icons.one.map((icon, index) => (
          <div
            key={index}
            className="relative top-5 flex items-center justify-center w-[80px] h-[80px] px-2.5 py-2.5 bg-white bg-opacity-30 rounded-full shadow-2xl shadow-white/30 backdrop-blur-md"
          >
            <img src={icon} alt="" className="bg-transparent" />
          </div>
        ))}
      </div>
      <div className="w-[470px] h-[400px] flex flex-col items-center justify-center gap-8 px-10 py-10 rounded-lg bg-white bg-opacity-30 shadow-2xl">
        <h2 className="text-4xl text-white ">Trusted by more than</h2>
        <h1 className="text-7xl font-semibold bg-gradient-to-r from-[#6D2EFF] to-[#BDA1FF]   gradient">
          500,000+
        </h1>
        <h3 className="text-3xl text-white ">Companies</h3>
      </div>
      <div className="flex items-center justify-center gap-8">
        {icons.tow.map((icon, index) => (
          <div
            key={index}
            className="relative -top-5 flex items-center justify-center w-[80px] h-[80px] px-2.5 py-2.5 bg-white bg-opacity-30 rounded-full shadow-2xl shadow-white/30 backdrop-blur-md"
          >
            <img src={icon} alt="" className="bg-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroRight;
