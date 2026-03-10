// src/components/home/LanguagesGrid.jsx
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiGo,  // Changed from SiGolang
  SiRust,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { Code2 } from "lucide-react"; // Import from lucide-react for Java

const LANGUAGES = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "bg-yellow-500 text-black",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "bg-blue-600 text-white",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "bg-blue-500 text-white",
  },
  {
    name: "Java",
    icon: Code2, // Using lucide-react icon as fallback
    color: "bg-red-600 text-white",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "bg-pink-600 text-white",
  },
  {
    name: "Go",
    icon: SiGo, // Changed from SiGolang
    color: "bg-cyan-500 text-black",
  },
  {
    name: "Rust",
    icon: SiRust,
    color: "bg-orange-500 text-black",
  },
  {
    name: "React",
    icon: SiReact,
    color: "bg-sky-500 text-black",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "bg-green-600 text-white",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "bg-orange-600 text-white",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "bg-blue-400 text-white",
  },
];

const LanguagesGrid = ({ onSelect }) => {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
      <h3 className="text-xl font-bold text-white mb-4">
        Programming Languages
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {LANGUAGES.map(({ name, icon: Icon, color }) => (
          <button
            key={name}
            onClick={() => onSelect?.(name)}
            className="flex flex-col items-center p-4 bg-gray-800/60 rounded-xl hover:bg-gray-800 transition-all group"
          >
            <div
              className={`${color} p-3 rounded-lg mb-2 group-hover:scale-110 transition-transform`}
            >
              <Icon className="w-8 h-8" />
            </div>
            <span className="text-white text-sm font-medium">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguagesGrid;