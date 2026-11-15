import React from 'react';
import { RotateCcw } from 'lucide-react';

export default function CircuitWorkbench({
  inputA,
  inputB,
  setInputA,
  setInputB,
  onReset
}) {
  const isHighA = inputA === 1;
  const isHighB = inputB === 1;
  const isHighY = (inputA || inputB) ? 1 : 0;

  // Refined color variables for circuit rendering
  const activeColor = '#24845B'; // Muted green accent
  const inactiveColor = '#9A9A95'; // Neutral muted grey
  const wireStrokeA = isHighA ? activeColor : inactiveColor;
  const wireStrokeB = isHighB ? activeColor : inactiveColor;
  const wireStrokeY = isHighY ? activeColor : inactiveColor;

  return (
    <section id="simulation" className="space-y-3">
      {/* Workbench Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-[#202124] tracking-tight">
            Interactive Circuit Schematic
          </h2>
          <p className="text-xs text-[#777777]">
            Toggle binary inputs to observe immediate logic gate evaluation and electrical conduction.
          </p>
        </div>

        <button
          onClick={onReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#777777] hover:text-[#202124] bg-white hover:bg-[#F4F4F1] border border-[#E7E7E3] rounded-md transition-colors"
          title="Reset both inputs to 0"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Main Laboratory Instrument Canvas */}
      <div className="border border-[#E7E7E3] bg-white rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        {/* Top toolbar */}
        <div className="px-5 py-3 border-b border-[#E7E7E3] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-3 text-[#777777] font-mono text-[11px]">
            <span>GATE: 2-INPUT OR</span>
            <span className="text-[#D2D2CC]">|</span>
            <span>STANDARD: IEEE 91-1984</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-[#777777] text-[11px] font-mono">Presets:</span>
            {[
              [0, 0],
              [0, 1],
              [1, 0],
              [1, 1],
            ].map(([a, b]) => {
              const active = inputA === a && inputB === b;
              return (
                <button
                  key={`${a}-${b}`}
                  onClick={() => {
                    setInputA(a);
                    setInputB(b);
                  }}
                  className={`px-2 py-0.5 text-xs font-mono rounded transition-colors ${
                    active
                      ? 'bg-[#24845B] text-white font-medium'
                      : 'bg-[#F4F4F1] text-[#777777] hover:text-[#202124] hover:bg-[#EEEEEC]'
                  }`}
                >
                  {a},{b}
                </button>
              );
            })}
          </div>
        </div>

        {/* Central Schematic & Signal Flow Layout */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Switches Column */}
            <div className="lg:col-span-3 space-y-6">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#777777]">
                Digital Inputs
              </div>

              {/* Input Switch A */}
              <div className="border border-[#E7E7E3] rounded-lg p-3.5 bg-[#FAFAF8] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 rounded bg-[#202124] text-white text-[11px] font-mono font-bold flex items-center justify-center">
                      A
                    </span>
                    <span className="text-xs font-medium text-[#202124]">Input A</span>
                  </div>
                  <span className={`text-xs font-mono font-semibold ${isHighA ? 'text-[#24845B]' : 'text-[#777777]'}`}>
                    {isHighA ? '1 (HIGH)' : '0 (LOW)'}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-[#777777] font-mono">
                    {isHighA ? '+5.0 V' : '0.0 V'}
                  </span>
                  {/* Clean tactile toggle switch */}
                  <button
                    type="button"
                    role="switch"
                    aria-checked={isHighA}
                    onClick={() => setInputA(isHighA ? 0 : 1)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border border-transparent transition-colors duration-150 focus:outline-none ${
                      isHighA ? 'bg-[#24845B]' : 'bg-[#D2D2CC]'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition duration-150 flex items-center justify-center text-[10px] font-mono font-bold ${
                        isHighA ? 'translate-x-5 text-[#24845B]' : 'translate-x-0.5 text-[#777777]'
                      }`}
                    >
                      {inputA}
                    </span>
                  </button>
                </div>
              </div>

              {/* Input Switch B */}
              <div className="border border-[#E7E7E3] rounded-lg p-3.5 bg-[#FAFAF8] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 rounded bg-[#202124] text-white text-[11px] font-mono font-bold flex items-center justify-center">
                      B
                    </span>
                    <span className="text-xs font-medium text-[#202124]">Input B</span>
                  </div>
                  <span className={`text-xs font-mono font-semibold ${isHighB ? 'text-[#24845B]' : 'text-[#777777]'}`}>
                    {isHighB ? '1 (HIGH)' : '0 (LOW)'}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-[#777777] font-mono">
                    {isHighB ? '+5.0 V' : '0.0 V'}
                  </span>
                  {/* Clean tactile toggle switch */}
                  <button
                    type="button"
                    role="switch"
                    aria-checked={isHighB}
                    onClick={() => setInputB(isHighB ? 0 : 1)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border border-transparent transition-colors duration-150 focus:outline-none ${
                      isHighB ? 'bg-[#24845B]' : 'bg-[#D2D2CC]'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition duration-150 flex items-center justify-center text-[10px] font-mono font-bold ${
                        isHighB ? 'translate-x-5 text-[#24845B]' : 'translate-x-0.5 text-[#777777]'
                      }`}
                    >
                      {inputB}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Circuit SVG Graphic Column */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <svg
                viewBox="0 0 460 220"
                className="w-full max-w-[440px] select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Subtle breadboard background lines */}
                <line x1="20" y1="75" x2="148" y2="75" stroke="#EFEFEA" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="20" y1="145" x2="148" y2="145" stroke="#EFEFEA" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="320" y1="110" x2="430" y2="110" stroke="#EFEFEA" strokeWidth="1" strokeDasharray="3 3" />

                {/* Wire A */}
                <line
                  x1="20"
                  y1="75"
                  x2="148"
                  y2="75"
                  stroke={wireStrokeA}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className={isHighA ? "wire-active" : ""}
                />
                <circle cx="20" cy="75" r="4.5" fill={wireStrokeA} />
                <text x="32" y="66" fill="#777777" fontSize="11" fontFamily="monospace">
                  A = {inputA}
                </text>

                {/* Wire B */}
                <line
                  x1="20"
                  y1="145"
                  x2="148"
                  y2="145"
                  stroke={wireStrokeB}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className={isHighB ? "wire-active" : ""}
                />
                <circle cx="20" cy="145" r="4.5" fill={wireStrokeB} />
                <text x="32" y="136" fill="#777777" fontSize="11" fontFamily="monospace">
                  B = {inputB}
                </text>

                {/*
                  Standard IEEE Std 91-1984 OR Gate Geometry:
                  Back curved arch: (135, 45) to (135, 175) curving inward to (170, 110)
                  Top arch: (135, 45) curving to tip at (320, 110)
                  Bottom arch: (320, 110) curving back to (135, 175)
                */}
                <path
                  d="M 135 45 Q 225 50 320 110 Q 225 170 135 175 Q 170 110 135 45 Z"
                  fill="#FFFFFF"
                  stroke="#202124"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />

                {/* Gate Internal Label */}
                <text
                  x="218"
                  y="107"
                  fill="#202124"
                  fontSize="15"
                  fontWeight="600"
                  letterSpacing="1"
                  textAnchor="middle"
                >
                  OR
                </text>
                <text
                  x="218"
                  y="125"
                  fill="#777777"
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  ≥ 1
                </text>

                {/* Output Wire Y */}
                <line
                  x1="320"
                  y1="110"
                  x2="430"
                  y2="110"
                  stroke={wireStrokeY}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className={isHighY ? "wire-active" : ""}
                />
                <circle cx="430" cy="110" r="4.5" fill={wireStrokeY} />
                <text x="360" y="100" fill="#777777" fontSize="11" fontFamily="monospace">
                  Y = {isHighY}
                </text>
              </svg>
            </div>

            {/* Output Y & LED Column */}
            <div className="lg:col-span-3 space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#777777]">
                Output Terminal (Y)
              </div>

              <div className="border border-[#E7E7E3] rounded-lg p-4 bg-[#FAFAF8] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#202124]">Output Y</span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-medium ${
                      isHighY
                        ? 'bg-[#EBF5F0] text-[#24845B]'
                        : 'bg-[#F4F4F1] text-[#777777]'
                    }`}
                  >
                    {isHighY ? 'HIGH (+5V)' : 'LOW (0V)'}
                  </span>
                </div>

                {/* Physical LED & Value indicator */}
                <div className="flex items-center space-x-4 pt-1">
                  {/* Clean, realistic physical-style LED */}
                  <div className="relative w-12 h-12 rounded-full bg-[#E7E7E3] p-1 flex items-center justify-center border border-[#D2D2CC]">
                    <div
                      className={`w-9 h-9 rounded-full transition-colors duration-200 flex items-center justify-center border ${
                        isHighY
                          ? 'bg-[#24845B] border-[#1D6E4A] shadow-[0_0_12px_rgba(36,132,91,0.5)]'
                          : 'bg-[#C8C8C2] border-[#B5B5AF]'
                      }`}
                    >
                      {/* Subdued reflection pip */}
                      <div className="w-2.5 h-1.5 rounded-full bg-white/40 mb-3 ml-2" />
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-mono font-semibold text-[#202124]">
                      Y = {isHighY}
                    </div>
                    <div className="text-[11px] text-[#777777]">
                      {isHighY ? 'LED: Active / Illuminated' : 'LED: Inactive / Off'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Boolean evaluation readout */}
              <div className="text-xs text-[#777777] font-mono px-1">
                Expression: <span className="text-[#202124] font-medium">{inputA} + {inputB} = {isHighY}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status bar */}
        <div className="px-5 py-3 bg-[#FAFAF8] border-t border-[#E7E7E3] text-xs text-[#777777] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="font-medium text-[#202124]">Current Behavior: </span>
            {inputA === 0 && inputB === 0 && (
              <span>Both inputs are LOW (0V). The output terminal is unenergized (0V).</span>
            )}
            {inputA === 0 && inputB === 1 && (
              <span>Input B is HIGH (+5V). Current flows through branch B, pulling output Y to HIGH.</span>
            )}
            {inputA === 1 && inputB === 0 && (
              <span>Input A is HIGH (+5V). Current flows through branch A, pulling output Y to HIGH.</span>
            )}
            {inputA === 1 && inputB === 1 && (
              <span>Both inputs are HIGH (+5V). Conduction exists through both branches, maintaining Y at HIGH.</span>
            )}
          </div>
          <div className="font-mono text-[11px] text-[#777777] self-end sm:self-auto">
            const output = A || B
          </div>
        </div>
      </div>
    </section>
  );
}

