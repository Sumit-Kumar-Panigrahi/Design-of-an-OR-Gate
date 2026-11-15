import React from 'react';
import { BookOpen, GraduationCap, Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white py-8 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-blue-100 text-blue-700 rounded-md">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="font-semibold text-slate-800">Design and Simulation of OR Gate</div>
            <div className="text-[11px] text-slate-400">Digital Electronics & Logic Design Laboratory Courseware</div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1.5">
            <GraduationCap className="w-4 h-4 text-slate-400" />
            <span>Academic Reference Project</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>Boolean Algebra: Y = A + B</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

