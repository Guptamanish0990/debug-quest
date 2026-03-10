import React from "react";

const ProgressBar = ({ 
  progress, 
  color = "from-green-400 to-emerald-500", 
  label, 
  value 
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-400">
        <span>{label}</span>
        <span className="font-bold text-white">{value}</span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;