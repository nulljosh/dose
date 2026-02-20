import { useState } from 'react';
import { useDoseLog } from '../hooks/useDoseLog';
import { useSubstances } from '../hooks/useSubstances';
import LogEntry from '../components/LogEntry';
import AddEntryModal from '../components/AddEntryModal';

const ROUTES = ['all', 'oral', 'sublingual', 'smoked', 'vaped', 'insufflated', 'IV', 'IM'];

export default function Journal() {
  const { addEntry, deleteEntry, getEntries } = useDoseLog();
  const { substances } = useSubstances();
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({ substanceId: '', route: 'all', since: '', until: '' });
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const entries = getEntries({
    substanceId: filters.substanceId || undefined,
    route: filters.route !== 'all' ? filters.route : undefined,
    since: filters.since || undefined,
    until: filters.until || undefined,
  });

  const input = {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(78,156,215,0.15)',
    borderRadius: 8,
    padding: '9px 12px',
    color: '#e8e4da',
    fontSize: '0.83rem',
    fontFamily: "'DM Sans', sans-serif",
    outline: 'none',
    appearance: 'none',
  };

  const handleDelete = (id) => {
    if (deleteConfirm === id) {
      deleteEntry(id);
      setDeleteConfirm(null);
    } else {
      setDeleteConfirm(id);
      setTimeout(() => setDeleteConfirm(null), 3000);
    }
  };

  return (
    <main style={{ padding: '24px 16px 100px', maxWidth: 560, margin: '0 auto', animation: 'fadeUp 0.4s ease both' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.8rem', color: '#e8e4da', margin: 0 }}>Journal</h1>
        <button
          onClick={() => setShowModal(true)}
          style={{
            background: '#e8e4da', border: 'none', borderRadius: 100,
            padding: '9px 18px', fontSize: '0.82rem', fontWeight: 700,
            color: '#0c1220', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
            transition: 'background 0.2s, transform 0.2s cubic-bezier(0.34,1.56,0.64,1)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#d4a843'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#e8e4da'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          + Log
        </button>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <select
            value={filters.substanceId}
            onChange={e => setFilters(f => ({ ...f, substanceId: e.target.value }))}
            style={input}
            aria-label="Filter by substance"
          >
            <option value="">All substances</option>
            {substances.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          <select
            value={filters.route}
            onChange={e => setFilters(f => ({ ...f, route: e.target.value }))}
            style={input}
            aria-label="Filter by route"
          >
            {ROUTES.map(r => <option key={r} value={r}>{r === 'all' ? 'All routes' : r}</option>)}
          </select>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <input
            type="date"
            value={filters.since}
            onChange={e => setFilters(f => ({ ...f, since: e.target.value }))}
            style={{ ...input, colorScheme: 'dark' }}
            aria-label="From date"
          />
          <input
            type="date"
            value={filters.until}
            onChange={e => setFilters(f => ({ ...f, until: e.target.value }))}
            style={{ ...input, colorScheme: 'dark' }}
            aria-label="Until date"
          />
        </div>
        {Object.values(filters).some(v => v && v !== 'all') && (
          <button
            onClick={() => setFilters({ substanceId: '', route: 'all', since: '', until: '' })}
            style={{ background: 'none', border: 'none', color: '#4e9cd7', fontSize: '0.78rem', cursor: 'pointer', textAlign: 'left', padding: 0 }}
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Count */}
      <div style={{ fontSize: '0.72rem', color: '#8a9e90', marginBottom: 14 }}>
        {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
      </div>

      {/* Entries */}
      {entries.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '48px 20px',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: 14, border: '1px dashed rgba(78,156,215,0.15)',
          color: '#8a9e90', fontSize: '0.88rem',
        }}>
          {Object.values(filters).some(v => v && v !== 'all')
            ? 'No entries match these filters.'
            : 'No entries yet. Log your first dose.'}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {entries.map(entry => (
            <div key={entry.id} style={{ position: 'relative' }}>
              <LogEntry
                entry={entry}
                onDelete={handleDelete}
              />
              {deleteConfirm === entry.id && (
                <div role="alert" style={{
                  position: 'absolute', right: 0, top: -36,
                  background: '#e74c3c', color: '#fff',
                  fontSize: '0.72rem', borderRadius: 6, padding: '4px 10px',
                  whiteSpace: 'nowrap',
                }}>
                  Tap × again to confirm delete
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <AddEntryModal onAdd={addEntry} onClose={() => setShowModal(false)} />
      )}
    </main>
  );
}
