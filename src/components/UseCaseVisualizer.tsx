import React, { useState } from 'react';
import BrowserFrame from './BrowserFrame';

export type ActorRole = 'ALL' | 'CITIZEN' | 'BARANGAY_ADMIN' | 'LGU_ADMIN' | 'GEMINI_AI';

export interface UseCaseVisualizerProps {
  activeRole?: ActorRole;
  onSelectRole?: (role: ActorRole) => void;
}

interface ActorDef {
  id: ActorRole;
  name: string;
  roleTag: string;
  sub: string;
  color: string;
  x: number;
  y: number;
  w: number;
  h: number;
  connX: number;
  connY: number;
  useCases: string[];
}

interface UseCaseDef {
  id: string;
  label: string;
  category: 'public' | 'admin' | 'governance' | 'ai';
  y: number;
  actors: ActorRole[];
  note: string;
}

const ACTORS: ActorDef[] = [
  {
    id: 'CITIZEN',
    name: 'Resident / Citizen',
    roleTag: 'CITIZEN',
    sub: 'Public (Zero Auth)',
    color: '#10b981', // emerald
    x: 12,
    y: 38,
    w: 124,
    h: 54,
    connX: 136,
    connY: 65,
    useCases: ['browse', 'query_ai', 'submit_report'],
  },
  {
    id: 'BARANGAY_ADMIN',
    name: 'Barangay Official',
    roleTag: 'BARANGAY_ADMIN',
    sub: 'Brgy-Scoped Auth',
    color: '#f59e0b', // amber
    x: 12,
    y: 164,
    w: 124,
    h: 54,
    connX: 136,
    connY: 191,
    useCases: ['manage_reports', 'manage_ordinances', 'monitor_analytics', 'auth'],
  },
  {
    id: 'LGU_ADMIN',
    name: 'City LGU Admin',
    roleTag: 'LGU_ADMIN',
    sub: 'Sovereign Governance',
    color: '#38bdf8', // sky
    x: 12,
    y: 290,
    w: 124,
    h: 54,
    connX: 136,
    connY: 317,
    useCases: ['manage_ordinances', 'monitor_analytics', 'manage_accounts', 'auth'],
  },
  {
    id: 'GEMINI_AI',
    name: 'External AI Service',
    roleTag: 'GEMINI 1.5 FLASH',
    sub: 'Multimodal RAG & OCR',
    color: '#c084fc', // purple
    x: 438,
    y: 60,
    w: 130,
    h: 56,
    connX: 438,
    connY: 88,
    useCases: ['query_ai'],
  },
];

const USE_CASES: UseCaseDef[] = [
  {
    id: 'browse',
    label: 'Browse Ordinances',
    category: 'public',
    y: 34,
    actors: ['CITIZEN'],
    note: 'Keyword search, category filtering & PDF statutory viewer',
  },
  {
    id: 'query_ai',
    label: 'Query AI Chatbot',
    category: 'ai',
    y: 74,
    actors: ['CITIZEN', 'GEMINI_AI'],
    note: 'Natural language bilingual RAG with strict legal citations',
  },
  {
    id: 'submit_report',
    label: 'Submit Community Reports',
    category: 'public',
    y: 114,
    actors: ['CITIZEN'],
    note: 'Citizen incident filing with photo proof & optional anonymity',
  },
  {
    id: 'manage_reports',
    label: 'Manage Community Reports',
    category: 'admin',
    y: 154,
    actors: ['BARANGAY_ADMIN'],
    note: 'Triage, status workflow & localized incident resolution',
  },
  {
    id: 'manage_ordinances',
    label: 'Manage Ordinances',
    category: 'admin',
    y: 194,
    actors: ['BARANGAY_ADMIN', 'LGU_ADMIN'],
    note: 'Brgy draft submission & LGU enactment/publishing workflow',
  },
  {
    id: 'monitor_analytics',
    label: 'Monitor Analytics',
    category: 'governance',
    y: 234,
    actors: ['BARANGAY_ADMIN', 'LGU_ADMIN'],
    note: 'Barangay operational metrics & city-wide governance reports',
  },
  {
    id: 'manage_accounts',
    label: 'Manage System Accounts',
    category: 'governance',
    y: 274,
    actors: ['LGU_ADMIN'],
    note: 'RBAC user provisioning across all 89 barangays',
  },
  {
    id: 'auth',
    label: 'Authenticate Account',
    category: 'admin',
    y: 314,
    actors: ['BARANGAY_ADMIN', 'LGU_ADMIN'],
    note: 'Secure credential verification & role-scoped session token',
  },
];

export default function UseCaseVisualizer({
  activeRole: externalActiveRole,
  onSelectRole,
}: UseCaseVisualizerProps) {
  const [internalRole, setInternalRole] = useState<ActorRole>('ALL');
  const [hoveredUseCase, setHoveredUseCase] = useState<string | null>(null);
  const [hoveredActor, setHoveredActor] = useState<ActorRole | null>(null);

  const currentRole = externalActiveRole !== undefined ? externalActiveRole : internalRole;

  const handleSelectRole = (role: ActorRole) => {
    if (onSelectRole) {
      onSelectRole(role);
    } else {
      setInternalRole(role);
    }
  };

  const isRoleActive = (role: ActorRole) => {
    if (hoveredActor) return hoveredActor === role;
    if (hoveredUseCase) {
      const uc = USE_CASES.find((u) => u.id === hoveredUseCase);
      return uc ? uc.actors.includes(role) : false;
    }
    if (currentRole === 'ALL') return true;
    return currentRole === role;
  };

  const isUseCaseActive = (ucId: string) => {
    if (hoveredUseCase) return hoveredUseCase === ucId;
    if (hoveredActor) {
      const actor = ACTORS.find((a) => a.id === hoveredActor);
      return actor ? actor.useCases.includes(ucId) : false;
    }
    if (currentRole === 'ALL') return true;
    const actor = ACTORS.find((a) => a.id === currentRole);
    return actor ? actor.useCases.includes(ucId) : false;
  };

  const isConnectionActive = (actorId: ActorRole, ucId: string) => {
    if (hoveredUseCase) {
      return hoveredUseCase === ucId && (hoveredActor ? hoveredActor === actorId : true);
    }
    if (hoveredActor) {
      return hoveredActor === actorId;
    }
    if (currentRole === 'ALL') return true;
    return currentRole === actorId;
  };

  const getActiveDescription = () => {
    if (hoveredUseCase) {
      const uc = USE_CASES.find((u) => u.id === hoveredUseCase);
      return uc ? `${uc.label}: ${uc.note}` : '';
    }
    if (hoveredActor || (currentRole !== 'ALL' && currentRole)) {
      const roleId = hoveredActor || currentRole;
      if (roleId === 'CITIZEN') return 'Resident Scope: 3 public use cases • 0 credentials required • Browse & Report';
      if (roleId === 'BARANGAY_ADMIN') return 'Barangay Official: 4 localized use cases • Scoped credentials • Draft & Triage';
      if (roleId === 'LGU_ADMIN') return 'City LGU Administrator: 4 governance use cases • City-wide authority • Enact & RBAC';
      if (roleId === 'GEMINI_AI') return 'External AI Service: Google Gemini 1.5 Flash • Bilingual RAG inference & citations';
    }
    return 'Full RBAC Architecture: 3 Human Roles, 1 External AI Actor, 8 System Use Cases';
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        background: 'linear-gradient(180deg, #090e1a 0%, #060912 100%)',
        overflow: 'hidden',
        fontFamily: 'var(--font-sans, system-ui, sans-serif)',
      }}
    >
      {/* Visualizer Header Toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '7px 12px',
          background: 'rgba(255, 255, 255, 0.02)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          flexWrap: 'wrap',
          gap: '6px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 8px #10b981',
              display: 'inline-block',
            }}
          />
          <span style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.05em', color: '#94a3b8' }}>
            FIGURE 14 • USE CASE ARCHITECTURE
          </span>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
          {[
            { id: 'ALL' as ActorRole, label: 'All Paths', color: '#94a3b8' },
            { id: 'CITIZEN' as ActorRole, label: 'Citizen', color: '#10b981' },
            { id: 'BARANGAY_ADMIN' as ActorRole, label: 'Barangay', color: '#f59e0b' },
            { id: 'LGU_ADMIN' as ActorRole, label: 'LGU Admin', color: '#38bdf8' },
            { id: 'GEMINI_AI' as ActorRole, label: 'Gemini AI', color: '#c084fc' },
          ].map((tab) => {
            const isSelected = currentRole === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleSelectRole(tab.id)}
                style={{
                  background: isSelected ? `${tab.color}24` : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${isSelected ? tab.color : 'rgba(255, 255, 255, 0.08)'}`,
                  color: isSelected ? '#ffffff' : '#94a3b8',
                  padding: '2px 7px',
                  borderRadius: '10px',
                  fontSize: '10px',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.16s ease',
                  boxShadow: isSelected ? `0 0 8px ${tab.color}33` : 'none',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* SVG Architecture Diagram Canvas */}
      <div style={{ position: 'relative', width: '100%', padding: '4px 2px 2px 2px' }}>
        <svg
          viewBox="0 0 580 358"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <defs>
            {/* Background Grid Pattern */}
            <pattern id="uc-grid" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.8" fill="rgba(255, 255, 255, 0.04)" />
            </pattern>

            {/* Glowing Linear Gradients for Connectors */}
            <linearGradient id="grad-citizen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="grad-barangay" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="grad-lgu" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="grad-ai" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.6" />
            </linearGradient>

            {/* Soft Glow Filter */}
            <filter id="laser-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Grid */}
          <rect width="580" height="358" fill="url(#uc-grid)" />

          {/* ─────────────────────────────────────────────────────────────
              SYSTEM BOUNDARY (Cabanatuan Ordinance Platform)
              ───────────────────────────────────────────────────────────── */}
          <rect
            x="164"
            y="10"
            width="250"
            height="338"
            rx="12"
            fill="rgba(10, 16, 30, 0.72)"
            stroke="rgba(52, 211, 153, 0.3)"
            strokeWidth="1.2"
            strokeDasharray="5 4"
          />
          <text
            x="289"
            y="24"
            textAnchor="middle"
            fill="#34d399"
            fontSize="8.5"
            fontWeight="700"
            letterSpacing="0.08em"
          >
            SYSTEM BOUNDARY: CABANATUAN ORDINANCE PORTAL
          </text>

          {/* ─────────────────────────────────────────────────────────────
              CONNECTOR BEZIER PATHS
              ───────────────────────────────────────────────────────────── */}
          <g>
            {/* Citizen Paths */}
            {USE_CASES.filter((u) => u.actors.includes('CITIZEN')).map((uc) => {
              const active = isConnectionActive('CITIZEN', uc.id);
              const targetY = uc.y + 14;
              const pathD = `M 136 65 C 154 65, 162 ${targetY}, 178 ${targetY}`;
              return (
                <g key={`conn-cit-${uc.id}`}>
                  {active && (
                    <path
                      d={pathD}
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3.2"
                      strokeOpacity="0.32"
                      filter="url(#laser-glow)"
                    />
                  )}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={active ? 'url(#grad-citizen)' : 'rgba(255, 255, 255, 0.08)'}
                    strokeWidth={active ? 1.8 : 0.9}
                    strokeDasharray={active ? '6 3' : 'none'}
                    className={active ? 'active-laser-pulse' : ''}
                    style={{ transition: 'all 0.22s ease' }}
                  />
                </g>
              );
            })}

            {/* Barangay Admin Paths */}
            {USE_CASES.filter((u) => u.actors.includes('BARANGAY_ADMIN')).map((uc) => {
              const active = isConnectionActive('BARANGAY_ADMIN', uc.id);
              const targetY = uc.y + 14;
              const pathD = `M 136 191 C 154 191, 162 ${targetY}, 178 ${targetY}`;
              return (
                <g key={`conn-brgy-${uc.id}`}>
                  {active && (
                    <path
                      d={pathD}
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="3.2"
                      strokeOpacity="0.32"
                      filter="url(#laser-glow)"
                    />
                  )}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={active ? 'url(#grad-barangay)' : 'rgba(255, 255, 255, 0.08)'}
                    strokeWidth={active ? 1.8 : 0.9}
                    strokeDasharray={active ? '6 3' : 'none'}
                    className={active ? 'active-laser-pulse' : ''}
                    style={{ transition: 'all 0.22s ease' }}
                  />
                </g>
              );
            })}

            {/* LGU Admin Paths */}
            {USE_CASES.filter((u) => u.actors.includes('LGU_ADMIN')).map((uc) => {
              const active = isConnectionActive('LGU_ADMIN', uc.id);
              const targetY = uc.y + 14;
              const pathD = `M 136 317 C 154 317, 162 ${targetY}, 178 ${targetY}`;
              return (
                <g key={`conn-lgu-${uc.id}`}>
                  {active && (
                    <path
                      d={pathD}
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="3.2"
                      strokeOpacity="0.32"
                      filter="url(#laser-glow)"
                    />
                  )}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={active ? 'url(#grad-lgu)' : 'rgba(255, 255, 255, 0.08)'}
                    strokeWidth={active ? 1.8 : 0.9}
                    strokeDasharray={active ? '6 3' : 'none'}
                    className={active ? 'active-laser-pulse' : ''}
                    style={{ transition: 'all 0.22s ease' }}
                  />
                </g>
              );
            })}

            {/* External Gemini AI Path */}
            {USE_CASES.filter((u) => u.actors.includes('GEMINI_AI')).map((uc) => {
              const active = isConnectionActive('GEMINI_AI', uc.id);
              const targetY = uc.y + 14;
              const pathD = `M 438 88 C 422 88, 416 ${targetY}, 400 ${targetY}`;
              return (
                <g key={`conn-ai-${uc.id}`}>
                  {active && (
                    <path
                      d={pathD}
                      fill="none"
                      stroke="#c084fc"
                      strokeWidth="3.2"
                      strokeOpacity="0.38"
                      filter="url(#laser-glow)"
                    />
                  )}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={active ? 'url(#grad-ai)' : 'rgba(255, 255, 255, 0.1)'}
                    strokeWidth={active ? 2 : 1}
                    strokeDasharray={active ? '5 3' : 'none'}
                    className={active ? 'active-laser-pulse' : ''}
                    style={{ transition: 'all 0.22s ease' }}
                  />
                  {/* UML <<include>> Label */}
                  <text
                    x="418"
                    y="77"
                    textAnchor="middle"
                    fill={active ? '#d8b4fe' : '#64748b'}
                    fontSize="7.5"
                    fontStyle="italic"
                    fontWeight="600"
                  >
                    «include»
                  </text>
                </g>
              );
            })}
          </g>

          {/* ─────────────────────────────────────────────────────────────
              USE CASE CAPSULES (Center System Boundary)
              ───────────────────────────────────────────────────────────── */}
          <g>
            {USE_CASES.map((uc) => {
              const active = isUseCaseActive(uc.id);
              const isHovered = hoveredUseCase === uc.id;
              const isAI = uc.id === 'query_ai';

              let borderColor = 'rgba(255, 255, 255, 0.12)';
              let fillColor = 'rgba(15, 23, 42, 0.88)';
              let textColor = '#cbd5e1';

              if (active) {
                if (isAI) {
                  borderColor = '#c084fc';
                  fillColor = 'rgba(147, 51, 234, 0.18)';
                  textColor = '#f3e8ff';
                } else if (uc.actors.includes('CITIZEN') && !uc.actors.includes('BARANGAY_ADMIN')) {
                  borderColor = '#10b981';
                  fillColor = 'rgba(16, 185, 129, 0.15)';
                  textColor = '#ecfdf5';
                } else if (uc.actors.includes('BARANGAY_ADMIN') && !uc.actors.includes('LGU_ADMIN')) {
                  borderColor = '#f59e0b';
                  fillColor = 'rgba(245, 158, 11, 0.15)';
                  textColor = '#fffbeb';
                } else if (uc.actors.includes('LGU_ADMIN') && !uc.actors.includes('BARANGAY_ADMIN')) {
                  borderColor = '#38bdf8';
                  fillColor = 'rgba(56, 189, 248, 0.15)';
                  textColor = '#f0f9ff';
                } else {
                  borderColor = '#34d399';
                  fillColor = 'rgba(52, 211, 153, 0.14)';
                  textColor = '#f8fafc';
                }
              }

              return (
                <g
                  key={uc.id}
                  onMouseEnter={() => setHoveredUseCase(uc.id)}
                  onMouseLeave={() => setHoveredUseCase(null)}
                  style={{ cursor: 'pointer', transition: 'all 0.18s ease' }}
                >
                  {/* Subtle hover backdrop shadow */}
                  {isHovered && (
                    <rect
                      x="176"
                      y={uc.y - 1}
                      width="226"
                      height="30"
                      rx="15"
                      fill={borderColor}
                      opacity="0.25"
                      filter="url(#laser-glow)"
                    />
                  )}

                  {/* Capsule body */}
                  <rect
                    x="178"
                    y={uc.y}
                    width="222"
                    height="28"
                    rx="14"
                    fill={fillColor}
                    stroke={borderColor}
                    strokeWidth={active ? (isHovered ? 1.8 : 1.3) : 0.8}
                    opacity={active ? 1 : 0.28}
                  />

                  {/* Icon Indicator Dot / Sparkle */}
                  {isAI ? (
                    <g transform={`translate(187, ${uc.y + 8})`}>
                      <path
                        d="M6 1 L7.2 4.2 L10.4 5.4 L7.2 6.6 L6 9.8 L4.8 6.6 L1.6 5.4 L4.8 4.2 Z"
                        fill="#c084fc"
                        opacity={active ? 1 : 0.5}
                      />
                    </g>
                  ) : (
                    <circle
                      cx="193"
                      cy={uc.y + 14}
                      r="2.8"
                      fill={borderColor}
                      opacity={active ? 1 : 0.5}
                    />
                  )}

                  {/* Use Case Label */}
                  <text
                    x="203"
                    y={uc.y + 18}
                    fill={textColor}
                    fontSize="9.8"
                    fontWeight={active ? 600 : 400}
                    letterSpacing="0.01em"
                    opacity={active ? 1 : 0.35}
                  >
                    {uc.label}
                  </text>

                  {/* AI Badge on Query AI Chatbot */}
                  {isAI && active && (
                    <g transform={`translate(346, ${uc.y + 6})`}>
                      <rect width="46" height="15" rx="7.5" fill="rgba(192, 132, 252, 0.25)" stroke="#c084fc" strokeWidth="0.8" />
                      <text x="23" y="11" textAnchor="middle" fill="#f3e8ff" fontSize="7.5" fontWeight="700">
                        AI RAG
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </g>

          {/* ─────────────────────────────────────────────────────────────
              ACTOR CARDS (Left: 3 Human Roles, Right: External AI)
              ───────────────────────────────────────────────────────────── */}
          <g>
            {ACTORS.map((actor) => {
              const active = isRoleActive(actor.id);
              const isHovered = hoveredActor === actor.id;
              const isAI = actor.id === 'GEMINI_AI';

              return (
                <g
                  key={actor.id}
                  onClick={() => handleSelectRole(actor.id === currentRole ? 'ALL' : actor.id)}
                  onMouseEnter={() => setHoveredActor(actor.id)}
                  onMouseLeave={() => setHoveredActor(null)}
                  style={{ cursor: 'pointer', transition: 'all 0.18s ease' }}
                >
                  {/* Ambient Glow */}
                  {(active || isHovered) && (
                    <rect
                      x={actor.x - 2}
                      y={actor.y - 2}
                      width={actor.w + 4}
                      height={actor.h + 4}
                      rx="10"
                      fill={actor.color}
                      opacity={isHovered ? 0.3 : 0.14}
                      filter="url(#laser-glow)"
                    />
                  )}

                  {/* Card Body */}
                  <rect
                    x={actor.x}
                    y={actor.y}
                    width={actor.w}
                    height={actor.h}
                    rx="8"
                    fill="rgba(15, 23, 42, 0.94)"
                    stroke={active ? actor.color : 'rgba(255, 255, 255, 0.12)'}
                    strokeWidth={active ? (isHovered ? 2 : 1.4) : 0.8}
                    opacity={active ? 1 : 0.32}
                  />

                  {/* Role Pill */}
                  <g transform={`translate(${actor.x + 8}, ${actor.y + 8})`}>
                    <rect
                      width={isAI ? 78 : actor.id === 'CITIZEN' ? 52 : actor.id === 'BARANGAY_ADMIN' ? 84 : 70}
                      height="13"
                      rx="3"
                      fill={`${actor.color}25`}
                    />
                    <text
                      x="4"
                      y="9.5"
                      fill={actor.color}
                      fontSize="7.5"
                      fontWeight="800"
                      letterSpacing="0.04em"
                    >
                      {actor.roleTag}
                    </text>
                  </g>

                  {/* Actor Display Name */}
                  <text
                    x={actor.x + 8}
                    y={actor.y + 34}
                    fill="#f8fafc"
                    fontSize="10.5"
                    fontWeight="700"
                    opacity={active ? 1 : 0.4}
                  >
                    {actor.name}
                  </text>

                  {/* Subtitle / Scope */}
                  <text
                    x={actor.x + 8}
                    y={actor.y + 46}
                    fill="#94a3b8"
                    fontSize="8"
                    fontWeight="500"
                    opacity={active ? 0.85 : 0.3}
                  >
                    {actor.sub}
                  </text>

                  {/* Active Connection Point Dot */}
                  <circle
                    cx={actor.connX}
                    cy={actor.connY}
                    r={active ? 3.5 : 2}
                    fill={actor.color}
                    opacity={active ? 1 : 0.4}
                  />
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Dynamic Status / Scope Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6px 14px',
          background: 'rgba(0, 0, 0, 0.35)',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          fontSize: '11px',
          color: '#94a3b8',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: '#34d399', fontWeight: 700 }}>Scope:</span>
          <span style={{ color: '#e2e8f0', fontWeight: 500 }}>{getActiveDescription()}</span>
        </span>
        <span style={{ fontSize: '10px', color: '#64748b' }}>Click any role or tab to filter</span>
      </div>

      <style>{`
        .active-laser-pulse {
          animation: flowStroke 1.8s linear infinite;
        }
        @keyframes flowStroke {
          0% {
            stroke-dashoffset: 36;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}

const ROLE_CARDS: {
  id: ActorRole;
  badge: string;
  badgeColor: string;
  badgeBg: string;
  title: string;
  meta: string;
  desc: string;
}[] = [
  {
    id: 'CITIZEN',
    badge: 'CITIZEN',
    badgeColor: '#10b981',
    badgeBg: 'rgba(16, 185, 129, 0.15)',
    title: 'Resident / Citizen',
    meta: 'Public Access • Zero Auth Required',
    desc: 'Public exploration, bilingual AI inquiries, and community concern submission. Requires zero authentication or account setup.',
  },
  {
    id: 'BARANGAY_ADMIN',
    badge: 'BARANGAY_ADMIN',
    badgeColor: '#f59e0b',
    badgeBg: 'rgba(245, 158, 11, 0.15)',
    title: 'Barangay Official / Staff',
    meta: 'Scoped Auth • Assigned Barangay Only',
    desc: 'Authenticated; strictly isolated to their assigned barangay. Drafts local ordinances, uploads PDFs for AI OCR extraction, and resolves incident reports.',
  },
  {
    id: 'LGU_ADMIN',
    badge: 'LGU_ADMIN',
    badgeColor: '#38bdf8',
    badgeBg: 'rgba(56, 189, 248, 0.15)',
    title: 'City LGU Administrator',
    meta: 'City-Wide Authority • Sovereign Governance',
    desc: 'City-wide sovereign governance. Enacts or rejects proposed ordinances with remarks, publishes city-wide laws, oversees all reports, and manages user RBAC.',
  },
  {
    id: 'GEMINI_AI',
    badge: 'EXTERNAL_ACTOR',
    badgeColor: '#c084fc',
    badgeBg: 'rgba(192, 132, 252, 0.15)',
    title: 'External AI Service (Google Gemini)',
    meta: 'Cloud REST API • Multimodal RAG & OCR',
    desc: 'External machine actor powered by Google Gemini 1.5 Flash. Executes multimodal document OCR parsing and powers bilingual conversational RAG inquiries with statutory legal citations.',
  },
];

export function UserRolesSlideContent() {
  const [activeRole, setActiveRole] = useState<ActorRole>('ALL');

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(320px, 1.25fr) minmax(280px, 1fr)',
        gap: 'clamp(18px, 2.5vw, 32px)',
        alignItems: 'center',
      }}
    >
      {/* Coded Live Architecture Diagram inside Browser Frame */}
      <BrowserFrame url="ordinance.cabanatuan.gov.ph/architecture/use-case">
        <UseCaseVisualizer activeRole={activeRole} onSelectRole={setActiveRole} />
      </BrowserFrame>

      {/* Synchronized Role Breakdown Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', textAlign: 'left' }}>
        {ROLE_CARDS.map((card) => {
          const isSelected = activeRole === card.id;
          const isDimmed = activeRole !== 'ALL' && !isSelected;

          return (
            <div
              key={card.id}
              onClick={() => setActiveRole(isSelected ? 'ALL' : card.id)}
              onMouseEnter={() => {
                if (activeRole === 'ALL') {
                  setActiveRole(card.id);
                }
              }}
              onMouseLeave={() => {
                // Return to ALL if we were hovering while no role was pinned
              }}
              style={{
                padding: '10px 14px',
                background: isSelected ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.025)',
                border: `1px solid ${isSelected ? card.badgeColor : 'var(--hair-2)'}`,
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                opacity: isDimmed ? 0.45 : 1,
                transition: 'all 0.2s ease',
                boxShadow: isSelected ? `0 0 16px ${card.badgeColor}22` : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '3px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span
                    style={{
                      padding: '2px 7px',
                      borderRadius: '4px',
                      background: card.badgeBg,
                      color: card.badgeColor,
                      fontSize: '10px',
                      fontWeight: 800,
                      letterSpacing: '0.03em',
                    }}
                  >
                    {card.badge}
                  </span>
                  <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#f8fafc' }}>{card.title}</span>
                </div>
                <span style={{ fontSize: '9.5px', color: '#64748b', fontWeight: 600 }}>{card.meta}</span>
              </div>
              <p style={{ margin: 0, fontSize: '11.8px', color: 'var(--fg-muted)', lineHeight: 1.4 }}>
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
