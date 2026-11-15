import React from 'react';
import { Layers, GitFork, Lightbulb, BookOpen } from 'lucide-react';

export default function Introduction() {
  return (
    <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">Introduction & Theory</h2>
          <p className="text-xs text-slate-500">Core foundations of digital logic circuitry</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: What is a Logic Gate */}
        <div className="flex flex-col bg-slate-50/70 rounded-xl p-5 border border-slate-200/60 hover:border-blue-300 transition-colors">
          <div className="flex items-center space-x-2.5 mb-3">
            <span className="p-2 bg-blue-100 text-blue-700 rounded-md">
              <Layers className="w-4 h-4" />
            </span>
            <h3 className="font-semibold text-slate-900 text-sm">What is a Logic Gate?</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
            A logic gate is an idealized or physical electronic device implementing a Boolean function. It performs a logical operation on one or more binary inputs (0 or 1) and produces a single binary output. They are the fundamental building blocks of all digital integrated circuits (ICs) and modern microprocessors.
          </p>
          <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-mono text-slate-500 flex justify-between">
            <span>Inputs: {`{0, 1}`}</span>
            <span>Output: Single bit</span>
          </div>
        </div>

        {/* Card 2: What is an OR Gate */}
        <div className="flex flex-col bg-slate-50/70 rounded-xl p-5 border border-slate-200/60 hover:border-indigo-300 transition-colors">
          <div className="flex items-center space-x-2.5 mb-3">
            <span className="p-2 bg-indigo-100 text-indigo-700 rounded-md">
              <GitFork className="w-4 h-4" />
            </span>
            <h3 className="font-semibold text-slate-900 text-sm">What is an OR Gate?</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
            An <strong>OR Gate</strong> is a digital logic gate that implements logical disjunction (inclusive OR). It outputs <strong>HIGH (1)</strong> whenever <em>at least one</em> of its inputs is HIGH (1). It only produces a <strong>LOW (0)</strong> output when <em>all</em> inputs are simultaneously LOW (0).
          </p>
          <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-mono text-indigo-600 font-semibold flex justify-between">
            <span>Algebraic op: Addition (+)</span>
            <span>Rule: 1 if ANY is 1</span>
          </div>
        </div>

        {/* Card 3: Why is an OR Gate Used */}
        <div className="flex flex-col bg-slate-50/70 rounded-xl p-5 border border-slate-200/60 hover:border-blue-300 transition-colors">
          <div className="flex items-center space-x-2.5 mb-3">
            <span className="p-2 bg-emerald-100 text-emerald-700 rounded-md">
              <Lightbulb className="w-4 h-4" />
            </span>
            <h3 className="font-semibold text-slate-900 text-sm">Why is it Used?</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
            In digital electronics, OR gates are crucial whenever a system must trigger an action or flag an event based on any of several independent conditions. Examples include safety interlocks, multiplexers, data bus routing, fault alarms, and arithmetic logic units (ALUs).
          </p>
          <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-mono text-slate-500 flex justify-between">
            <span>Primary Role: Decision Making</span>
            <span>TTL IC: 7432 (Quad 2-Input)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

