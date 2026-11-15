import React from 'react';

export default function TheorySection({ inputA, inputB }) {
  const states = [
    {
      combination: "A = 0, B = 0",
      output: "Y = 0",
      condition: "Both inputs LOW",
      explanation: "Neither switch is closed. Both conduction paths remain broken; no current flows from the power source to the output load resistor, resulting in 0V (logic 0).",
      isCurrent: inputA === 0 && inputB === 0
    },
    {
      combination: "A = 0, B = 1",
      output: "Y = 1",
      condition: "Input B HIGH",
      explanation: "Switch B is closed, establishing a complete electrical path to +5V. Current bypasses the open switch A and drives output terminal Y to +5V (logic 1).",
      isCurrent: inputA === 0 && inputB === 1
    },
    {
      combination: "A = 1, B = 0",
      output: "Y = 1",
      condition: "Input A HIGH",
      explanation: "Switch A is closed while switch B is open. Current flows directly through branch A, supplying +5V (logic 1) to the output load.",
      isCurrent: inputA === 1 && inputB === 0
    },
    {
      combination: "A = 1, B = 1",
      output: "Y = 1",
      condition: "Both inputs HIGH",
      explanation: "Both parallel branches conduct concurrently. Current flows through both paths, keeping terminal Y held firmly at +5V (logic 1).",
      isCurrent: inputA === 1 && inputB === 1
    }
  ];

  return (
    <section id="theory" className="pt-6 border-t border-[#E7E7E3] space-y-6">
      <div className="max-w-3xl space-y-2">
        <h2 className="text-lg font-semibold text-[#202124] tracking-tight">
          Theory & Working Principle
        </h2>
        <p className="text-sm text-[#777777] leading-relaxed">
          In digital electronics, an OR gate performs an inclusive logical disjunction.
          Electrically, it can be modeled as two electrical switches arranged in <strong>parallel</strong>.
          If either switch A is closed, switch B is closed, or both are closed, current flows from the voltage supply to the output.
        </p>
      </div>

      {/* Structured, clean editorial state breakdown */}
      <div className="border border-[#E7E7E3] bg-white rounded-lg divide-y divide-[#E7E7E3]">
        {states.map((st, idx) => (
          <div
            key={idx}
            className={`p-4 sm:p-5 transition-colors flex flex-col md:flex-row md:items-start justify-between gap-4 ${
              st.isCurrent ? 'bg-[#FAFAF8]' : ''
            }`}
          >
            <div className="md:w-1/3 space-y-1">
              <div className="flex items-center space-x-2">
                <span className="font-mono text-xs font-semibold text-[#202124]">
                  {st.combination}
                </span>
                <span className="text-[#D2D2CC]">→</span>
                <span className={`font-mono text-xs font-semibold ${
                  st.output.includes('1') ? 'text-[#24845B]' : 'text-[#777777]'
                }`}>
                  {st.output}
                </span>
                {st.isCurrent && (
                  <span className="text-[10px] font-mono text-[#24845B] bg-[#EBF5F0] px-1.5 py-0.5 rounded">
                    Current
                  </span>
                )}
              </div>
              <div className="text-xs text-[#777777]">{st.condition}</div>
            </div>

            <div className="md:w-2/3">
              <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                {st.explanation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

