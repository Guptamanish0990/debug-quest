// src/components/game/FeedbackPanel.jsx
import React from "react";
import { CheckCircle, XCircle, ArrowRight, Sparkles, Flame } from "lucide-react";

const FeedbackPanel = ({ feedback, nextLevel, onClose }) => {
  if (!feedback) return null;

  const isSuccess = feedback.type === "success";

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else if (isSuccess && nextLevel) {
      nextLevel();
    }
  };

  const handleTryAgain = () => {
    // Clear feedback and let user try again
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Dark Overlay - Updated to use handleClose */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn"
        onClick={handleClose}
      ></div>

      {/* Popup Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 animate-scaleIn">
        <div
          className={`max-w-md w-full rounded-3xl p-8 border-2 shadow-2xl transform transition-all ${
            isSuccess
              ? "bg-gradient-to-br from-green-900/95 to-emerald-900/95 border-green-400"
              : "bg-gradient-to-br from-red-900/95 to-rose-900/95 border-red-400"
          }`}
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            {isSuccess ? (
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 blur-2xl opacity-50 animate-pulse"></div>
                <CheckCircle className="w-20 h-20 text-green-400 relative animate-bounce" />
              </div>
            ) : (
              <XCircle className="w-20 h-20 text-red-400 animate-shake" />
            )}
          </div>

          {/* Title */}
          <h3
            className={`text-3xl font-black text-center mb-4 ${
              isSuccess ? "text-green-300" : "text-red-300"
            }`}
          >
            {isSuccess ? "🎉 Success!" : "❌ Try Again"}
          </h3>

          {/* Message */}
          <p
            className={`text-lg text-center mb-6 font-medium ${
              isSuccess ? "text-green-100" : "text-red-100"
            }`}
          >
            {feedback.message}
          </p>

          {/* Points Display (Success only) */}
          {isSuccess && feedback.points && (
            <div className="mb-6 space-y-3">
              <div className="bg-yellow-900/40 border border-yellow-400/50 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-bold text-sm">POINTS EARNED</span>
                </div>
                <div className="text-4xl font-black text-yellow-300">
                  +{feedback.points}
                </div>
              </div>

              {feedback.streakBonus && (
                <div className="bg-orange-900/40 border border-orange-400/50 rounded-xl p-3 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Flame className="w-5 h-5 text-orange-400" />
                    <span className="text-orange-300 font-bold">
                      Streak Bonus: +{feedback.streakBonus}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Explanation (Success only) */}
          {isSuccess && feedback.explanation && (
            <div className="mb-6 bg-blue-900/30 border border-blue-400/50 rounded-xl p-4">
              <p className="text-blue-200 text-sm leading-relaxed">
                💡 {feedback.explanation}
              </p>
            </div>
          )}

          {/* Attempts (Error only) */}
          {!isSuccess && feedback.attempts && (
            <div className="mb-6 text-center">
              <p className="text-red-200 text-sm">
                Attempts: <span className="font-bold text-lg">{feedback.attempts}</span>
              </p>
            </div>
          )}

          {/* Action Button */}
          {isSuccess && nextLevel ? (
            <button
              onClick={nextLevel}
              className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white text-xl font-bold py-4 rounded-2xl hover:from-green-400 hover:via-emerald-400 hover:to-teal-400 transition-all flex items-center justify-center gap-3 shadow-xl group"
            >
              Next Level
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          ) : (
            <button
              onClick={handleTryAgain}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white text-xl font-bold py-4 rounded-2xl hover:from-red-500 hover:to-red-600 transition-all shadow-xl"
            >
              Try Again
            </button>
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default FeedbackPanel;