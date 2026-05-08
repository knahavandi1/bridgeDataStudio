/* sample3.jsx — Move Index Initiative: Housing & economic mobility */

function Sample3() {
  // Heatmap data — 12 cols, 6 rows simulating mobility scores by zip
  const heatData = Array.from({ length: 72 }, (_, i) => {
    // gradient from corner with some noise
    const r = Math.floor(i / 12);
    const c = i % 12;
    const base = ((c / 11) * 0.5 + (r / 5) * 0.4);
    const n = Math.sin(i * 1.7) * 0.15;
    return Math.max(0, Math.min(0.999, base + n + 0.1));
  });
  const heatColors = ['#EAE2D1', '#D9C49B', '#C28A3A', '#C25E3A', '#A24A2A', '#1F3A2E'];

  return (
    <article>
      {/* Hero */}
      <section className="container sample-hero">
        <div style={{ marginBottom: 24 }}>
          <a href="#/work" className="eyebrow" style={{ borderBottom: '1px solid #C9BEA8', paddingBottom: 2 }}>← All work</a>
        </div>
        <div className="grid-12" style={{ alignItems: 'end' }}>
          <div style={{ gridColumn: 'span 8' }}>
            <span className="eyebrow">Sample Project · 03 / 03</span>
            <h1 className="serif" style={{ fontSize: 'clamp(40px, 5.4vw, 76px)', marginTop: 16, marginBottom: 16 }}>
              Move Index — the geography of getting ahead.
            </h1>
            <p className="lede" style={{ maxWidth: '52ch' }}>
              A social-asset set and analyst dashboard for the Move Index Initiative — a fictional housing-and-mobility
              foundation tracking how zip code shapes economic outcome across U.S. metros.
            </p>
          </div>
          <div style={{ gridColumn: 'span 4' }}>
            <div className="eyebrow">Engagement</div>
            <div className="body" style={{ marginTop: 6 }}>Launch campaign · 3 social cards, 1 dashboard prototype</div>
            <div className="eyebrow" style={{ marginTop: 16 }}>Year</div>
            <div className="body" style={{ marginTop: 6 }}>2024 — 2025</div>
            <div className="eyebrow" style={{ marginTop: 16 }}>Stack</div>
            <div className="body" style={{ marginTop: 6 }}>Figma, Observable, Webflow</div>
          </div>
        </div>
      </section>

      {/* Social cards */}
      <section className="container" style={{ marginTop: 32 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>SOCIAL CAMPAIGN · 1 / 2</div>
        <h2 className="h2 serif" style={{ marginBottom: 28, maxWidth: '20ch' }}>Three cards. One argument.</h2>

        <div className="grid-3" style={{ gap: 24 }}>
          {/* Card 01 — typographic */}
          <div style={{ aspectRatio: '4/5', background: '#F1EADC', padding: 28, border: '1px solid #C9BEA8', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', color: '#6B5F52' }}>MOVE INDEX · 01 / 03</div>
              <div style={{ width: 32, height: 1, background: '#1A1612', margin: '24px 0' }} />
              <div style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(28px, 3vw, 38px)', lineHeight: 1.05, color: '#1A1612', letterSpacing: '-0.02em' }}>
                A child raised five miles from another can earn <em style={{ color: '#C25E3A' }}>40% less</em> as an adult.
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6B5F52' }}>moveindex.org</div>
              <div style={{ width: 28, height: 28, background: '#1F3A2E' }} />
            </div>
          </div>

          {/* Card 02 — chart */}
          <div style={{ aspectRatio: '4/5', background: '#1F3A2E', color: '#FAF6EC', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', color: 'rgba(250,246,236,0.55)' }}>MOVE INDEX · 02 / 03</div>
              <div style={{ width: 32, height: 1, background: 'rgba(250,246,236,0.4)', margin: '24px 0' }} />
              <div style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(20px, 2vw, 26px)', lineHeight: 1.2, color: '#FAF6EC' }}>
                Median earnings at age 35, by childhood zip — Atlanta, GA.
              </div>
              <div style={{ marginTop: 28 }}>
                <BarChart
                  width={500}
                  data={[
                    { label: 'Top quartile zip',    value: 58, color: '#C28A3A' },
                    { label: 'Upper-middle',        value: 46, color: '#B8A07A' },
                    { label: 'Lower-middle',        value: 38, color: '#8C5A3F' },
                    { label: 'Bottom quartile',     value: 28, color: '#C25E3A' },
                  ]}
                  max={70}
                  barHeight={28}
                  gap={8}
                  format={(v) => `$${v}k`}
                />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(250,246,236,0.18)', paddingTop: 14 }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(250,246,236,0.55)' }}>SOURCE — OPP. INSIGHTS</div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(250,246,236,0.55)' }}>moveindex.org</div>
            </div>
          </div>

          {/* Card 03 — data + question */}
          <div style={{ aspectRatio: '4/5', background: '#C25E3A', color: '#FAF6EC', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', color: 'rgba(250,246,236,0.7)' }}>MOVE INDEX · 03 / 03</div>
              <div style={{ width: 32, height: 1, background: 'rgba(250,246,236,0.5)', margin: '24px 0' }} />
              <div style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(64px, 6.5vw, 96px)', lineHeight: 0.9, color: '#FAF6EC', letterSpacing: '-0.03em' }}>
                73¢
              </div>
              <div style={{ fontFamily: 'Newsreader, serif', fontSize: 18, lineHeight: 1.4, color: '#FAF6EC', marginTop: 16, maxWidth: '22ch' }}>
                of every dollar in housing-mobility funding goes to ten metros. Forty-eight states share the rest.
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(250,246,236,0.3)', paddingTop: 14 }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(250,246,236,0.85)' }}>HUD · FY24</div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(250,246,236,0.85)' }}>moveindex.org</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="container" style={{ marginTop: 96 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>ANALYST DASHBOARD · 2 / 2</div>
        <h2 className="h2 serif" style={{ marginBottom: 28, maxWidth: '24ch' }}>Built for analysts. Readable by anyone.</h2>

        <div style={{ background: '#FAF6EC', border: '1px solid #C9BEA8', boxShadow: '0 24px 60px -32px rgba(26,22,18,0.25)' }}>
          {/* dashboard chrome */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid #C9BEA8', background: '#F1EADC' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: 999, background: '#C25E3A', display: 'inline-block' }}></span>
                <span style={{ width: 10, height: 10, borderRadius: 999, background: '#C28A3A', display: 'inline-block' }}></span>
                <span style={{ width: 10, height: 10, borderRadius: 999, background: '#6B8A7A', display: 'inline-block' }}></span>
              </div>
              <span className="mono" style={{ fontSize: 11, color: '#6B5F52', letterSpacing: '0.06em' }}>MOVE INDEX · ATLANTA-METRO · 2014–2024</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <span className="pill" style={{ fontSize: 11 }}>By zip</span>
              <span className="pill" style={{ fontSize: 11, background: '#1F3A2E', color: '#FAF6EC', borderColor: '#1F3A2E' }}>Income</span>
              <span className="pill" style={{ fontSize: 11 }}>Race</span>
              <span className="pill" style={{ fontSize: 11 }}>Gender</span>
            </div>
          </div>

          {/* dashboard body */}
          <div style={{ padding: '32px 36px' }}>
            <div className="grid-12" style={{ alignItems: 'start' }}>
              {/* left: KPIs */}
              <div style={{ gridColumn: 'span 3', display: 'flex', flexDirection: 'column', gap: 28, paddingRight: 24, borderRight: '1px solid #C9BEA8' }}>
                <Stat value="$42k" label="Median earnings, age 35" sub="Tracked cohort, 1990 birth year" color={VIZ.forest} />
                <Stat value="0.31" label="Mobility coefficient" sub="1.0 = full intergenerational mobility" color={VIZ.terracotta} />
                <Stat value="2.4×" label="Top vs. bottom zip ratio" sub="Atlanta-metro, n=84 zips" color={VIZ.amber} />
              </div>

              {/* center: heatmap */}
              <div style={{ gridColumn: 'span 6', paddingLeft: 24, paddingRight: 24, borderRight: '1px solid #C9BEA8' }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6B5F52', marginBottom: 12 }}>
                  MOBILITY SCORE BY ZIP — ATLANTA METRO (84 ZIPS)
                </div>
                <HeatGrid data={heatData} cols={12} rows={6} colors={heatColors} cellSize={24} gap={3} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 18 }}>
                  <span className="mono" style={{ fontSize: 10, color: '#6B5F52', letterSpacing: '0.08em' }}>LOW</span>
                  <div style={{ display: 'flex', height: 8, flex: 1 }}>
                    {heatColors.map((c, i) => <div key={i} style={{ flex: 1, background: c }} />)}
                  </div>
                  <span className="mono" style={{ fontSize: 10, color: '#6B5F52', letterSpacing: '0.08em' }}>HIGH</span>
                </div>

                {/* secondary trend */}
                <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid #C9BEA8' }}>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6B5F52', marginBottom: 8 }}>
                    EARNINGS GAP (TOP – BOTTOM ZIP), 10-YEAR TREND
                  </div>
                  <AreaChart
                    values={[22, 23, 24, 25, 26, 27, 28, 29, 30, 30, 30]}
                    xLabels={['’14','’15','’16','’17','’18','’19','’20','’21','’22','’23','’24']}
                    color={VIZ.forest}
                    height={140}
                    width={520}
                  />
                </div>
              </div>

              {/* right: ranked list */}
              <div style={{ gridColumn: 'span 3', paddingLeft: 24 }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6B5F52', marginBottom: 12 }}>
                  TOP / BOTTOM ZIPS — BY OUTCOME
                </div>
                {[
                  { zip: '30327', earn: '$71k', tone: 'top' },
                  { zip: '30305', earn: '$68k', tone: 'top' },
                  { zip: '30342', earn: '$64k', tone: 'top' },
                  { zip: '...', earn: '...', tone: 'sep' },
                  { zip: '30314', earn: '$24k', tone: 'bot' },
                  { zip: '30310', earn: '$26k', tone: 'bot' },
                  { zip: '30315', earn: '$27k', tone: 'bot' },
                ].map((r, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 6 ? '1px solid #DDD2BE' : 'none', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 12, color: '#1A1612' }}>{r.zip}</span>
                    <span style={{ fontFamily: 'Newsreader, serif', fontSize: 16, color: r.tone === 'top' ? VIZ.forest : r.tone === 'bot' ? VIZ.terracotta : VIZ.muted }}>
                      {r.earn}
                    </span>
                  </div>
                ))}
                <button className="btn btn-ghost" style={{ marginTop: 18, width: '100%', justifyContent: 'center', fontSize: 12, padding: '10px 16px' }}>
                  Export chart →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
          <span className="eyebrow">Analyst view · light mode</span>
          <span className="eyebrow">Built in Observable, embedded via iframe</span>
        </div>
      </section>

      {/* Outcome */}
      <section className="container section">
        <div className="grid-2" style={{ gap: 64, alignItems: 'start' }}>
          <div>
            <div className="eyebrow">Approach</div>
            <h2 className="h2 serif" style={{ marginTop: 16 }}>One argument across three formats.</h2>
          </div>
          <div className="body" style={{ fontSize: 17, lineHeight: 1.6 }}>
            <p>
              The campaign needed to live across an analyst's screen, a foundation officer's PDF, and a board member's
              phone — without losing its argument in any of them. We built a single chart vocabulary, then taught it
              three voices: editorial, restrained, urgent.
            </p>
            <p style={{ marginTop: 18 }}>
              The dashboard exports its components as static images at the click of a button — meaning a reporter on
              deadline gets the same chart the foundation's research team is staring at, captioned and ready to publish.
            </p>
          </div>
        </div>
      </section>

      <div className="container"><div className="divider" /></div>

      <section className="container section">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <div>
            <div className="eyebrow">Back to start</div>
            <h2 className="h2 serif" style={{ marginTop: 12 }}>Want something like this for your work?</h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <a href="#/contact" className="btn btn-primary">Book a call <span className="arrow">→</span></a>
          </div>
        </div>
      </section>
    </article>
  );
}

window.Sample3 = Sample3;
