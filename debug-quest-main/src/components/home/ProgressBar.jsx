// src/components/home/ProgressBar.jsx
const ProgressBar = ({ value = 50, max = 100, color = "from-blue-500 to-purple-600" }) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className="w-full bg-gray-800 rounded-full h-2.5">
      <div 
        className={`h-2.5 rounded-full bg-gradient-to-r ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;