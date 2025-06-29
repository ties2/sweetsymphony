import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Studio",
      details: ["123 Baker Street", "Sweet Valley, CA 90210"],
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-CAKE", "Mon-Sat: 9AM-6PM"],
      link: "tel:+15551232253"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@sweetsymphony.com", "orders@sweetsymphony.com"],
      link: "mailto:hello@sweetsymphony.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM-7PM", "Sat: 10AM-6PM", "Sun: By Appointment"],
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@sweetsymphonybakery",
      link: "https://instagram.com/sweetsymphonybakery",
      color: "hover:text-pink-500"
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Sweet Symphony Bakery",
      link: "https://facebook.com/sweetsymphonybakery",
      color: "hover:text-blue-500"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-script text-rose-400 mb-4">Message Sent Successfully!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for reaching out to Sweet Symphony! We've received your message and will respond within 24 hours.
              </p>
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-script text-rose-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions about our services or want to discuss your next sweet celebration, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-script text-rose-400 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-rose-100 rounded-lg p-3 group-hover:bg-rose-200 transition-colors">
                      <info.icon className="text-rose-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {info.link && idx === 0 ? (
                            <a href={info.link} className="hover:text-rose-400 transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-script text-rose-400 mb-6">Follow Our Sweet Journey</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-4 rounded-lg bg-white hover:shadow-lg transition-all duration-300 group ${social.color}`}
                  >
                    <div className="bg-gray-100 rounded-lg p-3 group-hover:bg-rose-100 transition-colors">
                      <social.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{social.name}</h4>
                      <p className="text-gray-600 text-sm">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Studio Photo */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Sweet Symphony bakery interior"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-gray-800 mb-1">Our Beautiful Studio</h4>
                <p className="text-gray-600 text-sm">Visit us to see the magic happen!</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-rose-400 to-pink-400 p-6">
                <h3 className="text-2xl font-semibold text-white">Send Us a Message</h3>
                <p className="text-rose-100">We'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="custom-order">Custom Order Discussion</option>
                    <option value="wedding">Wedding Consultation</option>
                    <option value="catering">Catering Services</option>
                    <option value="feedback">Feedback & Reviews</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help make your celebration sweeter..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-rose-400 hover:bg-rose-500 disabled:bg-gray-400 text-white py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2" size={18} />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-script text-rose-400 mb-6">Visit Our Studio</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Come see where the magic happens! Our beautiful studio space is designed to inspire creativity 
                  and showcase our latest creations. We love having visitors and would be delighted to give you 
                  a behind-the-scenes look at our baking process.
                </p>
                <p>
                  <strong>By Appointment:</strong> Schedule a consultation to discuss your custom order in person, 
                  taste our signature flavors, and see our portfolio of past work.
                </p>
                <div className="flex items-center space-x-2 text-rose-400">
                  <Phone size={16} />
                  <span className="font-medium">Call (555) 123-CAKE to schedule</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center p-8">
              <div className="text-center">
                <MapPin className="text-rose-400 mx-auto mb-4" size={48} />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">123 Baker Street</h4>
                <p className="text-gray-600 mb-4">Sweet Valley, CA 90210</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;