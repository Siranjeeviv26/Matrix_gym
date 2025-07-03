import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black/90 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#home" className="text-primary-500 font-bold text-xl">
              MATRIX FITNESS
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-primary-500 transition-colors">Home</a>
            <a href="#featuredbootcamps" className="text-white hover:text-primary-500 transition-colors">Programs</a>
            <a href="#plans" className="text-white hover:text-primary-500 transition-colors">Plans</a>
            <a href="#contact" className="text-white hover:text-primary-500 transition-colors">Contact</a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
              <a href="#home" onClick={handleLinkClick} className="block text-white hover:text-primary-500 px-3 py-2">Home</a>
              <a href="#featuredbootcamps" onClick={handleLinkClick} className="block text-white hover:text-primary-500 px-3 py-2">Programs</a>
              <a href="#plans" onClick={handleLinkClick} className="block text-white hover:text-primary-500 px-3 py-2">Plans</a>
              <a href="#contact" onClick={handleLinkClick} className="block text-white hover:text-primary-500 px-3 py-2">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
