// src/components/screens/InterviewScreen.jsx
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { interviewQuestions, categoryIcons } from '../../utils/interviewQuestions';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Code,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Copy,
  Volume2,
  Eye,
  EyeOff,
  ArrowLeft,
  Star,
  HelpCircle,
  Download,
  Upload,
  Clock,
  TrendingUp,
  Users,
  Brain,
  Zap,
  Sparkles,
  MessageSquare,
  Lightbulb,
  BarChart3,
  Timer,
  Play,
  Pause,
  RotateCcw,
  Trophy,
  Calendar,
  Check,
  X,
  Code2,
  Mic,
  MicOff,
  FileText,
  Moon,
  Sun,
  Share2,
  Activity,
  User,
  Users as UsersIcon,
  Briefcase,
  GraduationCap,
  Target,
  Award,
  Bookmark,
  DownloadCloud,
  UploadCloud,
  List,
  Grid
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InterviewScreen = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState({});
  const [bookmarked, setBookmarked] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [practiceMode, setPracticeMode] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [studyTimer, setStudyTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [interviewDate, setInterviewDate] = useState('');
  const [showInterviewModal, setShowInterviewModal] = useState(false);
  const [studyStreak, setStudyStreak] = useState(7);
  const [mockInterviewMode, setMockInterviewMode] = useState(false);
  const [currentMockQuestion, setCurrentMockQuestion] = useState(0);
  const [mockAnswers, setMockAnswers] = useState({});
  const [showMockFeedback, setShowMockFeedback] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [voiceMode, setVoiceMode] = useState(false);
  const [showTips, setShowTips] = useState(true);
  const [viewMode, setViewMode] = useState('list');
  const [selectedTags, setSelectedTags] = useState([]);
  const [showNotes, setShowNotes] = useState({});
  const [notes, setNotes] = useState({});
  const [autoSpeak, setAutoSpeak] = useState(false);
  const [pomodoroTimer, setPomodoroTimer] = useState(25 * 60);
  const [pomodoroActive, setPomodoroActive] = useState(false);
  const [breakTime, setBreakTime] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [achievements, setAchievements] = useState([]);
  const [showAchievements, setShowAchievements] = useState(false);
  const [analytics, setAnalytics] = useState({
    dailyProgress: [],
    accuracy: 0,
    avgTimePerQuestion: 0,
    weakAreas: []
  });
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [voiceRecording, setVoiceRecording] = useState(false);
  const [recordedAnswer, setRecordedAnswer] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all'); // NEW: Difficulty filter

  const searchRef = useRef(null);
  const speechRef = useRef(null);
  const recognitionRef = useRef(null);

  // Difficulty filter options
  const difficultyOptions = [
    { value: 'all', label: 'All Difficulties', color: 'text-gray-400' },
    { value: 'Easy', label: 'Easy', color: 'text-green-400' },
    { value: 'Medium', label: 'Medium', color: 'text-yellow-400' },
    { value: 'Hard', label: 'Hard', color: 'text-red-400' }
  ];

  // Initialize data structure
  const categories = interviewQuestions.categories || [
    { id: 'html', name: 'HTML', icon: Code },
    { id: 'css', name: 'CSS', icon: Code },
    { id: 'javascript', name: 'JavaScript', icon: Code2 },
    { id: 'react', name: 'React', icon: Code2 },
    { id: 'node', name: 'Node.js', icon: Code2 },
    { id: 'system', name: 'System Design', icon: Activity }
  ];

  // Get all questions
  const allQuestions = useMemo(() => {
    const questions = [];
    
    // Add fresher questions
    if (interviewQuestions.fresher) {
      questions.push(...interviewQuestions.fresher.map(q => ({ 
        ...q, 
        level: 'Fresher', 
        experience: 'fresher',
        difficulty: q.difficulty || 'Easy', // Default to Easy for fresher
        category: q.category || 'html'
      })));
    }
    
    // Add experienced questions
    if (interviewQuestions.experienced) {
      questions.push(...interviewQuestions.experienced.map(q => ({ 
        ...q, 
        level: 'Experienced', 
        experience: 'experienced',
        difficulty: q.difficulty || 'Medium', // Default to Medium for experienced
        category: q.category || 'html'
      })));
    }
    
    return questions;
  }, []);

  // Get coding problems
  const codingProblems = useMemo(() => {
    if (interviewQuestions.codingProblems) {
      return interviewQuestions.codingProblems.map(q => ({ 
        ...q, 
        level: 'Coding', 
        experience: 'coding',
        difficulty: q.difficulty || 'Medium', // Default to Medium for coding problems
        category: q.category || 'coding'
      }));
    }
    return [];
  }, []);

  // Get all tags
  const allTags = useMemo(() => {
    const tags = new Set();
    allQuestions.forEach(q => {
      if (q.tags) {
        q.tags.forEach(tag => tags.add(tag));
      }
    });
    codingProblems.forEach(q => {
      if (q.tags) {
        q.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags);
  }, [allQuestions, codingProblems]);

  // Filter questions by active tab
  const getQuestionsByTab = () => {
    switch (activeTab) {
      case 'fresher':
        return allQuestions.filter(q => q.experience === 'fresher');
      case 'experienced':
        return allQuestions.filter(q => q.experience === 'experienced');
      case 'coding':
        return codingProblems;
      case 'all':
      default:
        return [...allQuestions, ...codingProblems];
    }
  };

  // Filter questions based on filters
  const filteredQuestions = useMemo(() => {
    const questions = getQuestionsByTab();
    
    return questions.filter(q => {
      const matchesCategory = selectedCategory === 'all' || q.category === selectedCategory;
      const matchesLevel = selectedLevel === 'all' || q.level === selectedLevel;
      const matchesSearch = searchTerm === '' || 
        (q.question && q.question.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (q.tags && q.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) ||
        (q.answer && q.answer.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesTags = selectedTags.length === 0 || 
        (q.tags && selectedTags.some(tag => q.tags.includes(tag)));
      
      // ✅ Match selected difficulty
      const matchesSelectedDifficulty = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
      
      // ✅ Auto-filter based on active tab
      let matchesTabDifficulty = true;
      if (activeTab === 'experienced') {
        // For experienced tab, show only Medium and Hard questions
        matchesTabDifficulty = q.difficulty === 'Medium' || q.difficulty === 'Hard';
      } else if (activeTab === 'fresher') {
        // For fresher tab, show only Easy and Medium questions
        matchesTabDifficulty = q.difficulty === 'Easy' || q.difficulty === 'Medium';
      }
      // For 'coding' and 'all', show all difficulties
      
      return matchesCategory && matchesLevel && matchesSearch && matchesTags && matchesSelectedDifficulty && matchesTabDifficulty;
    });
  }, [allQuestions, codingProblems, selectedCategory, selectedLevel, selectedDifficulty, searchTerm, selectedTags, activeTab]);

  // Calculate statistics
  const stats = useMemo(() => {
    const totalQuestions = allQuestions.length + codingProblems.length;
    const completedQuestions = completed.length;
    
    // Calculate difficulty stats for each tab
    const fresherQuestions = allQuestions.filter(q => q.experience === 'fresher');
    const experiencedQuestions = allQuestions.filter(q => q.experience === 'experienced');
    
    return {
      total: totalQuestions,
      bookmarked: bookmarked.length,
      completed: completedQuestions,
      fresher: fresherQuestions.length,
      experienced: experiencedQuestions.length,
      coding: codingProblems.length,
      fresherCompleted: completed.filter(id => 
        allQuestions.find(q => q.id === id && q.experience === 'fresher')
      ).length,
      experiencedCompleted: completed.filter(id => 
        allQuestions.find(q => q.id === id && q.experience === 'experienced')
      ).length,
      codingCompleted: completed.filter(id => 
        codingProblems.find(q => q.id === id)
      ).length,
      
      // Difficulty stats for fresher
      fresherEasy: fresherQuestions.filter(q => q.difficulty === 'Easy').length,
      fresherMedium: fresherQuestions.filter(q => q.difficulty === 'Medium').length,
      fresherHard: fresherQuestions.filter(q => q.difficulty === 'Hard').length,
      
      // Difficulty stats for experienced
      experiencedEasy: experiencedQuestions.filter(q => q.difficulty === 'Easy').length,
      experiencedMedium: experiencedQuestions.filter(q => q.difficulty === 'Medium').length,
      experiencedHard: experiencedQuestions.filter(q => q.difficulty === 'Hard').length,
      
      // Overall stats
      completionPercentage: totalQuestions > 0 ? Math.round((completedQuestions / totalQuestions) * 100) : 0,
      accuracy: completedQuestions > 0 ? Math.floor(Math.random() * 30) + 70 : 0,
      avgTime: completedQuestions > 0 ? Math.floor(studyTimer / completedQuestions) : 0
    };
  }, [allQuestions, codingProblems, completed, bookmarked, studyTimer]);

  // Calculate category statistics
  const categoryStats = useMemo(() => {
    const stats = {};
    categories.forEach(category => {
      const categoryQuestions = allQuestions.filter(q => q.category === category.id);
      const completedCount = completed.filter(id => 
        categoryQuestions.some(q => q.id === id)
      ).length;
      stats[category.id] = {
        total: categoryQuestions.length,
        completed: completedCount,
        percentage: categoryQuestions.length > 0 ? Math.round((completedCount / categoryQuestions.length) * 100) : 0
      };
    });
    return stats;
  }, [allQuestions, completed, categories]);

  // Initialize
  useEffect(() => {
    const savedBookmarked = localStorage.getItem('interviewBookmarked');
    const savedCompleted = localStorage.getItem('interviewCompleted');
    const savedTimer = localStorage.getItem('studyTimer');
    const savedNotes = localStorage.getItem('interviewNotes');
    const savedStreak = localStorage.getItem('studyStreak');
    const savedAchievements = localStorage.getItem('interviewAchievements');
    
    if (savedBookmarked) setBookmarked(JSON.parse(savedBookmarked));
    if (savedCompleted) setCompleted(JSON.parse(savedCompleted));
    if (savedTimer) setStudyTimer(parseInt(savedTimer));
    if (savedNotes) setNotes(JSON.parse(savedNotes));
    if (savedStreak) setStudyStreak(parseInt(savedStreak));
    if (savedAchievements) setAchievements(JSON.parse(savedAchievements));
    
    if ('webkitSpeechRecognition' in window) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setRecordedAnswer(transcript);
      };
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('interviewBookmarked', JSON.stringify(bookmarked));
    localStorage.setItem('interviewCompleted', JSON.stringify(completed));
    localStorage.setItem('studyTimer', studyTimer.toString());
    localStorage.setItem('interviewNotes', JSON.stringify(notes));
    localStorage.setItem('studyStreak', studyStreak.toString());
    localStorage.setItem('interviewAchievements', JSON.stringify(achievements));
  }, [bookmarked, completed, studyTimer, notes, studyStreak, achievements]);

  // Study timer effect
  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => {
        setStudyTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  // Pomodoro timer effect
  useEffect(() => {
    let interval;
    if (pomodoroActive && !breakTime) {
      interval = setInterval(() => {
        setPomodoroTimer(prev => {
          if (prev <= 1) {
            setBreakTime(true);
            setPomodoroTimer(5 * 60);
            unlockAchievement('POMODORO_MASTER');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (pomodoroActive && breakTime) {
      interval = setInterval(() => {
        setPomodoroTimer(prev => {
          if (prev <= 1) {
            setBreakTime(false);
            setPomodoroTimer(25 * 60);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [pomodoroActive, breakTime]);

  // Achievement system
  const achievementMap = {
    'FIRST_QUESTION': { id: 'FIRST_QUESTION', title: 'First Step', desc: 'Completed your first question', icon: '🚀', points: 10 },
    'STREAK_7': { id: 'STREAK_7', title: 'Week Warrior', desc: '7-day study streak', icon: '🔥', points: 50 },
    'PERFECT_SCORE': { id: 'PERFECT_SCORE', title: 'Perfect Score', desc: '100% on a mock interview', icon: '💯', points: 100 },
    'BOOKMARK_KING': { id: 'BOOKMARK_KING', title: 'Bookmark King', desc: 'Bookmarked 50+ questions', icon: '⭐', points: 30 },
    'POMODORO_MASTER': { id: 'POMODORO_MASTER', title: 'Pomodoro Master', desc: 'Completed a Pomodoro session', icon: '⏰', points: 20 },
    'FRESHER_MASTER': { id: 'FRESHER_MASTER', title: 'Fresher Pro', desc: 'Completed all fresher questions', icon: '🎓', points: 150 },
    'EXPERT_MASTER': { id: 'EXPERT_MASTER', title: 'Expert Level', desc: 'Completed all experienced questions', icon: '💼', points: 250 }
  };

  const unlockAchievement = (achievementId) => {
    if (!achievements.includes(achievementId) && achievementMap[achievementId]) {
      setAchievements(prev => [...prev, achievementId]);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  // Bookmark toggle
  const toggleBookmark = (questionId) => {
    setBookmarked(prev => {
      const newBookmarked = prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId];
      
      if (newBookmarked.length >= 50 && !achievements.includes('BOOKMARK_KING')) {
        unlockAchievement('BOOKMARK_KING');
      }
      
      return newBookmarked;
    });
  };

  // Complete toggle
  const toggleCompleted = (questionId) => {
    setCompleted(prev => {
      const newCompleted = prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId];
      
      if (newCompleted.length === 1 && !achievements.includes('FIRST_QUESTION')) {
        unlockAchievement('FIRST_QUESTION');
      }
      
      const fresherCompleted = newCompleted.filter(id => 
        allQuestions.find(q => q.id === id && q.experience === 'fresher')
      ).length;
      
      const experiencedCompleted = newCompleted.filter(id => 
        allQuestions.find(q => q.id === id && q.experience === 'experienced')
      ).length;
      
      if (fresherCompleted === allQuestions.filter(q => q.experience === 'fresher').length && !achievements.includes('FRESHER_MASTER')) {
        unlockAchievement('FRESHER_MASTER');
      }
      
      if (experiencedCompleted === allQuestions.filter(q => q.experience === 'experienced').length && !achievements.includes('EXPERT_MASTER')) {
        unlockAchievement('EXPERT_MASTER');
      }
      
      return newCompleted;
    });
  };

  // Time formatting
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatPomodoroTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Text-to-speech functions
  const readQuestion = (text) => {
    if ('speechSynthesis' in window && text) {
      window.speechSynthesis.cancel();
      const speech = new SpeechSynthesisUtterance(text);
      speech.rate = 1;
      speech.pitch = 1;
      speech.volume = 1;
      window.speechSynthesis.speak(speech);
    }
  };

  const readAnswer = (text) => {
    if ('speechSynthesis' in window && text) {
      window.speechSynthesis.cancel();
      const speech = new SpeechSynthesisUtterance(text);
      speech.rate = 1;
      speech.pitch = 1;
      speech.volume = 1;
      window.speechSynthesis.speak(speech);
    }
  };

  // Voice recording
  const startVoiceRecording = () => {
    if (recognitionRef.current) {
      setVoiceRecording(true);
      recognitionRef.current.start();
    }
  };

  const stopVoiceRecording = () => {
    if (recognitionRef.current) {
      setVoiceRecording(false);
      recognitionRef.current.stop();
    }
  };

  // Copy to clipboard
  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Export/import progress
  const exportProgress = () => {
    const data = {
      bookmarked,
      completed,
      studyTimer,
      notes,
      achievements,
      exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `interview-prep-progress-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importProgress = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (data.bookmarked) setBookmarked(data.bookmarked);
          if (data.completed) setCompleted(data.completed);
          if (data.studyTimer) setStudyTimer(data.studyTimer);
          if (data.notes) setNotes(data.notes);
          if (data.achievements) setAchievements(data.achievements);
          alert('Progress imported successfully!');
        } catch (err) {
          alert('Failed to import progress. Invalid file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  // Mock interview functions
  const startMockInterview = () => {
    setMockInterviewMode(true);
    setCurrentMockQuestion(0);
    setMockAnswers({});
    setShowMockFeedback(false);
    setStudyStreak(prev => prev + 1);
    localStorage.setItem('lastStudyDate', new Date().toDateString());
  };

  const handleMockAnswer = (questionId, answer) => {
    setMockAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const nextMockQuestion = () => {
    if (currentMockQuestion < filteredQuestions.length - 1) {
      setCurrentMockQuestion(prev => prev + 1);
    } else {
      setShowMockFeedback(true);
      const score = getMockScore();
      if (score === 100 && !achievements.includes('PERFECT_SCORE')) {
        unlockAchievement('PERFECT_SCORE');
      }
    }
  };

  const getMockScore = () => {
    const total = filteredQuestions.length;
    const answered = Object.keys(mockAnswers).length;
    return total > 0 ? Math.round((answered / total) * 100) : 0;
  };

  // Note management
  const toggleNote = (questionId) => {
    setShowNotes(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const saveNote = (questionId, note) => {
    setNotes(prev => ({
      ...prev,
      [questionId]: note
    }));
  };

  // Tag management
  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Share progress
  const shareProgress = () => {
    const text = `🚀 I've completed ${stats.completed}/${stats.total} interview questions with ${stats.completionPercentage}% progress on Debug Quest!`;
    if (navigator.share) {
      navigator.share({
        title: 'My Interview Prep Progress',
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Progress copied to clipboard! Share it with your friends.');
    }
  };

  // Get category icon
  const getCategoryIconForDisplay = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    if (category && category.icon) {
      const IconComponent = category.icon;
      return <IconComponent className="w-5 h-5" />;
    }
    return <Code2 className="w-5 h-5" />;
  };

  // Confetti component
  const Confetti = () => (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            rotate: 0,
            opacity: 1
          }}
          animate={{
            y: window.innerHeight + 20,
            rotate: 360,
            opacity: 0
          }}
          transition={{
            duration: 2 + Math.random(),
            ease: "linear"
          }}
          style={{
            backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'][Math.floor(Math.random() * 6)]
          }}
        />
      ))}
    </div>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100'} p-4 transition-colors duration-300`}>
      <AnimatePresence>
        {showConfetti && <Confetti />}
      </AnimatePresence>

      {/* Achievements Modal */}
      <AnimatePresence>
        {showAchievements && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setShowAchievements(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto`}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  Your Achievements
                </h3>
                <button
                  onClick={() => setShowAchievements(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map(achievement => (
                  <div key={achievement} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <div className="text-2xl mb-2">{achievementMap[achievement]?.icon || '🎉'}</div>
                    <div className="font-bold">{achievementMap[achievement]?.title || achievement}</div>
                    <div className="text-sm text-gray-400 mt-1">{achievementMap[achievement]?.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start mb-6">
            <button
              onClick={onBack}
              className={`flex items-center gap-2 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors group`}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Debug Quest
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                title="Toggle Theme"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setVoiceMode(!voiceMode)}
                className={`p-2 rounded-lg ${voiceMode ? 'bg-blue-500/20 text-blue-400' : darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                title="Voice Mode"
              >
                {voiceMode ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setShowAchievements(true)}
                className="p-2 rounded-lg bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 transition-colors"
                title="Achievements"
              >
                <Trophy className="w-5 h-5" />
              </button>
              <button
                onClick={shareProgress}
                className="p-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors"
                title="Share Progress"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20' : 'bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50'} rounded-2xl p-8 border ${darkMode ? 'border-purple-500/20' : 'border-purple-200'} mb-8`}>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className={`text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`}>
                      Frontend Interview Prep
                    </h1>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Master {stats.total}+ questions for fresher to experienced level interviews
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <div className={`flex items-center gap-2 px-3 py-1.5 ${darkMode ? 'bg-green-500/20 border-green-500/30' : 'bg-green-100 border-green-200'} border rounded-full`}>
                    <GraduationCap className="w-3 h-3" />
                    <span className="text-sm">{stats.fresher} Fresher Questions</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1.5 ${darkMode ? 'bg-purple-500/20 border-purple-500/30' : 'bg-purple-100 border-purple-200'} border rounded-full`}>
                    <Briefcase className="w-3 h-3" />
                    <span className="text-sm">{stats.experienced} Experienced Questions</span>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1.5 ${darkMode ? 'bg-blue-500/20 border-blue-500/30' : 'bg-blue-100 border-blue-200'} border rounded-full`}>
                    <Code2 className="w-3 h-3" />
                    <span className="text-sm">{stats.coding} Coding Problems</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className={`text-center px-6 py-4 ${darkMode ? 'bg-gray-800/50 border-gray-700/30' : 'bg-white/50 border-gray-200'} border rounded-xl`}>
                  <div className="text-2xl font-bold">{stats.total}</div>
                  <div className={darkMode ? 'text-sm text-gray-400' : 'text-sm text-gray-600'}>Total Qs</div>
                </div>
                <div className={`text-center px-6 py-4 ${darkMode ? 'bg-gray-800/50 border-gray-700/30' : 'bg-white/50 border-gray-200'} border rounded-xl`}>
                  <div className="text-2xl font-bold text-yellow-400">{stats.bookmarked}</div>
                  <div className={darkMode ? 'text-sm text-gray-400' : 'text-sm text-gray-600'}>Bookmarked</div>
                </div>
                <div className={`text-center px-6 py-4 ${darkMode ? 'bg-gray-800/50 border-gray-700/30' : 'bg-white/50 border-gray-200'} border rounded-xl`}>
                  <div className="text-2xl font-bold text-green-400">{stats.completed}</div>
                  <div className={darkMode ? 'text-sm text-gray-400' : 'text-sm text-gray-600'}>Completed</div>
                </div>
                <div className={`text-center px-6 py-4 ${darkMode ? 'bg-gray-800/50 border-gray-700/30' : 'bg-white/50 border-gray-200'} border rounded-xl`}>
                  <div className="text-2xl font-bold">{stats.completionPercentage}%</div>
                  <div className={darkMode ? 'text-sm text-gray-400' : 'text-sm text-gray-600'}>Progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Experience Level Tabs */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 border ${darkMode ? 'border-gray-700/30' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <UsersIcon className="w-5 h-5" />
                Experience Level
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeTab === 'all'
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                      : darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5" />
                    <span>All Questions</span>
                    <span className={`ml-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stats.total}</span>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveTab('fresher')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeTab === 'fresher'
                      ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30'
                      : darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-green-400" />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span>Fresher Level</span>
                        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {stats.fresherCompleted}/{stats.fresher}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Easy: {stats.fresherEasy} • Medium: {stats.fresherMedium}
                      </div>
                      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden mt-1">
                        <div 
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                          style={{ width: `${stats.fresher > 0 ? Math.round((stats.fresherCompleted / stats.fresher) * 100) : 0}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('experienced')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeTab === 'experienced'
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30'
                      : darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span>Experienced Level</span>
                        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {stats.experiencedCompleted}/{stats.experienced}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Medium: {stats.experiencedMedium} • Hard: {stats.experiencedHard}
                      </div>
                      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden mt-1">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          style={{ width: `${stats.experienced > 0 ? Math.round((stats.experiencedCompleted / stats.experienced) * 100) : 0}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('coding')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeTab === 'coding'
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30'
                      : darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-cyan-400" />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span>Coding Problems</span>
                        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {stats.codingCompleted}/{stats.coding}
                        </span>
                      </div>
                      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden mt-1">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          style={{ width: `${stats.coding > 0 ? Math.round((stats.codingCompleted / stats.coding) * 100) : 0}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 border ${darkMode ? 'border-gray-700/30' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <Target className="w-5 h-5" />
                Difficulty Filter
              </h3>
              <div className="space-y-2">
                {difficultyOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedDifficulty(option.value)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedDifficulty === option.value
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                        : darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        option.value === 'Easy' ? 'bg-green-500' :
                        option.value === 'Medium' ? 'bg-yellow-500' :
                        option.value === 'Hard' ? 'bg-red-500' :
                        'bg-gray-500'
                      }`} />
                      <span className={option.color}>{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Pomodoro Timer */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 border ${darkMode ? 'border-gray-700/30' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-bold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Timer className="w-5 h-5 text-red-400" />
                  Pomodoro Timer
                </h3>
                <button
                  onClick={() => setPomodoroActive(!pomodoroActive)}
                  className={`p-2 ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'} rounded-lg transition-colors`}
                >
                  {pomodoroActive ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="text-center mb-4">
                <div className={`text-4xl font-bold font-mono mb-2 ${
                  breakTime ? 'text-green-400' : 'text-red-400'
                }`}>
                  {formatPomodoroTime(pomodoroTimer)}
                </div>
                <div className={`text-sm ${breakTime ? 'text-green-400' : 'text-red-400'}`}>
                  {breakTime ? 'Break Time 🎉' : 'Focus Time 🎯'}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setBreakTime(false);
                    setPomodoroTimer(25 * 60);
                  }}
                  className="flex-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors flex items-center justify-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
                <button
                  onClick={() => setPomodoroActive(!pomodoroActive)}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-center gap-1 ${
                    pomodoroActive
                      ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                      : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                  }`}
                >
                  {pomodoroActive ? 'Pause' : 'Start'}
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 border ${darkMode ? 'border-gray-700/30' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <Filter className="w-5 h-5" />
                Categories
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                      : darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5" />
                    <span>All Categories</span>
                  </div>
                </button>
                
                {categories.map(category => {
                  const IconComponent = category.icon || Code2;
                  const categoryStat = categoryStats[category.id] || { total: 0, completed: 0, percentage: 0 };
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                          : darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {IconComponent && <IconComponent className="w-5 h-5" />}
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span>{category.name}</span>
                            <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {categoryStat.completed}/{categoryStat.total}
                            </span>
                          </div>
                          {categoryStat && (
                            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden mt-1">
                              <div 
                                className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                                style={{ width: `${categoryStat.percentage}%` }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 border ${darkMode ? 'border-gray-700/30' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={startMockInterview}
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-90 rounded-lg transition-opacity flex items-center justify-center gap-2 text-white"
                >
                  <MessageSquare className="w-4 h-4" />
                  Start Mock Interview
                </button>
                <button
                  onClick={exportProgress}
                  className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export Progress
                </button>
                <label className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  <Upload className="w-4 h-4" />
                  Import Progress
                  <input
                    type="file"
                    accept=".json"
                    onChange={importProgress}
                    className="hidden"
                  />
                </label>
                <button
                  onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
                  className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {viewMode === 'list' ? <Grid className="w-4 h-4" /> : <List className="w-4 h-4" />}
                  {viewMode === 'list' ? 'Grid View' : 'List View'}
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Search and Filter Bar */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 border ${darkMode ? 'border-gray-700/30' : 'border-gray-200'} mb-6`}>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search questions, answers, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500`}
                  />
                </div>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setPracticeMode(!practiceMode)}
                    className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                      practiceMode
                        ? 'bg-purple-500 hover:bg-purple-600 text-white'
                        : darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                    {practiceMode ? 'Practice Mode' : 'Study Mode'}
                  </button>
                  <button
                    onClick={() => setShowTips(!showTips)}
                    className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors`}
                    title="Toggle Tips"
                  >
                    <Lightbulb className={`w-5 h-5 ${showTips ? 'text-yellow-400' : darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Questions Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  {activeTab === 'fresher' ? 'Fresher Level Questions' :
                   activeTab === 'experienced' ? 'Experienced Level Questions' :
                   activeTab === 'coding' ? 'Coding Problems' :
                   'All Interview Questions'} ({filteredQuestions.length})
                </h2>
                <p className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {activeTab === 'fresher' ? 'Perfect for entry-level positions and internships • Focus on Easy & Medium difficulty' :
                   activeTab === 'experienced' ? 'Advanced questions for senior roles • Medium & Hard difficulty questions only' :
                   activeTab === 'coding' ? 'Hands-on coding challenges and algorithmic problems' :
                   'Complete collection for all experience levels'}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {activeTab === 'fresher' && `${stats.fresherCompleted}/${stats.fresher} completed`}
                  {activeTab === 'experienced' && `${stats.experiencedCompleted}/${stats.experienced} completed`}
                  {activeTab === 'coding' && `${stats.codingCompleted}/${stats.coding} completed`}
                  {activeTab === 'all' && `${stats.completed}/${stats.total} completed`}
                </div>
                <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${activeTab === 'fresher' ? (stats.fresher > 0 ? Math.round((stats.fresherCompleted / stats.fresher) * 100) : 0) :
                              activeTab === 'experienced' ? (stats.experienced > 0 ? Math.round((stats.experiencedCompleted / stats.experienced) * 100) : 0) :
                              activeTab === 'coding' ? (stats.coding > 0 ? Math.round((stats.codingCompleted / stats.coding) * 100) : 0) :
                              stats.completionPercentage}%` 
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Experience Level Tips */}
            {showTips && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`${
                  activeTab === 'fresher' ? 
                    `${darkMode ? 'bg-gradient-to-r from-green-900/20 to-emerald-900/20' : 'bg-gradient-to-r from-green-100 to-emerald-100'} border ${darkMode ? 'border-green-500/20' : 'border-green-200'}` :
                  activeTab === 'experienced' ?
                    `${darkMode ? 'bg-gradient-to-r from-purple-900/20 to-pink-900/20' : 'bg-gradient-to-r from-purple-100 to-pink-100'} border ${darkMode ? 'border-purple-500/20' : 'border-purple-200'}` :
                  activeTab === 'coding' ?
                    `${darkMode ? 'bg-gradient-to-r from-cyan-900/20 to-blue-900/20' : 'bg-gradient-to-r from-cyan-100 to-blue-100'} border ${darkMode ? 'border-cyan-500/20' : 'border-cyan-200'}` :
                    `${darkMode ? 'bg-gradient-to-r from-yellow-900/20 to-amber-900/20' : 'bg-gradient-to-r from-yellow-100 to-amber-100'} border ${darkMode ? 'border-yellow-500/20' : 'border-yellow-200'}`
                } rounded-2xl p-6 mb-6`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {activeTab === 'fresher' ? <GraduationCap className="w-6 h-6 text-green-400" /> :
                   activeTab === 'experienced' ? <Briefcase className="w-6 h-6 text-purple-400" /> :
                   activeTab === 'coding' ? <Code2 className="w-6 h-6 text-cyan-400" /> :
                   <Lightbulb className="w-6 h-6 text-yellow-500" />}
                  <h3 className="text-lg font-bold">
                    {activeTab === 'fresher' ? 'Fresher Level Tips' :
                     activeTab === 'experienced' ? 'Experienced Level Tips' :
                     activeTab === 'coding' ? 'Coding Practice Tips' :
                     'Interview Preparation Tips'}
                  </h3>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {activeTab === 'fresher' ? 
                    "Focus on fundamentals! Fresher interviews test your understanding of core concepts. Practice explaining basic concepts clearly and build small projects to demonstrate your skills. Expect mostly Easy and some Medium difficulty questions." :
                   activeTab === 'experienced' ?
                    "Highlight your expertise! Experienced roles require deep knowledge. Prepare for system design questions, architectural decisions, and leadership scenarios. You'll face Medium to Hard difficulty questions testing your practical experience." :
                   activeTab === 'coding' ?
                    "Practice makes perfect! Solve coding problems daily, analyze time/space complexity, and learn to optimize your solutions. Use platforms like LeetCode for regular practice. Focus on algorithm efficiency and clean code." :
                    "Mix fundamentals with advanced concepts! Cover all bases from basic HTML/CSS to complex system design. Practice mock interviews regularly. Tailor your preparation based on the company and role level."}
                </p>
                
                {/* ✅ NEW: Difficulty Stats */}
                <div className="mt-4 p-4 bg-black/20 rounded-lg">
                  <h4 className={`font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {activeTab === 'fresher' ? 'Fresher Difficulty Distribution:' :
                     activeTab === 'experienced' ? 'Experienced Difficulty Distribution:' :
                     activeTab === 'coding' ? 'Coding Problems:' :
                     'All Questions:'}
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {activeTab === 'fresher' && (
                      <>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm">Easy: {stats.fresherEasy} questions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-sm">Medium: {stats.fresherMedium} questions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-sm">Hard: {stats.fresherHard} questions</span>
                        </div>
                      </>
                    )}
                    {activeTab === 'experienced' && (
                      <>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-sm">Medium: {stats.experiencedMedium} questions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-sm">Hard: {stats.experiencedHard} questions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-500">Easy: {stats.experiencedEasy} (hidden)</span>
                        </div>
                      </>
                    )}
                    {activeTab === 'all' && (
                      <>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm">Easy: {stats.fresherEasy + stats.experiencedEasy} questions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-sm">Medium: {stats.fresherMedium + stats.experiencedMedium} questions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-sm">Hard: {stats.fresherHard + stats.experiencedHard} questions</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {mockInterviewMode ? (
              <div className="space-y-6">
                {/* Mock Interview UI */}
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 border ${darkMode ? 'border-gray-700/30' : 'border-gray-200'}`}>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Mock Interview Session</h2>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Question {currentMockQuestion + 1} of {filteredQuestions.length}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">{getMockScore()}%</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Current Score</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    {filteredQuestions[currentMockQuestion] && (
                      <>
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {getCategoryIconForDisplay(filteredQuestions[currentMockQuestion]?.category)}
                          </div>
                          <span className="font-semibold">
                            {filteredQuestions[currentMockQuestion]?.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">{filteredQuestions[currentMockQuestion]?.question}</h3>
                        
                        <div className="space-y-4">
                          <div className={`${darkMode ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-lg p-4`}>
                            <textarea
                              value={mockAnswers[filteredQuestions[currentMockQuestion]?.id] || ''}
                              onChange={(e) => handleMockAnswer(filteredQuestions[currentMockQuestion]?.id, e.target.value)}
                              placeholder="Type your answer here..."
                              className={`w-full h-32 ${darkMode ? 'bg-transparent text-gray-300' : 'bg-transparent text-gray-900'} border-none focus:outline-none resize-none`}
                            />
                          </div>
                          
                          <div className="flex justify-between">
                            <button
                              onClick={() => setShowMockFeedback(true)}
                              className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:opacity-90 transition-opacity text-white"
                            >
                              Submit Answer
                            </button>
                            <div className="flex gap-3">
                              <button
                                onClick={() => {
                                  if (currentMockQuestion > 0) {
                                    setCurrentMockQuestion(prev => prev - 1);
                                  }
                                }}
                                className={`px-4 py-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-colors`}
                              >
                                Previous
                              </button>
                              <button
                                onClick={nextMockQuestion}
                                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition-opacity text-white"
                              >
                                {currentMockQuestion === filteredQuestions.length - 1 ? 'Finish' : 'Next'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {showMockFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 border ${darkMode ? 'border-gray-700/30' : 'border-gray-200'}`}
                  >
                    <h3 className="text-2xl font-bold mb-6 text-center">
                      🎉 Mock Interview Completed!
                    </h3>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className={`text-center p-6 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-xl`}>
                        <div className="text-4xl font-bold text-green-400 mb-2">{getMockScore()}%</div>
                        <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Final Score</div>
                      </div>
                      <div className={`text-center p-6 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-xl`}>
                        <div className="text-4xl font-bold text-blue-400 mb-2">
                          {Object.keys(mockAnswers).length}/{filteredQuestions.length}
                        </div>
                        <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Questions Answered</div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => {
                          setMockInterviewMode(false);
                          setShowMockFeedback(false);
                        }}
                        className={`px-6 py-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-colors`}
                      >
                        Exit Mock Interview
                      </button>
                      <button
                        onClick={startMockInterview}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:opacity-90 transition-opacity text-white"
                      >
                        Restart Interview
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <>
                {filteredQuestions.length === 0 ? (
                  <div className="text-center py-12">
                    <HelpCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">No questions found</h3>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Try changing your filters or search term</p>
                  </div>
                ) : (
                  <div className={`space-y-4 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : ''}`}>
                    {filteredQuestions.map((q) => (
                      <motion.div
                        key={q.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`${
                          q.experience === 'fresher' ? 
                            `${darkMode ? 'border-green-500/20 hover:border-green-500/40' : 'border-green-300 hover:border-green-400'}` :
                          q.experience === 'experienced' ?
                            `${darkMode ? 'border-purple-500/20 hover:border-purple-500/40' : 'border-purple-300 hover:border-purple-400'}` :
                            `${darkMode ? 'border-cyan-500/20 hover:border-cyan-500/40' : 'border-cyan-300 hover:border-cyan-400'}`
                        } ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800/80' : 'bg-white/50 hover:bg-white/80'} border rounded-xl p-6 transition-all cursor-pointer`}
                        onClick={() => {
                          setActiveQuestion(activeQuestion?.id === q.id ? null : q);
                          if (autoSpeak) {
                            readQuestion(q.question);
                          }
                        }}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-start gap-4 mb-4">
                              <div className={`p-3 ${
                                q.experience === 'fresher' ? 'bg-green-500/10' :
                                q.experience === 'experienced' ? 'bg-purple-500/10' :
                                'bg-cyan-500/10'
                              } rounded-lg flex items-center justify-center`}>
                                {q.experience === 'fresher' ? <GraduationCap className="w-6 h-6 text-green-400" /> :
                                 q.experience === 'experienced' ? <Briefcase className="w-6 h-6 text-purple-400" /> :
                                 <Code2 className="w-6 h-6 text-cyan-400" />}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{q.question}</h3>
                                  {completed.includes(q.id) && (
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                  )}
                                </div>
                                <div className="flex flex-wrap gap-2 mb-3">
                                  <span className={`px-2 py-1 text-xs rounded-full ${
                                    q.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                                    q.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                    'bg-red-500/20 text-red-400'
                                  }`}>
                                    {q.difficulty}
                                  </span>
                                  <span className={`px-2 py-1 text-xs ${
                                    q.experience === 'fresher' ? 'bg-green-500/20 text-green-300' :
                                    q.experience === 'experienced' ? 'bg-purple-500/20 text-purple-300' :
                                    'bg-cyan-500/20 text-cyan-300'
                                  } rounded-full`}>
                                    {q.level}
                                  </span>
                                  {q.category && (
                                    <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full">
                                      {categories.find(c => c.id === q.category)?.name || q.category}
                                    </span>
                                  )}
                                  {q.tags?.slice(0, 2).map(tag => (
                                    <span key={tag} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-full">
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Expanded Content */}
                            {activeQuestion?.id === q.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className={`mt-4 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                                  {/* Question Tools */}
                                  <div className="flex flex-wrap gap-2 mb-4">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        readQuestion(q.question);
                                      }}
                                      className={`px-3 py-1.5 rounded-lg flex items-center gap-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                                    >
                                      <Volume2 className="w-4 h-4" />
                                      Read Question
                                    </button>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        copyToClipboard(q.question, q.id);
                                      }}
                                      className={`px-3 py-1.5 rounded-lg flex items-center gap-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                                    >
                                      {copiedId === q.id ? (
                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                      ) : (
                                        <Copy className="w-4 h-4" />
                                      )}
                                      Copy Question
                                    </button>
                                    {voiceMode && (
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          voiceRecording ? stopVoiceRecording() : startVoiceRecording();
                                        }}
                                        className={`px-3 py-1.5 rounded-lg flex items-center gap-2 ${
                                          voiceRecording
                                            ? 'bg-red-500/20 text-red-400'
                                            : darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
                                        } transition-colors`}
                                      >
                                        {voiceRecording ? (
                                          <MicOff className="w-4 h-4" />
                                        ) : (
                                          <Mic className="w-4 h-4" />
                                        )}
                                        Record Answer
                                      </button>
                                    )}
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleNote(q.id);
                                      }}
                                      className={`px-3 py-1.5 rounded-lg flex items-center gap-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                                    >
                                      <FileText className="w-4 h-4" />
                                      Add Notes
                                    </button>
                                  </div>

                                  {/* Answer Section */}
                                  <div className="mb-6">
                                    <div className="flex justify-between items-center mb-4">
                                      <h4 className="font-bold text-lg flex items-center gap-2">
                                        <span className="text-blue-400">Answer</span>
                                        <div className="flex items-center gap-2">
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              readAnswer(q.answer);
                                            }}
                                            className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} flex items-center gap-1`}
                                            title="Read Answer Aloud"
                                          >
                                            <Volume2 className="w-4 h-4" />
                                            Read Answer
                                          </button>
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setShowAnswer(prev => ({
                                                ...prev,
                                                [q.id]: !prev[q.id]
                                              }));
                                            }}
                                            className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} flex items-center gap-1`}
                                          >
                                            {showAnswer[q.id] ? (
                                              <>
                                                <EyeOff className="w-4 h-4" />
                                                Hide Answer
                                              </>
                                            ) : (
                                              <>
                                                <Eye className="w-4 h-4" />
                                                Show Answer
                                              </>
                                            )}
                                          </button>
                                        </div>
                                      </h4>
                                    </div>

                                    {showAnswer[q.id] && (
                                      <div className={`${darkMode ? 'bg-gray-900/50' : 'bg-gray-100'} rounded-lg p-4 mb-4`}>
                                        <div className="flex justify-end mb-2">
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              copyToClipboard(q.answer, `answer-${q.id}`);
                                            }}
                                            className={`px-3 py-1 rounded-lg flex items-center gap-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                                          >
                                            {copiedId === `answer-${q.id}` ? (
                                              <CheckCircle className="w-4 h-4 text-green-400" />
                                            ) : (
                                              <Copy className="w-4 h-4" />
                                            )}
                                            Copy Answer
                                          </button>
                                        </div>
                                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>{q.answer}</p>
                                        {q.examples && (
                                          <div className="mt-4">
                                            <h5 className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Examples:</h5>
                                            <div className="space-y-2">
                                              {Array.isArray(q.examples) && q.examples.map((example, idx) => (
                                                <div key={idx} className={`text-sm ${darkMode ? 'text-gray-300 bg-gray-800/50' : 'text-gray-700 bg-gray-200'} p-2 rounded`}>
                                                  {example}
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    )}

                                    {/* Notes Section */}
                                    {showNotes[q.id] && (
                                      <div className="mb-4">
                                        <h5 className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Your Notes:</h5>
                                        <textarea
                                          value={notes[q.id] || ''}
                                          onChange={(e) => saveNote(q.id, e.target.value)}
                                          placeholder="Add your personal notes here..."
                                          className={`w-full h-32 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} rounded-lg p-3 focus:outline-none focus:border-blue-500`}
                                          onClick={(e) => e.stopPropagation()}
                                        />
                                      </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-2">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toggleBookmark(q.id);
                                        }}
                                        className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                                          bookmarked.includes(q.id)
                                            ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                                            : darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                      >
                                        <Star className={`w-4 h-4 ${bookmarked.includes(q.id) ? 'fill-current' : ''}`} />
                                        {bookmarked.includes(q.id) ? 'Bookmarked' : 'Bookmark'}
                                      </button>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toggleCompleted(q.id);
                                        }}
                                        className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                                          completed.includes(q.id)
                                            ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                                            : darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                      >
                                        <CheckCircle className="w-4 h-4" />
                                        {completed.includes(q.id) ? 'Completed' : 'Mark Complete'}
                                      </button>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          if (voiceMode) {
                                            alert('Practice answering this question out loud!');
                                          }
                                        }}
                                        className="px-4 py-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 rounded-lg transition-colors flex items-center gap-2"
                                      >
                                        <Mic className="w-4 h-4" />
                                        Practice Answer
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </div>
                          
                          {/* Quick Action Icons */}
                          <div className="flex flex-col items-center gap-2 ml-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleBookmark(q.id);
                              }}
                              className={`p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded-lg transition-colors`}
                            >
                              <Star className={`w-5 h-5 ${
                                bookmarked.includes(q.id)
                                  ? 'text-yellow-400 fill-current'
                                  : darkMode ? 'text-gray-500' : 'text-gray-400'
                              }`} />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveQuestion(activeQuestion?.id === q.id ? null : q);
                              }}
                              className={`p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} rounded-lg transition-colors`}
                            >
                              {activeQuestion?.id === q.id ? (
                                <ChevronUp className="w-5 h-5" />
                              ) : (
                                <ChevronDown className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Tips & Resources Section */}
            {!mockInterviewMode && (
              <div className="mt-12 space-y-6">
                <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900/20 to-cyan-900/20' : 'bg-gradient-to-r from-blue-50 to-cyan-50'} rounded-2xl p-8 border ${darkMode ? 'border-blue-500/20' : 'border-blue-200'}`}>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-yellow-400" />
                    Pro Tips & Resources
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className={`${darkMode ? 'bg-black/30' : 'bg-white/50'} rounded-xl p-6`}>
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                        <Award className="w-6 h-6 text-blue-400" />
                      </div>
                      <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Common Mistakes</h4>
                      <ul className={`text-sm space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          Not asking clarifying questions
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          Rushing to code without planning
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          Ignoring edge cases
                        </li>
                      </ul>
                    </div>
                    <div className={`${darkMode ? 'bg-black/30' : 'bg-white/50'} rounded-xl p-6`}>
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                        <Trophy className="w-6 h-6 text-purple-400" />
                      </div>
                      <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Success Strategies</h4>
                      <ul className={`text-sm space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Think aloud during problem solving
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Practice daily mock interviews
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Review company-specific questions
                        </li>
                      </ul>
                    </div>
                    <div className={`${darkMode ? 'bg-black/30' : 'bg-white/50'} rounded-xl p-6`}>
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-green-400" />
                      </div>
                      <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quick Resources</h4>
                      <ul className={`text-sm space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          LeetCode Daily Challenges
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          System Design Primer
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          Behavioral Questions Guide
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewScreen;