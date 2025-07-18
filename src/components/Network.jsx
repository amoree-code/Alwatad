import React from 'react';

function Network() {
  const statsData = [
    {
      icon: '/images/arrow-trending-up.svg',
      title: 'Expert Mentors',
      description:
        'Seasoned founders, domain specialists, and ex-operators who provide hands-on guidance across strategy, product, go-to-market, and more.',
    },
    {
      icon: '/images/circle-stack.svg',
      title: 'Venture Capital Network',
      description:
        'Direct access to early-stage and growth-stage investors — from angel syndicates to institutional VCs actively scouting new opportunities.',
    },
    {
      icon: '/images/briefcase.svg',
      title: 'Industry & Corporate Partners',
      description:
        'Collaboration opportunities with industry leaders in tech, health, finance, and sustainability — for pilots, co-innovation, and credibility.',
    },
    {
      icon: '/images/globe-alt.svg',
      title: 'Innovation Hubs & Universities',
      description:
        'A pipeline to global talent, research support, and cross-border expansion via our partnerships with leading innovation centers and academic institutions.',
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-12 z-0  my-8 ">
      {/* الخلفية فقط على الشاشات الكبيرة */}
      <div className="absolute hidden lg:block left-[700px] right-0 h-96 bg-gradient-to-tr from-[#361585] to-[#301178] blur-[120px] opacity-60 -z-10" />

      {/* العنوان والوصف */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-tr from-[#D9D9D9] to-[#999999] bg-clip-text text-transparent">
          A Network That Powers Innovation
        </h1>
        <span className="text-sm sm:text-base text-[#888] max-w-xl">
          At the heart of our incubator is a dynamic ecosystem built to elevate
          startups beyond the early stage.
        </span>
      </div>

      {/* البطاقات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20 rounded-lg p-3 group-hover:shadow-lg transition-all duration-300">
                <img
                  src={stat.icon}
                  alt=""
                  className="w-6 h-6 filter brightness-110"
                />
              </div>
              <div>
                <p className="text-lg sm:text-xl text-white/90 font-medium">
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
}

export default Network;
