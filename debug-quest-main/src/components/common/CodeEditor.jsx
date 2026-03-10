import React, { useState, useEffect, useRef } from "react";
import { 
  AlertCircle,
  Type,
  ChevronDown,
  ChevronUp,
  Terminal,
  Settings,
  Zap,
  Brain,
  Sparkles,
  Shield,
  Globe,
  GitBranch,
  Lock,
  Wifi,
  BatteryCharging,
  Clock,
  Hash,
  FileCode,
  Layers,
  Code2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CodeEditor = ({ 
  code, 
  onChange, 
  language = "javascript", 
  bugLine, 
  initialCode,
  onSave,
  readOnly = false,
  showLineNumbers = true,
  showMinimap = false,
  autoComplete = true,
  showSuggestions = false
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [theme, setTheme] = useState('dark');
  const [lineCount, setLineCount] = useState(1);
  const [cursorPosition, setCursorPosition] = useState({ line: 1, col: 1 });
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const [isMinimized, setIsMinimized] = useState(false);
 
  const [autoSave, setAutoSave] = useState(true);
  const [lastSaved, setLastSaved] = useState(new Date());
  const [isConnected, setIsConnected] = useState(true);
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [terminalOutput, setTerminalOutput] = useState('');
  const [activeTab, setActiveTab] = useState('code');
  const [suggestions, setSuggestions] = useState([]);
  const [aiPrompt, setAiPrompt] = useState('');
  
  const textareaRef = useRef(null);
  const editorRef = useRef(null);
  
  useEffect(() => {
    const lines = code.split('\n').length;
    setLineCount(lines);
    
    const words = code.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
    setCharCount(code.length);
    
    if (autoSave && code !== initialCode) {
      const saveTimeout = setTimeout(() => {
        if (onSave) onSave(code);
        setLastSaved(new Date());
      }, 2000);
      return () => clearTimeout(saveTimeout);
    }
  }, [code, autoSave, initialCode, onSave]);
  
  useEffect(() => {
    const networkInterval = setInterval(() => {
      setIsConnected(navigator.onLine);
    }, 5000);
    
    const batteryInterval = setInterval(() => {
      setBatteryLevel(prev => {
        if (prev <= 5) return 100;
        return Math.max(5, prev - 0.5);
      });
    }, 10000);
    
    return () => {
      clearInterval(networkInterval);
      clearInterval(batteryInterval);
    };
  }, []);
  
  const handleCursorChange = (e) => {
    const textarea = e.target;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    setSelection({ start, end });
    
    const textBeforeCursor = textarea.value.substring(0, start);
    const lines = textBeforeCursor.split('\n');
    const line = lines.length;
    const col = lines[lines.length - 1].length + 1;
    setCursorPosition({ line, col });
    
    if (autoComplete && line > 0) {
      const currentLine = lines[lines.length - 1];
      if (currentLine.trim().length > 0) {
        generateSuggestions(currentLine);
      }
    }
  };
  
  const generateSuggestions = (currentLine) => {
    const commonKeywords = {
      javascript: ['function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while'],
      python: ['def', 'class', 'import', 'from', 'return', 'if', 'else', 'for', 'while'],
      html: ['<div>', '<span>', '<p>', '<h1>', '<input>', '<button>'],
      css: ['.container', '#id', 'margin', 'padding', 'color', 'background']
    };
    
    const langKeywords = commonKeywords[language.toLowerCase()] || [];
    const filtered = langKeywords.filter(keyword => 
      keyword.toLowerCase().includes(currentLine.toLowerCase().trim())
    );
    setSuggestions(filtered.slice(0, 5));
  };
  const handleAIHelp = () => {
    if (!aiPrompt.trim()) return;
    
    setTerminalOutput(prev => prev + `\n🤖 AI Assistant: Analyzing your code...\n`);
    
    setTimeout(() => {
      const suggestions = [
        "Consider adding error handling for edge cases",
        "This function could be optimized for better performance",
        "Add comments for complex logic sections",
        "Consider splitting this into smaller functions"
      ];
      const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
      setTerminalOutput(prev => prev + `💡 Suggestion: ${randomSuggestion}\n`);
    }, 1500);
  };
  
  const getFileExtension = () => {
    switch(language.toLowerCase()) {
      case 'javascript': return 'js';
      case 'python': return 'py';
      case 'html': return 'html';
      case 'css': return 'css';
      case 'java': return 'java';
      case 'typescript': return 'ts';
      case 'c++': return 'cpp';
      case 'rust': return 'rs';
      case 'go': return 'go';
      case 'ruby': return 'rb';
      case 'php': return 'php';
      case 'swift': return 'swift';
      case 'kotlin': return 'kt';
      case 'sql': return 'sql';
      default: return 'txt';
    }
  };
  
  const getLanguageColor = () => {
    switch(language.toLowerCase()) {
      case 'javascript': return 'text-yellow-400';
      case 'python': return 'text-blue-400';
      case 'html': return 'text-orange-400';
      case 'css': return 'text-purple-400';
      case 'java': return 'text-red-400';
      case 'typescript': return 'text-cyan-400';
      case 'c++': return 'text-indigo-400';
      case 'rust': return 'text-orange-500';
      case 'go': return 'text-cyan-500';
      case 'ruby': return 'text-pink-400';
      case 'php': return 'text-violet-400';
      case 'swift': return 'text-red-300';
      case 'kotlin': return 'text-purple-300';
      case 'sql': return 'text-green-400';
      default: return 'text-green-300';
    }
  };
  
  
  const themes = {
    dark: {
      name: 'Dark',
      bg: 'bg-gray-950',
      text: 'text-green-400',
      border: 'border-gray-700',
      focusBorder: 'focus:border-green-500',
      button: 'bg-gray-800'
    },
    dracula: {
      name: 'Dracula',
      bg: 'bg-[#282a36]',
      text: 'text-[#f8f8f2]',
      border: 'border-[#44475a]',
      focusBorder: 'focus:border-[#bd93f9]',
      button: 'bg-[#44475a]'
    },
    monokai: {
      name: 'Monokai',
      bg: 'bg-[#272822]',
      text: 'text-[#f8f8f2]',
      border: 'border-[#49483e]',
      focusBorder: 'focus:border-[#a6e22e]',
      button: 'bg-[#49483e]'
    },
    ocean: {
      name: 'Ocean',
      bg: 'bg-[#1b2b34]',
      text: 'text-[#c0c5ce]',
      border: 'border-[#343d46]',
      focusBorder: 'focus:border-[#6699cc]',
      button: 'bg-[#343d46]'
    },
    night: {
      name: 'Night',
      bg: 'bg-[#0a0e14]',
      text: 'text-[#b3b1ad]',
      border: 'border-[#1f2430]',
      focusBorder: 'focus:border-[#ffcc66]',
      button: 'bg-[#1f2430]'
    },
    github: {
      name: 'GitHub',
      bg: 'bg-[#ffffff]',
      text: 'text-[#24292e]',
      border: 'border-[#e1e4e8]',
      focusBorder: 'focus:border-[#0366d6]',
      button: 'bg-[#f6f8fa]'
    }
  };
  
  const currentTheme = themes[theme];
  
  const getTimeSinceSave = () => {
    const now = new Date();
    const diff = now - lastSaved;
    const seconds = Math.floor(diff / 1000);
    
    if (seconds < 60) return `${seconds}s ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    return `${Math.floor(seconds / 3600)}h ago`;
  };
  
  return (
    <motion.div 
      ref={editorRef}
      className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-gray-950 p-4' : ''}`}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main Container */}
      <div className={`${isFullscreen ? 'h-full' : ''} flex flex-col ${currentTheme.bg} rounded-2xl shadow-2xl overflow-hidden border ${currentTheme.border}`}>
        
        {/* Top Status Bar */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-700/50">
          <div className="flex items-center gap-4">
            {/* macOS Style Buttons */}
            <div className="flex gap-2">
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 rounded-full bg-red-500 cursor-pointer shadow-lg shadow-red-500/50"
                title="Close"
              />
              <motion.div 
                whileHover={{ scale: 1.2 }}
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer shadow-lg shadow-yellow-500/50"
                title={isMinimized ? "Expand" : "Minimize"}
              />
              <motion.div 
                whileHover={{ scale: 1.2 }}
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="w-3 h-3 rounded-full bg-green-500 cursor-pointer shadow-lg shadow-green-500/50"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              />
            </div>
            
            {/* File Info */}
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-300 font-mono">code.{getFileExtension()}</span>
              {code !== initialCode && (
                <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded-full">
                  Modified
                </span>
              )}
            </div>
          </div>
          
          {/* System Status */}
          <div className="flex items-center gap-4 text-xs">
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Wifi className={`w-3 h-3 ${isConnected ? 'text-green-400' : 'text-red-400'}`} />
                <span className="text-gray-400">{isConnected ? 'Online' : 'Offline'}</span>
              </div>
              <div className="flex items-center gap-1">
                <BatteryCharging className="w-3 h-3 text-green-400" />
                <span className="text-gray-400">{batteryLevel}%</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-blue-400" />
                <span className="text-gray-400">{getTimeSinceSave()}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content - Only show if not minimized */}
        {!isMinimized && (
          <>
            {/* Tab Navigation */}
            <div className="bg-gray-900/50 px-4 py-2 border-b border-gray-700/30 flex items-center gap-4">
              {['code', 'terminal', 'ai', 'settings'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    activeTab === tab 
                      ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tab === 'code' && <Code2 className="w-4 h-4" />}
                  {tab === 'terminal' && <Terminal className="w-4 h-4" />}
                  {tab === 'ai' && <Brain className="w-4 h-4" />}
                  {tab === 'settings' && <Settings className="w-4 h-4" />}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Editor Area */}
            <div className="flex-1 overflow-hidden">
              {activeTab === 'code' && (
                <div className="h-full flex">
                  {/* Left Sidebar - Line Numbers */}
                  {showLineNumbers && (
                    <div className="bg-gray-900/50 border-r border-gray-700/30 w-14 flex-shrink-0 flex flex-col items-end py-4 pr-3 overflow-y-auto">
                      {Array.from({ length: lineCount }, (_, i) => (
                        <div
                          key={i + 1}
                          className={`text-xs font-mono leading-[1.8] px-1 ${
                            bugLine === i + 1 
                              ? 'text-red-400 bg-red-500/10 rounded w-full text-center font-bold' 
                              : 'text-gray-500'
                          } ${
                            cursorPosition.line === i + 1 ? 'text-green-400 bg-green-500/10' : ''
                          }`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Code Editor */}
                  <div className="flex-1 relative">
                    <textarea
                      ref={textareaRef}
                      value={code}
                      onChange={(e) => {
                        onChange(e);
                        handleCursorChange(e);
                      }}
                      onClick={handleCursorChange}
                      onKeyUp={handleCursorChange}
                      onSelect={handleCursorChange}
                      className={`w-full h-full ${currentTheme.bg} ${currentTheme.text} font-mono px-6 py-4 outline-none resize-none ${readOnly ? 'cursor-not-allowed opacity-80' : ''}`}
                      spellCheck={false}
                      readOnly={readOnly}
                      style={{ 
                        lineHeight: "1.8",
                        fontSize: `${fontSize}px`,
                        tabSize: 2,
                        fontFamily: "'Fira Code', 'Consolas', 'Monaco', 'monospace'"
                      }}
                    />
                    
                    {/* Code Suggestions */}
                    <AnimatePresence>
                      {showSuggestions && suggestions.length > 0 && !readOnly && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute left-6 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-10"
                          style={{ 
                            top: `${cursorPosition.line * 1.8 * fontSize}px`,
                            transform: 'translateY(2px)'
                          }}
                        >
                          {suggestions.map((suggestion, index) => (
                            <div
                              key={index}
                              className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-sm border-b border-gray-800 last:border-b-0"
                              onClick={() => {
                                const lines = code.split('\n');
                                const currentLine = lines[cursorPosition.line - 1];
                                const newLine = currentLine + suggestion.slice(currentLine.length);
                                lines[cursorPosition.line - 1] = newLine;
                                onChange({ target: { value: lines.join('\n') } });
                                setSuggestions([]);
                              }}
                            >
                              <span className="text-blue-400">{suggestion}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Minimap */}
                    {showMinimap && (
                      <div className="absolute right-4 top-4 bottom-4 w-32 bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700/50">
                        <div 
                          className="text-[2px] leading-[0.5] font-mono text-gray-400 p-2"
                          style={{ fontFamily: "'Fira Code', monospace" }}
                        >
                          {code}
                        </div>
                      </div>
                    )}
                    
                    {/* Current Line Highlight */}
                    <div 
                      className="absolute left-0 right-0 bg-green-500/5 border-l-2 border-green-500/50 pointer-events-none"
                      style={{ 
                        top: `${(cursorPosition.line - 1) * 1.8 * fontSize}px`,
                        height: `${1.8 * fontSize}px`
                      }}
                    />
                    
                    {/* Bug Line Highlight */}
                    {bugLine && (
                      <div 
                        className="absolute left-0 right-0 bg-red-500/10 border-l-2 border-red-500 pointer-events-none"
                        style={{ 
                          top: `${(bugLine - 1) * 1.8 * fontSize}px`,
                          height: `${1.8 * fontSize}px`
                        }}
                      />
                    )}
                  </div>
                </div>
              )}
              
              {activeTab === 'terminal' && (
                <div className="h-full p-4">
                  <div className="bg-gray-900 rounded-lg h-full overflow-hidden flex flex-col">
                    <div className="px-4 py-3 bg-gray-800 border-b border-gray-700 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">Terminal</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setTerminalOutput('')}
                          className="text-xs px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded"
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                    <pre className="flex-1 overflow-auto p-4 font-mono text-sm text-gray-300 whitespace-pre-wrap">
                      {terminalOutput || "No output yet. Run your code to see results here."}
                    </pre>
                    <div className="px-4 py-3 bg-gray-800 border-t border-gray-700">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">$</span>
                        <input
                          type="text"
                          className="flex-1 bg-transparent outline-none text-gray-300"
                          placeholder="Type commands here..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'ai' && (
                <div className="h-full p-4">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl h-full overflow-hidden flex flex-col">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Brain className="w-8 h-8 text-purple-400" />
                        <div>
                          <h3 className="text-lg font-bold text-white">AI Code Assistant</h3>
                          <p className="text-sm text-gray-400">Get smart suggestions and debug help</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <textarea
                          value={aiPrompt}
                          onChange={(e) => setAiPrompt(e.target.value)}
                          placeholder="Describe what you need help with..."
                          className="w-full h-32 bg-gray-800 border border-gray-700 rounded-lg p-4 text-gray-300 outline-none focus:border-purple-500 resize-none"
                        />
                        <div className="mt-2 flex justify-end">
                          <button
                            onClick={handleAIHelp}
                            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                          >
                            <Sparkles className="w-4 h-4" />
                            Get AI Help
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors text-left">
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="w-5 h-5 text-yellow-400" />
                            <span className="text-white font-medium">Optimize Code</span>
                          </div>
                          <p className="text-sm text-gray-400">Improve performance and efficiency</p>
                        </button>
                        
                        <button className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors text-left">
                          <div className="flex items-center gap-2 mb-2">
                            <Shield className="w-5 h-5 text-green-400" />
                            <span className="text-white font-medium">Security Check</span>
                          </div>
                          <p className="text-sm text-gray-400">Find security vulnerabilities</p>
                        </button>
                        
                        <button className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors text-left">
                          <div className="flex items-center gap-2 mb-2">
                            <Globe className="w-5 h-5 text-blue-400" />
                            <span className="text-white font-medium">Best Practices</span>
                          </div>
                          <p className="text-sm text-gray-400">Apply industry standards</p>
                        </button>
                        
                        <button className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors text-left">
                          <div className="flex items-center gap-2 mb-2">
                            <GitBranch className="w-5 h-5 text-purple-400" />
                            <span className="text-white font-medium">Refactor</span>
                          </div>
                          <p className="text-sm text-gray-400">Improve code structure</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div className="h-full p-4 overflow-y-auto">
                  <div className="max-w-2xl">
                    <h3 className="text-lg font-bold text-white mb-6">Editor Settings</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-3">Appearance</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {Object.entries(themes).map(([key, themeData]) => (
                            <button
                              key={key}
                              onClick={() => setTheme(key)}
                              className={`p-4 rounded-lg border-2 transition-all ${
                                theme === key 
                                  ? 'border-blue-500 bg-blue-500/10' 
                                  : 'border-gray-700 hover:border-gray-600'
                              }`}
                            >
                              <div className={`${themeData.bg} h-12 rounded mb-2 flex items-center justify-center`}>
                                <div className={`${themeData.text} text-xs`}>Aa</div>
                              </div>
                              <div className="text-xs text-gray-300">{themeData.name}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-3">Font Size</h4>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </button>
                          <div className="text-2xl font-mono text-white">{fontSize}px</div>
                          <button
                            onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center"
                          >
                            <ChevronUp className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-gray-300">Line Numbers</div>
                            <div className="text-xs text-gray-500">Show line numbers in gutter</div>
                          </div>
                          <button
                            onClick={() => showLineNumbers = !showLineNumbers}
                            className={`w-12 h-6 rounded-full transition-colors ${
                              showLineNumbers ? 'bg-green-500' : 'bg-gray-700'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-full bg-white transform transition-transform ${
                              showLineNumbers ? 'translate-x-7' : 'translate-x-1'
                            }`} />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-gray-300">Minimap</div>
                            <div className="text-xs text-gray-500">Show code overview on right</div>
                          </div>
                          <button
                            onClick={() => showMinimap = !showMinimap}
                            className={`w-12 h-6 rounded-full transition-colors ${
                              showMinimap ? 'bg-blue-500' : 'bg-gray-700'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-full bg-white transform transition-transform ${
                              showMinimap ? 'translate-x-7' : 'translate-x-1'
                            }`} />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-gray-300">Auto Complete</div>
                            <div className="text-xs text-gray-500">Show code suggestions</div>
                          </div>
                          <button
                            onClick={() => autoComplete = !autoComplete}
                            className={`w-12 h-6 rounded-full transition-colors ${
                              autoComplete ? 'bg-purple-500' : 'bg-gray-700'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-full bg-white transform transition-transform ${
                              autoComplete ? 'translate-x-7' : 'translate-x-1'
                            }`} />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-gray-300">Auto Save</div>
                            <div className="text-xs text-gray-500">Automatically save changes</div>
                          </div>
                          <button
                            onClick={() => setAutoSave(!autoSave)}
                            className={`w-12 h-6 rounded-full transition-colors ${
                              autoSave ? 'bg-green-500' : 'bg-gray-700'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-full bg-white transform transition-transform ${
                              autoSave ? 'translate-x-7' : 'translate-x-1'
                            }`} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
        
        {/* Bottom Status Bar */}
        <div className="bg-gray-900/80 backdrop-blur-sm px-4 py-2 border-t border-gray-700/30 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Language Info */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getLanguageColor().replace('text-', 'bg-')}`} />
              <span className="text-xs text-gray-400">{language.toUpperCase()}</span>
            </div>
            
            {/* Cursor Position */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Hash className="w-3 h-3" />
              <span>Ln {cursorPosition.line}, Col {cursorPosition.col}</span>
            </div>
            
            {/* Selection Info */}
            {selection.end - selection.start > 0 && (
              <div className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                {selection.end - selection.start} chars selected
              </div>
            )}
            
            {/* Bug Indicator */}
            {bugLine && (
              <div className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 px-2 py-1 rounded">
                <AlertCircle className="w-3 h-3" />
                Bug at line {bugLine}
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-4 flex-wrap">
            {/* Stats */}
            <div className="hidden md:flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Layers className="w-3 h-3" />
                <span>{lineCount} lines</span>
              </div>
              <div className="flex items-center gap-1">
                <Type className="w-3 h-3" />
                <span>{wordCount} words</span>
              </div>
              <div className="flex items-center gap-1">
                <span>{charCount} chars</span>
              </div>
            </div>
            
            {/* Read-Only Indicator */}
            {readOnly && (
              <div className="text-xs text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded flex items-center gap-1">
                <Lock className="w-3 h-3" />
                Read Only
              </div>
            )}
          </div>
        </div>
        
        {/* Floating Action Buttons REMOVED from here */}
        
      </div>
    </motion.div>
  );
};

export default CodeEditor;