import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 relative">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        
        <h1 className="text-[55px] lg:text-[7.0rem] mt-32 lg:mt-40 leading-[1.1] text-black dark:text-white text-center font-semibold px-4 tracking-tight">
          <span className="block overflow-hidden pb-2">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Hi, I'm Saiteja.
            </motion.span>
          </span>
          <span className="block overflow-hidden lg:-mt-2">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Software & ML Engineer.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-lg lg:text-xl text-center text-slate-600 dark:text-gray-400 max-w-4xl mx-auto font-medium"
        >
          Architecting scalable AI models and engineering high-performance digital ecosystems.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
