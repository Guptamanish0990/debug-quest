// src/components/home/QuickActions.jsx
import { Trophy, Target, Zap, BookOpen } from 'lucide-react';

const QuickActions = ({ actions }) => {
  const defaultActions = [
    { label: 'Daily Challenge', icon: <Target className="w-5 h-5" />, color: 'bg-gradient-to-r from-cyan-500 to-blue-600' },
    { label: 'Practice Mode', icon: <Zap className="w-5 h-5" />, color: 'bg-gradient-to-r from-green-500 to-emerald-600' },
    { label: 'Leaderboard', icon: <Trophy className="w-5 h-5" />, color: 'bg-gradient-to-r from-yellow-500 to-orange-600' },
    { label: 'Tutorials', icon: <BookOpen className="w-5 h-5" />, color: 'bg-gradient-to-r from-purple-500 to-pink-600' }, 
  ];

  const actionsToUse = actions || defaultActions;

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
      <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        {actionsToUse.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`${action.color} p-4 rounded-xl text-white text-left hover:scale-[1.02] transition-transform`}
          >
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                {action.icon}
              </div>
              <span className="font-semibold">{action.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;