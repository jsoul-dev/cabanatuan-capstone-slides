import { useState } from 'react';
import BrowserFrame from './BrowserFrame';

interface ModuleItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  desc: string;
  screenshot: string;
  url: string;
  figure: string;
}

const MODULES: ModuleItem[] = [
  {
    id: 'explorer',
    number: '01',
    title: 'Public Ordinance Explorer & Viewer',
    tag: 'Citizen Access',
    desc: 'Instant keyword search, category filters, coverage badges, and split-pane official PDF text viewing.',
    screenshot: '/screenshots/c03-explorer.png',
    url: 'ordinance.cabanatuan.gov.ph/ordinances',
    figure: 'Figure C-3 & C-4',
  },
  {
    id: 'ai-chat',
    number: '02',
    title: 'Civic AI Legal Assistant',
    tag: 'Gemini RAG Engine',
    desc: 'Bilingual conversational queries (Tagalog, English, Taglish) with exact legislative citations and penalty breakdowns.',
    screenshot: '/screenshots/c06-ai-assistant.png',
    url: 'ordinance.cabanatuan.gov.ph/chatbot',
    figure: 'Figure C-6',
  },
  {
    id: 'ocr',
    number: '03',
    title: 'Multimodal OCR Ordinance Parser',
    tag: 'Auto-Digitization',
    desc: 'Extracts scanned paper ordinance PDFs into structured metadata and searchable articles, saving ~85% entry time.',
    screenshot: '/screenshots/c13-ocr-extraction.png',
    url: 'ordinance.cabanatuan.gov.ph/admin/ordinances/extract',
    figure: 'Figure C-13 & C-20',
  },
  {
    id: 'reporting',
    number: '04',
    title: 'Citizen Incident & Concern Reporting',
    tag: 'Civic Triage',
    desc: 'Citizen reporting with photo evidence, anonymous draft mode, and automatic dispatch routing to assigned barangays.',
    screenshot: '/screenshots/c07-reporting.png',
    url: 'ordinance.cabanatuan.gov.ph/report',
    figure: 'Figure C-7 & C-8',
  },
  {
    id: 'barangay',
    number: '05',
    title: 'Barangay Administration Console',
    tag: 'Scoped Governance',
    desc: 'Local ordinance proposal drafting, incident report triage with resolution logging, and localized PDF reports.',
    screenshot: '/screenshots/c10-brgy-dashboard.png',
    url: 'ordinance.cabanatuan.gov.ph/admin/barangay',
    figure: 'Figure C-10 & C-15',
  },
  {
    id: 'lgu',
    number: '06',
    title: 'City LGU Sovereign Governance Suite',
    tag: 'City-Wide Oversight',
    desc: 'Legislative review & approval workflow, 89-barangay directory, user RBAC management, and municipal analytics.',
    screenshot: '/screenshots/c17-lgu-dashboard.png',
    url: 'ordinance.cabanatuan.gov.ph/admin/lgu',
    figure: 'Figure C-17 & C-19',
  },
];

export default function ModuleBento() {
  const [activeModule, setActiveModule] = useState<ModuleItem>(MODULES[0]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(280px, 1fr) minmax(340px, 1.4fr)',
        gap: 'clamp(14px, 2vw, 24px)',
        alignItems: 'center',
        width: '100%',
        maxWidth: 1180,
        marginInline: 'auto',
      }}
    >
      {/* Module Selector List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {MODULES.map((mod) => {
          const isSelected = activeModule.id === mod.id;
          return (
            <button
              key={mod.id}
              onClick={() => setActiveModule(mod)}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: 'clamp(6px, 1vh, 10px) 12px',
                borderRadius: 'var(--radius-sm)',
                background: isSelected
                  ? 'linear-gradient(90deg, rgba(16, 185, 129, 0.16) 0%, rgba(5, 150, 105, 0.05) 100%)'
                  : 'rgba(255, 255, 255, 0.02)',
                border: isSelected
                  ? '1px solid rgba(16, 185, 129, 0.4)'
                  : '1px solid rgba(255, 255, 255, 0.05)',
                color: 'var(--fg)',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: isSelected ? '#10b981' : 'var(--fg-faint)',
                  marginTop: '1px',
                }}
              >
                {mod.number}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '13px', fontWeight: isSelected ? 700 : 600, color: isSelected ? '#f8fafc' : 'var(--fg-muted)' }}>
                    {mod.title}
                  </div>
                  <span
                    style={{
                      fontSize: '9.5px',
                      textTransform: 'uppercase',
                      padding: '1px 5px',
                      borderRadius: '4px',
                      background: isSelected ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      color: isSelected ? '#34d399' : 'var(--fg-faint)',
                      fontWeight: 700,
                    }}
                  >
                    {mod.tag}
                  </span>
                </div>
                {isSelected && (
                  <p style={{ margin: '3px 0 0 0', fontSize: '11.5px', color: 'var(--fg-muted)', lineHeight: 1.35 }}>
                    {mod.desc}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Screenshot in BrowserFrame */}
      <div style={{ position: 'relative' }}>
        <BrowserFrame url={activeModule.url}>
          <div
            style={{
              width: '100%',
              height: 'clamp(200px, 34vh, 340px)',
              background: '#0a100d',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src={activeModule.screenshot}
              alt={activeModule.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
              }}
            />
          </div>
        </BrowserFrame>
        {/* Caption */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '6px',
            paddingInline: '6px',
            fontSize: '10.5px',
            color: 'var(--fg-faint)',
          }}
        >
          <span>Appendix C: {activeModule.figure}</span>
          <span style={{ color: 'var(--primary)' }}>Cabanatuan City Ordinance Portal v2</span>
        </div>
      </div>
    </div>
  );
}
