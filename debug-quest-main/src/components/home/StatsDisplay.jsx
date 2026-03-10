import React from "react";
import { Trophy, Target, Zap } from "lucide-react";

const StatsDisplay = ({ score, completedLevels, totalLevels, streak }) => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/30 border border-yellow-400/50 rounded-xl px-4 py-3 min-w-[120px]">
        <div className="flex items-center gap-2 mb-1">
          <Trophy className="w-5 h-5 text-yellow-400" />
          <p className="text-yellow-400 font-bold text-sm">Score</p>
        </div>
        <p className="text-white text-2xl font-bold">{score}</p>
      </div>

      <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border border-blue-400/50 rounded-xl px-4 py-3 min-w-[120px]">
        <div className="flex items-center gap-2 mb-1">
          <Target className="w-5 h-5 text-blue-400" />
          <p className="text-blue-400 font-bold text-sm">Progress</p>
        </div>
        <p className="text-white text-2xl font-bold">
          {completedLevels}/{totalLevels}
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border border-purple-400/50 rounded-xl px-4 py-3 min-w-[120px]">
        <div className="flex items-center gap-2 mb-1">
          <Zap className="w-5 h-5 text-purple-400" />
          <p className="text-purple-400 font-bold text-sm">Streak</p>
        </div>
        <p className="text-white text-2xl font-bold">{streak} 🔥</p>
      </div>
    </div>
  );
};

export default StatsDisplay;