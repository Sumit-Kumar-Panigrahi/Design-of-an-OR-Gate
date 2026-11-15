import React, { useState } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import LogicDiagram from './components/LogicDiagram';
import InteractiveSimulation from './components/InteractiveSimulation';
import TruthTable from './components/TruthTable';
import BooleanExpression from './components/BooleanExpression';
import WorkingPrinciple from './components/WorkingPrinciple';
import Applications from './components/Applications';
import Footer from './components/Footer';

export default function App() {
  // State for binary inputs (0 or 1)
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);

  // Digital Electronics OR Gate Logic: const output = A || B
  // Strictly computing binary 0 or 1
  const output = (inputA || inputB) ? 1 : 0;

  // Handlers for switching states
  const handleToggleA = () => {
    setInputA(prev => (prev === 0 ? 1 : 0));
  };

  const handleToggleB = () => {
    setInputB(prev => (prev === 0 ? 1 : 0));
  };

  const handleSelectCombination = (a, b) => {
    setInputA(a);
    setInputB(b);
  };

  const handleReset = () => {
    setInputA(0);
    setInputB(0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Section A: Header */}
      <Header />

      {/* Main Laboratory Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Section B: Introduction */}
        <Introduction />

        {/* Section C & D: Simulation & Diagram Workspace */}
        <section className="space-y-6">
          {/* Section D: Interactive Simulation Workbench */}
          <InteractiveSimulation
            inputA={inputA}
            inputB={inputB}
            setInputA={setInputA}
            setInputB={setInputB}
            onReset={handleReset}
          />

          {/* Section C: Schematic Logic Diagram with Live Signal SVG */}
          <LogicDiagram
            inputA={inputA}
            inputB={inputB}
            output={output}
            onToggleA={handleToggleA}
            onToggleB={handleToggleB}
          />
        </section>

        {/* Section E & F: Truth Table and Boolean Expression */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section E: Truth Table */}
          <TruthTable
            inputA={inputA}
            inputB={inputB}
            onSelectCombination={handleSelectCombination}
          />

          {/* Section F: Boolean Expression */}
          <BooleanExpression
            inputA={inputA}
            inputB={inputB}
            output={output}
          />
        </div>

        {/* Section G: Working Principle */}
        <WorkingPrinciple
          inputA={inputA}
          inputB={inputB}
          onSelectCombination={handleSelectCombination}
        />

        {/* Section H: Applications of OR Gate */}
        <Applications />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

