
import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const trustIndicators = [
    "Licensed & Insured Professionals",
    "Over 15 Years of Experience",
    "100% Customer Satisfaction Guarantee", 
    "Quality Materials & Workmanship"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-poppins font-bold text-4xl text-neutral-text mb-6">
              About Our Company
            </h2>
            
            <p className="font-lato text-lg text-neutral-text mb-6 leading-relaxed">
              We are a family-owned roofing company dedicated to providing exceptional 
              service and superior craftsmanship. Our team of skilled professionals 
              takes pride in protecting your home with quality roofing solutions.
            </p>
            
            <p className="font-lato text-lg text-neutral-text mb-8 leading-relaxed">
              From residential repairs to complete roof replacements, we handle every 
              project with attention to detail and a commitment to excellence that has 
              earned us the trust of our community.
            </p>

            <div className="space-y-4">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-dusty-clay mr-3 flex-shrink-0" size={20} />
                  <span className="font-lato text-neutral-text">{indicator}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=4000&auto=format&fit=crop"
              alt="Professional roofing work"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
