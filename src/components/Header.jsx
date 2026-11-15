import React from 'react';

export default function Header() {
  return (
    <header className="border-b border-[#E7E7E3] bg-[#FAFAF8]/95 backdrop-blur-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Project title */}
        <div className="flex items-center space-x-2.5">
          <div className="w-2 h-2 rounded-full bg-[#24845B]" />
          <span className="text-sm font-semibold tracking-tight text-[#202124]">
            Design of an OR Gate
          </span>
        </div>

        {/* Right: Minimal anchor navigation */}
        <nav className="flex items-center space-x-6 text-xs text-[#777777]">
          <a 
            href="#simulation" 
            className="hover:text-[#202124] transition-colors"
          >
            Simulation
          </a>
          <a 
            href="#truth-table" 
            className="hover:text-[#202124] transition-colors"
          >
            Truth Table
          </a>
          <a 
            href="#theory" 
            className="hover:text-[#202124] transition-colors"
          >
            Theory
          </a>
          <a 
            href="#applications" 
            className="hover:text-[#202124] transition-colors hidden md:inline"
          >
            Applications
          </a>
        </nav>
      </div>
    </header>
  );
}
