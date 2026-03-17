import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <h1>Prismatic's Website</h1>
          <p className="site-subtitle">All of my website projects</p>
        </div>
        <nav className="top-nav" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/lottery-defense">Lottery Defense</NavLink>
          <NavLink to="/pnc">PNC</NavLink>
          <NavLink to="/links">Links</NavLink>
        </nav>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/lottery-defense" element={<LotteryDefensePage />} />
          <Route path="/lottery-defense/euna" element={<RegionPage title="Lottery Defense - EUNA" />} />
          <Route path="/lottery-defense/euna/guides" element={<PlaceholderPage title="Lottery Defense - EUNA Guides" />} />
          <Route path="/lottery-defense/euna/calculator" element={<PlaceholderPage title="Lottery Defense - EUNA Calculator" />} />
          <Route path="/lottery-defense/kr" element={<RegionPage title="Lottery Defense - KR" />} />
          <Route path="/lottery-defense/kr/guides" element={<PlaceholderPage title="Lottery Defense - KR Guides" />} />
          <Route path="/lottery-defense/kr/calculator" element={<PlaceholderPage title="Lottery Defense - KR Calculator" />} />

          <Route path="/pnc" element={<PncPage />} />
          <Route path="/pnc/guides" element={<PlaceholderPage title="PNC Guides" />} />
          <Route path="/pnc/tools" element={<PlaceholderPage title="PNC Tools" />} />

          <Route path="/links" element={<LinksPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

function HomePage() {
  return <section className="card empty-home" aria-label="Home page" />;
}

function LotteryDefensePage() {
  return (
    <section className="card">
      <h2>Lottery Defense</h2>
      <p>Select a region.</p>
      <div className="link-grid">
        <SectionLink to="/lottery-defense/euna" title="EUNA" description="Guides and calculator pages." />
        <SectionLink to="/lottery-defense/kr" title="KR" description="Guides and calculator pages." />
      </div>
    </section>
  );
}

function RegionPage({ title }) {
  const basePath = title.includes('EUNA')
    ? '/lottery-defense/euna'
    : '/lottery-defense/kr';

  return (
    <section className="card">
      <h2>{title}</h2>
      <p>Select a page.</p>
      <div className="link-grid">
        <SectionLink to={`${basePath}/guides`} title="Guides" description="Page scaffold for future guides." />
        <SectionLink to={`${basePath}/calculator`} title="Calculator" description="Page scaffold for future calculator tools." />
      </div>
    </section>
  );
}

function PncPage() {
  return (
    <section className="card">
      <h2>PNC</h2>
      <p>Puzzles &amp; Chaos</p>
      <div className="link-grid">
        <SectionLink to="/pnc/guides" title="Guides" description="Page scaffold for future guides." />
        <SectionLink to="/pnc/tools" title="Tools" description="Page scaffold for future tools." />
      </div>
    </section>
  );
}

function LinksPage() {
  return (
    <section className="card">
      <h2>Links</h2>
      <p>Quick navigation for testing.</p>
      <ul className="quick-links">
        <li>
          <Link to="/lottery-defense">Lottery Defense</Link>
        </li>
        <li>
          <Link to="/pnc">PNC</Link>
        </li>
      </ul>
    </section>
  );
}

function PlaceholderPage({ title }) {
  return (
    <section className="card placeholder-page">
      <h2>{title}</h2>
      <p>Under Construction</p>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="card placeholder-page">
      <h2>Page Not Found</h2>
      <p>This route does not exist yet.</p>
    </section>
  );
}

function SectionLink({ to, title, description }) {
  return (
    <Link className="section-link" to={to}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

export default App;
