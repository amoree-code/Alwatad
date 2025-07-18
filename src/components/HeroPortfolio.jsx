import React from 'react';

function HeroPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 flex items-center justify-center ">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Hero Text */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              <span className="block">Backing</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Bold
              </span>
              <span className="block">Ideas.</span>
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block">Building</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Futures.
              </span>
            </h2>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 pt-8">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <a
                href="mailto:incuvate@gmail.com"
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                incuvate@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <a
                href="tel:+62-2334-5678-0987"
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                +62-2334-5678-0987
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Description */}
        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-gray-300 text-lg leading-relaxed">
              We showcase the most promising startups shaping the future across
              diverse industries. From seed to scale, our portfolio reflects
              innovation, resilience, and real-world impact.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="grid grid-cols-3 gap-4 opacity-60">
            <div className="h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl backdrop-blur-sm"></div>
            <div className="h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl backdrop-blur-sm"></div>
            <div className="h-32 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-xl backdrop-blur-sm"></div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

export default HeroPortfolio;
