import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import OrderForm from './components/OrderForm';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [musicEnabled, setMusicEnabled] = useState(false);

  useEffect(() => {
    // Add custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
      
      .font-script {
        font-family: 'Dancing Script', cursive;
      }
      
      body {
        font-family: 'Inter', sans-serif;
      }
      
      .bg-cream-50 {
        background-color: #fefdfb;
      }
      
      .bg-mint-50 {
        background-color: #f0fdfa;
      }
      
      .bg-mint-100 {
        background-color: #ccfbf1;
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 1s ease-out;
      }
      
      .delay-300 {
        animation-delay: 0.3s;
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      /* Smooth scrolling for all browsers */
      html {
        scroll-behavior: smooth;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #fb7185;
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #f43f5e;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const toggleMusic = () => {
    setMusicEnabled(!musicEnabled);
    // In a real implementation, you would control actual background music here
    console.log('Background music:', musicEnabled ? 'disabled' : 'enabled');
  };

  return (
    <div className="min-h-screen">
      <Header musicEnabled={musicEnabled} toggleMusic={toggleMusic} />
      <Hero />
      <Gallery />
      <OrderForm />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;