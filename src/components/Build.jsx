import React from "react";

function Build() {
  return (
    <div className="relativ min-h-[calc(100vh-90px)] max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 text-white">
      {/* العنوان والوصف */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-tr from-[#D9D9D9] to-[#999999] bg-clip-text text-transparent leading-tight">
          Build Bold. Grow Fast. <br className="hidden sm:block" />
          Thrive Together.
        </h1>
        <p className="text-gray-400 max-w-md text-lg">
          Join a startup incubator designed to turn your vision into a scalable
          venture. From mentorship to funding, we provide the tools, community,
          and guidance you need to succeed.
        </p>
      </div>

      {/* الشبكة الرئيسية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* المخطط البياني */}
        <div className="col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-6 min-h-[250px] shadow-md">
          <div className="flex justify-between text-sm text-gray-400 mt-4">
            <img src="/charts/Frame186.png" alt="" />
          </div>
        </div>

        {/* بطاقة الشخص */}
        <div className="bg-gradient-to-br from-[#f5f5f5]/10 to-[#ffffff]/5 backdrop-blur-sm rounded-xl p-6 text-center shadow-md flex flex-col justify-between">
          <div className="mb-6">
            <div className="w-12 h-12 mx-auto bg-white/20 rounded-lg mb-2 flex items-center justify-center">
              📷
            </div>
            <h3 className="font-semibold">David Tan</h3>
            <p className="text-sm text-gray-400">Founding Partner, CoreVC</p>
          </div>
          <div className="text-white font-semibold">Market Revenue +1500%</div>
        </div>

        {/* الدائرة */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center shadow-md">
          <h3 className="mb-4">Chart</h3>
          <div className="w-24 h-24 mx-auto rounded-full border-8 border-purple-500 flex items-center justify-center text-purple-400 font-bold text-xl">
            99%
          </div>
        </div>

        {/* جدول التحليل */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-md">
          <h3 className="mb-4 font-semibold text-lg">Analysis</h3>
          <div className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
            {["Week 6", "Week 7", "Week 8", "Week 9", "Week 10"].map(
              (week, i) => (
                <React.Fragment key={i}>
                  <div>{week}</div>
                  <div>120%</div>
                </React.Fragment>
              )
            )}
          </div>
        </div>

        {/* السهم */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-md flex items-center justify-center text-3xl text-white/30">
          ↑
        </div>
      </div>
    </div>
  );
}

export default Build;
