export default function RecommendationsTimeline() {
  const tracks = [
    {
      title: '1. Technical & System Resilience Hardening',
      tag: 'Software Engineering',
      tagColor: '#10b981',
      items: [
        'Automated database backup routines & disaster recovery scripts (targeting the 3.20 Recoverability rating).',
        'Dedicated administrative audit logging and system health diagnostics telemetry.',
        'Deep screen reader optimization (NVDA, JAWS) with ARIA live regions and high-contrast SVG alternatives.',
        'Docker containerization for standardized municipal multi-environment deployment.',
      ],
    },
    {
      title: '2. Phased Municipal & Barangay Operational Rollout',
      tag: 'Local Governance',
      tagColor: '#f59e0b',
      items: [
        'Initial pilot rollout in 2 to 3 barangays before full city-wide expansion across all 89 barangays.',
        'Structured capacity training for barangay captains and legislative staff on OCR ingestion & triage.',
        'Designation of dedicated municipal content managers to verify and archive newly enacted ordinances.',
        'Public civic education campaign across schools and communities highlighting the 24/7 AI portal.',
      ],
    },
    {
      title: '3. Future Research & Longitudinal Investigation',
      tag: 'Academic Agenda',
      tagColor: '#38bdf8',
      items: [
        'Longitudinal field study measuring real-world compliance changes and citizen satisfaction over 12+ months.',
        'Replication across other Philippine Local Government Units (municipalities & provinces).',
        'Empirical evaluation of multilingual LLM retrieval accuracy across regional dialects (Tagalog, Ilokano).',
      ],
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
        gap: 'clamp(16px, 2.5vw, 24px)',
        width: '100%',
        maxWidth: 1160,
        marginInline: 'auto',
      }}
    >
      {tracks.map((track, idx) => (
        <div
          key={idx}
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(6, 9, 7, 0.7) 100%)',
            border: '1px solid var(--hair-2)',
            borderRadius: 'var(--radius)',
            padding: '22px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 45px -15px rgba(0, 0, 0, 0.7)',
            position: 'relative',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                padding: '3px 8px',
                borderRadius: '6px',
                background: `${track.tagColor}18`,
                border: `1px solid ${track.tagColor}40`,
                color: track.tagColor,
              }}
            >
              {track.tag}
            </span>
            <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--fg-faint)' }}>
              Track 0{idx + 1}
            </span>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: '0 0 14px 0', lineHeight: 1.3 }}>
            {track.title}
          </h3>

          <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--fg-muted)', lineHeight: 1.45 }}>
            {track.items.map((item, iIdx) => (
              <li key={iIdx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
