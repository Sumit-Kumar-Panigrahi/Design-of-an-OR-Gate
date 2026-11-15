import React from 'react';
import { Table, MousePointerClick } from 'lucide-react';

export default function TruthTable({ inputA, inputB, onSelectCombination }) {
  // Exact truth table rows required
  const tableData = [
    { a: 0, b: 0, y: 0, note: "Both inputs LOW → Output LOW" },
    { a: 0, b: 1, y: 1, note: "Input B HIGH → Output HIGH" },
    { a: 1, b: 0, y: 1, note: "Input A HIGH → Output HIGH" },
    { a: 1, b: 1, y: 1, note: "Both inputs HIGH → Output HIGH" },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <Table className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">Truth Table</h2>
              <p className="text-xs text-slate-500">Exhaustive 2-input binary state mapping (2² = 4 states)</p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-400 font-mono">
            <MousePointerClick className="w-3 h-3 text-blue-500" />
            Click row to apply
          </span>
        </div>

        {/* Truth Table */}
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm mt-3">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/80 text-slate-700 text-xs font-semibold uppercase tracking-wider border-b border-slate-200">
                <th className="py-3 px-4 text-center w-24">Input A</th>
                <th className="py-3 px-4 text-center w-24">Input B</th>
                <th className="py-3 px-4 text-center w-28 bg-blue-50/70 text-blue-900">Output Y</th>
                <th className="py-3 px-4 text-left hidden sm:table-cell text-slate-500 font-normal">Condition Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-mono">
              {tableData.map((row) => {
                const isActive = inputA === row.a && inputB === row.b;

                return (
                  <tr
                    key={`${row.a}-${row.b}`}
                    onClick={() => onSelectCombination(row.a, row.b)}
                    className={`cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-blue-50/90 font-bold text-blue-950 ring-2 ring-blue-500 ring-inset'
                        : 'hover:bg-slate-50/80 text-slate-700'
                    }`}
                  >
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold ${
                        row.a === 1 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {row.a}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold ${
                        row.b === 1 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {row.b}
                      </span>
                    </td>
                    <td className={`py-3.5 px-4 text-center ${isActive ? 'bg-blue-100/60' : 'bg-slate-50/30'}`}>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold ${
                        row.y === 1
                          ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/30'
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {row.y === 1 && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                        {row.y}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-xs font-sans text-slate-600 hidden sm:table-cell">
                      <div className="flex items-center justify-between">
                        <span>{row.note}</span>
                        {isActive && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-blue-600 text-white rounded">
                            Active State
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Boolean logic rule: Y = 1 if (A = 1 OR B = 1)</span>
        <span className="font-mono text-blue-600 font-medium">Active: ({inputA}, {inputB}) → Y = {inputA || inputB ? 1 : 0}</span>
      </div>
    </div>
  );
}

