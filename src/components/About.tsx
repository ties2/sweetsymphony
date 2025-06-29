import React from 'react';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every creation starts with passion and care, ensuring each bite brings joy to your special moments."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source only the finest ingredients - Belgian chocolate, organic flour, and fresh local produce."
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Your vision becomes our masterpiece. We work closely with you to create something truly unique."
    },
    {
      icon: Sparkles,
      title: "Artisan Craftsmanship",
      description: "Each detail is hand-crafted with precision, from delicate sugar flowers to intricate piping work."
    }
  ];

  const milestones = [
    { year: "2018", achievement: "Sweet Symphony was born from a home kitchen" },
    { year: "2019", achievement: "Won 'Best New Bakery' at local food festival" },
    { year: "2020", achievement: "Expanded to custom wedding cakes" },
    { year: "2021", achievement: "Featured in 'Local Artisan Spotlight'" },
    { year: "2022", achievement: "Reached 1000+ happy customers" },
    { year: "2023", achievement: "Opened our beautiful new studio space" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-script text-rose-400 mb-4">
            About Sweet Symphony
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the passion and artistry behind every sweet creation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-script text-rose-400 mb-4">Our Sweet Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sweet Symphony began as a melody of dreams in 2018, when our founder Emma discovered 
                  that creating beautiful cakes was more than just baking—it was composing edible symphonies 
                  that could make any celebration unforgettable.
                </p>
                <p>
                  What started in a small home kitchen has blossomed into a beloved local treasure, where 
                  every cake, cupcake, and cookie is crafted with the same love and attention to detail 
                  that inspired our very first creation.
                </p>
                <p>
                  We believe that life's sweetest moments deserve to be celebrated with something truly 
                  special. That's why we pour our hearts into every design, ensuring that each creation 
                  is not just delicious, but a work of art that tells your unique story.
                </p>
              </div>
            </div>

            <div className="bg-rose-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Our Mission</h4>
              <p className="text-gray-600 italic">
                "To create edible masterpieces that bring people together, spark joy, and make every 
                celebration a symphony of sweet memories that last a lifetime."
              </p>
            </div>
          </div>

          {/* Team Photo */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Sweet Symphony team in the kitchen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
              <h4 className="font-script text-lg text-rose-400 mb-2">Meet Emma</h4>
              <p className="text-sm text-gray-600">
                Head Pastry Chef & Founder, bringing 15+ years of culinary artistry to every creation.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-script text-rose-400 text-center mb-12">What Makes Us Special</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <value.icon className="text-rose-400" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-script text-rose-400 text-center mb-12">Our Sweet Journey</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-2xl font-bold text-rose-400 mb-2">{milestone.year}</div>
                <p className="text-gray-700 text-sm">{milestone.achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-script text-rose-400 mb-4">Ready to Create Something Sweet Together?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's bring your sweet dreams to life. Every masterpiece starts with a conversation about your vision.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;