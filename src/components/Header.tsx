import React, { useState } from 'react';
import { Menu, X, Recycle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Recycle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              RecyLinker
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-green-600 transition-colors">
              How It Works
            </a>
            <a href="#sdg-alignment" className="text-gray-600 hover:text-green-600 transition-colors">
              SDG Impact
            </a>
            <a href="#impact" className="text-gray-600 hover:text-green-600 transition-colors">
              Impact
            </a>
            <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">
              About
            </a>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Get Started
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-green-600 transition-colors">
                How It Works
              </a>
              <a href="#sdg-alignment" className="text-gray-600 hover:text-green-600 transition-colors">
                SDG Impact
              </a>
              <a href="#impact" className="text-gray-600 hover:text-green-600 transition-colors">
                Impact
              </a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">
                About
              </a>
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full w-fit">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;