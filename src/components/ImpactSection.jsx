import React from 'react';
import { Clock, TrainTrack, CheckCircle, GitBranch } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const impacts = [
  {
    icon: <Clock className="h-7 w-7 sm:h-8 sm:w-8 text-sky-600" />,
    title: "Boost Punctuality",
    description: "Significantly reduce and recover from delays, improving on-time performance.",
  },
  {
    icon: <TrainTrack className="h-7 w-7 sm:h-8 sm:w-8 text-sky-600" />,
    title: "Increase Throughput",
    description: "Move more trains through each section without new infrastructure investments.",
  },
  {
    icon: <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8 text-sky-600" />,
    title: "Enhance Safety",
    description: "Programmatically enforce all safety constraints, reducing human error under pressure.",
  },
  {
    icon: <GitBranch className="h-7 w-7 sm:h-8 sm:w-8 text-sky-600" />,
    title: "Empower Controllers",
    description: "Provide data-backed confidence for faster, more consistent, and less stressful decisions.",
  },
];

const ImpactSection = () => (
  <AnimatedSection className="py-12 sm:py-20 bg-slate-50">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">The Tangible Impact on Your Network</h2>
        <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
          Transforming railway operations with measurable improvements in efficiency, safety, and reliability.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {impacts.map((impact, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-5 bg-white p-5 sm:p-6 rounded-lg shadow-sm">
            <div className="flex-shrink-0">{impact.icon}</div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-1">{impact.title}</h3>
              <p className="text-sm sm:text-base text-slate-600">{impact.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ImpactSection;