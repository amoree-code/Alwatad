import React from 'react';

const Incubator = () => {
  const statsData = [
    {
      icon: '/images/arrow-trending-up.svg',
      number: '120+',
      title: 'Startups Incubated',
      description: 'Streamline Your Processes and Increase Efficiency',
    },
    {
      icon: '/images/circle-stack.svg',
      number: '$18M+',
      title: 'in Funding Raised',
      description: 'Streamline Your Processes and Increase Efficiency',
    },
    {
      icon: '/images/briefcase.svg',
      number: '50+',
      title: 'Active Mentors',
      description: 'Streamline Your Processes and Increase Efficiency',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl bg-gradient-to-tr from-[#D9D9D9] to-[#999999] gradient">
          About the Incubator
        </h1>
        <span className="text-[#888]">
          Empowering Founders. Accelerating Impact.
        </span>
      </div>

      {/* <div className="w-[1200px] h-[300px] mb-8">
        <img
          src="/images/image2.svg"
          alt=""
          className="w-[1200px] h-[300px] object-cover rounded-lg"
        />
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20 rounded-lg p-3 group-hover:shadow-lg transition-all duration-300">
                <img
                  src={stat.icon}
                  alt=""
                  className="w-6 h-6 filter brightness-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </span>
                <p className="text-xl text-white/90 font-medium">
                  {stat.title}
                </p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-white/70 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Incubator;
