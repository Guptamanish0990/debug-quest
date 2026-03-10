// src/components/screens/GameScreen.jsx
import React, { useState, useEffect } from "react";
import { 
  Home, 
  GitBranch, 
  ChevronLeft, 
  Code, 
  RotateCcw, 
  Zap, 
  Lightbulb, 
  Trophy, 
  Target, 
  Flame,
  ArrowRight,
  Brain,
  Clock,
  CheckCircle,
  BookOpen,
  Sparkles,
  BarChart3,
  Play,
  Pause,
  Eye,
  EyeOff,
  Copy,
  Download
} from "lucide-react";
import { LEVELS } from "../../utils/levels";
import CodeEditor from "../common/CodeEditor";
import GradientBorderCard from "../common/GradientBorderCard";
import FeedbackPanel from "../game/FeedbackPanel";
import { motion, AnimatePresence } from "framer-motion";

const GameScreen = ({
  currentLevel,
  setCurrentLevel,
  userCode,
  setUserCode,
  showHint,
  setShowHint,
  feedback,
  score,
  completedLevels,
  streak,
  attempts,
  checkSolution,
  nextLevel,
  setScreen,
  setFeedback,
  languageIcons,
}) => {
  const level = LEVELS[currentLevel];
  const [showObjectives, setShowObjectives] = useState(true);
  const [timer, setTimer] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showSolution] = useState(false);
  const [codeMetrics, setCodeMetrics] = useState({
    lines: 0,
    characters: 0,
    complexity: "Low"
  });

  // Timer effect
  useEffect(() => {
    let interval;
    if (isTimerActive) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive]);

  // Calculate code metrics
  useEffect(() => {
    const lines = userCode.split('\n').length;
    const characters = userCode.length;
    let complexity = "Low";
    if (lines > 30) complexity = "High";
    else if (lines > 15) complexity = "Medium";
    
    setCodeMetrics({ lines, characters, complexity });
  }, [userCode]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(userCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCode = () => {
    const blob = new Blob([userCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `debug-quest-level-${currentLevel + 1}.${level.language || 'txt'}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleNextLevel = () => {
    setIsTimerActive(false);
    nextLevel();
    setTimeout(() => setIsTimerActive(true), 1000);
  };

  const completionRate = completedLevels.length > 0 
    ? Math.round((completedLevels.length / LEVELS.length) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 mb-6 border border-gray-700/50 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/20 to-transparent blur-2xl"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative">
            {/* Level Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4" />
                  Level {currentLevel + 1} of {LEVELS.length}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                </motion.div>
                
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`px-4 py-2 rounded-full text-sm font-bold ${
                    level.difficulty === "Easy"
                      ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/50 shadow-lg shadow-green-500/20"
                      : level.difficulty === "Medium"
                      ? "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 border border-yellow-500/50 shadow-lg shadow-yellow-500/20"
                      : "bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-400 border border-red-500/50 shadow-lg shadow-red-500/20"
                  }`}
                >
                  {level.difficulty}
                </motion.span>
                
                {level.language && (
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/50 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-500/20"
                  >
                    <span className="text-xl">{languageIcons?.[level.language]}</span>
                    {level.language}
                  </motion.span>
                )}
              </div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent"
              >
                {level.title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-lg max-w-3xl"
              >
                {level.description}
              </motion.p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-3 text-center min-w-[90px] backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <div className="text-white text-xl font-bold">{score}</div>
                </div>
                <div className="text-yellow-300 text-xs font-medium">SCORE</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-xl p-3 text-center min-w-[90px] backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <div className="text-white text-xl font-bold">{streak}</div>
                </div>
                <div className="text-orange-300 text-xs font-medium">STREAK</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-xl p-3 text-center min-w-[90px] backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <div className="text-white text-xl font-mono">{formatTime(timer)}</div>
                </div>
                <div className="text-blue-300 text-xs font-medium">TIME</div>
                <button
                  onClick={() => setIsTimerActive(!isTimerActive)}
                  className="mt-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {isTimerActive ? <Pause className="w-3 h-3 inline" /> : <Play className="w-3 h-3 inline" />}
                </button>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-3 text-center min-w-[90px] backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Target className="w-4 h-4 text-purple-400" />
                  <div className="text-white text-xl font-bold">{attempts}</div>
                </div>
                <div className="text-purple-300 text-xs font-medium">ATTEMPTS</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Panel - Mission Briefing */}
          <GradientBorderCard
            gradient="from-purple-500 via-pink-500 to-red-500"
            className="h-full overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent blur-xl"></div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
                  <Brain className="w-7 h-7" />
                  Mission Briefing
                </h3>
                <button
                  onClick={() => setShowObjectives(!showObjectives)}
                  className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
                >
                  {showObjectives ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <AnimatePresence>
                {showObjectives && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-purple-500/20">
                      <p className="text-white font-bold mb-2 flex items-center gap-2">
                        <Target className="w-5 h-5 text-purple-400" />
                        Objective
                      </p>
                      <p className="text-gray-300">{level.objective || level.description}</p>
                    </div>

                    {level.expectedOutput && (
                      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-purple-500/20">
                        <p className="text-white font-bold mb-2 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-purple-400" />
                          Expected Output
                        </p>
                        <code className="text-green-400 font-mono bg-gray-900/50 px-3 py-2 rounded-lg block">
                          {level.expectedOutput}
                        </code>
                      </div>
                    )}

                    {/* Hint Section */}
                    {!showHint ? (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowHint(true)}
                        className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-3 px-4 rounded-xl hover:from-yellow-500 hover:to-yellow-400 transition-all flex items-center justify-center gap-2 font-bold shadow-lg shadow-yellow-500/20"
                      >
                        <Lightbulb className="w-5 h-5" />
                        Need a Hint? (-50 points)
                      </motion.button>
                    ) : (
                      <div className="bg-gradient-to-br from-yellow-900/40 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-yellow-500/20 p-2 rounded-lg">
                            <Lightbulb className="w-6 h-6 text-yellow-400 animate-pulse" />
                          </div>
                          <div>
                            <p className="text-yellow-400 font-bold mb-1 flex items-center gap-2">
                              <span>💡 Hint</span>
                              <span className="text-xs bg-yellow-500/20 px-2 py-1 rounded">-50 pts</span>
                            </p>
                            <p className="text-yellow-100">{level.hint}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Code Metrics */}
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-purple-500/20">
                      <p className="text-white font-bold mb-3 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-purple-400" />
                        Code Analysis
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{codeMetrics.lines}</div>
                          <div className="text-gray-400 text-xs">Lines</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{codeMetrics.characters}</div>
                          <div className="text-gray-400 text-xs">Chars</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-2xl font-bold ${
                            codeMetrics.complexity === "Low" ? "text-green-400" :
                            codeMetrics.complexity === "Medium" ? "text-yellow-400" :
                            "text-red-400"
                          }`}>
                            {codeMetrics.complexity}
                          </div>
                          <div className="text-gray-400 text-xs">Complexity</div>
                        </div>
                      </div>
                    </div>

                    {/* Success Message */}
                    {feedback?.type === "success" && !feedback?.showPopup && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-br from-green-900/40 to-emerald-800/20 border border-green-400/50 rounded-xl p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-green-500/20 p-2 rounded-full">
                            <Sparkles className="w-5 h-5 text-green-400" />
                          </div>
                          <div>
                            <p className="text-green-400 font-bold mb-1">Level Complete! 🎉</p>
                            <p className="text-green-100 text-sm mb-3">
                              You earned <span className="font-bold">{feedback.points} points</span>
                              {feedback.streakBonus > 0 && (
                                <span className="text-yellow-300"> +{feedback.streakBonus} streak bonus</span>
                              )}
                            </p>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleNextLevel}
                              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 px-4 rounded-lg text-sm font-bold hover:from-green-400 hover:to-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-green-500/20"
                            >
                              Continue to Next Level
                              <ArrowRight className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </GradientBorderCard>

          {/* Right Panel - Code Editor */}
          <GradientBorderCard
            gradient="from-green-500 via-emerald-500 to-teal-500"
            className="h-full overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/10 to-transparent blur-xl"></div>
            
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-green-400 flex items-center gap-3">
                    <Code className="w-7 h-7" />
                    Code Editor
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">Fix the bug and submit your solution</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyCode}
                    className="bg-gray-800 border border-gray-600 text-gray-300 py-2 px-3 rounded-lg hover:border-green-400 hover:text-white transition-all flex items-center gap-2 text-sm"
                  >
                    {copied ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                  
                  <button
                    onClick={downloadCode}
                    className="bg-gray-800 border border-gray-600 text-gray-300 py-2 px-3 rounded-lg hover:border-green-400 hover:text-white transition-all flex items-center gap-2 text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Save
                  </button>
                  
                  <button
                    onClick={() => setUserCode(level.buggyCode)}
                    className="bg-gray-800 border border-gray-600 text-gray-300 py-2 px-3 rounded-lg hover:border-green-400 hover:text-white transition-all flex items-center gap-2 text-sm"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                </div>
              </div>

              {/* Code Editor */}
              <div className="mb-4">
                <CodeEditor
                  code={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  language={level.language || "javascript"}
                  bugLine={level.bugLine}
                  height="400px"
                />
              </div>

              {/* Code Actions */}
              <div className="flex flex-wrap gap-3 mb-6">
                {/* <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all font-bold flex items-center justify-center gap-2 text-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  {showSolution ? "Hide Solution" : "Show Solution"}
                </button> */}
                
                {/* <div className="bg-gray-800 border border-gray-600 px-4 py-3 rounded-xl flex items-center gap-3">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">{attempts}</div>
                    <div className="text-gray-400 text-xs">Attempts</div>
                  </div>
                  <div className="h-8 w-px bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">{completionRate}%</div>
                    <div className="text-gray-400 text-xs">Progress</div>
                  </div>
                </div> */}
              </div>

              {/* Solution Preview */}
              {showSolution && level.solution && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 bg-gray-900/50 rounded-xl p-4 border border-blue-500/20 overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-blue-400 font-bold flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Recommended Solution
                    </p>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Spoiler</span>
                  </div>
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                    {level.solution}
                  </pre>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={checkSolution}
                disabled={feedback?.type === "success"}
                className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white text-xl font-bold py-5 rounded-2xl hover:from-green-400 hover:via-emerald-400 hover:to-teal-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20 animate-pulse"></div>
                <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform relative z-10" />
                <span className="relative z-10">
                  {feedback?.type === "success" ? "LEVEL COMPLETE!" : "SUBMIT SOLUTION"}
                </span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              </motion.button>
            </div>
          </GradientBorderCard>
        </div>

        {/* Enhanced Navigation Buttons */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <motion.button
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setScreen("home")}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-gray-300 py-4 px-6 rounded-2xl hover:border-purple-400 hover:text-white transition-all font-bold flex items-center justify-center gap-3 group"
          >
            <Home className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            MAIN MENU
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const screen = level.difficulty === "Easy" ? "easy-levels" :
                           level.difficulty === "Medium" ? "medium-levels" : "hard-levels";
              setScreen(screen);
            }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-gray-300 py-4 px-6 rounded-2xl hover:border-blue-400 hover:text-white transition-all font-bold flex items-center justify-center gap-3 group"
          >
            <GitBranch className="w-5 h-5 group-hover:rotate-180 transition-transform" />
            LEVEL SELECT
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (currentLevel > 0) {
                setCurrentLevel(currentLevel - 1);
                setFeedback(null);
                setTimer(0);
              }
            }}
            disabled={currentLevel === 0}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-gray-300 py-4 px-6 rounded-2xl hover:border-green-400 hover:text-white transition-all font-bold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            PREVIOUS LEVEL
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (currentLevel < LEVELS.length - 1) {
                setCurrentLevel(currentLevel + 1);
                setFeedback(null);
                setTimer(0);
              }
            }}
            disabled={currentLevel === LEVELS.length - 1}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-gray-300 py-4 px-6 rounded-2xl hover:border-green-400 hover:text-white transition-all font-bold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            NEXT LEVEL
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300 font-medium">Overall Progress</span>
            <span className="text-white font-bold">{completedLevels.length}/{LEVELS.length} levels</span>
          </div>
          <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${completionRate}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </motion.div>
          </div>
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>Start your journey</span>
            <span>{completionRate}% Complete</span>
            <span>Master Debugger</span>
          </div>
        </div>
      </div>

      {/* Enhanced Feedback Panel */}
      {feedback && (
        <FeedbackPanel 
          feedback={feedback}
          nextLevel={handleNextLevel}
          onClose={() => setFeedback(null)}
          timeSpent={timer}
          currentLevel={currentLevel + 1}
          totalLevels={LEVELS.length}
        />
      )}
    </div>
  );
};

export default GameScreen;