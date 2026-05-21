'use client';

import { useState } from 'react';
import Input from '../shared/Input';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been received. We'll respond within 24 hours.");
    // You can connect this to Formspree, EmailJS, or your backend later
  };

  const serviceOptions = [
    { value: "", label: "Select a service" },
    { value: "Forex Trading", label: "Forex Trading" },
    { value: "Real Estate", label: "Real Estate Investment" },
    { value: "Wealth Management", label: "Wealth Management" },
    { value: "Financial Education", label: "Financial Education" },
    { value: "General", label: "General Inquiry" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-[#0A2540] mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              <div>
                <p className="text-gray-500 mb-1">Email</p>
                <a href="mailto:agapestewardshipsupport@gmail.com" className="text-lg underline text-[#E8B923] transition-colors">
                  agapestewardshipsupport@gmail.com
                </a>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Headquarters</p>
                <p className="text-lg text-black">Nigeria</p>
              </div>

              <div>
                <p className="text-gray-500 mb-3">Business Hours</p>
                <p className="text-gray-600">Monday – Friday: 9:00 AM – 5:00 PM WAT</p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm text-gray-500">We respond to all inquiries within 24 business hours.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#F8F9FC] p-6 sm:p-8 md:p-12 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-8 text-[#0A2540]">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="name"
                name="name"
                label="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <Input
                id="service"
                name="service"
                label="Interested Service"
                type="select"
                value={formData.service}
                onChange={handleChange}
                options={serviceOptions}
              />

              <Input
                id="message"
                name="message"
                label="Message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your investment goals..."
              />

              <button
                type="submit"
                className="w-full bg-[#0A2540] text-white py-3 sm:py-4 md:py-5 rounded-2xl font-semibold hover:bg-[#E8B923] hover:text-[#0A2540] transition-all text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}