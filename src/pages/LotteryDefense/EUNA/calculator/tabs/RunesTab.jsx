import React from 'react';
import { RUNE_TYPES } from '../../constants/calculator/runeConstants';

export default function RunesTab() {
  return (
    <section className="card tab-panel-card">
      <div className="section-heading-row">
        <div>
          <h3>Runes</h3>
          <p>Placeholder rune editor. The main page will read from here later.</p>
        </div>
      </div>
      <div className="placeholder-config-grid">
        {RUNE_TYPES.map((rune) => (
          <article className="config-card" key={rune}>
            <h4>{rune}</h4>
            <div className="mock-config-list">
              <span>AD</span>
              <span>AS</span>
              <span>CD</span>
              <span>CC</span>
              <span>FD</span>
              <span>Accel</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
