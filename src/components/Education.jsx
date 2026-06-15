import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
      institution: "SR University",
      location: "Warangal, Telangana",
      duration: "2023 – 2027",
      focusAreas: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Software Development",
        "Database Management Systems",
        "Object-Oriented Programming"
      ]
    },
    {
      degree: "Intermediate (MPC)",
      institution: "SR Junior College",
      location: "Hanamkonda, Warangal",
      duration: "2021 – 2023",
      description: "Completed senior secondary education focusing on Mathematics, Physics, and Chemistry."
    },
    {
      degree: "Secondary Education",
      institution: "Raman High School",
      location: "Hanamkonda, Warangal",
      duration: "Completed in 2021",
      description: "Completed secondary education with a strong foundation in science, mathematics, and analytical skills."
    }
  ];

  return (
    <section id="education" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-slate-900 dark:text-white">Education.</h2>
          <p className="text-slate-600 dark:text-secondary max-w-2xl mx-auto text-lg font-medium">Academic background and timelines.</p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 md:p-10 rounded-3xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-none hover:border-black/20 dark:hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <GraduationCap className="text-blue-600 dark:text-accent shrink-0" size={28} />
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-slate-700 dark:text-secondary">
                    <span className="font-semibold text-lg">{edu.institution}</span>
                    {edu.location && (
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-500">
                        <MapPin size={14} /> {edu.location}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-slate-200/50 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-full border border-black/5 dark:border-white/10">
                    <Calendar size={14} /> {edu.duration}
                  </span>
                </div>
              </div>

              {edu.description && (
                <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed font-medium">
                  {edu.description}
                </p>
              )}

              {edu.focusAreas && (
                <div className="space-y-3 mt-6 pt-6 border-t border-black/5 dark:border-white/5">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white/70">Focus Areas</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.focusAreas.map((area, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-gray-400 text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-accent shrink-0"></span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
