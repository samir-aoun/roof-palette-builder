
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-section py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-poppins font-bold text-xl text-neutral-text mb-4">
              RoofPro
            </h3>
            <p className="font-lato text-neutral-text leading-relaxed">
              Professional roofing services with quality craftsmanship and customer satisfaction guaranteed.
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg text-neutral-text mb-4">
              Services
            </h4>
            <ul className="space-y-2 font-lato text-neutral-text">
              <li><a href="#" className="hover:text-dusty-clay transition-colors">Roof Repair</a></li>
              <li><a href="#" className="hover:text-dusty-clay transition-colors">Roof Replacement</a></li>
              <li><a href="#" className="hover:text-dusty-clay transition-colors">Gutter Services</a></li>
              <li><a href="#" className="hover:text-dusty-clay transition-colors">Emergency Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg text-neutral-text mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 font-lato text-neutral-text">
              <li><a href="#home" className="hover:text-dusty-clay transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-dusty-clay transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-dusty-clay transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-dusty-clay transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg text-neutral-text mb-4">
              Contact Info
            </h4>
            <div className="space-y-2 font-lato text-neutral-text">
              <p>(555) 123-4567</p>
              <p>info@roofpro.com</p>
              <p>123 Main Street<br />Your City, ST 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-beige mt-8 pt-8 text-center">
          <p className="font-lato text-neutral-text">
            © 2024 RoofPro. All rights reserved. Licensed & Insured.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
