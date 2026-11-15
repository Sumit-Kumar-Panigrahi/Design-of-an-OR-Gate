import React from 'react';
import { Cpu, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export default function WorkingPrinciple({ inputA, inputB, onSelectCombination }) {
  const cases = [
    {
      id: 'case-0-0',
      a: 0,
      b: 0,
      output: 0,
      title: "Case 1: A = 0, B = 0",
      outcome: "Output Y = 0 (LOW / Inactive)",
      circuitState: "Both switches OPEN (Disconnected)",
      description: "When both inputs are at LOW potential (0V), neither conduction path to the pull-up/output is energized. The output line stays at reference ground (0V). The LED remains OFF.",
    },
    {
      id: 'case-0-1',
      a: 0,
      b: 1,
      output: 1,
      title: "Case 2: A = 0, B = 1",
      outcome: "Output Y = 1 (HIGH / Active)",
      circuitState: "Switch A OPEN, Switch B CLOSED",
      description: "Input A is at 0V, but Input B is pulled HIGH to +5V. Current flows through the parallel branch B directly to the output pin, driving Y to logic HIGH (+5V). The LED illuminates.",
    },
    {
      id: 'case-1-0',
      a: 1,
      b: 0,
      output: 1,
      title: "Case 3: A = 1, B = 0",
      outcome: "Output Y = 1 (HIGH / Active)",
      circuitState: "Switch A CLOSED, Switch B OPEN",
      description: "Input A is energized to +5V, while Input B is at 0V. Current flows through parallel branch A to the output pin, forcing Y to logic HIGH (+5V). The LED illuminates.",
    },
    {
      id: 'case-1-1',
      a: 1,
      b: 1,
      output: 1,
      title: "Case 4: A = 1, B = 1",
      outcome: "Output Y = 1 (HIGH / Active)",
      circuitState: "Both switches CLOSED (Conduction via both branches)",
      description: "Both inputs are energized at +5V simultaneously. Both parallel paths conduct, maintaining the output terminal at logic HIGH (+5V). The LED illuminates brightly.",
    },
  ];

  return (
    <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">Working Principle & State Analysis</h2>
            <p className="text-xs text-slate-500">Detailed breakdown of internal circuit behavior across all 4 input combinations</p>
          </div>
        </div>

        <span className="text-xs font-mono bg-slate-100 text-slate-600 px-3 py-1 rounded-lg self-start sm:self-auto border border-slate-200">
          Parallel Switch Analogy: Y = A ∥ B
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cases.map((item) => {
          const isActive = inputA === item.a && inputB === item.b;

          return (
            <div
              key={item.id}
              onClick={() => onSelectCombination(item.a, item.b)}
              className={`cursor-pointer rounded-xl p-5 border transition-all duration-200 ${
                isActive
                  ? 'bg-blue-50/70 border-blue-500 ring-2 ring-blue-400/40 shadow-md'
                  : 'bg-slate-50/60 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center space-x-2">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                    isActive ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {item.a},{item.b}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <div className="text-[11px] text-slate-500 font-mono">{item.circuitState}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 flex-shrink-0">
                  {item.output === 1 ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Y = 1
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-200 text-slate-700 border border-slate-300">
                      <XCircle className="w-3.5 h-3.5 text-slate-500" />
                      Y = 0
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mt-2.5">
                {item.description}
              </p>

              <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[11px]">
                <span className={`font-semibold ${item.output === 1 ? 'text-emerald-700' : 'text-slate-600'}`}>
                  {item.outcome}
                </span>
                {isActive ? (
                  <span className="text-blue-600 font-bold flex items-center gap-1">
                    Simulating Now <ArrowRight className="w-3 h-3" />
                  </span>
                ) : (
                  <span className="text-slate-400 group-hover:text-slate-600">
                    Click to test
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

