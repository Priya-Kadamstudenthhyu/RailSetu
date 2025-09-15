import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Network, ShieldCheck, GitBranch, Zap, Shuffle, BrainCircuit, BotMessageSquare, TestTube, ArrowRight, Layers, BarChart, CheckCircle, Clock, TrainTrack } from 'lucide-react';
import './App.css'
// A reusable component for sections that animate on scroll
const AnimatedSection = ({ children, className = '' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Header Component
const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <TrainTrack className="h-8 w-8 text-sky-600" />
        <span className="text-2xl font-bold text-slate-800 tracking-tight">RailSetu</span>
      </div>
      <a
        href="#contact"
        className="px-5 py-2 bg-sky-600 text-white font-semibold rounded-full hover:bg-sky-700 transition-colors duration-300 transform hover:scale-105"
      >
        Request a Demo
      </a>
    </div>
  </header>
);

// Hero Section Component
const HeroSection = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-100 rounded-full opacity-50 -translate-x-1/4 -translate-y-1/4 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-50 translate-x-1/4 translate-y-1/4 animate-pulse-slow"></div>
    </div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-slate-800 tracking-tighter leading-tight"
      >
        Intelligent Railway Control for a Nation in Motion
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-600"
      >
        Our AI-powered Decision Support System empowers section controllers to navigate complexity, enhance throughput, and ensure unwavering safety and punctuality across the network.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 flex justify-center items-center space-x-4"
      >
        <a href="#solution" className="px-8 py-3 bg-sky-600 text-white font-bold rounded-full text-lg hover:bg-sky-700 transition-all duration-300 shadow-lg transform hover:scale-105">
          Discover the Solution
        </a>
      </motion.div>
    </div>
  </section>
);


// The Challenge Section
const challenges = [
  {
    icon: <Layers className="h-10 w-10 text-sky-600" />,
    title: "Many Trains, Few Resources",
    description: "High-density traffic on single/double lines, competing for limited tracks, platforms, and blocks.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-sky-600" />,
    title: "Strict Safety & Rules",
    description: "Unyielding adherence to safety protocols, signalling, headways, and complex institutional rules is non-negotiable.",
  },
  {
    icon: <Shuffle className="h-10 w-10 text-sky-600" />,
    title: "Conflicting Goals",
    description: "Balancing punctuality, throughput, and priority handling creates a constant operational tug-of-war.",
  },
  {
    icon: <Zap className="h-10 w-10 text-sky-600" />,
    title: "Real-time Chaos",
    description: "Breakdowns, weather, and unexpected incidents demand constant, high-stakes re-planning under immense pressure.",
  },
];

const ChallengeSection = () => (
  <AnimatedSection className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">The Unseen Complexity of Railway Control</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          Section controllers face a combinatorial explosion of decisions every minute. Here's why it's one of the most demanding jobs.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">{challenge.icon}</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">{challenge.title}</h3>
            <p className="text-slate-600">{challenge.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

// The Solution Section
const features = [
    {
      icon: <BrainCircuit className="h-7 w-7 text-white" />,
      title: "AI-Powered Optimization",
      description: "Generates conflict-free, feasible schedules in seconds by modeling all constraints, priorities, and rules.",
    },
    {
      icon: <BotMessageSquare className="h-7 w-7 text-white" />,
      title: "Explainable Recommendations",
      description: "Suggests train precedence, crossings, and holds with clear, logical explanations controllers can trust.",
    },
    {
      icon: <TestTube className="h-7 w-7 text-white" />,
      title: "“What-If” Simulations",
      description: "Allows controllers to safely test and compare alternative plans before committing to a decision.",
    },
    {
      icon: <BarChart className="h-7 w-7 text-white" />,
      title: "Real-Time Dashboards",
      description: "Provides live KPIs on punctuality, throughput, and asset utilization for continuous monitoring and improvement.",
    },
  ];

const SolutionSection = () => (
    <AnimatedSection id="solution" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Your Intelligent Co-Pilot for Network Control</h2>
            <p className="mt-4 text-lg text-slate-600 mb-8">
              RailSetu is not an autopilot; it's a decision-support system that augments the experience of your controllers, enabling them to make faster, safer, and more optimal decisions.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">{feature.title}</h3>
                    <p className="text-slate-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
             <div className="bg-white rounded-2xl shadow-2xl p-4 transform lg:rotate-3 transition hover:rotate-0 hover:scale-105 duration-500">
                <div className="aspect-video bg-slate-100 rounded-lg p-6">
                    <p className="font-mono text-xs text-slate-400">// Live System Recommendation</p>
                    <div className="mt-4 bg-green-100 border border-green-300 rounded-lg p-4">
                        <p className="font-semibold text-green-800">Hold Freight 27B at Station M for 8 mins.</p>
                        <p className="text-sm text-green-700 mt-2">
                            <span className="font-semibold">Reason:</span> Allows delayed Express 12A (high priority) to pass, recovering 12 mins of its journey time.
                        </p>
                        <p className="text-sm text-green-700 mt-1">
                            <span className="font-semibold">Impact:</span> Prevents downstream platform conflict at Junction Y.
                        </p>
                    </div>
                     <div className="mt-4 bg-yellow-100 border border-yellow-300 rounded-lg p-4 opacity-70">
                        <p className="font-semibold text-yellow-800">Alternative: Hold Express 12A.</p>
                        <p className="text-sm text-yellow-700 mt-1">
                            <span className="font-semibold">Impact:</span> +15 mins delay to Express 12A, potential missed connection.
                        </p>
                    </div>
                </div>
                <p className="text-center mt-4 text-sm text-slate-500">Simplified UI Mockup</p>
             </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
);

// How It Works Section
const steps = [
  { title: "Data Ingestion", description: "Live data on train locations, signals, timetables, and section status is continuously fed into the system." },
  { title: "AI Optimization", description: "The engine models millions of possible scenarios against all rules to find the most efficient, conflict-free plan." },
  { title: "Controller Action", description: "Clear, explainable recommendations are presented. Controllers can accept, simulate alternatives, or override." },
  { title: "Monitor & Learn", description: "The system monitors the outcomes, providing KPIs and learning from decisions to improve future suggestions." },
];

const HowItWorksSection = () => (
  <AnimatedSection className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">From Data to Decision in Seconds</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          A seamless, real-time loop that transforms raw data into optimal operational control.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-sky-200 hidden md:block" aria-hidden="true"></div>
        {steps.map((step, index) => (
          <div key={index} className="md:flex items-center justify-center mb-12">
            <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:order-2'}`}>
              <h3 className="text-2xl font-bold text-sky-600 mb-2">0{index + 1}. {step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
            <div className={`md:w-2/12 flex justify-center ${index % 2 === 0 ? '' : 'md:order-1'}`}>
              <div className="z-10 w-6 h-6 bg-sky-600 rounded-full shadow-lg ring-4 ring-white"></div>
            </div>
             <div className="md:w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

// Impact Section
const impacts = [
  {
    icon: <Clock className="h-8 w-8 text-sky-600" />,
    title: "Boost Punctuality",
    description: "Significantly reduce and recover from delays, improving on-time performance.",
  },
  {
    icon: <TrainTrack className="h-8 w-8 text-sky-600" />,
    title: "Increase Throughput",
    description: "Move more trains through each section without new infrastructure investments.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-sky-600" />,
    title: "Enhance Safety",
    description: "Programmatically enforce all safety constraints, reducing human error under pressure.",
  },
  {
    icon: <GitBranch className="h-8 w-8 text-sky-600" />,
    title: "Empower Controllers",
    description: "Provide data-backed confidence for faster, more consistent, and less stressful decisions.",
  },
];

const ImpactSection = () => (
  <AnimatedSection className="py-20 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">The Tangible Impact on Your Network</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          Transforming railway operations with measurable improvements in efficiency, safety, and reliability.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {impacts.map((impact, index) => (
          <div key={index} className="flex items-start space-x-5 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex-shrink-0">{impact.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-1">{impact.title}</h3>
              <p className="text-slate-600">{impact.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);


// Footer Component
const Footer = () => (
  <footer id="contact" className="bg-slate-800 text-slate-300">
    <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Network Control?</h2>
        <p className="max-w-xl mx-auto mb-8">
            Let's discuss how RailSetu can be tailored to the specific needs of your sections. Schedule a personalized demo with our team today.
        </p>
        <a
            href="mailto:demo@RailSetu.com"
            className="inline-block px-10 py-4 bg-sky-600 text-white font-bold rounded-full text-lg hover:bg-sky-700 transition-all duration-300 shadow-lg transform hover:scale-105"
        >
            Request a Demo
        </a>
        <div className="mt-12 border-t border-slate-700 pt-6">
            <p>&copy; {new Date().getFullYear()} RailSetu. All Rights Reserved.</p>
        </div>
    </div>
  </footer>
);


function App() {
  return (
    <div className="bg-white font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <ChallengeSection />
        <SolutionSection />
        <HowItWorksSection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App;