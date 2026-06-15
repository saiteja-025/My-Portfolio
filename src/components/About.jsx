import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-white/50">
            Driven by Data, Defined by Code.
          </h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-secondary leading-relaxed font-medium mb-6">
            I am a Computer Science student specializing in Artificial Intelligence and Machine Learning at SR University.
          </p>
          <p className="text-lg md:text-xl text-slate-700 dark:text-secondary leading-relaxed font-medium mb-6">
            My interests lie in Software Development, Machine Learning, and Problem Solving. Through internships, academic projects, and continuous learning, I enjoy building applications that solve real-world problems and help me grow as an engineer.
          </p>
          <p className="text-lg md:text-xl text-slate-700 dark:text-secondary leading-relaxed font-medium">
            Currently, I am focused on strengthening my development skills, exploring AI/ML technologies, and preparing for software engineering opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
