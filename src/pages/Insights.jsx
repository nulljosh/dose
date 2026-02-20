import { useDoseLog } from '../hooks/useDoseLog';
import { useSubstances } from '../hooks/useSubstances';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const HOURS = Array.from({ length: 24 }, (_, i) => i);

function buildHeatmap(entries) {
  const grid = {};
  entries.forEach(e => {
    const d = new Date(e.timestamp);
    const key = `${d.getDay()}-${d.getHours()}`;
    grid[key] = (grid[key] || 0) + 1;
  });
  return grid;
}

export default function Insights() {
  const { getEntries } = useDoseLog();
  const { getById } = useSubstances();

  // Last 30 days
  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const entries = getEntries({ since });
  const heatmap = buildHeatmap(entries);
  const maxVal = Math.max(...Object.values(heatmap), 1);

  // Most used substances
  const freq = {};
  entries.forEach(e => { freq[e.substanceId] = (freq[e.substanceId] || 0) + 1; });
  const topSubs = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 5);

  const hasData = entries.length > 0;

  return (
    <main style={{ padding: '24px 16px 100px', maxWidth: 560, margin: '0 auto', animation: 'fadeUp 0.4s ease both' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.8rem', color: '#e8e4da', margin: 0 }}>Insights</h1>
        <span style={{
          fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: '#d4a843',
          background: 'rgba(212,168,67,0.12)', padding: '2px 8px', borderRadius: 100,
          border: '1px solid rgba(212,168,67,0.25)',
        }}>v2 coming</span>
      </div>
      <p style={{ color: '#8a9e90', fontSize: '0.85rem', margin: '0 0 28px' }}>
        Pattern analysis — last 30 days
      </p>

      {!hasData ? (
        <div style={{
          textAlign: 'center', padding: '60px 20px',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: 14, border: '1px dashed rgba(78,156,215,0.15)',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>📊</div>
          <div style={{ color: '#e8e4da', fontFamily: "'Fraunces', serif", fontSize: '1.1rem', marginBottom: 8 }}>No data yet</div>
          <div style={{ color: '#8a9e90', fontSize: '0.85rem' }}>Log some doses to see patterns here.</div>
        </div>
      ) : (
        <>
          {/* Usage heatmap */}
          <section style={{ marginBottom: 32 }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a9e90', marginBottom: 12 }}>
              Usage Heatmap — by day &amp; hour
            </div>
            <div style={{ overflowX: 'auto', paddingBottom: 4 }}>
              <div style={{ display: 'grid', gridTemplateColumns: `auto repeat(24, 1fr)`, gap: 2, minWidth: 500 }}>
                {/* Header row */}
                <div />
                {HOURS.map(h => (
                  <div key={h} style={{ fontSize: '0.55rem', color: '#8a9e90', textAlign: 'center', paddingBottom: 4 }}>
                    {h % 6 === 0 ? h : ''}
                  </div>
                ))}
                {/* Data rows */}
                {DAYS.map((day, dayIdx) => (
                  <>
                    <div key={`label-${dayIdx}`} style={{ fontSize: '0.6rem', color: '#8a9e90', display: 'flex', alignItems: 'center', paddingRight: 6 }}>
                      {day}
                    </div>
                    {HOURS.map(h => {
                      const val = heatmap[`${dayIdx}-${h}`] || 0;
                      const intensity = val / maxVal;
                      return (
                        <div
                          key={`${dayIdx}-${h}`}
                          title={val > 0 ? `${day} ${h}:00 — ${val} dose${val !== 1 ? 's' : ''}` : undefined}
                          style={{
                            height: 14, borderRadius: 2,
                            background: val === 0
                              ? 'rgba(255,255,255,0.04)'
                              : `rgba(78,156,215,${0.15 + intensity * 0.75})`,
                            transition: 'background 0.2s',
                          }}
                        />
                      );
                    })}
                  </>
                ))}
              </div>
            </div>
          </section>

          {/* Top substances */}
          {topSubs.length > 0 && (
            <section style={{ marginBottom: 28 }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a9e90', marginBottom: 12 }}>
                Most Used — last 30 days
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {topSubs.map(([id, count]) => {
                  const sub = getById(id);
                  const name = sub?.name || id;
                  const pct = (count / entries.length) * 100;
                  return (
                    <div key={id} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 90, fontSize: '0.83rem', color: '#e8e4da', fontFamily: "'Fraunces', serif", flexShrink: 0 }}>
                        {name}
                      </div>
                      <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 100 }}>
                        <div style={{ width: `${pct}%`, height: '100%', background: '#4e9cd7', borderRadius: 100, transition: 'width 0.5s ease' }} />
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#8a9e90', width: 28, textAlign: 'right', flexShrink: 0 }}>
                        {count}×
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Summary */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { label: 'Total doses', value: entries.length },
              { label: 'Unique substances', value: Object.keys(freq).length },
              { label: 'Avg doses/day', value: (entries.length / 30).toFixed(1) },
              { label: 'Most active day', value: (() => {
                const dayCounts = {};
                entries.forEach(e => {
                  const d = DAYS[new Date(e.timestamp).getDay()];
                  dayCounts[d] = (dayCounts[d] || 0) + 1;
                });
                return Object.entries(dayCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || '—';
              })() },
            ].map(({ label, value }) => (
              <div key={label} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(78,156,215,0.1)',
                borderRadius: 12, padding: '14px 16px',
              }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8a9e90', marginBottom: 4 }}>
                  {label}
                </div>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '1.5rem', fontWeight: 700, color: '#e8e4da' }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div style={{ marginTop: 28, padding: '14px 16px', background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.18)', borderRadius: 10 }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#d4a843', marginBottom: 6 }}>
          Planned for v2
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
          {['Tolerance tracking & washout periods', 'Mood/sleep correlation analysis', 'Interaction warning detection', 'Export to CSV'].map((item, i) => (
            <li key={i} style={{ fontSize: '0.82rem', color: '#8a9e90', display: 'flex', gap: 8 }}>
              <span style={{ color: '#d4a843' }}>·</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
