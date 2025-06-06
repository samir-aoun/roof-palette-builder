
import React from 'react';
import fullShotRoofer from 'C:/Users/Laltitude 5410/Personal Projects/roof-palette-builder/assets/full-shot-roofers-working-together-with-helmets.jpg'
import highAngleRoof from 'C:/Users/Laltitude 5410/Personal Projects/roof-palette-builder/assets/high-angle-beautiful-roof-wooden-house.jpg'
import highAngleRoof1 from 'C:/Users/Laltitude 5410/Personal Projects/roof-palette-builder/assets/exterior-home.jpg'
import highAngleWooden from 'C:/Users/Laltitude 5410/Personal Projects/roof-palette-builder/assets/high-angle-beautiful-wooden-house-with-new-roof.jpg'
import longShotWood from 'C:/Users/Laltitude 5410/Personal Projects/roof-palette-builder/assets/long-shot-roofer-working-with-helmet.jpg'
import newBrick from 'C:/Users/Laltitude 5410/Personal Projects/roof-palette-builder/assets/new-brick-house-with-modular-chimney-stone-coated-metal-roof-tile-plastic-windows-rain-gutter.jpg'
import roofHome from 'C:/Users/Laltitude 5410/Personal Projects/roof-palette-builder/assets/roof-home.jpg'
import sideWorker from 'C:/Users/Laltitude 5410/Personal Projects/roof-palette-builder/assets/side-view-man-working-roof-with-drill.jpg'


const GallerySection = () => {
  const galleryImages = [
    fullShotRoofer,
    highAngleRoof,
    highAngleRoof1,
    highAngleWooden,
    longShotWood,
    newBrick,
    roofHome,
    sideWorker
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
