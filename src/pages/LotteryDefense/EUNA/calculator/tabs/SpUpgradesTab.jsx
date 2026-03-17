import React from 'react';
import { UPGRADE_GROUPS } from '../../constants/calculatorData';

export default function SpUpgradesTab() {
  return (
    <section className="card tab-panel-card">
      <div className="section-heading-row">
        <div>
          <h3>SP Upgrade Pages</h3>
          <p>Scaffolded upgrade groups for future level and cost inputs.</p>
        </div>
      </div>

      <div className="upgrade-groups-grid">
        {UPGRADE_GROUPS.map((group) => (
          <article className="upgrade-group-card" key={group.name}>
            <h4>{group.name}</h4>
            <div className="upgrade-pill-list">
              {group.upgrades.map((upgrade) => (
                <span className="upgrade-pill" key={upgrade}>
                  {upgrade}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
