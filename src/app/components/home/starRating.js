import React from 'react';

const StarRating = ({ rating }) => {
  // Ensure rating is between 1 and 5
  const normalizedRating = Math.min(Math.max(rating, 1), 5);
  
  // Create an array of 5 stars
  const stars = Array(5).fill(0);
  
  const StarIcon = ({ fill }) => {
    return (
      <svg 
        className={`w-5 h-5 me-1 ${
          fill === 1 
            ? 'text-yellow-300' 
            : fill === 0.5 
              ? 'text-yellow-300/50' 
              : 'text-gray-300'
        }`}
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor" 
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>
    );
  };

  return (
    <div className="flex items-center mb-4">
      {stars.map((_, index) => {
        const difference = normalizedRating - index;
        let fill = 0;
        
        if (difference >= 1) {
          fill = 1; // Full star
        } else if (difference >= 0.5) {
          fill = 0.5; // Half star
        }
        
        return <StarIcon key={index} fill={fill} />;
      })}
      <span className="ml-2 text-sm text-gray-500">({rating})</span>
    </div>
  );
};

export default StarRating;