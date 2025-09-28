import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ChallengeSection from './components/ChallengeSection';
import SolutionSection from './components/SolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import ImpactSection from './components/ImpactSection';
import Footer from './components/Footer';
import './App.css';

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
  );
}

export default App;