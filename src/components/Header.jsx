import React from 'react';
import { Cpu, Activity, Beaker } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start sm:items-center space-x-3.5">
            <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-md shadow-blue-500/20 flex-shrink-0">
              <Cpu className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  <Beaker className="w-3 h-3" />
                  Digital Electronics Laboratory
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                  Experiment #02
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
                Design and Simulation of OR Gate
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Understanding the operation, Boolean algebra, and practical characteristics of a two-input OR Gate.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Simulation Engine: Ready
            </div>
            <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono">
              <Activity className="w-3.5 h-3.5 text-blue-600" />
              <span>IEEE Std 91-1984</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

