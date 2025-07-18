import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

export default function Hero() {
  return (
    <div className="relative max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-10 mx-auto px-4 sm:px-8 lg:px-12 py-16">
      <div className="absolute -top-60 left-0 right-0 h-96 bg-gradient-to-tr from-[#361585] to-[#301178] blur-[120px] opacity-60 -z-10" />
      <HeroLeft />
      <HeroRight />
    </div>
  );
}
