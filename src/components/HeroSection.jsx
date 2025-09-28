import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pb-32 bg-slate-50 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-sky-100 rounded-full opacity-50 -translate-x-1/4 -translate-y-1/4 animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-indigo-100 rounded-full opacity-50 translate-x-1/4 translate-y-1/4 animate-pulse-slow hidden sm:block"></div>
    </div>
    <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-800 tracking-tighter leading-tight"
      >
        Intelligent Railway Control for a Nation in Motion
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 sm:mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-600"
      >
        Our AI-powered Decision Support System empowers section controllers to navigate complexity, enhance throughput, and ensure unwavering safety and punctuality across the network.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <a href="https://railsetu.netlify.app/" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-sky-600 text-white font-bold rounded-full text-base sm:text-lg hover:bg-sky-700 transition-all duration-300 shadow-lg transform hover:scale-105 w-full sm:w-auto text-center">
          Discover the Solution 
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;