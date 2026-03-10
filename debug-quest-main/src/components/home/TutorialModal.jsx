import React from "react";
import { X, Code, Bug, Lightbulb, Trophy } from "lucide-react";

const TutorialModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl max-w-2xl w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
          <Bug className="w-8 h-8 text-purple-400" />
          How to Play Debug Quest
        </h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl">
            <div className="bg-green-500/20 p-3 rounded-lg">
              <Code className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">1. Read the Code</h3>
              <p className="text-gray-300">
                Each level presents buggy code. Read it carefully to understand
                what it's trying to do.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl">
            <div className="bg-red-500/20 p-3 rounded-lg">
              <Bug className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">2. Find the Bug</h3>
              <p className="text-gray-300">
                Look for syntax errors, logic mistakes, or incorrect operations.
                The bug indicator might give you a clue!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl">
            <div className="bg-yellow-500/20 p-3 rounded-lg">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">3. Fix It!</h3>
              <p className="text-gray-300">
                Edit the code directly in the code editor. Use the hint button
                if you're stuck (but it costs points!).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Trophy className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">4. Check & Earn</h3>
              <p className="text-gray-300">
                Click "Check Solution" to verify your fix. Earn points and build
                your streak!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-900/30 border border-blue-500/50 rounded-xl">
          <p className="text-blue-300 text-center">
            💡 <strong>Pro Tip:</strong> The fewer attempts you need, the more
            points you earn. Good luck, debugger!
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-xl font-bold hover:from-purple-500 hover:to-purple-600 transition-all"
        >
          Got It! Let's Debug 🚀
        </button>
      </div>
    </div>
  );
};

export default TutorialModal;