import React, { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' }
  ];

  // Scroll spy effect
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60% 0px', // Trigger when top 40% of section is visible
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      darkMode ? 'bg-gray-900/95 text-white' : 'bg-white/95 text-gray-900'
    } backdrop-blur-sm border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl dr-sugiyama-regular">BTR</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium  ${
                    activeSection === item.href.replace('#', '')
                      ? darkMode
                        ? 'text-white bg-[#294149] px-4 py-2 rounded-lg shadow-md'
                        :'text-white bg-[#294149] px-4 py-2 rounded-lg shadow-md'
                      : ''
                  } ${
                    darkMode ? 'hover:text-yellow-400' : 'hover:text-[#294149]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.href.replace('#', '')
                      ? darkMode
                        ? 'text-yellow-400'
                        : 'text-[#294149] font-semibold underline'
                      : ''
                  } ${
                    darkMode ? 'hover:text-yellow-400' : 'hover:text-[#294149]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
