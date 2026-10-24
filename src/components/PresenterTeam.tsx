import { useState } from 'react';

export interface PresenterMember {
  name: string;
  role: string;
  photo?: string;
  fallbackPhoto?: string;
  initials: string;
  subtext?: string;
}

export const DEFAULT_PRESENTERS: PresenterMember[] = [
  {
    name: 'Manny N. Agulto',
    role: 'Presenter',
    photo: '/team/agulto.jpg',
    fallbackPhoto: '/team/agulto.jpeg',
    initials: 'MA',
    subtext: 'BSIT — Web Systems Technology',
  },
  {
    name: 'Reyven B. Calara',
    role: 'Presenter',
    photo: '/team/calara.jpg',
    fallbackPhoto: '',
    initials: 'RC',
    subtext: 'BSIT — Web Systems Technology',
  },
  {
    name: 'Chris Karl M. Lacanilao',
    role: 'Presenter',
    photo: '/team/lacanilao.jpg',
    fallbackPhoto: '',
    initials: 'CL',
    subtext: 'BSIT — Web Systems Technology',
  },
  {
    name: 'John Carlo DG. Lemence',
    role: 'Presenter',
    photo: '/team/lemence.jpg',
    fallbackPhoto: '/team/lemence.png',
    initials: 'JL',
    subtext: 'BSIT — Web Systems Technology',
  },
];

interface PresenterTeamProps {
  presenters?: PresenterMember[];
  showAdvisers?: boolean;
}

export default function PresenterTeam({
  presenters = DEFAULT_PRESENTERS,
  showAdvisers = true,
}: PresenterTeamProps) {
  return (
    <div style={{ width: '100%', maxWidth: 1180, marginInline: 'auto' }}>
      {/* 4 Presenters Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
          gap: 'clamp(16px, 2vw, 24px)',
          marginBottom: showAdvisers ? 'clamp(24px, 3vh, 36px)' : 0,
        }}
      >
        {presenters.map((p, idx) => (
          <PresenterCard key={idx} presenter={p} index={idx} />
        ))}
      </div>

      {/* Advisers & Academic Leadership Strip */}
      {showAdvisers && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: '16px',
            padding: '16px 24px',
            background: 'rgba(255, 255, 255, 0.025)',
            border: '1px solid var(--hair-2)',
            borderRadius: 'var(--radius)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                fontWeight: 700,
                fontSize: '15px',
                flexShrink: 0,
              }}
            >
              CO
            </div>
            <div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-gold)', fontWeight: 600 }}>
                Capstone Adviser & Research Editor
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--fg)', marginTop: '2px' }}>
                Cris Norman P. Olipas, EdD
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold)',
                fontWeight: 700,
                fontSize: '15px',
                flexShrink: 0,
              }}
            >
              AC
            </div>
            <div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)', fontWeight: 600 }}>
                Faculty-in-Charge (FIC)
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--fg)', marginTop: '2px' }}>
                Alexander S. Cochanco
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PresenterCard({ presenter, index }: { presenter: PresenterMember; index: number }) {
  const [imgError, setImgError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(presenter.photo || presenter.fallbackPhoto || '');

  const handleError = () => {
    if (currentSrc === presenter.photo && presenter.fallbackPhoto) {
      setCurrentSrc(presenter.fallbackPhoto);
    } else {
      setImgError(true);
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
        border: '1px solid var(--hair-2)',
        borderRadius: 'var(--radius)',
        padding: '20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Decorative subtle corner accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 48,
          height: 48,
          background: 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.15), transparent 70%)',
        }}
      />

      {/* Photo Frame or Initials Avatar */}
      <div
        style={{
          width: 'clamp(90px, 10vw, 116px)',
          height: 'clamp(90px, 10vw, 116px)',
          borderRadius: '50%',
          marginBottom: '16px',
          position: 'relative',
          padding: '3px',
          background: index % 2 === 0
            ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(245, 158, 11, 0.3))'
            : 'linear-gradient(135deg, rgba(245, 158, 11, 0.8), rgba(16, 185, 129, 0.3))',
          boxShadow: '0 8px 24px -6px rgba(0,0,0,0.6)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            background: '#0d1510',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {!imgError && currentSrc ? (
            <img
              src={currentSrc}
              alt={presenter.name}
              onError={handleError}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(5, 150, 105, 0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 800,
                letterSpacing: '0.04em',
              }}
            >
              {presenter.initials}
            </div>
          )}
        </div>
      </div>

      {/* Name */}
      <h3
        style={{
          fontSize: 'clamp(16px, 1.3vw, 19px)',
          fontWeight: 700,
          color: 'var(--fg)',
          margin: '0 0 6px 0',
          lineHeight: 1.25,
        }}
      >
        {presenter.name}
      </h3>

      {/* Role Pill */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 12px',
          borderRadius: '999px',
          background: 'rgba(16, 185, 129, 0.12)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          color: 'var(--primary)',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          marginBottom: '6px',
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: 'var(--primary)',
          }}
        />
        {presenter.role}
      </div>

      {presenter.subtext && (
        <span style={{ fontSize: '12px', color: 'var(--fg-muted)', marginTop: '2px' }}>
          {presenter.subtext}
        </span>
      )}
    </div>
  );
}
