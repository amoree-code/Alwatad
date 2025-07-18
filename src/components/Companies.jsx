import React from 'react';

function Companies() {
  return (
    <section className="w-full h-[230px] bg-[#171221] flex flex-col items-center justify-around text-white">
      <div className="flex items-center justify-center ">
        <h1 className="text-2xl font-normal text-center text-[#888] ">
          Trusted by more than{' '}
          <b className="text-white font-normal ">500,000+ companies</b> across
          the globe
        </h1>
      </div>
      <div className="">
        <img src="/images/Vector.svg" alt="" />
      </div>
    </section>
  );
}

export default Companies;
