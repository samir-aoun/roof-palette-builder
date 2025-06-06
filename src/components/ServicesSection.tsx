
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Roof Repair",
      description: "Expert repair services for all types of roofing issues, from minor leaks to storm damage.",
      icon: "🔧"
    },
    {
      title: "Roof Replacement", 
      description: "Complete roof replacement with quality materials and professional installation.",
      icon: "🏠"
    },
    {
      title: "Gutter Services",
      description: "Gutter installation, repair, and maintenance to protect your home's foundation.",
      icon: "💧"
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency roofing services for urgent repairs and storm damage.",
      icon: "⚡"
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-neutral-text mb-4">
            Our Services
          </h2>
          <p className="font-lato text-lg text-neutral-text max-w-2xl mx-auto">
            Comprehensive roofing solutions tailored to meet your specific needs and budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border-none">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-poppins font-semibold text-xl text-neutral-text mb-4">
                  {service.title}
                </h3>
                <p className="font-lato text-neutral-text leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
