import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const connectLinks = [
    { name: 'GitHub', href: 'https://github.com/saiteja-025', icon: FaGithub, hoverColor: 'hover:text-[#171515] dark:hover:text-white' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sai-teja-kandagatla-751739295/', icon: FaLinkedin, hoverColor: 'hover:text-[#0077B5] dark:hover:text-[#0077B5]' },
    { name: 'LeetCode', href: 'https://leetcode.com/u/lc_7fA92/', icon: SiLeetcode, hoverColor: 'hover:text-[#FFA116] dark:hover:text-[#FFA116]' },
    { name: 'Email', href: 'mailto:kandagatlasaiteja25@gmail.com', icon: FaEnvelope, hoverColor: 'hover:text-blue-600 dark:hover:text-accent' }
  ];

  return (
    <footer className="relative py-20 px-6 border-t border-black/5 dark:border-white/5 bg-white/40 dark:bg-[#0c0c0c] backdrop-blur-md transition-all duration-300 overflow-hidden">
      
      {/* Background ambient glow effect */}
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          
          {/* Left Column: Brand & Tagline */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                KANDAGATLA SAI TEJA
              </h3>
              <p className="text-sm font-bold text-blue-600 dark:text-accent mt-1">
                Software Developer & Machine Learning Enthusiast
              </p>
            </div>
            
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed max-w-md font-medium">
              Building software solutions, exploring AI/ML, and continuously learning through projects, internships, and problem solving.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              {/* Availability Status */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-extrabold w-fit border border-green-500/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                🟢 Open to Internships & Opportunities
              </div>

              {/* Quote */}
              <p className="text-xs italic text-slate-400 dark:text-slate-500 pl-1">
                "Turning ideas into software and data into insights."
              </p>
            </div>
          </div>

          {/* Center Column: Quick Links */}
          <div className="col-span-6 md:col-span-6 lg:col-span-3 lg:col-start-7 flex flex-col gap-5">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Quick Links
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block text-slate-600 dark:text-gray-400 text-sm font-semibold hover:text-blue-600 dark:hover:text-accent transition-all duration-200 hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Connect */}
          <div className="col-span-6 md:col-span-6 lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Connect
            </h4>
            <ul className="flex flex-col gap-3">
              {connectLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2.5 text-slate-600 dark:text-gray-400 text-sm font-semibold transition-colors duration-200 ${link.hoverColor}`}
                    >
                      <IconComponent className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 dark:border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs md:text-sm font-medium text-slate-500 dark:text-secondary">
          <p>© 2026 Kandagatla Sai Teja</p>
          <p>Designed & Developed by Sai Teja</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
