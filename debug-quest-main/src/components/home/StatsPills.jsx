// src/components/home/StatsPills.jsx
import ProgressBar from './ProgressBar';

const StatsPills = ({ level = 1, xp = 0, completedChallenges = 0 }) => {
  const xpForNextLevel = level * 1000;
  
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
        <div className="text-sm text-gray-400">Level</div>
        <div className="text-2xl font-bold text-white">{level}</div>
      </div>
      
      <div className="bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700 min-w-[200px]">
        <div className="flex justify-between text-sm text-gray-400 mb-1">
          <span>XP: {xp}/{xpForNextLevel}</span>
          <span>{Math.round((xp / xpForNextLevel) * 100)}%</span>
        </div>
        <ProgressBar value={xp} max={xpForNextLevel} />
      </div>
      
      <div className="bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
        <div className="text-sm text-gray-400">Completed</div>
        <div className="text-2xl font-bold text-green-400">{completedChallenges}</div>
      </div>
    </div>
  );
};

export default StatsPills;