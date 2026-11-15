# Design and Simulation of OR Gate
**Digital Electronics Laboratory Educational Simulation**

An interactive, software-based digital electronics laboratory simulation demonstrating the working principle, Boolean algebra, truth table, and circuit behavior of a standard two-input **OR Gate**.

---

## 1. Project Overview
This project provides an educational platform for engineering and computer science students to interactively study the two-input OR logic gate.

- **Standard Formulation:** $Y = A + B$
- **Core Principle:** The output $Y$ is **HIGH (1)** if at least one input ($A$ or $B$) is **HIGH (1)**.
- **Reference Standard:** IEEE Std 91-1984 / ANSI Y32.14

---

## 2. Technology Stack
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS (Custom digital electronics laboratory theme with blue and indigo accents)
- **Icons:** Lucide React
- **Graphics:** Scalable Vector Graphics (SVG) with IEEE-standard curved OR gate geometry and animated dynamic signal flow
- **Logic Engine:** Native JavaScript Boolean evaluation (`const output = (A || B) ? 1 : 0;`)

---

## 3. Features & Modules

### A. Laboratory Header
- Academic lab designation: *Digital Electronics Laboratory (Experiment #02)*.
- Real-time simulation engine readiness indicator.
- Compliant with IEEE Std 91-1984.

### B. Theoretical Foundations & Introduction
- Definitions and roles of logic gates in digital integrated circuits.
- Operational definition of the OR Gate.
- Practical reasoning for using OR gates in modern decision-making hardware (e.g., TTL 7432 IC).

### C. Interactive Simulation Workbench
- **Interactive Binary Input Switches:** Toggle Input $A$ and Input $B$ between $0$ (LOW / 0V) and $1$ (HIGH / +5V).
- **Realistic LED Output Visualizer:** High-fidelity green LED with active glow effect when $Y = 1$, and inactive dark grey lens when $Y = 0$.
- **Real-Time Explanation Panel:** Context-aware feedback describing electron flow and conduction conditions for the active input state.
- **Quick Preset Selectors:** One-click presets for `(0, 0)`, `(0, 1)`, `(1, 0)`, and `(1, 1)`.
- **System Reset Button:** Instantly restores inputs to initial ground state `(0, 0)`.

### D. IEEE Standard OR Gate Schematic Diagram (SVG)
- Mathematically accurate standard OR gate shape (curved concave input back, dual arched body leading to sharp output node).
- Visual signal lines that illuminate with vibrant green and flow animations on logic HIGH, and muted slate on logic LOW.
- Interactive terminal clicks: Click directly on input terminal pins $A$ or $B$ in the schematic to toggle their state.

### E. Dynamic Truth Table
- Exhaustive mapping of all $2^2 = 4$ combinations:
  | Input A | Input B | Output Y |
  | :---: | :---: | :---: |
  | 0 | 0 | 0 |
  | 0 | 1 | 1 |
  | 1 | 0 | 1 |
  | 1 | 1 | 1 |
- Automatic live row highlighting corresponding to the active switch settings.
- Click any row to automatically load that combination into the simulation.

### F. Boolean Expression & Algebraic Laws
- Prominent mathematical formulation: $Y = A + B$.
- Live signal evaluation: $(A + B = Y)$.
- Key algebraic identities:
  - Identity Law: $A + 0 = A$
  - Dominance Law: $A + 1 = 1$
  - Idempotent Law: $A + A = A$
  - Commutative Law: $A + B = B + A$

### G. Working Principle & State Analysis
- Detailed analysis of all 4 states:
  - $A = 0, B = 0 \implies Y = 0$: Parallel switches OPEN; no current reaches output.
  - $A = 0, B = 1 \implies Y = 1$: Branch B conducts; output pulled to +5V.
  - $A = 1, B = 0 \implies Y = 1$: Branch A conducts; output pulled to +5V.
  - $A = 1, B = 1 \implies Y = 1$: Both parallel branches conduct; output maintained at +5V.

### H. Practical Engineering Applications
- **Fire Alarm Systems:** Smoke Sensor ($A$) + Heat Sensor ($B$) $\rightarrow$ Emergency Siren ($Y$).
- **Security Alarm Systems:** Door Reed Switch ($A$) + Window Vibration Sensor ($B$) $\rightarrow$ Intrusion Alarm ($Y$).
- **Digital Control Systems:** Manual Emergency Stop ($A$) + Thermal Overload Relay ($B$) $\rightarrow$ Motor Cutoff ($Y$).
- **Sensor Alert Systems:** Low Oil Pressure ($A$) + Coolant Overheat ($B$) $\rightarrow$ Engine Warning Lamp ($Y$).

---

## 4. How to Run the Application

### Prerequisites
- Node.js (v18 or higher recommended; tested on v24)
- npm (v9 or higher)

### Installation
Clone or navigate to the project directory, then install the dependencies:
```bash
npm install
```

### Start Development Server
Run the local Vite development server:
```bash
npm run dev
```
By default, the application runs at `http://localhost:3000` (or `http://localhost:5173`).

### Production Build
To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

