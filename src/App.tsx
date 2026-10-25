import { useState } from 'react';
import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import Reveal from './deck/Reveal';
import BrowserFrame from './components/BrowserFrame';
import CountUp from './components/CountUp';
import OrdinanceNetworkScene from './components/OrdinanceNetworkScene';
import PresenterTeam from './components/PresenterTeam';
import PaperToDigital from './components/PaperToDigital';
import ModuleBento from './components/ModuleBento';
import CivicChatReplay from './components/CivicChatReplay';
import RoleMatrixTable from './components/RoleMatrixTable';
import IsoQualityChart from './components/IsoQualityChart';
import SusGauge from './components/SusGauge';
import WcagComparisonChart from './components/WcagComparisonChart';
import RecommendationsTimeline from './components/RecommendationsTimeline';

export default function App() {
  return (
    <Deck>
      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 1: COVER HERO (E1 WebGL 3D Network Scene)
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        full
        center
        nav="Cover"
        notes="Good day to the honorable members of the panel, our adviser Dr. Cris Norman Olipas, and faculty-in-charge Professor Alexander Cochanco. We are Group 1, and today we present our final capstone defense: A Web-Based AI-Assisted Ordinance Information System for Cabanatuan City."
        style={{ overflow: 'hidden' }}
      >
        <OrdinanceNetworkScene isActive={true} />

        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 1060,
            marginInline: 'auto',
            padding: 'clamp(32px, 5.5vh, 60px) clamp(24px, 4vw, 56px)',
            background: 'radial-gradient(ellipse 95% 75% at 50% 50%, rgba(6, 9, 7, 0.94) 0%, rgba(6, 9, 7, 0.82) 55%, rgba(6, 9, 7, 0) 92%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '32px',
          }}
        >
          <Reveal>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 18px',
                borderRadius: '999px',
                background: 'rgba(6, 9, 7, 0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(16, 185, 129, 0.45)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
                color: 'var(--primary)',
                fontSize: '12.5px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
              Group 1 · Final Capstone Defense · October 2026
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              className="display"
              style={{
                fontSize: 'clamp(32px, 4.4vw, 56px)',
                fontWeight: 800,
                lineHeight: 1.15,
                margin: '0 0 18px 0',
                letterSpacing: '-0.02em',
                color: '#ffffff',
                textShadow: '0 4px 28px rgba(0, 0, 0, 0.95), 0 2px 8px rgba(0, 0, 0, 0.9)',
              }}
            >
              A Web-Based AI-Assisted Ordinance Information System for{' '}
              <span className="accent-text" style={{ color: '#10b981', textShadow: '0 0 40px rgba(16, 185, 129, 0.5)' }}>
                Cabanatuan City
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p
              className="lead"
              style={{
                fontSize: 'clamp(15px, 1.35vw, 19px)',
                color: '#e2e8f0',
                lineHeight: 1.6,
                maxWidth: 820,
                marginInline: 'auto',
                marginBottom: '32px',
                textShadow: '0 2px 18px rgba(0, 0, 0, 0.95), 0 1px 4px rgba(0, 0, 0, 0.9)',
              }}
            >
              A centralized municipal governance platform unifying legislative management across 89 barangays with automated multimodal OCR ingestion, bilingual Gemini RAG inquiry, and structured community reporting.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                padding: '12px 28px',
                borderRadius: '999px',
                background: 'rgba(6, 9, 7, 0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.65)',
                fontSize: '13px',
                color: '#cbd5e1',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontWeight: 600, color: '#f8fafc' }}>
                Nueva Ecija University of Science and Technology
              </span>
              <span>·</span>
              <span>College of Information and Communications Technology</span>
              <span>·</span>
              <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>BSIT Web Systems</span>
            </div>
          </Reveal>
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 2: THE TEAM & LEADERSHIP
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="The Team"
        notes="Our development team comprises four researchers specializing in Web Systems Technology. This capstone endeavor was conducted under the direct guidance of our Capstone Adviser, Dr. Cris Norman P. Olipas, and our Faculty-in-Charge, Professor Alexander S. Cochanco."
      >
        <div style={{ maxWidth: 1180, marginInline: 'auto' }}>
          <div style={{ marginBottom: 'clamp(20px, 3vh, 32px)' }}>
            <span className="kicker" style={{ color: 'var(--primary)' }}>Group 1 · Research & Development</span>
            <h2 className="headline" style={{ margin: '6px 0 0 0' }}>
              Capstone Team & Academic Leadership
            </h2>
          </div>

          <PresenterTeam showAdvisers={true} />
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 3: PURPOSE OF THE SYSTEM
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="System Purpose"
        notes="The primary purpose of the system is to establish a unified, centralized web platform modernizing legislative management for Cabanatuan City. It enables barangays to draft and manage local ordinances, allows the City LGU to review and enact them, and empowers citizens to understand policies through an AI assistant, with supplementary community reporting."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Project Purpose & Scope</span>
          <h2 className="headline" style={{ margin: '6px 0 24px 0' }}>
            Modernizing Municipal Legislative Governance
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
              gap: '18px',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, rgba(6, 9, 7, 0.7) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: 'var(--radius)',
                padding: '22px',
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '12px' }}>🏛️</div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', margin: '0 0 8px 0' }}>
                Centralized Ordinance Hub
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Unifies legislative archives across all 89 barangays and City Hall into one accessible, 24/7 searchable digital repository.
              </p>
            </div>

            <div
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(6, 9, 7, 0.7) 100%)',
                border: '1px solid var(--hair-2)',
                borderRadius: 'var(--radius)',
                padding: '22px',
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '12px' }}>⚖️</div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', margin: '0 0 8px 0' }}>
                Decentralized Drafting & Review
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Barangay officials draft and submit proposed measures, while the City LGU maintains final enactment and publishing oversight.
              </p>
            </div>

            <div
              style={{
                background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.08) 0%, rgba(6, 9, 7, 0.7) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                borderRadius: 'var(--radius)',
                padding: '22px',
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '12px' }}>🤖</div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', margin: '0 0 8px 0' }}>
                Civic AI Inquiries (RAG)
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Plain-language conversational search in Tagalog, English, and Taglish with precise ordinance citations and penalty breakdowns.
              </p>
            </div>

            <div
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(6, 9, 7, 0.7) 100%)',
                border: '1px solid var(--hair-2)',
                borderRadius: 'var(--radius)',
                padding: '22px',
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '12px' }}>📢</div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', margin: '0 0 8px 0' }}>
                Supplementary Incident Triage
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Citizens report local concerns (waste burning, noise, road obstruction) with photo proof, routing instantly to the assigned barangay.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 4: PROBLEM & NEEDS ASSESSMENT (E2 Paper-to-Digital)
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Needs Assessment"
        notes="Our needs assessment revealed severe bottlenecks in traditional paper management: records are vulnerable to ink fading and physical loss; searches require manual catalog browsing; and access is limited strictly to office hours. As Batacandolo and colleagues established in 2024, limited access causes low compliance, which our digital portal directly overcomes."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Empirical Problem Statement</span>
          <h2 className="headline" style={{ margin: '6px 0 24px 0' }}>
            From Paper Vulnerability to Digital Governance
          </h2>

          <PaperToDigital showDigital={true} />
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 5: INTENDED USERS & BENEFICIARIES
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Beneficiaries"
        notes="The platform serves four primary stakeholder groups: residents who gain continuous 24/7 access to laws; barangay personnel who accelerate legislative work; city administrators who gain city-wide visibility; and future researchers studying Philippine civic digital transformation."
      >
        <div style={{ maxWidth: 1160, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Municipal Stakeholders</span>
          <h2 className="headline" style={{ margin: '6px 0 24px 0' }}>
            Designed for Every Level of Civic Governance
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
              gap: '18px',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(6, 9, 7, 0.7) 100%)',
                border: '1px solid var(--hair-2)',
                borderRadius: 'var(--radius)',
                padding: '24px',
              }}
            >
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.06em' }}>
                Beneficiary Group 01
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', margin: '8px 0 10px 0' }}>
                Cabanatuan Residents
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Instant 24/7 online access from any smartphone or PC; plain-language AI search for rights and penalties; transparent community reporting without physical office visits.
              </p>
            </div>

            <div
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(6, 9, 7, 0.7) 100%)',
                border: '1px solid var(--hair-2)',
                borderRadius: 'var(--radius)',
                padding: '24px',
              }}
            >
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '0.06em' }}>
                Beneficiary Group 02
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', margin: '8px 0 10px 0' }}>
                Barangay Officials & Staff
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Rapid digitization of legacy paper ordinances via multimodal OCR (~85% time reduction); structured proposal submission; and localized incident report triage.
              </p>
            </div>

            <div
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(6, 9, 7, 0.7) 100%)',
                border: '1px solid var(--hair-2)',
                borderRadius: 'var(--radius)',
                padding: '24px',
              }}
            >
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.06em' }}>
                Beneficiary Group 03
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', margin: '8px 0 10px 0' }}>
                City LGU Administration
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Unified legislative enactment console; central 89-barangay accreditation roster; role-based account administration; and city-wide incident compliance analytics.
              </p>
            </div>

            <div
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(6, 9, 7, 0.7) 100%)',
                border: '1px solid var(--hair-2)',
                borderRadius: 'var(--radius)',
                padding: '24px',
              }}
            >
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#38bdf8', fontWeight: 700, letterSpacing: '0.06em' }}>
                Beneficiary Group 04
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', margin: '8px 0 10px 0' }}>
                Researchers & IT Students
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                An empirical reference architecture demonstrating cost-effective containerized PaaS, SQLite WAL relational design, and civic Retrieval-Augmented Generation.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 6: MAJOR SYSTEM FUNCTIONS (E3 Bento / Real Screenshots)
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="System Modules"
        notes="The system is structured into six core operational modules: public legislative exploration, an AI legal assistant, automated multimodal OCR document extraction, citizen reporting, a barangay-level administrative console, and a central municipal LGU governance suite."
      >
        <div style={{ maxWidth: 1180, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Core Functional Modules</span>
          <h2 className="headline" style={{ margin: '6px 0 20px 0' }}>
            Six Integrated Municipal Governance Modules
          </h2>

          <ModuleBento />
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 7: CIVIC AI ASSISTANT IN ACTION (E5 Chat Replay)
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="AI Assistant"
        notes="Here we demonstrate the Civic AI Assistant responding to a resident in Tagalog regarding waste burning penalties. Notice how the system cites both the specific City Ordinance and Barangay Ordinance with exact penalty tiers, bounded strictly to municipal records with no legal hallucinations."
      >
        <div style={{ maxWidth: 980, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Retrieval-Augmented Generation</span>
          <h2 className="headline" style={{ margin: '6px 0 20px 0' }}>
            Bilingual Civic AI Inquiries with Exact Legal Citations
          </h2>

          <CivicChatReplay />
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 8: USER ROLES & SYSTEM ACTORS
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="User Roles"
        notes="The system architecture enforces three distinct database roles: Citizen for public access, Barangay Admin scoped strictly to local barangay data, and LGU Admin possessing city-wide governance authority, with Google Gemini acting as an external API service actor."
      >
        <div style={{ maxWidth: 1160, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Role-Based Access Control</span>
          <h2 className="headline" style={{ margin: '6px 0 20px 0' }}>
            Three Primary User Roles & External AI Actor
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1.2fr) minmax(280px, 1fr)',
              gap: 'clamp(20px, 3vw, 36px)',
              alignItems: 'center',
            }}
          >
            {/* Use Case Diagram */}
            <BrowserFrame url="ordinance.cabanatuan.gov.ph/architecture/use-case">
              <div style={{ background: '#ffffff', padding: '12px', display: 'flex', justifyContent: 'center' }}>
                <img
                  src="/figures/figure-14-use-case.png"
                  alt="Use Case Diagram"
                  style={{ maxHeight: '340px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
            </BrowserFrame>

            {/* Role Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
              <div style={{ padding: '14px 18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', fontSize: '11px', fontWeight: 700 }}>
                    CITIZEN
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>Resident / Citizen</span>
                </div>
                <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--fg-muted)', lineHeight: 1.45 }}>
                  Public exploration, bilingual AI inquiries, and community concern submission. Requires zero authentication or account setup.
                </p>
              </div>

              <div style={{ padding: '14px 18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent-gold)', fontSize: '11px', fontWeight: 700 }}>
                    BARANGAY_ADMIN
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>Barangay Official / Staff</span>
                </div>
                <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--fg-muted)', lineHeight: 1.45 }}>
                  Authenticated; strictly isolated to their assigned barangay. Drafts local ordinances, uploads PDFs for AI OCR extraction, and resolves incident reports.
                </p>
              </div>

              <div style={{ padding: '14px 18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ padding: '2px 8px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.25)', color: '#34d399', fontSize: '11px', fontWeight: 700 }}>
                    LGU_ADMIN
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>City LGU Administrator</span>
                </div>
                <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--fg-muted)', lineHeight: 1.45 }}>
                  City-wide sovereign governance. Enacts or rejects proposed ordinances with remarks, publishes city-wide laws, oversees all reports, and manages user RBAC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 9: ROLE RESPONSIBILITIES & ACCESS BOUNDARIES
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Access Levels"
        notes="Access levels are architecturally isolated: Citizens require no credentials for public exploration and reporting; Barangay Admins are authenticated to their own barangay jurisdiction; while LGU Admins possess full sovereign authority across all 89 barangays."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Access Boundary Matrix</span>
          <h2 className="headline" style={{ margin: '6px 0 24px 0' }}>
            Responsibilities, Authentication & Data Scopes
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
              gap: '20px',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(6, 9, 7, 0.7) 100%)',
                border: '1px solid var(--hair-2)',
                borderRadius: 'var(--radius)',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#34d399' }}>Public Tier</span>
                <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.06)', color: 'var(--fg-muted)' }}>
                  No Login Required
                </span>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#f8fafc', margin: '0 0 10px 0' }}>
                Resident / Citizen
              </h3>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--fg-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Read and search enacted city and barangay ordinances.</li>
                <li>Inquire via the bilingual Civic AI Assistant with legal citations.</li>
                <li>View official PDF text and civic news advisories.</li>
                <li>Submit incident reports with photo proof and optional anonymity.</li>
              </ul>
            </div>

            <div
              style={{
                background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.06) 0%, rgba(6, 9, 7, 0.7) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                borderRadius: 'var(--radius)',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent-gold)' }}>Barangay Scoped</span>
                <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '4px', background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent-gold)' }}>
                  Authenticated
                </span>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#f8fafc', margin: '0 0 10px 0' }}>
                Barangay Admin
              </h3>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--fg-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Draft, upload, and submit proposed ordinances for LGU review.</li>
                <li>Run multimodal AI OCR to auto-structure scanned PDF files.</li>
                <li>Triage and update resolution statuses of local community reports.</li>
                <li>Generate localized barangay compliance PDF reports.</li>
              </ul>
            </div>

            <div
              style={{
                background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.14) 0%, rgba(6, 9, 7, 0.8) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                boxShadow: '0 0 40px -15px rgba(16, 185, 129, 0.2)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#34d399' }}>City-Wide Sovereign</span>
                <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.25)', color: '#34d399', fontWeight: 700 }}>
                  Municipal Admin
                </span>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#f8fafc', margin: '0 0 10px 0' }}>
                LGU Admin
              </h3>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--fg)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Review, approve, or reject barangay submissions with audit remarks.</li>
                <li>Enact and index official city-wide ordinances directly.</li>
                <li>Manage user accounts, 89-barangay accreditation, and city news.</li>
                <li>Access city-wide incident analytics and export official PDF summaries.</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 10: ROLE MATRIX (E4 Row-by-Row Reveal & Glow)
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Role Matrix"
        notes="As requested by the panel, this feature-by-role matrix illustrates access boundaries across all 14 core system capabilities. Notice the highlighted LGU Admin column, which retains exclusive authority over final ordinance review, user management, and city-wide publication, verified directly against our codebase."
      >
        <div style={{ maxWidth: 1180, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Feature-by-Role Matrix</span>
          <h2 className="headline" style={{ margin: '6px 0 16px 0' }}>
            System Capabilities by User Role
          </h2>

          <RoleMatrixTable highlightAdmin={true} />
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 11: TRANSITION TO SYSTEM DEMO
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="System Demo"
        notes="We now transition to the recorded demonstration of the working system. The walkthrough presents the Administrator flow first—covering LGU enactment and barangay triage—followed by the End-User flow demonstrating public exploration and AI interaction."
      >
        <div style={{ maxWidth: 1040, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Live Operational Walkthrough</span>
          <h2 className="headline" style={{ margin: '6px 0 12px 0' }}>
            Demonstration of the Working System
          </h2>
          <p className="lead" style={{ maxWidth: 760, marginInline: 'auto', marginBottom: '24px', fontSize: '16px' }}>
            A structured operational walkthrough showcasing administrative oversight followed by citizen engagement.
          </p>

          <BrowserFrame url="ordinance.cabanatuan.gov.ph">
            <div
              style={{
                width: '100%',
                height: 'clamp(260px, 44vh, 440px)',
                background: '#070b09',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                padding: '16px',
                boxSizing: 'border-box',
              }}
            >
              {/* Flow 1: Admin */}
              <div
                style={{
                  borderRadius: '12px',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ padding: '8px 12px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', fontSize: '12px', fontWeight: 700 }}>
                  Flow A: Administrator Walkthrough (LGU & Barangay)
                </div>
                <img
                  src="/screenshots/c17-lgu-dashboard.png"
                  alt="LGU Executive Dashboard"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Flow 2: End-User */}
              <div
                style={{
                  borderRadius: '12px',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ padding: '8px 12px', background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent-gold)', fontSize: '12px', fontWeight: 700 }}>
                  Flow B: End-User Walkthrough (Public & Chatbot)
                </div>
                <img
                  src="/screenshots/c01-welcome.png"
                  alt="Public Welcome Portal"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </BrowserFrame>
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 12: RESEARCH PROBLEMS (PART B)
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Research Problems"
        notes="Part B presents our empirical research results addressing our four core research problems: system development through Agile, technical software quality under ISO 25010, end-user usability via SUS, and web accessibility compliance under WCAG 2.2."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Part B · Research Results & Evaluation</span>
          <h2 className="headline" style={{ margin: '6px 0 24px 0' }}>
            Statement of Research Problems
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
              gap: '18px',
              textAlign: 'left',
            }}
          >
            <div style={{ padding: '22px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary)' }}>RP 01</span>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: '8px 0 10px 0' }}>
                Agile Development
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                How can the system be developed across the Agile phases (Planning & Requirements, Design & Prototyping, Implementation, and Testing & Deployment)?
              </p>
            </div>

            <div style={{ padding: '22px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent-gold)' }}>RP 02</span>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: '8px 0 10px 0' }}>
                Technical Quality
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                How do IT experts evaluate the platform using the ISO/IEC 25010:2023 Software Product Quality Model across its nine software characteristics?
              </p>
            </div>

            <div style={{ padding: '22px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#34d399' }}>RP 03</span>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: '8px 0 10px 0' }}>
                End-User Usability
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                How do end-users (residents, barangay officials, and LGU staff) evaluate the usability of the platform using the standardized System Usability Scale (SUS)?
              </p>
            </div>

            <div style={{ padding: '22px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#38bdf8' }}>RP 04</span>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: '8px 0 10px 0' }}>
                Web Accessibility
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                How do IT experts and end-users evaluate accessibility using the four Web Content Accessibility Guidelines (WCAG 2.2) principles?
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 13: METHOD & RESPONDENTS (E6 CountUp)
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Methodology"
        notes="The study employed a developmental-quantitative research design using purposive sampling. We gathered empirical evaluations from 110 total respondents: 10 IT professionals who evaluated technical quality and accessibility, and 100 end-users across residents, barangay officials, and city administrators."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Research Design & Sample</span>
          <h2 className="headline" style={{ margin: '6px 0 24px 0' }}>
            Developmental-Quantitative Method & 110 Respondents
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(280px, 1fr) minmax(340px, 1.4fr)',
              gap: 'clamp(20px, 3vw, 40px)',
              alignItems: 'center',
            }}
          >
            {/* Big CountUp Card */}
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.12) 0%, rgba(6, 9, 7, 0.7) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                borderRadius: 'var(--radius)',
                padding: 'clamp(24px, 4vh, 36px)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)', fontWeight: 700 }}>
                Total Research Respondents
              </div>
              <div
                style={{
                  fontSize: 'clamp(54px, 6vw, 80px)',
                  fontWeight: 800,
                  color: '#f8fafc',
                  lineHeight: 1,
                  margin: '8px 0',
                  fontFeatureSettings: '"tnum" 1',
                }}
              >
                <CountUp to={110} duration={1200} />
              </div>
              <div style={{ fontSize: '13px', color: 'var(--fg-muted)' }}>
                Purposive Sampling Across Cabanatuan City
              </div>
            </div>

            {/* Respondent Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
              <div style={{ padding: '14px 18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--fg)' }}>
                    IT Experts (N = 10)
                  </span>
                  <span style={{ fontSize: '16px', fontWeight: 800, color: '#10b981' }}>
                    <CountUp to={10} duration={900} />
                  </span>
                </div>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: 'var(--fg-muted)' }}>
                  Software engineers, system architects, and technical analysts evaluating ISO 25010 & WCAG.
                </p>
              </div>

              <div style={{ padding: '14px 18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--fg)' }}>
                    Cabanatuan Residents (N = 72)
                  </span>
                  <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--accent-gold)' }}>
                    <CountUp to={72} duration={1100} />
                  </span>
                </div>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: 'var(--fg-muted)' }}>
                  Citizens across diverse barangays testing public exploration, AI chat, and reporting.
                </p>
              </div>

              <div style={{ padding: '14px 18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--fg)' }}>
                    Barangay Officials & Staff (N = 18)
                  </span>
                  <span style={{ fontSize: '16px', fontWeight: 800, color: '#34d399' }}>
                    <CountUp to={18} duration={1000} />
                  </span>
                </div>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: 'var(--fg-muted)' }}>
                  Captains and administrative personnel representing 9 purposively selected barangays.
                </p>
              </div>

              <div style={{ padding: '14px 18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--fg)' }}>
                    City LGU Officials (N = 10)
                  </span>
                  <span style={{ fontSize: '16px', fontWeight: 800, color: '#38bdf8' }}>
                    <CountUp to={10} duration={900} />
                  </span>
                </div>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: 'var(--fg-muted)' }}>
                  Municipal administrators evaluating enactment, account management, and city analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 14: KEY FINDINGS: RP1 — DEVELOPMENT & DEPLOYMENT COST
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="RP1: Development"
        notes="For Research Problem 1, all four Agile phases were successfully completed. Crucially, our deployment costing analysis proved that the platform can operate for as low as ₱436.58 monthly during pilot operations, and approximately ₱1,614.98 monthly for full city-wide scale on Railway Pro, overcoming the financial barriers typical of municipal IT projects."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Research Problem 1 Findings</span>
          <h2 className="headline" style={{ margin: '6px 0 20px 0' }}>
            Agile Development Lifecycle & Municipal Hosting Feasibility
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(320px, 1.25fr)',
              gap: 'clamp(20px, 3vw, 36px)',
              alignItems: 'stretch',
              textAlign: 'left',
            }}
          >
            {/* Four Agile Sprints */}
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(6, 9, 7, 0.7) 100%)',
                border: '1px solid var(--hair-2)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--primary)', fontWeight: 700 }}>
                Four Agile Iterations Completed
              </div>

              <div style={{ padding: '10px 14px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>Phase 1: Planning & Requirements</div>
                <div style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>Cabanatuan legal scope, needs assessment, and user stories.</div>
              </div>

              <div style={{ padding: '10px 14px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>Phase 2: Design & Prototyping</div>
                <div style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>Use Case (Fig 14), DFD Level 0/1 (Fig 15-16), ERD (Fig 25), and wireframes.</div>
              </div>

              <div style={{ padding: '10px 14px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px', borderLeft: '3px solid #34d399' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>Phase 3: Development & Implementation</div>
                <div style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>Next.js 16, React 19, TypeScript, Prisma, SQLite WAL, Gemini 3.5 Flash-Lite.</div>
              </div>

              <div style={{ padding: '10px 14px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px', borderLeft: '3px solid #38bdf8' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>Phase 4: Testing & Deployment</div>
                <div style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>Unit testing, RBAC security verification, and 110-respondent UAT.</div>
              </div>
            </div>

            {/* Deployment Costing Analysis (Table 19) */}
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 9, 7, 0.7) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--primary)', fontWeight: 700 }}>
                  Empirical Deployment Costing (Table 19)
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', margin: '6px 0 14px 0' }}>
                  Low-Cost Municipal PaaS Architecture
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <span style={{ color: 'var(--fg-muted)' }}>Option A: Pilot Baseline (Railway Hobby)</span>
                    <span style={{ fontWeight: 700, color: '#34d399' }}>₱436.58 – ₱976.59 / mo</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <span style={{ color: 'var(--fg-muted)' }}>Option B: City-Wide Scale (Railway Pro)</span>
                    <span style={{ fontWeight: 700, color: 'var(--accent-gold)' }}>₱1,614.98 – ₱1,867.27 / mo</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <span style={{ color: 'var(--fg-muted)' }}>Embedded SQLite WAL Persistent Volume</span>
                    <span style={{ fontWeight: 700, color: '#f8fafc' }}>Included in credit (₱0.00)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <span style={{ color: 'var(--fg-muted)' }}>Cloudflare DDoS & Manila CDN Edge</span>
                    <span style={{ fontWeight: 700, color: '#f8fafc' }}>Free Plan (₱0.00)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--fg-muted)' }}>Gemini AI Cost per Civic Inquiry</span>
                    <span style={{ fontWeight: 700, color: '#34d399' }}>~₱0.0528 / query</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '14px', padding: '10px 14px', background: 'rgba(16, 185, 129, 0.12)', borderRadius: '8px', fontSize: '11.5px', color: '#f8fafc', lineHeight: 1.4 }}>
                <strong>Key Governance Impact:</strong> First-year operational expenditure is estimated at only ₱5,238.96 to ₱11,719.08 under baseline, establishing practical financial sustainability for Philippine LGUs.
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 15: KEY FINDINGS: RP2 — TECHNICAL QUALITY (ISO 25010)
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="RP2: ISO 25010"
        notes="For Research Problem 2, IT experts evaluated the platform using ISO/IEC 25010:2023, yielding an overall mean of 4.28 (Highly Suitable/Efficient). Compatibility and Functional Suitability led the highest evaluation band, while Recoverability and Audit Logging were pinpointed as areas for technical hardening."
      >
        <div style={{ maxWidth: 1160, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Research Problem 2 Findings</span>
          <h2 className="headline" style={{ margin: '6px 0 20px 0' }}>
            ISO/IEC 25010:2023 Overall Mean 4.28 (Highly Suitable/Efficient)
          </h2>

          <IsoQualityChart />
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 16: KEY FINDINGS: RP3 — USABILITY (SUS)
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="RP3: SUS Usability"
        notes="For Research Problem 3, end-user usability measured via the System Usability Scale achieved a score of 75.13 out of 100, surpassing the 68.0 benchmark by 7.13 points. Respondents expressed high willingness to use the platform frequently and praised its seamless feature integration."
      >
        <div style={{ maxWidth: 1120, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Research Problem 3 Findings</span>
          <h2 className="headline" style={{ margin: '6px 0 20px 0' }}>
            System Usability Scale: 75.13 / 100 ("Good" / Acceptable)
          </h2>

          <SusGauge score={75.13} benchmark={68.0} />
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 17: KEY FINDINGS: RP4 — ACCESSIBILITY (WCAG 2.2)
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="RP4: WCAG"
        notes="For Research Problem 4, accessibility was evaluated under the four WCAG principles, yielding 4.19 from IT experts and 4.26 from end-users. Visual contrast and keyboard navigation scored exceptionally high, while screen-reader announcements were identified for future engineering enhancements."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Research Problem 4 Findings</span>
          <h2 className="headline" style={{ margin: '6px 0 20px 0' }}>
            WCAG 2.2 Accessibility: 4.19 (Experts) & 4.26 (End-Users)
          </h2>

          <WcagComparisonChart />
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 18: SUMMARY OF FINDINGS
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Summary"
        notes="In summary, our empirical findings confirm that the system successfully completed all Agile phases with low hosting overhead, met high technical standards under ISO 25010, achieved excellent usability well above benchmark, and complied solidly with WCAG accessibility standards."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Synthesis of Evaluation</span>
          <h2 className="headline" style={{ margin: '6px 0 24px 0' }}>
            Comprehensive Summary of Findings
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
              gap: '18px',
              textAlign: 'left',
            }}
          >
            <div style={{ padding: '22px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700 }}>Pillar 01</div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', margin: '6px 0 8px 0' }}>
                Agile & Cost Feasibility
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Successfully delivered across 4 Agile iterations with low operational overhead (₱436.58 to ₱1,867.27/mo), proving high municipal sustainability.
              </p>
            </div>

            <div style={{ padding: '22px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 700 }}>Pillar 02</div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', margin: '6px 0 8px 0' }}>
                Technical Quality (4.28)
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Overall mean 4.28 (Highly Suitable/Efficient) under ISO 25010 by 10 IT experts. High scores in Compatibility (4.55) and Functional Suitability (4.50).
              </p>
            </div>

            <div style={{ padding: '22px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#34d399', fontWeight: 700 }}>Pillar 03</div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', margin: '6px 0 8px 0' }}>
                Usability (75.13 SUS)
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Surpassed the 68.0 industry benchmark by +7.13 points (Grade B, "Good" / Acceptable), led by frequent user willingness (4.30).
              </p>
            </div>

            <div style={{ padding: '22px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#38bdf8', fontWeight: 700 }}>Pillar 04</div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', margin: '6px 0 8px 0' }}>
                Accessibility (4.19 & 4.26)
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                Strong WCAG 2.2 compliance confirmed across both expert and citizen groups, with screen-reader optimizations identified for future iterations.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 19: CONCLUSIONS
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Conclusions"
        notes="We conclude that an AI-assisted web ordinance platform is technically feasible, usable, and economically viable for local government units in the Philippines. By keeping recurring hosting costs under ₱1,900 monthly, the platform offers a sustainable model for municipal digital transformation."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Academic & Practical Implications</span>
          <h2 className="headline" style={{ margin: '6px 0 24px 0' }}>
            Conclusions of the Study
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'clamp(14px, 1.8vh, 20px)',
              textAlign: 'left',
            }}
          >
            {/* 1. Technical Feasibility */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(6, 9, 7, 0.75) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 'var(--radius)',
                padding: 'clamp(18px, 2.2vh, 24px)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.8)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 90,
                  height: 90,
                  background: 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.2), transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                    color: '#34d399',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />
                  Feasibility
                </span>
                <span style={{ fontSize: '11.5px', color: 'var(--fg-faint)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  OCR + Gemini RAG
                </span>
              </div>
              <h3 style={{ fontSize: 'clamp(16px, 1.3vw, 18px)', fontWeight: 700, color: '#f8fafc', margin: '0 0 8px 0' }}>
                1. Technical & Functional Feasibility
              </h3>
              <p style={{ fontSize: 'clamp(12.5px, 1.05vw, 13.5px)', color: 'var(--fg-muted)', lineHeight: 1.5, margin: '0 0 12px 0' }}>
                Combining automated multimodal OCR ingestion, SQLite WAL relational indexing, and bilingual Gemini RAG produces a stable, unified platform proven capable of managing municipal ordinances.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#34d399', fontWeight: 600 }}>
                <span>✓</span> Verified across 4 Agile iterations & 3 administrative roles
              </div>
            </div>

            {/* 2. Resolving Archive Vulnerabilities */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(6, 9, 7, 0.75) 100%)',
                border: '1px solid rgba(56, 189, 248, 0.28)',
                borderRadius: 'var(--radius)',
                padding: 'clamp(18px, 2.2vh, 24px)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.8)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 90,
                  height: 90,
                  background: 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.2), transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                    color: '#38bdf8',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8' }} />
                  Civic Access
                </span>
                <span style={{ fontSize: '11.5px', color: 'var(--fg-faint)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  24/7 Digital Hub
                </span>
              </div>
              <h3 style={{ fontSize: 'clamp(16px, 1.3vw, 18px)', fontWeight: 700, color: '#f8fafc', margin: '0 0 8px 0' }}>
                2. Resolving Archive Vulnerabilities
              </h3>
              <p style={{ fontSize: 'clamp(12.5px, 1.05vw, 13.5px)', color: 'var(--fg-muted)', lineHeight: 1.5, margin: '0 0 12px 0' }}>
                Digital persistence and 24/7 responsive access overcome the physical paper degradation, binder misfiling, and office-hour constraints that historically impeded citizen compliance and awareness.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#38bdf8', fontWeight: 600 }}>
                <span>✓</span> Replaces vulnerable paper binders with instant search
              </div>
            </div>

            {/* 3. Economic Viability */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(6, 9, 7, 0.75) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.28)',
                borderRadius: 'var(--radius)',
                padding: 'clamp(18px, 2.2vh, 24px)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.8)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 90,
                  height: 90,
                  background: 'radial-gradient(circle at top right, rgba(245, 158, 11, 0.2), transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    border: '1px solid rgba(245, 158, 11, 0.35)',
                    color: 'var(--accent-gold)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f59e0b' }} />
                  Fiscal Model
                </span>
                <span style={{ fontSize: '11.5px', color: 'var(--fg-faint)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  &lt; ₱1,900 / mo
                </span>
              </div>
              <h3 style={{ fontSize: 'clamp(16px, 1.3vw, 18px)', fontWeight: 700, color: '#f8fafc', margin: '0 0 8px 0' }}>
                3. Economic Viability for LGUs
              </h3>
              <p style={{ fontSize: 'clamp(12.5px, 1.05vw, 13.5px)', color: 'var(--fg-muted)', lineHeight: 1.5, margin: '0 0 12px 0' }}>
                Projected monthly overhead of ₱436.58 to ₱1,867.27 proves modern AI governance can run on managed cloud PaaS without capital hardware expenses or dedicated municipal server administrators.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--accent-gold)', fontWeight: 600 }}>
                <span>✓</span> Addresses primary financial adoption barrier in Philippine LGUs
              </div>
            </div>

            {/* 4. Scope Delimitation & Next Steps */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.08) 0%, rgba(6, 9, 7, 0.75) 100%)',
                border: '1px solid rgba(129, 140, 248, 0.28)',
                borderRadius: 'var(--radius)',
                padding: 'clamp(18px, 2.2vh, 24px)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.8)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 90,
                  height: 90,
                  background: 'radial-gradient(circle at top right, rgba(129, 140, 248, 0.2), transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    background: 'rgba(129, 140, 248, 0.15)',
                    border: '1px solid rgba(129, 140, 248, 0.35)',
                    color: '#818cf8',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#818cf8' }} />
                  Empirical Scope
                </span>
                <span style={{ fontSize: '11.5px', color: 'var(--fg-faint)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  110 Evaluators
                </span>
              </div>
              <h3 style={{ fontSize: 'clamp(16px, 1.3vw, 18px)', fontWeight: 700, color: '#f8fafc', margin: '0 0 8px 0' }}>
                4. Scope Delimitation & Pilot Horizon
              </h3>
              <p style={{ fontSize: 'clamp(12.5px, 1.05vw, 13.5px)', color: 'var(--fg-muted)', lineHeight: 1.5, margin: '0 0 12px 0' }}>
                Conclusions are bounded by controlled testing across 10 IT experts and 100 end-users in 9 barangays. This provides an empirical baseline supporting a phased 2-to-3 barangay live operational pilot.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#818cf8', fontWeight: 600 }}>
                <span>✓</span> Rigorous empirical foundation ready for live community rollout
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 20: RECOMMENDATIONS (E8 Timeline)
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Recommendations"
        notes="Our recommendations span three strategic tracks: technical hardening targeting recoverability and screen readers; a phased municipal rollout beginning with a 2-to-3 barangay pilot; and future longitudinal research measuring compliance impact across other local government units."
      >
        <div style={{ maxWidth: 1180, marginInline: 'auto' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Strategic Roadmap</span>
          <h2 className="headline" style={{ margin: '6px 0 20px 0' }}>
            Actionable Recommendations for System & City Rollout
          </h2>

          <RecommendationsTimeline />
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          SLIDE 21: CLOSING & Q&A
          ────────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Closing"
        notes="On behalf of Group 1, we express our profound gratitude to our adviser, our faculty, and the honorable members of the panel. We now welcome your questions, critiques, and guidance."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto' }}>
          <Reveal>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: 'var(--primary)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
              Final Capstone Defense · Group 1
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              className="display"
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800,
                color: '#f8fafc',
                margin: '0 0 12px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Maraming Salamat Po.
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p
              className="lead"
              style={{
                fontSize: 'clamp(15px, 1.3vw, 18px)',
                color: 'var(--fg-muted)',
                marginBottom: '28px',
              }}
            >
              We are now open for questions, evaluations, and panel recommendations.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <PresenterTeam showAdvisers={true} />
          </Reveal>
        </div>
      </Slide>

      {/* ──────────────────────────────────────────────────────────────────
          BACKUP SLIDES (B1 to B7) — Reachable via Grid View (G)
          ────────────────────────────────────────────────────────────────── */}

      {/* B1. Data Gathering Evidence & Sampling */}
      <Slide
        center
        nav="B1: Sampling"
        notes="Backup slide B1 details our evaluation instruments: ISO 25010 9-characteristic rubric, 10-item System Usability Scale form, and 4-principle WCAG checklist, with purposive sampling criteria."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto', textAlign: 'left' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Backup Slide B1</span>
          <h2 className="headline" style={{ margin: '6px 0 20px 0' }}>
            Data Gathering Instruments & Sampling Matrix
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: '0 0 8px 0' }}>
                Evaluation Instruments
              </h3>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--fg-muted)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li><strong>ISO/IEC 25010:2023 Form:</strong> 9 quality characteristics, 5-point Likert scale rated by 10 IT experts.</li>
                <li><strong>System Usability Scale (SUS):</strong> Standard 10-item alternating positive/negative instrument administered to 100 end-users.</li>
                <li><strong>WCAG 2.2 Checklist:</strong> Evaluation across Perceivable, Operable, Understandable, and Robust principles.</li>
              </ul>
            </div>

            <div style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: '0 0 8px 0' }}>
                Purposive Sampling Criteria
              </h3>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--fg-muted)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li><strong>IT Experts (10):</strong> Minimum 2 years in software development or systems architecture.</li>
                <li><strong>Barangay Officials (18):</strong> Incumbent legislative or administrative staff from 9 selected barangays.</li>
                <li><strong>Residents (72):</strong> Verified Cabanatuan City residents across urban and rural barangays.</li>
                <li><strong>LGU Officials (10):</strong> City government administrators and department officers.</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* B2. Full ISO 25010 Table */}
      <Slide
        center
        nav="B2: ISO Details"
        notes="Backup slide B2 provides the complete itemized weighted means for all nine characteristics evaluated under ISO/IEC 25010:2023."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto', textAlign: 'left' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Backup Slide B2</span>
          <h2 className="headline" style={{ margin: '6px 0 16px 0' }}>
            Complete ISO/IEC 25010:2023 Evaluation Table (N = 10)
          </h2>

          <div style={{ overflowX: 'auto', borderRadius: 'var(--radius)', border: '1px solid var(--hair-2)', background: 'rgba(10, 16, 12, 0.9)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12.5px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--hair-2)', background: 'rgba(255, 255, 255, 0.03)' }}>
                  <th style={{ padding: '10px 16px', color: '#f8fafc', textAlign: 'left' }}>Quality Characteristic</th>
                  <th style={{ padding: '10px 16px', color: '#f8fafc', textAlign: 'center' }}>Mean</th>
                  <th style={{ padding: '10px 16px', color: '#f8fafc', textAlign: 'left' }}>Verbal Interpretation</th>
                  <th style={{ padding: '10px 16px', color: '#f8fafc', textAlign: 'left' }}>Key Indicators</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}><td style={{ padding: '8px 16px', fontWeight: 600 }}>Compatibility</td><td style={{ textAlign: 'center', fontWeight: 700, color: '#34d399' }}>4.55</td><td>Highly Compatible</td><td>Co-existence 4.60, Interoperability 4.50</td></tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}><td style={{ padding: '8px 16px', fontWeight: 600 }}>Functional Suitability</td><td style={{ textAlign: 'center', fontWeight: 700, color: '#34d399' }}>4.50</td><td>Highly Suitable</td><td>Completeness 4.80, Appropriateness 4.50, Correctness 4.20</td></tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}><td style={{ padding: '8px 16px', fontWeight: 700 }}>Performance Efficiency</td><td style={{ textAlign: 'center', fontWeight: 700, color: '#34d399' }}>4.40</td><td>Highly Efficient</td><td>Time Behavior 4.50, Resource Utilization 4.40, Capacity 4.30</td></tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}><td style={{ padding: '8px 16px', fontWeight: 600 }}>Maintainability</td><td style={{ textAlign: 'center', fontWeight: 700 }}>4.30</td><td>Highly Maintainable</td><td>Modularity 4.50, Analysability 4.30, Testability 4.20</td></tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}><td style={{ padding: '8px 16px', fontWeight: 600 }}>Interaction Capability</td><td style={{ textAlign: 'center', fontWeight: 700 }}>4.24</td><td>Highly Capable</td><td>Operability 4.40, Learnability 4.30, Aesthetics 4.20</td></tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}><td style={{ padding: '8px 16px', fontWeight: 600 }}>Security</td><td style={{ textAlign: 'center', fontWeight: 700 }}>4.17</td><td>Secure</td><td>Confidentiality 4.40, Integrity 4.20, Non-repudiation 4.00</td></tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}><td style={{ padding: '8px 16px', fontWeight: 600 }}>Safety</td><td style={{ textAlign: 'center', fontWeight: 700 }}>4.17</td><td>Safe</td><td>Risk Identification 4.20, Operational Constraint 4.10</td></tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}><td style={{ padding: '8px 16px', fontWeight: 600 }}>Reliability</td><td style={{ textAlign: 'center', fontWeight: 700 }}>4.10</td><td>Reliable</td><td>Maturity 4.40, Availability 4.40, Fault Tolerance 4.40, Recoverability 3.20</td></tr>
                <tr style={{ borderBottom: '1px solid var(--hair-2)' }}><td style={{ padding: '8px 16px', fontWeight: 600 }}>Flexibility</td><td style={{ textAlign: 'center', fontWeight: 700 }}>4.07</td><td>Flexible</td><td>Adaptability 4.20, Scalability 4.10, Installability 3.90</td></tr>
                <tr style={{ background: 'rgba(16, 185, 129, 0.15)', fontWeight: 800 }}>
                  <td style={{ padding: '10px 16px', color: '#f8fafc' }}>Overall Software Quality Weighted Mean</td>
                  <td style={{ textAlign: 'center', color: '#34d399', fontSize: '15px' }}>4.28</td>
                  <td colSpan={2} style={{ padding: '10px 16px', color: '#f8fafc' }}>Highly Suitable/Efficient</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Slide>

      {/* B3. SUS Item-Level Results */}
      <Slide
        center
        nav="B3: SUS Items"
        notes="Backup slide B3 presents the item-level scores of the System Usability Scale administered to 100 end-users."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto', textAlign: 'left' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Backup Slide B3</span>
          <h2 className="headline" style={{ margin: '6px 0 16px 0' }}>
            System Usability Scale: 10-Item Evaluation (N = 100)
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', fontSize: '12.5px' }}>
            <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc' }}>1. Willingness to use frequently (Positive)</div>
              <div style={{ color: '#34d399', fontWeight: 700 }}>Mean: 4.30 / 5.00</div>
            </div>
            <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc' }}>2. Unnecessarily complex (Negative)</div>
              <div style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>Mean: 1.85 / 5.00 (Low is good)</div>
            </div>
            <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc' }}>3. Thought the system was easy to use (Positive)</div>
              <div style={{ color: '#34d399', fontWeight: 700 }}>Mean: 4.21 / 5.00</div>
            </div>
            <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc' }}>4. Need technical support to use (Negative)</div>
              <div style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>Mean: 1.95 / 5.00 (Low is good)</div>
            </div>
            <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc' }}>5. Functions well integrated (Positive)</div>
              <div style={{ color: '#34d399', fontWeight: 700 }}>Mean: 4.27 / 5.00</div>
            </div>
            <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc' }}>6. Too much inconsistency (Negative)</div>
              <div style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>Mean: 1.80 / 5.00 (Low is good)</div>
            </div>
            <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc' }}>7. People learn very quickly (Positive)</div>
              <div style={{ color: '#34d399', fontWeight: 700 }}>Mean: 4.23 / 5.00</div>
            </div>
            <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc' }}>8. Found system cumbersome to use (Negative)</div>
              <div style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>Mean: 1.90 / 5.00 (Low is good)</div>
            </div>
            <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc' }}>9. Felt very confident using system (Positive)</div>
              <div style={{ color: '#34d399', fontWeight: 700 }}>Mean: 4.18 / 5.00</div>
            </div>
            <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', borderLeft: '3px solid var(--accent-gold)' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc' }}>10. Need to learn lot of things before going (Negative)</div>
              <div style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>Mean: 1.82 / 5.00 (Low is good)</div>
            </div>
          </div>
          <div style={{ marginTop: '14px', padding: '12px', background: 'rgba(16, 185, 129, 0.12)', borderRadius: '8px', textAlign: 'center', fontWeight: 700, color: '#f8fafc' }}>
            Calculated SUS Composite Score: 75.13 / 100 · Grade B · "Good" (Acceptable)
          </div>
        </div>
      </Slide>

      {/* B4. WCAG Indicator Breakdown */}
      <Slide
        center
        nav="B4: WCAG Details"
        notes="Backup slide B4 presents the indicator-level comparison between IT experts and end-users for all four WCAG 2.2 principles."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto', textAlign: 'left' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Backup Slide B4</span>
          <h2 className="headline" style={{ margin: '6px 0 16px 0' }}>
            WCAG 2.2 Indicator Breakdown (Experts vs End-Users)
          </h2>

          <div style={{ overflowX: 'auto', borderRadius: 'var(--radius)', border: '1px solid var(--hair-2)', background: 'rgba(10, 16, 12, 0.9)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--hair-2)', background: 'rgba(255, 255, 255, 0.03)' }}>
                  <th style={{ padding: '12px 18px', color: '#f8fafc', textAlign: 'left' }}>WCAG 2.2 Principle</th>
                  <th style={{ padding: '12px 18px', color: '#10b981', textAlign: 'center' }}>IT Experts (N=10)</th>
                  <th style={{ padding: '12px 18px', color: 'var(--accent-gold)', textAlign: 'center' }}>End-Users (N=100)</th>
                  <th style={{ padding: '12px 18px', color: '#f8fafc', textAlign: 'left' }}>Evaluation Findings</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                  <td style={{ padding: '10px 18px', fontWeight: 700 }}>1. Perceivable</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: '#10b981' }}>4.13</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--accent-gold)' }}>4.45</td>
                  <td style={{ color: 'var(--fg-muted)' }}>High-contrast typography, clear hierarchy, and PDF text zoom.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                  <td style={{ padding: '10px 18px', fontWeight: 700 }}>2. Operable</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: '#10b981' }}>4.27</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--accent-gold)' }}>4.43</td>
                  <td style={{ color: 'var(--fg-muted)' }}>Full keyboard navigation, clear 2px focus rings, and responsive touch.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                  <td style={{ padding: '10px 18px', fontWeight: 700 }}>3. Understandable</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: '#10b981' }}>4.34</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--accent-gold)' }}>4.32</td>
                  <td style={{ color: 'var(--fg-muted)' }}>Bilingual chatbot interface, predictable forms, and validation alerts.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--hair-2)' }}>
                  <td style={{ padding: '10px 18px', fontWeight: 700 }}>4. Robust</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: '#10b981' }}>4.03</td>
                  <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--accent-gold)' }}>3.85</td>
                  <td style={{ color: 'var(--fg-muted)' }}>Cross-browser stability verified; screen reader ARIA regions flagged.</td>
                </tr>
                <tr style={{ background: 'rgba(255, 255, 255, 0.04)', fontWeight: 800 }}>
                  <td style={{ padding: '12px 18px', color: '#f8fafc' }}>Overall Composite Mean</td>
                  <td style={{ textAlign: 'center', color: '#10b981', fontSize: '15px' }}>4.19 (Accessible)</td>
                  <td style={{ textAlign: 'center', color: 'var(--accent-gold)', fontSize: '15px' }}>4.26 (Highly Accessible)</td>
                  <td style={{ color: '#34d399' }}>Strong overall accessibility across both technical and citizen groups.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Slide>

      {/* B5. System Architecture: DFDs & ERD */}
      <Slide
        center
        nav="B5: Architecture"
        notes="Backup slide B5 provides the Data Flow Diagrams (Level 0 and Level 1) and Entity-Relationship Diagram demonstrating relational data design."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto', textAlign: 'left' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Backup Slide B5</span>
          <h2 className="headline" style={{ margin: '6px 0 16px 0' }}>
            System Architecture: Data Flow Diagrams & ERD
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            <BrowserFrame url="cabanatuan.gov.ph/dfd-l0">
              <div style={{ background: '#ffffff', padding: '10px', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/figures/figure-15-dfd-l0.png" alt="Level 0 DFD" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
            </BrowserFrame>

            <BrowserFrame url="cabanatuan.gov.ph/dfd-l1">
              <div style={{ background: '#ffffff', padding: '10px', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/figures/figure-16-dfd-l1.png" alt="Level 1 DFD" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
            </BrowserFrame>

            <BrowserFrame url="cabanatuan.gov.ph/erd">
              <div style={{ background: '#ffffff', padding: '10px', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/figures/figure-25-erd.png" alt="Entity Relationship Diagram" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
            </BrowserFrame>
          </div>
          <div style={{ marginTop: '10px', fontSize: '12px', color: 'var(--fg-faint)', textAlign: 'center' }}>
            Figures 15, 16, and 25 from Chapter 3: Context Diagram (DFD L0), Detailed Subsystems (DFD L1), and SQLite Relational Schema (ERD).
          </div>
        </div>
      </Slide>

      {/* B6. AI Safety, Guardrails & Token Limits */}
      <Slide
        center
        nav="B6: AI Guardrails"
        notes="Backup slide B6 explains the AI safety framework, token constraints, and prompt engineering guardrails preventing legal advice hallucination."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto', textAlign: 'left' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Backup Slide B6</span>
          <h2 className="headline" style={{ margin: '6px 0 16px 0' }}>
            AI Architecture, Guardrails & Operational Constraints
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: '0 0 10px 0' }}>
                Safety & Hallucination Mitigation
              </h3>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--fg-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Local SQLite Keyword RAG:</strong> Answers are retrieved strictly from uploaded, enacted municipal ordinances.</li>
                <li><strong>No Legal Advice Mandate:</strong> System prompt strictly forbids giving legal counsel; advises consulting City Legal or Barangay Hall.</li>
                <li><strong>Out-of-Scope Redirect:</strong> Automatically declines questions regarding national criminal codes or foreign jurisdictions.</li>
                <li><strong>Mandatory Citations:</strong> Model must cite ordinance numbers, series years, and specific article sections.</li>
              </ul>
            </div>

            <div style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: '0 0 10px 0' }}>
                Cost & Traffic Safeguards
              </h3>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--fg-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Sliding-Window Rate Limiting:</strong> Enforces 20 requests per minute per IP address.</li>
                <li><strong>Prompt Length Cap:</strong> Citizen input capped at 1,000 characters to prevent prompt injection and token flooding.</li>
                <li><strong>Output Budget Cap:</strong> Maximum generation tokens constrained to 500 tokens (~₱0.0528 per interaction).</li>
                <li><strong>Origin Validation:</strong> Strict Next.js API route header validation preventing cross-site scraping.</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* B7. Scope, Delimitations & Municipal Context */}
      <Slide
        center
        nav="B7: Scope & Limits"
        notes="Backup slide B7 outlines the project's institutional scope, technological delimitations, and prerequisites for live deployment."
      >
        <div style={{ maxWidth: 1140, marginInline: 'auto', textAlign: 'left' }}>
          <span className="kicker" style={{ color: 'var(--primary)' }}>Backup Slide B7</span>
          <h2 className="headline" style={{ margin: '6px 0 16px 0' }}>
            Scope, Delimitations & Municipal Deployment Conditions
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '18px' }}>
            <div style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary)', margin: '0 0 8px 0' }}>
                Geographic & Legislative Scope
              </h3>
              <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--fg-muted)', lineHeight: 1.5 }}>
                Specifically tailored to the 89 barangays and Sangguniang Panlungsod of Cabanatuan City, Nueva Ecija.
              </p>
            </div>

            <div style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--accent-gold)', margin: '0 0 8px 0' }}>
                Platform Architecture
              </h3>
              <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--fg-muted)', lineHeight: 1.5 }}>
                Responsive web application (Next.js 16). Does not include native iOS/Android binary apps; accessible via any modern mobile web browser.
              </p>
            </div>

            <div style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--hair-2)', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#38bdf8', margin: '0 0 8px 0' }}>
                Live Deployment Requirements
              </h3>
              <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--fg-muted)', lineHeight: 1.5 }}>
                Transitioning to live municipal operations requires DICT .gov.ph domain assignment, official LGU ordinance resolution, and staff onboarding.
              </p>
            </div>
          </div>
        </div>
      </Slide>
    </Deck>
  );
}
