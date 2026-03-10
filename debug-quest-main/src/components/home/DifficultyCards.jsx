// src/components/home/DifficultyCards.jsx
import { TrendingUp, Target, Zap, Flame } from 'lucide-react';

const DifficultyCards = ({ onSelectDifficulty }) => {
  const difficulties = [
    {
      level: 'Easy',
      icon: <Target className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      count: 15,
      description: 'Perfect for beginners'
    },
    {
      level: 'Medium',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-600',
      count: 22,
      description: 'Challenge yourself'
    },
    {
      level: 'Hard',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-red-500 to-pink-600',
      count: 8,
      description: 'For experts only'
    },
    {
      level: 'Expert',
      icon: <Flame className="w-6 h-6" />,
      color: 'from-purple-500 to-indigo-600',
      count: 5,
      description: 'Extreme challenges'
    }
  ];

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
      <h3 className="text-xl font-bold text-white mb-4">Difficulty Levels</h3>
      <div className="grid grid-cols-2 gap-4">
        {difficulties.map((diff) => (
          <button
            key={diff.level}
            onClick={() => onSelectDifficulty?.(diff.level)}
            className={`bg-gradient-to-br ${diff.color} p-4 rounded-xl text-white text-left hover:scale-[1.02] transition-transform`}
          >
            <div className="flex items-center justify-between mb-2">
              {diff.icon}
              <span className="text-2xl font-bold">{diff.count}</span>
            </div>
            <div className="font-semibold text-lg">{diff.level}</div>
            <div className="text-sm opacity-90">{diff.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultyCards;