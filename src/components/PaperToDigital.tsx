interface PaperToDigitalProps {
  showDigital?: boolean;
}

export default function PaperToDigital({ showDigital = true }: PaperToDigitalProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
        gap: 'clamp(20px, 3vw, 36px)',
        width: '100%',
        maxWidth: 1140,
        marginInline: 'auto',
        textAlign: 'left',
      }}
    >
      {/* Traditional Physical Workflow (Problem) */}
      <div
        style={{
          background: 'linear-gradient(180deg, rgba(239, 68, 68, 0.06) 0%, rgba(15, 10, 10, 0.7) 100%)',
          border: '1px solid rgba(239, 68, 68, 0.22)',
          borderRadius: 'var(--radius)',
          padding: 'clamp(20px, 3vh, 30px)',
          boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.8)',
          position: 'relative',
          textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', textAlign: 'left' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: '8px',
              background: 'rgba(239, 68, 68, 0.15)',
              color: '#ef4444',
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ef4444', fontWeight: 700 }}>
              Status Quo Vulnerability
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', margin: 0, textAlign: 'left' }}>
              Physical Paper Archive Bottlenecks
            </h3>
          </div>
        </div>

        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', lineHeight: 1.5, textAlign: 'left', color: 'var(--fg-muted)' }}>
            <span style={{ color: '#ef4444', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>✕</span>
            <span style={{ textAlign: 'left' }}><strong>Physical Damage & Loss:</strong> Paper documents suffer ink fading, moisture damage, tears, and accidental misfiling in filing cabinets.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', lineHeight: 1.5, textAlign: 'left', color: 'var(--fg-muted)' }}>
            <span style={{ color: '#ef4444', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>✕</span>
            <span style={{ textAlign: 'left' }}><strong>Laborious Manual Search:</strong> Finding specific legislative clauses requires staff to manually flip through thick binders or storage boxes.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', lineHeight: 1.5, textAlign: 'left', color: 'var(--fg-muted)' }}>
            <span style={{ color: '#ef4444', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>✕</span>
            <span style={{ textAlign: 'left' }}><strong>Restricted Physical Access:</strong> Citizens must travel to the barangay hall or City Hall strictly during municipal business hours.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', lineHeight: 1.5, textAlign: 'left', color: 'var(--fg-muted)' }}>
            <span style={{ color: '#ef4444', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>✕</span>
            <span style={{ textAlign: 'left' }}><strong>Moderate Compliance (Batacandolo et al., 2024):</strong> Limited citizen awareness of enacted policies leads to low compliance rates.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', lineHeight: 1.5, textAlign: 'left', color: 'var(--fg-muted)' }}>
            <span style={{ color: '#ef4444', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>✕</span>
            <span style={{ textAlign: 'left' }}><strong>Verbal Incident Reports:</strong> Community complaints submitted by walk-in lack tracking codes, photographic evidence, and accountability.</span>
          </li>
        </ul>
      </div>

      {/* Modern Digital Hub (Solution) */}
      <div
        style={{
          background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.09) 0%, rgba(6, 12, 8, 0.8) 100%)',
          border: '1px solid rgba(16, 185, 129, 0.35)',
          borderRadius: 'var(--radius)',
          padding: 'clamp(20px, 3vh, 30px)',
          boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.8)',
          position: 'relative',
          textAlign: 'left',
          opacity: showDigital ? 1 : 0.4,
          transform: showDigital ? 'translateY(0)' : 'translateY(12px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', textAlign: 'left' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: '8px',
              background: 'rgba(16, 185, 129, 0.2)',
              color: '#10b981',
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)', fontWeight: 700 }}>
              AI-Assisted Municipal Solution
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', margin: 0, textAlign: 'left' }}>
              Centralized Legislative Governance Portal
            </h3>
          </div>
        </div>

        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', lineHeight: 1.5, textAlign: 'left', color: 'var(--fg)' }}>
            <span style={{ color: '#10b981', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>✓</span>
            <span style={{ textAlign: 'left' }}><strong>Immutable Cloud Archiving:</strong> SQLite WAL persistent volume stores digital ordinance copies, searchable text, and verified official PDFs.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', lineHeight: 1.5, textAlign: 'left', color: 'var(--fg)' }}>
            <span style={{ color: '#10b981', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>✓</span>
            <span style={{ textAlign: 'left' }}><strong>Sub-Second Semantic Search:</strong> Real-time filtering by category, year, keyword, and barangay jurisdiction with high-speed indexing.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', lineHeight: 1.5, textAlign: 'left', color: 'var(--fg)' }}>
            <span style={{ color: '#10b981', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>✓</span>
            <span style={{ textAlign: 'left' }}><strong>Civic AI Chatbot Assistant:</strong> Gemini RAG delivers plain-language answers in Tagalog, English, and Taglish with precise legislative citations.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', lineHeight: 1.5, textAlign: 'left', color: 'var(--fg)' }}>
            <span style={{ color: '#10b981', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>✓</span>
            <span style={{ textAlign: 'left' }}><strong>Multimodal OCR Parser:</strong> Slashes manual legislative transcription time by ~85% through automated PDF article extraction.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', lineHeight: 1.5, textAlign: 'left', color: 'var(--fg)' }}>
            <span style={{ color: '#10b981', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>✓</span>
            <span style={{ textAlign: 'left' }}><strong>Structured Citizen Incident Reporting:</strong> Instant local routing to the assigned Barangay Admin dashboard with photo evidence.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
