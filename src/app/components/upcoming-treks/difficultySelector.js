"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const DifficultySelector = ({ initialValue = "easy" }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedDifficulty, setSelectedDifficulty] = useState(initialValue);

  const difficulties = [
    { id: "All", label: "All" },
    { id: "Difficult", label: "Difficult" },
    { id: "Moderate", label: "Moderate" },
    { id: "Easy", label: "Easy" },
  ];

  useEffect(() => {
    // This would be called whenever the difficulty changes
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("difficulty", selectedDifficulty); // update the query param
    router.replace(`?${current.toString()}`);
  }, [selectedDifficulty]);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 sm:grid-cols-2 gap-2 lg:gap-4">
      {difficulties.map((difficulty) => (
        <button
          key={difficulty.id}
          onClick={() => setSelectedDifficulty(difficulty.id)}
          className={`
            flex items-center gap-2 px-2 py-1 rounded-full w-full lg:text-md md:text-sm sm:text-[10px] text-[12px]
            ${
              selectedDifficulty === difficulty.id
                ? "bg-secondary text-white"
                : "bg-gray-100 hover:bg-gray-300 hover:bg-gray-150"
            }
            transition-colors duration-200
            flex justify-between
          `}
        >
          <span className="font-medium p-3">{difficulty.label}</span>
        </button>
      ))}
    </div>
  );
};

export default DifficultySelector;
