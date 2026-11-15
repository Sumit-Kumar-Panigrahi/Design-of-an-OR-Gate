import React from 'react';

export default function Introduction() {
  return (
    <section className="pt-4 pb-8 border-b border-[#E7E7E3]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl space-y-2.5">
          <div className="text-[11px] font-mono tracking-wider uppercase text-[#777777]">
            Digital Logic / Experiment 01
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#202124]">
            Design and Simulation of OR Gate
          </h1>
          <p className="text-sm sm:text-base text-[#777777] leading-relaxed">
            The OR gate is a fundamental digital logic gate implementing logical disjunction.
            It asserts an active HIGH (1) output whenever at least one of its binary inputs is HIGH (1),
            and outputs LOW (0) only when all inputs are LOW (0).
          </p>
        </div>

        {/* Clean, typographical Boolean formula card */}
        <div className="flex-shrink-0 self-start md:self-auto border border-[#E7E7E3] bg-white rounded-lg px-4 py-3 min-w-[200px]">
          <div className="text-[10px] uppercase font-mono tracking-wider text-[#777777]">
            Boolean Expression
          </div>
          <div className="text-xl font-mono font-medium text-[#202124] mt-0.5">
            Y = A + B
          </div>
          <div className="text-[11px] text-[#777777] mt-0.5">
            Logical Disjunction (+)
          </div>
        </div>
      </div>
    </section>
  );
}
