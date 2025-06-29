import React, { useState } from 'react';
import { Heart, Star, Filter } from 'lucide-react';

interface GalleryItem {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  featured: boolean;
  flavors: string[];
  sizes: string[];
  price: string;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Creations' },
    { id: 'cakes', name: 'Celebration Cakes' },
    { id: 'cupcakes', name: 'Cupcakes' },
    { id: 'cookies', name: 'Artisan Cookies' },
    { id: 'seasonal', name: 'Seasonal Treats' }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      name: "Rose Garden Wedding Cake",
      description: "Three-tier masterpiece adorned with handcrafted sugar roses and gold leaf details. A symphony of vanilla sponge and raspberry coulis.",
      image: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "cakes",
      featured: true,
      flavors: ["Vanilla", "Raspberry", "Lemon"],
      sizes: ["6-8 servings", "12-15 servings", "20-25 servings"],
      price: "From $180"
    },
    {
      id: 2,
      name: "Chocolate Decadence Tower",
      description: "Rich Belgian chocolate layers with salted caramel filling, finished with dark chocolate ganache and gold macarons.",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "cakes",
      featured: true,
      flavors: ["Dark Chocolate", "Salted Caramel", "Hazelnut"],
      sizes: ["8-10 servings", "16-20 servings"],
      price: "From $160"
    },
    {
      id: 3,
      name: "Rainbow Butterfly Cupcakes",
      description: "Delicate vanilla cupcakes with natural food coloring, topped with buttercream roses and edible butterfly decorations.",
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "cupcakes",
      featured: false,
      flavors: ["Vanilla", "Strawberry", "Lemon"],
      sizes: ["Set of 6", "Set of 12", "Set of 24"],
      price: "From $24"
    },
    {
      id: 4,
      name: "Vintage Lace Cookies",
      description: "Hand-piped royal icing cookies with intricate lace patterns. Perfect for weddings, baby showers, or elegant tea parties.",
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "cookies",
      featured: false,
      flavors: ["Vanilla Almond", "Lemon Zest", "Rose Water"],
      sizes: ["Set of 12", "Set of 24", "Set of 36"],
      price: "From $36"
    },
    {
      id: 5,
      name: "Autumn Spice Pumpkin Cake",
      description: "Seasonal delight featuring warm spices, cream cheese frosting, and candied pecans. Available September through November.",
      image: "https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "seasonal",
      featured: true,
      flavors: ["Pumpkin Spice", "Cinnamon", "Maple Pecan"],
      sizes: ["6-8 servings", "12-15 servings"],
      price: "From $45"
    },
    {
      id: 6,
      name: "Lavender Honey Cupcakes",
      description: "Delicate lavender-infused cupcakes with local honey buttercream and dried lavender buds. A floral symphony for the senses.",
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "cupcakes",
      featured: false,
      flavors: ["Lavender Honey", "Lemon Lavender"],
      sizes: ["Set of 6", "Set of 12"],
      price: "From $28"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const featuredItems = galleryItems.filter(item => item.featured);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-script text-rose-400 mb-4">
            Our Sweet Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of handcrafted masterpieces. Each creation is made with love, 
            premium ingredients, and attention to every delicious detail.
          </p>
        </div>

        {/* Featured Items */}
        <div className="mb-16">
          <h3 className="text-2xl font-script text-rose-400 text-center mb-8">Featured Creations</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-w-4 aspect-h-5 relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-amber-400 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star size={14} className="mr-1" fill="currentColor" />
                      Featured
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h4>
                  <p className="text-rose-400 font-medium text-lg">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-rose-400 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-rose-100 border border-rose-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                    <Heart size={18} className="text-rose-400" />
                  </button>
                </div>
                {hoveredItem === item.id && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-full font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Flavors: </span>
                    <span className="text-sm text-gray-600">{item.flavors.join(', ')}</span>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-gray-700">Sizes: </span>
                    <span className="text-sm text-gray-600">{item.sizes.join(', ')}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-semibold text-rose-400">{item.price}</span>
                    <button 
                      onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-rose-400 hover:bg-rose-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Don't see exactly what you're looking for? We love creating custom designs!
          </p>
          <button 
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Create Custom Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;