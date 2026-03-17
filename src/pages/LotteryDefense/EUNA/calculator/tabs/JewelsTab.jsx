import React from 'react';

export default function JewelsTab() {
  return (
    <section className="card tab-panel-card">
      <div className="section-heading-row">
        <div>
          <h3>Jewels</h3>
          <p>Future jewel inventory and jewel assignment settings.</p>
        </div>
      </div>
      <div className="placeholder-config-grid jewels-grid">
        {['Jewels'].map((item) => (
          <article className="config-card" key={item}>
            <h4>{item}</h4>
            <p>Jewel Stats Here</p>
          </article>
        ))}
      </div>
    </section>
  );
}
