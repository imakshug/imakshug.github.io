import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Download, ExternalLink, MapPin, Calendar, Clock, Twitter, Instagram, Code, Github, Linkedin } from 'lucide-react'
import ThemeToggle from './components/ThemeToggle'
import AboutCard from './components/AboutCard'
import ProjectCard from './components/ProjectCard'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {        duration: 0.6,
        ease: "easeOut"
      }    }
  }
  
  const projects = [
    {
      title: "QuickPlaylist - Spotify Playlist Generator",
      description: "A full-stack web application that creates Spotify playlists by pasting song names. Built with React and Node.js.",
      tech: ["React", "Node.js", "JavaScript"],
      image: "./images/project-quickplaylist.png",
      liveUrl: "",
      githubUrl: "https://github.com/imakshug/spotify-playlist-generator"
    },
    {
      title: "My Notes App",
      description: "A beautiful, feature-rich notes application built with React and FastAPI that transforms your note-taking experience into something truly magical.",
      tech: ["React", "FastAPI", "Tailwind CSS"],
      image: "./images/project-notesapp.png",
      liveUrl: "",
      githubUrl: "https://github.com/imakshug/notes_app"
    },
    {
      title: "Invisible Cloak",
      description: "Real-time computer vision application that creates an invisible cloak effect using OpenCV and background subtraction techniques.",
      tech: ["Python", "OpenCV", "NumPy", "Flask"],
      image: "./images/project-invisiblecloak.png",
      liveUrl: "",
      githubUrl: "https://github.com/imakshug/Invisible-Cloak-Python"
    },
    {
      title: "CheckMate – OCR Web Application",
      description: "Extracts Hindi & English text from documents with keyword search and structured data export.",
      tech: ["Python", "Streamlit", "OCR", "ML"],
      image: "./images/project-ocr.png",
      liveUrl: "https://ocr-document-search-web-application.streamlit.app/",
      githubUrl: "https://github.com/imakshug/OCR_and_Document_Search_Web_Application"
    },
    {
      title: "FaceTrackr – Face Detection System",
      description: "Real-time face detection and recognition using OpenCV and deep learning models.",
      tech: ["Python", "OpenCV", "ML"],
      image: "./images/project-face.png",
      liveUrl: "",
      githubUrl: "https://github.com/imakshug/Face-Recognition-Attendance-System"
    }, 
    {
      title: "SpendWise – Personal Expense Tracker",
      description: "Tracks, filters, and analyzes expenses with responsive dark/light themes and modern UI/UX.",
      tech: ["Python", "Flask", "HTML/CSS", "JavaScript"],
      image: "./images/project-expense.png",
      liveUrl: "",
      githubUrl: "https://github.com/imakshug/Personal-Expense-Tracker"
    },
    {
      title: "KeyForge –Password Generator",
      description: "Generates secure, customizable passwords with multiple complexity options.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "./images/project-password.png",
      liveUrl: "",
      githubUrl: "https://github.com/imakshug/password-generator"
    },
       {
      title: "Vintage Polaroid Photobooth",
      description: "Cross-platform photo editor with Polaroid filters, captions, and retro-style effects.",
      tech: ["Python", "Flask", "Tkinter", "PIL"],
      image: "./images/project-vintage.jpg",
      liveUrl: "",
      githubUrl: "https://github.com/imakshug/Vintage-Photobooth-App"
    },
    {
      title: "SkyCast – Weather App",
      description: "Delivers real-time weather updates with a 7-day forecast and interactive interface.",
      tech: ["JavaScript", "REST API", "HTML", "CSS"],
      image: "./images/project-weather.png",
      liveUrl: "https://weather-app-two-alpha-95.vercel.app/",
      githubUrl: "https://github.com/imakshug/weather-app"
    },
    {
      title: "FocusFlow – Pomodoro Timer",
      description: "Productivity tool using Pomodoro Technique with customizable timers and session tracking.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "./images/project-timer.png",
      liveUrl: "",
      githubUrl: "https://github.com/imakshug/timer_extension-"
    },
    {
      title: "CampusConnect – College Website",
      description: "Responsive website template with student portal, course listings, and event management.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "./images/project-college.png",
      liveUrl: "https://college-website-seven-black.vercel.app/",
      githubUrl: "https://github.com/imakshug/College_website"
    }

  ]
  const skills = [
    "JavaScript", "React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
     "Python", "Node.js", "Flask", "Django", "Express.js", 
     "MySQL", "MongoDB", "SQLite", "Git", "GitHub", "VS Code", "Render", "Figma",
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
    }`}>
      <div className="container mx-auto px-4 py-8 max-w-7xl">        {/* Header with Theme Toggle */}
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            Akshita Gupta
          </motion.h1>
          
          <ThemeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >          {/* About Me - Large */}
          <AboutCard darkMode={darkMode} itemVariants={itemVariants} />

          {/* Current Status */}
          <motion.div 
            variants={itemVariants}
            className={`p-6 rounded-3xl transition-all duration-300 ${
              darkMode 
                ? 'bg-green-900/20 backdrop-blur-sm border border-green-700/30 hover:bg-green-900/30' 
                : 'bg-green-50/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-green-200/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Currently</span>
            </div>
            <img 
              src="./images/animation.webp" 
              alt="Currently Animation" 
              className="w-full h-auto rounded-xl"
            />
          </motion.div>          {/* Resume Download */}
          <motion.div 
            variants={itemVariants}
            className={`p-6 rounded-3xl transition-all duration-300 cursor-pointer group ${
              darkMode 
                ? 'bg-purple-900/20 backdrop-blur-sm border border-purple-700/30 hover:bg-purple-900/30' 
                : 'bg-purple-50/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-purple-200/50'
            }`}            onClick={() => {
              const link = document.createElement('a');
              link.href = './images/Akshita_Gupta_Resume.pdf';
              link.download = 'Akshita_Gupta_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <div className="text-center">
              <Download className="w-8 h-8 mx-auto mb-3 text-purple-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">Resume</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Download
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div 
            variants={itemVariants}
            className={`md:col-span-2 p-6 rounded-3xl transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80' 
                : 'bg-white/70 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-white/50'
            }`}
          >
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1 text-sm rounded-xl ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                >
                  {skill}
                </span>
              ))}            </div>
          </motion.div>

          {/* Contact */}
          <motion.div 
            variants={itemVariants}
            className={`p-6 rounded-3xl transition-all duration-300 cursor-pointer group ${
              darkMode 
                ? 'bg-blue-900/20 backdrop-blur-sm border border-blue-700/30 hover:bg-blue-900/30' 
                : 'bg-blue-50/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-blue-200/50'
            }`}
            onClick={() => window.open('mailto:guptakshita210@gmail.com', '_blank')}
          >
            <Mail className="w-8 h-8 mb-3 text-blue-600 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-1">Get in Touch</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              guptakshita210@gmail.com
            </p>
            <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium">
              Send Message →
            </button>
          </motion.div>

          {/* Combined Social Media Container */}
          <motion.div 
            variants={itemVariants}
            className={`p-4 rounded-3xl transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80' 
                : 'bg-white/70 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-white/50'
            }`}
          >
            <div className="grid grid-cols-2 gap-2 h-full">
              {/* Twitter */}
              <div 
                className={`p-2 rounded-xl transition-all duration-300 cursor-pointer group ${
                  darkMode 
                    ? 'bg-blue-900/30 hover:bg-blue-900/50 border border-blue-700/30' 
                    : 'bg-blue-50 hover:bg-blue-100 border border-blue-200/50'
                }`}
                onClick={() => window.open('https://x.com/akkshiiitaa', '_blank')}
              >
                <Twitter className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform mx-auto mb-1" />
                <p className="text-xs text-center font-medium">Twitter</p>
              </div>

              {/* Instagram */}
              <div 
                className={`p-2 rounded-xl transition-all duration-300 cursor-pointer group ${
                  darkMode 
                    ? 'bg-pink-900/30 hover:bg-pink-900/50 border border-pink-700/30' 
                    : 'bg-pink-50 hover:bg-pink-100 border border-pink-200/50'
                }`}
                onClick={() => window.open('https://www.instagram.com/akkshiiitaa/', '_blank')}
              >
                <Instagram className="w-4 h-4 text-pink-600 group-hover:scale-110 transition-transform mx-auto mb-1" />
                <p className="text-xs text-center font-medium">Instagram</p>
              </div>

              {/* LeetCode */}
              <div 
                className={`p-2 rounded-xl transition-all duration-300 cursor-pointer group ${
                  darkMode 
                    ? 'bg-yellow-900/30 hover:bg-yellow-900/50 border border-yellow-700/30' 
                    : 'bg-yellow-50 hover:bg-yellow-100 border border-yellow-200/50'
                }`}
                onClick={() => window.open('https://leetcode.com/u/akkshiiitaa/', '_blank')}
              >
                <Code className="w-4 h-4 text-yellow-600 group-hover:scale-110 transition-transform mx-auto mb-1" />
                <p className="text-xs text-center font-medium">LeetCode</p>
              </div>

              {/* Bento */}
              <div 
                className={`p-2 rounded-xl transition-all duration-300 cursor-pointer group ${
                  darkMode 
                    ? 'bg-purple-900/30 hover:bg-purple-900/50 border border-purple-700/30' 
                    : 'bg-purple-50 hover:bg-purple-100 border border-purple-200/50'
                }`}
                onClick={() => window.open('https://bento.me/akshita-gupta', '_blank')}
              >
                <ExternalLink className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform mx-auto mb-1" />
                <p className="text-xs text-center font-medium">Bento</p>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div 
            variants={itemVariants}
            className={`md:col-span-3 lg:col-span-4 p-8 rounded-3xl transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80' 
                : 'bg-white/70 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-white/50'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">My Experiences</h3>
            <div className="space-y-6">
              {/* ISRO Experience */}
              <div className={`p-6 rounded-2xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-blue-900/20 border border-blue-700/30' 
                  : 'bg-blue-50/80 border border-blue-200/50'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      Indian Space Research Organisation (ISRO)
                    </h4>
                    <p className="text-md font-medium">R & D Trainee</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span>Oct 2024 - Jan 2025</span>
                  </div>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Developing real-time error correction algorithms using DGPS technology, improving GPS accuracy.
                </p>
              </div>

              {/* Infosys Experience */}
              <div className={`p-6 rounded-2xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-green-900/20 border border-green-700/30' 
                  : 'bg-green-50/80 border border-green-200/50'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-green-600 dark:text-green-400">
                      Infosys Springboard
                    </h4>
                    <p className="text-md font-medium">Project Intern</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span>Mar 2024 - May 2024</span>
                  </div>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Developed Python scripts utilizing OCR and machine learning techniques for automatic cheque extraction, increasing operational efficiency.
                </p>
              </div>

              {/* HL Tech Experience */}
              <div className={`p-6 rounded-2xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-purple-900/20 border border-purple-700/30' 
                  : 'bg-purple-50/80 border border-purple-200/50'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                      HL Tech Pvt. Ltd.
                    </h4>
                    <p className="text-md font-medium">SDE Intern</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span>Jun 2024 - Sep 2024</span>
                  </div>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Gained hands-on experience in software development, writing clean and efficient code, and collaborating with teams to build scalable applications.
                </p>
              </div>
            </div>          </motion.div>

          {/* Featured Projects */}
          <motion.div 
            variants={itemVariants}
            className={`md:col-span-3 lg:col-span-4 p-8 rounded-3xl transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80' 
                : 'bg-white/70 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-white/50'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Featured Projects</h3>            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  project={project} 
                  darkMode={darkMode} 
                  index={index}
                />
              ))}
            </div>
          </motion.div>          {/* Blog */}
          <motion.div 
            variants={itemVariants}
            className={`p-6 rounded-3xl transition-all duration-300 cursor-pointer group ${
              darkMode 
                ? 'bg-orange-900/20 backdrop-blur-sm border border-orange-700/30 hover:bg-orange-900/30' 
                : 'bg-orange-50/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-orange-200/50'
            }`}
            onClick={() => window.open('#', '_blank')}
          >
            <h3 className="font-semibold mb-2 group-hover:text-orange-600 transition-colors">Latest Blog</h3>
            <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              "Building Modern Web Applications"
            </p>
            <div className="flex items-center gap-2 text-orange-600 text-sm">
              <Calendar size={14} />
              <span>Coming Soon</span>
            </div>
          </motion.div>          {/* Now Playing */}
          <motion.div 
            variants={itemVariants}
            className={`md:col-span-2 p-6 rounded-3xl transition-all duration-300 ${
              darkMode 
                ? 'bg-spotify-green/20 backdrop-blur-sm border border-green-700/30 hover:bg-spotify-green/30' 
                : 'bg-green-50/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-green-200/50'
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Now Playing</span>
            </div>
            <div className="rounded-xl overflow-hidden">
              <iframe 
                data-testid="embed-iframe" 
                style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/playlist/6jLjdI7FtrSfmlJRguPn3w?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>{/* Location */}
          <motion.div 
            variants={itemVariants}
            className={`p-6 rounded-3xl transition-all duration-300 ${
              darkMode 
                ? 'bg-red-900/20 backdrop-blur-sm border border-red-700/30 hover:bg-red-900/30' 
                : 'bg-red-50/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-red-200/50'
            }`}
          >
            <MapPin className="w-8 h-8 mb-3 text-red-600" />
            <h3 className="font-semibold mb-1">Based in</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              India
            </p>
          </motion.div>
        </motion.div>        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://github.com/imakshug"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'bg-gray-100 hover:bg-gray-800 text-gray-700 hover:text-white shadow-md hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/gupta-akshitaa/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-blue-900/30 hover:bg-blue-600 text-blue-400 hover:text-white' 
                    : 'bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white shadow-md hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>

              <motion.a
                href="mailto:guptakshita@gmail.com"
                className={`p-3 rounded-xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-red-900/30 hover:bg-red-600 text-red-400 hover:text-white' 
                    : 'bg-red-100 hover:bg-red-600 text-red-600 hover:text-white shadow-md hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>

              <motion.a
                href="https://x.com/akkshiiitaa"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-sky-900/30 hover:bg-sky-500 text-sky-400 hover:text-white' 
                    : 'bg-sky-100 hover:bg-sky-500 text-sky-600 hover:text-white shadow-md hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter size={20} />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/akkshiiitaa/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-pink-900/30 hover:bg-pink-600 text-pink-400 hover:text-white' 
                    : 'bg-pink-100 hover:bg-pink-600 text-pink-600 hover:text-white shadow-md hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
              </motion.a>


              <motion.a
                href="https://leetcode.com/u/akkshiiitaa/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-yellow-900/30 hover:bg-yellow-600 text-yellow-400 hover:text-white' 
                    : 'bg-yellow-100 hover:bg-yellow-600 text-yellow-600 hover:text-white shadow-md hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code size={20} />
              </motion.a>

              <motion.a
                href="https://bento.me/akshita-gupta"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-purple-900/30 hover:bg-purple-600 text-purple-400 hover:text-white' 
                    : 'bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white shadow-md hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
              </motion.a>
            </div>

            <div className="text-center">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © 2025 Made with ❤️ by <span className="font-semibold">Akshita Gupta</span>
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}

export default App
