// src/components/screens/HomeScreen.jsx
import React, { useState, useEffect, useRef } from "react";
import { 
  Play, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle,
  BookOpen,
  Zap,
  TrendingUp,
  Target,
  Sparkles,
  Code,
  BarChart3,
  Users,
  Clock,
  X,
  Star,
  Trophy,
  Flame,
  Brain,
  ChevronRight,
  Crown,
  Shield,
  Terminal
} from "lucide-react";

import { LEVELS } from "../../utils/levels";
import ParticleBackground from "../common/ParticleBackground";
import TutorialModal from "../home/TutorialModal";
import { motion, AnimatePresence } from "framer-motion";

const HomeScreen = ({
  setScreen,
  startGame,
  selectLevel,
  showTutorial,
  setShowTutorial,
  languageIcons,
  completedLevels = [],
  score = 0,
  streak = 0,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState("all"); // FIXED LINE
  const [notifications, setNotifications] = useState([]);
  const [userRank, setUserRank] = useState("Novice Debugger");
  
  // DAILY CHALLENGE STATE VARIABLES
  const [dailyStreak, setDailyStreak] = useState(0);
  const [dailyChallengeCompleted, setDailyChallengeCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState("23:45:12");
  
  const containerRef = useRef(null);
  
  // Default language icons agar prop nahi mila toh
  const defaultLanguageIcons = {
    "JavaScript": "💛",
    "Python": "🐍",
    "HTML": "🌐",
    "CSS": "🎨",
    "React": "⚛️",
    "Node.js": "🟢",
    "Java": "☕",
    "C++": "🔷",
    "C#": "💠",
    "PHP": "🐘",
    "TypeScript": "📘",
    "Go": "🐹",
    "Ruby": "💎",
    "Swift": "🐦",
    "Kotlin": "🟣",
    "Rust": "🦀",
    "SQL": "🗃️",
    "MongoDB": "🍃",
    "GraphQL": "🔼",
    "Docker": "🐳",
    "AWS": "☁️",
    "Vue": "🟩",
    "Angular": "🅰️",
    "Svelte": "⚡",
    "Next.js": "⏭️",
    "Express": "🚂",
    "Django": "🐍",
    "Flask": "🍶",
    "Laravel": "🔴",
    "Spring": "🌱",
    "Other": "📝",
    "All": "🌍"
  };
  
  // Use languageIcons prop if available, otherwise use default
  const iconsToUse = languageIcons || defaultLanguageIcons;
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // ✅ DAILY CHALLENGE LOGIC - LOCALSTORAGE
    const loadDailyStreak = () => {
      const storedStreak = localStorage.getItem('debugQuestDailyStreak');
      const storedDate = localStorage.getItem('lastCompletedDate');
      const today = new Date().toDateString();
      
      if (storedDate === today) {
        setDailyChallengeCompleted(true);
      }
      
      if (storedStreak) {
        setDailyStreak(parseInt(storedStreak));
      }
    };
    
    loadDailyStreak();
    
    // ✅ TIMER LOGIC - REAL-TIME COUNTDOWN
    const timer = setInterval(() => {
      const now = new Date();
      
      // Calculate time left until midnight
      const tomorrow = new Date(now);
      tomorrow.setHours(24, 0, 0, 0);
      const diff = tomorrow - now;
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    // Simulate user rank based on score
    const calculateRank = () => {
      if (score >= 5000) return "Master Debugger";
      if (score >= 2000) return "Senior Debugger";
      if (score >= 1000) return "Intermediate Debugger";
      if (score >= 500) return "Junior Debugger";
      return "Novice Debugger";
    };
    setUserRank(calculateRank());
  }, [score]);

  const easyCount = LEVELS.filter((l) => l.difficulty === "Easy").length;
  const mediumCount = LEVELS.filter((l) => l.difficulty === "Medium").length;
  const hardCount = LEVELS.filter((l) => l.difficulty === "Hard").length;

  // Calculate completion percentage
  const completionPercentage = completedLevels.length > 0 
    ? Math.round((completedLevels.length / LEVELS.length) * 100)
    : 0;

  // Get recently completed levels (last 3)
  const recentlyCompleted = completedLevels
    .slice(-3)
    .map(index => LEVELS[index])
    .reverse();

  // Get user stats - FIXED: Complete function
  const getUserStats = () => {
    const easyCompleted = completedLevels.filter(index => 
      LEVELS[index].difficulty === "Easy"
    ).length;
    const mediumCompleted = completedLevels.filter(index => 
      LEVELS[index].difficulty === "Medium"
    ).length;
    const hardCompleted = completedLevels.filter(index => 
      LEVELS[index].difficulty === "Hard"
    ).length;

    return {
      total: completedLevels.length,
      easy: easyCompleted,
      medium: mediumCompleted,
      hard: hardCompleted,
      percentage: completionPercentage,
      accuracy: completedLevels.length > 0 ? Math.floor(Math.random() * 20) + 80 : 0,
      avgTime: completedLevels.length > 0 ? Math.floor(Math.random() * 10) + 5 : 0,
    };
  };

  const userStats = getUserStats();

  // Handle difficulty filter

  const getLanguageStats = () => {
    const languages = {};
    LEVELS.forEach((level) => {
      const lang = level.language || "Other";
      if (!languages[lang]) {
        languages[lang] = { 
          total: 0, 
          easy: 0, 
          medium: 0, 
          hard: 0,
          completed: 0 
        };
      }
      languages[lang].total++;
      if (level.difficulty === "Easy") languages[lang].easy++;
      if (level.difficulty === "Medium") languages[lang].medium++;
      if (level.difficulty === "Hard") languages[lang].hard++;
      
      const isCompleted = completedLevels.some(index => 
        LEVELS[index].language === lang
      );
      if (isCompleted) {
        languages[lang].completed = completedLevels.filter(index => 
          LEVELS[index].language === lang
        ).length;
      }
    });
    return languages;
  };

  const languageStats = getLanguageStats();

  // Navigation function for difficulty screens
  const navigateToDifficultyScreen = (difficulty) => {
    setSelectedDifficulty(difficulty);
    if (difficulty === "all") {
      setScreen("all-levels");
    } else {
      setScreen(`${difficulty.toLowerCase()}-levels`);
    }
  };

  // ✅ UPDATED DAILY CHALLENGE OBJECT WITH LIVE TIMER
  const dailyChallenge = {
    id: "daily-1",
    title: "Daily Challenge: Async/Await Pattern",
    difficulty: "Medium",
    difficultyLevel: 3,
    language: "JavaScript",
    xp: 300,
    streakBonus: 50,
    timeLeft: timeLeft, // ✅ Live timer
    estimatedTime: "10-15 min",
    description: "Fix common async/await patterns and prevent promise leaks",
    tags: ["Async", "Promises", "Error Handling"],
    requirements: [
      "Fix the async function implementation",
      "Handle promise rejections properly",
      "Prevent memory leaks",
      "All tests must pass"
    ],
    rewards: {
      coins: 250,
      badge: "Async Master"
    }
  };

  // ✅ UPDATED: Handle Daily Challenge completion with localStorage
  const handleDailyChallengeComplete = () => {
    const today = new Date().toDateString();
    
    // Save completion to localStorage
    localStorage.setItem('lastCompletedDate', today);
    
    // Update streak
    const newStreak = dailyStreak + 1;
    setDailyStreak(newStreak);
    localStorage.setItem('debugQuestDailyStreak', newStreak);
    
    // Mark as completed
    setDailyChallengeCompleted(true);
    
    // Add notification
    setNotifications([...notifications, {
      type: 'achievement',
      message: `Daily Challenge Completed! +${dailyChallenge.xp + dailyChallenge.streakBonus} XP earned`,
      time: 'Just now'
    }]);
    
    // Navigate to challenge (if you have daily challenge level)
    const dailyLevel = LEVELS.find(l => l.tags?.includes("daily"));
    if (dailyLevel) {
      const index = LEVELS.findIndex(l => l.id === dailyLevel.id);
      selectLevel(index);
    }
  };

  // Difficulty options with enhanced data
  const difficultyOptions = [
    {
      level: "Easy",
      count: easyCount,
      completed: userStats.easy,
      color: "from-green-500 to-emerald-500",
      glowColor: "rgba(34, 197, 94, 0.3)",
      hoverColor: "hover:from-green-400 hover:to-emerald-400",
      icon: "🟢",
      desc: "Perfect for beginners",
      buttonColor: "from-green-600 to-emerald-700",
      stats: [
        { label: "Time", value: "5-10 min", icon: Clock },
        { label: "Focus", value: "Basics", icon: Brain },
        { label: "XP", value: "100-200", icon: Star },
      ],
      onClick: () => navigateToDifficultyScreen("Easy"),
      features: ["Basic syntax", "Common errors", "Beginner friendly"]
    },
    {
      level: "Medium",
      count: mediumCount,
      completed: userStats.medium,
      color: "from-yellow-500 to-amber-500",
      glowColor: "rgba(234, 179, 8, 0.3)",
      hoverColor: "hover:from-yellow-400 hover:to-amber-400",
      icon: "🟡",
      desc: "Intermediate challenges",
      buttonColor: "from-yellow-600 to-amber-700",
      stats: [
        { label: "Time", value: "10-20 min", icon: Clock },
        { label: "Focus", value: "Logic", icon: Brain },
        { label: "XP", value: "200-350", icon: Star },
      ],
      onClick: () => navigateToDifficultyScreen("Medium"),
      features: ["Algorithms", "Debugging", "Real-world scenarios"]
    },
    {
      level: "Hard",
      count: hardCount,
      completed: userStats.hard,
      color: "from-red-500 to-pink-500",
      glowColor: "rgba(239, 68, 68, 0.3)",
      hoverColor: "hover:from-red-400 hover:to-pink-400",
      icon: "🔴",
      desc: "Expert level problems",
      buttonColor: "from-red-600 to-pink-700",
      stats: [
        { label: "Time", value: "20-30 min", icon: Clock },
        { label: "Focus", value: "Advanced", icon: Brain },
        { label: "XP", value: "350-500", icon: Star },
      ],
      onClick: () => navigateToDifficultyScreen("Hard"),
      features: ["Complex bugs", "Performance", "Edge cases"]
    },
  ];

  // Enhanced featured challenges
  const featuredChallenges = [
    {
      id: "hard-js-1",
      title: "Event Listener leak",
      difficulty: "Hard",
      language: "JavaScript",
      duration: "15-30 min",
      xp: 200,
      icon: "⚡",
      color: "from-red-500 to-orange-500",
      actualLevelId: "hard-js-1",
      tags: ["Memory", "Performance", "DOM"],
      popularity: 98,
      completionRate: 45
    },
    {
      id: "medium-python-1",
      title: "Integer Division",
      difficulty: "Medium",
      language: "Python",
      duration: "15-30 min",
      xp: 150,
      icon: "🐍",
      color: "from-blue-500 to-cyan-500",
      actualLevelId: "medium-python-1",
      tags: ["Math", "Logic", "Data Types"],
      popularity: 87,
      completionRate: 62
    },
    {
      id: "easy-html-1",
      title: "Missing Closing Tag",
      difficulty: "Easy",
      language: "HTML",
      duration: "15-30 min",
      xp: 100,
      icon: "🔗",
      color: "from-green-500 to-emerald-500",
      actualLevelId: "easy-html-1",
      tags: ["Syntax", "Basics", "Web"],
      popularity: 92,
      completionRate: 78
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -8,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    tap: {
      scale: 0.97
    }
  };

  const openLanguageDetails = (lang, stats) => {
    setSelectedLanguage({ lang, stats });
    setShowLanguageModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 p-3 sm:p-4 flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Floating code snippets */}
        {["{ }", "< />", "=>", "() =>", "const", "async", "await", "function", "class", "import"].map((code, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-500/30 font-mono text-lg sm:text-2xl"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      <motion.div 
        ref={containerRef}
        className="relative w-full max-w-7xl z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl sm:backdrop-blur-2xl border border-gray-700/30 rounded-2xl sm:rounded-3xl shadow-2xl shadow-blue-500/10 p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden">
          
          {/* Top Navigation Bar */}
          <motion.div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-10" variants={itemVariants}>
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-1.5 sm:p-2 bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-lg sm:rounded-xl"
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-400" />
              </motion.div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Welcome back, Debugger!</p>
                <div className="flex items-center gap-1 sm:gap-2">
                  <h2 className="text-sm sm:text-base md:text-lg font-bold text-white truncate max-w-[120px] sm:max-w-none">{userRank}</h2>
                  <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:flex items-center gap-2">
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 text-blue-300 rounded-lg sm:rounded-xl hover:border-blue-400/50 transition-all text-xs sm:text-sm"
                >
                  <Share2 className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                  Share
                </motion.button> */}
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 text-gray-300 hover:text-white hover:border-blue-500/30 transition-all"
                >
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button> */}
              </div>
              {/* <NotificationBell /> */}
            </div>
          </motion.div>

          {/* Enhanced Header */}
          <motion.div className="text-center mb-8 sm:mb-10 md:mb-12 relative" variants={itemVariants}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-xl"
                />
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-r from-green-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
              </div>
            </div>

            <div className="relative mb-4 sm:mb-6 md:mb-8">
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 blur-3xl opacity-20 sm:opacity-30"
              />
              <div className="relative flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-1 sm:mb-2">
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-400 hidden md:block" />
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 font-mono tracking-tight">
                    DEBUG QUEST
                  </h1>
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-400 hidden md:block" />
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-2xl mx-auto px-2">
                  Master debugging through <span className="text-cyan-400 font-semibold">interactive challenges</span> 
                  <br className="hidden sm:block" /> and level up your coding skills! <span className="text-yellow-400">🚀</span>
                </p>
              </div>
            </div>

            {/* Enhanced Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              {[
                { value: LEVELS.length, label: "Total Challenges", icon: Terminal, color: "text-blue-400", bg: "from-blue-500 to-cyan-500" },
                { value: userStats.total, label: "Completed", icon: CheckCircle, color: "text-green-400", bg: "from-green-500 to-emerald-500" },
                { value: score, label: "Your Score", icon: Trophy, color: "text-yellow-400", bg: "from-yellow-500 to-amber-500" },
                { value: userStats.percentage, suffix: "%", label: "Progress", icon: TrendingUp, color: "text-purple-400", bg: "from-purple-500 to-pink-500" },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.bg} rounded-t-xl sm:rounded-t-2xl`} />
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 sm:mb-3 bg-gradient-to-r ${stat.bg} bg-clip-text text-transparent`} />
                    <div className={`text-xl sm:text-2xl md:text-3xl font-black ${stat.color}`}>
                      {stat.value}{stat.suffix || ""}
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm mt-0.5 sm:mt-1 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Progress Bar */}
            {userStats.total > 0 && (
              <motion.div className="max-w-2xl mx-auto mt-4 sm:mt-6" variants={itemVariants}>
                <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-gray-300 font-medium">Your Learning Journey</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-white font-bold">{userStats.total}/{LEVELS.length} completed</span>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full animate-pulse" />
                  </div>
                </div>
                <div className="h-1.5 sm:h-2 md:h-2.5 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                  <motion.div 
                    className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${userStats.percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Daily Challenge Section - UPDATED WITH WORKING BUTTON */}
          <motion.div className="mb-6 sm:mb-8 md:mb-10" variants={itemVariants}>
            <div className="bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-orange-900/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 border border-yellow-500/20 backdrop-blur-sm relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute top-0 right-0 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full -translate-y-20 sm:-translate-y-24 md:-translate-y-32 translate-x-20 sm:translate-x-24 md:translate-x-32 animate-pulse" />
              
              <div className="relative z-10">
                {/* Header with streak */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-5 md:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="relative">
                      <div className="p-1.5 sm:p-2 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-lg sm:rounded-xl">
                        <Flame className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400" />
                      </div>
                      {dailyStreak > 0 && (
                        <div className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[8px] sm:text-xs font-bold px-1 sm:px-1.5 py-0.5 rounded-full">
                          {dailyStreak}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 flex items-center gap-2">
                        Daily Challenge
                        {dailyStreak >= 3 && (
                          <span className="px-2 py-0.5 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-full text-xs sm:text-sm text-yellow-300">
                            🔥 {dailyStreak} Day Streak
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {dailyChallengeCompleted ? 
                          "🎉 You've completed today's challenge!" : 
                          "Complete today's challenge for bonus XP and rewards!"}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timer with urgency indicator - NOW LIVE */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl font-mono font-bold ${
                      timeLeft.includes("00:") ? 
                      "bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-400 border border-red-500/30" :
                      "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 border border-yellow-500/30"
                    }`}>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-sm sm:text-base">{timeLeft}</span>
                      </div>
                      <div className="text-[8px] sm:text-xs text-gray-400 mt-0.5">Time Remaining</div>
                    </div>
                    
                    {dailyStreak > 0 && (
                      <div className="hidden sm:block px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg sm:rounded-xl">
                        <div className="text-yellow-400 font-bold text-sm sm:text-base">+{dailyChallenge.streakBonus}</div>
                        <div className="text-[8px] sm:text-xs text-gray-400">Streak Bonus</div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Challenge Details Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                  <div className="bg-gray-900/30 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-gray-700/30">
                    <div className="flex items-center gap-1 sm:gap-2 mb-1">
                      <div className="p-1 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded">
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                      </div>
                      <span className="text-xs text-gray-400">Difficulty</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="text-sm sm:text-base md:text-lg font-bold text-yellow-400">
                        {dailyChallenge.difficulty}
                      </div>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div
                            key={star}
                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${
                              star <= dailyChallenge.difficultyLevel
                                ? "bg-yellow-500"
                                : "bg-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/30 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-gray-700/30">
                    <div className="flex items-center gap-1 sm:gap-2 mb-1">
                      <div className="p-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded">
                        <Code className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                      </div>
                      <span className="text-xs text-gray-400">Language</span>
                    </div>
                    <div className="text-lg sm:text-xl">{iconsToUse[dailyChallenge.language] || "💻"}</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-blue-400">
                      {dailyChallenge.language}
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/30 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-gray-700/30">
                    <div className="flex items-center gap-1 sm:gap-2 mb-1">
                      <div className="p-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                      </div>
                      <span className="text-xs text-gray-400">XP Reward</span>
                    </div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-green-400">
                      {dailyChallenge.xp} XP
                    </div>
                    {dailyStreak > 0 && (
                      <div className="text-xs text-yellow-400 mt-0.5">
                        +{dailyChallenge.streakBonus} streak bonus
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-gray-900/30 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-gray-700/30">
                    <div className="flex items-center gap-1 sm:gap-2 mb-1">
                      <div className="p-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded">
                        <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                      </div>
                      <span className="text-xs text-gray-400">Rewards</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {dailyChallenge.rewards.badge && (
                        <span className="px-1.5 py-0.5 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-300 rounded text-xs">
                          {dailyChallenge.rewards.badge}
                        </span>
                      )}
                      <span className="px-1.5 py-0.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 rounded text-xs">
                        {dailyChallenge.rewards.coins} coins
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Challenge Description & Requirements */}
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                    {dailyChallenge.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {dailyChallenge.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-yellow-900/30 to-amber-900/30 text-yellow-300 rounded-full text-xs sm:text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-gray-900/30 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700/30">
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2 flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                      Requirements to Complete
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {dailyChallenge.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                          <span className="text-gray-400 text-xs sm:text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* ✅ FIXED: Action Buttons - Now working properly */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDailyChallengeComplete}
                    disabled={dailyChallengeCompleted}
                    className={`flex-1 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 font-bold rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group ${
                      dailyChallengeCompleted
                        ? "bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 cursor-not-allowed"
                        : "bg-gradient-to-r from-yellow-500 to-amber-600 text-white hover:shadow-xl hover:shadow-yellow-500/30"
                    }`}
                  >
                    {dailyChallengeCompleted ? (
                      <>
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base">Challenge Completed!</span>
                      </>
                    ) : (
                      <>
                        <Flame className="w-4 h-4 sm:w-5 sm:h-5" />
                        <div className="flex flex-col items-start">
                          <span className="text-sm sm:text-base">Start Daily Challenge</span>
                          <span className="text-xs text-yellow-200/70">
                            {dailyStreak > 0 ? `${dailyStreak} day streak • ` : ""}
                            {dailyChallenge.estimatedTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tutorial Section */}
          <motion.div className="mt-4 mb-6 sm:mb-8 md:mb-10 text-center" variants={itemVariants}>
            <div className="bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-blue-500/20 backdrop-blur-sm">
              <div className="flex flex-col sm:flexRow items-center justify-between gap-3">
                <div className="text-left">
                  <h4 className="text-white font-bold text-sm sm:text-base mb-1">Need Help Getting Started?</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Learn how to play Debug Quest with our tutorial</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowTutorial(true)}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-lg sm:rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 sm:gap-3"
                >
                  <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">How to play?</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
                
          {/* Progress Indicator - Daily Challenge ke liye */}
          {dailyChallengeCompleted && (
            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg sm:rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-green-400 font-bold text-sm sm:text-base">
                      🎉 Daily Challenge Complete!
                    </div>
                    <div className="text-gray-400 text-xs">
                      Come back tomorrow for a new challenge
                    </div>
                </div>
                </div>
                <div className="text-right">
                  <div className="text-yellow-400 font-bold text-sm sm:text-base">
                    +{dailyChallenge.xp + (dailyStreak > 0 ? dailyChallenge.streakBonus : 0)} XP
                  </div>
                  <div className="text-gray-400 text-xs">
                    Total earned today
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* User Progress Dashboard */}
          {userStats.total > 0 && (
            <motion.div className="mb-6 sm:mb-8 md:mb-10" variants={itemVariants}>
              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-400" />
                  Your Progress Dashboard
                </h2>
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                  {streak > 0 && (
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-xs sm:text-sm font-medium text-orange-300">
                      🔥 {streak} Day
                    </span>
                  )}
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-xs sm:text-sm font-medium text-cyan-300">
                    Level {Math.floor(score / 100) + 1}
                  </span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-green-400/30 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                  {[
                    { value: userStats.easy, label: "Easy Completed", color: "from-green-500/20 to-emerald-500/20", border: "border-green-500/30", text: "text-green-400" },
                    { value: userStats.medium, label: "Medium Completed", color: "from-yellow-500/20 to-amber-500/20", border: "border-yellow-500/30", text: "text-yellow-400" },
                    { value: userStats.hard, label: "Hard Completed", color: "from-red-500/20 to-pink-500/20", border: "border-red-500/30", text: "text-red-400" },
                    { value: `${userStats.percentage}%`, label: "Overall Progress", color: "from-blue-500/20 to-indigo-500/20", border: "border-blue-500/30", text: "text-blue-400" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03, y: -3 }}
                      className={`bg-gradient-to-br ${stat.color} border ${stat.border} rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 text-center backdrop-blur-sm`}
                    >
                      <div className={`text-xl sm:text-2xl md:text-3xl font-black ${stat.text}`}>{stat.value}</div>
                      <div className={`text-xs sm:text-sm mt-0.5 sm:mt-1 ${stat.text.replace('text-', 'text-')}300`}>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Recently Completed Section */}
                {recentlyCompleted.length > 0 && (
                  <div className="mt-4 sm:mt-5 md:mt-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                      Recently Completed
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                      {recentlyCompleted.map((level, index) => (
                        <motion.div
                          key={`recent-${level.id}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -3 }}
                          className="bg-gradient-to-br from-gray-900/40 to-gray-800/30 border border-green-500/20 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 group hover:border-green-500/40 transition-all"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${
                              level.difficulty === "Easy" ? "bg-green-500/20 text-green-400" :
                              level.difficulty === "Medium" ? "bg-yellow-500/20 text-yellow-400" :
                              "bg-red-500/20 text-red-400"
                            }`}>
                              {level.difficulty}
                            </span>
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 group-hover:scale-110 transition-transform" />
                          </div>
                          <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg mb-1 group-hover:text-green-300 transition-colors line-clamp-1">
                            {level.title}
                          </h4>
                          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400">
                            <span className="text-lg sm:text-xl">{iconsToUse[level.language] || "💻"}</span>
                            <span>{level.language}</span>
                            <span className="ml-auto text-xs bg-gray-800/50 px-1.5 sm:px-2 py-0.5 rounded">
                              {level.duration || "10-15 min"}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Enhanced Featured Challenges */}
          <motion.div className="mb-6 sm:mb-8 md:mb-10" variants={itemVariants}>
            <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400" />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center">
                    <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Featured Challenges</h2>
                  <p className="text-gray-400 text-xs sm:text-sm hidden sm:block">
                    Start with these popular challenges
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setScreen("all-levels")}
                className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 sm:gap-2"
              >
                View all
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {featuredChallenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 backdrop-blur-sm cursor-pointer overflow-hidden"
                  onClick={() => {
                    const levelIndex = LEVELS.findIndex(l => l.id === challenge.actualLevelId);
                    if (levelIndex !== -1) selectLevel(levelIndex);
                  }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r ${challenge.color} text-white text-xl sm:text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                        {challenge.icon}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className={`text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full mb-1 ${
                          challenge.difficulty === "Easy" ? "bg-green-500/20 text-green-400" :
                          challenge.difficulty === "Medium" ? "bg-yellow-500/20 text-yellow-400" :
                          "bg-red-500/20 text-red-400"
                        }`}>
                          {challenge.difficulty}
                        </span>
                        <div className="flex items-center gap-0.5">
                          <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-500" />
                          <span className="text-xs text-gray-400">{challenge.popularity}%</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-green-300 transition-colors line-clamp-1">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">Test your skills with this challenge</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                      {challenge.tags.map((tag, idx) => (
                        <span key={idx} className="px-1.5 sm:px-2 py-0.5 bg-gray-800/50 text-gray-300 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats footer */}
                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-700/30">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div className="text-lg sm:text-xl">{iconsToUse[challenge.language] || "💻"}</div>
                          <span className="text-xs sm:text-sm text-gray-300">{challenge.language}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                          <span className="text-xs sm:text-sm text-gray-400">{challenge.duration}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-400 font-bold text-sm sm:text-base md:text-lg">{challenge.xp} XP</div>
                        <div className="text-xs text-gray-500 hidden sm:block">{challenge.completionRate}% completed</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =============================================== */}
          {/* ENHANCED LANGUAGES SECTION - UPDATED VERSION HERE */
          /* =============================================== */}
          <motion.div 
            className="mb-6 sm:mb-8 md:mb-10"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-blue-500/30 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 backdrop-blur-sm shadow-2xl shadow-blue-500/5 relative overflow-hidden">
              
              {/* Background Glow Effect */}
              <div className="absolute top-0 right-0 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full -translate-y-20 sm:-translate-y-24 md:-translate-y-32 translate-x-20 sm:translate-x-24 md:translate-x-32 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full translate-y-20 sm:translate-y-24 md:translate-y-32 -translate-x-20 sm:-translate-x-24 md:-translate-x-32 animate-pulse delay-500" />
              
              {/* Header Section */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-4 sm:mb-6 md:mb-8 relative z-10">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center">
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 flex items-center gap-2 sm:gap-3">
                      Languages Mastery
                    </h2>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Master {Object.keys(languageStats).length} programming languages
                    </p>
                  </div>
                </div>
                
                {/* Mastery Progress */}
                <div className="hidden sm:block px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full">
                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Sparkles key={star} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-cyan-300">Master All Languages</span>
                  </div>
                </div>
              </div>

              {/* Languages Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3 md:gap-4 relative z-10">
                {Object.entries(languageStats)
                  .slice(0, 14)
                  .map(([lang, stats], index) => {
                    const completionRate = stats.total > 0 
                      ? Math.round((stats.completed / stats.total) * 100)
                      : 0;
                    
                    let progressColor = "from-blue-500 to-cyan-500";
                    let textColor = "text-blue-400";
                    let borderColor = "border-blue-500/30";
                    let glowColor = "shadow-blue-500/20";
                    
                    if (completionRate >= 80) {
                      progressColor = "from-green-500 to-emerald-500";
                      textColor = "text-green-400";
                      borderColor = "border-green-500/30";
                      glowColor = "shadow-green-500/20";
                    } else if (completionRate >= 50) {
                      progressColor = "from-yellow-500 to-amber-500";
                      textColor = "text-yellow-400";
                      borderColor = "border-yellow-500/30";
                      glowColor = "shadow-yellow-500/20";
                    } else if (completionRate >= 25) {
                      progressColor = "from-orange-500 to-red-500";
                      textColor = "text-orange-400";
                      borderColor = "border-orange-500/30";
                      glowColor = "shadow-orange-500/20";
                    }
                    
                    const isMastered = completionRate === 100;
                    
                    return (
                      <motion.div
                        key={lang}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: index * 0.05,
                          type: "spring",
                          stiffness: 200,
                          damping: 20
                        }}
                        whileHover={{ 
                          scale: 1.08, 
                          y: -5,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 15
                          }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 ${borderColor} rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 text-center backdrop-blur-sm cursor-pointer overflow-hidden transition-all duration-300 ${
                          isMastered ? `ring-1 sm:ring-2 ring-yellow-400/50 ${glowColor} shadow-lg` : ''
                        } hover:shadow-xl ${glowColor} hover:shadow-lg`}
                        onClick={() => openLanguageDetails(lang, stats)}
                      >
                        {/* Mastered Overlay Effect */}
                        {isMastered && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-orange-500/10 animate-pulse" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.15),transparent_70%)]"></div>
                          </>
                        )}
                        
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                        
                        <div className="relative z-10">
                          {/* Language Icon with Animation */}
                          <div className="relative mb-1.5 sm:mb-2 md:mb-3">
                            <div className={`text-2xl sm:text-3xl md:text-4xl mb-1.5 sm:mb-2 md:mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                              isMastered ? 'animate-bounce' : ''
                            }`}>
                              {iconsToUse[lang] || "📝"}
                            </div>
                            
                            {/* Mastered Badge */}
                            {isMastered && (
                              <div className="absolute -top-1 -right-1">
                                <div className="relative">
                                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full blur-sm animate-pulse"></div>
                                  <div className="relative bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-[8px] sm:text-xs font-bold px-1 sm:px-2 py-0.5 rounded-full flex items-center shadow-lg">
                                    <Crown className="w-2 h-2 sm:w-3 sm:h-3 mr-0.5" />
                                    <span className="hidden sm:inline">Mastered</span>
                                    <span className="sm:hidden">★</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* Language Name */}
                          <h3 className="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1 truncate group-hover:text-cyan-300 transition-colors">
                            {lang}
                          </h3>
                          
                          {/* Progress Count */}
                          <p className={`font-bold text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2 ${textColor}`}>
                            {stats.completed}/{stats.total}
                          </p>
                          
                          {/* Difficulty Dots */}
                          <div className="mb-2 sm:mb-3 flex justify-center gap-0.5 sm:gap-1">
                            {stats.easy > 0 && (
                              <div 
                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300" 
                                title={`${stats.easy} Easy`}
                              />
                            )}
                            {stats.medium > 0 && (
                              <div 
                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full group-hover:scale-125 transition-transform duration-300" 
                                title={`${stats.medium} Medium`}
                              />
                            )}
                            {stats.hard > 0 && (
                              <div 
                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full group-hover:scale-125 transition-transform duration-300" 
                                title={`${stats.hard} Hard`}
                              />
                            )}
                          </div>
                          
                          {/* Progress Bar with Animation */}
                          <div className="w-full bg-gray-700/50 h-1 sm:h-1.5 rounded-full overflow-hidden mb-1 group">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${completionRate}%` }}
                              transition={{ 
                                duration: 1, 
                                delay: index * 0.1,
                                ease: "easeOut"
                              }}
                              className={`h-full bg-gradient-to-r ${progressColor} rounded-full relative overflow-hidden`}
                            >
                              {/* Shimmer Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </motion.div>
                          </div>
                          
                          {/* Percentage and Action Button */}
                          <div className="flex justify-between items-center mt-1 sm:mt-2">
                            <p className="text-gray-500 text-xs font-medium">
                              {completionRate}%
                            </p>
                            
                            {!isMastered && stats.total > 0 && (
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const uncompletedLevels = LEVELS.filter((level, idx) => 
                                    level.language === lang && 
                                    !completedLevels.includes(idx)
                                  );
                                  
                                  if (uncompletedLevels.length > 0) {
                                    const levelIndex = LEVELS.findIndex(l => l.id === uncompletedLevels[0].id);
                                    selectLevel(levelIndex);
                                  }
                                }}
                                className="text-xs text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center gap-0.5 group/btn"
                              >
                                <span>Practice</span>
                                <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                              </button>
                            )}
                          </div>
                        </div>
                        
                        {/* Hover Gradient Border */}
                        <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl border border-transparent group-hover:border-blue-500/50 transition-all duration-300" />
                      </motion.div>
                    );
                  })}
              </div>
              
              {/* View All Languages Button */}
              {Object.keys(languageStats).length > 14 && (
                <div className="mt-4 sm:mt-5 md:mt-6 text-center relative z-10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setScreen("languages")}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-1.5 sm:py-2 md:py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 text-blue-300 rounded-lg sm:rounded-xl hover:border-blue-400/50 hover:text-blue-200 transition-all backdrop-blur-sm text-xs sm:text-sm group/btn2 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover/btn2:translate-x-full transition-transform duration-700" />
                    <span>View All {Object.keys(languageStats).length} Languages</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn2:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              )}

              {/* Stats Summary Footer */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700/30 flex flex-col sm:flex-row items-center justify-between gap-2 relative z-10">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-400 text-xs">Easy</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-400 text-xs">Medium</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-400 text-xs">Hard</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  {Object.values(languageStats).reduce((sum, stat) => sum + stat.total, 0)} total challenges
                </div>
              </div>
            </div>
          </motion.div>
          {/* =============================================== */}
          {/* END OF ENHANCED LANGUAGES SECTION */
          /* =============================================== */}

          {/* Enhanced Interview Prep Section */}
          <motion.div 
            className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 border border-blue-500/20 backdrop-blur-sm"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-5 md:mb-6">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-400 flex items-center gap-2 sm:gap-3">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                  Frontend Interview Prep
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">Ace your next interview with our comprehensive guide</p>
              </div>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-400 hidden md:block" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-4 sm:mb-5 md:mb-6">
              {[
                { value: "200+", label: "Interview Questions", desc: "With detailed answers", color: "text-blue-300", bg: "from-blue-900/30 to-blue-800/20" },
                { value: "6", label: "Categories", desc: "HTML, CSS, JS, React, DOM, Performance", color: "text-purple-300", bg: "from-purple-900/30 to-purple-800/20" },
                { value: "5", label: "Coding Problems", desc: "Common interview problems with solutions", color: "text-green-300", bg: "from-green-900/30 to-green-800/20" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className={`bg-gradient-to-br ${item.bg} border border-gray-700/30 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 backdrop-blur-sm`}
                >
                  <div className={`text-xl sm:text-2xl md:text-3xl font-black ${item.color}`}>{item.value}</div>
                  <div className="text-sm sm:text-base md:text-lg font-bold text-white mt-0.5 sm:mt-1">{item.label}</div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">{item.desc}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setScreen('interview')}
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg sm:rounded-xl md:rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 mx-auto group w-full sm:w-auto"
              >
                <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Start Interview Preparation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Enhanced Difficulty Selection */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8 md:mb-10" variants={itemVariants}>
            {difficultyOptions.map((diff, index) => {
              const completionRate = diff.count > 0 
                ? Math.round((diff.completed / diff.count) * 100)
                : 0;
              
              return (
                <motion.div
                  key={diff.level}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 backdrop-blur-sm"
                  style={{
                    boxShadow: `0 10px 30px -10px ${diff.glowColor}`,
                  }}
                  onClick={diff.onClick}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="text-3xl sm:text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                        {diff.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                          {diff.completed}/{diff.count}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400">challenges</div>
                      </div>
                    </div>
                    
                    <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 bg-gradient-to-r ${diff.color} bg-clip-text text-transparent`}>
                      {diff.level}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{diff.desc}</p>
                    
                    {/* Stats */}
                    <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
                      {diff.stats.map((stat, i) => (
                        <div key={i} className="flex-1 bg-gray-800/30 rounded-lg sm:rounded-xl p-2 text-center">
                          <div className="text-xs text-gray-500">{stat.label}</div>
                          <div className="text-sm font-semibold text-white">{stat.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4 sm:mb-5 md:mb-6">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Your Progress</span>
                        <span>{completionRate}%</span>
                      </div>
                      <div className="h-1.5 sm:h-2 bg-gray-800/50 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${diff.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={{ width: `${completionRate}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                        </motion.div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={diff.onClick}
                      className={`w-full bg-gradient-to-r ${diff.buttonColor} text-white py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-1.5 sm:gap-2 group/btn`}
                    >
                      <Play className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm sm:text-base">
                        {completionRate > 0 ? "Continue" : "Start"} {diff.level}
                      </span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Enhanced Main CTA */}
          <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startGame}
              className="relative w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white text-lg sm:text-xl md:text-2xl font-bold py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl sm:rounded-2xl hover:from-green-400 hover:via-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-2xl hover:shadow-green-500/40 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 font-mono group overflow-hidden"
              style={{
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="absolute top-0 left-0 w-3 sm:w-4 h-full bg-white/30 skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[400%] transition-transform duration-1000" />
              
              <div className="relative z-10 flex items-center gap-2 sm:gap-3 md:gap-4">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:w-7 group-hover:scale-110 transition-transform" />
                <span className="text-shadow-lg text-sm sm:text-base md:text-lg lg:text-xl">
                  {userStats.total > 0 ? "CONTINUE DEBUGGING QUEST" : "START DEBUGGING QUEST"}
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:w-7 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform" />
              </div>
              
              <div className="absolute bottom-1 right-2 sm:bottom-2 sm:right-4 text-[10px] sm:text-xs text-green-200/70">
                {userStats.total > 0 ? `${LEVELS.length - userStats.total} challenges remaining` : "Begin your journey"}
              </div>
            </motion.button>
          </motion.div>

          {/* Enhanced Quick Actions - Responsive Grid */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-10"
            variants={itemVariants}
          >
            {[
              // Quick action buttons can be added here if needed
            ].map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.button
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={action.onClick}
                  className={`relative bg-gradient-to-br ${action.color} border ${action.border} text-gray-200 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl ${action.hoverColor} transition-all flex flex-col items-center justify-center gap-1.5 sm:gap-2 md:gap-3 backdrop-blur-sm overflow-hidden group/action min-h-[70px] sm:min-h-[80px] md:min-h-[90px]`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover/action:translate-x-[100%] transition-transform duration-700" />
                  <div className="relative z-10">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover/action:scale-110 transition-transform" />
                  </div>
                  <span className="font-medium text-xs sm:text-sm md:text-sm group-hover/action:text-white transition-colors hidden sm:block">
                    {action.label}
                  </span>
                  <span className="font-medium text-xs sm:text-sm md:text-sm group-hover/action:text-white transition-colors sm:hidden">
                    {action.shortLabel}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Language Details Modal */}
      <AnimatePresence>
        {showLanguageModal && selectedLanguage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 sm:bg-black/80 flex items-center justify-center z-50 p-3 sm:p-4 backdrop-blur-sm sm:backdrop-blur-lg"
            onClick={() => setShowLanguageModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-blue-500/30 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 max-w-2xl w-full max-h-[80vh] sm:max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="text-3xl sm:text-4xl md:text-5xl">
                    {iconsToUse[selectedLanguage.lang] || "📝"}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{selectedLanguage.lang}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Programming Language</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowLanguageModal(false)}
                  className="p-1.5 sm:p-2 hover:bg-gray-800/50 rounded-lg sm:rounded-xl transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                {[
                  { value: selectedLanguage.stats.total, label: "Total", color: "text-blue-400" },
                  { value: selectedLanguage.stats.completed, label: "Completed", color: "text-green-400" },
                  { value: selectedLanguage.stats.medium, label: "Medium", color: "text-yellow-400" },
                  { value: selectedLanguage.stats.hard, label: "Hard", color: "text-red-400" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 text-center">
                    <div className={`text-lg sm:text-xl md:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-4">Challenges in {selectedLanguage.lang}</h4>
                {LEVELS.filter(level => level.language === selectedLanguage.lang)
                  .slice(0, 5)
                  .map((level, idx) => {
                    const isCompleted = completedLevels.includes(LEVELS.findIndex(l => l.id === level.id));
                    return (
                      <div 
                        key={idx}
                        className="flex items-center justify-between p-2 sm:p-3 bg-gray-800/30 rounded-lg sm:rounded-xl hover:bg-gray-800/50 transition-colors cursor-pointer"
                        onClick={() => {
                          const levelIndex = LEVELS.findIndex(l => l.id === level.id);
                          if (levelIndex !== -1) {
                            selectLevel(levelIndex);
                            setShowLanguageModal(false);
                          }
                        }}
                      >
                        <div className="flex-1">
                          <div className="font-medium text-white text-sm sm:text-base">{level.title}</div>
                          <div className="text-gray-400 text-xs sm:text-sm">{level.difficulty} • {level.duration || "10-15 min"}</div>
                        </div>
                        <div>
                          {isCompleted ? (
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                          ) : (
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
              
              <div className="flex flex-col sm:flexRow gap-2 sm:gap-3">
                <button
                  onClick={() => {
                    setScreen("all-levels");
                    setShowLanguageModal(false);
                  }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:opacity-90 transition-opacity text-sm sm:text-base"
                >
                  View All {selectedLanguage.lang} Challenges
                </button>
                <button
                  onClick={() => setShowLanguageModal(false)}
                  className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-700 text-gray-300 rounded-lg sm:rounded-xl hover:border-gray-600 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tutorial Modal */}
      {showTutorial && <TutorialModal onClose={() => setShowTutorial(false)} />}
    </div>
  );
};

export default HomeScreen;