import React from 'react';
import { Crown, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'
    } border-t ${darkMode ? 'border-gray-700' : 'border-gray-700'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center items-center mb-6">
            <Crown size={40} className="text-yellow-500 mr-3" />
            <h3 className="text-2xl font-bold">Bilel Triki</h3>
          </div>

          {/* Philosophy */}
          <blockquote className="text-lg italic mb-8 max-w-2xl mx-auto text-gray-300">
            "Life is like chess — every move counts."
          </blockquote>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#home" className="hover:text-yellow-400 transition-colors duration-200">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors duration-200">About</a>
            <a href="#projects" className="hover:text-yellow-400 transition-colors duration-200">Projects</a>
            <a href="#experience" className="hover:text-yellow-400 transition-colors duration-200">Experience</a>
            <a href="#skills" className="hover:text-yellow-400 transition-colors duration-200">Skills</a>
            <a href="#achievements" className="hover:text-yellow-400 transition-colors duration-200">Achievements</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors duration-200">Contact</a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> by Bilel Triki © 2025
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Strategic thinking meets innovative technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;