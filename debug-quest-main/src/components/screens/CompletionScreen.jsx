
import React from "react";
import { Trophy, Award, RotateCcw, Star } from "lucide-react";
import { LEVELS } from "../../utils/levels";

const CompletionScreen = ({ score, completedLevels, setScreen, setCompletedLevels, setScore }) => {
  const maxScore = LEVELS.length * 100;
  const percentage = Math.round((score / maxScore) * 100);
  const completionRate = Math.round((completedLevels.length / LEVELS.length) * 100);

  const getGrade = () => {
    if (percentage >= 90) return { grade: "S", color: "from-purple-500 to-pink-500" };
    if (percentage >= 80) return { grade: "A", color: "from-green-500 to-emerald-500" };
    if (percentage >= 70) return { grade: "B", color: "from-blue-500 to-cyan-500" };
    if (percentage >= 60) return { grade: "C", color: "from-yellow-500 to-orange-500" };
    return { grade: "D", color: "from-red-500 to-pink-500" };
  };

  const grade = getGrade();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 flex items-center justify-center relative overflow-hidden">
      {/* Celebration Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-4xl">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-yellow-400 rounded-3xl shadow-2xl p-10 backdrop-blur-sm">
          <div className="text-center mb-10">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 blur-2xl opacity-30 animate-pulse"></div>
              <Trophy className="w-36 h-36 text-yellow-400 mx-auto animate-bounce" />
            </div>

            <h2 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mb-6 font-mono">
              MISSION COMPLETE!
            </h2>

            <p className="text-3xl text-gray-300 mb-10">
              You've mastered the art of debugging! 🎯
            </p>
          </div>

          {/* Score Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-400/50 rounded-3xl p-10 mb-8 shadow-2xl">
            <div className="text-center mb-8">
              <div
                className={`inline-block bg-gradient-to-r ${grade.color} text-white text-5xl font-black px-12 py-8 rounded-2xl shadow-2xl mb-6 animate-pulse`}
              >
                {grade.grade}
              </div>
              <p className="text-gray-400 text-xl">Final Grade</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center">
                <p className="text-6xl font-black text-green-400 mb-2">{score}</p>
                <p className="text-gray-400">Total Points</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-full transition-all duration-1000"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{percentage}% of max</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center">
                <p className="text-6xl font-black text-blue-400 mb-2">
                  {completedLevels.length}
                </p>
                <p className="text-gray-400">Levels Completed</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full transition-all duration-1000"
                      style={{ width: `${completionRate}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{completionRate}% complete</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center">
                <p className="text-6xl font-black text-purple-400 mb-2">
                  {LEVELS.length}
                </p>
                <p className="text-gray-400">Bugs Squashed</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">All conquered!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Message */}
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-800/30 border-2 border-green-400 rounded-3xl p-8 mb-8 text-center shadow-xl">
            <div className="flex justify-center mb-4">
              <Award
                className="w-16 h-16 text-green-400 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
            <p className="text-green-400 font-bold text-2xl mb-3">
              🏆 Debugging Master! 🏆
            </p>
            <p className="text-gray-300 text-xl">
              You've successfully debugged {completedLevels.length} challenges across
              multiple programming languages! Your logical thinking and attention to
              detail are exceptional!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-6">
            <button
              onClick={() => {
                setScreen("home");
                setCompletedLevels([]);
                setScore(0);
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold py-5 px-6 rounded-2xl hover:from-purple-500 hover:to-pink-500 transition-all flex items-center justify-center gap-3 group shadow-xl"
            >
              <RotateCcw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
              Play Again
            </button>

            <button
              onClick={() => setScreen("easy-levels")}
              className="bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-gray-600 text-gray-300 text-xl font-bold py-5 px-6 rounded-2xl hover:border-blue-400 hover:text-white transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              <Star className="w-6 h-6" />
              Review Levels
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletionScreen;
````

