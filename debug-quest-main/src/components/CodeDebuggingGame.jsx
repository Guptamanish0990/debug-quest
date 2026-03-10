import React, { useState, useEffect } from "react";
import { Bug } from "lucide-react";
import { useLocalStorage } from '../../hooks/useLocalStorage';

// Import screens
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import AllLevelsScreen from "./screens/AllLevelsScreen";
import EasyLevelsScreen from "./screens/EasyLevelsScreen";
import MediumLevelsScreen from "./screens/MediumLevelsScreen";
import HardLevelsScreen from "./screens/HardLevelsScreen";
import LanguageLevelsScreen from "./screens/LanguageLevelsScreen";
import CompletionScreen from "./screens/CompletionScreen";
import InterviewScreen from "./screens/InterviewScreen"; // ADD THIS IMPORT

// Import LEVELS
import { LEVELS } from "../../utils/levels";

export default function CodeDebuggingGame() {
  const [screen, setScreen] = useState("home");
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userCode, setUserCode] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState(null);
  
  // ✅ State ko local storage se initialize karein
  const [completedLevels, setCompletedLevels] = useLocalStorage('debugQuest_completedLevels', []);
  const [score, setScore] = useLocalStorage('debugQuest_score', 0);
  const [streak, setStreak] = useLocalStorage('debugQuest_streak', 0);
  
  const [attempts, setAttempts] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showTutorial, setShowTutorial] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (screen === "game" && LEVELS && LEVELS[currentLevel]) {
      setUserCode(LEVELS[currentLevel].buggyCode);
      setShowHint(false);
      setFeedback(null);
      setAttempts(0);
    }
  }, [currentLevel, screen]);

  const startGame = () => {
    setScreen("game");
    setCurrentLevel(0);
    setCompletedLevels([]);
    setScore(0);
    setStreak(0);
    setSelectedDifficulty(null);
    setSelectedLanguage(null);
    setShowTutorial(false);
  };

  const checkSolution = () => {
    const level = LEVELS[currentLevel];
    const userCodeTrimmed = userCode.trim().replace(/\s+/g, " ");
    const fixedCodeTrimmed = level.fixedCode.trim().replace(/\s+/g, " ");

    setAttempts(attempts + 1);

    if (userCodeTrimmed === fixedCodeTrimmed) {
      const points = showHint ? 50 : 100;
      const streakBonus = Math.floor(streak / 3) * 10;
      const totalPoints = points + streakBonus;
      
      setScore(score + totalPoints);
      setStreak(streak + 1);
      
      setFeedback({
        type: "success",
        message: "Perfect! Bug fixed! 🎉",
        explanation: level.explanation,
        points: totalPoints,
        streakBonus: streakBonus > 0 ? streakBonus : null,
      });

      if (!completedLevels.includes(currentLevel)) {
        const newCompletedLevels = [...completedLevels, currentLevel];
        setCompletedLevels(newCompletedLevels);
      }
    } else {
      setStreak(0);
      setFeedback({
        type: "error",
        message: "Not quite right. Keep trying! 💪",
        attempts: attempts + 1,
      });
    }
  };

  const nextLevel = () => {
    if (currentLevel < LEVELS.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setFeedback(null);
      setShowHint(false);
    } else {
      setScreen("complete");
    }
  };

  const selectLevel = (actualIndex) => {
    setCurrentLevel(actualIndex);
    setScreen("game");
  };

  const languageIcons = {
    HTML: "🌐",
    CSS: "🎨",
    JavaScript: "⚡",
    Python: "🐍",
    SQL: "🗄️",
    Java: "☕",
    "C++": "⚙️",
    Ruby: "💎",
    TypeScript: "📘",
    React: "⚛️",
    "Next.js": "▲",
    PHP: "🐘",
    Go: "🚀",
    Rust: "🦀",
    Swift: "🐦",
    Kotlin: "🤖",
  };

  // Render screens based on state
  switch (screen) {
    case "home":
      return (
        <HomeScreen
          setScreen={setScreen}
          startGame={startGame}
          selectLevel={selectLevel}
          showTutorial={showTutorial}
          setShowTutorial={setShowTutorial}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          languageIcons={languageIcons}
          // ✅ Yeh new props add karein:
          completedLevels={completedLevels}
          score={score}
          streak={streak}
        />
      );
    
    case "easy-levels":
      return (
        <EasyLevelsScreen
          LEVELS={LEVELS}
          setScreen={setScreen}
          selectLevel={selectLevel}
          completedLevels={completedLevels}
          languageIcons={languageIcons}
        />
      );
    
    case "medium-levels":
      return (
        <MediumLevelsScreen
          LEVELS={LEVELS}
          setScreen={setScreen}
          selectLevel={selectLevel}
          completedLevels={completedLevels}
          languageIcons={languageIcons}
        />
      );
    
    case "hard-levels":
      return (
        <HardLevelsScreen
          LEVELS={LEVELS}
          setScreen={setScreen}
          selectLevel={selectLevel}
          completedLevels={completedLevels}
          languageIcons={languageIcons}
        />
      );
    
    case "all-levels":
      return (
        <AllLevelsScreen
          LEVELS={LEVELS}
          setScreen={setScreen}
          selectLevel={selectLevel}
          completedLevels={completedLevels}
          languageIcons={languageIcons}
        />
      );
    
    case "game":
      return (
        <GameScreen
          LEVELS={LEVELS}
          currentLevel={currentLevel}
          userCode={userCode}
          setUserCode={setUserCode}
          showHint={showHint}
          setShowHint={setShowHint}
          feedback={feedback}
          setFeedback={setFeedback}
          score={score}
          completedLevels={completedLevels}
          streak={streak}
          attempts={attempts}
          setScreen={setScreen}
          checkSolution={checkSolution}
          nextLevel={nextLevel}
          setCurrentLevel={setCurrentLevel}
          languageIcons={languageIcons}
          selectedDifficulty={selectedDifficulty}
        />
      );
    
    case "complete":
      return (
        <CompletionScreen
          LEVELS={LEVELS}
          score={score}
          completedLevels={completedLevels}
          setScreen={setScreen}
          setCompletedLevels={setCompletedLevels}
          setScore={setScore}
        />
      );
    
    case "language-levels":
      return (
        <LanguageLevelsScreen
          LEVELS={LEVELS}
          selectedLanguage={selectedLanguage}
          setScreen={setScreen}
          selectLevel={selectLevel}
          completedLevels={completedLevels}
          languageIcons={languageIcons}
        />
      );
    
    case "interview": // ADD THIS NEW CASE
      return (
        <InterviewScreen
          onBack={() => setScreen("home")}
        />
      );
    
    default:
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 flex items-center justify-center">
          <div className="text-center">
            <Bug className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-spin" />
            <h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
            <p className="text-gray-400">Preparing debugging challenges...</p>
          </div>
        </div>
      );
  }
}