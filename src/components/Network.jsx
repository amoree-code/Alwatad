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
    <section className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mt-8 ">
      <div className="absolute left-[700px] right-0 h-96  bg-gradient-to-tr from-[#361585] to-[#301178] blur-[120px] opacity-60" />

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl bg-gradient-to-tr from-[#D9D9D9] to-[#999999] gradient">
          A Network That Powers Innovation
        </h1>
        <span className="w-1/3 text-[#888]">
          At the heart of our incubator is a dynamic ecosystem built to elevate
          startups beyond the early stage.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
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
              <div>
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
}

export default Network;
