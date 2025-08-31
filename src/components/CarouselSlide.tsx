"use client";

import React from 'react';

export interface SlideData {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonAction?: () => void;
  gradient?: string;
}

interface CarouselSlideProps {
  slide: SlideData;
  isActive: boolean;
  index: number;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ slide, isActive, index }) => {
  // Animation class based on active state
  const animationClass = isActive ? 'fade-in' : '';
  const slideId = `slide-${index}`;
  const handleButtonClick = () => {
    if (slide.buttonAction) {
      slide.buttonAction();
    } else {
      // Default action
      console.log(`Button clicked for slide: ${slide.title}`);
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.style.backgroundColor = '#f3f4f6';
    target.style.display = 'flex';
    target.style.alignItems = 'center';
    target.style.justifyContent = 'center';
    target.style.color = '#6b7280';
    target.style.fontSize = '0.875rem';
    target.alt = 'Image not available';
  };

  return (
    <div className={`carousel-slide ${animationClass}`} id={slideId}>
      <div className="slide-content">
        <div className="slide-image">
          <img
            src={slide.image}
            alt={slide.title}
            onError={handleImageError}
            loading="lazy"
          />
          <div className="image-overlay" />
        </div>
        
        <div className="slide-text">
          <h2 
            className="slide-title"
            style={{
              background: slide.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {slide.title}
          </h2>
          
          <p className="slide-description">
            {slide.description}
          </p>
          
          <button
            className="slide-button"
            onClick={handleButtonClick}
            aria-label={`${slide.buttonText} for ${slide.title}`}
          >
            {slide.buttonText}
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;