# dose — Claude Notes

## Overview
Personal drug/vitamin usage tracker + educational wiki. React 19 + Vite + localStorage, no backend.
Like Erowid but personal — log what you take, browse harm reduction, see patterns.

## Live
- Vercel: TBD (run `vercel --prod` to deploy)
- GitHub: TBD (run `gh repo create nulljosh/dose --public --source=. --push`)

## Stack
- React 19 + Vite
- React Router v7 (hash routing for Vercel SPA)
- localStorage for persistence (no backend)
- Vitest + Testing Library for tests

## Design
- Dark Editorial / BC gov blue variant
- `#0c1220` navy bg, `#1a5a96`/`#4e9cd7` BC blue, `#d4a843` amber, `#e8e4da` cream text
- Fraunces serif headings, DM Sans body (Google Fonts)
- Noise texture via SVG fractalNoise in body::before
- FadeUp animations, pill CTAs, section labels uppercase 0.12em tracking
- Mobile-first, bottom nav, safe-area-inset support
- Reference style: `~/Documents/Code/tally/web/landing.html`

## Data Model

### Log entry (localStorage key: `dose:log`)
```json
{
  "id": "1234567890-abc123",
  "substanceId": "caffeine",
  "dose": 200,
  "unit": "mg",
  "route": "oral",
  "timestamp": "2026-02-20T08:00:00.000Z",
  "notes": "Before workout",
  "rating": 4
}
```

### Custom substance (localStorage key: `dose:custom_substances`)
```json
{
  "id": "my-herb",
  "name": "My Herb",
  "category": "supplement",
  "halfLife": "unknown",
  "effects": [],
  "interactions": [],
  "harmReduction": [],
  "routes": ["oral"],
  "unit": "mg",
  "custom": true
}
```

## User's Regimen (known stack)
- **Sertraline** 50mg oral, nightly (SSRI — interactions matter)
- **Cannabis** daily, smoked/vaped, all day
- **Caffeine** 2–4 cups + 200mg L-theanine daily
- **Various vitamins** — Vitamin D, C, B12, Magnesium, Zinc, Omega-3

## Planned Features
- Custom substance creator (UI for addCustom hook)
- User profile + named regimens (template your usual stack)
- Tolerance tracking (flag substances used too frequently)
- Mood/sleep correlation (add mood/sleep rating to entries)
- Interaction checker (warn when logging substance that interacts with active stack)
- Export log to CSV
- **[from health-tracker]** Daily health check-ins (sleep, exercise, nutrition, smoking) with streaks + risk flags
- **[from ai-doctor]** Multi-user profiles + iOS Health screenshot OCR parsing + 7-day analytics

## Absorbed Projects
Source code archived in `archive/` for reference:
- `archive/health-tracker/` -- daily check-in tracker (React 18, Recharts, streaks)
- `archive/ai-doctor/` -- multi-user health tracker with OCR (React 18, Recharts)

## Key Files
- `src/data/substances.js` — 20 pre-seeded substances with harm reduction data
- `src/hooks/useDoseLog.js` — localStorage CRUD with validation
- `src/hooks/useSubstances.js` — static data + custom substance management
- `src/pages/Dashboard.jsx` — main view, active stack, quick log
- `src/pages/Journal.jsx` — full log with filters
- `src/pages/Substances.jsx` — searchable wiki grid
- `src/pages/SubstanceDetail.jsx` — individual substance page
- `src/pages/Insights.jsx` — heatmap + usage stats

## Tests
- `src/test/useDoseLog.test.js` — 20 tests covering CRUD, validation, edge cases
- `src/test/useSubstances.test.js` — 12 tests covering data integrity, search, custom substances

## Commands
```bash
npm run dev       # Dev server
npm test          # Run tests
npm run build     # Production build
vercel --prod     # Deploy to Vercel
```

## Permissions
Claude has full autonomy to read, write, and execute in this workspace.
