import React, { useState, useEffect } from 'react';

const RailwayAILanding = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RailOptima AI
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#problem" className="text-gray-600 hover:text-blue-600 transition-colors">Problem</a>
              <a href="#solution" className="text-gray-600 hover:text-blue-600 transition-colors">Solution</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105">
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              id="hero-text" 
              data-animate
              className={`transition-all duration-1000 ${isVisible['hero-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Intelligent Railways
                </span>
                <br />
                <span className="text-gray-800">Real-time Decisions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empowering section controllers with AI-powered decision support for optimal train routing, 
                precedence, and crossing decisions in real-time.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all transform hover:scale-105 text-lg">
                  Start Free Trial
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-500 transition-all text-lg">
                  Watch Demo
                </button>
              </div>
            </div>
            <div 
              id="hero-visual" 
              data-animate
              className={`transition-all duration-1000 delay-300 ${isVisible['hero-visual'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold text-gray-700">Express 12345</span>
                      </div>
                      <span className="text-sm text-blue-600 font-medium">Priority: High</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold text-gray-700">Freight 54321</span>
                      </div>
                      <span className="text-sm text-purple-600 font-medium">Hold at Loop 2</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold text-gray-700">Local 67890</span>
                      </div>
                      <span className="text-sm text-green-600 font-medium">Platform 3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '40%', label: 'Delay Reduction' },
              { value: '25%', label: 'Throughput Increase' },
              { value: '100%', label: 'Safety Compliance' },
              { value: '<5s', label: 'Decision Time' }
            ].map((stat, index) => (
              <div 
                key={index}
                id={`stat-${index}`}
                data-animate
                className={`text-center transition-all duration-700 delay-${index * 100} ${
                  isVisible[`stat-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            id="problem-header" 
            data-animate
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible['problem-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                The Challenge
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Section controllers face immense pressure making split-second decisions that impact thousands of passengers and tons of freight daily
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Resource Constraints',
                description: 'Limited tracks, platforms, and blocks shared by express, suburban, freight, and maintenance trains',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
              },
              {
                title: 'Complex Rules',
                description: 'Strict safety, signalling, headways, block systems, and institutional working rules that cannot be violated',
                icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
              },
              {
                title: 'Conflicting Priorities',
                description: 'Balancing punctuality, throughput, priority handling, and minimal journey time',
                icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
              },
              {
                title: 'Real-time Chaos',
                description: 'Breakdowns, rolling stock delays, weather, and incidents forcing constant re-planning',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z'
              },
              {
                title: 'Combinatorial Explosion',
                description: 'Thousands of possible precedence and crossing decisions, impossible to optimize manually',
                icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
              },
              {
                title: 'Time Pressure',
                description: 'Critical decisions needed in seconds, with cascading impacts on the entire network',
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              }
            ].map((challenge, index) => (
              <div
                key={index}
                id={`challenge-${index}`}
                data-animate
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible[`challenge-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={challenge.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{challenge.title}</h3>
                <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div 
            id="solution-header" 
            data-animate
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible['solution-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Solution
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An intelligent decision-support system that augments controller capabilities with AI-powered optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              id="solution-visual" 
              data-animate
              className={`transition-all duration-1000 ${
                isVisible['solution-visual'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-xl p-8">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-gray-500">OPTIMIZATION ENGINE</span>
                      <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">Active</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1 h-2 bg-blue-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{width: '75%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">Processing</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="flex-1 h-2 bg-purple-100 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full animate-pulse" style={{width: '90%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">Analyzing</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="flex-1 h-2 bg-green-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full" style={{width: '100%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">Complete</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t pt-6">
                    <div className="text-sm text-gray-500 mb-2">RECOMMENDED ACTION</div>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                      <div className="font-semibold text-gray-800 mb-2">Hold Freight at Loop 2</div>
                      <div className="text-sm text-gray-600">Allow Express priority passage through Platform 1</div>
                      <div className="mt-3 flex items-center space-x-4 text-xs">
                        <span className="text-green-600">Safety: Clear</span>
                        <span className="text-blue-600">Delay: -12 min</span>
                        <span className="text-purple-600">Conflicts: 0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div 
              id="solution-features" 
              data-animate
              className={`space-y-6 transition-all duration-1000 delay-300 ${
                isVisible['solution-features'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              {[
                {
                  title: 'Real-time Optimization',
                  description: 'Generates conflict-free schedules in seconds using advanced OR/AI algorithms'
                },
                {
                  title: 'Smart Recommendations',
                  description: 'Suggests optimal precedence, crossings, holds, and platform allocations with clear explanations'
                },
                {
                  title: 'What-if Simulations',
                  description: 'Test alternative scenarios before committing to decisions'
                },
                {
                  title: 'Seamless Integration',
                  description: 'Connects with existing signalling, TMS, and rolling-stock systems via secure APIs'
                },
                {
                  title: 'Comprehensive Monitoring',
                  description: 'Track KPIs, generate audit trails, and continuously improve performance'
                }
              ].map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div 
            id="features-header" 
            data-animate
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible['features-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Key Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features designed specifically for the complexities of railway operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Dynamic Re-scheduling',
                value: 'Real-time',
                description: 'Instant plan updates',
                color: 'blue'
              },
              {
                title: 'Constraint Modeling',
                value: '100+',
                description: 'Rules enforced',
                color: 'purple'
              },
              {
                title: 'Decision Speed',
                value: '<5 sec',
                description: 'Response time',
                color: 'green'
              },
              {
                title: 'Scalability',
                value: '1000+',
                description: 'Trains handled',
                color: 'orange'
              }
            ].map((capability, index) => (
              <div
                key={index}
                id={`capability-${index}`}
                data-animate
                className={`bg-gradient-to-br from-${capability.color}-50 to-${capability.color}-100 rounded-2xl p-6 transition-all duration-700 hover:shadow-lg transform hover:-translate-y-2 ${
                  isVisible[`capability-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`text-3xl font-bold text-${capability.color}-600 mb-2`}>
                  {capability.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{capability.title}</h3>
                <p className="text-sm text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div 
            id="how-header" 
            data-animate
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible['how-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seamless workflow from data ingestion to actionable recommendations
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400"></div>
            
            {[
              {
                step: '01',
                title: 'Data Integration',
                description: 'Real-time feeds from timetables, train locations, signals, platforms, and incident reports',
                align: 'left'
              },
              {
                step: '02',
                title: 'AI Processing',
                description: 'Advanced algorithms analyze constraints, priorities, and network state to find optimal solutions',
                align: 'right'
              },
              {
                step: '03',
                title: 'Decision Generation',
                description: 'Clear recommendations with reasoning for precedence, crossings, and resource allocation',
                align: 'left'
              },
              {
                step: '04',
                title: 'Controller Review',
                description: 'Interactive dashboard for review, simulation, and override with full audit trail',
                align: 'right'
              },
              {
                step: '05',
                title: 'Continuous Learning',
                description: 'System improves through feedback, historical analysis, and performance monitoring',
                align: 'left'
              }
            ].map((item, index) => (
              <div
                key={index}
                id={`step-${index}`}
                data-animate
                className={`relative flex items-center mb-12 ${
                  item.align === 'right' ? 'md:flex-row-reverse' : ''
                } transition-all duration-700 ${
                  isVisible[`step-${index}`] ? 'opacity-100 translate-x-0' : `opacity-0 ${item.align === 'right' ? 'translate-x-10' : '-translate-x-10'}`
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="md:w-1/2 px-6">
                  <div className={`bg-white rounded-2xl shadow-lg p-8 ${item.align === 'right' ? 'md:ml-12' : 'md:mr-12'}`}>
                    <div className="flex items-center mb-4">
                      <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mr-4">
                        {item.step}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Railway Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join the future of intelligent railway management with AI-powered decision support
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-xl transition-all transform hover:scale-105 text-lg font-semibold">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all text-lg font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">RailOptima AI</span>
              </div>
              <p className="text-sm">
                Intelligent decision support for modern railway operations
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 RailOptima AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RailwayAILanding;