
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Exceptional service and quality workmanship. Our new roof looks amazing and has performed perfectly through all weather conditions.",
      author: "Sarah Johnson",
      location: "Residential Customer"
    },
    {
      text: "Professional, reliable, and fairly priced. They completed our roof repair quickly and cleaned up thoroughly. Highly recommend!",
      author: "Mike Chen", 
      location: "Residential Customer"
    },
    {
      text: "Outstanding customer service from start to finish. The team was knowledgeable, punctual, and delivered exactly what they promised.",
      author: "Lisa Rodriguez",
      location: "Residential Customer"
    }
  ];

  return (
    <section className="py-20 bg-neutral-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-neutral-text mb-4">
            What Our Customers Say
          </h2>
          <p className="font-lato text-lg text-neutral-text max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl text-dusty-clay mb-4">"</div>
              <p className="font-lato text-neutral-text leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <div>
                <p className="font-poppins font-semibold text-neutral-text">
                  {testimonial.author}
                </p>
                <p className="font-lato text-sm text-neutral-text opacity-75">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
