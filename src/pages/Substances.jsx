import { useState } from 'react';
import { useSubstances } from '../hooks/useSubstances';
import SubstanceCard from '../components/SubstanceCard';

const CATEGORIES = ['all', 'psychedelic', 'stimulant', 'depressant', 'entactogen', 'cannabinoid', 'vitamin', 'supplement', 'mineral', 'medication', 'dissociative', 'opioid-adjacent'];

export default function Substances() {
  const { search, substances } = useSubstances();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  let results = query ? search(query) : substances;
  if (category !== 'all') {
    results = results.filter(s => s.category === category);
  }

  return (
    <main style={{ padding: '24px 16px 100px', maxWidth: 560, margin: '0 auto', animation: 'fadeUp 0.4s ease both' }}>
      <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.8rem', color: '#e8e4da', margin: '0 0 6px' }}>Substances</h1>
      <p style={{ color: '#8a9e90', fontSize: '0.85rem', margin: '0 0 20px' }}>
        Educational reference. {substances.length} substances indexed.
      </p>

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: 14 }}>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8a9e90"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
        >
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="search"
          placeholder="Search by name or category…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(78,156,215,0.15)',
            borderRadius: 10,
            padding: '11px 14px 11px 40px',
            color: '#e8e4da',
            fontSize: '0.9rem',
            fontFamily: "'DM Sans', sans-serif",
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Category filter */}
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 8, marginBottom: 20, scrollbarWidth: 'none' }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              flexShrink: 0,
              background: category === cat ? 'rgba(78,156,215,0.15)' : 'transparent',
              border: category === cat ? '1px solid rgba(78,156,215,0.4)' : '1px solid rgba(78,156,215,0.12)',
              borderRadius: 100,
              padding: '5px 12px',
              color: category === cat ? '#4e9cd7' : '#8a9e90',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'all 0.15s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {cat === 'all' ? 'All' : cat.replace('-', ' ')}
          </button>
        ))}
      </div>

      {results.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '48px 20px',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: 14, border: '1px dashed rgba(78,156,215,0.15)',
          color: '#8a9e90', fontSize: '0.88rem',
        }}>
          No substances match "{query}".
        </div>
      ) : (
        <>
          <div style={{ fontSize: '0.72rem', color: '#8a9e90', marginBottom: 14 }}>
            {results.length} {results.length === 1 ? 'substance' : 'substances'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
            {results.map(s => (
              <SubstanceCard key={s.id} substance={s} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
