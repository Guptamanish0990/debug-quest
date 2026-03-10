// src/components/home/DailyChallengeLeaderboard.jsx
const DailyChallengeLeaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "CodeMaster", score: 950, time: "12:45", streak: 21 },
    { rank: 2, name: "DebugPro", score: 920, time: "15:20", streak: 18 },
    { rank: 3, name: "BugHunter", score: 890, time: "18:30", streak: 15 },
    // ... more data
  ];
  
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Daily Challenge Leaderboard</h3>
      {/* Leaderboard table */}
    </div>
  );
};