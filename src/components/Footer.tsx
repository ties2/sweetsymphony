import React from 'react';
import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Custom Orders', href: '#order' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Wedding Cakes',
    'Birthday Cakes',
    'Cupcakes',
    'Cookies',
    'Seasonal Treats',
    'Custom Designs'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-script text-rose-400 mb-4">Sweet Symphony</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting edible masterpieces that harmonize flavors, artistry, and pure joy. 
              Every creation is a symphony of taste designed to make your moments unforgettable.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/sweetsymphonybakery" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-rose-400 p-3 rounded-full transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/sweetsymphonybakery" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-500 p-3 rounded-full transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:hello@sweetsymphony.com"
                className="bg-gray-800 hover:bg-rose-400 p-3 rounded-full transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-rose-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-rose-400">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <Heart size={12} className="text-rose-400 mr-2 flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-rose-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-rose-400 mt-1 flex-shrink-0" size={16} />
                <div className="text-gray-300">
                  <p>123 Baker Street</p>
                  <p>Sweet Valley, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-rose-400 flex-shrink-0" size={16} />
                <a href="tel:+15551232253" className="text-gray-300 hover:text-rose-400 transition-colors">
                  (555) 123-CAKE
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-rose-400 flex-shrink-0" size={16} />
                <a href="mailto:hello@sweetsymphony.com" className="text-gray-300 hover:text-rose-400 transition-colors">
                  hello@sweetsymphony.com
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold text-rose-400 mb-2">Business Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mon-Fri: 9AM-7PM</p>
                <p>Saturday: 10AM-6PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-script text-rose-400 mb-4">Stay Sweet with Us</h4>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for sweet deals, new flavor announcements, and baking tips!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-rose-400 focus:border-transparent"
              />
              <button className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 Sweet Symphony. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-rose-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-rose-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-rose-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;