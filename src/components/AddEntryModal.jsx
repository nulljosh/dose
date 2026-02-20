import { useState } from 'react';
import { useSubstances } from '../hooks/useSubstances';

const ROUTES = ['oral', 'sublingual', 'smoked', 'vaped', 'insufflated', 'topical', 'IV', 'IM'];
const UNITS = ['mg', 'g', 'mL', 'ug', 'mcg', 'IU', 'drops'];

const input = (extra = {}) => ({
  width: '100%',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(78,156,215,0.2)',
  borderRadius: 10,
  padding: '11px 14px',
  color: '#e8e4da',
  fontSize: '0.9rem',
  fontFamily: "'DM Sans', sans-serif",
  outline: 'none',
  boxSizing: 'border-box',
  ...extra,
});

const label = {
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#8a9e90',
  marginBottom: 6,
  display: 'block',
};

export default function AddEntryModal({ onAdd, onClose }) {
  const { substances } = useSubstances();
  const [form, setForm] = useState({
    substanceId: '',
    dose: '',
    unit: 'mg',
    route: 'oral',
    timestamp: new Date().toISOString().slice(0, 16),
    notes: '',
    rating: 0,
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      onAdd(form);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Log a dose"
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(12,18,32,0.92)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'flex-end',
        animation: 'fadeIn 0.15s ease',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        width: '100%',
        maxWidth: 560,
        margin: '0 auto',
        background: '#0f1928',
        border: '1px solid rgba(78,156,215,0.18)',
        borderRadius: '20px 20px 0 0',
        padding: '24px 20px',
        paddingBottom: 'calc(24px + env(safe-area-inset-bottom))',
        maxHeight: '92dvh',
        overflowY: 'auto',
      }}>
        {/* Handle */}
        <div style={{ width: 36, height: 4, background: 'rgba(255,255,255,0.12)', borderRadius: 2, margin: '0 auto 20px' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.35rem', color: '#e8e4da', margin: 0 }}>Log a Dose</h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{ background: 'none', border: 'none', color: '#8a9e90', fontSize: '1.4rem', cursor: 'pointer', padding: '4px 8px', lineHeight: 1 }}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Substance */}
          <div>
            <label style={label} htmlFor="substance-picker">Substance</label>
            <select
              id="substance-picker"
              required
              value={form.substanceId}
              onChange={e => {
                const sub = substances.find(s => s.id === e.target.value);
                set('substanceId', e.target.value);
                if (sub) set('unit', sub.unit || 'mg');
              }}
              style={{ ...input(), appearance: 'none' }}
            >
              <option value="">Select substance…</option>
              {substances.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          {/* Dose + Unit */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 10 }}>
            <div>
              <label style={label} htmlFor="dose-input">Dose</label>
              <input
                id="dose-input"
                type="number"
                step="any"
                min="0"
                required
                placeholder="0"
                value={form.dose}
                onChange={e => set('dose', e.target.value)}
                style={input()}
              />
            </div>
            <div>
              <label style={label} htmlFor="unit-select">Unit</label>
              <select
                id="unit-select"
                value={form.unit}
                onChange={e => set('unit', e.target.value)}
                style={{ ...input({ width: 80 }), appearance: 'none' }}
              >
                {UNITS.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
          </div>

          {/* Route */}
          <div>
            <label style={label} htmlFor="route-select">Route</label>
            <select
              id="route-select"
              value={form.route}
              onChange={e => set('route', e.target.value)}
              style={{ ...input(), appearance: 'none' }}
            >
              {ROUTES.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          {/* Time */}
          <div>
            <label style={label} htmlFor="time-input">Time</label>
            <input
              id="time-input"
              type="datetime-local"
              value={form.timestamp}
              onChange={e => set('timestamp', e.target.value)}
              style={input({ colorScheme: 'dark' })}
            />
          </div>

          {/* Rating */}
          <div>
            <label style={label}>Experience Rating</label>
            <div style={{ display: 'flex', gap: 8 }}>
              {[1, 2, 3, 4, 5].map(n => (
                <button
                  key={n}
                  type="button"
                  onClick={() => set('rating', form.rating === n ? 0 : n)}
                  aria-label={`Rate ${n} star${n !== 1 ? 's' : ''}`}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: '1.4rem', padding: '2px',
                    color: n <= form.rating ? '#d4a843' : 'rgba(255,255,255,0.15)',
                    transition: 'transform 0.15s, color 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.25)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  ★
                </button>
              ))}
              {form.rating > 0 && (
                <span style={{ fontSize: '0.78rem', color: '#8a9e90', alignSelf: 'center' }}>
                  {form.rating}/5
                </span>
              )}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label style={label} htmlFor="notes-input">Notes</label>
            <textarea
              id="notes-input"
              rows={3}
              placeholder="Effects, context, set and setting…"
              value={form.notes}
              onChange={e => set('notes', e.target.value)}
              style={{ ...input({ resize: 'vertical', lineHeight: 1.5 }) }}
            />
          </div>

          {error && (
            <div role="alert" style={{ color: '#e74c3c', fontSize: '0.82rem', padding: '8px 12px', background: 'rgba(231,76,60,0.1)', borderRadius: 8 }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            style={{
              background: '#e8e4da',
              border: 'none',
              borderRadius: 100,
              padding: '14px',
              fontSize: '0.95rem',
              fontWeight: 700,
              color: '#0c1220',
              cursor: submitting ? 'not-allowed' : 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.04em',
              transition: 'background 0.2s, transform 0.2s cubic-bezier(0.34,1.56,0.64,1)',
              opacity: submitting ? 0.6 : 1,
            }}
            onMouseEnter={e => {
              if (!submitting) {
                e.currentTarget.style.background = '#d4a843';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#e8e4da';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {submitting ? 'Logging…' : 'Log Dose'}
          </button>
        </form>
      </div>
    </div>
  );
}
