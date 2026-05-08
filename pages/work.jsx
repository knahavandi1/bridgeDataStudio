/* work.jsx — index of all sample projects */

function Work() {
  const items = [
    {
      slug: '/work/clean-air',
      idx: '01',
      year: '2024',
      kind: 'Data Report',
      client: 'The Greenlining Institute',
      title: 'California Borrowers of Color Are More Vulnerable Than Ever',
      blurb: 'A 2024 HMDA data report analyzing California home lending disparities — visualizing denial rates, lender type shifts, and racial equity gaps across mortgage applicants.',
      tone: 'forest',
    },
    {
      slug: '/work/horizon-brief',
      idx: '02',
      year: '2025',
      kind: 'Executive Brief',
      client: 'Horizon Strategy Group',
      title: 'The Horizon Brief.',
      blurb: 'Quarterly executive summary visual and regional risk map — circulated to fund managers, foreign-policy desks, and strategy teams.',
      tone: 'paper',
    },
    {
      slug: '/work/move-index',
      idx: '03',
      year: '2024 — 25',
      kind: 'Social + Dashboard',
      client: 'Move Index Initiative',
      title: 'Move Index — getting ahead.',
      blurb: 'Three social cards and an analyst dashboard — tracking how zip code shapes economic outcome across U.S. metros.',
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
        <div style={{ height: '100%', background: '#1A2E1A', padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FAF6EC' }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(250,246,236,0.55)' }}>FIG. 01 · 2024 HMDA · CALIFORNIA</div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-end', height: 180 }}>
            {groups.map((g, gi) => (
              <div key={gi} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 0, height: '100%', justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: '100%' }}>
                  <div style={{ flex: 1, height: `${g.conv * 100}%`, background: '#68B44A' }} />
                  <div style={{ flex: 1, height: `${g.nonbank * 100}%`, background: '#FFC63B' }} />
                </div>
                <div className="mono" style={{ fontSize: 9, letterSpacing: '0.06em', color: 'rgba(250,246,236,0.5)', marginTop: 6, textAlign: 'center' }}>{g.label}</div>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'Newsreader, serif', fontSize: 22, lineHeight: 1.2, maxWidth: '24ch' }}>Mortgage denial rates by race, CA 2024</div>
            <div style={{ display: 'flex', gap: 14, marginTop: 10 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 10, height: 10, background: '#68B44A', display: 'inline-block' }} /><span className="mono" style={{ fontSize: 9, color: 'rgba(250,246,236,0.55)', letterSpacing: '0.06em' }}>CONVENTIONAL</span></span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 10, height: 10, background: '#FFC63B', display: 'inline-block' }} /><span className="mono" style={{ fontSize: 9, color: 'rgba(250,246,236,0.55)', letterSpacing: '0.06em' }}>NON-BANK</span></span>
            </div>
          </div>
        </div>
      );
    }
    if (it.tone === 'paper') {
      return (
        <div style={{ height: '100%', background: '#F1EADC', padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: '#6B5F52' }}>HORIZON · Q2 2025 · 03 / 16</div>
          <div style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(36px, 3.2vw, 48px)', lineHeight: 1, color: '#1A1612', letterSpacing: '-0.02em' }}>
            Three theatres,<br/>one widening<br/><em style={{ color: '#C25E3A' }}>fault line.</em>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: '#6B5F52' }}>EXECUTIVE SUMMARY</span>
            <span className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: '#6B5F52' }}>FIG. 01</span>
          </div>
        </div>
      );
    }
    return (
      <div style={{ height: '100%', background: '#C25E3A', padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FAF6EC' }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(250,246,236,0.85)' }}>MOVE INDEX · 03 / 03</div>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(96px, 10vw, 140px)', lineHeight: 0.9, letterSpacing: '-0.03em' }}>73¢</div>
        <div style={{ fontFamily: 'Newsreader, serif', fontSize: 18, lineHeight: 1.4, maxWidth: '24ch' }}>
          of every dollar in housing-mobility funding goes to ten metros.
        </div>
      </div>
    );
  };

  return (
    <article>
      {/* Hero */}
      <section className="container" style={{ paddingTop: 96, paddingBottom: 72 }}>
        <div className="eyebrow">— Selected Work · 2024–2025</div>
        <h1 className="serif" style={{ fontSize: 'clamp(48px, 6vw, 88px)', marginTop: 28, maxWidth: '18ch', letterSpacing: '-0.025em', lineHeight: 1.0 }}>
          Three sample projects.<br/>One way of working.
        </h1>
        <p className="lede" style={{ marginTop: 32, maxWidth: '60ch' }}>
          A new studio shows what it can do, not what it has done. Each of the projects below is a fictional-but-realistic
          sample, built to demonstrate how we frame, design, and deliver — for the kinds of organizations we want to work with.
        </p>
      </section>

      {/* List of projects */}
      <section className="container">
        {items.map((it, i) => (
          <a key={i} href={`#${it.slug}`} style={{
            display: 'block',
            borderTop: '1px solid var(--rule)',
            padding: '64px 0',
            cursor: 'pointer',
            transition: 'background .25s ease',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(217, 196, 155, 0.12)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            <div className="grid-12" style={{ alignItems: 'start', columnGap: 32 }}>
              <div style={{ gridColumn: 'span 1' }}>
                <span className="mono" style={{ fontSize: 12, letterSpacing: '0.1em', color: 'var(--muted)' }}>{it.idx}</span>
              </div>
              <div style={{ gridColumn: 'span 4' }}>
                <div className="eyebrow" style={{ marginBottom: 14 }}>{it.kind} · {it.year}</div>
                <h2 className="serif" style={{ fontSize: 'clamp(28px, 3vw, 42px)', letterSpacing: '-0.018em', lineHeight: 1.05 }}>{it.title}</h2>
                <p className="body" style={{ marginTop: 20, maxWidth: '40ch' }}>{it.blurb}</p>
                <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span className="pill">{it.client}</span>
                  <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Sample Project
                  </span>
                </div>
              </div>
              <div style={{ gridColumn: 'span 7' }}>
                <div style={{ aspectRatio: '4/3', border: '1px solid var(--rule)' }}>
                  {renderThumb(it)}
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                  <span style={{ fontFamily: 'Geist, sans-serif', fontSize: 14, color: 'var(--ink)' }}>View case study <span className="arrow">→</span></span>
                </div>
              </div>
            </div>
          </a>
        ))}
        <div style={{ borderTop: '1px solid var(--rule)' }} />
      </section>

      {/* Note */}
      <section className="container section">
        <div className="grid-12" style={{ alignItems: 'start', columnGap: 48 }}>
          <div style={{ gridColumn: 'span 4' }}>
            <div className="eyebrow">— A note on samples</div>
          </div>
          <div className="body" style={{ gridColumn: 'span 8', fontFamily: 'Newsreader, serif', fontSize: 22, lineHeight: 1.45, color: 'var(--ink-2)' }}>
            <p>
              Each project shown here is a sample — designed for plausible organizations doing real work in real fields.
              Methodology, data sources, and visual systems are built to publication standard. They're how we'd approach
              your project, made tangible.
            </p>
            <p style={{ marginTop: 18 }}>
              Want to talk about a real one? <a href="#/contact" style={{ borderBottom: '1px solid var(--ink)', paddingBottom: 2 }}>Get in touch</a>.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

window.Work = Work;
