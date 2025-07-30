import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const accentColor = darkMode ? '#577B87' : '#294149';

  return (
    <footer
      className="py-12 text-white border-t"
      style={{
        backgroundColor: darkMode ? '#111827' : '#1f2937',
        borderTopColor: accentColor
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Name */}
        <h3 className="text-2xl font-bold mb-6">Bilel Triki</h3>

        {/* Philosophy */}
        <blockquote className="text-lg italic mb-8 max-w-2xl mx-auto text-gray-300">
          "Life is like chess — every move counts."
        </blockquote>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {['Home','About','Projects','Experience','Skills','Achievements','Contact'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="transition-colors duration-200"
              style={{ color: 'inherit' }}
              onMouseEnter={e => (e.currentTarget.style.color = accentColor)}
              onMouseLeave={e => (e.currentTarget.style.color = '')}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Bilel Triki © 2025
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Strategic thinking meets innovative technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
