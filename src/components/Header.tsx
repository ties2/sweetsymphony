import React, { useState, useEffect } from 'react';
import { Menu, X, Music, Music as MusicOff } from 'lucide-react';

interface HeaderProps {
  musicEnabled: boolean;
  toggleMusic: () => void;
}

const Header: React.FC<HeaderProps> = ({ musicEnabled, toggleMusic }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-script text-rose-400 hover:text-rose-500 transition-colors cursor-pointer"
                onClick={() => scrollToSection('home')}>
              Sweet Symphony
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} 
                    className="text-gray-700 hover:text-rose-400 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('gallery')} 
                    className="text-gray-700 hover:text-rose-400 transition-colors font-medium">
              Gallery
            </button>
            <button onClick={() => scrollToSection('order')} 
                    className="text-gray-700 hover:text-rose-400 transition-colors font-medium">
              Custom Order
            </button>
            <button onClick={() => scrollToSection('about')} 
                    className="text-gray-700 hover:text-rose-400 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} 
                    className="text-gray-700 hover:text-rose-400 transition-colors font-medium">
              Contact
            </button>
            
            <button
              onClick={toggleMusic}
              className="p-2 rounded-full hover:bg-rose-100 transition-colors text-rose-400"
              aria-label="Toggle background music"
            >
              {musicEnabled ? <Music size={20} /> : <MusicOff size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleMusic}
              className="p-2 rounded-full hover:bg-rose-100 transition-colors text-rose-400"
              aria-label="Toggle background music"
            >
              {musicEnabled ? <Music size={20} /> : <MusicOff size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-rose-100 transition-colors text-rose-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-rose-100">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} 
                      className="text-gray-700 hover:text-rose-400 transition-colors font-medium text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('gallery')} 
                      className="text-gray-700 hover:text-rose-400 transition-colors font-medium text-left">
                Gallery
              </button>
              <button onClick={() => scrollToSection('order')} 
                      className="text-gray-700 hover:text-rose-400 transition-colors font-medium text-left">
                Custom Order
              </button>
              <button onClick={() => scrollToSection('about')} 
                      className="text-gray-700 hover:text-rose-400 transition-colors font-medium text-left">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} 
                      className="text-gray-700 hover:text-rose-400 transition-colors font-medium text-left">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;