/* home.jsx — landing */

function HomeHero() {
  return (
    <section className="container" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36 }}>
        <span className="dot" />
        <span className="eyebrow">Strategic data storytelling for mission-driven organizations</span>
      </div>

      <h1 className="display serif" style={{ maxWidth: '18ch', textWrap: 'balance' }}>
        Complex data,<br />made <em style={{ fontStyle: 'italic', color: 'var(--forest)' }}>visible.</em>
      </h1>

      <div className="grid-12" style={{ marginTop: 56, alignItems: 'end' }}>
        <p className="lede" style={{ gridColumn: 'span 7', maxWidth: '52ch' }}>
          Bridge Studio helps mission-driven organizations turn complex research, policy, and impact data into clear visual stories — so important work is easier to understand, share, and act on.
        </p>
        <div style={{ gridColumn: 'span 5', display: 'flex', gap: 12, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <a href="#/work" className="btn btn-ghost">See our work <span className="arrow">→</span></a>
          <a href="#/contact" className="btn btn-primary">Schedule a call <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

/* ===================================================== */
function MarqueeOfWork() {
  // Visual band — three thumbs side by side, pure design
  return (
    <section style={{ background: 'var(--paper-2)', padding: '64px 0', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
      <div className="container">
        <div className="grid-3" style={{ gap: 24 }}>
          {/* Thumb 1 — HMDA denial rate chart */}
          <a href="#/work/clean-air" style={{ aspectRatio: '4/3', background: '#1A2E1A', padding: 28, color: '#FAF6EC', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(250,246,236,0.55)' }}>Client Work: FIG. 01 · 2024 HMDA · CA</div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end', height: 120 }}>
              {[
                { conv: 0.82, nonbank: 0.65 },
                { conv: 0.70, nonbank: 0.52 },
                { conv: 0.38, nonbank: 0.28 },
                { conv: 0.35, nonbank: 0.25 },
              ].map((g, gi) => (
                <div key={gi} style={{ flex: 1, display: 'flex', gap: 3, alignItems: 'flex-end', height: '100%' }}>
                  <div style={{ flex: 1, height: `${g.conv * 100}%`, background: '#68B44A' }} />
                  <div style={{ flex: 1, height: `${g.nonbank * 100}%`, background: '#FFC63B' }} />
                </div>
              ))}
            </div>
            <div style={{ fontFamily: 'Newsreader, serif', fontSize: 22, color: '#FAF6EC', maxWidth: '20ch' }}>Mortgage denial by race, CA.</div>
          </a>

          {/* Thumb 2 — typographic */}
          <a href="#/work/horizon-brief" style={{ aspectRatio: '4/3', background: '#F1EADC', border: '1px solid #C9BEA8', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6B5F52' }}>HORIZON BRIEF · Q2 2025 (Concept Study)</div>
            <div style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, color: '#1A1612', letterSpacing: '-0.02em' }}>
              Three theatres,<br/>one widening<br/><em style={{ color: '#C25E3A' }}>fault line.</em>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6B5F52' }}>EXECUTIVE SUMMARY</span>
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6B5F52' }}>03 / 16</span>
            </div>
          </a>

          {/* Thumb 3 — terracotta moment */}
          <a href="#/work/move-index" style={{ aspectRatio: '4/3', background: '#C25E3A', padding: 28, color: '#FAF6EC', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(250,246,236,0.85)' }}>MOVE INDEX · 03 / 03 (Concept Study)</div>
            <div style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(56px, 6vw, 84px)', lineHeight: 0.9, color: '#FAF6EC', letterSpacing: '-0.03em' }}>
              73¢
            </div>
            <div style={{ fontFamily: 'Newsreader, serif', fontSize: 16, color: '#FAF6EC', maxWidth: '24ch' }}>
              of every dollar in housing-mobility funding goes to ten metros.
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===================================================== */
function WhatWeMake() {
  return (
    <section className="container section">
      <div className="grid-12" style={{ alignItems: 'start', columnGap: 48 }}>
        <div style={{ gridColumn: 'span 5' }}>
          <div className="eyebrow">— What we make</div>
          <h2 className="h2 serif" style={{ marginTop: 20, maxWidth: '15ch' }}>
            Publication-ready visuals for complex work.
          </h2>
        </div>

        <div style={{ gridColumn: 'span 7' }}>
          <p className="lede" style={{ marginBottom: 32 }}>
            We create visual systems, report graphics, and digital storytelling assets that help serious research become easier to understand, share, and use.
          </p>

          <div style={{ borderTop: '1px solid var(--rule)' }}>
            {[
              {
                title: 'Report graphics',
                body: 'Charts, maps, figures, and visual systems for research reports, policy briefs, and annual publications.',
              },
              {
                title: 'Impact storytelling',
                body: 'Donor-ready visuals that make outcomes, funding, program reach, and community impact easier to understand.',
              },
              {
                title: 'Survey & public opinion visuals',
                body: 'Clear visual narratives for polling, cross-country comparisons, demographic trends, and public sentiment.',
              },
              {
                title: 'Interactive explainers',
                body: 'Lightweight web visuals, digital charts, and narrative explainers for public-facing research and advocacy.',
              },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '24px 1fr 1.35fr',
                  gap: 24,
                  padding: '22px 0',
                  borderBottom: '1px solid var(--rule)',
                  alignItems: 'baseline',
                }}
              >
                <span className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="serif" style={{ fontSize: 24, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                  {row.title}
                </span>
                <span className="body" style={{ fontSize: 15, color: 'var(--muted)' }}>
                  {row.body}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================================================== */
function WhoWeWorkWith() {
  return (
    <section className="container section">
      <div className="grid-12" style={{ alignItems: 'start', columnGap: 48 }}>
        <div style={{ gridColumn: 'span 5' }}>
          <div className="eyebrow">— Who we work with</div>
          <h2 className="h2 serif" style={{ marginTop: 20, maxWidth: '14ch' }}>
            Organizations whose findings deserve to be read closely.
          </h2>
        </div>
        <div style={{ gridColumn: 'span 7' }}>
          <p className="lede" style={{ marginBottom: 32 }}>
            We partner with mission-driven policy, advocacy, foundation, and research teams publishing evidence that deserves to be understood — by funders, decision-makers, and the public.
          </p>

          <div style={{ borderTop: '1px solid var(--rule)' }}>
            {[
              { kind: 'Think tanks & policy institutes', about: 'Annual reports, white papers, briefings' },
              { kind: 'Advocacy organizations', about: 'Campaign assets, legislator-facing decks, social' },
              { kind: 'Research & public-interest teams', about: 'Survey findings, issue briefs, data explainers' },
              { kind: 'Private foundations', about: 'Field reports, grantee storytelling, dashboards' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '24px 1fr 1.2fr', gap: 24, padding: '20px 0', borderBottom: '1px solid var(--rule)', alignItems: 'baseline' }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>{String(i + 1).padStart(2, '0')}</span>
                <span className="serif" style={{ fontSize: 22, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{row.kind}</span>
                <span className="body" style={{ fontSize: 14, color: 'var(--muted)' }}>{row.about}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================================================== */
function WhatMakesUsDifferent() {
  return (
    <section style={{ background: 'var(--forest)', color: 'var(--off-white)', padding: 'clamp(80px, 10vw, 144px) 0' }}>
      <div className="container">
        <div className="eyebrow" style={{ color: 'rgba(250,246,236,0.55)' }}>— What makes us different</div>
        <h2 className="serif" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', marginTop: 24, color: 'var(--off-white)', maxWidth: '20ch', lineHeight: 1.0, letterSpacing: '-0.022em' }}>
          We're not a big agency. That's the point.
        </h2>

        <div className="grid-3" style={{ gap: 64, marginTop: 80, alignItems: 'start' }}>
          {[
            {
              eyebrow: '— Fewer hands',
              title: 'You'+'\u2019'+'ll work with the people doing the work.',
              body: 'Two senior leads, one engagement at a time. The person on the kickoff call is the person designing your charts.',
            },
            {
              eyebrow: '— Aligned mission',
              title: 'We only take work we believe in.',
              body: 'We care about the substance behind the visuals. Our best work happens when the argument is thoughtful, the mission is clear, and the design helps the evidence land.',
            },
            {
              eyebrow: '— Built for complexity',
              title: 'Hard subjects, plainly told.',
              body: 'Our background spans analytics, executive storytelling, geopolitics, international trade, and applied AI evaluation. We can engage with complex material before turning it into something clear.',
            },
          ].map((c, i) => (
            <div key={i}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(250,246,236,0.55)' }}>{c.eyebrow}</div>
              <h3 className="serif" style={{ marginTop: 16, fontSize: 26, color: 'var(--off-white)', lineHeight: 1.15, letterSpacing: '-0.01em', textWrap: 'balance' }}>{c.title}</h3>
              <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.6, color: 'rgba(250,246,236,0.75)' }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================================================== */
function FeaturedWork() {
  const items = [
    {
      slug: '/work/clean-air',
      idx: '01',
      label: 'Client Work',
      kind: 'Data Report · HMDA',
      title: 'California Borrowers of Color Are More Vulnerable Than Ever',
      blurb: 'Analyzing 2024 California home lending disparities — denial rates, lender type shifts, and racial equity gaps.',
      tone: 'forest',
    },
    {
      slug: '/work/horizon-brief',
      idx: '02',
      label: 'Concept Study',
      kind: 'Executive Brief · Risk Map',
      title: 'The Horizon Brief.',
      blurb: 'A quarterly geopolitical risk publication for fund managers and strategy desks.',
      tone: 'paper',
    },
    {
      slug: '/work/move-index',
      idx: '03',
      label: 'Concept Study',
      kind: 'Social Set · Dashboard',
      title: 'Move Index — getting ahead.',
      blurb: 'How zip code shapes economic outcome — across analyst dashboard and social campaign.',
      tone: 'terracotta',
    },
  ];

  const renderThumb = (it) => {
    if (it.tone === 'forest') {
      const groups = [
        { label: 'Black', conv: 0.82, nonbank: 0.65 },
        { label: 'Latino', conv: 0.70, nonbank: 0.52 },
        { label: 'White', conv: 0.38, nonbank: 0.28 },
        { label: 'Asian', conv: 0.35, nonbank: 0.25 },
      ];
      return (
        <div style={{ height: '100%', background: '#1A2E1A', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FAF6EC' }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(250,246,236,0.55)' }}>FIG. 01 · 2024 HMDA · CA</div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end', height: 110 }}>
            {groups.map((g, gi) => (
              <div key={gi} style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: '100%' }}>
                  <div style={{ flex: 1, height: `${g.conv * 100}%`, background: '#68B44A' }} />
                  <div style={{ flex: 1, height: `${g.nonbank * 100}%`, background: '#FFC63B' }} />
                </div>
                <div className="mono" style={{ fontSize: 8, letterSpacing: '0.05em', color: 'rgba(250,246,236,0.45)', marginTop: 4, textAlign: 'center' }}>{g.label}</div>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: 18, lineHeight: 1.2 }}>Denial rates by race, CA 2024</div>
        </div>
      );
    }

    if (it.tone === 'paper') {
      return (
        <div style={{ height: '100%', background: '#F1EADC', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6B5F52' }}>HORIZON · Q2 2025</div>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(24px, 2.4vw, 32px)', lineHeight: 1, color: '#1A1612', letterSpacing: '-0.02em' }}>
            Three theatres,<br/>one widening<br/><em style={{ color: '#C25E3A' }}>fault line.</em>
          </div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6B5F52' }}>EXECUTIVE SUMMARY</div>
        </div>
      );
    }

    return (
      <div style={{ height: '100%', background: '#C25E3A', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FAF6EC' }}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(250,246,236,0.85)' }}>MOVE INDEX</div>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(56px, 6vw, 80px)', lineHeight: 0.9, letterSpacing: '-0.03em' }}>73¢</div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(250,246,236,0.85)' }}>HOUSING · MOBILITY</div>
      </div>
    );
  };

  return (
    <section className="container section">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48 }}>
        <div>
          <div className="eyebrow">— Selected work & concept studies</div>
          <h2 className="h2 serif" style={{ marginTop: 20 }}>Client work and concept studies, one approach.</h2>
        </div>
        <a href="#/work" className="btn btn-ghost">All projects <span className="arrow">→</span></a>
      </div>

      <div className="grid-3" style={{ gap: 32 }}>
        {items.map((it, i) => (
          <a key={i} href={`#${it.slug}`} className="work-card">
            <div className="work-thumb" style={{ aspectRatio: '4/5' }}>
              {renderThumb(it)}
            </div>

            <div className="work-meta">
              <span>
                {it.idx} — <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>{it.label}</strong> · {it.kind}
              </span>
              <span>2025 →</span>
            </div>

            <h3 className="work-title">{it.title}</h3>
            <p className="work-blurb">{it.blurb}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ===================================================== */
function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Discovery',
      body: 'We read your draft, your data, your prior reports. One call to understand what argument you'+'\u2019'+'re really making — and who needs to hear it.',
    },
    {
      n: '02',
      title: 'Narrative framing',
      body: 'A short written treatment that names the argument, the audience, and the visual approach. You approve the direction before we move into design.',
    },
    {
      n: '03',
      title: 'Design & delivery',
      body: 'Two rounds, fixed scope. You receive print-ready, web-ready, and presentation-ready files — plus a small style sheet you can keep using.',
    },
  ];
  return (
    <section className="container section">
      <div className="eyebrow">— How it works</div>
      <h2 className="h2 serif" style={{ marginTop: 20, maxWidth: '18ch' }}>
        Three steps. No surprises.
      </h2>

      <div className="grid-3" style={{ gap: 0, marginTop: 64, borderTop: '1px solid var(--rule)' }}>
        {steps.map((s, i) => (
          <div key={i} style={{ padding: '40px 32px 40px 0', borderRight: i < 2 ? '1px solid var(--rule)' : 'none', paddingLeft: i > 0 ? 32 : 0 }}>
            <div className="serif" style={{ fontSize: 64, color: 'var(--terracotta)', lineHeight: 1, letterSpacing: '-0.025em' }}>{s.n}</div>
            <h3 className="serif" style={{ fontSize: 28, marginTop: 18, letterSpacing: '-0.012em' }}>{s.title}</h3>
            <p className="body" style={{ marginTop: 12, fontSize: 15.5 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===================================================== */
function Home() {
  return (
    <article>
      <HomeHero />
      <MarqueeOfWork />
      <WhatWeMake />
      <WhoWeWorkWith />
      <WhatMakesUsDifferent />
      <FeaturedWork />
      <HowItWorks />
    </article>
  );
}

window.Home = Home;