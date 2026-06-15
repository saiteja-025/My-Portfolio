import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';
import { ArrowRight } from 'lucide-react';

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background glow matching the LeetCode branding color */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 dark:bg-amber-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">Coding Profiles</h2>
          <p className="text-slate-600 dark:text-secondary max-w-xl text-lg font-medium">My competitive programming and algorithmic practice footprints across technical platforms.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group glass rounded-3xl p-8 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 max-w-3xl mx-auto hover:shadow-2xl dark:hover:shadow-[0_20px_50px_rgba(245,158,11,0.05)] border border-black/5 dark:border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center gap-8"
        >
          {/* Subtle orange accent glow on card hover */}
          <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Platform Icon Container */}
          <div className="shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-amber-50 dark:bg-amber-950/20 text-[#FFA116] border border-amber-100 dark:border-amber-900/30 transition-transform duration-500 group-hover:scale-105 shadow-sm">
            <SiLeetcode className="w-10 h-10 drop-shadow-[0_2px_10px_rgba(255,161,22,0.2)]" />
          </div>

          {/* Card Details */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FFA116] bg-amber-500/10 px-2.5 py-1 rounded-full">
                LeetCode
              </span>
            </div>
            <h3 className="text-2xl font-black tracking-tight text-[#FFA116] dark:text-[#FFA116] mb-3">
              Practicing DSA on LeetCode
            </h3>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm font-medium">
              Strengthening problem-solving skills through Data Structures, Algorithms, and consistent coding practice.
            </p>
          </div>

          {/* CTA Link */}
          <div className="shrink-0">
            <a
              href="https://leetcode.com/u/lc_7fA92/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white dark:bg-white dark:text-black font-bold text-sm rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:bg-[#FFA116] hover:text-white dark:hover:bg-[#FFA116] dark:hover:text-white cursor-pointer"
            >
              View Profile <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
