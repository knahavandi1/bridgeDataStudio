/* sample2.jsx — Horizon Strategy Group: Regional instability index */

function Sample2() {
  const regions = [
    // hand-drawn abstract regions, simplified geographic shapes positioned on a graticule
    { name: 'North Atlantic',  path: 'M 60 60 L 200 50 L 230 110 L 180 150 L 90 140 Z', color: '#3A5247', x: 145, y: 100, label: 'N. ATLANTIC · 2.1' },
    { name: 'Central Europe',  path: 'M 200 50 L 320 60 L 340 130 L 280 160 L 230 110 Z', color: '#6B8A7A', x: 280, y: 105, label: 'C. EUROPE · 3.4' },
    { name: 'Eastern Europe',  path: 'M 320 60 L 440 70 L 460 140 L 400 175 L 340 130 Z', color: '#C28A3A', x: 395, y: 115, label: 'E. EUROPE · 5.6' },
    { name: 'Caucasus',        path: 'M 440 70 L 540 90 L 550 170 L 480 180 L 460 140 Z', color: '#C25E3A', x: 500, y: 130, label: 'CAUCASUS · 7.1' },
    { name: 'Middle East',     path: 'M 460 140 L 550 170 L 580 240 L 500 270 L 430 230 Z', color: '#A24A2A', x: 510, y: 215, label: 'MID. EAST · 7.8' },
    { name: 'North Africa',    path: 'M 280 160 L 430 230 L 380 300 L 240 280 L 200 220 Z', color: '#C28A3A', x: 320, y: 245, label: 'N. AFRICA · 5.2' },
    { name: 'Sahel',           path: 'M 240 280 L 380 300 L 360 340 L 230 340 Z', color: '#A24A2A', x: 305, y: 320, label: 'SAHEL · 7.4' },
    { name: 'South Asia',      path: 'M 580 240 L 670 230 L 690 320 L 600 330 L 560 280 Z', color: '#C25E3A', x: 625, y: 290, label: 'S. ASIA · 6.9' },
    { name: 'East Asia',       path: 'M 600 130 L 690 140 L 700 220 L 670 230 L 590 220 L 580 160 Z', color: '#6B8A7A', x: 645, y: 185, label: 'E. ASIA · 3.1' },
  ];

  return (
    <article>
      {/* Hero */}
      <section className="container sample-hero">
        <div style={{ marginBottom: 24 }}>
          <a href="#/work" className="eyebrow" style={{ borderBottom: '1px solid #C9BEA8', paddingBottom: 2 }}>← All work</a>
        </div>
        <div className="grid-12" style={{ alignItems: 'end' }}>
          <div style={{ gridColumn: 'span 8' }}>
            <span className="eyebrow">Sample Project · 02 / 03</span>
            <h1 className="serif" style={{ fontSize: 'clamp(40px, 5.4vw, 76px)', marginTop: 16, marginBottom: 16 }}>
              The Horizon Brief.
            </h1>
            <p className="lede" style={{ maxWidth: '52ch' }}>
              An executive summary visual and regional risk map for a quarterly geopolitical risk publication
              circulated to fund managers, foreign-policy desks, and corporate strategy teams.
            </p>
          </div>
          <div style={{ gridColumn: 'span 4' }}>
            <div className="eyebrow">Engagement</div>
            <div className="body" style={{ marginTop: 6 }}>Quarterly executive brief · Cover summary, 1 map, 1 chart suite</div>
            <div className="eyebrow" style={{ marginTop: 16 }}>Year</div>
            <div className="body" style={{ marginTop: 6 }}>2025 · Q2 issue</div>
            <div className="eyebrow" style={{ marginTop: 16 }}>Format</div>
            <div className="body" style={{ marginTop: 6 }}>16-page PDF, web companion, dark/light export sets</div>
          </div>
        </div>
      </section>

      {/* Executive summary cover */}
      <section className="container">
        <div className="report-spread" style={{ background: '#14271E', borderColor: '#14271E' }}>
          <div style={{ padding: '64px 56px', color: '#FAF6EC' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(250,246,236,0.18)', paddingBottom: 20, marginBottom: 40 }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', color: 'rgba(250,246,236,0.55)' }}>HORIZON BRIEF · Q2 2025 · ISSUE 18</span>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', color: 'rgba(250,246,236,0.55)' }}>CIRCULATION — RESTRICTED</span>
            </div>
            <div className="grid-12" style={{ alignItems: 'start', columnGap: 48 }}>
              <div style={{ gridColumn: 'span 5' }}>
                <div className="eyebrow" style={{ color: 'rgba(250,246,236,0.55)' }}>Executive Summary</div>
                <h2 className="serif" style={{ fontSize: 'clamp(36px, 3.6vw, 56px)', lineHeight: 1.0, color: '#FAF6EC', marginTop: 18, letterSpacing: '-0.02em' }}>
                  Three theatres,<br/>one widening<br/>fault line.
                </h2>
                <p style={{ fontFamily: 'Newsreader, serif', fontSize: 18, lineHeight: 1.5, color: 'rgba(250,246,236,0.78)', marginTop: 28, maxWidth: '36ch' }}>
                  Instability has migrated outward from a single locus to a coordinated arc — Caucasus, Levant, Sahel —
                  with measurable spillover into trade corridors and energy futures.
                </p>
                <div style={{ marginTop: 36, display: 'flex', gap: 36 }}>
                  <Stat value="7.1" label="Composite Index" sub="Caucasus, up from 5.4 in Q1" color={'#C28A3A'} />
                  <Stat value="+24%" label="Q-over-Q" sub="Energy futures volatility" color={'#C25E3A'} />
                </div>
              </div>

              <div style={{ gridColumn: 'span 7' }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(250,246,236,0.55)', marginBottom: 12 }}>
                  FIG. 01 — REGIONAL INSTABILITY INDEX, Q2 2025
                </div>
                <div style={{ background: '#1F3A2E', padding: 16, border: '1px solid rgba(250,246,236,0.12)' }}>
                  <RegionMap regions={regions} />
                </div>
                <div style={{ display: 'flex', gap: 18, marginTop: 16, fontFamily: 'Geist Mono, monospace', fontSize: 10, letterSpacing: '0.06em', color: 'rgba(250,246,236,0.55)' }}>
                  <span><span style={{ display: 'inline-block', width: 10, height: 10, background: '#3A5247', marginRight: 6, verticalAlign: 'middle' }} />0–3 LOW</span>
                  <span><span style={{ display: 'inline-block', width: 10, height: 10, background: '#6B8A7A', marginRight: 6, verticalAlign: 'middle' }} />3–4 MOD</span>
                  <span><span style={{ display: 'inline-block', width: 10, height: 10, background: '#C28A3A', marginRight: 6, verticalAlign: 'middle' }} />4–6 ELEV</span>
                  <span><span style={{ display: 'inline-block', width: 10, height: 10, background: '#C25E3A', marginRight: 6, verticalAlign: 'middle' }} />6–7 HIGH</span>
                  <span><span style={{ display: 'inline-block', width: 10, height: 10, background: '#A24A2A', marginRight: 6, verticalAlign: 'middle' }} />7+ ACUTE</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 56, paddingTop: 20, borderTop: '1px solid rgba(250,246,236,0.18)' }}>
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(250,246,236,0.55)' }}>HORIZON · 03 OF 16</span>
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(250,246,236,0.55)' }}>METHODOLOGY — APPENDIX A</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
          <span className="eyebrow">Executive summary spread</span>
          <span className="eyebrow">Dark export · For digital briefing</span>
        </div>
      </section>

      {/* Chart suite */}
      <section className="container" style={{ marginTop: 32 }}>
        <div className="report-spread">
          <div style={{ border: '1px solid #C9BEA8', background: '#F1EADC', padding: '56px 48px' }}>
            <div className="eyebrow">FIG. 02 — Index drivers</div>
            <h2 className="serif" style={{ fontSize: 'clamp(28px, 3vw, 44px)', marginTop: 8, maxWidth: '24ch' }}>
              What's driving the Caucasus number.
            </h2>
            <p className="body" style={{ marginTop: 12, maxWidth: '52ch' }}>
              The composite index aggregates five weighted dimensions. For the Caucasus, two of the five —
              border-incident frequency and energy-corridor exposure — account for 71% of the quarterly increase.
            </p>

            <div className="grid-12" style={{ marginTop: 40, alignItems: 'start', columnGap: 48 }}>
              <div style={{ gridColumn: 'span 7' }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6B5F52', marginBottom: 12 }}>
                  CONTRIBUTION TO Q-OVER-Q INDEX MOVEMENT — CAUCASUS
                </div>
                <BarChart
                  data={[
                    { label: 'Border-incident frequency', value: 38, color: VIZ.terracotta },
                    { label: 'Energy corridor exposure',  value: 33, color: VIZ.brown },
                    { label: 'Currency volatility',       value: 14, color: VIZ.amber },
                    { label: 'Diplomatic posture',        value: 9,  color: VIZ.sage },
                    { label: 'Migration pressure',        value: 6,  color: VIZ.forestSoft },
                  ]}
                  max={45}
                  barHeight={32}
                  format={(v) => `${v}%`}
                />
              </div>
              <div style={{ gridColumn: 'span 5', borderLeft: '1px solid #C9BEA8', paddingLeft: 32 }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6B5F52', marginBottom: 12 }}>
                  COMPOSITE INDEX, 8-QUARTER TREND
                </div>
                <AreaChart
                  values={[3.8, 4.1, 4.4, 4.6, 5.0, 5.2, 5.4, 7.1]}
                  xLabels={['Q3’23','Q4','Q1’24','Q2','Q3','Q4','Q1’25','Q2']}
                  color={VIZ.terracotta}
                  height={220}
                />
                <p className="callout" style={{ borderColor: VIZ.terracotta, marginTop: 24, fontSize: 18 }}>
                  A 31% jump in a single quarter — the steepest in the index's eight-quarter history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology callout */}
      <section className="container section">
        <div className="grid-12" style={{ alignItems: 'start', columnGap: 48 }}>
          <div style={{ gridColumn: 'span 4' }}>
            <div className="eyebrow">Approach</div>
            <h2 className="h2 serif" style={{ marginTop: 16 }}>Charts that hold up to scrutiny.</h2>
          </div>
          <div className="body" style={{ gridColumn: 'span 8', fontSize: 17, lineHeight: 1.65 }}>
            <p>
              Horizon's audience reads carefully and disagrees professionally. Every visual was designed to survive that
              reading: a single argument per chart, methodology footnoted in plain language, and a typographic hierarchy
              that lets the headline finding be absorbed in three seconds and re-interrogated in thirty.
            </p>
            <p style={{ marginTop: 18 }}>
              The dark execution exists for a reason — the brief is most often read after hours, on a phone, in transit.
              Cool ink on warm paper for the printed edition; warm ink on deep forest for the digital. The argument
              doesn't change. Only the weather around it.
            </p>
          </div>
        </div>
      </section>

      <div className="container"><div className="divider" /></div>

      <section className="container section">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <div>
            <div className="eyebrow">Next project</div>
            <h2 className="h2 serif" style={{ marginTop: 12 }}>The economics of staying put.</h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <a href="#/work/move-index" className="btn btn-ghost">View project <span className="arrow">→</span></a>
          </div>
        </div>
      </section>
    </article>
  );
}

window.Sample2 = Sample2;
