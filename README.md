# dose

Personal substance tracker and educational wiki. Log doses, browse harm reduction info, and see patterns over time.

## Architecture

![Architecture](architecture.svg)

## Stack

- React 19 + Vite
- React Router v7 (hash routing)
- Chart.js + react-chartjs-2
- localStorage — no backend, fully offline

## Dev

```bash
npm install
npm run dev
npm test
npm run build
```

Opens at http://localhost:5173.

## Roadmap

- [ ] Custom substance creation
- [ ] Drug interaction checker
- [ ] Tolerance tracking with washout periods
- [ ] Mood and sleep correlation
- [ ] Export to CSV
- [ ] Apple Health sync
- [ ] OCR pill identification
- [ ] Calendar integration
