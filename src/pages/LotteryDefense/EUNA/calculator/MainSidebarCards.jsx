import React from 'react';
import { InfoRow, MiniStat } from '../../../../components/common/Stats';
import { formatNumber } from '../utils/calculatorHelpers';
import {
  RUNE_AWAKENING_OPTIONS,
  RUNE_BONUS_FIFTEEN_OPTIONS,
  RUNE_BONUS_TEN_OPTIONS,
  RUNE_ENCHANT_LEVEL_OPTIONS,
  RUNE_ENCHANT_ROWS,
  RUNE_ICON_BY_TYPE,
  RUNE_LAYOUTS,
  RUNE_LEVEL_OPTIONS,
  RUNE_RACE_UPGRADE_OPTIONS,
  RUNE_STAT_LEVEL_OPTIONS
} from '../constants/calculator/runeConstants';

function SelectValue({
  value,
  options,
  onChange,
  className = '',
}) {
  return (
    <select
      className={`rune-panel-select ${className}`.trim()}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((option) => {
        const normalized = typeof option === 'string'
          ? { value: option, label: option }
          : option;

        return (
          <option key={normalized.value} value={normalized.value}>
            {normalized.label}
          </option>
        );
      })}
    </select>
  );
}

export function RuneSummaryCard({ settings, updateSetting, runeSlots }) {
  const runeType = settings.runeType ?? 'Cosmos';
  const runeLayout = RUNE_LAYOUTS[runeType] ?? RUNE_LAYOUTS.Final;
  const runeIcon = RUNE_ICON_BY_TYPE[runeType] ?? '';

  return (
    <section className="card sidebar-card rune-panel-card">
      <div className="rune-panel-frame">
        <div className="rune-panel-top">
          <div className="rune-slot-box">
            <span className="rune-slot-label">Slot</span>
            <SelectValue
              value={settings.runeSlot}
              options={runeSlots.map((slot) => ({ value: slot, label: slot }))}
              onChange={(value) => updateSetting('runeSlot', value)}
              className="rune-slot-select"
            />
          </div>
          <div className="rune-icon-box">

            <div className="rune-icon-shell">
              {runeIcon ? (
                <img src={runeIcon} alt={runeType} className="rune-icon-image" />
              ) : (
                <div className="rune-icon-fallback">{runeType}</div>
              )}
            </div>
          </div>
        </div>

        <div className="rune-meta-grid">
          <div className="rune-meta-cell">
            <span>Rune Lvl</span>
            <SelectValue
              value={settings.runeLevel ?? 15}
              options={RUNE_LEVEL_OPTIONS.map((value) => ({
                value,
                label: value,
              }))}
              onChange={(value) => updateSetting('runeLevel', Number(value))}
              className="rune-white-select"
            />
          </div>

          <div className="rune-meta-cell">
            <span>Awakening</span>
            <SelectValue
              value={settings.runeAwakening ?? 'None'}
              options={RUNE_AWAKENING_OPTIONS}
              onChange={(value) => updateSetting('runeAwakening', value)}
              className="rune-cyan-select"
            />
          </div>
        </div>

        <div className="rune-primary-grid">
          {runeLayout.primaryRows.map((row) => (
            <div key={row.id} className="rune-stat-row">
              <div className="rune-stat-label">{row.label}</div>

              <div className="rune-stat-col">
                <SelectValue
                  value={settings[`rune_${row.id}_base`] ?? 0}
                  options={RUNE_STAT_LEVEL_OPTIONS.map((value) => ({
                    value,
                    label: value,
                  }))}
                  onChange={(value) =>
                    updateSetting(`rune_${row.id}_base`, Number(value))
                  }
                  className="rune-white-select"
                />
              </div>

              <div className="rune-stat-col rune-yellow-value">
                {row.yellowValue || '-'}
              </div>

              <div className="rune-stat-col">
                {row.pinkEnabled ? (
                  <SelectValue
                    value={settings[`rune_${row.id}_bonus`] ?? 0}
                    options={RUNE_STAT_LEVEL_OPTIONS.map((value) => ({
                      value,
                      label: value,
                    }))}
                    onChange={(value) =>
                      updateSetting(`rune_${row.id}_bonus`, Number(value))
                    }
                    className="rune-pink-select"
                  />
                ) : (
                  <span className="rune-empty-cell">-</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="rune-bonus-grid">
          <div className="rune-bonus-row">
            <div className="rune-bonus-label rune-green-text">Race Upgrade +1</div>
            <SelectValue
              value={settings.runeRaceUpgrade ?? 'None'}
              options={RUNE_RACE_UPGRADE_OPTIONS}
              onChange={(value) => updateSetting('runeRaceUpgrade', value)}
              className="rune-green-select"
            />
          </div>

          <div className="rune-bonus-row">
            <div className="rune-bonus-label rune-yellow-text">+10 bonus</div>
            <SelectValue
              value={settings.runeBonusTen ?? 'None'}
              options={RUNE_BONUS_TEN_OPTIONS}
              onChange={(value) => updateSetting('runeBonusTen', value)}
              className="rune-yellow-select"
            />
          </div>

          <div className="rune-bonus-row">
            <div className="rune-bonus-label rune-yellow-text">+15 bonus</div>
            <SelectValue
              value={settings.runeBonusFifteen ?? 'None'}
              options={RUNE_BONUS_FIFTEEN_OPTIONS}
              onChange={(value) => updateSetting('runeBonusFifteen', value)}
              className="rune-yellow-select"
            />
          </div>
        </div>

        <div className="rune-enchant-section">
          <div className="rune-enchant-title">Enchant</div>

          {RUNE_ENCHANT_ROWS.map((row) => (
            <div key={row.id} className="rune-enchant-row">
              <div className="rune-enchant-label">{row.label}</div>

              <div className="rune-enchant-level">
                <SelectValue
                  value={settings[`enchant_${row.id}`] ?? 0}
                  options={RUNE_ENCHANT_LEVEL_OPTIONS.map((value) => ({
                    value,
                    label: value,
                  }))}
                  onChange={(value) =>
                    updateSetting(`enchant_${row.id}`, Number(value))
                  }
                  className="rune-pink-select"
                />
              </div>

              <div className="rune-enchant-value">{row.value}</div>
            </div>
          ))}
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

export function CreepStatsCard() {
  return (
    <section className="card sidebar-card">
      <h3>Enemy Creep Stats</h3>
      <div className="sidebar-list-grid creep-stats-grid">
        <InfoRow label="Shield / HP" value="50000" />
        <InfoRow label="HP Regen" value="0" />
        <InfoRow label="Shield Regen" value="0" />
        <InfoRow label="Armor" value="216" />
        <InfoRow label="Shield Armor" value="88" />
        <InfoRow label="Move Speed" value="0" />
      </div>
    </section>
  );
}

export function UnitRecipeCostCard() {
  const recipeGroups = [
    {
      id: 'terran-bio',
      rows: [
        { label: 'Marine', value: 0, tone: 'blue' },
        { label: 'Ghost', value: 0, tone: 'blue' },
        { label: 'Marauder', value: 0, tone: 'blue' },
      ],
    },
    {
      id: 'terran-mech',
      rows: [
        { label: 'Goliath', value: 0, tone: 'blue' },
        { label: 'Diamond', value: 0, tone: 'blue' },
        { label: 'Tank', value: 0, tone: 'blue' },
      ],
    },
    {
      id: 'protoss',
      rows: [
        { label: 'Zealot', value: 0, tone: 'yellow' },
        { label: 'Templar', value: 0, tone: 'yellow' },
        { label: 'Archon', value: 0, tone: 'yellow' },
      ],
    },
    {
      id: 'protoss-advanced',
      rows: [
        { label: 'Sentry', value: 0, tone: 'orange' },
        { label: 'Stalker', value: 0, tone: 'orange' },
        { label: 'Immortal', value: 0, tone: 'orange' },
      ],
    },
    {
      id: 'zerg',
      rows: [
        { label: 'Roach', value: 0, tone: 'red' },
        { label: 'Lurker', value: 0, tone: 'red' },
        { label: 'Hydralisk', value: 0, tone: 'red' },
      ],
    },
  ];

  return (
    <section className="card sidebar-card">
      <h3>Unit Recipe Cost</h3>

      <div className="recipe-total-row">
        <span>Total Unit Cost</span>
        <strong>0</strong>
      </div>

      <div className="recipe-groups">
        {recipeGroups.map((group) => (
          <div key={group.id} className="recipe-group-box">
            {group.rows.map((row) => (
              <div key={row.label} className="recipe-row">
                <span className={`recipe-label ${row.tone}`}>{row.label}</span>
                <strong>{row.value}</strong>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}