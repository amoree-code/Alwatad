import React from 'react';

function Companies() {
  return (
    <section className="w-full min-h-[180px] sm:h-[200px] md:h-[230px] bg-[#171221] flex flex-col items-center justify-around text-white px-4">
      <div className="flex items-center justify-center text-center max-w-2xl">
        <h1 className="text-sm sm:text-base md:text-xl font-normal text-[#888]">
          Trusted by more than{' '}
          <b className="text-white font-normal">500,000+ companies</b> across
          the globe
        </h1>
      </div>
      <div className="mt-2">
        <img
          src="/images/Vector.svg"
          alt="Trusted Companies"
          className="max-w-[400px] sm:max-w-xs md:max-w-4xl w-full h-auto"
        />
      </div>
    </section>
  );
}

export default Companies;
