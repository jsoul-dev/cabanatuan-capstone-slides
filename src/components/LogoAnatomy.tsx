import Reveal from '../deck/Reveal';

export default function LogoAnatomy() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'clamp(16px, 2.5vw, 36px)',
        width: '100%',
        maxWidth: 1060,
        marginInline: 'auto',
      }}
    >
      {/* Stage 1: S + T Letterforms */}
      <Reveal delay={0.08}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: 'clamp(20px, 2.2vw, 28px)',
            background: 'linear-gradient(180deg, rgba(23,103,180,0.12), rgba(4,8,16,0.6))',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--hair-2)',
            height: '100%',
          }}
        >
          {/* Visual Diagram */}
          <div
            style={{
              width: 140,
              height: 140,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              position: 'relative',
            }}
          >
            <svg viewBox="0 0 100 100" width="120" height="120" fill="none">
              {/* Ghosted bottle contour */}
              <rect
                x="25"
                y="35"
                width="50"
                height="55"
                rx="10"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              {/* Highlighted S letterform */}
              <path
                d="M62 42 C50 36, 38 42, 38 52 C38 64, 62 62, 62 74 C62 82, 50 86, 38 80"
                stroke="#FECF43"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Highlighted T stem */}
              <line x1="50" y1="28" x2="50" y2="78" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="36" y1="28" x2="64" y2="28" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          <div
            className="kicker"
            style={{ color: 'var(--primary)', marginBottom: 6, fontSize: 11 }}
          >
            Stage 01 · Typographic Root
          </div>
          <h3
            style={{
              fontSize: 'clamp(20px, 2vw, 24px)',
              color: 'var(--fg)',
              fontFamily: 'var(--font-head)',
              margin: '0 0 10px',
            }}
          >
            “S + T” Letterforms
          </h3>
          <p
            className="foot"
            style={{
              color: 'var(--fg-muted)',
              lineHeight: 1.6,
              fontSize: '0.92em',
              margin: 0,
            }}
          >
            The identity originates from intertwining the initials <strong>S</strong> and <strong>T</strong> from SCENTALA into a single organic silhouette that balances grace and architectural structure.
          </p>
        </div>
      </Reveal>

      {/* Stage 2: Flacon Silhouette & Closure */}
      <Reveal delay={0.16}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: 'clamp(20px, 2.2vw, 28px)',
            background: 'linear-gradient(180deg, rgba(23,103,180,0.18), rgba(4,8,16,0.6))',
            borderRadius: 'var(--radius)',
            border: '1px solid rgba(254, 207, 67, 0.35)',
            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.7)',
            height: '100%',
          }}
        >
          {/* Visual Diagram */}
          <div
            style={{
              width: 140,
              height: 140,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              position: 'relative',
            }}
          >
            <svg viewBox="0 0 100 100" width="120" height="120" fill="none">
              {/* Bottle body formed by S curves */}
              <path
                d="M32 46 C26 56, 26 76, 42 86 C58 92, 70 82, 72 70"
                stroke="#FECF43"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <path
                d="M68 46 C74 56, 74 74, 58 86"
                stroke="rgba(254, 207, 67, 0.45)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="4 3"
              />
              {/* Nozzle and neck formed by T */}
              <rect x="44" y="24" width="12" height="16" rx="2" stroke="#FFFFFF" strokeWidth="2.5" />
              <line x1="38" y1="40" x2="62" y2="40" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          <div
            className="kicker"
            style={{ color: 'var(--primary)', marginBottom: 6, fontSize: 11 }}
          >
            Stage 02 · Gestalt Closure
          </div>
          <h3
            style={{
              fontSize: 'clamp(20px, 2vw, 24px)',
              color: 'var(--fg)',
              fontFamily: 'var(--font-head)',
              margin: '0 0 10px',
            }}
          >
            Flacon Silhouette
          </h3>
          <p
            className="foot"
            style={{
              color: 'var(--fg-muted)',
              lineHeight: 1.6,
              fontSize: '0.92em',
              margin: 0,
            }}
          >
            The sweeping strokes contour the shoulder and body of a perfume flacon. Viewers instinctively bridge the open negative space, perceiving a complete luxury bottle without explicit borders.
          </p>
        </div>
      </Reveal>

      {/* Stage 3: Tala Star & Golden Crown */}
      <Reveal delay={0.24}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: 'clamp(20px, 2.2vw, 28px)',
            background: 'linear-gradient(180deg, rgba(254,207,67,0.12), rgba(4,8,16,0.6))',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--hair-2)',
            height: '100%',
          }}
        >
          {/* Real Transparent Monogram Emblem */}
          <div
            style={{
              width: 140,
              height: 140,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              position: 'relative',
            }}
          >
            <img
              src="/brand/ST-ORIGINAL-LOGO-TRANSPARENT.png"
              alt="SCENTALA Completed Tala Monogram"
              className="shimmer-gold float-3d"
              style={{ maxHeight: '85%', maxWidth: '85%', objectFit: 'contain' }}
            />
          </div>

          <div
            className="kicker"
            style={{ color: 'var(--primary)', marginBottom: 6, fontSize: 11 }}
          >
            Stage 03 · Celestial Zenith
          </div>
          <h3
            style={{
              fontSize: 'clamp(20px, 2vw, 24px)',
              color: 'var(--fg)',
              fontFamily: 'var(--font-head)',
              margin: '0 0 10px',
            }}
          >
            The Tala Star &amp; Crown
          </h3>
          <p
            className="foot"
            style={{
              color: 'var(--fg-muted)',
              lineHeight: 1.6,
              fontSize: '0.92em',
              margin: 0,
            }}
          >
            Crowning the atomizer is the 4-point Tala star—the celestial beacon honoring Filipino heritage and signifying an unforgettable olfactory presence that outshines the rest.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
