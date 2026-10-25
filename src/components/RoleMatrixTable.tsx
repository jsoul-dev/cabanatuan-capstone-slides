import { useState } from 'react';

export interface MatrixRow {
  feature: string;
  resident: boolean | string;
  barangay: boolean | string;
  lgu: boolean | string;
}

export const EXECUTIVE_MATRIX: MatrixRow[] = [
  {
    feature: '1. Legislative Search & Full Text / PDF Viewing',
    resident: true,
    barangay: true,
    lgu: true,
  },
  {
    feature: '2. Civic AI Assistant (Gemini Bilingual RAG with Citations)',
    resident: true,
    barangay: true,
    lgu: true,
  },
  {
    feature: '3. Civic News & Official Municipal Advisories',
    resident: true,
    barangay: true,
    lgu: true,
  },
  {
    feature: '4. Citizen Incident Reporting (Anonymous & Photo Proof)',
    resident: true,
    barangay: false,
    lgu: false,
  },
  {
    feature: '5. Incident Report Triage & Resolution Workflow',
    resident: false,
    barangay: 'Own Brgy',
    lgu: 'City-wide',
  },
  {
    feature: '6. Barangay Ordinance Drafting & AI Multimodal OCR',
    resident: false,
    barangay: true,
    lgu: true,
  },
  {
    feature: '7. Legislative Enactment & City Ordinance Publication',
    resident: false,
    barangay: false,
    lgu: true,
  },
  {
    feature: '8. User RBAC, 89-Barangay Roster & Official PDF Export',
    resident: false,
    barangay: 'PDF Only',
    lgu: true,
  },
];

export const DETAILED_MATRIX: MatrixRow[] = [
  {
    feature: 'Browse, search & filter ordinances',
    resident: true,
    barangay: true,
    lgu: true,
  },
  {
    feature: 'View ordinance text & official PDF',
    resident: true,
    barangay: true,
    lgu: true,
  },
  {
    feature: 'Ask the Civic AI Chatbot Assistant (Gemini RAG)',
    resident: true,
    barangay: true,
    lgu: true,
  },
  {
    feature: 'View civic news and official advisories',
    resident: true,
    barangay: true,
    lgu: true,
  },
  {
    feature: 'Submit community report (anonymous draft mode)',
    resident: true,
    barangay: false,
    lgu: false,
  },
  {
    feature: 'Instant dispatch notice & automated hall routing',
    resident: true,
    barangay: true,
    lgu: true,
  },
  {
    feature: 'Secure multi-role authentication',
    resident: false,
    barangay: true,
    lgu: true,
  },
  {
    feature: 'Draft & upload barangay ordinances for review',
    resident: false,
    barangay: true,
    lgu: false,
  },
  {
    feature: 'Multimodal AI PDF extraction & auto-structuring',
    resident: false,
    barangay: true,
    lgu: true,
  },
  {
    feature: 'Triage incident reports & update resolution status',
    resident: false,
    barangay: 'Own Brgy',
    lgu: 'City-wide',
  },
  {
    feature: 'Review, enact, or reject barangay submissions',
    resident: false,
    barangay: false,
    lgu: true,
  },
  {
    feature: 'Direct city ordinance publication & indexing',
    resident: false,
    barangay: false,
    lgu: true,
  },
  {
    feature: 'User accounts, 89-barangay roster & news console',
    resident: false,
    barangay: false,
    lgu: true,
  },
  {
    feature: 'Compliance analytics & official PDF report export',
    resident: false,
    barangay: true,
    lgu: true,
  },
];

interface RoleMatrixTableProps {
  highlightAdmin?: boolean;
}

export default function RoleMatrixTable({ highlightAdmin = true }: RoleMatrixTableProps) {
  const [viewMode, setViewMode] = useState<'executive' | 'detailed'>('executive');
  const currentData = viewMode === 'executive' ? EXECUTIVE_MATRIX : DETAILED_MATRIX;

  const checkIcon = (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: 'rgba(16, 185, 129, 0.18)',
        border: '1px solid rgba(16, 185, 129, 0.4)',
        color: '#10b981',
      }}
      aria-label="Supported"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );

  const dashIcon = (
    <span style={{ color: 'rgba(255, 255, 255, 0.2)', fontSize: '15px', fontWeight: 600 }}>
      —
    </span>
  );

  const renderCell = (val: boolean | string) => {
    if (val === true) return checkIcon;
    if (val === false) return dashIcon;
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          padding: '2px 7px',
          borderRadius: '999px',
          background: 'rgba(16, 185, 129, 0.12)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          color: '#34d399',
          fontSize: '10.5px',
          fontWeight: 600,
        }}
      >
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#10b981' }} />
        {val}
      </span>
    );
  };

  return (
    <div style={{ width: '100%', maxWidth: 1160, marginInline: 'auto' }}>
      {/* Toggle View Mode */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
        <div
          style={{
            display: 'inline-flex',
            padding: '2px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--hair-2)',
            borderRadius: '8px',
          }}
        >
          <button
            onClick={() => setViewMode('executive')}
            style={{
              padding: '4px 10px',
              borderRadius: '6px',
              border: 'none',
              background: viewMode === 'executive' ? 'rgba(16, 185, 129, 0.25)' : 'transparent',
              color: viewMode === 'executive' ? '#f8fafc' : 'var(--fg-muted)',
              fontSize: '11px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Executive Matrix (8 Domains)
          </button>
          <button
            onClick={() => setViewMode('detailed')}
            style={{
              padding: '4px 10px',
              borderRadius: '6px',
              border: 'none',
              background: viewMode === 'detailed' ? 'rgba(16, 185, 129, 0.25)' : 'transparent',
              color: viewMode === 'detailed' ? '#f8fafc' : 'var(--fg-muted)',
              fontSize: '11px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Detailed Matrix (14 Features)
          </button>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          overflowX: 'auto',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--hair-2)',
          background: 'linear-gradient(180deg, rgba(10, 16, 12, 0.95) 0%, rgba(6, 9, 7, 0.98) 100%)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.85)',
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 'clamp(11.5px, 0.95vw, 13px)',
            textAlign: 'left',
          }}
        >
          <thead>
            <tr style={{ borderBottom: '1px solid var(--hair-2)' }}>
              <th
                style={{
                  padding: 'clamp(8px, 1.2vh, 12px) 16px',
                  color: 'var(--fg)',
                  fontWeight: 700,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  width: '46%',
                }}
              >
                System Capability & Governance Module
              </th>
              <th
                style={{
                  padding: 'clamp(8px, 1.2vh, 12px) 12px',
                  textAlign: 'center',
                  color: 'var(--fg-muted)',
                  fontWeight: 600,
                  fontSize: '11.5px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  width: '18%',
                }}
              >
                Resident / Citizen
                <div style={{ fontSize: '9.5px', color: 'var(--fg-faint)', textTransform: 'none' }}>
                  (Public Access)
                </div>
              </th>
              <th
                style={{
                  padding: 'clamp(8px, 1.2vh, 12px) 12px',
                  textAlign: 'center',
                  color: 'var(--fg-muted)',
                  fontWeight: 600,
                  fontSize: '11.5px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  width: '18%',
                }}
              >
                Barangay Admin
                <div style={{ fontSize: '9.5px', color: 'var(--fg-faint)', textTransform: 'none' }}>
                  (Barangay Scoped)
                </div>
              </th>
              <th
                style={{
                  padding: 'clamp(8px, 1.2vh, 12px) 12px',
                  textAlign: 'center',
                  color: '#f8fafc',
                  fontWeight: 700,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  width: '18%',
                  background: highlightAdmin
                    ? 'linear-gradient(180deg, rgba(16, 185, 129, 0.22) 0%, rgba(5, 150, 105, 0.12) 100%)'
                    : 'transparent',
                  borderLeft: highlightAdmin ? '1px solid rgba(16, 185, 129, 0.35)' : 'none',
                  borderRight: highlightAdmin ? '1px solid rgba(16, 185, 129, 0.35)' : 'none',
                  boxShadow: highlightAdmin ? 'inset 0 1px 0 rgba(16, 185, 129, 0.5)' : 'none',
                }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ color: 'var(--accent-gold)' }}>★</span>
                  LGU Admin
                </div>
                <div style={{ fontSize: '9.5px', color: '#34d399', textTransform: 'none', fontWeight: 600 }}>
                  (City-Wide Sovereign)
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <tr
                  key={idx}
                  style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                    backgroundColor: isEven ? 'rgba(255, 255, 255, 0.015)' : 'transparent',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  <td style={{ padding: 'clamp(5px, 0.8vh, 8px) 16px', color: 'var(--fg)', fontWeight: 500 }}>
                    {row.feature}
                  </td>
                  <td style={{ padding: 'clamp(5px, 0.8vh, 8px) 12px', textAlign: 'center' }}>
                    {renderCell(row.resident)}
                  </td>
                  <td style={{ padding: 'clamp(5px, 0.8vh, 8px) 12px', textAlign: 'center' }}>
                    {renderCell(row.barangay)}
                  </td>
                  <td
                    style={{
                      padding: 'clamp(5px, 0.8vh, 8px) 12px',
                      textAlign: 'center',
                      background: highlightAdmin ? 'rgba(16, 185, 129, 0.06)' : 'transparent',
                      borderLeft: highlightAdmin ? '1px solid rgba(16, 185, 129, 0.25)' : 'none',
                      borderRight: highlightAdmin ? '1px solid rgba(16, 185, 129, 0.25)' : 'none',
                    }}
                  >
                    {renderCell(row.lgu)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
