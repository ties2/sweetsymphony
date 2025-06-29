import React, { useState } from 'react';
import { Upload, Calendar, Users, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  customerName: string;
  email: string;
  phone: string;
  sweetType: string;
  flavors: string[];
  dateNeeded: string;
  servings: string;
  dietaryRestrictions: string[];
  specialRequests: string;
  referenceImage: File | null;
}

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    customerName: '',
    email: '',
    phone: '',
    sweetType: '',
    flavors: [],
    dateNeeded: '',
    servings: '',
    dietaryRestrictions: [],
    specialRequests: '',
    referenceImage: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const sweetTypes = [
    'Celebration Cake',
    'Wedding Cake',
    'Cupcakes',
    'Cookies',
    'Seasonal Treats',
    'Custom Design',
    'Other'
  ];

  const flavorOptions = [
    'Vanilla',
    'Chocolate',
    'Strawberry',
    'Lemon',
    'Red Velvet',
    'Carrot',
    'Funfetti',
    'Salted Caramel',
    'Raspberry',
    'Custom Flavor'
  ];

  const dietaryOptions = [
    'Gluten-Free',
    'Dairy-Free',
    'Nut-Free',
    'Egg-Free',
    'Sugar-Free',
    'Vegan'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.sweetType) {
      newErrors.sweetType = 'Please select a sweet type';
    }

    if (!formData.dateNeeded) {
      newErrors.dateNeeded = 'Date needed is required';
    }

    if (!formData.servings) {
      newErrors.servings = 'Number of servings is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleCheckboxChange = (field: 'flavors' | 'dietaryRestrictions', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, referenceImage: file }));
  };

  if (isSubmitted) {
    return (
      <section id="order" className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-script text-rose-400 mb-4">Order Submitted Successfully!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for choosing Sweet Symphony! We've received your custom order request and will contact you within 24 hours to discuss the details.
              </p>
              <div className="bg-rose-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">What happens next?</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• We'll review your requirements and preferences</li>
                  <li>• Our team will contact you to finalize design details</li>
                  <li>• We'll provide a detailed quote and timeline</li>
                  <li>• Upon approval, we'll begin crafting your masterpiece</li>
                </ul>
              </div>
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    customerName: '',
                    email: '',
                    phone: '',
                    sweetType: '',
                    flavors: [],
                    dateNeeded: '',
                    servings: '',
                    dietaryRestrictions: [],
                    specialRequests: '',
                    referenceImage: null
                  });
                }}
                className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Submit Another Order
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-script text-rose-400 mb-4">
              Create Your Custom Order
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let us bring your sweet dreams to life! Fill out this form with as much detail as possible, 
              and we'll create a masterpiece that exceeds your expectations.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-rose-400 to-pink-400 p-6">
              <h3 className="text-2xl font-semibold text-white">Order Details</h3>
              <p className="text-rose-100">All fields marked with * are required</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Customer Information */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Users className="mr-2 text-rose-400" size={20} />
                      Customer Information
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.customerName}
                          onChange={(e) => handleInputChange('customerName', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.customerName ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all`}
                          placeholder="Enter your full name"
                        />
                        {errors.customerName && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {errors.customerName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all`}
                          placeholder="(555) 123-4567"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Order Details */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <MessageCircle className="mr-2 text-rose-400" size={20} />
                      Order Specifications
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Type of Sweet *
                        </label>
                        <select
                          value={formData.sweetType}
                          onChange={(e) => handleInputChange('sweetType', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.sweetType ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all`}
                        >
                          <option value="">Select a type</option>
                          {sweetTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        {errors.sweetType && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {errors.sweetType}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Desired Date *
                        </label>
                        <input
                          type="date"
                          value={formData.dateNeeded}
                          onChange={(e) => handleInputChange('dateNeeded', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.dateNeeded ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all`}
                        />
                        {errors.dateNeeded && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {errors.dateNeeded}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Servings *
                        </label>
                        <input
                          type="text"
                          value={formData.servings}
                          onChange={(e) => handleInputChange('servings', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.servings ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all`}
                          placeholder="e.g., 20-25 people, 2 dozen cupcakes"
                        />
                        {errors.servings && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle size={14} className="mr-1" />
                            {errors.servings}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Flavor Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Desired Flavors (select all that apply)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {flavorOptions.map((flavor) => (
                        <label key={flavor} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.flavors.includes(flavor)}
                            onChange={() => handleCheckboxChange('flavors', flavor)}
                            className="rounded border-gray-300 text-rose-400 focus:ring-rose-400"
                          />
                          <span className="text-sm text-gray-700">{flavor}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Dietary Restrictions */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Dietary Restrictions/Allergies
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {dietaryOptions.map((restriction) => (
                        <label key={restriction} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.dietaryRestrictions.includes(restriction)}
                            onChange={() => handleCheckboxChange('dietaryRestrictions', restriction)}
                            className="rounded border-gray-300 text-rose-400 focus:ring-rose-400"
                          />
                          <span className="text-sm text-gray-700">{restriction}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests & Design Ideas
                    </label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your vision! Include details about colors, themes, decorations, or any special requirements..."
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reference Image (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-rose-400 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">
                          {formData.referenceImage ? (
                            <span className="text-rose-400 font-medium">
                              {formData.referenceImage.name}
                            </span>
                          ) : (
                            <>
                              Click to upload or drag and drop<br />
                              <span className="text-xs text-gray-500">PNG, JPG up to 10MB</span>
                            </>
                          )}
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-12 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-rose-400 hover:bg-rose-500 disabled:bg-gray-400 text-white px-12 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting Order...
                    </span>
                  ) : (
                    'Submit Custom Order'
                  )}
                </button>
                
                <p className="text-sm text-gray-500 mt-4">
                  We'll contact you within 24 hours to discuss your order details and provide a quote.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;