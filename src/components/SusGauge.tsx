import { useEffect, useState } from 'react';
import CountUp from './CountUp';

interface SusGaugeProps {
  score?: number;
  benchmark?: number;
}

export default function SusGauge({ score = 75.13, benchmark = 68.0 }: SusGaugeProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(score / 100);
    }, 200);
    return () => clearTimeout(timer);
  }, [score]);

  // Circumference calculation for 180-degree semi-circle gauge
  const radius = 90;
  const arcLength = Math.PI * radius; // Half circumference
  const strokeDashoffset = arcLength * (1 - animatedProgress);
  const benchmarkOffset = arcLength * (1 - benchmark / 100);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(280px, 1.1fr) minmax(320px, 1.3fr)',
        gap: 'clamp(24px, 4vw, 48px)',
        alignItems: 'center',
        width: '100%',
        maxWidth: 1080,
        marginInline: 'auto',
      }}
    >
      {/* Gauge Visualization */}
      <div
        style={{
          background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, rgba(6, 9, 7, 0.6) 100%)',
          border: '1px solid var(--hair-2)',
          borderRadius: 'var(--radius)',
          padding: 'clamp(20px, 3vh, 32px)',
          textAlign: 'center',
          boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8)',
          position: 'relative',
        }}
      >
        <div style={{ position: 'relative', width: 240, height: 140, margin: '0 auto' }}>
          <svg width="240" height="140" viewBox="0 0 240 140" style={{ overflow: 'visible' }} role="img" aria-label={`System Usability Scale score of ${score} out of 100`}>
            {/* Background Arc */}
            <path
              d="M 30 130 A 90 90 0 0 1 210 130"
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="20"
              strokeLinecap="round"
            />

            {/* Benchmark Marker (68.0) */}
            <path
              d="M 30 130 A 90 90 0 0 1 210 130"
              fill="none"
              stroke="rgba(245, 158, 11, 0.4)"
              strokeWidth="20"
              strokeDasharray={arcLength}
              strokeDashoffset={benchmarkOffset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1s ease' }}
            />

            {/* Score Active Arc */}
            <path
              d="M 30 130 A 90 90 0 0 1 210 130"
              fill="none"
              stroke="url(#susGradient)"
              strokeWidth="20"
              strokeDasharray={arcLength}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
            />

            <defs>
              <linearGradient id="susGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="60%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
          </svg>

          {/* Centered Score Figure */}
          <div
            style={{
              position: 'absolute',
              bottom: 4,
              left: 0,
              right: 0,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(38px, 4vw, 48px)',
                fontWeight: 800,
                color: '#f8fafc',
                lineHeight: 1,
                fontFeatureSettings: '"tnum" 1',
              }}
            >
              <CountUp to={score} decimals={2} duration={1.2} />
            </div>
            <div
              style={{
                fontSize: '12px',
                color: 'var(--fg-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600,
                marginTop: '4px',
              }}
            >
              out of 100.00
            </div>
          </div>
        </div>

        {/* Badges */}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              color: '#34d399',
              fontSize: '13px',
              fontWeight: 700,
            }}
          >
            <span>✓</span> "Good" / Acceptable
          </span>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              color: 'var(--accent-gold)',
              fontSize: '13px',
              fontWeight: 700,
            }}
          >
            +7.13 Above Benchmark (68.0)
          </span>
        </div>
      </div>

      {/* Item-Level Highlights */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div
          style={{
            padding: '16px 20px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--hair-2)',
            borderRadius: 'var(--radius)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--fg)' }}>
              1. Willingness to Use Frequently
            </span>
            <span style={{ fontSize: '17px', fontWeight: 800, color: '#10b981' }}>4.30 / 5</span>
          </div>
          <p style={{ margin: '6px 0 0 0', fontSize: '13px', color: 'var(--fg-muted)', lineHeight: 1.4 }}>
            Highest individual item score; indicates genuine civic demand for digital ordinance access over hall visits.
          </p>
        </div>

        <div
          style={{
            padding: '16px 20px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--hair-2)',
            borderRadius: 'var(--radius)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--fg)' }}>
              2. System Functions Well Integrated
            </span>
            <span style={{ fontSize: '17px', fontWeight: 800, color: '#10b981' }}>4.27 / 5</span>
          </div>
          <p style={{ margin: '6px 0 0 0', fontSize: '13px', color: 'var(--fg-muted)', lineHeight: 1.4 }}>
            Cohesive transition between legislative browsing, bilingual AI Q&A, and community reporting.
          </p>
        </div>

        <div
          style={{
            padding: '16px 20px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--hair-2)',
            borderRadius: 'var(--radius)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--fg)' }}>
              3. Ease of Learning
            </span>
            <span style={{ fontSize: '17px', fontWeight: 800, color: '#10b981' }}>4.23 / 5</span>
          </div>
          <p style={{ margin: '6px 0 0 0', fontSize: '13px', color: 'var(--fg-muted)', lineHeight: 1.4 }}>
            Residents and barangay staff quickly mastered features without extensive formal technical training.
          </p>
        </div>
      </div>
    </div>
  );
}
