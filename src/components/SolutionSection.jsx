import React from 'react';
import { BrainCircuit, BotMessageSquare, TestTube, BarChart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const features = [
  {
    icon: <BrainCircuit className="h-6 w-6 sm:h-7 sm:w-7 text-white" />,
    title: "AI-Powered Optimization",
    description: "Generates conflict-free, feasible schedules in seconds by modeling all constraints, priorities, and rules.",
  },
  {
    icon: <BotMessageSquare className="h-6 w-6 sm:h-7 sm:w-7 text-white" />,
    title: "Explainable Recommendations",
    description: "Suggests train precedence, crossings, and holds with clear, logical explanations controllers can trust.",
  },
  {
    icon: <TestTube className="h-6 w-6 sm:h-7 sm:w-7 text-white" />,
    title: "What-If” Simulations",
    description: "Allows controllers to safely test and compare alternative plans before committing to a decision.",
  },
  {
    icon: <BarChart className="h-6 w-6 sm:h-7 sm:w-7 text-white" />,
    title: "Real-Time Dashboards",
    description: "Provides live KPIs on punctuality, throughput, and asset utilization for continuous monitoring and improvement.",
  },
];

const SolutionSection = () => (
  <AnimatedSection id="solution" className="py-12 sm:py-20 bg-slate-50">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
        <div className="lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">Your Intelligent Co-Pilot for Network Control</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 mb-6 sm:mb-8">
            RailSetu is not an autopilot; it's a decision-support system that augments the experience of your controllers, enabling them to make faster, safer, and more optimal decisions.
          </p>
          <div className="space-y-5 sm:space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-sky-600 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 mt-6 sm:mt-10 lg:mt-0">
          <div className="bg-white rounded-2xl shadow-2xl p-4 transform lg:rotate-3 transition hover:rotate-0 hover:scale-105 duration-500">
            <div className="aspect-video bg-slate-100 rounded-lg p-4 sm:p-6">
              <p className="font-mono text-xs text-slate-400">// Live System Recommendation</p>
              <div className="mt-4 bg-green-100 border border-green-300 rounded-lg p-3 sm:p-4">
                <p className="font-semibold text-green-800">Hold Freight 27B at Station M for 8 mins.</p>
                <p className="text-xs sm:text-sm text-green-700 mt-2">
                  <span className="font-semibold">Reason:</span> Allows delayed Express 12A (high priority) to pass, recovering 12 mins of its journey time.
                </p>
                <p className="text-xs sm:text-sm text-green-700 mt-1">
                  <span className="font-semibold">Impact:</span> Prevents downstream platform conflict at Junction Y.
                </p>
              </div>
              <div className="mt-4 bg-yellow-100 border border-yellow-300 rounded-lg p-3 sm:p-4 opacity-70">
                <p className="font-semibold text-yellow-800">Alternative: Hold Express 12A.</p>
                <p className="text-xs sm:text-sm text-yellow-700 mt-1">
                  <span className="font-semibold">Impact:</span> +15 mins delay to Express 12A, potential missed connection.
                </p>
              </div>
            </div>
            <p className="text-center mt-4 text-xs sm:text-sm text-slate-500">Simplified UI Mockup</p>
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default SolutionSection;