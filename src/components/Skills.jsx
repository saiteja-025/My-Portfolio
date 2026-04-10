import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const customSkills = [
    {
      category: 'Languages',
      items: [
        { name: 'C', icon: 'c/c-original.svg' },
        { name: 'Python', icon: 'python/python-original.svg' },
        { name: 'JavaScript', icon: 'javascript/javascript-original.svg' }
      ]
    },
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5', icon: 'html5/html5-original.svg' },
        { name: 'CSS3', icon: 'css3/css3-original.svg' },
        { name: 'React', icon: 'react/react-original.svg' },
        { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original.svg' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
        { name: 'Express', icon: 'express/express-original.svg' },
        { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
        { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Docker', icon: 'docker/docker-original.svg' },
        { name: 'Git', icon: 'git/git-original.svg' }
      ]
    },
    {
      category: 'AI/ML',
      items: [
        { name: 'LLM', isExternal: true, icon: 'https://img.icons8.com/color/96/brain--v1.png' },
        { name: 'LangChain', isExternal: true, icon: 'https://img.icons8.com/color/96/link.png' },
        { name: 'RAG', isExternal: true, icon: 'https://img.icons8.com/color/96/search--v1.png' },
        { name: 'Vector DB', isExternal: true, icon: 'https://img.icons8.com/color/96/database.png' },
        { name: 'Embeddings', isExternal: true, icon: 'https://img.icons8.com/color/96/matrix.png' },
        { name: 'Claude Code', isExternal: true, icon: 'https://img.icons8.com/color/96/artificial-intelligence.png' }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: 'git/git-original.svg' },
        { name: 'GitHub', icon: 'github/github-original.svg' },
        { name: 'VS Code', icon: 'vscode/vscode-original.svg' },
        { name: 'Figma', icon: 'figma/figma-original.svg' },
        { name: 'npm', icon: 'npm/npm-original-wordmark.svg' },
        { name: 'Postman', isExternal: true, icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png' },
        { name: 'GoHighLevel', isExternal: true, icon: 'https://img.icons8.com/color/96/level-up.png' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">Tech Stack</h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {customSkills.map((spec, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">{spec.category}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {spec.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="group flex flex-col items-center justify-center p-3 bg-white dark:bg-[#111] rounded-3xl aspect-square transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-[#1a1a1a] cursor-default border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20"
                  >
                    <div className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                      <img 
                        src={item.isExternal ? item.icon : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}`}
                        alt={item.name}
                        className="w-full h-full object-contain drop-shadow-sm"
                      />
                    </div>
                    <p className="text-slate-500 dark:text-gray-400 font-semibold text-xs tracking-wide group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-center line-clamp-1">
                      {item.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
