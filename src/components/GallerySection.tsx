
import React from 'react';

const GallerySection = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2000&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-neutral-text mb-4">
            Our Work Gallery
          </h2>
          <p className="font-lato text-lg text-neutral-text max-w-2xl mx-auto">
            Browse through our portfolio of completed roofing projects and see the quality craftsmanship we deliver
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img 
                src={image}
                alt={`Roofing project ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-neutral-text bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
