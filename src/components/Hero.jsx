import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Background Decorative Glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Hero Content */}
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 max-w-2xl">
          
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-accent border border-blue-100 dark:border-blue-900/30 text-xs md:text-sm font-bold mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-accent animate-pulse"></span>
            Available for Internships & Opportunities
          </motion.div>

          {/* Small Intro */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs md:text-sm font-black tracking-widest text-slate-500 dark:text-secondary mb-3 uppercase"
          >
            HELLO, I'M
          </motion.p>

          {/* Large Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-slate-900 dark:text-white mb-6 select-none w-full">
            <span className="block overflow-hidden pb-1">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                KANDAGATLA
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-accent dark:to-blue-400"
              >
                SAI TEJA
              </motion.span>
            </span>
          </h1>

          {/* Professional Identity */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl font-bold text-slate-700 dark:text-gray-300 mb-6"
          >
            Software Developer <span className="text-slate-300 dark:text-white/20 mx-1.5 md:mx-2 font-light">|</span> Machine Learning Enthusiast
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-lg text-slate-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-8 font-medium"
          >
            Building practical software solutions and exploring the power of machine learning to solve real-world challenges.
          </motion.p>

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-secondary mb-10"
          >
            <span>Software Development</span>
            <span className="text-slate-300 dark:text-white/20 font-light">•</span>
            <span>Machine Learning</span>
            <span className="text-slate-300 dark:text-white/20 font-light">•</span>
            <span>Problem Solving</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white dark:bg-white dark:text-black font-bold text-sm md:text-base rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 font-bold text-sm md:text-base rounded-full hover:scale-105 transition-all duration-300"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>

        {/* Right Column: Professional Portrait */}
        <div className="flex-1 flex justify-center items-center order-1 lg:order-2 w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-square"
          >
            {/* Ambient Background Glow matching the blue theme */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-indigo-500/30 dark:from-accent/40 dark:to-blue-400/40 rounded-full blur-2xl opacity-60 dark:opacity-80 animate-pulse" />
            
            {/* Spinning gradient border layer for premium look */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-transparent dark:from-accent dark:via-blue-400 dark:to-transparent opacity-70 p-[3px] animate-[spin_12s_linear_infinite]" />

            {/* Inner Glow Border */}
            <div className="absolute inset-[3px] rounded-full bg-white dark:bg-[#0a0a0a] z-[1]" />
            
            {/* Image Wrapper */}
            <div className="absolute inset-[6px] rounded-full overflow-hidden border border-slate-200/50 dark:border-white/10 backdrop-blur-sm z-[2]">
              <img
                src={profileImg}
                alt="Kandagatla Sai Teja"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
