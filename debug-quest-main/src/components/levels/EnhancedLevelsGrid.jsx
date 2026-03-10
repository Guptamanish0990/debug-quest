import React, { useState } from "react";
import { CheckCircle, Crown, Lock, Terminal } from "lucide-react";
import { DIFFICULTY_COLORS } from "../../utils/constants";
import { LEVELS } from "../../utils/levels"; // ✅ ADD THIS

const EnhancedLevelsGrid = ({
  levels,
  selectLevel,
  completedLevels,
  languageIcons,
}) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {levels.map((level, index) => {

        // ✅ REAL INDEX FIX
        const actualIndex = LEVELS.findIndex(
          l =>
            l.id === level.id &&
            l.language === level.language &&
            l.difficulty === level.difficulty
        );

        const isCompleted = completedLevels.includes(actualIndex);
        const colors = DIFFICULTY_COLORS[level.difficulty];

        return (
          <button
            key={level.id}
            onClick={() => {
              if (actualIndex !== -1) {
                selectLevel(actualIndex);
              }
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`relative bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-3xl p-6 transition-all`}
          >
            {/* dots */}
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => {
                const difficultyCount =
                  level.difficulty === "Easy" ? 1 :
                  level.difficulty === "Medium" ? 2 : 3;

                return (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < difficultyCount ? colors.text : "bg-gray-800"
                    }`}
                  />
                );
              })}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default EnhancedLevelsGrid;
