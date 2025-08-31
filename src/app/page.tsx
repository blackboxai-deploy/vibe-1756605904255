"use client";

import React from 'react';
import ClaymorphismCarousel from '../components/ClaymorphismCarousel';
import { SlideData } from '../components/CarouselSlide';

const HomePage: React.FC = () => {
  // Sample carousel data with placeholder images
  const heroSlides: SlideData[] = [
    {
      id: '1',
      title: 'Innovative Design',
      description: 'Experience the future of user interface design with our cutting-edge claymorphism approach. Clean, modern, and incredibly intuitive.',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9f11af21-5c1f-463b-aabe-89ee19928091.png',
      buttonText: 'Explore Now',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      buttonAction: () => console.log('Explore Now clicked'),
    },
    {
      id: '2',
      title: 'Seamless Experience',
      description: 'Built with performance in mind, our carousel delivers smooth transitions and responsive design across all devices.',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a1343a83-50f8-497d-b3b8-74701742972b.png',
      buttonText: 'Learn More',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      buttonAction: () => console.log('Learn More clicked'),
    },
    {
      id: '3',
      title: 'Advanced Features',
      description: 'Touch support, keyboard navigation, auto-play controls, and accessibility features make this carousel perfect for any project.',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1a168eb0-5e98-4e7d-a35d-136e17a873d2.png',
      buttonText: 'Get Started',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      buttonAction: () => console.log('Get Started clicked'),
    },
    {
      id: '4',
      title: 'Customizable',
      description: 'Easily customize colors, animations, and layouts to match your brand. Full TypeScript support with comprehensive documentation.',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/138235d6-93d0-4b71-b229-6f0dddf02501.png',
      buttonText: 'Customize',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      buttonAction: () => console.log('Customize clicked'),
    },
  ];

  const portfolioSlides: SlideData[] = [
    {
      id: 'p1',
      title: 'Creative Portfolio',
      description: 'Showcase your work with stunning visual presentations that capture attention and inspire engagement.',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/14bdddf1-4d06-4d6f-8341-c64433fb963e.png',
      buttonText: 'View Portfolio',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 'p2',
      title: 'Business Solutions',
      description: 'Professional carousel implementations for corporate websites and enterprise applications.',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b47424c9-7928-475b-90c3-fb8e77beb9fe.png',
      buttonText: 'Explore Solutions',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: 'p3',
      title: 'E-commerce Ready',
      description: 'Perfect for product galleries, testimonials, and marketing campaigns with conversion-focused design.',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f67eafcc-a87a-4779-8094-f6a05bdaf840.png',
      buttonText: 'Shop Now',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  ];

  return (
    <div className="carousel-container">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 
          className="text-6xl font-bold mb-6"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Claymorphism Carousel
        </h1>
        <p 
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          A beautiful, responsive carousel slider featuring the latest claymorphism design trend. 
          Built with React, TypeScript, and modern CSS for optimal performance and accessibility.
        </p>
      </header>

      {/* Hero Carousel */}
      <section className="mb-20">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Hero Carousel Demo
          </h2>
          <p className="text-lg text-gray-600">
            Experience smooth transitions, touch support, and elegant animations
          </p>
        </div>
        
        <ClaymorphismCarousel
          slides={heroSlides}
          autoPlay={true}
          autoPlayInterval={4000}
          showArrows={true}
          showDots={true}
          className="hero-carousel"
        />
      </section>

      {/* Portfolio Carousel */}
      <section className="mb-20">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-lg text-gray-600">
            Multiple carousel instances with different configurations
          </p>
        </div>
        
        <ClaymorphismCarousel
          slides={portfolioSlides}
          autoPlay={false}
          showArrows={true}
          showDots={true}
          className="portfolio-carousel"
        />
      </section>

      {/* Features Section */}
      <section className="text-center mb-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Key Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {([
            {
              title: 'Touch Support',
              description: 'Swipe gestures for mobile devices with smooth momentum scrolling',
              icon: '👆',
            },
            {
              title: 'Auto-Play',
              description: 'Configurable auto-play with pause on hover and manual controls',
              icon: '⏯️',
            },
            {
              title: 'Keyboard Nav',
              description: 'Full keyboard accessibility with arrow keys and space bar controls',
              icon: '⌨️',
            },
            {
              title: 'Responsive',
              description: 'Fully responsive design that works beautifully on all screen sizes',
              icon: '📱',
            },
          ] as const).map((feature, index) => (
            <div
              key={index}
              className="claymorphism p-6 text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="text-center">
        <div
          className="claymorphism p-8 max-w-4xl mx-auto"
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(15px)',
          }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How to Use
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                1. Navigation
              </h3>
              <p className="text-gray-600 text-sm">
                Use arrow buttons, dot indicators, or swipe gestures to navigate between slides
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                2. Auto-Play
              </h3>
              <p className="text-gray-600 text-sm">
                Click the play/pause button in the top-right corner to control auto-play
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                3. Keyboard
              </h3>
              <p className="text-gray-600 text-sm">
                Use left/right arrow keys to navigate and spacebar to toggle auto-play
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-20 pb-10">
        <p className="text-gray-500">
          Built with React, TypeScript, and modern CSS • Claymorphism Design System
        </p>
      </footer>
    </div>
  );
};

export default HomePage;