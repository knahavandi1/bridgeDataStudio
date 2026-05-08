/* sample1.jsx — The Greenlining Institute: 2024 HMDA data report */

function Sample1() {
  return (
    <article>
      {/* Hero */}
      <section className="container sample-hero">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <a href="#/work" className="eyebrow" style={{ borderBottom: '1px solid #C9BEA8', paddingBottom: 2 }}>← All work</a>
        </div>
        <div className="grid-12" style={{ alignItems: 'end' }}>
          <div style={{ gridColumn: 'span 8' }}>
            <span className="eyebrow">The Greenlining Institute · 01 / 03</span>
            <h1 className="serif" style={{ fontSize: 'clamp(36px, 5vw, 70px)', marginTop: 16, marginBottom: 16, lineHeight: 1.05 }}>
              California Borrowers of Color Are More Vulnerable Than Ever
            </h1>
            <p className="lede" style={{ maxWidth: '52ch' }}>
              A 2024 HMDA data report analyzing California home lending disparities — visualizing denial rates, lender type shifts, and racial equity gaps across mortgage applicants.
            </p>
          </div>
          <div style={{ gridColumn: 'span 4' }}>
            <div className="eyebrow">Engagement</div>
            <div className="body" style={{ marginTop: 6 }}>Data report · Cover, 2 data spreads, 1 hero infographic</div>
            <div className="eyebrow" style={{ marginTop: 16 }}>Year</div>
            <div className="body" style={{ marginTop: 6 }}>2024</div>
            <div className="eyebrow" style={{ marginTop: 16 }}>Published by</div>
            <div className="body" style={{ marginTop: 6 }}>The Greenlining Institute</div>
          </div>
        </div>
      </section>

      {/* Cover spread */}
      <section className="container">
        <div className="report-spread" style={{ background: '#FAF6EC' }}>
          <div className="grid-2" style={{ gap: 0, border: '1px solid #C9BEA8' }}>
            {/* LEFT: cover */}
            <div style={{ padding: '64px 48px', background: '#1A2E1A', color: '#FAF6EC', minHeight: 560, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="eyebrow" style={{ color: 'rgba(250,246,236,0.55)' }}>The Greenlining Institute · 2024 HMDA Data Report</div>
                <div style={{ width: 28, height: 1, background: 'rgba(250,246,236,0.4)', margin: '32px 0' }} />
                <h2 className="serif" style={{ fontSize: 'clamp(36px, 3.6vw, 52px)', lineHeight: 1.0, color: '#FAF6EC' }}>
                  Who gets a loan —<br/>and who gets <em style={{ color: '#FFC63B' }}>a no</em>.
                </h2>
                <p style={{ marginTop: 24, fontFamily: 'Newsreader, serif', fontSize: 18, lineHeight: 1.5, color: 'rgba(250,246,236,0.8)', maxWidth: '34ch' }}>
                  A decade of home lending data, broken down by race — and what it says about California's housing future.
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(250,246,236,0.18)', paddingTop: 24 }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(250,246,236,0.55)' }}>2024 HMDA DATA · CALIFORNIA</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(250,246,236,0.55)' }}>GLI · 01</div>
              </div>
            </div>

            {/* RIGHT: executive summary */}
            <div style={{ padding: '64px 48px', background: '#F1EADC', minHeight: 560, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="eyebrow">Executive summary</div>
                <p style={{ fontFamily: 'Newsreader, serif', fontSize: 22, lineHeight: 1.4, marginTop: 20, color: '#1A1612' }}>
                  California's mortgage market is shifting away from traditional banks — and that shift is falling hardest on borrowers of color.
                </p>
                <p style={{ fontFamily: 'Newsreader, serif', fontSize: 16, lineHeight: 1.55, marginTop: 18, color: '#2C2620' }}>
                  In 2024, Black applicants were denied conventional mortgages at 2.2 times the rate of white applicants in the same state. Latino applicants faced a 1.8× gap. Meanwhile, non-bank lenders — subject to weaker federal oversight — now originate the majority of mortgages to borrowers of color in California.
                </p>
                <p style={{ fontFamily: 'Newsreader, serif', fontSize: 16, lineHeight: 1.55, marginTop: 14, color: '#2C2620' }}>
                  The data is clear. The vulnerability is structural.
                </p>
                <div style={{ marginTop: 32, fontFamily: 'Newsreader, serif', fontSize: 15, fontStyle: 'italic', color: '#6B5F52' }}>
                  — The Greenlining Institute<br/>
                  <span style={{ fontStyle: 'normal', fontFamily: 'Geist Mono, monospace', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Economic Equity Program</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #C9BEA8', paddingTop: 24 }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: '#6B5F52' }}>03</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: '#6B5F52' }}>EXECUTIVE SUMMARY</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
            <span className="eyebrow">Spread 01–02 · Cover & Executive Summary</span>
            <span className="eyebrow">2024 HMDA · Home Mortgage Disclosure Act</span>
          </div>
        </div>
      </section>

      {/* Hero infographic — denial rates */}
      <section className="container" style={{ marginTop: 32 }}>
        <div className="report-spread" style={{ background: '#FAF6EC' }}>
          <div style={{ border: '1px solid #C9BEA8', padding: '56px 48px 48px', background: '#F1EADC' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid #C9BEA8', paddingBottom: 20, marginBottom: 32 }}>
              <div>
                <div className="eyebrow">Hero infographic · Section II</div>
                <h2 className="serif" style={{ fontSize: 'clamp(28px, 3vw, 44px)', marginTop: 12, maxWidth: '26ch' }}>
                  Mortgage denial rates by race, California 2024.
                </h2>
              </div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', color: '#6B5F52', textAlign: 'right' }}>
                FIG. 01<br/>2024 HMDA DATA
              </div>
            </div>

            <div className="grid-12" style={{ alignItems: 'start' }}>
              {/* main bar chart */}
              <div style={{ gridColumn: 'span 7' }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6B5F52', marginBottom: 16 }}>
                  CONVENTIONAL MORTGAGE DENIAL RATE — CALIFORNIA
                </div>
                <BarChart
                  data={[
                    { label: 'Black applicants',  value: 22.4, color: '#68B44A' },
                    { label: 'Latino applicants', value: 18.6, color: '#FFC63B' },
                    { label: 'All applicants',    value: 13.8, color: VIZ.sand },
                    { label: 'Asian applicants',  value: 11.3, color: '#66B2AB' },
                    { label: 'White applicants',  value: 10.1, color: '#568B3E' },
                  ]}
                  max={25}
                  barHeight={32}
                  format={(v) => `${v}%`}
                />
                <div style={{ marginTop: 12, fontSize: 12, color: '#6B5F52', fontFamily: 'Newsreader, serif', fontStyle: 'italic', maxWidth: '52ch' }}>
                  Conventional mortgage applications only. Excludes withdrawn and incomplete files. Source: CFPB 2024 HMDA, California.
                </div>
              </div>

              {/* right rail — stats */}
              <div style={{ gridColumn: 'span 5', borderLeft: '1px solid #C9BEA8', paddingLeft: 32 }}>
                <Stat value="2.2×" label="Black–White denial gap" sub="Black applicants in California are denied conventional mortgages at more than twice the rate of white applicants." color="#68B44A" />
                <div style={{ height: 32 }} />
                <Stat value="1.8×" label="Latino–White denial gap" sub="The disparity persists after controlling for income and loan-to-value ratio." color="#FFC63B" />
              </div>
            </div>

            {/* secondary panel — lender type breakdown */}
            <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #C9BEA8' }}>
              <div className="grid-12" style={{ alignItems: 'center' }}>
                <div style={{ gridColumn: 'span 5' }}>
                  <div className="eyebrow">FIG. 02 · LENDER TYPE</div>
                  <h3 className="serif" style={{ fontSize: 24, marginTop: 8 }}>Who is lending to communities of color?</h3>
                  <p className="body" style={{ marginTop: 12, maxWidth: '38ch' }}>
                    Non-bank lenders now originate the majority of mortgages to Black and Latino borrowers in California — institutions with weaker federal oversight and higher average rates.
                  </p>
                </div>
                <div style={{ gridColumn: 'span 7' }}>
                  <StackedBar
                    rows={[
                      { label: 'Black applicants',  bank: 42, nonbank: 58 },
                      { label: 'Latino applicants', bank: 39, nonbank: 61 },
                      { label: 'All applicants',    bank: 51, nonbank: 49 },
                      { label: 'White applicants',  bank: 54, nonbank: 46 },
                      { label: 'Asian applicants',  bank: 61, nonbank: 39 },
                    ]}
                    keys={['bank', 'nonbank']}
                    colors={['#568B3E', '#FFC63B']}
                    rowHeight={32}
                    width={600}
                  />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 36, paddingTop: 16, borderTop: '1px solid #C9BEA8' }}>
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6B5F52' }}>SOURCE — CFPB 2024 HMDA DATA · CALIFORNIA CONVENTIONAL MORTGAGE APPLICATIONS</span>
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: '#6B5F52' }}>GLI · 08</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
            <span className="eyebrow">Spread 08–09 · Hero infographic</span>
            <span className="eyebrow">Greenlining brand palette · Four-color</span>
          </div>
        </div>
      </section>

      {/* Trend spread */}
      <section className="container" style={{ marginTop: 32 }}>
        <div className="report-spread" style={{ background: '#FAF6EC' }}>
          <div style={{ border: '1px solid #C9BEA8', padding: '56px 48px', background: '#F1EADC' }}>
            <div className="eyebrow">Section III · A gap that isn't closing</div>
            <h2 className="serif" style={{ fontSize: 'clamp(28px, 3vw, 44px)', marginTop: 8, maxWidth: '28ch' }}>
              Denial rates have fluctuated since 2019. The racial gap has not narrowed.
            </h2>
            <div style={{ marginTop: 32 }}>
              <LineChart
                series={[
                  { label: 'Black',  color: '#68B44A', values: [19.2, 20.1, 18.8, 21.4, 22.1, 22.4] },
                  { label: 'Latino', color: '#FFC63B', values: [16.8, 17.3, 15.9, 18.2, 18.9, 18.6] },
                  { label: 'Asian',  color: '#66B2AB', values: [10.1, 10.5, 9.8, 11.1, 11.6, 11.3] },
                  { label: 'White',  color: '#568B3E', values: [9.4, 9.8, 8.7, 10.3, 10.5, 10.1] },
                ]}
                xLabels={["'19", "'20", "'21", "'22", "'23", "'24"]}
                yMax={30}
                height={300}
              />
            </div>
            <p className="callout" style={{ marginTop: 32 }}>
              "The story isn't that lending is getting worse. It's that the racial gap has proven stubbornly resistant to every market cycle."
            </p>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="container section">
        <div className="grid-2" style={{ gap: 64, alignItems: 'start' }}>
          <div>
            <div className="eyebrow">Outcome</div>
            <h2 className="h2 serif" style={{ marginTop: 16 }}>Data that moves policy.</h2>
          </div>
          <div className="body" style={{ fontSize: 17, lineHeight: 1.6 }}>
            <p>
              The report's visualizations were designed to function as both publication figures and standalone advocacy assets — readable by policymakers who won't read the methodology and by researchers who will.
            </p>
            <p style={{ marginTop: 18 }}>
              The hero infographic and denial-rate charts were built to travel: shared in regulatory comment filings, community briefings, and legislative testimony on fair lending enforcement in California.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="divider" />
      </div>

      {/* Next */}
      <section className="container section">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <div>
            <div className="eyebrow">Next project</div>
            <h2 className="h2 serif" style={{ marginTop: 12 }}>Regional instability, made readable.</h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <a href="#/work/horizon-brief" className="btn btn-ghost">View project <span className="arrow">→</span></a>
          </div>
        </div>
      </section>
    </article>
  );
}

window.Sample1 = Sample1;
