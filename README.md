# dose

Personal substance tracker and educational wiki. Log what you take, browse harm reduction info, and see patterns over time.

**Live**: TBD — Vercel

## Features

- **Dashboard**: Active stack at a glance, quick-log button, recent entries
- **Journal**: Chronological dose log with filters by substance, route, and date range
- **Substances wiki**: 20+ substances with effects, half-life, interactions, and harm reduction notes
- **Insights**: Weekly usage heatmap and top-substance analysis
- **localStorage**: Fully offline — no backend, no account

## Quick Start

```bash
git clone https://github.com/nulljosh/dose.git
cd dose
npm install
npm run dev
```

Opens at http://localhost:5173

## Tech Stack

- React 19 + Vite
- React Router (hash routing)
- localStorage (no backend)
- Vercel deployment

## Architecture

```svg
<svg viewBox="0 0 720 340" width="100%" style="max-width:720px;font-family:'DM Sans',system-ui,sans-serif;background:#0c1220;border-radius:12px" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="340" fill="#0c1220" rx="12"/>

  <!-- Title -->
  <text x="360" y="28" font-size="13" font-weight="700" fill="#e8e4da" text-anchor="middle" font-family="Fraunces,Georgia,serif">dose -- architecture</text>

  <!-- ===== ROW 1: React App ===== -->
  <rect x="295" y="48" width="130" height="32" rx="8" fill="#1a5a96"/>
  <text x="360" y="69" font-size="12" font-weight="600" fill="white" text-anchor="middle">React + Router</text>

  <!-- Arrow down from App -->
  <line x1="360" y1="80" x2="360" y2="100" stroke="#4e9cd7" stroke-width="1.5" opacity="0.6"/>
  <polygon points="354,96 360,104 366,96" fill="#4e9cd7" opacity="0.6"/>

  <!-- ===== ROW 2: Pages ===== -->
  <!-- Dashboard -->
  <rect x="28" y="110" width="110" height="30" rx="6" fill="rgba(78,156,215,0.1)" stroke="#4e9cd7" stroke-width="0.7" stroke-opacity="0.5"/>
  <text x="83" y="130" font-size="10.5" fill="#4e9cd7" text-anchor="middle">Dashboard</text>

  <!-- Journal -->
  <rect x="156" y="110" width="110" height="30" rx="6" fill="rgba(78,156,215,0.1)" stroke="#4e9cd7" stroke-width="0.7" stroke-opacity="0.5"/>
  <text x="211" y="130" font-size="10.5" fill="#4e9cd7" text-anchor="middle">Journal</text>

  <!-- Wiki -->
  <rect x="284" y="110" width="110" height="30" rx="6" fill="rgba(78,156,215,0.1)" stroke="#4e9cd7" stroke-width="0.7" stroke-opacity="0.5"/>
  <text x="339" y="130" font-size="10.5" fill="#4e9cd7" text-anchor="middle">Wiki</text>

  <!-- Insights -->
  <rect x="412" y="110" width="110" height="30" rx="6" fill="rgba(78,156,215,0.1)" stroke="#4e9cd7" stroke-width="0.7" stroke-opacity="0.5"/>
  <text x="467" y="130" font-size="10.5" fill="#4e9cd7" text-anchor="middle">Insights</text>

  <!-- Biometrics -->
  <rect x="540" y="110" width="110" height="30" rx="6" fill="rgba(78,156,215,0.1)" stroke="#4e9cd7" stroke-width="0.7" stroke-opacity="0.5"/>
  <text x="595" y="130" font-size="10.5" fill="#4e9cd7" text-anchor="middle">Biometrics</text>

  <!-- Pages label -->
  <text x="680" y="130" font-size="8.5" fill="#8a9e90" text-anchor="start" font-style="italic">pages</text>

  <!-- Connector: App to each page -->
  <line x1="83" y1="104" x2="83" y2="110" stroke="#4e9cd7" stroke-width="1" opacity="0.35"/>
  <line x1="211" y1="104" x2="211" y2="110" stroke="#4e9cd7" stroke-width="1" opacity="0.35"/>
  <line x1="339" y1="104" x2="339" y2="110" stroke="#4e9cd7" stroke-width="1" opacity="0.35"/>
  <line x1="467" y1="104" x2="467" y2="110" stroke="#4e9cd7" stroke-width="1" opacity="0.35"/>
  <line x1="595" y1="104" x2="595" y2="110" stroke="#4e9cd7" stroke-width="1" opacity="0.35"/>
  <!-- Horizontal rail -->
  <line x1="83" y1="104" x2="595" y2="104" stroke="#4e9cd7" stroke-width="1" opacity="0.35"/>

  <!-- ===== ROW 3: Hooks ===== -->
  <!-- Arrows down from pages row -->
  <line x1="211" y1="140" x2="211" y2="170" stroke="#d4a843" stroke-width="1.2" opacity="0.5"/>
  <polygon points="205,166 211,174 217,166" fill="#d4a843" opacity="0.5"/>
  <line x1="360" y1="140" x2="360" y2="170" stroke="#d4a843" stroke-width="1.2" opacity="0.5"/>
  <polygon points="354,166 360,174 366,166" fill="#d4a843" opacity="0.5"/>
  <line x1="510" y1="140" x2="510" y2="170" stroke="#d4a843" stroke-width="1.2" opacity="0.5"/>
  <polygon points="504,166 510,174 516,166" fill="#d4a843" opacity="0.5"/>

  <!-- useDoseLog -->
  <rect x="110" y="180" width="148" height="30" rx="6" fill="rgba(212,168,67,0.08)" stroke="#d4a843" stroke-width="0.7" stroke-opacity="0.5"/>
  <text x="184" y="200" font-size="10.5" fill="#d4a843" text-anchor="middle">useDoseLog</text>

  <!-- useSubstances -->
  <rect x="276" y="180" width="148" height="30" rx="6" fill="rgba(212,168,67,0.08)" stroke="#d4a843" stroke-width="0.7" stroke-opacity="0.5"/>
  <text x="350" y="200" font-size="10.5" fill="#d4a843" text-anchor="middle">useSubstances</text>

  <!-- useBiometrics -->
  <rect x="442" y="180" width="148" height="30" rx="6" fill="rgba(212,168,67,0.08)" stroke="#d4a843" stroke-width="0.7" stroke-opacity="0.5"/>
  <text x="516" y="200" font-size="10.5" fill="#d4a843" text-anchor="middle">useBiometrics</text>

  <!-- Hooks label -->
  <text x="680" y="200" font-size="8.5" fill="#8a9e90" text-anchor="start" font-style="italic">hooks</text>

  <!-- ===== ROW 4: Storage ===== -->
  <!-- Arrows down from hooks -->
  <line x1="184" y1="210" x2="184" y2="240" stroke="#8a9e90" stroke-width="1" opacity="0.4"/>
  <polygon points="178,236 184,244 190,236" fill="#8a9e90" opacity="0.4"/>
  <line x1="350" y1="210" x2="350" y2="240" stroke="#8a9e90" stroke-width="1" opacity="0.4"/>
  <polygon points="344,236 350,244 356,236" fill="#8a9e90" opacity="0.4"/>
  <line x1="516" y1="210" x2="516" y2="240" stroke="#8a9e90" stroke-width="1" opacity="0.4"/>
  <polygon points="510,236 516,244 522,236" fill="#8a9e90" opacity="0.4"/>

  <!-- localStorage box -->
  <rect x="140" y="250" width="420" height="34" rx="8" fill="rgba(138,158,144,0.08)" stroke="#8a9e90" stroke-width="0.7" stroke-opacity="0.4"/>
  <text x="350" y="272" font-size="11" fill="#8a9e90" text-anchor="middle">localStorage</text>

  <!-- Storage keys -->
  <text x="184" y="286" font-size="7.5" fill="#8a9e90" text-anchor="middle" opacity="0.6">dose:log</text>
  <text x="350" y="286" font-size="7.5" fill="#8a9e90" text-anchor="middle" opacity="0.6">dose:custom_substances</text>
  <text x="516" y="286" font-size="7.5" fill="#8a9e90" text-anchor="middle" opacity="0.6">dose:biometrics</text>

  <!-- ===== Sidebar: static data ===== -->
  <rect x="28" y="180" width="64" height="30" rx="6" fill="rgba(78,156,215,0.06)" stroke="#4e9cd7" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="60" y="199" font-size="9" fill="#4e9cd7" text-anchor="middle" opacity="0.7">data/</text>
  <!-- Arrow from data to useSubstances -->
  <line x1="92" y1="195" x2="276" y2="195" stroke="#4e9cd7" stroke-width="0.8" stroke-dasharray="4,3" opacity="0.3"/>
  <polygon points="272,191 280,195 272,199" fill="#4e9cd7" opacity="0.3"/>

  <!-- ===== Legend ===== -->
  <rect x="28" y="310" width="10" height="10" rx="2" fill="#1a5a96"/>
  <text x="44" y="319" font-size="8" fill="#8a9e90">app</text>
  <rect x="80" y="310" width="10" height="10" rx="2" fill="rgba(78,156,215,0.1)" stroke="#4e9cd7" stroke-width="0.5"/>
  <text x="96" y="319" font-size="8" fill="#8a9e90">page</text>
  <rect x="132" y="310" width="10" height="10" rx="2" fill="rgba(212,168,67,0.08)" stroke="#d4a843" stroke-width="0.5"/>
  <text x="148" y="319" font-size="8" fill="#8a9e90">hook</text>
  <rect x="184" y="310" width="10" height="10" rx="2" fill="rgba(138,158,144,0.08)" stroke="#8a9e90" stroke-width="0.5"/>
  <text x="200" y="319" font-size="8" fill="#8a9e90">storage</text>
</svg>
```

## Development

```bash
npm test          # Run tests
npm run build     # Production build
npm run preview   # Preview production build locally
```

## Roadmap

- [ ] Custom substance creation
- [ ] User profiles and regimen templates
- [ ] Tolerance tracking with washout periods
- [ ] Mood / sleep correlation
- [ ] Export to CSV
- [ ] Interaction warning engine

---

MIT License 2026 Joshua Trommel | Educational use only. Not medical advice.
