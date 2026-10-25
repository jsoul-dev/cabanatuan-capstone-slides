import { useEffect, useState } from 'react';

interface PrincipleData {
  principle: string;
  experts: number;
  users: number;
  description: string;
}

export const WCAG_DATA: PrincipleData[] = [
  {
    principle: 'Perceivable',
    experts: 4.13,
    users: 4.45,
    description: 'High-contrast typography (WCAG 2.2 AA) and legible ordinance document rendering.',
  },
  {
    principle: 'Operable',
    experts: 4.27,
    users: 4.43,
    description: 'Full keyboard navigability, clear focus rings, and streamlined reporting interactions.',
  },
  {
    principle: 'Understandable',
    experts: 4.34,
    users: 4.32,
    description: 'Bilingual language support (Tagalog & English) with intuitive navigation hierarchy.',
  },
  {
    principle: 'Robust',
    experts: 4.03,
    users: 3.85,
    description: 'Cross-browser stability; highlighted need for enhanced ARIA screen-reader live regions.',
  },
];

export default function WcagComparisonChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(320px, 1.3fr) minmax(280px, 0.9fr)',
        gap: 'clamp(20px, 3vw, 40px)',
        alignItems: 'center',
        width: '100%',
        maxWidth: 1120,
        marginInline: 'auto',
      }}
    >
      {/* Grouped Comparison Chart */}
      <div
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(6, 9, 7, 0.7) 100%)',
          border: '1px solid var(--hair-2)',
          borderRadius: 'var(--radius)',
          padding: 'clamp(18px, 2.5vh, 28px)',
          boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--fg-muted)' }}>
            WCAG 2.2 Principles
          </span>
          {/* Legend */}
          <div style={{ display: 'flex', gap: '14px', fontSize: '12px', fontWeight: 600 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#10b981' }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: '#10b981' }} />
              IT Experts (N=10)
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#f59e0b' }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: '#f59e0b' }} />
              End-Users (N=100)
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {WCAG_DATA.map((d, idx) => {
            const expPct = ((d.experts - 1) / 4) * 100;
            const usrPct = ((d.users - 1) / 4) * 100;

            return (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 700, color: 'var(--fg)' }}>{d.principle}</span>
                  <div style={{ display: 'flex', gap: '12px', fontFeatureSettings: '"tnum" 1', fontWeight: 700, fontSize: '13px' }}>
                    <span style={{ color: '#10b981' }}>{d.experts.toFixed(2)}</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
                    <span style={{ color: '#f59e0b' }}>{d.users.toFixed(2)}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {/* IT Experts Bar */}
                  <div style={{ height: 7, background: 'rgba(255, 255, 255, 0.06)', borderRadius: 999, overflow: 'hidden' }}>
                    <div
                      style={{
                        height: '100%',
                        width: mounted ? `${expPct}%` : '0%',
                        background: 'linear-gradient(90deg, #059669 0%, #10b981 100%)',
                        borderRadius: 999,
                        transition: `width 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 60}ms`,
                      }}
                    />
                  </div>
                  {/* End Users Bar */}
                  <div style={{ height: 7, background: 'rgba(255, 255, 255, 0.06)', borderRadius: 999, overflow: 'hidden' }}>
                    <div
                      style={{
                        height: '100%',
                        width: mounted ? `${usrPct}%` : '0%',
                        background: 'linear-gradient(90deg, #d97706 0%, #f59e0b 100%)',
                        borderRadius: 999,
                        transition: `width 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 60 + 40}ms`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Synthesis Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
          }}
        >
          <div
            style={{
              padding: '16px',
              borderRadius: 'var(--radius)',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700 }}>
              IT Experts Overall
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', margin: '4px 0' }}>
              4.19
            </div>
            <div style={{ fontSize: '11px', color: '#34d399', fontWeight: 600 }}>
              "Accessible"
            </div>
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: 'var(--radius)',
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 700 }}>
              End-Users Overall
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', margin: '4px 0' }}>
              4.26
            </div>
            <div style={{ fontSize: '11px', color: '#fbbf24', fontWeight: 600 }}>
              "Highly Accessible"
            </div>
          </div>
        </div>

        {/* Qualitative Nuance */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--hair-2)',
            borderRadius: 'var(--radius)',
            padding: '16px 18px',
            textAlign: 'left',
          }}
        >
          <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--fg)', marginBottom: '8px', textAlign: 'left' }}>
            Empirical Findings:
          </div>
          <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '12px', color: 'var(--fg-muted)', lineHeight: 1.55, textAlign: 'left' }}>
            <li style={{ textAlign: 'left', marginBottom: '6px' }}>
              <strong>Perceivable & Operable:</strong> End-users awarded highest scores (4.45 & 4.43), praising visual clarity, legible PDF viewers, and mobile responsiveness.
            </li>
            <li style={{ textAlign: 'left' }}>
              <strong>Robust (3.85):</strong> Screen reader compatibility (NVDA, JAWS) and dynamic ARIA live status announcements identified as key opportunities for next-stage engineering.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
