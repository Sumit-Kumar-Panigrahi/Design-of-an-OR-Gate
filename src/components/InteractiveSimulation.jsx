import React from 'react';
import { ToggleLeft, ToggleRight, RotateCcw, CheckCircle2, AlertCircle, Power } from 'lucide-react';

export default function InteractiveSimulation({
  inputA,
  inputB,
  setInputA,
  setInputB,
  onReset
}) {
  // Digital Electronics OR logic calculation as specified
  const output = (inputA || inputB) ? 1 : 0;

  // Short explanation based on current input state
  const getExplanation = () => {
    if (inputA === 0 && inputB === 0) {
      return {
        title: "Both Inputs are LOW (0)",
        description: "Since neither Input A nor Input B has a HIGH signal (+5V), no conduction path is formed. The output Y remains LOW (0 / 0V), and the LED indicator remains OFF.",
        statusType: "low"
      };
    } else if (inputA === 1 && inputB === 1) {
      return {
        title: "Both Inputs are HIGH (1)",
        description: "Both Input A and Input B provide active HIGH signals (+5V). The OR condition is fully satisfied. The output Y transitions to HIGH (1 / +5V), illuminating the green LED.",
        statusType: "high"
      };
    } else if (inputA === 1) {
      return {
        title: "Input A is HIGH (1), Input B is LOW (0)",
        description: "Because Input A is HIGH (1), the condition 'at least one input is HIGH' is satisfied regardless of Input B. The output Y transitions to HIGH (1 / +5V), lighting the green LED.",
        statusType: "high"
      };
    } else {
      return {
        title: "Input A is LOW (0), Input B is HIGH (1)",
        description: "Because Input B is HIGH (1), the condition 'at least one input is HIGH' is satisfied regardless of Input A. The output Y transitions to HIGH (1 / +5V), lighting the green LED.",
        statusType: "high"
      };
    }
  };

  const explanation = getExplanation();

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center space-x-2.5">
            <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Power className="w-5 h-5" />
            </span>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">Interactive Simulation Workbench</h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Toggle switches A and B to observe real-time circuit response, LED activation, and Boolean output.
          </p>
        </div>

        <button
          onClick={onReset}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl border border-slate-300 transition-all active:scale-95 shadow-sm self-start sm:self-auto"
          title="Restore inputs A and B to LOW (0)"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset to (0, 0)
        </button>
      </div>

      {/* Main interactive controls & LED panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
        {/* Left: Input Switches (A & B) */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Binary Input Controls</h3>

          {/* Switch A */}
          <div className={`p-4 rounded-xl border transition-all ${
            inputA === 1 
              ? 'bg-emerald-50/60 border-emerald-300 shadow-sm' 
              : 'bg-slate-50/80 border-slate-200'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-sm">
                  A
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Input A Switch</div>
                  <div className="text-xs text-slate-500 font-mono">
                    State: <span className={inputA === 1 ? 'text-emerald-600 font-bold' : 'text-slate-600 font-bold'}>{inputA === 1 ? 'HIGH (Logic 1 / +5V)' : 'LOW (Logic 0 / 0V)'}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setInputA(inputA === 1 ? 0 : 1)}
                className={`relative inline-flex h-8 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  inputA === 1 ? 'bg-emerald-500' : 'bg-slate-300'
                }`}
                role="switch"
                aria-checked={inputA === 1}
              >
                <span
                  className={`pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out flex items-center justify-center text-xs font-mono font-bold ${
                    inputA === 1 ? 'translate-x-8 text-emerald-600' : 'translate-x-0 text-slate-400'
                  }`}
                >
                  {inputA}
                </span>
              </button>
            </div>
          </div>

          {/* Switch B */}
          <div className={`p-4 rounded-xl border transition-all ${
            inputB === 1 
              ? 'bg-emerald-50/60 border-emerald-300 shadow-sm' 
              : 'bg-slate-50/80 border-slate-200'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-sm">
                  B
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Input B Switch</div>
                  <div className="text-xs text-slate-500 font-mono">
                    State: <span className={inputB === 1 ? 'text-emerald-600 font-bold' : 'text-slate-600 font-bold'}>{inputB === 1 ? 'HIGH (Logic 1 / +5V)' : 'LOW (Logic 0 / 0V)'}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setInputB(inputB === 1 ? 0 : 1)}
                className={`relative inline-flex h-8 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  inputB === 1 ? 'bg-emerald-500' : 'bg-slate-300'
                }`}
                role="switch"
                aria-checked={inputB === 1}
              >
                <span
                  className={`pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out flex items-center justify-center text-xs font-mono font-bold ${
                    inputB === 1 ? 'translate-x-8 text-emerald-600' : 'translate-x-0 text-slate-400'
                  }`}
                >
                  {inputB}
                </span>
              </button>
            </div>
          </div>

          {/* Quick preset selector buttons */}
          <div className="pt-1 flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Quick Presets:</span>
            {[
              [0, 0],
              [0, 1],
              [1, 0],
              [1, 1]
            ].map(([a, b]) => {
              const active = inputA === a && inputB === b;
              return (
                <button
                  key={`${a}-${b}`}
                  onClick={() => {
                    setInputA(a);
                    setInputB(b);
                  }}
                  className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-all ${
                    active
                      ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  ({a},{b})
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Output & LED Indicator */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-slate-900 rounded-xl p-5 text-white shadow-inner border border-slate-800">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Gate Output Terminal (Y)
              </span>
              <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold ${
                output === 1 ? 'bg-emerald-950 text-emerald-400 border border-emerald-700' : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}>
                {output === 1 ? 'LOGIC LEVEL: HIGH' : 'LOGIC LEVEL: LOW'}
              </span>
            </div>

            {/* LED Visualizer */}
            <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-6">
              <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  {/* Outer glow ring */}
                  <div
                    className={`w-24 h-24 rounded-full transition-all duration-500 ${
                      output === 1
                        ? 'bg-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.7)] ring-4 ring-emerald-500/40'
                        : 'bg-slate-800 ring-2 ring-slate-700'
                    }`}
                  />
                  {/* LED Bulb Body */}
                  <div
                    className={`absolute w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                      output === 1
                        ? 'bg-emerald-500 border-emerald-200 shadow-inner led-glow-active'
                        : 'bg-slate-700 border-slate-600 shadow-inner'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full transition-opacity duration-300 ${
                        output === 1 ? 'bg-white opacity-80 blur-[1px]' : 'bg-slate-600 opacity-20'
                      }`}
                    />
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <div className={`text-sm font-bold tracking-wide ${output === 1 ? 'text-emerald-400' : 'text-slate-400'}`}>
                    {output === 1 ? 'GREEN LED: ON' : 'LED: OFF'}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {output === 1 ? 'V_out ≈ +5.0 V' : 'V_out ≈ 0.0 V'}
                  </div>
                </div>
              </div>

              {/* Digital Meter & Boolean Value readout */}
              <div className="space-y-3 w-full sm:w-auto">
                <div className="bg-slate-800/90 rounded-lg p-3 border border-slate-700 font-mono text-center sm:text-left">
                  <div className="text-[10px] uppercase text-slate-400">Digital Value</div>
                  <div className="text-3xl font-extrabold text-white mt-0.5">
                    Y = <span className={output === 1 ? 'text-emerald-400' : 'text-slate-400'}>{output}</span>
                  </div>
                </div>

                <div className="bg-slate-800/90 rounded-lg p-3 border border-slate-700 font-mono text-center sm:text-left">
                  <div className="text-[10px] uppercase text-slate-400">Boolean Math</div>
                  <div className="text-sm font-semibold text-blue-300 mt-0.5">
                    {inputA} + {inputB} = {output}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 text-center text-xs text-slate-400 font-mono">
            Expression: <span className="text-blue-400 font-bold">Y = A + B</span> &nbsp;|&nbsp; JavaScript: <span className="text-emerald-400 font-bold">const output = {inputA} || {inputB}</span>
          </div>
        </div>
      </div>

      {/* Dynamic Explanation Card */}
      <div className={`p-4 rounded-xl border flex items-start space-x-3.5 transition-colors ${
        explanation.statusType === 'high'
          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
          : 'bg-slate-50 border-slate-200 text-slate-800'
      }`}>
        {explanation.statusType === 'high' ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
        ) : (
          <AlertCircle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
        )}
        <div>
          <h4 className="text-sm font-bold">{explanation.title}</h4>
          <p className="text-xs sm:text-sm mt-0.5 text-slate-600 leading-relaxed">
            {explanation.description}
          </p>
        </div>
      </div>
    </div>
  );
}

