
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-neutral-section fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="font-poppins font-bold text-2xl text-neutral-text hover:text-dusty-clay transition-colors cursor-pointer"
        >
          RoofPro
        </button>
        
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="font-lato text-neutral-text hover:text-dusty-clay transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="font-lato text-neutral-text hover:text-dusty-clay transition-colors">About</button>
          <button onClick={() => scrollToSection('services')} className="font-lato text-neutral-text hover:text-dusty-clay transition-colors">Services</button>
          <button onClick={() => scrollToSection('gallery')} className="font-lato text-neutral-text hover:text-dusty-clay transition-colors">Gallery</button>
          <button onClick={() => scrollToSection('contact')} className="font-lato text-neutral-text hover:text-dusty-clay transition-colors">Contact</button>
        </nav>

        <Button 
          onClick={() => scrollToSection('contact')}
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
