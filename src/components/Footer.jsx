import React from 'react';

const Footer = () => (
  <footer id="contact" className="bg-slate-800 text-slate-300">
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to See RailSetu in Action?</h2>
      <p className="max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
        Explore our interactive prototype to understand how RailSetu can transform your network control. Click the button below to get started.
      </p>
      <a
        href="https://railsetu.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-sky-600 text-white font-bold rounded-full text-base sm:text-lg hover:bg-sky-700 transition-all duration-300 shadow-lg transform hover:scale-105 mb-6 sm:mb-8"
      >
        Access Prototype
      </a>
      <div className="mt-6 border-t border-slate-700 pt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} RailSetu. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;