import React from 'react';
import { InfoRow, MiniStat } from '../../../../components/common/Stats';
import { formatNumber } from '../utils/calculatorHelpers';

export function RuneSummaryCard({ settings, updateSetting, runeSlots }) {
  return (
    <section className="card sidebar-card rune-summary-card">
      <div className="section-heading-row compact-gap">
        <div>
          <h3>Selected Rune</h3>
          <p>Display summary fed by the Runes tab.</p>
        </div>
      </div>
      <div className="rune-visual-shell">
        <div className="rune-badge">{settings.runeType}</div>
        <div className="rune-details-grid">
          <div className="rune-slot-tile">
            <span>Slot</span>
            <select
              value={settings.runeSlot}
              onChange={(event) => updateSetting('runeSlot', event.target.value)}
            >
              {runeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
          <div>
            <span>Level</span>
            <strong>{settings.runeLevel}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export function QuickStatsCard({ derivedStats }) {
  return (
    <section className="card sidebar-card">
      <h3>Quick Stats</h3>
        <div className="mini-stat-grid">
          <MiniStat label="AD" value="1172" />
          <MiniStat label="SD" value="1172" />
          <MiniStat label="AS" value="535.0" />
          <MiniStat label="CC" value="354.5" />
          <MiniStat label="CD" value="359.2" />
          <MiniStat label="T(CD)" value="359.2" />
          <MiniStat label="MC" value="42.0" />
          <MiniStat label="Avg MC" value="42.0" />
          <MiniStat label="-Def %" value="25.0" />
          <MiniStat label="ES" value="23.5" />
          <MiniStat label="FD" value="23.5" />
          <MiniStat label="MT" value="23.5" />
          <MiniStat label="ETC" value="23.5" />
        </div>
    </section>
  );
}

export function BuffPreviewCard() {
  return (
    <section className="card sidebar-card">
      <h3>Buff Preview</h3>
      <div className="sidebar-list-grid">
        <InfoRow label="Full Team Buff" value="2" />
        <InfoRow label="Bless" value="1" />
        <InfoRow label="SD Gem" value="None" />
      </div>
    </section>
  );
}

export function BuildMetaCard({ units }) {
  return (
    <section className="card sidebar-card">
      <h3>Build Snapshot</h3>
      <div className="tag-list">
        {units.map((unit) => (
          <span className="tag-pill" key={unit.entryId}>
            {unit.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export function MainTabNotesCard() {
  return (
    <section className="card sidebar-card">
      <h3>Main Tab Notes</h3>
      <ul className="notes-list">
        <li>Main tab is focused on settings, unit list, and DPS overview.</li>
        <li>Runes on the left are summary-only here.</li>
        <li>SP Upgrades, Runes, Jewels, and Buffs are separated into their own tabs.</li>
        <li>The unit table is built to stay dynamic and scrollable.</li>
      </ul>
    </section>
  );
}
