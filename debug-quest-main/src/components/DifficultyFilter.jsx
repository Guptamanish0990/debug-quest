// components/DifficultyFilter.jsx
import React from 'react';

const DifficultyFilter = ({ selectedDifficulty, onDifficultyChange }) => {
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  return (
    <div className="difficulty-filter">
      <div className="filter-buttons">
        {difficulties.map((difficulty) => (
          <button
            key={difficulty}
            className={`difficulty-btn ${
              selectedDifficulty === difficulty ? 'active' : ''
            }`}
            onClick={() => onDifficultyChange(difficulty)}
          >
            {difficulty}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultyFilter;