import React, { useState } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import CircuitWorkbench from './components/CircuitWorkbench';
import TruthTableSection from './components/TruthTableSection';
import TheorySection from './components/TheorySection';
import ApplicationsSection from './components/ApplicationsSection';
import Footer from './components/Footer';

export default function App() {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);

  const handleReset = () => {
    setInputA(0);
    setInputB(0);
  };

  const handleSelectCombination = (a, b) => {
    setInputA(a);
    setInputB(b);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#202124] flex flex-col font-sans">
      {/* Top laboratory header */}
      <Header />

      {/* Main page content */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-8 space-y-10">
        {/* Academic introduction & title */}
        <Introduction />

        {/* Central visual highlight: Interactive circuit diagram & simulation workbench */}
        <CircuitWorkbench
          inputA={inputA}
          inputB={inputB}
          setInputA={setInputA}
          setInputB={setInputB}
          onReset={handleReset}
        />

        {/* Truth table & Boolean laws */}
        <TruthTableSection
          inputA={inputA}
          inputB={inputB}
          onSelectCombination={handleSelectCombination}
        />

        {/* Electrical working principle & comprehensive 4-case analysis */}
        <TheorySection
          inputA={inputA}
          inputB={inputB}
        />

        {/* Practical real-world engineering applications */}
        <ApplicationsSection />
      </main>

      {/* Minimal footer */}
      <Footer />
    </div>
  );
}
