import React, { useState } from "react";
import { Home, Code, Trophy, ChevronDown, ChevronUp, X } from "lucide-react";
import { LEVELS } from "../../utils/levels";
import ParticleBackground from "../common/ParticleBackground";

const AllLevelsScreen = ({
  setScreen,
  selectLevel,
  completedLevels,
  languageIcons,
}) => {
  const [expandedLanguages, setExpandedLanguages] = useState({});
  const [filterDifficulty, setFilterDifficulty] = useState("all");
  const [filterLanguage, setFilterLanguage] = useState("all");

  // Get unique languages
  const availableLanguages = [...new Set(LEVELS.map(level => level.language || "Other"))];

  // Group levels by language
  const groupedByLanguage = LEVELS.reduce((acc, level) => {
    const lang = level.language || "Other";
    if (!acc[lang]) {
      acc[lang] = [];
    }
    acc[lang].push(level);
    return acc;
  }, {});

  // Filter levels based on difficulty and language only
  const getFilteredLevels = (levels) => {
    return levels.filter((level) => {
      const matchesDifficulty =
        filterDifficulty === "all" ||
        level.difficulty.toLowerCase() === filterDifficulty;
      
      const matchesLanguage =
        filterLanguage === "all" ||
        level.language === filterLanguage;
      
      return matchesDifficulty && matchesLanguage;
    });
  };

  // Toggle language section
  const toggleLanguage = (language) => {
    setExpandedLanguages((prev) => ({
      ...prev,
      [language]: !prev[language],
    }));
  };

  // Calculate stats for each language
  const getLanguageStats = (language, levels) => {
    const filteredLevels = getFilteredLevels(levels);
    const completed = filteredLevels.filter((level) =>
      completedLevels.includes(LEVELS.indexOf(level))
    ).length;
    
    const easyCount = filteredLevels.filter(l => l.difficulty === "Easy").length;
    const mediumCount = filteredLevels.filter(l => l.difficulty === "Medium").length;
    const hardCount = filteredLevels.filter(l => l.difficulty === "Hard").length;
    
    return {
      total: filteredLevels.length,
      completed,
      easy: easyCount,
      medium: mediumCount,
      hard: hardCount,
      percentage: filteredLevels.length > 0 ? Math.round((completed / filteredLevels.length) * 100) : 0,
    };
  };

  // Get overall stats
  const overallStats = {
    total: LEVELS.length,
    completed: completedLevels.length,
    percentage: Math.round((completedLevels.length / LEVELS.length) * 100),
  };

  // Clear all filters
  const clearFilters = () => {
    setFilterDifficulty("all");
    setFilterLanguage("all");
  };

  // Check if any filter is active
  const hasActiveFilters = filterDifficulty !== "all" || filterLanguage !== "all";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 relative overflow-hidden">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-6 border border-gray-700/50">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <button
                onClick={() => setScreen("home")}
                className="bg-gray-800 border border-gray-600 text-gray-300 py-2 px-4 rounded-xl hover:border-purple-400 hover:text-white transition-all flex items-center gap-2 mb-4"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </button>
              
              <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-2">
                🎯 All Challenges
              </h1>
              <p className="text-gray-300 text-lg">
                Browse all {LEVELS.length} challenges organized by programming language
              </p>
            </div>
            
            {/* Overall Progress Card */}
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-400/50 rounded-2xl p-6 text-center min-w-[200px]">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-4xl font-black text-white mb-1">
                {overallStats.completed}/{overallStats.total}
              </div>
              <div className="text-purple-400 text-sm font-bold mb-2">
                {overallStats.percentage}% Complete
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                  style={{ width: `${overallStats.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Filters Only (Search Removed) */}
          <div className="space-y-4">
            {/* Filter Buttons Row */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Difficulty Filter */}
              <div>
                <label className="text-gray-400 text-sm font-bold mb-2 block">Difficulty</label>
                <div className="flex gap-2">
                  {[
                    { label: "All", value: "all" },
                    { label: "Easy", value: "easy" },
                    { label: "Medium", value: "medium" },
                    { label: "Hard", value: "hard" },
                  ].map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => setFilterDifficulty(filter.value)}
                      className={`flex-1 py-2 px-3 rounded-lg font-bold text-sm transition-all ${
                        filterDifficulty === filter.value
                          ? "bg-purple-600 text-white border-2 border-purple-400"
                          : "bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-600"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Language Filter */}
              <div>
                <label className="text-gray-400 text-sm font-bold mb-2 block">Programming Language</label>
                <select
                  value={filterLanguage}
                  onChange={(e) => setFilterLanguage(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 cursor-pointer"
                >
                  <option value="all">All Languages</option>
                  {availableLanguages.sort().map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters Display & Clear Button */}
            {hasActiveFilters && (
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-gray-400 text-sm font-bold">Active Filters:</span>
                
                {filterDifficulty !== "all" && (
                  <span className="bg-purple-900/50 border border-purple-400/50 text-purple-300 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    Difficulty: {filterDifficulty.charAt(0).toUpperCase() + filterDifficulty.slice(1)}
                    <button onClick={() => setFilterDifficulty("all")} className="hover:text-white">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                
                {filterLanguage !== "all" && (
                  <span className="bg-blue-900/50 border border-blue-400/50 text-blue-300 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    Language: {filterLanguage}
                    <button onClick={() => setFilterLanguage("all")} className="hover:text-white">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                
                <button
                  onClick={clearFilters}
                  className="ml-auto bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded-lg text-sm font-bold transition-all"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Language Sections */}
        <div className="space-y-4">
          {Object.entries(groupedByLanguage).map(([language, levels]) => {
            const filteredLevels = getFilteredLevels(levels);
            if (filteredLevels.length === 0) return null;
            
            const stats = getLanguageStats(language, levels);
            const isExpanded = expandedLanguages[language] !== false;
            
            return (
              <div
                key={language}
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-700/50 overflow-hidden"
              >
                {/* Language Header */}
                <button
                  onClick={() => toggleLanguage(language)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{languageIcons[language] || "💻"}</div>
                    
                    <div className="text-left">
                      <h2 className="text-3xl font-bold text-white mb-1">{language}</h2>
                      <p className="text-gray-400">
                        {stats.completed} of {stats.total} completed
                      </p>
                      <div className="flex gap-2 mt-2">
                        <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded font-bold">
                          {stats.easy} Easy
                        </span>
                        <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded font-bold">
                          {stats.medium} Medium
                        </span>
                        <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded font-bold">
                          {stats.hard} Hard
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="relative w-20 h-20">
                      <svg className="transform -rotate-90 w-20 h-20">
                        <circle
                          cx="40"
                          cy="40"
                          r="34"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          className="text-gray-700"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="34"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 34}`}
                          strokeDashoffset={`${2 * Math.PI * 34 * (1 - stats.percentage / 100)}`}
                          className="text-purple-400 transition-all duration-1000"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-black text-lg">
                          {stats.percentage}%
                        </span>
                      </div>
                    </div>

                    {isExpanded ? (
                      <ChevronUp className="w-7 h-7 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-7 h-7 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Levels Grid */}
                {isExpanded && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredLevels.map((level) => {
                        const levelIndex = LEVELS.indexOf(level);
                        const isCompleted = completedLevels.includes(levelIndex);

                        return (
                          <div
                            key={level.id}
                            onClick={() => selectLevel(levelIndex)}
                            className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-5 cursor-pointer transition-all hover:scale-105 border-2 ${
                              isCompleted
                                ? "border-green-500/50 bg-green-900/10"
                                : "border-gray-700/50 hover:border-purple-500/50"
                            }`}
                          >
                            {isCompleted && (
                              <div className="absolute top-3 right-3">
                                <Trophy className="w-6 h-6 text-yellow-400 drop-shadow-lg" />
                              </div>
                            )}

                            <div className="flex items-center justify-between mb-3">
                              <div className="bg-purple-500/20 text-purple-400 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                                {levelIndex + 1}
                              </div>
                              <span
                                className={`text-xs font-bold px-3 py-1 rounded-full ${
                                  level.difficulty === "Easy"
                                    ? "bg-green-500/20 text-green-400"
                                    : level.difficulty === "Medium"
                                    ? "bg-yellow-500/20 text-yellow-400"
                                    : "bg-red-500/20 text-red-400"
                                }`}
                              >
                                {level.difficulty}
                              </span>
                            </div>

                            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-purple-400 transition-colors">
                              {level.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                              {level.description}
                            </p>

                            <div className="flex items-center justify-between text-xs">
                              <span className="text-purple-400 font-semibold flex items-center gap-1">
                                <Code className="w-4 h-4" />
                                {language}
                              </span>
                              {isCompleted ? (
                                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-bold">
                                  ✓ Done
                                </span>
                              ) : (
                                <span className="text-gray-500 group-hover:text-purple-400 transition-colors font-semibold">
                                  Start →
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {Object.entries(groupedByLanguage).every(
          ([, levels]) => getFilteredLevels(levels).length === 0
        ) && (
          <div className="bg-gray-900/90 rounded-2xl p-12 text-center border border-gray-700/50">
            <p className="text-gray-400 text-xl mb-4">
              No challenges found matching your filters.
            </p>
            <button
              onClick={clearFilters}
              className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl font-bold transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setScreen("home")}
            className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 text-gray-300 py-4 px-8 rounded-2xl hover:border-purple-400 hover:text-white transition-all font-bold flex items-center gap-3 shadow-lg"
          >
            <Home className="w-5 h-5" />
            Return to Main Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllLevelsScreen;