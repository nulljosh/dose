import { useState } from 'react';
import { useDoseLog } from '../hooks/useDoseLog';
import { useSubstances } from '../hooks/useSubstances';
import LogEntry from '../components/LogEntry';
import AddEntryModal from '../components/AddEntryModal';

const CATEGORY_COLORS = {
  psychedelic: '#9b59b6', stimulant: '#e74c3c', depressant: '#3498db',
  entactogen: '#e91e63', cannabinoid: '#27ae60', vitamin: '#f39c12',
  supplement: '#1abc9c', mineral: '#7f8c8d', medication: '#2980b9',
  dissociative: '#8e44ad', 'opioid-adjacent': '#c0392b',
};

export default function Dashboard() {
  const { addEntry, deleteEntry, getEntries, getActive } = useDoseLog();
  const { getById } = useSubstances();
  const [showModal, setShowModal] = useState(false);

  const active = getActive();
  const recent = getEntries().slice(0, 5);

  // Unique substances in last 24h
  const activeSubIds = [...new Set(active.map(e => e.substanceId))];

  const now = new Date();
  const greeting = now.getHours() < 12 ? 'Good morning' : now.getHours() < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <main style={{ padding: '24px 16px 100px', maxWidth: 560, margin: '0 auto', animation: 'fadeUp 0.4s ease both' }}>
      {/* Hero */}
      <div style={{
        marginBottom: 32,
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
          width: 280, height: 280,
          background: 'radial-gradient(circle, rgba(26,90,150,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4e9cd7', marginBottom: 8 }}>
          {new Date().toLocaleDateString('en-CA', { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 8vw, 2.8rem)', fontWeight: 700, color: '#e8e4da', margin: '0 0 6px', lineHeight: 1.1 }}>
          {greeting}.
        </h1>
        <p style={{ color: '#8a9e90', fontSize: '0.9rem', margin: 0 }}>
          {active.length === 0
            ? 'Nothing logged in the last 24 hours.'
            : `${active.length} dose${active.length !== 1 ? 's' : ''} logged today.`}
        </p>
      </div>

      {/* Active stack */}
      {activeSubIds.length > 0 && (
        <section style={{ marginBottom: 28 }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a9e90', marginBottom: 14 }}>
            Active Stack — last 24h
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {activeSubIds.map(id => {
              const sub = getById(id);
              if (!sub) return null;
              const color = CATEGORY_COLORS[sub.category] || '#4e9cd7';
              return (
                <div key={id} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: color + '14',
                  border: `1px solid ${color}44`,
                  borderRadius: 100,
                  padding: '6px 14px',
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
                  <span style={{ fontFamily: "'Fraunces', serif", fontSize: '0.88rem', color: '#e8e4da' }}>
                    {sub.name}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#8a9e90' }}>
                    ×{active.filter(e => e.substanceId === id).length}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Quick log button */}
      <button
        onClick={() => setShowModal(true)}
        style={{
          width: '100%',
          background: '#e8e4da',
          border: 'none',
          borderRadius: 100,
          padding: '15px',
          fontSize: '1rem',
          fontWeight: 700,
          color: '#0c1220',
          cursor: 'pointer',
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: '0.04em',
          marginBottom: 32,
          transition: 'background 0.2s, transform 0.2s cubic-bezier(0.34,1.56,0.64,1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#d4a843';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = '#e8e4da';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Log a Dose
      </button>

      {/* Recent entries */}
      <section>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a9e90', marginBottom: 14 }}>
          Recent Entries
        </div>
        {recent.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '40px 20px',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: 14, border: '1px dashed rgba(78,156,215,0.15)',
            color: '#8a9e90', fontSize: '0.88rem',
          }}>
            No entries yet. Start logging your doses above.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {recent.map(entry => (
              <LogEntry key={entry.id} entry={entry} onDelete={deleteEntry} />
            ))}
          </div>
        )}
      </section>

      {showModal && (
        <AddEntryModal
          onAdd={addEntry}
          onClose={() => setShowModal(false)}
        />
      )}
    </main>
  );
}
