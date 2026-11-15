import React from 'react';

export default function TruthTableSection({ inputA, inputB, onSelectCombination }) {
  const rows = [
    { a: 0, b: 0, y: 0, state: "Both LOW", result: "LOW (0)" },
    { a: 0, b: 1, y: 1, state: "Input B HIGH", result: "HIGH (1)" },
    { a: 1, b: 0, y: 1, state: "Input A HIGH", result: "HIGH (1)" },
    { a: 1, b: 1, y: 1, state: "Both HIGH", result: "HIGH (1)" },
  ];

  return (
    <section id="truth-table" className="pt-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Truth Table */}
        <div className="lg:col-span-7 space-y-3">
          <div>
            <h2 className="text-sm font-semibold text-[#202124] tracking-tight">
              Truth Table
            </h2>
            <p className="text-xs text-[#777777]">
              Exhaustive binary truth table for a 2-input logic gate (2² = 4 possible states).
            </p>
          </div>

          <div className="border border-[#E7E7E3] bg-white rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#E7E7E3] bg-[#FAFAF8] text-[#777777] font-mono">
                  <th className="py-2.5 px-4 font-medium text-center w-20">Input A</th>
                  <th className="py-2.5 px-4 font-medium text-center w-20">Input B</th>
                  <th className="py-2.5 px-4 font-medium text-center w-24">Output Y</th>
                  <th className="py-2.5 px-4 font-medium text-left">State Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7E7E3] font-mono">
                {rows.map((row) => {
                  const isActive = inputA === row.a && inputB === row.b;

                  return (
                    <tr
                      key={`${row.a}-${row.b}`}
                      onClick={() => onSelectCombination(row.a, row.b)}
                      className={`cursor-pointer transition-colors ${
                        isActive
                          ? 'bg-[#EBF5F0] text-[#202124] font-medium'
                          : 'hover:bg-[#FAFAF8] text-[#777777]'
                      }`}
                    >
                      <td className="py-2.5 px-4 text-center">
                        <span className={isActive ? 'text-[#202124] font-bold' : ''}>
                          {row.a}
                        </span>
                      </td>
                      <td className="py-2.5 px-4 text-center">
                        <span className={isActive ? 'text-[#202124] font-bold' : ''}>
                          {row.b}
                        </span>
                      </td>
                      <td className="py-2.5 px-4 text-center">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${
                            row.y === 1
                              ? 'text-[#24845B] bg-[#EBF5F0]'
                              : 'text-[#777777] bg-[#F4F4F1]'
                          }`}
                        >
                          {row.y}
                        </span>
                      </td>
                      <td className="py-2.5 px-4 font-sans text-xs flex items-center justify-between">
                        <span>{row.state}</span>
                        {isActive && (
                          <span className="text-[10px] font-mono uppercase text-[#24845B] bg-white border border-[#BFE0D1] px-1.5 py-0.2 rounded">
                            Active
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="text-[11px] text-[#777777] font-mono">
            * Click any row to test the combination in the schematic above.
          </div>
        </div>

        {/* Right Column: Boolean Logic & Fundamental Laws */}
        <div className="lg:col-span-5 space-y-3">
          <div>
            <h2 className="text-sm font-semibold text-[#202124] tracking-tight">
              Boolean Algebra Laws
            </h2>
            <p className="text-xs text-[#777777]">
              Mathematical properties governing the OR operation (logical disjunction).
            </p>
          </div>

          <div className="border border-[#E7E7E3] bg-white rounded-lg p-4 space-y-3 text-xs">
            <div className="space-y-1">
              <div className="text-[11px] uppercase font-mono text-[#777777]">
                Expression Definition
              </div>
              <div className="font-mono text-base font-semibold text-[#202124]">
                Y = A + B
              </div>
              <p className="text-[#777777] text-xs leading-relaxed">
                The plus symbol (+) denotes inclusive OR. Unlike standard addition where 1 + 1 = 2,
                Boolean algebra dictates saturation: <span className="font-mono text-[#202124]">1 + 1 = 1</span>.
              </p>
            </div>

            <div className="pt-2 border-t border-[#E7E7E3] space-y-2">
              <div className="text-[11px] uppercase font-mono text-[#777777]">
                Standard Identities
              </div>
              <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                <div className="p-2 border border-[#E7E7E3] rounded bg-[#FAFAF8]">
                  <div className="text-[#202124] font-medium">A + 0 = A</div>
                  <div className="text-[10px] text-[#777777] font-sans">Identity Law</div>
                </div>
                <div className="p-2 border border-[#E7E7E3] rounded bg-[#FAFAF8]">
                  <div className="text-[#202124] font-medium">A + 1 = 1</div>
                  <div className="text-[10px] text-[#777777] font-sans">Dominance Law</div>
                </div>
                <div className="p-2 border border-[#E7E7E3] rounded bg-[#FAFAF8]">
                  <div className="text-[#202124] font-medium">A + A = A</div>
                  <div className="text-[10px] text-[#777777] font-sans">Idempotent Law</div>
                </div>
                <div className="p-2 border border-[#E7E7E3] rounded bg-[#FAFAF8]">
                  <div className="text-[#202124] font-medium">A + B = B + A</div>
                  <div className="text-[10px] text-[#777777] font-sans">Commutative Law</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

