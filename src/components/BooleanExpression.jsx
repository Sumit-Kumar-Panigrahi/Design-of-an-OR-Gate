import React from 'react';
import { Binary, Check, HelpCircle } from 'lucide-react';

export default function BooleanExpression({ inputA, inputB, output }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-3 mb-5">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <Binary className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">Boolean Expression & Laws</h2>
            <p className="text-xs text-slate-500">Mathematical formulation of logical disjunction</p>
          </div>
        </div>

        {/* Primary Mathematical Display Card */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50/50 to-slate-50 rounded-xl p-5 border border-blue-100/80 text-center mb-5">
          <span className="text-[11px] font-bold tracking-widest text-blue-600 uppercase">Standard Formulation</span>
          <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight my-2">
            Y = A + B
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            The symbol <strong className="text-slate-900 font-mono text-sm">+</strong> represents the <strong>logical OR operation</strong> (disjunction), producing a <span className="text-emerald-700 font-semibold">HIGH (1)</span> output when <em>at least one</em> input is <span className="text-emerald-700 font-semibold">HIGH (1)</span>.
          </p>
        </div>

        {/* Real-time Dynamic Evaluation */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Current Signal Evaluation
          </div>
          <div className="flex items-center justify-center space-x-3 text-lg font-mono">
            <span className="px-3 py-1 bg-white rounded-lg border border-slate-300 font-bold text-slate-800 shadow-sm">
              A = {inputA}
            </span>
            <span className="text-blue-600 font-extrabold text-xl">+</span>
            <span className="px-3 py-1 bg-white rounded-lg border border-slate-300 font-bold text-slate-800 shadow-sm">
              B = {inputB}
            </span>
            <span className="text-slate-400 font-bold text-xl">=</span>
            <span className={`px-3 py-1 rounded-lg border font-bold shadow-sm ${
              output === 1
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-slate-200 text-slate-700 border-slate-300'
            }`}>
              Y = {output}
            </span>
          </div>
          <p className="text-center text-xs text-slate-500 mt-2">
            {output === 1
              ? "Condition satisfied: At least one input equals 1, resulting in Y = 1."
              : "Condition not satisfied: Neither input is 1, resulting in Y = 0."}
          </p>
        </div>

        {/* Fundamental Boolean Identities */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Key Boolean Identities (OR Gate)
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
              <span className="text-slate-600">A + 0 = A</span>
              <span className="text-[10px] text-slate-400 font-sans">Identity Law</span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
              <span className="text-slate-600">A + 1 = 1</span>
              <span className="text-[10px] text-slate-400 font-sans">Dominance Law</span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
              <span className="text-slate-600">A + A = A</span>
              <span className="text-[10px] text-slate-400 font-sans">Idempotent Law</span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
              <span className="text-slate-600">A + B = B + A</span>
              <span className="text-[10px] text-slate-400 font-sans">Commutative Law</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
        <HelpCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
        <span>In binary Boolean algebra, 1 + 1 = 1 (logical saturation, not binary arithmetic 10₂).</span>
      </div>
    </div>
  );
}

