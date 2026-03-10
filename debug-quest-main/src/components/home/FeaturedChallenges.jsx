import React from "react";
import { Play, Clock, Zap } from "lucide-react";

const FeaturedChallenges = ({ challenges, onStart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {challenges.map((challenge) => (
        <div
          key={challenge.id}
          className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:scale-105 cursor-pointer"
          onClick={() => onStart(challenge)}
        >
          <div className="flex items-center justify-between mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                challenge.difficulty === "Easy"
                  ? "bg-green-500/20 text-green-400"
                  : challenge.difficulty === "Medium"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {challenge.difficulty}
            </span>
            <span className="text-purple-400 font-mono text-sm">
              {challenge.language}
            </span>
          </div>

          <h3 className="text-white font-bold text-lg mb-3 group-hover:text-purple-400 transition-colors">
            {challenge.title}
          </h3>

          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {challenge.duration}
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              {challenge.xp} XP
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 rounded-xl font-bold hover:from-purple-500 hover:to-purple-600 transition-all flex items-center justify-center gap-2">
            <Play className="w-4 h-4" />
            Start Challenge
          </button>
        </div>
      ))}
    </div>
  );
};

export default FeaturedChallenges;