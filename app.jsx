/* app.jsx — top-level router + mount */

function NotFound() {
  return (
    <section className="container section" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="eyebrow">— 404</div>
      <h1 className="serif" style={{ fontSize: 'clamp(48px, 6vw, 88px)', marginTop: 24, letterSpacing: '-0.025em' }}>
        That page<br/>has wandered off.
      </h1>
      <p className="lede" style={{ marginTop: 24, maxWidth: '40ch' }}>
        Try one of the working ones — or write us, and we'll send a more interesting one.
      </p>
      <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a href="#/" className="btn btn-primary">Back to home <span className="arrow">→</span></a>
        <a href="#/work" className="btn btn-ghost">See work <span className="arrow">→</span></a>
      </div>
    </section>
  );
}

function App() {
  const route = useHashRoute();

  let page;
  switch (route) {
    case '/':                page = <Home />; break;
    case '/work':            page = <Work />; break;
    case '/work/clean-air':  page = <Sample1 />; break;
    case '/work/horizon-brief': page = <Sample2 />; break;
    case '/work/move-index': page = <Sample3 />; break;
    case '/services':        page = <Services />; break;
    case '/about':           page = <About />; break;
    case '/contact':         page = <Contact />; break;
    default:                 page = <NotFound />;
  }

  return (
    <div>
      <Nav />
      <main>{page}</main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
