import { useState, useEffect } from 'react';
import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Reveal from './deck/Reveal';
import TiltCard from './components/TiltCard';
import StarField from './components/StarField';
import Marquee from './components/Marquee';
import Comparison from './components/Comparison';
import CountUp from './components/CountUp';
import EditorialBar from './components/EditorialBar';
import LogoAnatomy from './components/LogoAnatomy';

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'pt1' | 'ct1' | 'ct2' | 'ct3'>('all');

  useEffect(() => {
    // Keep ambient atmosphere subtle
  }, []);

  const cardBaseStyle = {
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
    borderRadius: 'var(--radius)',
    border: '1px solid var(--hair-2)',
    boxShadow: '0 25px 50px -15px rgba(0, 0, 0, 0.8)',
    padding: 'clamp(18px, 2.2vw, 26px)',
  };

  return (
    <>
      <StarField count={45} />
      <Deck>
        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 1: COVER / KEYNOTE HERO (Inspired by Image 3 - GOODEST Keynote)
            ────────────────────────────────────────────────────────────────── */}
        <Slide nav="Cover" notes="Welcome to our brand presentation for SCENTALA. Today, we are presenting our complete semester journey across Performance Task 1 and Creative Tasks 1 through 4, formulated as a luxury fragrance brand pitch deck.">
          <div style={{ maxWidth: 1180, width: '100%', marginInline: 'auto' }}>
            <EditorialBar category="Creative Task #4 · Brand Presentation" page="01 / 16" />
            
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.15fr 0.85fr',
                gap: 'clamp(24px, 4vw, 54px)',
                alignItems: 'center',
              }}
            >
              {/* Left Column: Massive Editorial Typography */}
              <div>
                <Reveal>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '5px 14px',
                      borderRadius: 999,
                      border: '1px solid var(--hair)',
                      background: 'rgba(254, 207, 67, 0.08)',
                      marginBottom: 16,
                    }}
                  >
                    <span style={{ color: 'var(--primary)', fontSize: 13 }}>✦</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11.5,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--primary)',
                      }}
                    >
                      Haute Parfumerie · Manila
                    </span>
                  </div>

                  <h1
                    className="display"
                    style={{
                      fontSize: 'clamp(42px, 5.8vw, 82px)',
                      lineHeight: 1.02,
                      letterSpacing: '-0.04em',
                      marginBottom: 20,
                    }}
                  >
                    The Scent of <br />
                    <span className="accent-text">Self-Expression.</span>
                  </h1>

                  <p
                    className="lead"
                    style={{
                      fontSize: 'clamp(16px, 1.8vw, 22px)',
                      color: 'var(--fg-muted)',
                      maxWidth: '34ch',
                      lineHeight: 1.5,
                      marginBottom: 28,
                    }}
                  >
                    Crafted for the tropical climate. Engineered with 20–25% Eau de Parfum oil concentration to outshine the rest.
                  </p>
                </Reveal>

                <Reveal delay={0.12}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    <span className="chip" style={{ color: 'var(--primary)', borderColor: 'var(--hair)' }}>
                      50ML EXTRAIT DE PARFUM
                    </span>
                    <span className="chip" style={{ color: 'var(--fg-faint)', borderColor: 'var(--hair-2)' }}>
                      10ML TALA POCKET-PUFF
                    </span>
                    <span className="chip" style={{ color: 'var(--fg-faint)', borderColor: 'var(--hair-2)' }}>
                      BSIT 4-C · CICT
                    </span>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Hero Generated Bottle on Volcanic Basalt */}
              <Reveal delay={0.16}>
                <TiltCard>
                  <div
                    className="editorial-frame"
                    style={{
                      aspectRatio: '16/10',
                      maxHeight: 460,
                      position: 'relative',
                      border: '1px solid rgba(254, 207, 67, 0.25)',
                    }}
                  >
                    <img
                      src="/brand/generated-hero-bottle.jpg"
                      alt="SCENTALA Signature Sapphire Bottle on Volcanic Basalt"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, transparent 65%, rgba(4,8,16,0.85) 100%)',
                        pointerEvents: 'none',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 14,
                        left: 18,
                        right: 18,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)' }}>
                        FIGURE 01 · SIGNATURE FLACON
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--primary)' }}>
                        20–25% OIL PURITY
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            </div>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 2: THE 4 MILESTONES (Inspired by Image 2 - 3-Card Architecture)
            ────────────────────────────────────────────────────────────────── */}
        <Slide nav="Architecture" notes="Here is the structural framework of our semester presentation. None of these tasks existed in a silo: PT-1 analyzed the commuter market problem; CT-1 shaped our S+T flacon hallmark; CT-2 established our social narrative; and CT-3 delivered our tactile retail activation.">
          <div style={{ maxWidth: 1180, width: '100%', marginInline: 'auto' }}>
            <EditorialBar category="Executive Synthesis · Creative Roadmap" page="02 / 16" />

            <Reveal>
              <div style={{ marginBottom: 'clamp(18px, 2.5vh, 32px)' }}>
                <div className="kicker" style={{ marginBottom: 6 }}>
                  Integrated Creative Pipeline
                </div>
                <h2
                  className="headline"
                  style={{
                    fontSize: 'clamp(28px, 3.8vw, 48px)',
                    maxWidth: '32ch',
                    margin: 0,
                  }}
                >
                  Four Milestones, One Cohesive Brand Architecture
                </h2>
              </div>
            </Reveal>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 'clamp(12px, 1.6vw, 20px)',
              }}
            >
              {/* Card 1: PT #1 */}
              <Reveal delay={0.08}>
                <div className="editorial-card-tall" style={{ minHeight: 320 }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span className="chip" style={{ color: 'var(--primary)', borderColor: 'var(--hair)' }}>
                        PT #1
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-faint)' }}>01</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(18px, 1.6vw, 22px)', color: 'var(--fg)', fontFamily: 'var(--font-head)', margin: '0 0 8px' }}>
                      Concept Architecture
                    </h3>
                    <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.6, margin: 0, fontSize: '0.9em' }}>
                      Market gap diagnosis, 18–35 demographic profiling, climate formulation, and 50ml + 10ml product matrix.
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid var(--hair-2)', paddingTop: 10, marginTop: 14 }}>
                    <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>
                      FOUNDATION & ETHOS
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Card 2: CT #1 */}
              <Reveal delay={0.16}>
                <div className="editorial-card-tall" style={{ minHeight: 320 }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span className="chip" style={{ color: 'var(--primary)', borderColor: 'var(--hair)' }}>
                        CT #1
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-faint)' }}>02</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(18px, 1.6vw, 22px)', color: 'var(--fg)', fontFamily: 'var(--font-head)', margin: '0 0 8px' }}>
                      Visual Identity
                    </h3>
                    <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.6, margin: 0, fontSize: '0.9em' }}>
                      Pencil draft sketch, S+T flacon monogram, Gestalt Closure & Continuation, and royal color theory.
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid var(--hair-2)', paddingTop: 10, marginTop: 14 }}>
                    <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>
                      HALLMARK EMBLEM
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Card 3: CT #2 */}
              <Reveal delay={0.24}>
                <div className="editorial-card-tall" style={{ minHeight: 320 }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span className="chip" style={{ color: 'var(--primary)', borderColor: 'var(--hair)' }}>
                        CT #2
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-faint)' }}>03</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(18px, 1.6vw, 22px)', color: 'var(--fg)', fontFamily: 'var(--font-head)', margin: '0 0 8px' }}>
                      Digital Voice
                    </h3>
                    <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.6, margin: 0, fontSize: '0.9em' }}>
                      Overhead chiaroscuro lighting, raw volcanic stone base, faceted crystal cap, and provocative launch copy.
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid var(--hair-2)', paddingTop: 10, marginTop: 14 }}>
                    <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>
                      SOCIAL DEBUT
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Card 4: CT #3 */}
              <Reveal delay={0.32}>
                <div className="editorial-card-tall" style={{ minHeight: 320 }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span className="chip" style={{ color: 'var(--primary)', borderColor: 'var(--hair)' }}>
                        CT #3
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-faint)' }}>04</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(18px, 1.6vw, 22px)', color: 'var(--fg)', fontFamily: 'var(--font-head)', margin: '0 0 8px' }}>
                      Retail Activation
                    </h3>
                    <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.6, margin: 0, fontSize: '0.9em' }}>
                      Signature Launch campaign at SM Cabanatuan City, high-contrast typography, and complementary harmony.
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid var(--hair-2)', paddingTop: 10, marginTop: 14 }}>
                    <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>
                      TACTILE POP-UP
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 3: THE $90B+ INDUSTRY & MARKET OPPORTUNITY (Inspired by Image 1)
            ────────────────────────────────────────────────────────────────── */}
        <Slide nav="Market" notes="Looking at the macro landscape, fragrance is experiencing an explosive global boom. Consumers no longer buy scents merely to mask odors; fragrance is now an intimate pillar of personal brand and identity. In the Philippines, commuters demand longevity that imported brands fail to deliver at reasonable prices.">
          <div style={{ maxWidth: 1180, width: '100%', marginInline: 'auto' }}>
            <EditorialBar category="PT #1 · The Fragrance Industry" page="03 / 16" />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.1fr 0.9fr',
                gap: 'clamp(24px, 4vw, 50px)',
                alignItems: 'center',
              }}
            >
              <div>
                <Reveal>
                  <div className="kicker" style={{ marginBottom: 6 }}>
                    Global Industry Dynamics &amp; Opportunity
                  </div>
                  <h2
                    className="headline"
                    style={{
                      fontSize: 'clamp(26px, 3.4vw, 44px)',
                      lineHeight: 1.08,
                      marginBottom: 20,
                    }}
                  >
                    Fragrance is now a key part of personal identity, powering a $90B+ market.
                  </h2>
                </Reveal>

                <Reveal delay={0.1}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 16,
                      marginBottom: 20,
                    }}
                  >
                    <div style={cardBaseStyle}>
                      <div className="editorial-stat-hero shimmer-gold">
                        $90B+
                      </div>
                      <div className="editorial-stat-label">
                        Global Fragrance Market
                      </div>
                      <p className="foot" style={{ margin: 0, fontSize: '0.86em', color: 'var(--fg-muted)' }}>
                        Growing 5–7% annually with niche artisanal brands outpacing designer conglomerates.
                      </p>
                    </div>

                    <div style={cardBaseStyle}>
                      <div className="editorial-stat-hero" style={{ color: 'var(--primary)' }}>
                        20–25%
                      </div>
                      <div className="editorial-stat-label">
                        Extrait de Parfum Grade
                      </div>
                      <p className="foot" style={{ margin: 0, fontSize: '0.86em', color: 'var(--fg-muted)' }}>
                        High-concentration oil purity vs. 3–5% mass colognes that fade in Philippine humidity.
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.16}>
                  <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.6, margin: 0, fontSize: '0.94em' }}>
                    Consumers are increasingly seeking niche brands that combine authentic formulation with emotional storytelling. Scentala bridges this exact gap: offering extrait-grade luxury sillage tailored to Philippine commutes.
                  </p>
                </Reveal>
              </div>

              {/* Right: Formulation Lab Macro Shot */}
              <Reveal delay={0.18}>
                <TiltCard>
                  <div className="editorial-frame" style={{ aspectRatio: '4/3', border: '1px solid var(--hair-2)' }}>
                    <img
                      src="/brand/generated-perfume-lab.jpg"
                      alt="Artisanal perfume formulation with amber oil and pipette"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        insetInline: 0,
                        background: 'linear-gradient(180deg, transparent 40%, rgba(4,8,16,0.9) 100%)',
                        padding: '16px 20px',
                      }}
                    >
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                        PRECISION OLFACTORY CRAFTSMANSHIP
                      </div>
                      <div style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 2 }}>
                        Original bespoke accords engineered for tropical skin evaporation rates.
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            </div>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 4: THE TROPICAL DILEMMA (Inspired by Image 1 & 4)
            ────────────────────────────────────────────────────────────────── */}
        <Slide nav="The Dilemma" notes="Our business concept originated from an unfair compromise in Philippine daily life. Commuters must choose between cheap body sprays that disappear after 45 minutes, or imported designer perfumes that cost half a month's allowance. Scentala was created to eliminate this compromise completely.">
          <div style={{ maxWidth: 1180, width: '100%', marginInline: 'auto' }}>
            <EditorialBar category="PT #1 · Business Concept Development" page="04 / 16" />

            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: 'clamp(20px, 3vh, 32px)' }}>
                <div className="kicker" style={{ marginBottom: 6 }}>
                  The Core Market Problem
                </div>
                <h2
                  className="headline"
                  style={{
                    fontSize: 'clamp(26px, 3.4vw, 44px)',
                    maxWidth: '38ch',
                    marginInline: 'auto',
                    textAlign: 'center',
                  }}
                >
                  The Tropical Dilemma:<br />
                  Fading Scents vs. Costly Designer Imports
                </h2>
              </div>
            </Reveal>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(16px, 2.2vw, 28px)',
              }}
            >
              {/* Left Panel: Commuter Dilemma */}
              <Reveal delay={0.1}>
                <div
                  style={{
                    ...cardBaseStyle,
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span className="chip" style={{ alignSelf: 'flex-start', color: 'var(--fg-faint)', borderColor: 'var(--hair-2)' }}>
                        THE COMMUTER DILEMMA
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-faint)' }}>BEFORE</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(20px, 2vw, 26px)', color: 'var(--fg)', fontFamily: 'var(--font-head)', margin: '0 0 14px' }}>
                      Tropical Disappointment
                    </h3>
                    <ul style={{ paddingLeft: 18, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, color: 'var(--fg-muted)', fontSize: '0.94em', lineHeight: 1.5 }}>
                      <li>Budget colognes &amp; body sprays evaporate in high tropical humidity in under 45 minutes.</li>
                      <li>Imported luxury perfumes cost ₱6,000 to ₱15,000+, far too expensive for daily student wear.</li>
                      <li>Crowded MRT/LRT transit, jeepneys, and sweat dissolve low-oil alcohol formulas immediately.</li>
                      <li>Students and young commuters are forced to carry bulky decants or settle for smelling flat.</li>
                    </ul>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 12, marginTop: 18, color: 'var(--fg-faint)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>
                    ✕ STATUS QUO MARKET INEFFICIENCY
                  </div>
                </div>
              </Reveal>

              {/* Right Panel: The SCENTALA Answer */}
              <Reveal delay={0.18}>
                <div
                  style={{
                    ...cardBaseStyle,
                    background: 'linear-gradient(180deg, rgba(23,103,180,0.18) 0%, rgba(4,8,16,0.8) 100%)',
                    borderColor: 'rgba(254, 207, 67, 0.35)',
                    boxShadow: '0 30px 60px -20px rgba(0,0,0,0.9), 0 0 35px rgba(254,207,67,0.15)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span className="chip" style={{ alignSelf: 'flex-start', color: 'var(--primary)', borderColor: 'var(--hair)' }}>
                        THE SCENTALA ANSWER
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--primary)' }}>INNOVATION</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(20px, 2vw, 26px)', color: 'var(--fg)', fontFamily: 'var(--font-head)', margin: '0 0 14px' }}>
                      Climate-Resilient Luxury
                    </h3>
                    <ul style={{ paddingLeft: 18, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, color: 'var(--fg)', fontSize: '0.94em', lineHeight: 1.5 }}>
                      <li>High oil concentration Eau de Parfum (20% to 25%) engineered specifically for Philippine heat.</li>
                      <li>Enduring 8+ hour sillage and projection tested to withstand sweat, humidity, and long commutes.</li>
                      <li>Accessible, honest pricing structured realistically for students and young professionals (₱499–₱1,499).</li>
                      <li>Original, bespoke olfactory formulations with memorable presence, never synthetic dupes.</li>
                    </ul>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(254,207,67,0.2)', paddingTop: 12, marginTop: 18, color: 'var(--primary)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>
                    ✓ FORMULATED TO OUTSHINE THE REST
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 5: TARGET DEMOGRAPHIC & COMMUTER INSIGHT (Inspired by Image 1 & 2)
            ────────────────────────────────────────────────────────────────── */}
        <Slide nav="Target Market" notes="Our demographic research reveals that young urban Filipinos spend 2 to 4 hours in daily transit. Our core audience of 18 to 35 demands high-impact olfactory presence that lasts from morning classes to evening social gatherings.">
          <div style={{ maxWidth: 1180, width: '100%', marginInline: 'auto' }}>
            <EditorialBar category="PT #1 · Target Audience & Lifestyle" page="05 / 16" />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(24px, 4vw, 54px)',
                alignItems: 'center',
              }}
            >
              <div>
                <Reveal>
                  <div className="kicker" style={{ marginBottom: 6 }}>
                    Demographic Architecture
                  </div>
                  <h2
                    className="headline"
                    style={{
                      fontSize: 'clamp(26px, 3.4vw, 44px)',
                      marginBottom: 16,
                      maxWidth: '28ch',
                    }}
                  >
                    Formulated for the Fast-Paced Filipino Commute
                  </h2>
                  <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.6, marginBottom: 20, fontSize: '0.94em' }}>
                    Designed for everyday strivers: college students navigating humid campuses, young corporate associates, and creative freelancers in major growth hubs across Metro Manila, Cabanatuan City, and Central Luzon.
                  </p>
                </Reveal>

                {/* 3 Metric Cards matching Image 1 */}
                <Reveal delay={0.12}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                    <div style={{ ...cardBaseStyle, padding: 14 }}>
                      <div className="editorial-stat-hero" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}>
                        18–35
                      </div>
                      <div className="editorial-stat-label" style={{ fontSize: 10 }}>
                        CORE AGE
                      </div>
                      <div style={{ fontSize: 11.5, color: 'var(--fg-muted)' }}>
                        Students &amp; Associates
                      </div>
                    </div>

                    <div style={{ ...cardBaseStyle, padding: 14 }}>
                      <div className="editorial-stat-hero" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', color: 'var(--primary)' }}>
                        <CountUp to={8} suffix="+ Hrs" duration={1200} />
                      </div>
                      <div className="editorial-stat-label" style={{ fontSize: 10 }}>
                        LONGEVITY
                      </div>
                      <div style={{ fontSize: 11.5, color: 'var(--fg-muted)' }}>
                        Commute Projection
                      </div>
                    </div>

                    <div style={{ ...cardBaseStyle, padding: 14 }}>
                      <div className="editorial-stat-hero" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}>
                        100%
                      </div>
                      <div className="editorial-stat-label" style={{ fontSize: 10 }}>
                        RESILIENT
                      </div>
                      <div style={{ fontSize: 11.5, color: 'var(--fg-muted)' }}>
                        PH Climate Tested
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right: Editorial Brand Muse Photography */}
              <Reveal delay={0.16}>
                <TiltCard>
                  <div className="editorial-frame" style={{ aspectRatio: '4/3', border: '1px solid var(--hair-2)' }}>
                    <img
                      src="/brand/generated-editorial-model.jpg"
                      alt="SCENTALA Filipino Editorial Muse in Quiet Luxury Portrait"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, transparent 65%, rgba(4,8,16,0.85) 100%)',
                        pointerEvents: 'none',
                      }}
                    />
                    <div style={{ position: 'absolute', bottom: 12, left: 16, right: 16, display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)' }}>
                        CAMPAIGN MUSE · QUIET LUXURY
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--primary)' }}>
                        DAILY ELEGANCE
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            </div>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 6: BRAND FOUNDATION, ETYMOLOGY & VALUES (Inspired by Image 2)
            ────────────────────────────────────────────────────────────────── */}
        <Slide nav="Brand Ethos" notes="The name SCENTALA embraces Filipino cultural pride: 'Tala' is the star that guided our ancestors through the archipelago at night. Our values commit to authentic quality rather than predatory luxury markups.">
          <div style={{ maxWidth: 1180, width: '100%', marginInline: 'auto' }}>
            <EditorialBar category="PT #1 · Brand Foundation & Philosophy" page="06 / 16" />

            <Reveal>
              <div style={{ marginBottom: 'clamp(18px, 2.5vh, 28px)' }}>
                <div className="kicker" style={{ marginBottom: 6 }}>
                  Heritage &amp; Core Ideology
                </div>
                <h2
                  className="headline"
                  style={{
                    fontSize: 'clamp(28px, 3.8vw, 48px)',
                    maxWidth: '32ch',
                    margin: 0,
                  }}
                >
                  Rooted in Heritage, Formulated for Daily Radiance
                </h2>
              </div>
            </Reveal>

            {/* 3 Tall Vertical Cards directly inspired by Image 2 */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'clamp(16px, 2vw, 24px)',
              }}
            >
              {/* Card 1: Etymology & Origin */}
              <Reveal delay={0.08}>
                <div className="editorial-card-tall" style={{ minHeight: 340 }}>
                  <div>
                    <div className="kicker" style={{ color: 'var(--primary)', marginBottom: 8 }}>
                      01 · Etymology
                    </div>
                    <h3 style={{ fontSize: 'clamp(20px, 2.1vw, 25px)', color: 'var(--fg)', fontFamily: 'var(--font-head)', margin: '0 0 10px' }}>
                      Scent + Tala (Star)
                    </h3>
                    <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.6, margin: 0, fontSize: '0.92em' }}>
                      A deliberate fusion of "Scent" and the Tagalog word <strong>"Tala,"</strong> meaning celestial star. Symbolizes radiant guidance, Filipino cultural identity, and an aura that shines distinctly above the noise.
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid var(--hair-2)', paddingTop: 10, marginTop: 16 }}>
                    <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>
                      CULTURAL GUIDANCE
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Card 2: Brand Tagline */}
              <Reveal delay={0.16}>
                <div
                  className="editorial-card-tall"
                  style={{
                    minHeight: 340,
                    background: 'linear-gradient(180deg, rgba(23,103,180,0.2) 0%, rgba(4,8,16,0.85) 100%)',
                    borderColor: 'rgba(254, 207, 67, 0.35)',
                  }}
                >
                  <div>
                    <div className="kicker" style={{ color: 'var(--primary)', marginBottom: 8 }}>
                      02 · Brand Tagline
                    </div>
                    <h3 style={{ fontSize: 'clamp(20px, 2.1vw, 25px)', color: 'var(--fg)', fontFamily: 'var(--font-head)', margin: '0 0 10px' }}>
                      “A scent that outshines the rest.”
                    </h3>
                    <p className="foot" style={{ color: 'var(--fg)', lineHeight: 1.6, margin: 0, fontSize: '0.92em' }}>
                      Our core brand promise to every wearer: empowering everyday commuters to carry an aura of prestige, distinction, and confidence from early morning rides to evening engagements.
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(254,207,67,0.25)', paddingTop: 10, marginTop: 16 }}>
                    <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>
                      CORE VALUE PROPOSITION
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Card 3: Mission & Vision */}
              <Reveal delay={0.24}>
                <div className="editorial-card-tall" style={{ minHeight: 340 }}>
                  <div>
                    <div className="kicker" style={{ color: 'var(--primary)', marginBottom: 8 }}>
                      03 · Vision
                    </div>
                    <h3 style={{ fontSize: 'clamp(20px, 2.1vw, 25px)', color: 'var(--fg)', fontFamily: 'var(--font-head)', margin: '0 0 10px' }}>
                      Top Local Fragrance House
                    </h3>
                    <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.6, margin: 0, fontSize: '0.92em' }}>
                      To become the premier homegrown fragrance brand in the Philippines, celebrated nationwide for formulating authentic luxury-grade scents made fairly accessible to every student and young professional.
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid var(--hair-2)', paddingTop: 10, marginTop: 16 }}>
                    <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>
                      NATIONAL ASPIRATION
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 7: DUAL PRODUCT LINEUP & COMPETITIVE MATRIX (PT #1)
            ────────────────────────────────────────────────────────────────── */}
        <Slide nav="Products" notes="Here is our physical SKU architecture: the 50ml Signature Flacon designed for home dressing tables, and the 10ml Tala Pocket-Puff Atomizer built for on-the-go mobility. Our competitive matrix illustrates our unfair advantage over cheap dupes and luxury boutiques.">
          <div style={{ maxWidth: 1180, width: '100%', marginInline: 'auto' }}>
            <EditorialBar category="PT #1 · Product Lineup & Competitive Matrix" page="07 / 16" />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '0.95fr 1.05fr',
                gap: 'clamp(20px, 3.5vw, 44px)',
                alignItems: 'center',
              }}
            >
              {/* Left: Generated Photorealistic Still Life on Travertine */}
              <Reveal>
                <TiltCard>
                  <div className="editorial-frame" style={{ aspectRatio: '16/11', border: '1px solid var(--hair-2)' }}>
                    <img
                      src="/brand/generated-product-lineup.jpg"
                      alt="SCENTALA 50ml Bottle and 10ml Tala Pocket-Puff Atomizer on Travertine"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        insetInline: 0,
                        background: 'linear-gradient(180deg, transparent 40%, rgba(4,8,16,0.9) 100%)',
                        padding: '12px 18px',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--primary)' }}>
                        50ML SIGNATURE EDP
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)' }}>
                        10ML TALA POCKET-PUFF
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>

              {/* Right: Headline & Luxury Competitive Table */}
              <div>
                <Reveal delay={0.08}>
                  <div className="kicker" style={{ marginBottom: 6 }}>
                    Dual SKU Strategy &amp; Advantage
                  </div>
                  <h2
                    className="headline"
                    style={{
                      fontSize: 'clamp(24px, 3vw, 38px)',
                      lineHeight: 1.08,
                      marginBottom: 16,
                    }}
                  >
                    50ml Signature Flacon &amp; 10ml Tala Pocket-Puff
                  </h2>
                </Reveal>

                <Reveal delay={0.14}>
                  <Comparison
                    cols={['Feature / Metric', 'SCENTALA', 'Alcohol Dupes', 'Niche Boutiques']}
                    highlight={0}
                    rows={[
                      {
                        label: 'Fragrance Oil Concentration',
                        values: ['Eau de Parfum (20–25%)', 'Cologne (3–8%)', 'Parfum (20–30%)'],
                      },
                      { label: 'Tropical Heat & Sweat Sillage', values: [true, false, false] },
                      { label: 'Student-Accessible Pricing', values: [true, true, false] },
                      { label: 'Original Bespoke Olfactory Accords', values: [true, false, true] },
                      { label: '10ml Pocket-Puff Travel Atomizer', values: [true, false, false] },
                    ]}
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 8: LOGO DESIGN IDEATION & DRAFT SKETCH (CT #1)
            ────────────────────────────────────────────────────────────────── */}
        <Slide nav="Logo Sketch" notes="Before moving to vector illustration software, our design team grounded the identity in manual sketching. On the left is our authentic Creative Task 1 submission sketch, illustrating how the initial letters S and T naturally form the body and nozzle of a perfume bottle.">
          <div style={{ maxWidth: 1180, width: '100%', marginInline: 'auto' }}>
            <EditorialBar category="CT #1 · Visual Identity & Logo Process" page="08 / 16" />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '0.9fr 1.1fr',
                gap: 'clamp(24px, 4vw, 54px)',
                alignItems: 'center',
              }}
            >
              {/* Left: Authentic Student Draft Sketch */}
              <Reveal>
                <TiltCard>
                  <div
                    className="editorial-frame"
                    style={{
                      aspectRatio: '1/1',
                      maxHeight: 440,
                      background: 'radial-gradient(circle, rgba(23,103,180,0.15) 0%, rgba(4,8,16,0.8) 80%)',
                      border: '1px solid var(--hair)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 18,
                    }}
                  >
                    <img
                      src="/brand/CT-1-Sketch-Draft-Logo.png"
                      alt="SCENTALA Authentic Hand-Drawn Logo Sketch and Ideation Draft"
                      style={{ maxHeight: '92%', maxWidth: '92%', objectFit: 'contain' }}
                    />
                  </div>
                </TiltCard>
              </Reveal>

              {/* Right: Design Ideation Principles */}
              <div>
                <Reveal delay={0.08}>
                  <div className="kicker" style={{ marginBottom: 6 }}>
                    Design Ideation &amp; Drafting
                  </div>
                  <h2
                    className="headline"
                    style={{
                      fontSize: 'clamp(26px, 3.4vw, 44px)',
                      lineHeight: 1.08,
                      marginBottom: 18,
                    }}
                  >
                    From Hand-Drawn Sketch to Regal Brand Hallmark
                  </h2>
                </Reveal>

                <Reveal delay={0.14}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div style={cardBaseStyle}>
                      <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-head)', fontSize: 18 }}>
                        01 · Typographic Convergence
                      </strong>
                      <p className="foot" style={{ color: 'var(--fg-muted)', margin: '4px 0 0', lineHeight: 1.5 }}>
                        The initials <strong>S</strong> and <strong>T</strong> from SCENTALA merge into an organic, unbroken contour.
                      </p>
                    </div>

                    <div style={cardBaseStyle}>
                      <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-head)', fontSize: 18 }}>
                        02 · Contouring the Glass Flacon
                      </strong>
                      <p className="foot" style={{ color: 'var(--fg-muted)', margin: '4px 0 0', lineHeight: 1.5 }}>
                        The sweeping stroke of <strong>S</strong> forms the curving body, while the stem and crossbar of <strong>T</strong> build the structural nozzle and cap.
                      </p>
                    </div>

                    <div style={cardBaseStyle}>
                      <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-head)', fontSize: 18 }}>
                        03 · The Guiding Tala Star
                      </strong>
                      <p className="foot" style={{ color: 'var(--fg-muted)', margin: '4px 0 0', lineHeight: 1.5 }}>
                        Resting at the zenith is the 4-point Tala star, representing radiant personal allure and Filipino heritage.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 9: LOGO ANATOMY & DECONSTRUCTION (Directly Inspired by Image 5)
            ────────────────────────────────────────────────────────────────── */}
        <Slide nav="Logo Anatomy" notes="Directly inspired by the luxury brand deconstruction in our reference materials, this slide breaks our emblem down into its 3 fundamental layers: the letterforms, the flacon closure silhouette, and the Tala star crown.">
          <div style={{ maxWidth: 1180, width: '100%', marginInline: 'auto' }}>
            <EditorialBar category="CT #1 · Visual Identity & Emblem Anatomy" page="09 / 16" />

            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: 'clamp(20px, 3vh, 32px)' }}>
                <div className="kicker" style={{ marginBottom: 6 }}>
                  Symbol Anatomy &amp; Deconstruction
                </div>
                <h2
                  className="headline"
                  style={{
                    fontSize: 'clamp(26px, 3.4vw, 44px)',
                    maxWidth: '32ch',
                    marginInline: 'auto',
                    textAlign: 'center',
                  }}
                >
                  The Anatomy of an Emblem: Typographic Evolution
                </h2>
              </div>
            </Reveal>

            {/* The 3-Stage Evolutionary Layout matching Reference Image 5 */}
            <LogoAnatomy />
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 10: PRIMARY MONOGRAM & SECONDARY MASTER LOCKUP (CT #1)
            ────────────────────────────────────────────────────────────────── */}
        <Slide nav="Logo System" notes="Here is our finalized digital identity system. On the left is our Primary Monogram Badge: a gold emblem engineered for social avatars, app icons, and bottle embossing. On the right is our Secondary Master Lockup: combining the monogram with our editorial serif wordmark and official brand tagline.">
          <div style={{ maxWidth: 1180, width: '100%', marginInline: 'auto' }}>
            <EditorialBar category="CT #1 · Visual Identity Architecture" page="10 / 16" />

            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: 'clamp(20px, 3vh, 32px)' }}>
                <div className="kicker" style={{ marginBottom: 6 }}>
                  Dual Hallmark System
                </div>
                <h2
                  className="headline"
                  style={{
                    fontSize: 'clamp(26px, 3.4vw, 44px)',
                    maxWidth: '32ch',
                    marginInline: 'auto',
                    textAlign: 'center',
                  }}
                >
                  Primary Monogram &amp;<br />
                  Secondary Master Lockup
                </h2>
              </div>
            </Reveal>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(18px, 2.5vw, 36px)',
              }}
            >
              <Reveal delay={0.08}>
                <TiltCard>
                  <div style={{ ...cardBaseStyle, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                    <h3 style={{ fontSize: 20, color: 'var(--fg)', marginBottom: 6, fontFamily: 'var(--font-head)' }}>
                      Primary Tala Monogram Emblem
                    </h3>
                    <p className="foot" style={{ textAlign: 'center', lineHeight: 1.5, margin: 0 }}>
                      Transparent gold emblem engineered for social media avatars, mobile app icons, flacon cap engravings, and wax packaging seals.
                    </p>
                  </div>
                </TiltCard>
              </Reveal>

              <Reveal delay={0.16}>
                <TiltCard>
                  <div style={{ ...cardBaseStyle, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                    <h3 style={{ fontSize: 20, color: 'var(--fg)', marginBottom: 6, fontFamily: 'var(--font-head)' }}>
                      Secondary Master Lockup
                    </h3>
                    <p className="foot" style={{ textAlign: 'center', lineHeight: 1.5, margin: 0 }}>
                      The definitive brand signature pairing the ST emblem with the high-contrast serif wordmark SCENTALA and the tagline: “A SCENT THAT OUTSHINES THE REST”.
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            </div>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 11: GESTALT PRINCIPLES & COLOR PSYCHOLOGY (CT #1)
            ────────────────────────────────────────────────────────────────── */}
        <Slide nav="Gestalt Theory" notes="Our emblem incorporates two foundational Gestalt principles: Closure and Continuation. Closure invites the viewer to mentally complete the bottle silhouette, increasing brand retention. Continuation guides the gaze upward into the Tala star.">
          <div style={{ maxWidth: 1180, width: '100%', marginInline: 'auto' }}>
            <EditorialBar category="CT #1 · Design Psychology & Gestalt Principles" page="11 / 16" />

            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: 'clamp(20px, 3vh, 32px)' }}>
                <div className="kicker" style={{ marginBottom: 6 }}>
                  Cognitive Design Theory
                </div>
                <h2
                  className="headline"
                  style={{
                    fontSize: 'clamp(26px, 3.4vw, 44px)',
                    maxWidth: '32ch',
                    marginInline: 'auto',
                    textAlign: 'center',
                  }}
                >
                  Closure, Continuation &amp;<br />
                  Royal Color Psychology
                </h2>
              </div>
            </Reveal>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 'clamp(14px, 1.8vw, 22px)',
              }}
            >
              <Reveal delay={0.08}>
                <div className="editorial-card-tall" style={{ minHeight: 280 }}>
                  <div className="kicker" style={{ color: 'var(--primary)', marginBottom: 6 }}>
                    Gestalt 01
                  </div>
                  <h3 style={{ fontSize: 20, color: 'var(--fg)', fontFamily: 'var(--font-head)', margin: '0 0 8px' }}>
                    Law of Closure
                  </h3>
                  <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0, fontSize: '0.88em' }}>
                    The logo contains no explicit bottle perimeter. The human eye bridges the negative space between S and T, perceiving a whole perfume flacon.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="editorial-card-tall" style={{ minHeight: 280 }}>
                  <div className="kicker" style={{ color: 'var(--primary)', marginBottom: 6 }}>
                    Gestalt 02
                  </div>
                  <h3 style={{ fontSize: 20, color: 'var(--fg)', fontFamily: 'var(--font-head)', margin: '0 0 8px' }}>
                    Law of Continuation
                  </h3>
                  <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0, fontSize: '0.88em' }}>
                    Ascending curves propel the visual gaze upward through the vertical shaft of T, directly directing focus to the radiant Tala star at the zenith.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div
                  className="editorial-card-tall"
                  style={{
                    minHeight: 280,
                    background: 'rgba(254, 207, 67, 0.08)',
                    borderColor: 'rgba(254, 207, 67, 0.35)',
                  }}
                >
                  <div className="kicker" style={{ color: 'var(--primary)', marginBottom: 6 }}>
                    Color Theory
                  </div>
                  <h3 style={{ fontSize: 20, color: 'var(--primary)', fontFamily: 'var(--font-head)', margin: '0 0 8px' }}>
                    Royal Gold (#FECF43)
                  </h3>
                  <p className="foot" style={{ color: 'var(--fg)', lineHeight: 1.5, margin: 0, fontSize: '0.88em' }}>
                    Gold communicates prestige, solar warmth, and high-fashion luxury. It directly embodies our promise of elevated daily presence.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="editorial-card-tall" style={{ minHeight: 280 }}>
                  <div className="kicker" style={{ color: 'var(--fg-faint)', marginBottom: 6 }}>
                    Surface Contrast
                  </div>
                  <h3 style={{ fontSize: 20, color: 'var(--fg)', fontFamily: 'var(--font-head)', margin: '0 0 8px' }}>
                    Midnight Obsidian (#010204)
                  </h3>
                  <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0, fontSize: '0.88em' }}>
                    Deep obsidian navy creates dramatic contrast, projecting depth, intimacy, and nocturnal allure across physical packaging and screens.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 12: FIRST EVER BRAND POST (CT #2)
            ────────────────────────────────────────────────────────────────── */}
        <Slide nav="Social Debut" notes="For Creative Task 2, we debuted SCENTALA to the world on social media. The visual features dramatic chiaroscuro lighting on raw volcanic stone. Our caption bypasses dry chemical talk and speaks directly to emotion: that exact moment someone pauses to ask, 'What are you wearing?'">
          <div style={{ maxWidth: 1180, width: '100%', marginInline: 'auto' }}>
            <EditorialBar category="CT #2 · Social Media Launch Campaign" page="12 / 16" />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '0.9fr 1.1fr',
                gap: 'clamp(24px, 4vw, 54px)',
                alignItems: 'center',
              }}
            >
              {/* Left: Authentic Social Debut Visual */}
              <Reveal>
                <TiltCard>
                  <div className="editorial-frame" style={{ aspectRatio: '1/1', maxHeight: 440, border: '1px solid var(--hair)' }}>
                    <img
                      src="/brand/CT-2-First-Ever-Brand-Post.png"
                      alt="SCENTALA First Ever Brand Post Visual"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </TiltCard>
              </Reveal>

              {/* Right: Caption & Art Direction Breakdown */}
              <div>
                <Reveal delay={0.08}>
                  <div className="kicker" style={{ marginBottom: 6 }}>
                    CT #2 · Social Media Debut
                  </div>
                  <h2
                    className="headline"
                    style={{
                      fontSize: 'clamp(24px, 3vw, 40px)',
                      lineHeight: 1.08,
                      marginBottom: 16,
                    }}
                  >
                    The Official Debut: A Scent That Outshines the Rest
                  </h2>
                </Reveal>

                <Reveal delay={0.14}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div
                      style={{
                        ...cardBaseStyle,
                        background: 'rgba(254, 207, 67, 0.06)',
                        borderColor: 'rgba(254, 207, 67, 0.25)',
                      }}
                    >
                      <div className="chip" style={{ width: 'fit-content', color: 'var(--primary)', marginBottom: 8 }}>
                        OFFICIAL LAUNCH POST &amp; CAPTION
                      </div>
                      <p style={{ fontStyle: 'italic', color: 'var(--fg)', fontSize: 'clamp(14px, 1.4vw, 17px)', lineHeight: 1.5, margin: 0 }}>
                        “SCENTALA IS HERE. And we did not create it for you to simply smell good. We created it for the moment someone catches your scent and thinks: <em>‘What are you wearing?’</em>”
                      </p>
                    </div>

                    <div style={cardBaseStyle}>
                      <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-head)', fontSize: 17 }}>
                        Visual Art Direction
                      </strong>
                      <p className="foot" style={{ color: 'var(--fg-muted)', margin: '4px 0 0', lineHeight: 1.5 }}>
                        Overhead chiaroscuro lighting cutting through deep shadow, illuminating sapphire glass resting upon raw volcanic obsidian stone.
                      </p>
                    </div>

                    <div style={cardBaseStyle}>
                      <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-head)', fontSize: 17 }}>
                        Emotional Copy Strategy
                      </strong>
                      <p className="foot" style={{ color: 'var(--fg-muted)', margin: '4px 0 0', lineHeight: 1.5 }}>
                        Focuses on personal magnetism, presence, and lasting distinction rather than transactional marketing jargon.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 13: PROMOTIONAL EVENT POSTER (CT #3)
            ────────────────────────────────────────────────────────────────── */}
        <Slide nav="Event Poster" notes="For Creative Task 3, our thought process bridged digital storytelling into physical sensory reality. A perfume must be experienced on warm skin. We conceived the Signature Launch pop-up at SM Cabanatuan City, the commercial crossroads of Central Luzon.">
          <div style={{ maxWidth: 1180, width: '100%', marginInline: 'auto' }}>
            <EditorialBar category="CT #3 · Promotional Event Poster" page="13 / 16" />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '0.9fr 1.1fr',
                gap: 'clamp(24px, 4vw, 54px)',
                alignItems: 'center',
              }}
            >
              {/* Left: Authentic Poster Visual */}
              <Reveal>
                <TiltCard>
                  <div className="editorial-frame" style={{ aspectRatio: '1/1', maxHeight: 440, border: '1px solid var(--hair)' }}>
                    <img
                      src="/brand/CT-3-Promotional-Event-Poster.png"
                      alt="SCENTALA Promotional Event Poster"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#010204' }}
                    />
                  </div>
                </TiltCard>
              </Reveal>

              {/* Right: Event Concept & Visual Hierarchy */}
              <div>
                <Reveal delay={0.08}>
                  <div className="kicker" style={{ marginBottom: 6 }}>
                    CT #3 · Retail Activation
                  </div>
                  <h2
                    className="headline"
                    style={{
                      fontSize: 'clamp(24px, 3vw, 40px)',
                      lineHeight: 1.08,
                      marginBottom: 16,
                    }}
                  >
                    Signature Launch: Tactile Retail Experience
                  </h2>
                </Reveal>

                <Reveal delay={0.14}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={cardBaseStyle}>
                      <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-head)', fontSize: 17 }}>
                        Tactile Retail Concept
                      </strong>
                      <p className="foot" style={{ color: 'var(--fg-muted)', margin: '4px 0 0', lineHeight: 1.5 }}>
                        While social media drives curiosity, fragrance is an intimate sensory art that demands live skin testing. The pop-up brings our digital ethos into physical reality.
                      </p>
                    </div>

                    <div style={cardBaseStyle}>
                      <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-head)', fontSize: 17 }}>
                        Venue Strategy · SM Cabanatuan City
                      </strong>
                      <p className="foot" style={{ color: 'var(--fg-muted)', margin: '4px 0 0', lineHeight: 1.5 }}>
                        Scheduled for <strong>October 02, 2026</strong> at the commercial and academic crossroads of Nueva Ecija, highly accessible to daily commuter students and young professionals.
                      </p>
                    </div>

                    <div style={cardBaseStyle}>
                      <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-head)', fontSize: 17 }}>
                        Typographic Hierarchy
                      </strong>
                      <p className="foot" style={{ color: 'var(--fg-muted)', margin: '4px 0 0', lineHeight: 1.5 }}>
                        High-fashion editorial serif headlines "SIGNATURE LAUNCH", condensed sans details the date, and the action callout "MAKE YOUR PRESENCE FELT" drives trial.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 14: POSTER COLOR HARMONY & THEORY (CT #3)
            ────────────────────────────────────────────────────────────────── */}
        <Slide nav="Color Harmony" notes="Here we analyze the precise color harmony behind the poster. By pairing cool sapphire blue against warm gold across the traditional color wheel, we produce optical vibration that commands immediate visual attention amidst busy mall foot traffic.">
          <div style={{ maxWidth: 1180, width: '100%', marginInline: 'auto' }}>
            <EditorialBar category="CT #3 · Color Theory & Visual Harmony" page="14 / 16" />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(24px, 4vw, 54px)',
                alignItems: 'center',
              }}
            >
              <div>
                <Reveal>
                  <div className="kicker" style={{ marginBottom: 6 }}>
                    Complementary Color Architecture
                  </div>
                  <h2
                    className="headline"
                    style={{
                      fontSize: 'clamp(24px, 3.2vw, 42px)',
                      lineHeight: 1.08,
                      marginBottom: 16,
                    }}
                  >
                    Complementary Color Scheme:<br />
                    Sapphire &amp; Gold
                  </h2>
                  <p className="foot" style={{ color: 'var(--fg-muted)', lineHeight: 1.6, marginBottom: 16, fontSize: '0.94em' }}>
                    The poster layout is anchored on opposing poles of the traditional color wheel: pairing the tranquil depth of ocean sapphire against the solar warmth of radiant gold.
                  </p>
                </Reveal>

                {/* 5 Complete Color Chips */}
                <Reveal delay={0.12}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(23,103,180,0.22)', padding: '6px 12px', borderRadius: 8, border: '1px solid #1767B4' }}>
                      <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#1767B4' }} />
                      <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)' }}>#1767B4 · Sapphire</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(10,45,85,0.3)', padding: '6px 12px', borderRadius: 8, border: '1px solid #0A2D55' }}>
                      <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#0A2D55' }} />
                      <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)' }}>#0A2D55 · Midnight</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(254,207,67,0.22)', padding: '6px 12px', borderRadius: 8, border: '1px solid #FECF43' }}>
                      <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FECF43' }} />
                      <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>#FECF43 · Gold</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(199,202,207,0.15)', padding: '6px 12px', borderRadius: 8, border: '1px solid #C7CACF' }}>
                      <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#C7CACF' }} />
                      <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)' }}>#C7CACF · Platinum</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(1,2,4,0.65)', padding: '6px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.16)' }}>
                      <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#010204', border: '1px solid rgba(255,255,255,0.35)' }} />
                      <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)' }}>#010204 · Obsidian Black</span>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.18}>
                  <div style={cardBaseStyle}>
                    <strong style={{ color: 'var(--fg)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Mall Environment Readability
                    </strong>
                    <p className="foot" style={{ color: 'var(--fg-muted)', margin: '4px 0 0', lineHeight: 1.5 }}>
                      Obsidian Black and Platinum Silver act as extreme contrast anchors (exceeding 10:1 ratio), guaranteeing crystal-clear legibility amidst the ambient visual noise of department store traffic.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Right: Poster with Color Scheme Diagram */}
              <Reveal delay={0.16}>
                <TiltCard>
                  <div className="editorial-frame" style={{ aspectRatio: '1/1', maxHeight: 440, border: '1px solid var(--hair)' }}>
                    <img
                      src="/brand/CT-3-Promotional-Event-Poster-With-Color-Scheme.png"
                      alt="SCENTALA Promotional Event Poster with Complementary Color Scheme Diagram"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#010204' }}
                    />
                  </div>
                </TiltCard>
              </Reveal>
            </div>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 15: THE CREATORS / PROJECT CREDITS (CT #4)
            ────────────────────────────────────────────────────────────────── */}
        <Slide nav="Project Team" notes="This project represents the dedicated collaborative work of our group from BSIT 4-C: Kerby Bautista on brand strategy, John Carlo Lemence on visual graphics, Eiron Jaynald Mendoza on copywriting and concept architecture, and John Mathew Ramoso on digital production.">
          <div style={{ maxWidth: 1180, width: '100%', marginInline: 'auto' }}>
            <EditorialBar category="College of Information and Communications Technology · IT-WS-06" page="15 / 16" />

            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: 'clamp(20px, 3vh, 32px)' }}>
                <div className="kicker" style={{ marginBottom: 6 }}>
                  Student Creative Collective
                </div>
                <h2
                  className="headline"
                  style={{
                    fontSize: 'clamp(26px, 3.4vw, 44px)',
                    maxWidth: '34ch',
                    marginInline: 'auto',
                    textAlign: 'center',
                  }}
                >
                  The Creators Behind SCENTALA · <span style={{ whiteSpace: 'nowrap' }}>BSIT 4‑C</span>
                </h2>
              </div>
            </Reveal>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 'clamp(14px, 1.8vw, 22px)',
                marginBottom: 24,
              }}
            >
              {[
                { name: 'Kerby S. Bautista', role: 'Brand Strategy & Creative Direction', initial: 'KB' },
                { name: 'John Carlo D.G. Lemence', role: 'Visual Identity & Graphic Design', initial: 'JL' },
                { name: 'Eiron Jaynald P. Mendoza', role: 'Copywriting & Concept Architecture', initial: 'EM' },
                { name: 'John Mathew T. Ramoso', role: 'Production & Digital Media Management', initial: 'JR' },
              ].map((p, i) => (
                <Reveal key={i} delay={0.08 * (i + 1)}>
                  <div
                    style={{
                      ...cardBaseStyle,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      minHeight: 220,
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: 58,
                        height: 58,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(254,207,67,0.25), rgba(23,103,180,0.3))',
                        border: '1px solid var(--hair)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-head)',
                        fontSize: 22,
                        fontWeight: 600,
                        color: 'var(--primary)',
                        marginBottom: 14,
                      }}
                    >
                      {p.initial}
                    </div>
                    <h3 style={{ fontSize: 18, color: 'var(--fg)', fontFamily: 'var(--font-head)', margin: '0 0 6px' }}>
                      {p.name}
                    </h3>
                    <p className="foot" style={{ color: 'var(--fg-muted)', fontSize: '0.86em', margin: 0, lineHeight: 1.4 }}>
                      {p.role}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.35}>
              <div
                style={{
                  textAlign: 'center',
                  padding: '12px 24px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--hair-2)',
                  maxWidth: 680,
                  marginInline: 'auto',
                }}
              >
                <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--fg-faint)', letterSpacing: '0.08em' }}>
                  COLLEGE OF INFORMATION AND COMMUNICATIONS TECHNOLOGY · 1ST SEMESTER 2026
                </span>
              </div>
            </Reveal>
          </div>
        </Slide>

        {/* ──────────────────────────────────────────────────────────────────
            SLIDE 16: GRAND KEYNOTE FINALE & INTERACTIVE Q&A
            ────────────────────────────────────────────────────────────────── */}
        <Slide center nav="Conclusion" notes="We would like to express our deepest gratitude to our professors, mentors, and fellow students for your time and attention today. We now warmly open the floor to any questions, comments, or feedback from the panel.">
          <div style={{ maxWidth: 960, width: '100%', marginInline: 'auto', textAlign: 'center' }}>
            <EditorialBar category="Creative Task #4 · Conclusion & Discussion" page="16 / 16" />

            <Reveal>
              <div className="float-3d" style={{ marginBottom: 14 }}>
                <img
                  src="/brand/ST-ORIGINAL-LOGO-TRANSPARENT.png"
                  alt="SCENTALA Tala Monogram Emblem"
                  className="shimmer-gold"
                  style={{
                    width: 'clamp(85px, 8vw, 115px)',
                    height: 'clamp(85px, 8vw, 115px)',
                    objectFit: 'contain',
                    marginInline: 'auto',
                  }}
                />
              </div>

              <div className="kicker" style={{ textAlign: 'center', marginBottom: 8 }}>
                Haute Parfumerie · Creative Task #4
              </div>

              <h1
                className="display"
                style={{
                  fontSize: 'clamp(32px, 4.8vw, 62px)',
                  lineHeight: 1.08,
                  marginBottom: 16,
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
                  marginBottom: 22,
                  maxWidth: '38ch',
                }}
              >
                Thank you for exploring our brand journey. We now enthusiastically open the floor for questions, panel feedback, and fragrance discussion.
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

            {/* Verified Netlify Badge */}
            <Reveal delay={0.2}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 20,
                  padding: '12px 28px',
                  borderRadius: 'var(--radius)',
                  background: 'linear-gradient(180deg, var(--surface-2), var(--surface))',
                  border: '1px solid var(--hair)',
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.7)',
                }}
              >
                <a
                  href="https://scentala.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ color: 'var(--primary)', fontSize: 16 }}>✦</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)', fontFamily: 'var(--font-mono)' }}>
                    scentala.netlify.app
                  </span>
                </a>
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
