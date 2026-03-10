import React from "react";

const GradientBorderCard = ({ 
  children, 
  className = "", 
  gradient = "from-green-400 via-purple-500 to-blue-500", 
  ...props 
}) => {
  return (
    <div className={`relative p-[2px] rounded-3xl ${className}`} {...props}>
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-3xl opacity-50 blur-sm`}></div>
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6">
        {children}
      </div>
    </div>
  );
};

export default GradientBorderCard;