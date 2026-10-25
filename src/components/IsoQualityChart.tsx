import { useEffect, useState } from 'react';

interface IsoMetric {
  name: string;
  score: number;
  label: string;
}

export const ISO_METRICS: IsoMetric[] = [
  { name: 'Compatibility', score: 4.55, label: 'Highly Compatible' },
  { name: 'Functional Suitability', score: 4.50, label: 'Highly Suitable' },
  { name: 'Performance Efficiency', score: 4.40, label: 'Highly Efficient' },
  { name: 'Maintainability', score: 4.30, label: 'Highly Maintainable' },
  { name: 'Interaction Capability', score: 4.24, label: 'Highly Capable' },
  { name: 'Security', score: 4.17, label: 'Secure' },
  { name: 'Safety', score: 4.17, label: 'Safe' },
  { name: 'Reliability', score: 4.10, label: 'Reliable' },
  { name: 'Flexibility', score: 4.07, label: 'Flexible' },
];

export default function IsoQualityChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(320px, 1.4fr) minmax(260px, 0.8fr)',
        gap: 'clamp(20px, 3vw, 36px)',
        alignItems: 'center',
        width: '100%',
        maxWidth: 1140,
        marginInline: 'auto',
      }}
    >
      {/* 9 Quality Characteristics Bars */}
      <div
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(6, 9, 7, 0.7) 100%)',
          border: '1px solid var(--hair-2)',
          borderRadius: 'var(--radius)',
          padding: 'clamp(18px, 2.5vh, 26px)',
          boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--fg-muted)' }}>
            ISO/IEC 25010:2023 Characteristic
          </span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary)' }}>
            Expert Mean (N=10)
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {ISO_METRICS.map((m, idx) => {
            const pct = ((m.score - 1) / 4) * 100; // Normalized 1-5 scale
            return (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                  <span style={{ fontWeight: 600, color: 'var(--fg)' }}>{m.name}</span>
                  <span style={{ fontWeight: 700, color: m.score >= 4.4 ? '#34d399' : 'var(--fg)', fontFeatureSettings: '"tnum" 1' }}>
                    {m.score.toFixed(2)}
                  </span>
                </div>
                <div
                  style={{
                    height: 8,
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: 999,
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: mounted ? `${pct}%` : '0%',
                      background: idx < 3
                        ? 'linear-gradient(90deg, #059669 0%, #10b981 100%)'
                        : 'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
                      borderRadius: 999,
                      transition: `width 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 60}ms`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Stat & Hardening Targets */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Overall Score Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.05) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            borderRadius: 'var(--radius)',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)', fontWeight: 700 }}>
            Overall Software Quality
          </div>
          <div style={{ fontSize: ' clamp(40px, 4vw, 54px)', fontWeight: 800, color: '#f8fafc', margin: '4px 0', lineHeight: 1 }}>
            4.28
          </div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#34d399' }}>
            Overall mean 4.28 (Highly Suitable/Efficient)
          </div>
        </div>

        {/* Lower Indicators (Basis for Recommendations) */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--hair-2)',
            borderRadius: 'var(--radius)',
            padding: '18px',
          }}
        >
          <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-gold)', marginBottom: '8px' }}>
            Target Areas for Hardening
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--fg-muted)' }}>
              <span>• Recoverability (Fault recovery)</span>
              <span style={{ fontWeight: 700, color: '#f8fafc' }}>3.20</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--fg-muted)' }}>
              <span>• Audit Logging</span>
              <span style={{ fontWeight: 700, color: '#f8fafc' }}>3.60</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--fg-muted)' }}>
              <span>• System Diagnostics</span>
              <span style={{ fontWeight: 700, color: '#f8fafc' }}>3.70</span>
            </div>
          </div>
          <div style={{ marginTop: '10px', fontSize: '11px', color: 'var(--fg-faint)', lineHeight: 1.4 }}>
            Directly targeted in Slide 19 recommendations through automated database WAL snapshotting and centralized system telemetry.
          </div>
        </div>
      </div>
    </div>
  );
}
