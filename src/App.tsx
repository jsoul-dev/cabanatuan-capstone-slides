import React from 'react';
import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Reveal from './deck/Reveal';
import Cover from './components/Cover';
import Agenda from './components/Agenda';
import Contrast from './components/Contrast';
import Bento from './components/Bento';
import Split from './components/Split';
import Comparison from './components/Comparison';
import Steps from './components/Steps';
import Team from './components/Team';
import TiltCard from './components/TiltCard';
import CountUp from './components/CountUp';
import Marquee from './components/Marquee';
import StarField from './components/StarField';

/* Helper luxury styles */
const mediaBoxStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'clamp(14px, 2.5vw, 36px)',
  background:
    'radial-gradient(circle at center, rgba(23, 103, 180, 0.18) 0%, rgba(4, 8, 16, 0.94) 85%)',
};

const mediaImgStyle: React.CSSProperties = {
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
  borderRadius: 'var(--radius)',
  boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.92), 0 0 35px rgba(254, 207, 67, 0.18)',
  border: '1px solid var(--hair)',
};

const cardBase: React.CSSProperties = {
  padding: 'clamp(18px, 2vw, 28px)',
  borderRadius: 'var(--radius)',
  background: 'linear-gradient(180deg, var(--surface-2), var(--surface))',
  border: '1px solid var(--hair)',
  boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.75)',
};

export default function App() {
  return (
    <>
      {/* Dynamic Starry Night Canvas Background */}
      <StarField />

      <Deck>
        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 1: COVER (3D FLOATING GOLD MONOGRAM + EDITORIAL SERIF)
            ────────────────────────────────────────────────────────────────── */}
        <Cover
          nav="Cover"
          kicker="BSIT 4-C · IT-WS-06 Web Digital Media · Creative Task #4"
          title={
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'clamp(12px, 1.8vw, 24px)',
              }}
            >
              <div className="float-3d" style={{ position: 'relative' }}>
                <img
                  src="/brand/ST-ORIGINAL-LOGO-TRANSPARENT.png"
                  alt="SCENTALA Tala Monogram Emblem"
                  className="shimmer-gold"
                  style={{
                    width: 'clamp(110px, 11vw, 165px)',
                    height: 'clamp(110px, 11vw, 165px)',
                    objectFit: 'contain',
                    transform: 'translateZ(40px)',
                  }}
                />
              </div>
              <span style={{ letterSpacing: '0.04em' }}>
                SCEN<span className="accent-text">TALA</span>
              </span>
            </div>
          }
          subtitle="A Scent That Outshines the Rest · Official Brand Presentation"
          foot="College of Information and Communications Technology · Ramoso, Bautista, Lemence, Mendoza"
          notes="Good day, esteemed panel and classmates. Today we are proud to present SCENTALA, a proudly homegrown Filipino fragrance brand engineered for our tropical climate. In this Creative Task #4 presentation, we present our complete brand portfolio, synthesizing our business concept from PT-1, our logo design from CT-1, our social media launch from CT-2, and our promotional event poster from CT-3 into a unified, high-impact brand."
        />

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 2: BESPOKE PRESENTATION ROADMAP (5 MILESTONE CARDS)
            ────────────────────────────────────────────────────────────────── */}
        <Slide
          center
          nav="Roadmap"
          notes="Our presentation follows the exact milestone progression of our coursework. Each milestone directly reinforced and elevated the ones before it: from identifying the commuter pain point in PT-1, to sculpting our iconic mark in CT-1, debuting online in CT-2, preparing our physical retail experience in CT-3, and presenting our unified brand in CT-4."
        >
          <div style={{ maxWidth: 1160, width: '100%', marginInline: 'auto' }}>
            <Reveal>
              <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
                Course Curriculum Roadmap · 5 Key Milestones
              </div>
              <h2
                className="headline"
                style={{
                  textAlign: 'center',
                  marginInline: 'auto',
                  marginBottom: 'clamp(16px, 2.4vh, 26px)',
                  fontSize: 'clamp(28px, 3.6vw, 42px)',
                }}
              >
                The Strategic Evolution of <span className="accent-text">SCENTALA</span>
              </h2>
            </Reveal>

            {/* 5 Milestone Cards: 3 on Top Row, 2 on Bottom Row */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.6vh, 18px)' }}>
              {/* Row 1: PT-1, CT-1, CT-2 */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 'clamp(12px, 1.5vw, 18px)',
                }}
              >
                {/* Milestone 1 */}
                <Reveal delay={0.06}>
                  <div className="glass-panel-3d" style={{ padding: 'clamp(14px, 1.6vw, 20px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span className="chip" style={{ color: 'var(--primary)', borderColor: 'var(--hair)' }}>
                        MILESTONE 01
                      </span>
                      <span style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--fg-faint)' }}>PT #1</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(18px, 1.7vw, 22px)', color: 'var(--fg)', marginBottom: 6, fontFamily: 'var(--font-head)' }}>
                      Business Concept
                    </h3>
                    <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0, fontSize: '0.92em' }}>
                      Brand origin (Scent + Tala), heat resilience, commuter demographic (18–35), and value proposition.
                    </p>
                  </div>
                </Reveal>

                {/* Milestone 2 */}
                <Reveal delay={0.12}>
                  <div className="glass-panel-3d" style={{ padding: 'clamp(14px, 1.6vw, 20px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span className="chip" style={{ color: 'var(--primary)', borderColor: 'var(--hair)' }}>
                        MILESTONE 02
                      </span>
                      <span style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--fg-faint)' }}>CT #1</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(18px, 1.7vw, 22px)', color: 'var(--fg)', marginBottom: 6, fontFamily: 'var(--font-head)' }}>
                      Logo & Identity
                    </h3>
                    <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0, fontSize: '0.92em' }}>
                      Pencil draft sketch, S+T flacon monogram, Gestalt principles of Closure & Continuation, and color theory.
                    </p>
                  </div>
                </Reveal>

                {/* Milestone 3 */}
                <Reveal delay={0.18}>
                  <div className="glass-panel-3d" style={{ padding: 'clamp(14px, 1.6vw, 20px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span className="chip" style={{ color: 'var(--primary)', borderColor: 'var(--hair)' }}>
                        MILESTONE 03
                      </span>
                      <span style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--fg-faint)' }}>CT #2</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(18px, 1.7vw, 22px)', color: 'var(--fg)', marginBottom: 6, fontFamily: 'var(--font-head)' }}>
                      First Brand Post
                    </h3>
                    <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0, fontSize: '0.92em' }}>
                      Chiaroscuro lighting, textured volcanic stone base, faceted crystal flacon, and emotional launch copy.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Row 2: CT-3, CT-4 */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 'clamp(12px, 1.5vw, 18px)',
                  maxWidth: 820,
                  width: '100%',
                  marginInline: 'auto',
                }}
              >
                {/* Milestone 4 */}
                <Reveal delay={0.24}>
                  <div className="glass-panel-3d" style={{ padding: 'clamp(14px, 1.6vw, 20px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span className="chip" style={{ color: 'var(--primary)', borderColor: 'var(--hair)' }}>
                        MILESTONE 04
                      </span>
                      <span style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--fg-faint)' }}>CT #3</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(18px, 1.7vw, 22px)', color: 'var(--fg)', marginBottom: 6, fontFamily: 'var(--font-head)' }}>
                      Promotional Event Poster
                    </h3>
                    <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0, fontSize: '0.92em' }}>
                      Signature Launch campaign at SM Cabanatuan City and complementary Sapphire & Gold color harmony.
                    </p>
                  </div>
                </Reveal>

                {/* Milestone 5 */}
                <Reveal delay={0.3}>
                  <div className="glass-panel-3d" style={{ padding: 'clamp(14px, 1.6vw, 20px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span className="chip" style={{ color: 'var(--primary)', borderColor: 'var(--hair)' }}>
                        MILESTONE 05
                      </span>
                      <span style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--fg-faint)' }}>CT #4</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(18px, 1.7vw, 22px)', color: 'var(--fg)', marginBottom: 6, fontFamily: 'var(--font-head)' }}>
                      Creative Synergy & Credits
                    </h3>
                    <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0, fontSize: '0.92em' }}>
                      Cross-task alignment, comprehensive brand presentation deck, and student creators from BSIT 4-C.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 3: PT #1 — THE TROPICAL FRAGRANCE PROBLEM (CONTRAST)
            ────────────────────────────────────────────────────────────────── */}
        <Contrast
          nav="The Problem"
          kicker="PT #1 · Business Concept Development"
          title={<>The Tropical Dilemma:<br />Fading Scents vs. Costly Designer Imports</>}
          left={{
            label: 'The Commuter Dilemma',
            title: 'Tropical Disappointment',
            points: [
              'Budget body sprays and colognes evaporate in high humidity in under 45 minutes.',
              'Imported luxury perfumes cost ₱6,000 to ₱15,000+, far too expensive for daily student wear.',
              'Crowded MRT/LRT commutes, jeepneys, and tropical heat rapidly dissolve low-oil alcohol formulas.',
              'Students and young workers are left carrying bulky decants or settling for smelling flat.',
            ],
          }}
          right={{
            label: 'The SCENTALA Answer',
            title: 'Climate-Resilient Luxury',
            points: [
              'High oil concentration Eau de Parfum (20% to 25%) engineered specifically for Philippine heat.',
              'Enduring 8+ hour sillage and projection tested to withstand sweat, humidity, and crowded commutes.',
              'Honest, accessible pricing structured realistically for students and young professionals.',
              'Original, bespoke olfactory formulations with memorable presence, never synthetic dupes.',
            ],
          }}
          notes="Our business concept originated from a very real, everyday Philippine reality. We noticed that commuters and students face an unfair choice: cheap body sprays that vanish after one jeepney ride, or imported designer perfumes that cost half a month's allowance. Scentala was conceived to eliminate this compromise completely."
        />

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 4: PT #1 — BRAND FOUNDATION & VALUES (BENTO)
            ────────────────────────────────────────────────────────────────── */}
        <Bento
          nav="Identity & Values"
          kicker="PT #1 · Brand Foundation & Philosophy"
          title="Rooted in Heritage, Formulated for Daily Radiance"
          tiles={[
            {
              c: 6,
              r: 1,
              variant: 'accent',
              k: 'Etymology & Origin',
              title: 'Scent + Tala (Star)',
              body: 'A direct fusion of "Scent" and the Tagalog word "Tala," meaning star. Represents radiant guidance, Filipino cultural heritage, and an olfactory presence that shines distinctly above the noise.',
            },
            {
              c: 6,
              r: 1,
              k: 'Brand Tagline',
              title: '“A scent that outshines the rest.”',
              body: 'Our core brand promise to our community: empowering everyday Filipinos to carry an aura of prestige, confidence, and distinction through their most demanding routines.',
            },
            {
              c: 6,
              r: 1,
              k: 'Our Mission',
              title: 'Empowering Everyday Presence',
              body: 'To formulate climate-resilient, oil-rich fragrances tailored for the Filipino lifestyle, empowering students and young professionals to project an unforgettable olfactory presence every single day.',
            },
            {
              c: 6,
              r: 1,
              variant: 'glow',
              k: 'Our Vision',
              title: 'Top Local Perfume Brand',
              body: 'To become the premier homegrown fragrance brand in the Philippines, celebrated nationwide for making authentic luxury-grade scents accessible to everyone.',
            },
          ]}
          notes="The name SCENTALA deliberately embraces our national language: 'Tala' is the star that guides travelers. Our mission and vision establish a sustainable, community-first business model rooted in authentic value rather than predatory luxury markups."
        />

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 5: PT #1 — TARGET AUDIENCE & COMMUTER INSIGHT (SPLIT + 3D TILT STATS)
            ────────────────────────────────────────────────────────────────── */}
        <Split
          nav="Target Market"
          kicker="PT #1 · Target Audience & Lifestyle"
          title="Formulated for the Fast-Paced Filipino Commute"
          body={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <p>
                <strong>Core Demographic:</strong> Young adults aged <strong>18 to 35 years old</strong>,
                comprising college students, aspiring young professionals, BPO associates, and creative
                freelancers.
              </p>
              <p>
                <strong>Geographic Footprint:</strong> Major Philippine urban growth centers, including
                Metro Manila, Cabanatuan City, Central Luzon, Cebu, and Davao, distributed through social
                commerce and experiential retail pop-ups.
              </p>
              <p>
                <strong>The Lifestyle Need:</strong> Commuters who face humid train platforms, long
                walks between campus buildings, and air-conditioned offices. They demand a scent that
                survives tropical weather without midday reapplication.
              </p>
            </div>
          }
          media={
            <div style={mediaBoxStyle}>
              <TiltCard>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 16,
                    width: '100%',
                    maxWidth: 480,
                    padding: 8,
                  }}
                >
                  <div style={cardBase}>
                    <div className="chip" style={{ color: 'var(--primary)', marginBottom: 8 }}>
                      DEMOGRAPHIC
                    </div>
                    <div style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700, color: 'var(--fg)', fontFamily: 'var(--font-head)' }}>
                      18–35
                    </div>
                    <p className="foot" style={{ marginTop: 4 }}>
                      Students & Young Professionals
                    </p>
                  </div>
                  <div style={cardBase}>
                    <div className="chip" style={{ color: 'var(--primary)', marginBottom: 8 }}>
                      LONGEVITY
                    </div>
                    <div style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-head)' }}>
                      <CountUp to={8} suffix="+ Hrs" duration={1200} />
                    </div>
                    <p className="foot" style={{ marginTop: 4 }}>
                      Continuous Projection
                    </p>
                  </div>
                  <div style={cardBase}>
                    <div className="chip" style={{ color: 'var(--primary)', marginBottom: 8 }}>
                      OIL PURITY
                    </div>
                    <div style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700, color: 'var(--fg)', fontFamily: 'var(--font-head)' }}>
                      20–25%
                    </div>
                    <p className="foot" style={{ marginTop: 4 }}>
                      Eau de Parfum Grade
                    </p>
                  </div>
                  <div style={cardBase}>
                    <div className="chip" style={{ color: 'var(--primary)', marginBottom: 8 }}>
                      CLIMATE
                    </div>
                    <div style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-head)' }}>
                      <CountUp to={100} suffix="%" duration={1400} />
                    </div>
                    <p className="foot" style={{ marginTop: 4 }}>
                      Philippine Weather Tested
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>
          }
          notes="Our market analysis is grounded in behavioral empathy. Our target audience spends 2 to 4 hours in daily transit. By engineering a high-concentration formula with 20-25% oil, Scentala stays vivid and fresh from the early morning commute until the evening trip home."
        />

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 6: PT #1 — PRODUCT LINE & COMPETITIVE MATRIX
            ────────────────────────────────────────────────────────────────── */}
        <Slide center nav="Products & Matrix" notes="Here we present our two core SKUs: the 50ml Signature EDP bottle and the 10ml Tala Pocket-Puff Atomizer. Our comparison matrix clearly illustrates our unfair advantage: matching niche luxury concentration while retaining student-friendly affordability.">
          <div style={{ maxWidth: 1060, width: '100%', marginInline: 'auto' }}>
            <Reveal>
              <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
                PT #1 · Product Lineup & Competitive Advantage
              </div>
              <h2
                className="headline shimmer-gold"
                style={{
                  textAlign: 'center',
                  marginInline: 'auto',
                  marginBottom: 'clamp(14px, 2.2vh, 24px)',
                  fontSize: 'clamp(22px, 2.7vw, 34px)',
                  textWrap: 'balance',
                }}
              >
                50ml Signature Flacon &amp; 10ml Tala Pocket-Puff
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Comparison
                cols={['Key Feature / Standard', 'SCENTALA', 'Cheap Fragrance Dupes', 'Niche Luxury Boutiques']}
                highlight={0}
                rows={[
                  {
                    label: 'Fragrance Oil Concentration',
                    values: ['Eau de Parfum (20–25%)', 'Eau de Cologne (3–8%)', 'Parfum (20–30%)'],
                  },
                  { label: 'Tropical Heat & Sweat Resilience', values: [true, false, false] },
                  { label: 'Accessible Daily Wear Pricing', values: [true, true, false] },
                  { label: 'Original Bespoke Olfactory Profile', values: [true, false, true] },
                  { label: 'Portable Pocket-Puff Atomizer (10ml)', values: [true, false, false] },
                  { label: 'Formulated & Tested for PH Weather', values: [true, false, false] },
                ]}
              />
            </Reveal>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 7: CT #1 — LOGO DESIGN IDEATION & DRAFT SKETCH (SPLIT + 3D TILT)
            ────────────────────────────────────────────────────────────────── */}
        <Split
          nav="Logo Process"
          kicker="CT #1 · Logo Design & Process"
          title="From Hand-Drawn Sketch to Regal Brand Emblem"
          body={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <p>
                <strong>Typographic Convergence:</strong> We explored how the initials <strong>S</strong> and{' '}
                <strong>T</strong> from SCENTALA harmonize into a single organic silhouette.
              </p>
              <p>
                <strong>Forming the Flacon:</strong> The sweeping, curvilinear strokes of the letter{' '}
                <strong>S</strong> contour the elegant glass body of a perfume bottle, while the vertical
                column and crossbar of <strong>T</strong> construct its neck and structural nozzle.
              </p>
              <p>
                <strong>The Tala Star:</strong> Floating precisely above the atomizer is the 4-point Tala
                star, honoring Filipino celestial guidance and representing the radiant aura of our scent.
              </p>
              <div
                style={{
                  background: 'var(--surface-2)',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--hair)',
                  color: 'var(--primary)',
                  fontSize: '0.92em',
                }}
              >
                ✦ Refined through multiple manual ink iterations to guarantee legibility from micro-icons to billboards.
              </div>
            </div>
          }
          media={
            <div style={mediaBoxStyle}>
              <TiltCard>
                <img
                  src="/brand/CT-1-Sketch-Draft-Logo.png"
                  alt="SCENTALA Hand-Drawn Logo Sketch and Ideation Draft"
                  style={mediaImgStyle}
                />
              </TiltCard>
            </div>
          }
          notes="In Creative Task 1, before opening digital vector software, our team brainstormed through hand sketching. On the right is our actual submission draft. We explored how the letter S could form the curving flank of a perfume flacon, while T provides the cap and backbone, topped by the guiding Tala star."
        />

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 8: CT #1 — PRIMARY & SECONDARY LOGO SYSTEM (3D TILT CARDS)
            ────────────────────────────────────────────────────────────────── */}
        <Slide center nav="Logo System" notes="Here is the finalized digital identity. On the left is our Primary Monogram Badge: a gold emblem on a rounded obsidian squircle for app icons, social avatars, and bottle embossing. On the right is our Secondary Master Lockup: combining the monogram with our editorial serif wordmark and official brand tagline.">
          <div style={{ maxWidth: 1040, width: '100%', marginInline: 'auto' }}>
            <Reveal>
              <div className="kicker" style={{ textAlign: 'center', marginBottom: 10 }}>
                CT #1 · Visual Identity Architecture
              </div>
              <h2
                className="headline"
                style={{
                  textAlign: 'center',
                  marginInline: 'auto',
                  marginBottom: 'clamp(20px, 3vh, 32px)',
                  maxWidth: '32ch',
                  textWrap: 'balance',
                }}
              >
                Primary Monogram &amp;<br />Secondary Master Lockup
              </h2>
            </Reveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
                gap: 'clamp(18px, 2.5vw, 32px)',
              }}
            >
              <Reveal delay={0.08}>
                <TiltCard>
                  <div style={{ ...cardBase, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '100%',
                        height: 230,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'radial-gradient(circle, rgba(23,103,180,0.25) 0%, rgba(0,0,0,0.6) 80%)',
                        borderRadius: 'var(--radius-sm)',
                        padding: 16,
                        marginBottom: 16,
                        border: '1px solid var(--hair-2)',
                      }}
                    >
                      <img
                        src="/brand/ST-ORIGINAL-LOGO-TRANSPARENT.png"
                        alt="SCENTALA Gold Monogram"
                        className="float-3d shimmer-gold"
                        style={{ maxHeight: '85%', maxWidth: '85%', objectFit: 'contain' }}
                      />
                    </div>
                    <h3 style={{ fontSize: 20, color: 'var(--fg)', marginBottom: 6 }}>
                      Primary Tala Monogram Emblem
                    </h3>
                    <p className="foot" style={{ textAlign: 'center', lineHeight: 1.5 }}>
                      Transparent gold emblem engineered for social media avatars, mobile app icons,
                      flacon cap engravings, and metallic wax seals.
                    </p>
                  </div>
                </TiltCard>
              </Reveal>

              <Reveal delay={0.16}>
                <TiltCard>
                  <div style={{ ...cardBase, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '100%',
                        height: 230,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'radial-gradient(circle, rgba(23,103,180,0.25) 0%, rgba(0,0,0,0.6) 80%)',
                        borderRadius: 'var(--radius-sm)',
                        padding: 16,
                        marginBottom: 16,
                        border: '1px solid var(--hair-2)',
                      }}
                    >
                      <img
                        src="/brand/CT-1-Secondary-Logo-Final.png"
                        alt="SCENTALA Secondary Logo Lockup"
                        style={{ maxHeight: '90%', maxWidth: '90%', objectFit: 'contain' }}
                      />
                    </div>
                    <h3 style={{ fontSize: 20, color: 'var(--fg)', marginBottom: 6 }}>
                      Secondary Master Lockup
                    </h3>
                    <p className="foot" style={{ textAlign: 'center', lineHeight: 1.5 }}>
                      The definitive brand signature pairing the ST emblem with the high-contrast serif
                      wordmark SCENTALA and the official tagline: “A SCENT THAT OUTSHINES THE REST”.
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            </div>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 9: CT #1 — GESTALT PRINCIPLES & COLOR PSYCHOLOGY (BENTO)
            ────────────────────────────────────────────────────────────────── */}
        <Bento
          nav="Gestalt Theory"
          kicker="CT #1 · Design Psychology & Gestalt Principles"
          title={<>Closure, Continuation &<br />Royal Color Psychology</>}
          tiles={[
            {
              c: 6,
              r: 1,
              variant: 'accent',
              k: 'Gestalt Principle 01',
              title: 'Law of Closure',
              body: 'The logo contains no explicit bottle perimeter outline. Instead, the human mind instinctively bridges the open negative space between the curves of S and T, perceiving a whole, harmonious perfume bottle.',
            },
            {
              c: 6,
              r: 1,
              k: 'Gestalt Principle 02',
              title: 'Law of Continuation',
              body: 'The sweeping, ascending curves of the lower S propel the viewer’s visual gaze upward through the vertical shaft of T, directly guiding attention to the radiant Tala star at the zenith.',
            },
            {
              c: 6,
              r: 1,
              k: 'Color Psychology',
              title: 'Royal Gold (#FECF43 / #D4AF37)',
              body: 'Gold communicates prestige, solar warmth, and luxury. It directly embodies our promise: bringing high-end elegance into the daily lifestyle of students and young professionals.',
            },
            {
              c: 6,
              r: 1,
              variant: 'glow',
              k: 'Surface Psychology',
              title: 'Midnight Obsidian (#050B14)',
              body: 'The dark navy-black backdrop establishes dramatic contrast, projecting depth, intimacy, and nocturnal allure. Ensures optimum legibility across digital screens and physical packaging.',
            },
          ]}
          notes="Our logo incorporates two fundamental Gestalt principles. Closure engages the brain by letting viewers complete the bottle silhouette mentally, which increases memory retention. Continuation creates an upward kinetic flow resembling rising fragrance molecules."
        />

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 10: CT #2 — FIRST EVER BRAND POST (SPLIT + 3D TILT)
            ────────────────────────────────────────────────────────────────── */}
        <Split
          nav="Social Debut"
          kicker="CT #2 · Social Media Launch Campaign"
          title="The Official Debut: A Scent That Outshines the Rest"
          body={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="chip" style={{ width: 'fit-content', color: 'var(--primary)' }}>
                OFFICIAL LAUNCH POST & CAPTION
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--fg)', fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.5 }}>
                “SCENTALA IS HERE. And we did not create it for you to simply smell good. We created it for
                the moment someone catches your scent and thinks: <em>‘What are you wearing?’</em>”
              </p>
              <p>
                <strong>Visual Direction:</strong> Dramatic overhead chiaroscuro lighting cuts through deep shadow,
                illuminating a dark sapphire glass bottle with a faceted crystal cap resting upon raw volcanic obsidian.
              </p>
              <p>
                <strong>Copy Strategy:</strong> Moves away from transactional sales language. Focuses on
                the emotional thrill of personal allure, self-assurance, and lasting presence in the tropical heat.
              </p>
              <div
                style={{
                  background: 'var(--surface-2)',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--hair)',
                  color: 'var(--primary)',
                  fontSize: '0.92em',
                }}
              >
                ✦ “Because a beautiful scent deserves more than a passing moment. It deserves to stay.”
              </div>
            </div>
          }
          media={
            <div style={mediaBoxStyle}>
              <TiltCard>
                <img
                  src="/brand/CT-2-First-Ever-Brand-Post.png"
                  alt="SCENTALA First Ever Brand Post Visual"
                  style={mediaImgStyle}
                />
              </TiltCard>
            </div>
          }
          notes="For Creative Task 2, we debuted SCENTALA to the world on social media. The visual features dramatic chiaroscuro lighting on raw volcanic stone. Rather than talking about chemicals, our caption connects with human emotion: that exact moment someone pauses to ask, 'What are you wearing?'"
        />

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 11: CT #3 — PROMOTIONAL EVENT POSTER (SPLIT + 3D TILT)
            ────────────────────────────────────────────────────────────────── */}
        <Split
          nav="Event Poster"
          kicker="CT #3 · Promotional Event Poster"
          title="Signature Launch: Tactile Retail Experience"
          body={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p>
                <strong>Concept & Strategy:</strong> While social media drives curiosity,
                fragrance is an intimate sensory art that must be tested on warm skin. We conceived the
                <strong> “SIGNATURE LAUNCH”</strong> pop-up to engage our audience in person.
              </p>
              <p>
                <strong>Venue & Date:</strong> <strong>SM Department Store, Cabanatuan City, Nueva Ecija</strong>{' '}
                on <strong>October 02, 2026</strong>: the premier commercial crossroads of Central Luzon,
                highly accessible to students, young professionals, and daily commuters.
              </p>
              <div
                style={{
                  background: 'var(--surface-2)',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--hair-2)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                }}
              >
                <div style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)', fontWeight: 600 }}>
                  Visual Hierarchy Breakdown
                </div>
                <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 4, color: 'var(--fg-muted)', fontSize: '0.94em' }}>
                  <li>
                    <strong style={{ color: 'var(--fg)' }}>High-Fashion Serif:</strong> Headlines “SIGNATURE LAUNCH” with editorial prestige.
                  </li>
                  <li>
                    <strong style={{ color: 'var(--fg)' }}>Condensed Sans:</strong> Vertical “LIMITED EDITION · OCTOBER 02, 2026” aids distance reading.
                  </li>
                  <li>
                    <strong style={{ color: 'var(--fg)' }}>Action Callout:</strong> “MAKE YOUR PRESENCE FELT” drives immediate trial.
                  </li>
                </ul>
              </div>
            </div>
          }
          media={
            <div style={mediaBoxStyle}>
              <TiltCard>
                <img
                  src="/brand/CT-3-Promotional-Event-Poster.png"
                  alt="SCENTALA Promotional Event Poster"
                  style={mediaImgStyle}
                />
              </TiltCard>
            </div>
          }
          notes="For Creative Task 3, our thought process bridged digital storytelling into physical reality. A scent must be tested in real life. We selected SM Cabanatuan City as the venue because it sits at the crossroads of academic campuses and urban retail in Nueva Ecija."
        />

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 12: CT #3 — POSTER COLOR HARMONY & THEORY (SPLIT + 3D TILT)
            ────────────────────────────────────────────────────────────────── */}
        <Split
          nav="Color Harmony"
          kicker="CT #3 · Color Theory & Visual Harmony"
          title={<>Complementary Color Scheme:<br />Sapphire & Gold</>}
          body={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p>
                <strong>Complementary Harmony:</strong> The poster layout is systematically anchored on
                opposing poles of the traditional color wheel:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBlock: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(23,103,180,0.22)', padding: '5px 10px', borderRadius: 8, border: '1px solid #1767B4' }}>
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#1767B4' }} />
                  <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)' }}>#1767B4 · Sapphire</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(10,45,85,0.3)', padding: '5px 10px', borderRadius: 8, border: '1px solid #0A2D55' }}>
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#0A2D55' }} />
                  <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)' }}>#0A2D55 · Midnight</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(254,207,67,0.22)', padding: '5px 10px', borderRadius: 8, border: '1px solid #FECF43' }}>
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FECF43' }} />
                  <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>#FECF43 · Gold</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(199,202,207,0.15)', padding: '5px 10px', borderRadius: 8, border: '1px solid #C7CACF' }}>
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#C7CACF' }} />
                  <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)' }}>#C7CACF · Platinum</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(1,2,4,0.65)', padding: '5px 10px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.16)' }}>
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#010204', border: '1px solid rgba(255,255,255,0.35)' }} />
                  <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)' }}>#010204 · Obsidian Black</span>
                </div>
              </div>
              <p>
                <strong>Optical Energy:</strong> Cool sapphire tones evoke oceanic depth, coolness, and
                serenity, while warm radiant gold vibrates with solar brilliance and the guiding Tala star.
              </p>
              <p>
                <strong>Mall Environment Legibility:</strong> Jet Black (#010204) and Platinum Silver (#C7CACF)
                act as high-contrast anchors, exceeding a 10:1 contrast ratio to guarantee crisp readability amidst
                the bustling visual noise of department store foot traffic.
              </p>
            </div>
          }
          media={
            <div style={mediaBoxStyle}>
              <TiltCard>
                <img
                  src="/brand/CT-3-Promotional-Event-Poster-With-Color-Scheme.png"
                  alt="SCENTALA Promotional Event Poster with Complementary Color Scheme Diagram"
                  style={mediaImgStyle}
                />
              </TiltCard>
            </div>
          }
          notes="Here we analyze the precise color theory behind the poster. By adopting a complementary scheme, pairing cool sapphire blue against warm gold across the color wheel, we produce an optical vibration that commands immediate visual attention from shoppers across the mall floor."
        />

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 13: CREATIVE SYNTHESIS — THE INTEGRATED PIPELINE (STEPS)
            ────────────────────────────────────────────────────────────────── */}
        <Steps
          nav="Creative Synergy"
          kicker="Holistic Synthesis & Cross-Task Alignment"
          title={<>Four Milestones,<br />One Cohesive Brand Identity</>}
          items={[
            {
              title: '1. Foundation (PT #1)',
              body: 'Diagnosed the commuter fragrance dilemma, defined our 18 to 35 audience, formulated climate-resilient values, and planned our 50ml EDP and 10ml Tala atomizers.',
            },
            {
              title: '2. Identity (CT #1)',
              body: 'Sculpted the S+T perfume flacon silhouette, integrated the Tala star, and applied the Gestalt principles of Closure and Continuation with royal gold coloration.',
            },
            {
              title: '3. Digital Voice (CT #2)',
              body: 'Debuted our social presence with dramatic volcanic rock photography, luxury crystal cap rendering, and resonant, emotionally provocative launch copy.',
            },
            {
              title: '4. Retail Activation (CT #3)',
              body: 'Mobilized a real-world sensory launch at SM Cabanatuan City, employing high-contrast typography and complementary color wheel harmony.',
            },
          ]}
          notes="Notice how seamlessly our coursework interlocks. None of these four creative tasks existed in a vacuum. PT-1 identified the strategic market gap, CT-1 built our visual hallmark, CT-2 generated digital anticipation, and CT-3 provided a physical retail destination for our customers."
        />

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 14: THE CREATORS / TEAM
            ────────────────────────────────────────────────────────────────── */}
        <Team
          nav="Project Team"
          kicker="College of Information and Communications Technology · IT-WS-06"
          title={<>The Creators Behind SCENTALA · <span style={{ whiteSpace: 'nowrap' }}>BSIT 4‑C</span></>}
          people={[
            {
              name: 'Kerby S. Bautista',
              role: 'Brand Strategy & Creative Direction',
            },
            {
              name: 'John Carlo D.G. Lemence',
              role: 'Visual Identity & Graphic Design',
            },
            {
              name: 'Eiron Jaynald P. Mendoza',
              role: 'Copywriting & Concept Architecture',
            },
            {
              name: 'John Mathew T. Ramoso',
              role: 'Production & Digital Media Management',
            },
          ]}
          notes="This project represents the dedicated collaborative work of our group: Kerby Bautista on brand strategy, John Carlo Lemence on visual graphics, Eiron Jaynald Mendoza on copywriting and narrative architecture, and John Mathew Ramoso on digital media asset management."
        />

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 15: CONCLUSION & Q&A (3D TALA EMBLEM + MARQUEE)
            ────────────────────────────────────────────────────────────────── */}
        <Slide center nav="Conclusion" notes="We would like to express our deepest gratitude to our professors, mentors, and fellow BSIT students for your time and attention today. We now enthusiastically open the floor to any questions, suggestions, or comments from the panel.">
          <div style={{ maxWidth: 880, width: '100%', marginInline: 'auto', textAlign: 'center' }}>
            <Reveal>
              <div className="float-3d" style={{ marginBottom: 12 }}>
                <img
                  src="/brand/ST-ORIGINAL-LOGO-TRANSPARENT.png"
                  alt="SCENTALA Tala Monogram Emblem"
                  className="shimmer-gold"
                  style={{
                    width: 'clamp(80px, 8vw, 110px)',
                    height: 'clamp(80px, 8vw, 110px)',
                    objectFit: 'contain',
                    marginInline: 'auto',
                  }}
                />
              </div>
              <div className="kicker" style={{ textAlign: 'center', marginBottom: 10 }}>
                SCENTALA · Creative Task #4 Conclusion
              </div>
              <h1
                className="display"
                style={{
                  fontSize: 'clamp(28px, 4.3vw, 56px)',
                  lineHeight: 1.12,
                  marginBottom: 18,
                  textWrap: 'balance',
                }}
              >
                A Scent That <span className="accent-text">Outshines</span> The Rest.
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p
                className="lead"
                style={{
                  marginInline: 'auto',
                  marginBottom: 24,
                  maxWidth: '40ch',
                }}
              >
                Thank you for exploring our brand journey. We are now open for questions, feedback, and discussion.
              </p>
            </Reveal>

            {/* Luxury Continuous Marquee Ribbon */}
            <Reveal delay={0.14}>
              <div style={{ marginBlock: 16 }}>
                <Marquee
                  items={[
                    'SCENTALA HAUTE PARFUMERIE',
                    '50ML SIGNATURE FLACON',
                    '10ML TALA POCKET-PUFF',
                    'OCTOBER 02, 2026',
                    'SM CABANATUAN CITY',
                    'EAU DE PARFUM 20-25%',
                    'FILIPINO HERITAGE',
                    'BSIT 4-C',
                  ]}
                  duration={24}
                />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 20,
                  padding: '12px 26px',
                  borderRadius: 'var(--radius)',
                  background: 'linear-gradient(180deg, var(--surface-2), var(--surface))',
                  border: '1px solid var(--hair)',
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.7)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--primary)', fontSize: 16 }}>✦</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>
                    scentala.netlify.app
                  </span>
                </div>
                <span style={{ color: 'var(--hair)' }}>|</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 13, color: 'var(--fg-muted)' }}>
                    BSIT 4-C · 1st Semester · CICT
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Slide>
      </Deck>
    </>
  );
}
