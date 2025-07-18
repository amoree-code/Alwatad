import React from 'react';

function ContactHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full text-center space-y-12">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">
          <span className="block">Let's Build</span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Something Big
          </span>
        </h1>

        {/* Description */}
        <div className="max-w-3xl mx-auto pt-8">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Have questions about our programs, funding opportunities, or
            mentorship? Reach out to our team — we're here to support your
            startup journey every step of the way.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get In Touch
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 pt-12 opacity-60">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
}

export default ContactHero;
