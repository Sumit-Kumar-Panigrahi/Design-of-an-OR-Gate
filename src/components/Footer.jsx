import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#E7E7E3] py-8 text-xs text-[#777777]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-[#202124]">Digital Electronics Laboratory</span>
          <span className="text-[#D2D2CC]">•</span>
          <span>Design and Simulation of OR Gate</span>
        </div>

        <div className="font-mono text-[11px] text-[#777777]">
          IEEE Std 91-1984 / Experiment 01
        </div>
      </div>
    </footer>
  );
}
