import React from "react";
import { Brain, Target, Terminal, Lightbulb } from "lucide-react";
import GradientBorderCard from "../common/GradientBorderCard";

const MissionBriefing = ({ level, showHint, setShowHint }) => {
  return (
    <GradientBorderCard
      gradient="from-purple-500 via-pink-500 to-red-500"
      className="h-full"
    >
      <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
        <Brain className="w-7 h-7" />
        Mission Briefing
      </h3>

      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-2xl">
          <Target className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
          <div>
            <p className="text-white font-bold mb-1">Objective</p>
            <p className="text-gray-300">
              {level.objective || level.description}
            </p>
          </div>
        </div>

        {level.expectedOutput && (
          <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-2xl">
            <Terminal className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-white font-bold mb-1">Expected Output</p>
              <p className="text-gray-300 font-mono">{level.expectedOutput}</p>
            </div>
          </div>
        )}
      </div>

      {/* Hint Section */}
      {!showHint ? (
        <button
          onClick={() => setShowHint(true)}
          className="w-full mt-6 bg-gradient-to-r from-yellow-600 to-yellow-500 border border-yellow-400/50 text-white py-4 px-6 rounded-2xl hover:from-yellow-500 hover:to-yellow-400 transition-all flex items-center justify-center gap-3 font-bold shadow-xl text-lg group"
        >
          <Lightbulb className="w-6 h-6 group-hover:scale-110 transition-transform" />
          Need a Hint? (-50 points)
        </button>
      ) : (
        <div className="mt-6 bg-gradient-to-br from-yellow-900/50 to-yellow-800/30 border border-yellow-400/50 rounded-2xl p-6 text-yellow-100 shadow-xl">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1 animate-pulse" />
            <div>
              <p className="text-yellow-400 font-bold mb-2">💡 Hint</p>
              <p className="text-yellow-100 leading-relaxed">{level.hint}</p>
            </div>
          </div>
        </div>
      )}
    </GradientBorderCard>
  );
};

export default MissionBriefing;