import React from "react";
import StatsDisplay from "../home/StatsDisplay";
import { LEVELS } from "../../utils/levels";

const GameHeader = ({ level, score, completedLevels, streak, languageIcons }) => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-6 border border-gray-700/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-purple-400/5 to-blue-400/5 animate-pulse"></div>

      <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Level {level.id} of {LEVELS.length}
            </span>

            <span
              className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                level.difficulty === "Easy"
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                  : level.difficulty === "Medium"
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
                  : "bg-gradient-to-r from-red-500 to-red-600 text-white"
              }`}
            >
              {level.difficulty}
            </span>

            {level.language && (
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                {languageIcons[level.language]} {level.language}
              </span>
            )}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {level.title}
          </h2>

          <p className="text-gray-300 text-lg">{level.description}</p>
        </div>

        <StatsDisplay
          score={score}
          completedLevels={completedLevels}
          totalLevels={LEVELS.length}
          streak={streak}
        />
      </div>
    </div>
  );
};

export default GameHeader;