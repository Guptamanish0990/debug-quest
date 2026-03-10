import { LANGUAGE_ICONS, DIFFICULTY_COLORS } from "@/utils/constants";

export const LANGUAGE_ICONS = {
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

export const DIFFICULTY_COLORS = {
  Easy: {
    bg: "from-green-900/20 to-green-800/10",
    border: "border-green-500/30",
    glow: "hover:shadow-green-500/30",
    text: "text-green-400",
  },
  Medium: {
    bg: "from-yellow-900/20 to-yellow-800/10",
    border: "border-yellow-500/30",
    glow: "hover:shadow-yellow-500/30",
    text: "text-yellow-400",
  },
  Hard: {
    bg: "from-red-900/20 to-red-800/10",
    border: "border-red-500/30",
    glow: "hover:shadow-red-500/30",
    text: "text-red-400",
  },
};
