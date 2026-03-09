"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";

const TestimonialSlider = ({ testimonials = [] }) => {
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
              <div
                key={groupIndex}
                className="flex flex-col md:flex-row gap-6 w-full flex-shrink-0"
              >
                {testimonials
                  .slice(groupIndex * 2, groupIndex * 2 + 2)
                  .map((testimonial) => (
                    <div key={testimonial.uuid} className="w-full md:w-1/2">
                      <div className="bg-white rounded-lg shadow p-6 h-full">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-full overflow-hidden">
                            <Image
                              src={testimonial.photo}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              width={250}
                              height={250}
                            />
                          </div>
                          <div>
                            <h3 className="text-md md:text-lg font-semibold">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm md:text-md text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-sm md:text-lg text-gray-700">{testimonial.message}</p>
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
                index === currentSlide ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
