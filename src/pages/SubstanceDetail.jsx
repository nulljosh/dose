import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSubstances } from '../hooks/useSubstances';
import { useDoseLog } from '../hooks/useDoseLog';
import AddEntryModal from '../components/AddEntryModal';

const CATEGORY_COLORS = {
  psychedelic: '#9b59b6', stimulant: '#e74c3c', depressant: '#3498db',
  entactogen: '#e91e63', cannabinoid: '#27ae60', vitamin: '#f39c12',
  supplement: '#1abc9c', mineral: '#7f8c8d', medication: '#2980b9',
  dissociative: '#8e44ad', 'opioid-adjacent': '#c0392b',
};

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a9e90', marginBottom: 10 }}>
        {title}
      </div>
      {children}
    </div>
  );
}

function List({ items, color }) {
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', gap: 10, fontSize: '0.85rem', color: '#e8e4da', lineHeight: 1.5 }}>
          <span style={{ color: color || '#4e9cd7', flexShrink: 0, marginTop: 1 }}>—</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function SubstanceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getById } = useSubstances();
  const { addEntry, getEntries } = useDoseLog();
  const [showModal, setShowModal] = useState(false);

  const sub = getById(id);

  if (!sub) {
    return (
      <main style={{ padding: '40px 16px', textAlign: 'center', color: '#8a9e90' }}>
        <p>Substance not found.</p>
        <button onClick={() => navigate('/substances')} style={{ background: 'none', border: 'none', color: '#4e9cd7', cursor: 'pointer', fontSize: '0.9rem' }}>
          ← Back to substances
        </button>
      </main>
    );
  }

  const color = CATEGORY_COLORS[sub.category] || '#4e9cd7';
  const myLogs = getEntries({ substanceId: sub.id });
  const lastLog = myLogs[0];

  return (
    <main style={{ padding: '0 0 100px', maxWidth: 560, margin: '0 auto', animation: 'fadeUp 0.4s ease both' }}>
      {/* Hero banner */}
      <div style={{
        background: `linear-gradient(180deg, ${color}18 0%, transparent 100%)`,
        borderBottom: `1px solid ${color}22`,
        padding: '20px 16px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)',
          width: 300, height: 200,
          background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        <button
          onClick={() => navigate('/substances')}
          style={{ background: 'none', border: 'none', color: '#8a9e90', cursor: 'pointer', fontSize: '0.85rem', padding: 0, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 4 }}
        >
          <span style={{ fontSize: '1rem' }}>←</span> Substances
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
          <div>
            <div style={{
              display: 'inline-block',
              fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color,
              background: color + '18', padding: '3px 10px',
              borderRadius: 100, border: `1px solid ${color}44`, marginBottom: 10,
            }}>
              {sub.category.replace('-', ' ')}
            </div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.8rem, 6vw, 2.4rem)', color: '#e8e4da', margin: '0 0 4px', lineHeight: 1.1 }}>
              {sub.name}
            </h1>
            <div style={{ fontSize: '0.8rem', color: '#8a9e90' }}>
              Half-life: {sub.halfLife}
            </div>
          </div>
          <button
            onClick={() => setShowModal(true)}
            style={{
              background: '#e8e4da', border: 'none', borderRadius: 100,
              padding: '10px 18px', fontSize: '0.82rem', fontWeight: 700,
              color: '#0c1220', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              flexShrink: 0,
              transition: 'background 0.2s, transform 0.2s cubic-bezier(0.34,1.56,0.64,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#d4a843'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#e8e4da'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Log Dose
          </button>
        </div>

        {lastLog && (
          <div style={{ marginTop: 12, fontSize: '0.76rem', color: '#8a9e90' }}>
            Last logged: {new Date(lastLog.timestamp).toLocaleDateString('en-CA', { month: 'short', day: 'numeric' })} · {myLogs.length} total {myLogs.length === 1 ? 'entry' : 'entries'}
          </div>
        )}
      </div>

      <div style={{ padding: '24px 16px' }}>
        {sub.notes && (
          <div style={{
            background: 'rgba(78,156,215,0.07)',
            border: '1px solid rgba(78,156,215,0.14)',
            borderRadius: 10, padding: '12px 16px',
            fontSize: '0.83rem', color: '#8a9e90', lineHeight: 1.6,
            marginBottom: 24, fontStyle: 'italic',
          }}>
            {sub.notes}
          </div>
        )}

        {sub.effects?.length > 0 && (
          <Section title="Effects">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {sub.effects.map((e, i) => (
                <span key={i} style={{
                  background: color + '14', border: `1px solid ${color}33`,
                  borderRadius: 100, padding: '4px 12px',
                  fontSize: '0.78rem', color: '#e8e4da',
                }}>
                  {e}
                </span>
              ))}
            </div>
          </Section>
        )}

        {sub.routes?.length > 0 && (
          <Section title="Routes of Administration">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {sub.routes.map((r, i) => (
                <span key={i} style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 100, padding: '4px 12px',
                  fontSize: '0.78rem', color: '#8a9e90',
                }}>
                  {r}
                </span>
              ))}
            </div>
          </Section>
        )}

        {sub.interactions?.length > 0 && (
          <Section title="Drug Interactions">
            <div style={{
              background: 'rgba(231,76,60,0.07)',
              border: '1px solid rgba(231,76,60,0.2)',
              borderRadius: 10, padding: '12px 16px',
            }}>
              <List items={sub.interactions} color="#e74c3c" />
            </div>
          </Section>
        )}

        {sub.harmReduction?.length > 0 && (
          <Section title="Harm Reduction">
            <div style={{
              background: 'rgba(26,90,150,0.08)',
              border: '1px solid rgba(78,156,215,0.18)',
              borderRadius: 10, padding: '12px 16px',
            }}>
              <List items={sub.harmReduction} color="#4e9cd7" />
            </div>
          </Section>
        )}

        <div style={{
          marginTop: 8, padding: '12px 16px',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)',
          fontSize: '0.72rem', color: '#8a9e90', lineHeight: 1.6,
        }}>
          Educational reference only. Not medical advice. Check current laws in your jurisdiction.
          Verify interactions with a pharmacist or physician before combining substances.
        </div>
      </div>

      {showModal && (
        <AddEntryModal
          onAdd={(data) => addEntry({ ...data, substanceId: sub.id, unit: sub.unit || 'mg' })}
          onClose={() => setShowModal(false)}
        />
      )}
    </main>
  );
}
