import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

const AboutCard = ({ darkMode, itemVariants }) => {
  // Typewriter effect for description
  const description = "Software Developer & passionate about creating modern web experiences. With hands-on experience at ISRO and various tech companies.";
  const [typedDesc, setTypedDesc] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedDesc(description.slice(0, i + 1));
      i++;
      if (i === description.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      variants={itemVariants}
      className={`md:col-span-2 p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02] ${
        darkMode 
          ? 'bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80' 
          : 'bg-white/70 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-white/50'
      }`}
    >
      <div className="flex items-start gap-6">
        <motion.img 
          src="./images/about-akshita.png" 
          alt="Akshita Gupta" 
          className="w-24 h-24 rounded-2xl object-cover ring-4 ring-blue-500/20"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">About Me</h2>
          <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {typedDesc}
            <span className="animate-pulse">|</span>
          </p>
          <div className="flex gap-4">
            <motion.a 
              href="https://github.com/imakshug" 
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              GitHub
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/gupta-akshitaa/" 
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={16} />
              LinkedIn
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutCard
