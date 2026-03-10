import React, { useState, useEffect } from "react";
import { Trophy, ArrowUp } from "lucide-react";
import Footer from "./components/layout/Footer";
import HomeScreen from "./components/screens/HomeScreen";
import GameScreen from "./components/screens/GameScreen";
import AllLevelsScreen from "./components/screens/AllLevelsScreen";
import InterviewScreen from "./components/screens/InterviewScreen";
import { LEVELS } from "./utils/levels";
import { initSecurity } from "./utils/security";

function App() {
  // 🔒 SECURITY - Sabse pehle initialize karo (production check hata diya)
  useEffect(() => {
    const cleanup = initSecurity({
      disableRightClickEnabled: true,
      disableDevToolsEnabled: true,
      detectDevToolsEnabled: true,
      disableTextSelectionEnabled: true,
      disableCopyEnabled: true,
      disableCutEnabled: true,
      disableDragEnabled: true,
      clearConsoleEnabled: true,
      disablePrintScreenEnabled: true,
      blockDevToolShortcutsEnabled: true,
    });

    // Cleanup on unmount
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  // Load saved data from localStorage or use defaults
  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem("debugquest_score");
    return saved ? parseInt(saved) : 0;
  });

  const [completedLevels, setCompletedLevels] = useState(() => {
    const saved = localStorage.getItem("debugquest_completed");
    return saved ? JSON.parse(saved) : [];
  });

  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem("debugquest_streak");
    return saved ? parseInt(saved) : 0;
  });

  const [currentLevel, setCurrentLevel] = useState(() => {
    const saved = localStorage.getItem("debugquest_current_level");
    return saved ? parseInt(saved) : 0;
  });

  const [screen, setScreen] = useState("home");
  const [userCode, setUserCode] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Enhanced Language Icons Mapping (Emoji Format)
  const languageIcons = {
    // Web Technologies
    "HTML": "🌐",
    "CSS": "🎨",
    "JavaScript": "⚡",
    "TypeScript": "🔷",
    "React": "⚛️",
    "Angular": "🔺",
    "Vue": "💚",
    "Svelte": "🧡",
    "Next.js": "⏭️",
    
    // Backend & Server
    "Node.js": "🟢",
    "Express": "🚂",
    "Express.js": "🚂",
    "Python": "🐍",
    "Django": "🎸",
    "Flask": "🧪",
    "Java": "☕",
    "Spring": "🌱",
    "C++": "⚙️",
    "C#": "💠",
    "Ruby": "💎",
    "Go": "🐹",
    "PHP": "🐘",
    "Laravel": "🔴",
    "Swift": "🦅",
    "Kotlin": "🅺",
    "Rust": "🦀",
    
    // Databases
    "SQL": "🗄️",
    "MongoDB": "🍃",
    "PostgreSQL": "🐘",
    "MySQL": "🐬",
    "Redis": "🔴",
    "GraphQL": "🔺",
    
    // DevOps & Tools
    "Docker": "🐳",
    "Kubernetes": "☸️",
    "AWS": "☁️",
    "Git": "📦",
    "Linux": "🐧",
    "Bash": "💻",
    
    // Other
    "All": "🌍",
    "Other": "📝"
  };

  // ✅ Scroll to top when screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [screen]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("debugquest_score", score.toString());
  }, [score]);

  useEffect(() => {
    localStorage.setItem("debugquest_completed", JSON.stringify(completedLevels));
  }, [completedLevels]);

  useEffect(() => {
    localStorage.setItem("debugquest_streak", streak.toString());
  }, [streak]);

  useEffect(() => {
    localStorage.setItem("debugquest_current_level", currentLevel.toString());
  }, [currentLevel]);

  useEffect(() => {
    if (LEVELS[currentLevel]) {
      setUserCode(LEVELS[currentLevel].buggyCode || '');
      setShowHint(false);
      setFeedback(null);
      setAttempts(0);
    }
  }, [currentLevel]);

  const checkSolution = () => {
    const level = LEVELS[currentLevel];
    setAttempts(attempts + 1);

    try {
      if (level.validate) {
        const isCorrect = level.validate(userCode);

        if (isCorrect) {
          const points = Math.max(100 - attempts * 10, 50);
          setScore(score + points);
          setFeedback({
            type: "success",
            message: `🎉 Perfect! You've debugged the code! +${points} points`,
          });

          if (!completedLevels.includes(currentLevel)) {
            setCompletedLevels([...completedLevels, currentLevel]);
            setStreak(streak + 1);
          }
        } else {
          setFeedback({
            type: "error",
            message: "❌ Not quite right. Check your code and try again!",
          });
        }
      } else {
        // If no validate function, just show success
        const points = 100;
        setScore(score + points);
        setFeedback({
          type: "success",
          message: `🎉 Great job! +${points} points`,
        });

        if (!completedLevels.includes(currentLevel)) {
          setCompletedLevels([...completedLevels, currentLevel]);
          setStreak(streak + 1);
        }
      }
    } catch (error) {
      setFeedback({
        type: "error",
        message: `❌ Code error: ${error.message}`,
      });
    }
  };

  const nextLevel = () => {
    if (currentLevel < LEVELS.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setFeedback(null);
    } else {
      setFeedback({
        type: "success",
        message: "🎊 Congratulations! You've completed all levels!",
      });
    }
  };

  const startGame = () => {
    setCurrentLevel(0);
    setScreen("game");
  };

  const selectLevel = (index) => {
    setCurrentLevel(index);
    setScreen("game");
  };

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all progress?")) {
      localStorage.clear();
      setScore(0);
      setCompletedLevels([]);
      setStreak(0);
      setCurrentLevel(0);
      setScreen("home");
    }
  };

  return (
    <div className="App min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 flex flex-col">
     
      
      <main className="flex-1 pt-20"> {/* pt-20 for fixed header */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-20 right-6 z-40 group"
            aria-label="Scroll to top"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm transition-all group-hover:scale-110">
                <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </button>
        )}

        {screen === "home" && (
          <HomeScreen
            setScreen={setScreen}
            startGame={startGame}
            selectLevel={selectLevel}
            showTutorial={showTutorial}
            setShowTutorial={setShowTutorial}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            languageIcons={languageIcons}
            completedLevels={completedLevels}
            score={score}
            streak={streak}
          />
        )}

        {screen === "game" && (
          <GameScreen
            currentLevel={currentLevel}
            setCurrentLevel={setCurrentLevel}
            userCode={userCode}
            setUserCode={setUserCode}
            showHint={showHint}
            setShowHint={setShowHint}
            feedback={feedback}
            score={score}
            completedLevels={completedLevels}
            streak={streak}
            attempts={attempts}
            checkSolution={checkSolution}
            nextLevel={nextLevel}
            setScreen={setScreen}
            setFeedback={setFeedback}
            languageIcons={languageIcons}
          />
        )}

        {screen === "about" && (
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/30">
              <h1 className="text-4xl font-bold text-white mb-6">About Debug Quest</h1>
              <p className="text-gray-300 mb-4">
                Debug Quest is an interactive platform designed to help developers improve their debugging skills through real-world coding challenges.
              </p>
              <p className="text-gray-300 mb-4">
                Our mission is to make debugging fun and educational, helping developers at all levels become better problem solvers.
              </p>
            </div>
          </div>
        )}

        {screen === "all-levels" && (
          <AllLevelsScreen
            setScreen={setScreen}
            selectLevel={selectLevel}
            completedLevels={completedLevels}
            languageIcons={languageIcons}
          />
        )}

        {screen === "interview" && (
          <InterviewScreen onBack={() => setScreen("home")} />
        )}

        {(screen === "easy-levels" || screen === "medium-levels" || screen === "hard-levels") && (
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 p-6">
            <div className="max-w-6xl mx-auto">
              <button
                onClick={() => setScreen("home")}
                className="mb-6 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 text-gray-300 py-3 px-6 rounded-xl hover:border-purple-400 hover:text-white transition-all"
              >
                ← Back to Home
              </button>

              <h2 className="text-4xl font-bold text-white mb-8">
                {screen === "easy-levels" && "Easy Levels"}
                {screen === "medium-levels" && "Medium Levels"}
                {screen === "hard-levels" && "Hard Levels"}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {LEVELS.filter(level =>
                  level.difficulty === (screen === "easy-levels" ? "Easy" : screen === "medium-levels" ? "Medium" : "Hard")
                ).map((level) => {
                  const actualIndex = LEVELS.indexOf(level);
                  const isCompleted = completedLevels.includes(actualIndex);

                  return (
                    <div
                      key={actualIndex}
                      onClick={() => {
                        setCurrentLevel(actualIndex);
                        setScreen("game");
                      }}
                      className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 rounded-2xl p-6 cursor-pointer hover:border-purple-500 transition-all transform hover:scale-105"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">Level {actualIndex + 1}</h3>
                        {isCompleted && <Trophy className="w-6 h-6 text-yellow-400" />}
                      </div>
                      <p className="text-gray-300 mb-3">{level.title}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-2xl">{languageIcons[level.language] || "📝"}</span>
                        <span className="text-gray-400">{level.language}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer setScreen={setScreen} />

      {/* Reset Progress Button */}
      <button
        onClick={resetProgress}
        className="fixed bottom-4 left-4 bg-red-600/20 hover:bg-red-600/40 text-red-400 hover:text-red-300 px-4 py-2 rounded-lg text-sm z-50 opacity-50 hover:opacity-100 transition-all border border-red-500/30"
        title="Reset All Progress"
      >
        🔄 Reset Progress
      </button>
    </div>
  );
}

export default App;