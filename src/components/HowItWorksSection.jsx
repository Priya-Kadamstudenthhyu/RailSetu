import React from 'react';
import { motion } from 'framer-motion';
import { DatabaseZap, BrainCircuit, MousePointerClick, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

// Data for the steps, now with icons
const steps = [
  {
    icon: <DatabaseZap size={32} className="text-sky-600" />,
    title: "Data Ingestion",
    description: "Live data on train locations, signals, timetables, and section status is continuously fed into the system.",
  },
  {
    icon: <BrainCircuit size={32} className="text-sky-600" />,
    title: "AI Optimization",
    description: "The engine models millions of possible scenarios against all rules to find the most efficient, conflict-free plan.",
  },
  {
    icon: <MousePointerClick size={32} className="text-sky-600" />,
    title: "Controller Action",
    description: "Clear, explainable recommendations are presented. Controllers can accept, simulate alternatives, or override.",
  },
  {
    icon: <TrendingUp size={32} className="text-sky-600" />,
    title: "Monitor & Learn",
    description: "The system monitors the outcomes, providing KPIs and learning from decisions to improve future suggestions.",
  },
];

// A new sub-component for each timeline item to keep the main component clean
const TimelineItem = ({ step, index }) => {
  const isOdd = index % 2 !== 0;

  // Animation variants for sliding in from the sides
  const variants = {
    hidden: { opacity: 0, x: isOdd ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
      className={`mb-12 flex w-full items-center justify-between ${isOdd ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <div className="hidden md:block w-5/12"></div>
      
      {/* The central icon point */}
      <div className="z-10 flex items-center justify-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-100 ring-4 ring-white">
          {step.icon}
        </div>
      </div>
      
      {/* The content card */}
      <div className="w-full md:w-5/12">
        <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
          {/* Decorative step number */}
          <div className="absolute -top-4 -left-4 z-0 text-8xl font-black text-slate-100/80">
            0{index + 1}
          </div>
          <div className="relative z-10">
            <h3 className="mb-2 text-xl font-bold text-slate-800">{step.title}</h3>
            <p className="text-slate-600">{step.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorksSection = () => {
  return (
    <AnimatedSection className="py-20 sm:py-28 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
            From Data to Decision in Seconds
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
            A seamless, real-time loop that transforms raw data into optimal operational control.
          </p>
        </div>

        <div className="relative">
          {/* The background timeline */}
          <div
            className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transform bg-sky-200"
            aria-hidden="true"
          ></div>
          
          <div>
            {steps.map((step, index) => (
              <TimelineItem key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HowItWorksSection;