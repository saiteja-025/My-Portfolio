import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/projects';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" />;
  }

  return (
    <div className="relative z-10 selection:bg-accent/30 selection:text-current min-h-screen flex flex-col">
      {/* Top Nav */}
      <nav className="fixed w-full top-0 z-50 transition-all duration-300 px-4 md:px-6 py-4 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center">
          <Link
            to="/"
            className="group flex items-center gap-2 px-4 py-2 font-medium bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-neutral-900 transition-colors text-slate-900 dark:text-white pointer-events-auto shadow-sm"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back to Work
          </Link>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-secondary font-medium max-w-2xl">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-black font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  <FaGithub size={18} /> View Repository
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#111] text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl bg-white dark:bg-[#111]"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full object-cover max-h-[500px]"
            />
          </motion.div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 space-y-12"
            >
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">Overview</h2>
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-lg">
                  {project.overview}
                </p>
              </section>

              {/* Case Study */}
              <section>
                <h2 className="text-3xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">Case Study</h2>
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-lg">
                  {project.caseStudy}
                </p>
              </section>

              {/* What I Learned */}
              <section>
                <h2 className="text-3xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">What I Learned</h2>
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-lg">
                  {project.learnings}
                </p>
              </section>

            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="p-6 rounded-3xl bg-slate-100/50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-full border border-black/5 dark:border-white/10 shadow-sm dark:shadow-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-100/50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Key Features</h3>
                <ul className="space-y-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-gray-300 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
