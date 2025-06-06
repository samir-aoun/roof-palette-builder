
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-neutral-bg">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(250, 250, 250, 0.7), rgba(250, 250, 250, 0.7)), url('https://st.hzcdn.com/simgs/pictures/exteriors/concord-ma-custom-home-affinity-builders-llc-img~10b1cf9507ebf389_8-1813-1-df6dce3.jpg')`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-neutral-text mb-6 leading-tight">
            Professional Roofing Services You Can Trust
          </h1>
          
          <p className="font-lato text-xl text-neutral-text mb-8 leading-relaxed">
            Quality craftsmanship, reliable service, and customer satisfaction guaranteed. 
            Your roof is our priority, protecting what matters most to you.
          </p>
          
          <Button 
            size="lg" 
            className="bg-dusty-clay hover:bg-warm-beige text-white font-lato text-lg px-8 py-6 transition-colors"
          >
            Get Free Estimate
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
