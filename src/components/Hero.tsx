import React, { useState, useEffect } from 'react';
import { Star, Heart, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { text: "Every bite is pure magic!", author: "Sarah M." },
    { text: "The most beautiful cakes I've ever seen", author: "Michael R." },
    { text: "Sweet Symphony made our wedding unforgettable", author: "Emma & Jake" },
    { text: "Artistry meets deliciousness", author: "Lisa P." }
  ];

  const sweetFacts = [
    "We use only the finest Belgian chocolate",
    "Fresh flowers picked daily for decorations",
    "Over 50 unique flavor combinations",
    "Gluten-free options available"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const scrollToOrder = () => {
    const element = document.getElementById('order');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-cream-50 to-mint-50">
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Hero image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Beautiful artisan cakes" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-script text-rose-400 leading-tight">
                Sweet Symphony
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 font-light">
                Where Every Bite is a Melody
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Crafting edible masterpieces that harmonize flavors, artistry, and pure joy. 
                Each creation is a symphony of taste designed to make your moments unforgettable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToOrder}
                className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Order Your Masterpiece
              </button>
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
              >
                View Gallery
              </button>
            </div>

            {/* Achievement badges */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center text-amber-500">
                <Award className="mr-2" size={20} />
                <span className="text-sm font-medium text-gray-700">Award Winning</span>
              </div>
              <div className="flex items-center text-rose-400">
                <Heart className="mr-2" size={20} />
                <span className="text-sm font-medium text-gray-700">Made with Love</span>
              </div>
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className="space-y-6 animate-fade-in-up delay-300">
            {/* Testimonial card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-3">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-rose-400 font-medium">
                — {testimonials[currentTestimonial].author}
              </p>
            </div>

            {/* Sweet facts card */}
            <div className="bg-gradient-to-br from-mint-100 to-rose-100 rounded-2xl p-6 shadow-lg">
              <h3 className="font-script text-xl text-rose-400 mb-4">Sweet Facts</h3>
              <ul className="space-y-2">
                {sweetFacts.map((fact, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-rose-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;