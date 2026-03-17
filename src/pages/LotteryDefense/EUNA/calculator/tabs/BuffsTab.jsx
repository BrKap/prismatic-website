import React from 'react';

export default function BuffsTab() {
  return (
    <section className="card tab-panel-card">
      <div className="section-heading-row">
        <div>
          <h3>Buffs</h3>
          <p>Future toggle window for team buffs, gems, and special modifiers.</p>
        </div>
      </div>
      <div className="placeholder-config-grid">
        {['Full Team Buff', 'Bless', 'SD Gem', 'Solo Crit Gem', 'Sandbox', 'Purifier'].map((buff) => (
          <article className="config-card" key={buff}>
            <h4>{buff}</h4>
            <p>Placeholder input area.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
