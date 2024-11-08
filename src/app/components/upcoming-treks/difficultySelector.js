"use client";

import React, { useState, useEffect } from 'react';

const DifficultySelector = ({ initialValue = 'easy', onChange = () => {} }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(initialValue);

  const difficulties = [
    { id: 'all', label: 'All', count: 20},
    { id: 'difficult', label: 'Difficult', count: 3},
    { id: 'moderate', label: 'Moderate', count: 5 },
    { id: 'easy', label: 'Easy', count: 12 }
  ];

  useEffect(() => {
    // This would be called whenever the difficulty changes
    onChange(selectedDifficulty);
  }, [selectedDifficulty, onChange]);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 sm:grid-cols-2 gap-2 lg:gap-4">
      {difficulties.map((difficulty) => (
        <button
          key={difficulty.id}
          onClick={() => setSelectedDifficulty(difficulty.id)}
          className={`
            flex items-center gap-2 px-2 py-1 rounded-full w-full lg:text-md md:text-sm sm:text-[10px] text-[12px]
            ${selectedDifficulty === difficulty.id 
              ? 'bg-secondary text-white' 
              : 'bg-gray-100 hover:bg-gray-150'}
            transition-colors duration-200
            flex justify-between
          `}
        >
          <span className="font-medium p-3">{difficulty.label}</span>
          <div className={`
            rounded-full bg-secondary
            flex items-center justify-center text-white font-extrabold
            ${selectedDifficulty === difficulty.id 
                ? 'bg-white text-black w-10 h-10' 
                : 'bg-secondary w-10 h-10'}
          `}>
            {difficulty.count}
          </div>
        </button>
      ))}
    </div>
  );
};

export default DifficultySelector;