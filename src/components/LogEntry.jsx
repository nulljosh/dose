import { useSubstances } from '../hooks/useSubstances';

const CATEGORY_COLORS = {
  psychedelic: '#9b59b6', stimulant: '#e74c3c', depressant: '#3498db',
  entactogen: '#e91e63', cannabinoid: '#27ae60', vitamin: '#f39c12',
  supplement: '#1abc9c', mineral: '#7f8c8d', medication: '#2980b9',
  dissociative: '#8e44ad', 'opioid-adjacent': '#c0392b',
};

function formatTime(iso) {
  try {
    const d = new Date(iso);
    const now = new Date();
    const diffMs = now - d;
    const diffH = diffMs / (1000 * 60 * 60);
    if (diffH < 1) return `${Math.round(diffMs / 60000)}m ago`;
    if (diffH < 24) return `${Math.round(diffH)}h ago`;
    return d.toLocaleDateString('en-CA', { month: 'short', day: 'numeric' });
  } catch {
    return '—';
  }
}

function Stars({ rating }) {
  if (!rating) return null;
  return (
    <span style={{ color: '#d4a843', fontSize: '0.7rem', letterSpacing: '1px' }}>
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </span>
  );
}

export default function LogEntry({ entry, onDelete }) {
  const { getById } = useSubstances();
  const substance = getById(entry.substanceId);
  const color = CATEGORY_COLORS[substance?.category] || '#4e9cd7';
  const name = substance?.name || entry.substanceId;

  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(78,156,215,0.1)',
      borderRadius: 12,
      padding: '14px 16px',
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
    }}>
      {/* Color dot */}
      <div style={{
        width: 10, height: 10, borderRadius: '50%',
        background: color, flexShrink: 0, marginTop: 5,
      }} />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
          <span style={{
            fontFamily: "'Fraunces', serif",
            fontSize: '1rem', fontWeight: 600, color: '#e8e4da',
          }}>
            {name}
          </span>
          <span style={{ fontSize: '0.72rem', color: '#8a9e90', whiteSpace: 'nowrap', flexShrink: 0 }}>
            {formatTime(entry.timestamp)}
          </span>
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 4, fontSize: '0.78rem', color: '#8a9e90' }}>
          <span style={{ color: '#4e9cd7', fontWeight: 600 }}>{entry.dose} {entry.unit}</span>
          <span>{entry.route}</span>
          <Stars rating={entry.rating} />
        </div>

        {entry.notes && (
          <div style={{ fontSize: '0.76rem', color: '#8a9e90', fontStyle: 'italic', lineHeight: 1.4, marginTop: 2 }}>
            {entry.notes.length > 80 ? entry.notes.slice(0, 80) + '…' : entry.notes}
          </div>
        )}
      </div>

      {onDelete && (
        <button
          onClick={() => onDelete(entry.id)}
          aria-label="Delete entry"
          style={{
            background: 'none', border: 'none', color: '#8a9e90',
            cursor: 'pointer', padding: '2px 4px', fontSize: '1rem',
            flexShrink: 0, lineHeight: 1, borderRadius: 4,
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#e74c3c'}
          onMouseLeave={e => e.currentTarget.style.color = '#8a9e90'}
        >
          ×
        </button>
      )}
    </div>
  );
}
