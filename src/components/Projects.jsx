import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-slate-900 dark:text-white">Projects</h2>
          <p className="text-slate-600 dark:text-secondary max-w-2xl mx-auto text-lg">A selection of my best projects showcasing AI integration and scalable architectures.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass rounded-3xl overflow-hidden hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 flex flex-col h-full cursor-pointer hover:shadow-xl dark:hover:shadow-none"
            >
              <Link to={`/projects/${project.id}`} className="flex flex-col h-full">
                <div className="relative h-60 overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 dark:bg-black/50 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                <div className="p-8 flex flex-col grow">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white inline-flex justify-between items-center w-full">
                    {project.title}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-600 dark:text-accent" size={20}/>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-semibold px-3 py-1 bg-black/5 dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-full border border-black/5 dark:border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm font-bold pt-4 border-t border-black/10 dark:border-white/10 text-slate-800 dark:text-white" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-accent transition-colors z-10 relative">
                        <FaGithub size={16} /> Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-accent transition-colors ml-auto z-10 relative">
                        Live Demo <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
