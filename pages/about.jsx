/* about.jsx */

function About() {
  return (
    <article>
      {/* Manifesto-style hero */}
      <section className="container" style={{ paddingTop: 120, paddingBottom: 96 }}>
        <div className="eyebrow">— About</div>
        <h1 className="serif" style={{
          fontSize: 'clamp(44px, 5.5vw, 84px)',
          marginTop: 32,
          maxWidth: '18ch',
          letterSpacing: '-0.025em',
          lineHeight: 1.0,
        }}>
          Data without story doesn't move people. <em style={{ color: 'var(--terracotta)' }}>That's why we exist.</em>
        </h1>
        <p className="lede" style={{ marginTop: 36, maxWidth: '60ch' }}>
          Bridge Studio is a small, focused practice working at the intersection of policy, journalism,
          and design. We help organizations whose findings deserve to be read closely — be read closely.
        </p>
      </section>

      {/* Philosophy */}
      <section style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', padding: 'clamp(80px, 10vw, 128px) 0' }}>
        <div className="container">
          <div className="grid-12" style={{ alignItems: 'start', columnGap: 48 }}>
            <div style={{ gridColumn: 'span 4' }}>
              <div className="eyebrow">— Philosophy</div>
              <h2 className="h2 serif" style={{ marginTop: 16 }}>How we think.</h2>
            </div>
            <div style={{ gridColumn: 'span 8' }}>
              {[
                { eyebrow: '01 — Argument first', title: 'Every report should know what it'+'\u2019'+'s arguing.', body: 'Before we choose a typeface, we name the argument. If we can'+'\u2019'+'t state it in one sentence, the design won'+'\u2019'+'t save it. Sometimes our most useful contribution is to send a draft back with that sentence written at the top.' },
                { eyebrow: '02 — Restraint as respect', title: 'A reader'+'\u2019'+'s attention is not infinite.', body: 'We use one good chart instead of three pretty ones. We trim. We let space carry weight. The point isn'+'\u2019'+'t minimalism — it'+'\u2019'+'s respect for the time of the person we'+'\u2019'+'re asking to read.' },
                { eyebrow: '03 — Truth, then craft', title: 'A beautiful chart of a wrong number is malpractice.', body: 'We read your methodology section. We ask about denominators. We push back on framing that the data doesn'+'\u2019'+'t support. The craft is in service of accuracy, not the other way around.' },
                { eyebrow: '04 — Warmth on hard subjects', title: 'Climate, conflict, inequity — these are not cold topics.', body: 'The people inside the data have lives. We make work that acknowledges that without sentimentality. Editorial warmth, not nonprofit gloss.' },
              ].map((row, i) => (
                <div key={i} style={{
                  padding: '36px 0',
                  borderBottom: '1px solid var(--rule)',
                  borderTop: i === 0 ? '1px solid var(--rule)' : 'none',
                }}>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: 'var(--muted)' }}>{row.eyebrow.toUpperCase()}</div>
                  <h3 className="serif" style={{ fontSize: 'clamp(22px, 2.2vw, 30px)', marginTop: 12, letterSpacing: '-0.014em', lineHeight: 1.15, maxWidth: '24ch' }}>{row.title}</h3>
                  <p className="body" style={{ fontSize: 16, marginTop: 16, maxWidth: '60ch' }}>{row.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The practice */}
      <section className="container section">
        <div className="grid-12" style={{ alignItems: 'start', columnGap: 48 }}>
          <div style={{ gridColumn: 'span 5' }}>
            <div className="eyebrow">— The practice</div>
            <h2 className="h2 serif" style={{ marginTop: 16, maxWidth: '14ch' }}>A focused studio, by design.</h2>
          </div>
          <div style={{ gridColumn: 'span 7' }}>
            <p style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(20px, 2vw, 26px)', lineHeight: 1.45, color: 'var(--ink)' }}>
              We are deliberately small. The studio is built around senior-level attention on every engagement — the
              person who scopes the work is the person designing it, and the person delivering it.
            </p>
            <p className="body" style={{ marginTop: 24, fontSize: 16.5, lineHeight: 1.6 }}>
              Our backgrounds are in editorial publishing, climate research, and foreign-policy journalism. We've spent
              the last decade inside the kinds of organizations we now work for — designing annual reports, building
              chart vocabularies, and arguing about footnotes. The studio is the consolidation of that experience.
            </p>
            <p className="body" style={{ marginTop: 18, fontSize: 16.5, lineHeight: 1.6 }}>
              We work with you directly. No account managers, no white-label subcontractors, no hand-offs to a junior team
              after the kickoff call. The byline is the byline.
            </p>
          </div>
        </div>
      </section>

      {/* Operating principles / numbers */}
      <section style={{ background: 'var(--forest)', color: 'var(--off-white)', padding: 'clamp(80px, 10vw, 128px) 0' }}>
        <div className="container">
          <div className="eyebrow" style={{ color: 'rgba(250,246,236,0.55)' }}>— By the numbers</div>
          <h2 className="serif" style={{ fontSize: 'clamp(36px, 4vw, 56px)', marginTop: 24, color: 'var(--off-white)', maxWidth: '22ch', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            A small studio is a feature, not a phase.
          </h2>

          <div className="grid-12" style={{ marginTop: 80, columnGap: 32, rowGap: 48 }}>
            {[
              { v: '12', label: 'Engagements per year', sub: 'Roughly one a month. We turn down more than we take.' },
              { v: '1:1', label: 'Senior attention', sub: 'You work directly with the person designing the work — start to finish.' },
              { v: '6–8', label: 'Weeks per project', sub: 'From kickoff to delivery. Longer if the work warrants it; never artificially short.' },
              { v: '0', label: 'Hidden subcontractors', sub: 'No white-label network behind the scenes. The byline is the byline.' },
            ].map((s, i) => (
              <div key={i} style={{ gridColumn: 'span 3' }}>
                <div className="serif" style={{ fontSize: 'clamp(56px, 6vw, 88px)', color: 'var(--off-white)', letterSpacing: '-0.025em', lineHeight: 1.0 }}>{s.v}</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(250,246,236,0.55)', marginTop: 16, textTransform: 'uppercase' }}>{s.label}</div>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(250,246,236,0.78)', marginTop: 10, maxWidth: '32ch' }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closer */}
      <section className="container section">
        <div style={{ maxWidth: 880 }}>
          <div className="eyebrow">— A closing note</div>
          <p style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(22px, 2.4vw, 30px)', lineHeight: 1.4, color: 'var(--ink)', marginTop: 24 }}>
            We started this studio because we kept watching good research land flat — important findings published into
            silence, ignored or skimmed because the design didn't carry them. We wanted to make work where the design did
            its job: getting people to read past the first page.
          </p>
          <p style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(20px, 2vw, 24px)', fontStyle: 'italic', color: 'var(--muted)', marginTop: 32 }}>
            If that sounds like the kind of partner you're looking for — say hello.
          </p>
          <div style={{ marginTop: 40 }}>
            <a href="#/contact" className="btn btn-primary">Start a conversation <span className="arrow">→</span></a>
          </div>
        </div>
      </section>
    </article>
  );
}

window.About = About;
