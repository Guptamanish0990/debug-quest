import React, { useState, useEffect } from "react";
import { 
  Home, 
  Trophy, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  TrendingUp,
  Filter,
  Search,
  Target,
  Clock,
  Zap,
  Brain,
  Star,
  Award,
  Crown,
  BookOpen,
  Code,
  CheckCircle,
  BarChart3,
  Users,
  Flame,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { LEVELS } from "../../utils/levels";
import ParticleBackground from "../common/ParticleBackground";
import { motion, AnimatePresence } from "framer-motion";

const EasyLevelsScreen = ({
  setScreen,
  selectLevel,
  completedLevels,
  languageIcons,
}) => {
  const [expandedLanguages, setExpandedLanguages] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [showStats, setShowStats] = useState(true);
  const [sortBy, setSortBy] = useState("default");

  // Get all Easy levels
  const easyLevels = LEVELS.filter((level) => level.difficulty === "Easy");

  // Group by language
  const groupedByLanguage = easyLevels.reduce((acc, level) => {
    const lang = level.language || "Other";
    if (!acc[lang]) {
      acc[lang] = [];
    }
    acc[lang].push(level);
    return acc;
  }, {});

  // Get all unique languages
  const allLanguages = ["all", ...Object.keys(groupedByLanguage)];

  // Filter and sort logic
  const getFilteredAndSortedLanguages = () => {
    let filtered = { ...groupedByLanguage };
    
    // Filter by search term
    if (searchTerm) {
      Object.keys(filtered).forEach(lang => {
        filtered[lang] = filtered[lang].filter(level => 
          level.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          level.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          level.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      });
    }
    
    // Filter by selected language
    if (selectedLanguage !== "all") {
      const singleLang = { [selectedLanguage]: filtered[selectedLanguage] || [] };
      return singleLang;
    }
    
    return filtered;
  };

  // Calculate stats for each language
  const getLanguageStats = (language) => {
    const levels = groupedByLanguage[language] || [];
    const completed = levels.filter((level) =>
      completedLevels.includes(LEVELS.indexOf(level))
    ).length;
    return {
      total: levels.length,
      completed,
      percentage: levels.length > 0 ? Math.round((completed / levels.length) * 100) : 0,
    };
  };

  // Overall stats
  const overallStats = {
    total: easyLevels.length,
    completed: completedLevels.filter(i => LEVELS[i].difficulty === "Easy").length,
    percentage: easyLevels.length > 0 
      ? Math.round((completedLevels.filter(i => LEVELS[i].difficulty === "Easy").length / easyLevels.length) * 100)
      : 0,
  };

  // Get difficulty color
  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case "Easy": return "from-green-500 to-emerald-500";
      case "Medium": return "from-yellow-500 to-amber-500";
      case "Hard": return "from-red-500 to-pink-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  // Get difficulty text color
  const getDifficultyTextColor = (difficulty) => {
    switch(difficulty) {
      case "Easy": return "text-green-400";
      case "Medium": return "text-yellow-400";
      case "Hard": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  // Toggle all languages
  const toggleAllLanguages = () => {
    const allExpanded = Object.values(expandedLanguages).every(val => val);
    const newState = {};
    Object.keys(groupedByLanguage).forEach(lang => {
      newState[lang] = !allExpanded;
    });
    setExpandedLanguages(newState);
  };

  useEffect(() => {
    // Auto-expand all languages on mount
    const initialExpanded = {};
    Object.keys(groupedByLanguage).forEach(lang => {
      initialExpanded[lang] = true;
    });
    setExpandedLanguages(initialExpanded);
  }, []);

  const filteredLanguages = getFilteredAndSortedLanguages();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-green-950/30 to-slate-950 p-4 sm:p-6 relative overflow-hidden">
      <ParticleBackground />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 sm:mb-8">
          <button
            onClick={() => setScreen("home")}
            className="group flex items-center gap-3 px-4 sm:px-6 py-3 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-green-500/50 hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
            <span className="text-gray-300 group-hover:text-white font-medium">Back to Home</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowStats(!showStats)}
              className="p-2 sm:p-3 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl hover:border-green-400/50 transition-all"
            >
              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            </button>
            <button
              onClick={toggleAllLanguages}
              className="px-3 sm:px-4 py-2 bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-xl hover:border-green-500/50 transition-all text-sm font-medium"
            >
              {Object.values(expandedLanguages).every(val => val) ? "Collapse All" : "Expand All"}
            </button>
          </div>
        </div>

        {/* Main Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-900/90 via-green-900/20 to-gray-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-green-500/30 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1),transparent_70%)]"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl">
                    <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                      🟢 Easy Challenges
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base mt-2">
                      Perfect for beginners - Master the fundamentals of debugging
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs sm:text-sm">
                    Beginner Friendly
                  </span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs sm:text-sm">
                    Step-by-Step Learning
                  </span>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-xs sm:text-sm">
                    Foundation Building
                  </span>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-green-500/30 rounded-xl p-4 sm:p-6 min-w-[280px]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-400">{overallStats.total}</div>
                    <div className="text-xs sm:text-sm text-gray-400">Total Challenges</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{overallStats.completed}</div>
                    <div className="text-xs sm:text-sm text-gray-400">Completed</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Overall Progress</span>
                    <span>{overallStats.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${overallStats.percentage}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search challenges..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:outline-none focus:border-green-500/50 text-gray-300 placeholder-gray-500"
                />
              </div>
              
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:outline-none focus:border-green-500/50 text-gray-300 appearance-none"
                  >
                    <option value="all">All Languages</option>
                    {allLanguages.filter(lang => lang !== "all").map(lang => (
                      <option key={lang} value={lang}>
                        {lang} ({groupedByLanguage[lang]?.length || 0})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Advanced Stats Panel */}
        <AnimatePresence>
          {showStats && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 mb-6 border border-gray-700/50 overflow-hidden"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-2xl font-bold text-white">5-10</div>
                      <div className="text-xs text-gray-400">Avg. Time (min)</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-2xl font-bold text-white">100-200</div>
                      <div className="text-xs text-gray-400">XP per Challenge</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-2xl font-bold text-white">92%</div>
                      <div className="text-xs text-gray-400">Success Rate</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/30">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-2xl font-bold text-white">+15</div>
                      <div className="text-xs text-gray-400">Skills Learned</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Language Sections */}
        <div className="space-y-4 sm:space-y-6">
          {Object.keys(filteredLanguages).length === 0 ? (
            <div className="text-center py-12 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/50">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No challenges found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            Object.entries(filteredLanguages).map(([language, levels]) => {
              if (levels.length === 0) return null;
              
              const stats = getLanguageStats(language);
              const isExpanded = expandedLanguages[language] !== false;
              const langIcon = languageIcons[language] || "💻";

              return (
                <motion.div
                  key={language}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-700/50 overflow-hidden"
                >
                  {/* Language Header */}
                  <button
                    onClick={() => setExpandedLanguages(prev => ({
                      ...prev,
                      [language]: !prev[language]
                    }))}
                    className="w-full p-4 sm:p-6 flex items-center justify-between hover:bg-gray-800/30 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="text-3xl sm:text-4xl transform group-hover:scale-110 transition-transform duration-300">
                          {langIcon}
                        </div>
                        {stats.percentage === 100 && (
                          <Crown className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
                        )}
                      </div>
                      <div className="text-left">
                        <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                          {language}
                        </h2>
                        <p className="text-gray-400 text-sm">
                          {stats.completed} of {stats.total} challenges completed
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Progress Circle */}
                      <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                        <svg className="transform -rotate-90 w-full h-full">
                          <circle
                            cx="50%"
                            cy="50%"
                            r="40%"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            className="text-gray-700"
                          />
                          <circle
                            cx="50%"
                            cy="50%"
                            r="40%"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 40}%`}
                            strokeDashoffset={`${2 * Math.PI * 40 * (1 - stats.percentage / 100)}%`}
                            className={`${
                              stats.percentage >= 80 ? "text-green-400" :
                              stats.percentage >= 50 ? "text-yellow-400" :
                              "text-blue-400"
                            } transition-all duration-1000`}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white font-bold text-xs sm:text-sm">
                            {stats.percentage}%
                          </span>
                        </div>
                      </div>

                      {/* Expand/Collapse Icon */}
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
                      ) : (
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
                      )}
                    </div>
                  </button>

                  {/* Levels Grid - Collapsible */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 sm:p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {levels.map((level, idx) => {
                              const levelIndex = LEVELS.indexOf(level);
                              const isCompleted = completedLevels.includes(levelIndex);
                              const levelNumber = levelIndex + 1;

                              return (
                                <motion.div
                                  key={level.id}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.05 }}
                                  onClick={() => selectLevel(levelIndex)}
                                  className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 sm:p-5 cursor-pointer transition-all hover:scale-105 border-2 ${
                                    isCompleted
                                      ? "border-green-500/50 bg-green-900/10"
                                      : "border-gray-700/50 hover:border-green-500/50"
                                  }`}
                                >
                                  {/* Completion Badge */}
                                  {isCompleted && (
                                    <div className="absolute top-3 right-3">
                                      <div className="relative">
                                        <CheckCircle className="w-6 h-6 text-green-400" />
                                        <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-ping" />
                                      </div>
                                    </div>
                                  )}

                                  {/* Level Number */}
                                  <div className={`bg-gradient-to-r ${getDifficultyColor(level.difficulty)}/20 text-green-400 w-10 h-10 rounded-full flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform`}>
                                    {levelNumber}
                                  </div>

                                  {/* Title */}
                                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-green-400 transition-colors line-clamp-1">
                                    {level.title}
                                  </h3>

                                  {/* Description */}
                                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                                    {level.description || "Test your debugging skills with this challenge"}
                                  </p>

                                  {/* Tags */}
                                  <div className="flex flex-wrap gap-1 mb-3">
                                    {(level.tags || []).slice(0, 2).map(tag => (
                                      <span key={tag} className="px-2 py-0.5 bg-gray-800/50 text-gray-300 rounded text-xs">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>

                                  {/* Footer */}
                                  <div className="flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-2">
                                      <span className="text-lg">{langIcon}</span>
                                      <span className={`font-semibold ${getDifficultyTextColor(level.difficulty)}`}>
                                        {language}
                                      </span>
                                    </div>
                                    {isCompleted ? (
                                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-bold flex items-center gap-1">
                                        <CheckCircle className="w-3 h-3" />
                                        Completed
                                      </span>
                                    ) : (
                                      <span className="text-gray-500 group-hover:text-green-400 transition-colors font-semibold flex items-center gap-1">
                                        Start Challenge
                                        <ArrowRight className="w-3 h-3" />
                                      </span>
                                    )}
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => setScreen("home")}
            className="px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-xl hover:border-green-500 hover:scale-105 transition-all flex items-center justify-center gap-3 font-bold shadow-lg"
          >
            <Home className="w-5 h-5" />
            Main Menu
          </button>
          <button
            onClick={() => setScreen("medium-levels")}
            className="px-6 py-4 bg-gradient-to-r from-yellow-700/80 to-amber-800/80 border border-yellow-500/50 rounded-xl hover:border-yellow-400 hover:scale-105 transition-all flex items-center justify-center gap-3 font-bold shadow-lg"
          >
            Next: Medium Levels
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              // Find first uncompleted level
              const uncompletedIndex = easyLevels.findIndex(level => 
                !completedLevels.includes(LEVELS.indexOf(level))
              );
              if (uncompletedIndex !== -1) {
                selectLevel(LEVELS.indexOf(easyLevels[uncompletedIndex]));
              } else if (easyLevels.length > 0) {
                selectLevel(LEVELS.indexOf(easyLevels[0]));
              }
            }}
            className="px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 border border-green-500 rounded-xl hover:border-green-400 hover:scale-105 transition-all flex items-center justify-center gap-3 font-bold shadow-lg"
          >
            <Zap className="w-5 h-5" />
            Start Random Challenge
          </button>
        </div>
      </div>
    </div>
  );
};

export default EasyLevelsScreen;