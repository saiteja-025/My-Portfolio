import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRightCircle } from 'lucide-react';

const experiences = [
  {
    role: "Machine Learning Intern",
    company: "Cognifyz Technologies",
    duration: "2025",
    description: "Worked on real-world machine learning tasks including data preprocessing, model building, and analysis using Python.",
    responsibilities: [
      "Built ML models for prediction tasks",
      "Performed data preprocessing and cleaning",
      "Applied regression and statistical analysis techniques"
    ],
    impact: "Gained hands-on experience in building and evaluating machine learning models on real datasets."
  },
  {
    role: "Web Development Intern",
    company: "SkillCraft Technology",
    duration: "2025",
    description: "Developed interactive web applications and improved frontend performance using modern web technologies.",
    responsibilities: [
      "Built responsive applications using HTML, CSS, JavaScript",
      "Developed projects like To-Do App and Quiz Application",
      "Used GitHub for version control and project management"
    ],
    impact: "Strengthened frontend development and real-world project building skills."
  },
  {
    role: "Software Developer (Projects)",
    company: "Independent",
    duration: "Ongoing",
    description: "Designing and building scalable applications with focus on real-world problem solving and user experience.",
    responsibilities: [
      "Built AI Interview Simulator",
      "Developed AI Telegram Bot",
      "Created AI Research Management System"
    ],
    impact: "Improved full-stack development and system design skills by building real-world applications."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-slate-50/50 dark:bg-black/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-slate-900 dark:text-white">Experience.</h2>
          <p className="text-slate-600 dark:text-secondary max-w-2xl mx-auto text-lg hover-scale">Professional journey and impact-driven roles.</p>
        </motion.div>

        <div className="relative border-l border-black/10 dark:border-white/10 ml-4 md:ml-8 space-y-12 pb-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline marker */}
              <div className="absolute -left-4 md:-left-8 top-1 w-8 h-8 rounded-full bg-slate-100 dark:bg-[#111] border border-black/10 dark:border-white/10 flex items-center justify-center shadow-sm">
                <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-accent" />
              </div>

              {/* Content Card */}
              <div className="glass p-8 md:p-10 rounded-3xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-none hover:border-black/20 dark:hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                      {exp.role} 
                    </h3>
                    <p className="text-lg font-medium text-blue-600 dark:text-accent mt-1 flex items-center gap-2">
                      <Briefcase size={16} /> {exp.company}
                    </p>
                  </div>
                  <span className="inline-block px-4 py-1.5 bg-slate-200/50 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-full shrink-0 border border-black/5 dark:border-white/10">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed mb-6 font-medium">
                  {exp.description}
                </p>

                <div className="space-y-4 mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white/70">Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-gray-400 text-sm">
                        <ArrowRightCircle size={16} className="text-slate-400 dark:text-white/30 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-black/5 dark:border-white/5">
                  <p className="text-sm">
                    <strong className="text-slate-900 dark:text-white">Impact: </strong> 
                    <span className="text-slate-600 dark:text-gray-400">{exp.impact}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
