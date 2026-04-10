import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-10 min-h-screen flex flex-col bg-slate-50 dark:bg-[#0a0a0a]">
      {/* Top Nav */}
      <nav className="fixed w-full top-0 z-50 transition-all duration-300 px-4 md:px-6 py-4 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center">
          <Link
            to="/"
            className="group flex items-center gap-2 px-4 py-2 font-medium bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-neutral-900 transition-colors text-slate-900 dark:text-white pointer-events-auto shadow-sm"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-20 px-6 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl bg-white dark:bg-[#111] p-10 md:p-14 rounded-[40px] shadow-2xl border border-black/5 dark:border-white/5"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
              Let's Connect
            </h1>
            <p className="text-lg text-slate-600 dark:text-gray-400 font-medium">
              Send me a message and I'll get back to you as soon as possible.
            </p>
          </div>

          <form 
            action="https://formsubmit.co/kandagatlasaiteja25@gmail.com" 
            method="POST"
            className="flex flex-col gap-6"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
            <input type="hidden" name="_next" value={window.location.origin} />
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-gray-300 ml-2">Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="hello@example.com" 
                required
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-gray-300 ml-2">Your Message</label>
              <textarea 
                name="message" 
                placeholder="What's on your mind?" 
                required
                rows="5"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-600/30 cursor-pointer flex justify-center items-center gap-3"
            >
              Send Message <Send size={20} />
            </button>
          </form>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
