import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '3+', label: 'Projects Completed' },
    { value: '10+', label: 'Tech Stack Mastery' },
    { value: '100%', label: 'Commitment' },
  ];

  return (
    <section className="py-20 px-6 border-y border-black/5 dark:border-white/5 bg-white/30 dark:bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col gap-2"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
            <p className="text-sm text-slate-500 dark:text-secondary uppercase tracking-wider font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
