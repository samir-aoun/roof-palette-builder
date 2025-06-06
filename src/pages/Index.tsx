
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EstimateSection from '@/components/EstimateSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-bg">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <EstimateSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
