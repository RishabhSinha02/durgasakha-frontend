"use client";

import React, { useState, useEffect, useCallback } from 'react';
import StarRating from './starRating';
import Image from 'next/image';

const TestimonialSlider = () => {
    const testimonials = [
        {
          id: 1,
          name: 'Rishabh',
          role: 'Traveller',
          rating: 2.5,
          comment: 'Durgasakha made my trek unforgettable! From stunning vistas to thoughtful cultural experiences, every moment was magical. Can\'t wait to join them again!',
          title: 'It was a very good experience'
        },
        {
          id: 2,
          name: 'Rishabh',
          role: 'Traveller',
          rating: 4,
          comment: 'Durgasakha made my trek unforgettable! From stunning vistas to thoughtful cultural experiences, every moment was magical. Can\'t wait to join them again!',
          title: 'It was a very good experience'
        },
        {
            id: 3,
            name: 'Rishabh',
            role: 'Traveller',
            rating: 4,
            comment: 'Durgasakha made my trek unforgettable! From stunning vistas to thoughtful cultural experiences, every moment was magical. Can\'t wait to join them again!',
            title: 'It was a very good experience'
          },
          {
            id: 4,
            name: 'Rishabh',
            role: 'Traveller',
            rating: 4,
            comment: 'Durgasakha made my trek unforgettable! From stunning vistas to thoughtful cultural experiences, every moment was magical. Can\'t wait to join them again!',
            title: 'It was a very good experience'
          },
          {
            id: 5,
            name: 'Rishabh',
            role: 'Traveller',
            rating: 4,
            comment: 'Durgasakha made my trek unforgettable! From stunning vistas to thoughtful cultural experiences, every moment was magical. Can\'t wait to join them again!',
            title: 'It was a very good experience'
          },
          {
            id: 6,
            name: 'Rishabh',
            role: 'Traveller',
            rating: 4,
            comment: 'Durgasakha made my trek unforgettable! From stunning vistas to thoughtful cultural experiences, every moment was magical. Can\'t wait to join them again!',
            title: 'It was a very good experience'
          },
        // Add more testimonials as needed for testing
      ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = Math.ceil(testimonials.length / 2);
  
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-slide effect
  useEffect(() => {
    let slideInterval;
    
    if (!isPaused) {
      slideInterval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [isPaused, nextSlide]);

//   const StarRating = ({ rating }) => {
//     return (
//       <div className="flex items-center">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <svg
//             key={star}
//             className={`w-5 h-5 ${
//               star <= rating ? 'text-orange-400' : 'text-gray-300'
//             }`}
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 22 20"
//           >
//             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//           </svg>
//         ))}
//       </div>
//     );
//   };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, groupIndex) => (
              <div key={groupIndex} className="flex flex-col md:flex-row gap-6 w-full flex-shrink-0">
                {testimonials.slice(groupIndex * 2, (groupIndex * 2) + 2).map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full md:w-1/2"
                  >
                    <div className="bg-white rounded-lg shadow p-6 h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                          <Image
                            src="/profileRishabh.png"
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            width={150}
                            height={150}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                        <div className="ml-auto">
                          <StarRating rating={testimonial.rating} />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{testimonial.title}</h4>
                      <p className="text-gray-700">{testimonial.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {/* <button
          onClick={() => {
            prevSlide();
            setIsPaused(true);
            setTimeout(() => setIsPaused(false), 10000); // Resume auto-slide after 10 seconds
          }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            nextSlide();
            setIsPaused(true);
            setTimeout(() => setIsPaused(false), 10000); // Resume auto-slide after 10 seconds
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button> */}

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 10000); // Resume auto-slide after 10 seconds
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;