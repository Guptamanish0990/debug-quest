import React from "react";
import { Home } from "lucide-react";
import { LEVELS } from "../../utils/levels";
import EnhancedLevelsGrid from "../levels/EnhancedLevelsGrid";

const LanguageLevelsScreen = ({
  setScreen,
  selectLevel,
  completedLevels,
  languageIcons,
  selectedLanguage,
}) => {
  const languageLevels = LEVELS.filter(
    (level) => level.language === selectedLanguage
  );
  const icon = languageIcons[selectedLanguage] || "📝";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Button Bar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            onClick={() => setScreen("home")}
            className="flex-1 bg-gradient-to-r from-blue-700 to-blue-800 text-white py-4 rounded-2xl border border-blue-400 hover:scale-105 transition shadow-lg flex items-center justify-center gap-2 text-lg font-semibold"
          >
            ← Previous
          </button>

          <button
            onClick={() => setScreen("home")}
            className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 rounded-2xl border border-gray-500 hover:scale-105 transition shadow-lg flex items-center justify-center gap-2 text-lg font-semibold"
          >
            <Home className="w-5 h-5" /> BACK TO MENU
          </button>

          <button
            onClick={() => setScreen("home")}
            className="flex-1 bg-gradient-to-r from-blue-700 to-blue-800 text-white py-4 rounded-2xl border border-blue-400 hover:scale-105 transition shadow-lg flex items-center justify-center gap-2 text-lg font-semibold"
          >
            Next →
          </button>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 border-2 border-blue-400 rounded-3xl shadow-2xl p-10 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-mono">
                {selectedLanguage} CHALLENGES
              </h2>
              <p className="text-gray-300 text-xl mt-2">
                Master {selectedLanguage} through practical debugging exercises
              </p>
            </div>
            <div className="text-8xl">{icon}</div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-2xl text-center">
              <p className="text-white text-3xl font-bold">
                {languageLevels.length}
              </p>
              <p className="text-blue-200 text-sm">Total Challenges</p>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 rounded-2xl text-center">
              <p className="text-white text-3xl font-bold">
                {languageLevels.filter((l) => l.difficulty === "Easy").length}
              </p>
              <p className="text-green-200 text-sm">Easy</p>
            </div>
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-2xl text-center">
              <p className="text-white text-3xl font-bold">
                {
                  completedLevels.filter(
                    (index) => LEVELS[index]?.language === selectedLanguage
                  ).length
                }
              </p>
              <p className="text-red-200 text-sm">Completed</p>
            </div>
          </div>
        </div>

        <EnhancedLevelsGrid
          levels={languageLevels}
          selectLevel={selectLevel}
          completedLevels={completedLevels}
          languageIcons={languageIcons}
        />
      </div>
    </div>
  );
};

export default LanguageLevelsScreen;