/* services.jsx */

function Services() {
  const services = [
    { name: 'Visual storytelling',     desc: 'Long-form editorial layouts that carry an argument from cover to footnote — built for reports, brochures, and bound publications.' },
    { name: 'Data narrative',          desc: 'Translating raw findings into a sequence of visuals that hold attention, build to a point, and survive scrutiny.' },
    { name: 'Report design',           desc: 'Print and digital editions of annual reports, white papers, and policy briefs — designed end-to-end, footnoted carefully.' },
    { name: 'Interactive dashboards',  desc: 'Web-based dashboards that let analysts drill in and reporters export — built in Observable, Webflow, and lightweight stacks.' },
    { name: 'Presentation decks',      desc: 'Decks that read well in a board room, on a Zoom call, and as a leave-behind PDF. Built for the actual rooms they'+'\u2019'+'ll be shown in.' },
    { name: 'Social assets',           desc: 'Cards, motion, and shareables — extracted from the same visual system as the report, so the campaign reads as one voice.' },
  ];

  const audiences = [
    { kind: 'Think tanks & policy institutes',     ex: 'CFR, RAND, Brookings, Aspen' },
    { kind: 'Advocacy organizations',              ex: 'Sierra Club, NRDC, ACLU, EFF' },
    { kind: 'Geopolitical risk & strategy firms',  ex: 'Eurasia Group, ISD, Horizon Strategy' },
    { kind: 'Private foundations',                 ex: 'Ford, MacArthur, Kresge, Hewlett' },
  ];

  const phases = [
    { n: '01', title: 'Discovery',         days: '~ 1 week',  body: 'A working call. We read your draft, your data, your prior reports. We send back a one-page understanding document.' },
    { n: '02', title: 'Narrative framing', days: '~ 1 week',  body: 'A short written treatment naming the argument, the audience, and the visual moves. You approve before we open Figma.' },
    { n: '03', title: 'Design',            days: '3–5 weeks', body: 'Two rounds of visual design. Layouts, charts, typography. We meet weekly. Scope is fixed; speed is not.' },
    { n: '04', title: 'Delivery',          days: '~ 1 week',  body: 'Print-ready, web-ready, and presentation-ready files. Plus a small style sheet you can keep using.' },
  ];

  return (
    <article>
      {/* Hero */}
      <section className="container" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="eyebrow">— Services</div>
        <h1 className="serif" style={{ fontSize: 'clamp(48px, 6vw, 96px)', marginTop: 28, maxWidth: '14ch', letterSpacing: '-0.025em', lineHeight: 0.98 }}>
          What we do, and<br/>how we do it.
        </h1>
        <p className="lede" style={{ marginTop: 36, maxWidth: '56ch' }}>
          We work across the full surface of an organization's communications — from the bound report on the desk
          to the chart in tomorrow's newsletter. Six core capabilities, one continuous practice.
        </p>
      </section>

      {/* what we do */}
      <section className="container" style={{ paddingBottom: 96 }}>
        <div className="eyebrow">— What we do</div>
        <h2 className="h2 serif" style={{ marginTop: 20, marginBottom: 48 }}>Six capabilities.</h2>

        <div style={{ borderTop: '1px solid var(--rule)' }}>
          {services.map((s, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '60px minmax(220px, 1fr) 2fr',
              gap: 32,
              padding: '32px 0',
              borderBottom: '1px solid var(--rule)',
              alignItems: 'baseline',
            }}>
              <span className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em' }}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className="serif" style={{ fontSize: 'clamp(22px, 2.2vw, 32px)', letterSpacing: '-0.014em' }}>{s.name}</h3>
              <p className="body" style={{ fontSize: 16, maxWidth: '60ch' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* who it's for */}
      <section style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', padding: 'clamp(80px, 10vw, 144px) 0' }}>
        <div className="container">
          <div className="grid-12" style={{ alignItems: 'start', columnGap: 48 }}>
            <div style={{ gridColumn: 'span 5' }}>
              <div className="eyebrow">— Who it's for</div>
              <h2 className="h2 serif" style={{ marginTop: 20, maxWidth: '14ch' }}>
                Organizations whose findings deserve careful reading.
              </h2>
              <p className="body" style={{ marginTop: 24, maxWidth: '40ch', fontSize: 16 }}>
                We're built for the kinds of organizations that publish to be cited — not just to be seen. If your work
                ends up in someone's footnote, we're the right kind of studio.
              </p>
            </div>
            <div style={{ gridColumn: 'span 7' }}>
              {audiences.map((a, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  padding: '24px 0',
                  borderTop: '1px solid var(--rule)',
                  borderBottom: i === audiences.length - 1 ? '1px solid var(--rule)' : 'none',
                  alignItems: 'baseline',
                }}>
                  <span className="serif" style={{ fontSize: 24, letterSpacing: '-0.012em' }}>{a.kind}</span>
                  <span className="body" style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, color: 'var(--muted)', letterSpacing: '0.06em' }}>
                    e.g. {a.ex}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="container section">
        <div className="eyebrow">— How it works</div>
        <h2 className="h2 serif" style={{ marginTop: 20, maxWidth: '20ch', marginBottom: 64 }}>
          From kickoff to delivery, six to eight weeks.
        </h2>

        <div className="grid-12" style={{ columnGap: 32 }}>
          {phases.map((p, i) => (
            <div key={i} style={{ gridColumn: 'span 3', borderTop: '2px solid var(--ink)', paddingTop: 24, position: 'relative' }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--terracotta)', letterSpacing: '0.12em', marginBottom: 8 }}>PHASE {p.n}</div>
              <h3 className="serif" style={{ fontSize: 28, letterSpacing: '-0.014em' }}>{p.title}</h3>
              <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em', marginTop: 8 }}>{p.days}</div>
              <p className="body" style={{ fontSize: 14.5, marginTop: 18 }}>{p.body}</p>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 64, fontFamily: 'Newsreader, serif', fontSize: 22, fontStyle: 'italic', color: 'var(--muted)', maxWidth: '52ch' }}>
          We take on roughly one engagement per month. If we're full, we'll tell you, and we'll tell you who else does this well.
        </p>
      </section>

      {/* engagement types */}
      <section style={{ background: 'var(--forest)', color: 'var(--off-white)', padding: 'clamp(80px, 10vw, 144px) 0' }}>
        <div className="container">
          <div className="eyebrow" style={{ color: 'rgba(250,246,236,0.55)' }}>— Engagements</div>
          <h2 className="serif" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', marginTop: 24, color: 'var(--off-white)', maxWidth: '20ch', lineHeight: 1.0, letterSpacing: '-0.022em' }}>
            Three ways to work together.
          </h2>

          <div className="grid-3" style={{ gap: 32, marginTop: 64, alignItems: 'start' }}>
            {[
              { kind: 'Single-publication', range: '6–8 weeks', body: 'A report, a brief, a campaign — start to finish, with a clear scope and a fixed delivery date.', cta: 'Most common engagement' },
              { kind: 'Quarterly retainer', range: 'Ongoing', body: 'For organizations with regular publication cadences. We become your in-house design team for the cadence work.', cta: 'Limited slots — booked through 2026' },
              { kind: 'Visual system audit', range: '2–3 weeks', body: 'A short, focused engagement: we audit your existing report design and chart vocabulary, and hand back a tightened system.', cta: 'Good place to start if unsure' },
            ].map((e, i) => (
              <div key={i} style={{ padding: 32, border: '1px solid rgba(250,246,236,0.18)', minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(250,246,236,0.55)' }}>{e.range.toUpperCase()}</div>
                  <h3 className="serif" style={{ fontSize: 30, color: 'var(--off-white)', marginTop: 12, lineHeight: 1.1, letterSpacing: '-0.014em' }}>{e.kind}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(250,246,236,0.78)', marginTop: 18 }}>{e.body}</p>
                </div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', color: 'var(--terracotta)', marginTop: 24, textTransform: 'uppercase' }}>
                  → {e.cta}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 80, display: 'flex', gap: 16, justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            <a href="#/contact" className="btn btn-terracotta">Start a conversation <span className="arrow">→</span></a>
            <a href="#/work" className="btn" style={{ background: 'transparent', color: 'var(--off-white)', borderColor: 'rgba(250,246,236,0.5)' }}>See sample work <span className="arrow">→</span></a>
          </div>
        </div>
      </section>
    </article>
  );
}

window.Services = Services;
