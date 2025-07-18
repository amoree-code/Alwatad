import React from "react";
export default function HeroLeft() {
  return (
    <div className="flex flex-col max-w-3xl text-white">
      <h1 className="text-[4.5rem] font-bold leading-[1.1]">
        <span>Bold</span>
        <br />
        <span className="text-[#d6d6f7]">Startups</span>
        <br />
        <span>Start Here</span>
      </h1>
      <div className="flex items-start gap-4 mt-10">
        <span className="text-[#b3b3c6] font-medium min-w-[70px] h-[60px] border-r-2 border-[#777]">
          We Help
        </span>
        <span className="text-[#e0e0f7]">
          A compelling headline with a short blurb about your mission—empowering
          founders, accelerating innovation, and transforming ideas into
          ventures.
        </span>
      </div>
      <div className="flex gap-4 mt-10">
        <button className="px-6 py-2 rounded-lg text-base font-medium border border-[#39375a] bg-[#23213a] text-white transition hover:bg-[#2d2b4a]">
          Explore Our Startups
        </button>
        <button className="px-6 py-2 rounded-lg text-base font-semibold bg-gradient-to-r from-[#7b5cff] to-[#a084ff] text-white shadow-[0_2px_16px_0_#7b5cff55] transition hover:from-[#a084ff] hover:to-[#7b5cff]">
          Apply Now
        </button>
      </div>
    </div>
  );
}
