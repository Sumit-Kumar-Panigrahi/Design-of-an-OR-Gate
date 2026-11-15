import React from 'react';
import { Zap, Info } from 'lucide-react';

export default function LogicDiagram({ inputA, inputB, output, onToggleA, onToggleB }) {
  const isHighA = inputA === 1;
  const isHighB = inputB === 1;
  const isHighY = output === 1;

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">OR Gate Schematic Diagram</h2>
            <p className="text-xs text-slate-500">IEEE Std 91-1984 compliant logic symbol and signal flow</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs">
          <span className="flex items-center gap-1.5 text-slate-500">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block"></span> 0 (LOW / 0V)
          </span>
          <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-sm shadow-emerald-400"></span> 1 (HIGH / +5V)
          </span>
        </div>
      </div>

      {/* SVG Diagram Canvas */}
      <div className="relative w-full aspect-[16/9] max-h-[320px] bg-slate-900 rounded-xl p-4 flex items-center justify-center overflow-hidden border border-slate-800 shadow-inner">
        {/* Subtle background grid representing breadboard / PCB layout */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #60a5fa 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />

        <svg
          viewBox="0 0 520 280"
          className="w-full h-full max-w-[480px] select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glowGreen" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="gateGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ----------------- INPUT WIRE A ----------------- */}
          <g className="cursor-pointer group" onClick={onToggleA}>
            {/* Click hit area */}
            <line x1="40" y1="95" x2="178" y2="95" stroke="transparent" strokeWidth="24" />
            
            {/* Signal line */}
            <line
              x1="50"
              y1="95"
              x2="178"
              y2="95"
              stroke={isHighA ? "#10b981" : "#475569"}
              strokeWidth="4"
              strokeLinecap="round"
              className={isHighA ? "animate-signal" : ""}
              filter={isHighA ? "url(#glowGreen)" : "none"}
            />

            {/* Input Terminal A Circle */}
            <circle
              cx="50"
              cy="95"
              r="7"
              fill={isHighA ? "#10b981" : "#1e293b"}
              stroke={isHighA ? "#34d399" : "#64748b"}
              strokeWidth="2.5"
            />

            {/* Terminal Label A */}
            <text x="25" y="100" fill="#f8fafc" fontSize="15" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              A
            </text>

            {/* Value Badge A */}
            <rect
              x="85"
              y="70"
              width="46"
              height="20"
              rx="4"
              fill={isHighA ? "#065f46" : "#1e293b"}
              stroke={isHighA ? "#10b981" : "#475569"}
              strokeWidth="1"
            />
            <text
              x="108"
              y="84"
              fill={isHighA ? "#6ee7b7" : "#94a3b8"}
              fontSize="11"
              fontWeight="bold"
              fontFamily="monospace"
              textAnchor="middle"
            >
              {isHighA ? "1 (HI)" : "0 (LO)"}
            </text>
          </g>

          {/* ----------------- INPUT WIRE B ----------------- */}
          <g className="cursor-pointer group" onClick={onToggleB}>
            {/* Click hit area */}
            <line x1="40" y1="185" x2="178" y2="185" stroke="transparent" strokeWidth="24" />
            
            {/* Signal line */}
            <line
              x1="50"
              y1="185"
              x2="178"
              y2="185"
              stroke={isHighB ? "#10b981" : "#475569"}
              strokeWidth="4"
              strokeLinecap="round"
              className={isHighB ? "animate-signal" : ""}
              filter={isHighB ? "url(#glowGreen)" : "none"}
            />

            {/* Input Terminal B Circle */}
            <circle
              cx="50"
              cy="185"
              r="7"
              fill={isHighB ? "#10b981" : "#1e293b"}
              stroke={isHighB ? "#34d399" : "#64748b"}
              strokeWidth="2.5"
            />

            {/* Terminal Label B */}
            <text x="25" y="190" fill="#f8fafc" fontSize="15" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
              B
            </text>

            {/* Value Badge B */}
            <rect
              x="85"
              y="195"
              width="46"
              height="20"
              rx="4"
              fill={isHighB ? "#065f46" : "#1e293b"}
              stroke={isHighB ? "#10b981" : "#475569"}
              strokeWidth="1"
            />
            <text
              x="108"
              y="209"
              fill={isHighB ? "#6ee7b7" : "#94a3b8"}
              fontSize="11"
              fontWeight="bold"
              fontFamily="monospace"
              textAnchor="middle"
            >
              {isHighB ? "1 (HI)" : "0 (LO)"}
            </text>
          </g>

          {/* ----------------- OR GATE BODY (IEEE Std 91-1984) ----------------- */}
          {/*
            Exact OR Gate Geometry:
            Back curve: Starts at (160, 60), curves inward through (200, 140) to (160, 220)
            Top curve: From (160, 60) smoothly arches forward to tip at (350, 140)
            Bottom curve: From (350, 140) smoothly arches back to (160, 220)
          */}
          <path
            d="M 160 60 Q 255 65 350 140 Q 255 215 160 220 Q 200 140 160 60 Z"
            fill={isHighY ? "rgba(16, 185, 129, 0.12)" : "rgba(30, 41, 59, 0.85)"}
            stroke={isHighY ? "#10b981" : "#3b82f6"}
            strokeWidth="3.5"
            strokeLinejoin="round"
            filter={isHighY ? "url(#gateGlow)" : "none"}
          />

          {/* Text inside the OR Gate */}
          <text
            x="245"
            y="136"
            fill="#e2e8f0"
            fontSize="18"
            fontWeight="bold"
            letterSpacing="2"
            textAnchor="middle"
          >
            OR
          </text>
          <text
            x="245"
            y="158"
            fill="#94a3b8"
            fontSize="11"
            fontFamily="monospace"
            textAnchor="middle"
          >
            Y = A + B
          </text>

          {/* ----------------- OUTPUT WIRE Y ----------------- */}
          <line
            x1="350"
            y1="140"
            x2="450"
            y2="140"
            stroke={isHighY ? "#10b981" : "#475569"}
            strokeWidth="4"
            strokeLinecap="round"
            className={isHighY ? "animate-signal" : ""}
            filter={isHighY ? "url(#glowGreen)" : "none"}
          />

          {/* Output Terminal Y Circle */}
          <circle
            cx="450"
            cy="140"
            r="8"
            fill={isHighY ? "#10b981" : "#1e293b"}
            stroke={isHighY ? "#34d399" : "#64748b"}
            strokeWidth="2.5"
          />

          {/* Output Label Y */}
          <text x="478" y="145" fill="#f8fafc" fontSize="16" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            Y
          </text>

          {/* Output Status Badge */}
          <rect
            x="368"
            y="108"
            width="60"
            height="22"
            rx="4"
            fill={isHighY ? "#065f46" : "#1e293b"}
            stroke={isHighY ? "#10b981" : "#475569"}
            strokeWidth="1"
          />
          <text
            x="398"
            y="123"
            fill={isHighY ? "#6ee7b7" : "#94a3b8"}
            fontSize="11"
            fontWeight="bold"
            fontFamily="monospace"
            textAnchor="middle"
          >
            {isHighY ? "HIGH (1)" : "LOW (0)"}
          </text>
        </svg>
      </div>

      {/* Interactive tip */}
      <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
          <span>Tip: You can click directly on the terminals <strong>A</strong> and <strong>B</strong> above to toggle signal state.</span>
        </span>
        <span className="font-mono text-slate-400 hidden sm:inline">2-Input Logic Gate</span>
      </div>
    </div>
  );
}

