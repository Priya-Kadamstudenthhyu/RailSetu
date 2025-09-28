import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Shuffle, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const challenges = [
  {
    icon: <Layers className="h-8 w-8 sm:h-10 sm:w-10 text-sky-600" />,
    title: "Many Trains, Few Resources",
    description: "High-density traffic on single/double lines, competing for limited tracks, platforms, and blocks.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10 text-sky-600" />,
    title: "Strict Safety & Rules",
    description: "Unyielding adherence to safety protocols, signalling, headways, and complex institutional rules is non-negotiable.",
  },
  {
    icon: <Shuffle className="h-8 w-8 sm:h-10 sm:w-10 text-sky-600" />,
    title: "Conflicting Goals",
    description: "Balancing punctuality, throughput, and priority handling creates a constant operational tug-of-war.",
  },
  {
    icon: <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-sky-600" />,
    title: "Real-time Chaos",
    description: "Breakdowns, weather, and unexpected incidents demand constant, high-stakes re-planning under immense pressure.",
  },
];

const ChallengeSection = () => (
  <AnimatedSection className="py-12 sm:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">The Unseen Complexity of Railway Control</h2>
        <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-lg text-slate-600">
          Section controllers face a combinatorial explosion of decisions every minute. Here's why it's one of the most demanding jobs.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-50 p-5 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-3 sm:mb-4">{challenge.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">{challenge.title}</h3>
            <p className="text-sm sm:text-base text-slate-600">{challenge.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ChallengeSection;