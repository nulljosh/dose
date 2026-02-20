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
<svg viewBox="0 0 680 380" width="100%" style="max-width:680px;font-family:monospace;background:#0c1220;border-radius:12px" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="380" fill="#0c1220" rx="12"/>
  <text x="340" y="24" font-size="13" font-weight="bold" fill="#e8e4da" text-anchor="middle">dose — Substance Tracker</text>

  <!-- Root -->
  <rect x="290" y="38" width="100" height="28" rx="6" fill="#1a5a96"/>
  <text x="340" y="57" font-size="11" fill="white" text-anchor="middle">dose/</text>

  <!-- Top connectors -->
  <line x1="340" y1="66" x2="340" y2="80" stroke="#4e9cd7" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
  <line x1="100" y1="80" x2="580" y2="80" stroke="#4e9cd7" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>

  <!-- src/ -->
  <line x1="100" y1="80" x2="100" y2="94" stroke="#4e9cd7" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
  <rect x="54" y="94" width="92" height="26" rx="6" fill="#2472b2"/>
  <text x="100" y="111" font-size="11" fill="white" text-anchor="middle">src/</text>

  <!-- src children -->
  <line x1="100" y1="120" x2="100" y2="134" stroke="#4e9cd7" stroke-width="1" opacity="0.4"/>
  <rect x="42" y="134" width="116" height="22" rx="4" fill="rgba(78,156,215,0.12)" stroke="#4e9cd7" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="100" y="149" font-size="10" fill="#4e9cd7" text-anchor="middle">pages/</text>
  <line x1="100" y1="156" x2="100" y2="170" stroke="#4e9cd7" stroke-width="1" opacity="0.4"/>
  <rect x="42" y="170" width="116" height="22" rx="4" fill="rgba(78,156,215,0.12)" stroke="#4e9cd7" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="100" y="185" font-size="10" fill="#4e9cd7" text-anchor="middle">components/</text>
  <line x1="100" y1="192" x2="100" y2="206" stroke="#4e9cd7" stroke-width="1" opacity="0.4"/>
  <rect x="42" y="206" width="116" height="22" rx="4" fill="rgba(78,156,215,0.12)" stroke="#4e9cd7" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="100" y="221" font-size="10" fill="#4e9cd7" text-anchor="middle">hooks/</text>
  <line x1="100" y1="228" x2="100" y2="242" stroke="#4e9cd7" stroke-width="1" opacity="0.4"/>
  <rect x="42" y="242" width="116" height="22" rx="4" fill="rgba(78,156,215,0.12)" stroke="#4e9cd7" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="100" y="257" font-size="10" fill="#4e9cd7" text-anchor="middle">data/</text>

  <!-- pages detail -->
  <line x1="220" y1="80" x2="220" y2="94" stroke="#4e9cd7" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
  <rect x="174" y="94" width="92" height="26" rx="6" fill="#2472b2"/>
  <text x="220" y="111" font-size="11" fill="white" text-anchor="middle">pages/</text>
  <line x1="220" y1="120" x2="220" y2="134" stroke="#4e9cd7" stroke-width="1" opacity="0.4"/>
  <rect x="162" y="134" width="116" height="22" rx="4" fill="rgba(78,156,215,0.12)" stroke="#4e9cd7" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="220" y="149" font-size="10" fill="#4e9cd7" text-anchor="middle">Dashboard.jsx</text>
  <line x1="220" y1="156" x2="220" y2="170" stroke="#4e9cd7" stroke-width="1" opacity="0.4"/>
  <rect x="162" y="170" width="116" height="22" rx="4" fill="rgba(78,156,215,0.12)" stroke="#4e9cd7" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="220" y="185" font-size="10" fill="#4e9cd7" text-anchor="middle">Journal.jsx</text>
  <line x1="220" y1="192" x2="220" y2="206" stroke="#4e9cd7" stroke-width="1" opacity="0.4"/>
  <rect x="162" y="206" width="116" height="22" rx="4" fill="rgba(78,156,215,0.12)" stroke="#4e9cd7" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="220" y="221" font-size="10" fill="#4e9cd7" text-anchor="middle">Substances.jsx</text>
  <line x1="220" y1="228" x2="220" y2="242" stroke="#4e9cd7" stroke-width="1" opacity="0.4"/>
  <rect x="162" y="242" width="116" height="22" rx="4" fill="rgba(78,156,215,0.12)" stroke="#4e9cd7" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="220" y="257" font-size="10" fill="#4e9cd7" text-anchor="middle">Insights.jsx</text>

  <!-- hooks -->
  <line x1="340" y1="80" x2="340" y2="94" stroke="#4e9cd7" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
  <rect x="294" y="94" width="92" height="26" rx="6" fill="#2472b2"/>
  <text x="340" y="111" font-size="11" fill="white" text-anchor="middle">hooks/</text>
  <line x1="340" y1="120" x2="340" y2="134" stroke="#4e9cd7" stroke-width="1" opacity="0.4"/>
  <rect x="282" y="134" width="116" height="22" rx="4" fill="rgba(212,168,67,0.1)" stroke="#d4a843" stroke-width="0.5" stroke-opacity="0.4"/>
  <text x="340" y="149" font-size="10" fill="#d4a843" text-anchor="middle">useDoseLog.js</text>
  <line x1="340" y1="156" x2="340" y2="170" stroke="#4e9cd7" stroke-width="1" opacity="0.4"/>
  <rect x="282" y="170" width="116" height="22" rx="4" fill="rgba(212,168,67,0.1)" stroke="#d4a843" stroke-width="0.5" stroke-opacity="0.4"/>
  <text x="340" y="185" font-size="10" fill="#d4a843" text-anchor="middle">useSubstances.js</text>

  <!-- data -->
  <line x1="460" y1="80" x2="460" y2="94" stroke="#4e9cd7" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
  <rect x="414" y="94" width="92" height="26" rx="6" fill="#2472b2"/>
  <text x="460" y="111" font-size="11" fill="white" text-anchor="middle">data/</text>
  <line x1="460" y1="120" x2="460" y2="134" stroke="#4e9cd7" stroke-width="1" opacity="0.4"/>
  <rect x="402" y="134" width="116" height="22" rx="4" fill="rgba(78,156,215,0.12)" stroke="#4e9cd7" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="460" y="149" font-size="10" fill="#4e9cd7" text-anchor="middle">substances.js</text>
  <text x="460" y="165" font-size="9" fill="#8a9e90" text-anchor="middle">(20 pre-seeded)</text>

  <!-- config -->
  <line x1="580" y1="80" x2="580" y2="94" stroke="#4e9cd7" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
  <rect x="520" y="94" width="120" height="26" rx="6" fill="#2472b2"/>
  <text x="580" y="111" font-size="11" fill="white" text-anchor="middle">config</text>
  <line x1="580" y1="120" x2="580" y2="134" stroke="#4e9cd7" stroke-width="1" opacity="0.4"/>
  <rect x="520" y="134" width="120" height="22" rx="4" fill="rgba(78,156,215,0.12)" stroke="#4e9cd7" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="580" y="149" font-size="10" fill="#4e9cd7" text-anchor="middle">vite.config.js</text>
  <line x1="580" y1="156" x2="580" y2="170" stroke="#4e9cd7" stroke-width="1" opacity="0.4"/>
  <rect x="520" y="170" width="120" height="22" rx="4" fill="rgba(78,156,215,0.12)" stroke="#4e9cd7" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="580" y="185" font-size="10" fill="#4e9cd7" text-anchor="middle">vercel.json</text>
  <line x1="580" y1="192" x2="580" y2="206" stroke="#4e9cd7" stroke-width="1" opacity="0.4"/>
  <rect x="520" y="206" width="120" height="22" rx="4" fill="rgba(78,156,215,0.12)" stroke="#4e9cd7" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="580" y="221" font-size="10" fill="#4e9cd7" text-anchor="middle">package.json</text>

  <!-- Legend -->
  <rect x="20" y="330" width="12" height="12" rx="2" fill="#1a5a96"/>
  <text x="38" y="340" font-size="9" fill="#8a9e90">root</text>
  <rect x="80" y="330" width="12" height="12" rx="2" fill="#2472b2"/>
  <text x="98" y="340" font-size="9" fill="#8a9e90">folder</text>
  <rect x="150" y="330" width="12" height="12" rx="2" fill="rgba(78,156,215,0.12)" stroke="#4e9cd7" stroke-width="0.5"/>
  <text x="168" y="340" font-size="9" fill="#8a9e90">source</text>
  <rect x="220" y="330" width="12" height="12" rx="2" fill="rgba(212,168,67,0.1)" stroke="#d4a843" stroke-width="0.5"/>
  <text x="238" y="340" font-size="9" fill="#8a9e90">hooks</text>
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
