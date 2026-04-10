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
          <p className="text-xl md:text-2xl text-slate-700 dark:text-secondary leading-relaxed font-medium">
            I am a Software Developer and Machine Learning Engineer passionate about bridging the gap between artificial intelligence and practical web applications. With a strong foundation in modern tech stacks, I build systems that are not just functional, but intelligent and scalable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
