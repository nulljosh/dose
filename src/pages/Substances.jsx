import { useState } from 'react';
import { useSubstances } from '../hooks/useSubstances';
import SubstanceCard from '../components/SubstanceCard';

const CATEGORIES = [
  'all', 'psychedelic', 'stimulant', 'depressant', 'entactogen', 'cannabinoid',
  'opioid', 'opioid-adjacent', 'dissociative', 'benzodiazepine',
  'medication', 'nootropic', 'supplement', 'vitamin', 'mineral', 'herb',
];

export default function Substances() {
  const { search, substances } = useSubstances();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  let results = query ? search(query) : substances;
  if (category !== 'all') {
    results = results.filter(s => s.category === category);
  }

  return (
    <main className="page">
      <h1 className="page-title">Substances</h1>
      <p className="page-subtitle">
        Educational reference. {substances.length} substances indexed.
      </p>

      <div style={{ position: 'relative', marginBottom: 14 }}>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-secondary)' }}
        >
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="search"
          placeholder="Search by name or category..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="input input-search"
        />
      </div>

      <div className="filter-row">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`filter-pill${category === cat ? ' active' : ''}`}
          >
            {cat === 'all' ? 'All' : cat.replace('-', ' ')}
          </button>
        ))}
      </div>

      {results.length === 0 ? (
        <div className="card-empty">No substances match "{query}".</div>
      ) : (
        <>
          <div className="count-label">
            {results.length} {results.length === 1 ? 'substance' : 'substances'}
          </div>
          <div className="substance-grid">
            {results.map(s => <SubstanceCard key={s.id} substance={s} />)}
          </div>
        </>
      )}
    </main>
  );
}
