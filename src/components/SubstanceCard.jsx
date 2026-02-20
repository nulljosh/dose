import { useNavigate } from 'react-router-dom';

const CATEGORY_COLORS = {
  psychedelic: '#9b59b6',
  stimulant: '#e74c3c',
  depressant: '#3498db',
  entactogen: '#e91e63',
  cannabinoid: '#27ae60',
  vitamin: '#f39c12',
  supplement: '#1abc9c',
  mineral: '#7f8c8d',
  medication: '#2980b9',
  dissociative: '#8e44ad',
  'opioid-adjacent': '#c0392b',
};

export default function SubstanceCard({ substance }) {
  const navigate = useNavigate();
  const color = CATEGORY_COLORS[substance.category] || '#4e9cd7';

  return (
    <button
      onClick={() => navigate(`/substances/${substance.id}`)}
      style={{
        width: '100%',
        textAlign: 'left',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(78,156,215,0.1)',
        borderRadius: 14,
        padding: '16px',
        cursor: 'pointer',
        transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1), border-color 0.2s ease, background 0.2s ease',
        fontFamily: "'DM Sans', sans-serif",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.borderColor = color + '55';
        e.currentTarget.style.background = 'rgba(255,255,255,0.055)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(78,156,215,0.1)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
        <span style={{
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color,
          background: color + '18',
          padding: '3px 8px',
          borderRadius: 100,
          border: `1px solid ${color}44`,
        }}>
          {substance.category.replace('-', ' ')}
        </span>
        {substance.custom && (
          <span style={{ fontSize: '0.6rem', color: '#8a9e90', fontStyle: 'italic' }}>custom</span>
        )}
      </div>
      <div style={{
        fontSize: '1.05rem',
        fontWeight: 600,
        fontFamily: "'Fraunces', serif",
        color: '#e8e4da',
        marginBottom: 6,
        lineHeight: 1.2,
      }}>
        {substance.name}
      </div>
      <div style={{ fontSize: '0.75rem', color: '#8a9e90', lineHeight: 1.4 }}>
        {substance.effects.slice(0, 3).join(' · ')}
      </div>
    </button>
  );
}
