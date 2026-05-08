/* contact.jsx */

function Contact() {
  const [form, setForm] = React.useState({
    name: '', org: '', email: '', projectType: '', timeline: '', source: '', message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <article>
      {/* Hero */}
      <section className="container" style={{ paddingTop: 96, paddingBottom: 64 }}>
        <div className="eyebrow">— Contact</div>
        <h1 className="serif" style={{ fontSize: 'clamp(48px, 6vw, 96px)', marginTop: 28, maxWidth: '14ch', letterSpacing: '-0.025em', lineHeight: 0.98 }}>
          Tell us about<br/>the work.
        </h1>
        <p className="lede" style={{ marginTop: 36, maxWidth: '54ch' }}>
          The form below is the fastest way to reach us. We read every inquiry, and reply within two business days —
          usually within one. If we're a fit, we'll suggest a 30-minute discovery call.
        </p>
      </section>

      <section className="container" style={{ paddingBottom: 80 }}>
        <div className="grid-12" style={{ alignItems: 'start', columnGap: 48, rowGap: 64 }}>
          {/* Form */}
          <div style={{ gridColumn: 'span 7' }}>
            {!submitted ? (
              <form onSubmit={onSubmit} style={{ background: 'var(--off-white)', border: '1px solid var(--rule)', padding: 'clamp(28px, 4vw, 48px)' }}>
                <div className="eyebrow">— Project inquiry</div>
                <h2 className="serif" style={{ fontSize: 'clamp(24px, 2.4vw, 32px)', marginTop: 12, marginBottom: 32, letterSpacing: '-0.014em' }}>
                  Tell us a bit about you.
                </h2>

                <div className="grid-2" style={{ gap: 24 }}>
                  <div className="field">
                    <label>Your name</label>
                    <input required value={form.name} onChange={update('name')} placeholder="First and last" />
                  </div>
                  <div className="field">
                    <label>Organization</label>
                    <input required value={form.org} onChange={update('org')} placeholder="Where you work" />
                  </div>
                </div>

                <div className="field">
                  <label>Email</label>
                  <input required type="email" value={form.email} onChange={update('email')} placeholder="you@org.com" />
                </div>

                <div className="grid-2" style={{ gap: 24 }}>
                  <div className="field">
                    <label>Project type</label>
                    <select required value={form.projectType} onChange={update('projectType')}>
                      <option value="">Select one…</option>
                      <option>Annual / impact report</option>
                      <option>Executive brief or white paper</option>
                      <option>Interactive dashboard</option>
                      <option>Presentation deck</option>
                      <option>Visual system audit</option>
                      <option>Quarterly retainer</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Ideal timeline</label>
                    <select required value={form.timeline} onChange={update('timeline')}>
                      <option value="">Select one…</option>
                      <option>Within 4 weeks</option>
                      <option>1–2 months</option>
                      <option>2–4 months</option>
                      <option>4+ months</option>
                      <option>Exploring — no rush</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label>How did you hear about us?</label>
                  <input value={form.source} onChange={update('source')} placeholder="A colleague, a publication, a search…" />
                </div>

                <div className="field">
                  <label>What are you working on?</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={update('message')}
                    placeholder="A few sentences on the project, the audience, and what you'd like the design to do."
                    rows={5}
                  />
                </div>

                <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, letterSpacing: '0.08em', color: 'var(--muted)', textTransform: 'uppercase' }}>
                    Reply within 2 business days
                  </span>
                  <button type="submit" className="btn btn-primary">Send inquiry <span className="arrow">→</span></button>
                </div>
              </form>
            ) : (
              <div style={{ background: 'var(--forest)', color: 'var(--off-white)', padding: 'clamp(36px, 4vw, 56px)' }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(250,246,236,0.6)' }}>— Received</div>
                <h2 className="serif" style={{ fontSize: 'clamp(28px, 3vw, 44px)', marginTop: 16, color: 'var(--off-white)', letterSpacing: '-0.018em' }}>
                  Thanks, {form.name.split(' ')[0] || 'friend'}.
                </h2>
                <p style={{ fontFamily: 'Newsreader, serif', fontSize: 18, lineHeight: 1.5, color: 'rgba(250,246,236,0.8)', marginTop: 18, maxWidth: '50ch' }}>
                  We'll read your note carefully and reply within two business days from <a href="mailto:hello@bridge-studio.co" style={{ borderBottom: '1px solid rgba(250,246,236,0.4)' }}>hello@bridge-studio.co</a>.
                  If a discovery call makes sense, we'll suggest some times.
                </p>
                <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', org: '', email: '', projectType: '', timeline: '', source: '', message: '' }); }} className="btn" style={{ background: 'transparent', color: 'var(--off-white)', borderColor: 'rgba(250,246,236,0.5)' }}>Send another</button>
                  <a href="#/work" className="btn btn-terracotta">See sample work <span className="arrow">→</span></a>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar — book a call + contact */}
          <div style={{ gridColumn: 'span 5' }}>
            {/* Book a call (Cal.com placeholder) */}
            <div style={{ border: '1px solid var(--rule)', padding: 32, background: 'var(--paper-2)' }}>
              <div className="eyebrow">— Or, book a call directly</div>
              <h3 className="serif" style={{ fontSize: 28, marginTop: 12, letterSpacing: '-0.014em' }}>30-minute discovery call</h3>
              <p className="body" style={{ fontSize: 14.5, marginTop: 12 }}>
                If you already know it's a project — skip the form and put time on our calendar.
                We use Cal.com.
              </p>

              {/* Cal.com embed mock */}
              <div style={{ marginTop: 20, background: 'var(--off-white)', border: '1px solid var(--rule)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid var(--rule)' }}>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'var(--muted)' }}>cal.com / bridge-studio</span>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'var(--terracotta)' }}>● 4 slots this week</span>
                </div>
                <div style={{ padding: '20px 16px' }}>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 14 }}>MAY 2026 — NEXT AVAILABLE</div>
                  <MiniCal />
                </div>
                <div style={{ padding: '14px 16px', borderTop: '1px solid var(--rule)', textAlign: 'center' }}>
                  <a href="#" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 13, padding: '12px 18px' }}>Open in Cal.com <span className="arrow">→</span></a>
                </div>
              </div>
            </div>

            {/* Direct contact */}
            <div style={{ marginTop: 32, padding: 32, border: '1px solid var(--rule)' }}>
              <div className="eyebrow">— Or, just email</div>
              <a href="mailto:hello@bridge-studio.co" className="serif" style={{ display: 'block', fontSize: 26, marginTop: 12, color: 'var(--ink)', borderBottom: '1px solid var(--rule)', paddingBottom: 16, letterSpacing: '-0.012em' }}>
                hello@bridge-studio.co
              </a>
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', color: 'var(--muted)' }}>RESPONSE TIME</span>
                  <span style={{ fontSize: 14, color: 'var(--ink)' }}>Within 2 business days</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', color: 'var(--muted)' }}>BOOKED THROUGH</span>
                  <span style={{ fontSize: 14, color: 'var(--ink)' }}>Q2 — 2026</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', color: 'var(--muted)' }}>NEXT AVAILABILITY</span>
                  <span style={{ fontSize: 14, color: 'var(--terracotta)' }}>Late July 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container section" style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="grid-12" style={{ alignItems: 'start', columnGap: 48 }}>
          <div style={{ gridColumn: 'span 4' }}>
            <div className="eyebrow">— Common questions</div>
            <h2 className="h2 serif" style={{ marginTop: 16, maxWidth: '12ch' }}>Before you write.</h2>
          </div>
          <div style={{ gridColumn: 'span 8' }}>
            {[
              { q: 'Do you take on small projects?', a: 'Yes — though "small" tends to mean a single deliverable rather than a system. A 12-page brief is welcome. A six-page one is usually a fit for someone else, and we'+'\u2019'+'ll happily refer.' },
              { q: 'Do you do logos and brand identity?', a: 'No. We design publications, data, and the editorial systems around them. We work with brand designers we like, and we'+'\u2019'+'re happy to recommend.' },
              { q: 'How much does a project cost?', a: 'Single-publication engagements start at $24,000 and most fall between $30k and $60k. Quarterly retainers and visual-system audits are quoted separately. We'+'\u2019'+'ll send a fixed-fee proposal after the discovery call.' },
              { q: 'Can you work with our existing chart library / brand?', a: 'Yes. Many of our clients have an existing brand system; we extend it carefully rather than replace it. The Visual System Audit is designed for exactly this.' },
              { q: 'Do you sign NDAs?', a: 'Routinely. Send yours with your inquiry, or we'+'\u2019'+'ll send ours.' },
            ].map((row, i) => (
              <details key={i} style={{ borderTop: '1px solid var(--rule)', borderBottom: i === 4 ? '1px solid var(--rule)' : 'none', padding: '20px 0' }}>
                <summary style={{ cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Newsreader, serif', fontSize: 'clamp(18px, 1.6vw, 22px)', color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                  <span>{row.q}</span>
                  <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 14, color: 'var(--muted)' }}>+</span>
                </summary>
                <p className="body" style={{ marginTop: 16, fontSize: 16, maxWidth: '60ch' }}>{row.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

function MiniCal() {
  // Editorial mini calendar — show booked vs available slots
  const days = ['M','T','W','T','F','S','S'];
  const today = 4; // Thursday
  const bookings = { 1:'b', 2:'b', 4:'a', 6:'b', 8:'a', 9:'b', 11:'a', 13:'a', 15:'b', 18:'b', 20:'a', 22:'a', 25:'b', 27:'a' };
  const cells = Array.from({ length: 30 }, (_, i) => i + 1);
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 6 }}>
        {days.map((d, i) => (
          <div key={i} className="mono" style={{ textAlign: 'center', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em' }}>{d}</div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
        {cells.map((d) => {
          const status = bookings[d];
          const isToday = d === today;
          let bg = 'transparent';
          let color = 'var(--ink)';
          let border = '1px solid var(--rule)';
          if (status === 'a') { bg = 'var(--forest)'; color = 'var(--off-white)'; border = '1px solid var(--forest)'; }
          if (status === 'b') { bg = 'var(--paper-2)'; color = 'var(--muted)'; border = '1px solid var(--rule)'; }
          if (isToday) { border = '1px solid var(--terracotta)'; }
          return (
            <div key={d} style={{
              aspectRatio: '1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Geist Mono, monospace',
              fontSize: 11,
              background: bg,
              color: color,
              border: border,
              cursor: status === 'a' ? 'pointer' : 'default',
              transition: 'transform .15s',
            }}
            onMouseEnter={(e) => { if (status === 'a') e.currentTarget.style.transform = 'scale(1.06)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >{d}</div>
          );
        })}
      </div>
      <div style={{ display: 'flex', gap: 16, marginTop: 14, fontFamily: 'Geist Mono, monospace', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.06em' }}>
        <span><span style={{ display: 'inline-block', width: 8, height: 8, background: 'var(--forest)', marginRight: 6, verticalAlign: 'middle' }} />OPEN</span>
        <span><span style={{ display: 'inline-block', width: 8, height: 8, background: 'var(--paper-2)', border: '1px solid var(--rule)', marginRight: 6, verticalAlign: 'middle' }} />BOOKED</span>
        <span><span style={{ display: 'inline-block', width: 8, height: 8, border: '1px solid var(--terracotta)', marginRight: 6, verticalAlign: 'middle' }} />TODAY</span>
      </div>
    </div>
  );
}

window.Contact = Contact;
