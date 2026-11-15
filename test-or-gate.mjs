// Digital Electronics OR Gate Logic Verification Test Suite
import assert from 'node:assert';

function simulateOrGate(inputA, inputB) {
  // Exact logic implemented in application:
  const output = (inputA || inputB) ? 1 : 0;
  return output;
}

const testCases = [
  { a: 0, b: 0, expected: 0, label: "Case 1: A=0, B=0 -> Y=0" },
  { a: 0, b: 1, expected: 1, label: "Case 2: A=0, B=1 -> Y=1" },
  { a: 1, b: 0, expected: 1, label: "Case 3: A=1, B=0 -> Y=1" },
  { a: 1, b: 1, expected: 1, label: "Case 4: A=1, B=1 -> Y=1" },
];

console.log("=== RUNNING DIGITAL LOGIC OR GATE VERIFICATION ===");
let allPassed = true;

for (const tc of testCases) {
  const result = simulateOrGate(tc.a, tc.b);
  const status = result === tc.expected ? "PASSED" : "FAILED";
  console.log(`[${status}] ${tc.label} | Received Output Y = ${result}`);
  if (result !== tc.expected) {
    allPassed = false;
  }
}

if (allPassed) {
  console.log("\nALL 4 INPUT COMBINATIONS PASSED VERIFICATION!");
  process.exit(0);
} else {
  console.error("\nTEST SUITE FAILED");
  process.exit(1);
}

