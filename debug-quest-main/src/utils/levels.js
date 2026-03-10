// levels.js
import { LEVELS_HTML } from "./levels_html";
import { LEVELS_CSS } from "./levels_css";
import { LEVELS_JS } from "./levels_js";
import { LEVELS_PYTHON } from "./levels_python";
import { LEVELS_SQL } from "./levels_sql";
import { LEVELS_JAVA } from "./levels_java";
import { LEVELS_CPP } from "./levels_cpp";
import { LEVELS_RUBY } from "./levels_ruby";
import { LEVELS_TYPESCRIPT } from "./levels_typescript";
import { LEVELS_REACT } from "./levels_react";
import { LEVELS_NODE } from "./level_node";
import { LEVELS_MONGO } from './levels_mongodb.js';

// LEVELS_NEXT ko temporary disable karein agar error de raha hai
// import { LEVELS_NEXT } from "./levels_next";

// Combine all levels (LEVELS_NEXT ko hata dein agar error de raha hai)
const allLevels = [
  ...LEVELS_HTML,
  ...LEVELS_CSS,
  ...LEVELS_JS,
  ...LEVELS_PYTHON,
  ...LEVELS_SQL,
  ...LEVELS_JAVA,
  ...LEVELS_CPP,
  ...LEVELS_RUBY,
  ...LEVELS_TYPESCRIPT,
  ...LEVELS_REACT,
  // ...LEVELS_NEXT, // Temporary comment out
  ...LEVELS_NODE,
  ...LEVELS_MONGO
];

// Add default validate function to levels that don't have one
export const LEVELS = allLevels.map((level, index) => {
  // If level already has validate function, use it
  if (level.validate && typeof level.validate === 'function') {
    return level;
  }
  
  // Otherwise, add a default validate function
  return {
    ...level,
    id: index + 1, // Fix IDs to be sequential
    validate: (userCode) => {
      // Default validation: check if user code is different from buggy code
      // and similar to fixed code
      const userCodeClean = userCode.trim();
      const buggyCodeClean = (level.buggyCode || '').trim();
      const fixedCodeClean = (level.fixedCode || '').trim();
      
      // Check if user made changes
      if (userCodeClean === buggyCodeClean) {
        return false; // No changes made
      }
      
      // Simple check: user code should match fixed code closely
      // Remove extra spaces and newlines for comparison
      const normalizeCode = (code) => code.replace(/\s+/g, ' ').trim();
      
      return normalizeCode(userCodeClean) === normalizeCode(fixedCodeClean);
    }
  };
});