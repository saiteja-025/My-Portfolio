import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="contact" className="mt-20 max-w-7xl mx-auto px-2 mb-32 scroll-mt-24">
      
      {/* Massive Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-7xl md:text-8xl lg:text-[10rem] text-black dark:text-white pb-3 tracking-tighter leading-[0.85] text-center font-black transition-colors duration-300 select-none"
      >
        <span className="block overflow-hidden">
          <motion.span 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Let's
          </motion.span>
        </span>
        <span className="block overflow-hidden pb-4">
          <motion.span 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-black dark:from-white dark:to-gray-400"
          >
            Talk!
          </motion.span>
        </span>
      </motion.h1>

      {/* Embedded Contact Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 bg-black dark:bg-white rounded-[40px] px-6 lg:px-16 py-12 lg:py-24 flex flex-col items-center justify-center text-center relative overflow-hidden transition-colors duration-300"
      >
        <h2 className="text-white dark:text-black text-3xl lg:text-5xl font-semibold mb-6">
          Let's Work Together
        </h2>
        
        <p className="text-gray-400 dark:text-gray-600 text-lg lg:text-xl max-w-2xl mb-12">
          Open to freelance projects and full-time opportunities. If you have an idea, a role, or just want to connect — I'd love to hear from you.
        </p>

        <Link 
          to="/contact"
          className="bg-white dark:bg-black text-black dark:text-white font-bold text-xl px-12 py-5 rounded-full border border-black/10 dark:border-white/10 hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer"
        >
          Let's Connect
        </Link>

        <a 
          href="/resume.pdf" 
          download="Saiteja_Resume.pdf"
          className="mt-8 mb-11 flex items-center gap-2 text-gray-500 hover:text-white dark:hover:text-black text-sm font-medium transition-colors duration-300 cursor-pointer"
        >
          <Download size={16} />
          <span>Download Resume</span>
        </a>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          <a href="https://github.com/saiteja-025" target="_blank" rel="noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-black transition-colors flex items-center gap-2">
            <FaGithub size={24} />
            <span className="font-medium">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/sai-teja-kandagatla-751739295/" target="_blank" rel="noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-black transition-colors flex items-center gap-2">
            <FaLinkedin size={24} />
            <span className="font-medium">LinkedIn</span>
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-black transition-colors flex items-center gap-2">
            <FaTwitter size={24} />
            <span className="font-medium">X (Twitter)</span>
          </a> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
