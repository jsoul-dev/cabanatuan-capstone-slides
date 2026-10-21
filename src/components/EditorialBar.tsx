export default function EditorialBar({
  category,
  page,
  light = false,
}: {
  category?: string;
  page?: string | number;
  light?: boolean;
}) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 'clamp(8px, 1.2vh, 14px)',
        marginBottom: 'clamp(14px, 2vh, 24px)',
        borderBottom: light
          ? '1px solid rgba(0, 0, 0, 0.08)'
          : '1px solid rgba(255, 255, 255, 0.08)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(11px, 0.95vw, 12.5px)',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: light ? 'rgba(0, 0, 0, 0.5)' : 'var(--fg-faint)',
        userSelect: 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ color: 'var(--primary)', fontSize: 13 }}>✦</span>
        <span
          style={{
            fontWeight: 600,
            color: light ? '#010204' : 'var(--fg)',
            letterSpacing: '0.18em',
          }}
        >
          SCENTALA
        </span>
      </div>
      {category && (
        <div
          style={{
            color: light ? 'rgba(0, 0, 0, 0.7)' : 'var(--fg-muted)',
            fontWeight: 500,
            letterSpacing: '0.1em',
          }}
        >
          {category}
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span>{page ? page : 'PITCH DECK 2026'}</span>
      </div>
    </div>
  );
}
