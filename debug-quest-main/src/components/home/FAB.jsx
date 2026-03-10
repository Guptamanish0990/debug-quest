// src/components/home/FAB.jsx
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const FAB = ({ onClick, icon = <Plus className="w-6 h-6" />, label = "New Challenge" }) => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl flex items-center space-x-3 z-40"
    >
      <div className="bg-white/20 p-2 rounded-full">
        {icon}
      </div>
      <span className="font-semibold pr-2">{label}</span>
    </motion.button>
  );
};

export default FAB;