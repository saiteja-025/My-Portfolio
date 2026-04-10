import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Initial theme check
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const isDark = theme === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 px-4 md:px-6 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className={`max-w-5xl mx-auto rounded-full transition-all duration-300 ${
        scrolled ? 'glass px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none' : 'bg-transparent px-4 py-2'
      } flex justify-between items-center`}
      >
        <a href="#" className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">
          KS<span className="text-blue-600 dark:text-accent">.</span>
        </a>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 dark:text-secondary hover:text-slate-900 dark:hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-slate-700 dark:text-gray-300"
            aria-label="Toggle brightness"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold transition-colors border rounded-full border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-slate-900 dark:text-white"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
