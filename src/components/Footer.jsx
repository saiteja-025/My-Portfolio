import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-black/5 dark:border-white/5 bg-slate-50 dark:bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-secondary text-sm font-medium">
          © {new Date().getFullYear()} Kandagatla Saiteja. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm font-bold text-slate-600 dark:text-secondary">
          <a href="#" className="hover:text-blue-600 dark:hover:text-primary transition-colors">Twitter</a>
          <a href="https://github.com" className="hover:text-blue-600 dark:hover:text-primary transition-colors">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-blue-600 dark:hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
