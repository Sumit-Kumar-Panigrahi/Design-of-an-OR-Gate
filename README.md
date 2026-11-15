# Design and Simulation of OR Gate
**Digital Electronics Laboratory — Interactive Experiment 01**

A thoughtfully crafted, minimal, and educational simulation of a two-input **OR Gate**, designed with the aesthetic of a modern engineering laboratory manual.

---

## 1. Design & Engineering Philosophy
- **Restrained Visual System:** Avoids generic AI dashboard templates, heavy drop shadows, neon accents, and excessive cards.
- **Warm Architectural Palette:** 
  - Background: Warm White (`#FAFAF8`)
  - Primary Typography: Dark Charcoal (`#202124`)
  - Secondary/Annotations: Muted Grey (`#777777`)
  - Structural Borders: Hairline Grey (`#E7E7E3`)
  - Active Logic State / Accent: Laboratory Green (`#24845B`)
- **Integrated Circuit Workbench:** Harmonizes tactile binary switches, standard IEEE Std 91-1984 SVG schematic, and output LED visualizer into a unified laboratory instrument.

---

## 2. Laboratory Modules
1. **Header & Navigation:** Clean project branding, experiment designation, and minimal anchor navigation.
2. **Introduction:** Concise summary of logical disjunction with typographical Boolean expression ($Y = A + B$).
3. **Circuit Workbench:**
   - Interactive binary switches for Input $A$ and Input $B$ ($0$ / $1$, $0\text{V}$ / $+5\text{V}$).
   - IEEE 91-1984 compliant OR gate SVG with subtle dynamic conduction indicators.
   - Realistic physical-style LED output indicator and logic state badge.
   - Quick presets `(0,0)`, `(0,1)`, `(1,0)`, `(1,1)` and instant Reset.
4. **Truth Table & Boolean Laws:**
   - Exhaustive 4-state table with subtle row highlighting and click-to-simulate capability.
   - Formal Boolean identities: Identity ($A+0=A$), Dominance ($A+1=1$), Idempotent ($A+A=A$), and Commutative ($A+B=B+A$).
5. **Theory & Working Principle:**
   - Editorial, readable explanation of the parallel switch analogy ($Y = A \parallel B$).
   - Comprehensive state-by-state conduction analysis.
6. **Practical Applications:** Real-world implementations in Fire Alarm Systems, Perimeter Security, Industrial Motor Cutoffs, and TTL 7432 Integrated Circuits.

---

## 3. Technology Stack
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS (Custom restrained engineering palette)
- **Icons:** Lucide React
- **Graphics:** Scalable Vector Graphics (SVG)
- **Testing:** Native Node.js digital logic verification suite

---

## 4. How to Run Locally

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```

### Verification Test
```bash
node test-or-gate.mjs
```
