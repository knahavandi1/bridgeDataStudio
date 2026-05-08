/* layout.jsx — nav, footer, router scaffolding */

const { useState, useEffect, useMemo, useRef } = React;

/* ===================================================== */
function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash.replace('#', '') || '/');
  useEffect(() => {
    const onHash = () => {
      setHash(window.location.hash.replace('#', '') || '/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return hash;
}

function navigate(path) {
  window.location.hash = path;
}

/* ===================================================== */
function BrandMark({ scale = 1, color = 'currentColor' }) {
  // Calligraphic paths from bridge_studio_option_02.svg — mark only
  // English wordmark rendered as HTML so it uses real site typography at proper sizes
  const markW = 220 * scale;
  // ViewBox is 910 wide × 150 tall (just the arc + diamond, no text area)
  const markH = Math.round(markW * 150 / 910);
  // Font sizes: use generous base values so they stay readable at small scales
  const bridgeSize = Math.max(13, Math.round(32 * scale));
  const studioSize = Math.max(8, Math.round(13 * scale));
  const gap = Math.max(3, Math.round(6 * scale));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap }}>
      {/* ── Arabic calligraphic bridge mark ── */}
      <svg width={markW} height={markH} viewBox="-10 30 910 150" fill="none" preserveAspectRatio="xMidYMid meet" style={{ overflow: 'visible' }}>
        {/* Main flowing arc */}
        <path
          d="M 0 167 C 42 166,58 125,101 102 C 143 80,185 102,227 119 C 295 147,378 145,455 135 C 561 121,665 83,724 56 C 753 43,775 37,799 42 C 825 47,847 60,866 73"
          stroke={color} strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
        {/* Jeem-style hook */}
        <path
          d="M 866 73 C 836 76,808 84,782 101 C 819 102,852 97,881 82"
          stroke={color} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
        {/* Diamond dot */}
        <rect x="793" y="148" width="20" height="20" transform="rotate(45 803 158)" fill={color}/>
      </svg>

      {/* ── English wordmark — real HTML, site typography ── */}
      <div style={{ textAlign: 'center', lineHeight: 1 }}>
        <div style={{
          fontFamily: "'Newsreader', Georgia, serif",
          fontWeight: 300,
          fontSize: bridgeSize,
          letterSpacing: '0.22em',
          color,
          textTransform: 'uppercase',
        }}>Bridge</div>
        <div style={{
          fontFamily: "'Geist Mono', monospace",
          fontWeight: 400,
          fontSize: studioSize,
          letterSpacing: '0.2em',
          color,
          opacity: 0.6,
          marginTop: 3,
          textTransform: 'uppercase',
        }}>◆ Studio</div>
      </div>
    </div>
  );
}

function FullLogo({ color = 'currentColor', scale = 1 }) {
  return <BrandMark scale={scale} color={color} />;
}

/* ===================================================== */
function Nav() {
  const route = useHashRoute();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const isActive = (p) => route === p || (p === '/work' && route.startsWith('/work'));
  const link = (p, label) => (
    <a href={`#${p}`} className={isActive(p) ? 'active' : ''}>{label}</a>
  );
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#/" className="brand" style={{ lineHeight: 1 }}>
          <BrandMark scale={0.45} color="#1A1612" />
        </a>
        <div className="nav-links">
          {link('/work', 'Work')}
          {link('/services', 'Services')}
          {link('/about', 'About')}
          {link('/contact', 'Contact')}
          <a href="#/contact" className="btn btn-paper nav-cta" style={{ padding: '10px 18px', fontSize: 13 }}>
            Book a call <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ===================================================== */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>— Let's work together</div>
        <div className="footer-cta" style={{ marginTop: 20 }}>
          Tell us about the<br/>work that needs<br/><a href="#/contact">to be seen.</a>
        </div>

        <div className="footer-grid">
          <div>
            <div className="brand" style={{ lineHeight: 1 }}>
              <BrandMark scale={0.55} color="#FAF6EC" />
            </div>
            <p className="body" style={{ color: 'rgba(255,255,255,0.65)', marginTop: 16, maxWidth: 340 }}>
              A small studio turning complex data into visual stories — for organizations whose work deserves to be understood.
            </p>
          </div>
          <div>
            <h5>Site</h5>
            <ul>
              <li><a href="#/work">Work</a></li>
              <li><a href="#/services">Services</a></li>
              <li><a href="#/about">About</a></li>
              <li><a href="#/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:hello@bridge-studio.co">hello@bridge-studio.co</a></li>
              <li><a href="#/contact">Book a call</a></li>
            </ul>
          </div>
          <div>
            <h5>Elsewhere</h5>
            <ul>
              <li><a href="#">Are.na</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Substack</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-meta">
          <span>© {year} Bridge Studio</span>
          <span>DC Area · Remote worldwide</span>
        </div>
      </div>
    </footer>
  );
}

/* ===================================================== */
/* Striped placeholder — for things needing real photography later */
function Placeholder({ label = 'image', height = 280, tone = 'paper' }) {
  const bg = tone === 'paper' ? '#EAE2D1' : '#1F3A2E';
  const fg = tone === 'paper' ? 'rgba(26,22,18,0.18)' : 'rgba(250,246,236,0.18)';
  const text = tone === 'paper' ? '#6B5F52' : 'rgba(250,246,236,0.7)';
  return (
    <div style={{
      height, background: bg,
      backgroundImage: `repeating-linear-gradient(135deg, ${fg} 0 1px, transparent 1px 12px)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Geist Mono, monospace', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: text, border: '1px solid #C9BEA8',
    }}>
      {label}
    </div>
  );
}

Object.assign(window, { useHashRoute, navigate, Nav, Footer, BrandMark, FullLogo, Placeholder });
