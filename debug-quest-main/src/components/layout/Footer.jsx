import React from 'react';
import { 
  Code, 
  Github, 
  Linkedin, 
  Instagram, 
  ExternalLink,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      label: 'GitHub', 
      url: 'https://github.com/Guptamanish0990' 
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/manish-gupta-0990' 
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      label: 'Instagram', 
      url: 'https://www.instagram.com/0990_manish?igsh=MWR0NWV3N2tteDlzbg==' 
    },
    { 
      icon: <ExternalLink className="w-5 h-5" />, 
      label: 'Portfolio', 
      url: 'https://guptamanish0990.github.io/Manish_Gupta/#/' 
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800/50 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Brand */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl"
            >
              <Code className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white">DEBUG QUEST</h3>
              <p className="text-sm text-gray-400">Master Debugging Through Challenges</p>
            </div>
          </div>

          {/* Center - Social Media */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 transition-all group relative"
                aria-label={social.label}
              >
                {social.icon}
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex flex-col items-center md:items-end gap-1">
              <span>© {currentYear} <span className="text-purple-400 font-medium">Manish Gupta</span>. All rights reserved.</span>
              <span className="flex items-center text-gray-500">
                Made with <Heart className="w-4 h-4 mx-1.5 text-red-500 animate-pulse" /> and lots of <span className="ml-1 text-yellow-400">☕</span>
              </span>
            </p>
          </div>
        </div>
        
        {/* Bottom divider */}
        {/* <div className="mt-6 pt-6 border-t border-gray-800/30 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
          <span className="hover:text-gray-300 transition-colors cursor-pointer">Privacy Policy</span>
          <span className="text-gray-600">•</span>
          <span className="hover:text-gray-300 transition-colors cursor-pointer">Terms of Service</span>
          <span className="text-gray-600">•</span>
          <span className="hover:text-gray-300 transition-colors cursor-pointer">Contact</span>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;