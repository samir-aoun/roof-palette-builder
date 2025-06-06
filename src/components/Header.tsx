
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-neutral-section">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-poppins font-bold text-2xl text-neutral-text">
          RoofPro
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="font-lato text-neutral-text hover:text-dusty-clay transition-colors">Home</a>
          <a href="#about" className="font-lato text-neutral-text hover:text-dusty-clay transition-colors">About</a>
          <a href="#services" className="font-lato text-neutral-text hover:text-dusty-clay transition-colors">Services</a>
          <a href="#gallery" className="font-lato text-neutral-text hover:text-dusty-clay transition-colors">Gallery</a>
          <a href="#contact" className="font-lato text-neutral-text hover:text-dusty-clay transition-colors">Contact</a>
        </nav>

        <Button 
          className="bg-dusty-clay hover:bg-warm-beige text-white font-lato transition-colors"
        >
          Get Quote
        </Button>

        {/* Mobile menu button */}
        <button className="md:hidden">
          <svg className="w-6 h-6 text-neutral-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
