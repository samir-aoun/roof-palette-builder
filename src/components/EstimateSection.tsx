
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EstimateSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-4xl text-neutral-text mb-4">
              Get Your Free Estimate
            </h2>
            <p className="font-lato text-lg text-neutral-text">
              Ready to start your roofing project? Contact us today for a free, no-obligation estimate.
            </p>
          </div>

          <Card className="shadow-lg border-neutral-section">
            <CardHeader className="bg-neutral-bg">
              <CardTitle className="font-poppins text-2xl text-neutral-text text-center">
                Request Your Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="font-lato text-neutral-text">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 border-neutral-section focus:border-dusty-clay"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-lato text-neutral-text">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 border-neutral-section focus:border-dusty-clay"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="font-lato text-neutral-text">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 border-neutral-section focus:border-dusty-clay"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="service" className="font-lato text-neutral-text">Service Needed</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-2 w-full px-3 py-2 border border-neutral-section rounded-md focus:border-dusty-clay outline-none"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="repair">Roof Repair</option>
                      <option value="replacement">Roof Replacement</option>
                      <option value="gutter">Gutter Services</option>
                      <option value="emergency">Emergency Service</option>
                      <option value="inspection">Roof Inspection</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="font-lato text-neutral-text">Property Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-2 border-neutral-section focus:border-dusty-clay"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-lato text-neutral-text">Additional Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-2 border-neutral-section focus:border-dusty-clay"
                    placeholder="Please describe your roofing needs or any specific requirements..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-soft-gray hover:bg-dusty-clay text-white font-lato text-lg py-6 transition-colors"
                >
                  Get My Free Estimate
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EstimateSection;
