import React from 'react';
import { Download } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-white to-gray-50'
    }`}>
{/* Chess Pattern Background */}
<div className="absolute inset-0 opacity-20">
  <div className="w-screen h-screen grid grid-cols-8 grid-rows-18">
    {Array.from({ length: 144 }).map((_, i) => (
      <div
        key={i}
        className={`aspect-square ${
          (Math.floor(i / 8) + i) % 2 === 0 ? 'bg-[#A17C5B]' : 'bg-[#EBDAB5]'
        }`}
      />
    ))}
  </div>
</div>






      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">


          {/* Name */}
          <h1 className={`text-6xl md:text-8xl font-bold tracking-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="block">Bilel</span>
            <span className="block text-[#294149]">Triki</span>
          </h1>

          {/* Tagline */}
          <p className={`text-xl md:text-2xl font-medium max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Turning Data into Strategic Decisions
          </p>

          {/* Philosophy Quote */}
          <blockquote className={`text-lg md:text-xl italic max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            "Life is like chess — every move counts."
          </blockquote>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="bg-[#294149] hover:bg-[#1e2f36] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </a>
            <button className="border-2 border-[#294149] text-[#294149] hover:bg-[#294149] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
    
      </div>
    </section>
  );
};

export default Hero;