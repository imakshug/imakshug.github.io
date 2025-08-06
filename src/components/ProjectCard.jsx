import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const ProjectCard = ({ project, darkMode, index }) => {
  return (
    <motion.div 
      key={index}
      className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 project-card ${
        darkMode 
          ? 'bg-gray-700/50 hover:bg-gray-700/80' 
          : 'bg-gray-50 hover:bg-white shadow-md hover:shadow-lg'
      }`}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >      <div className="aspect-video relative overflow-hidden">
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
            </motion.a>
          )}
        </div>
        
        <motion.div 
          className="absolute inset-0 bg-white/20"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>
      <div className="p-4">
        <h4 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h4>
        <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tech.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className={`px-2 py-1 text-xs rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 group-hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-800'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
