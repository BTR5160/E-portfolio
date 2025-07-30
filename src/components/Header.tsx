import React, { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Accent colors
  const accentText = darkMode ? 'text-[#577B87]' : 'text-[#294149]';
  const hoverText = darkMode ? 'hover:text-[#577B87]' : 'hover:text-[#294149]';

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0 }
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-sm border-b transition-colors duration-300 ${
      darkMode ? 'bg-gray-900/90 text-white border-gray-700' : 'bg-white/90 text-gray-900 border-gray-200'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="text-2xl font-bold">BTR</a>

          {/* Desktop */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${hoverText} ${
                    isActive ? `${accentText} underline underline-offset-4` : ''
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Toggle & Mobile */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-700/50"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-gray-700/50"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile */}
        {isMenuOpen && (
          <div className={`md:hidden border-t transition-colors duration-200 ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="px-2 pt-4 pb-3 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollTo(e, item.href)}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${hoverText} ${
                      isActive ? `${accentText} font-semibold` : ''
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
