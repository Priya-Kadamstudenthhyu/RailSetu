import React from 'react';
import { TrainTrack } from 'lucide-react';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
    <div className="container mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center space-x-2 mb-2 sm:mb-0">
        <TrainTrack className="h-6 w-6 sm:h-8 sm:w-8 text-sky-600" />
        <span className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">RailSetu</span>
      </div>
      <a
        href="https://railsetu.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 sm:px-5 py-2 bg-sky-600 text-white font-semibold rounded-full hover:bg-sky-700 transition-colors duration-300 transform hover:scale-105 text-sm sm:text-base"
      >
        Access Prototype
      </a>
    </div>
  </header>
);

export default Header;