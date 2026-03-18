import React, { useMemo, useState } from 'react';
import { UPGRADE_GROUPS } from '../../constants/calculatorData';

function getNextUpgradePrice(upgrade, investedCount) {
  if (investedCount >= upgrade.maxInvestments) {
    return 0;
  }

  return upgrade.basePrice + investedCount * upgrade.priceIncreasePerLevel;
}

function getTotalUpgradePrice(upgrade, investedCount) {
  let total = 0;

  for (let level = 0; level < investedCount; level += 1) {
    total += upgrade.basePrice + level * upgrade.priceIncreasePerLevel;
  }

  return total;
}

function buildInitialInvestments() {
  const initial = {};

  UPGRADE_GROUPS.forEach((group) => {
    initial[group.id] = {};

    group.upgrades.forEach((upgrade) => {
      initial[group.id][upgrade.id] = 0;
    });
  });

  return initial;
}

export default function SpUpgradesTab() {
  const [activeGroupId, setActiveGroupId] = useState(UPGRADE_GROUPS[0]?.id ?? '');
  const [investments, setInvestments] = useState(buildInitialInvestments);

  const activeGroup =
    UPGRADE_GROUPS.find((group) => group.id === activeGroupId) ?? UPGRADE_GROUPS[0];

  const totals = useMemo(() => {
    let totalSpOverall = 0;
    let totalEpOverall = 0;

    const groupTotals = {};

    UPGRADE_GROUPS.forEach((group) => {
      let groupTotal = 0;

      group.upgrades.forEach((upgrade) => {
        const investedCount = investments[group.id]?.[upgrade.id] ?? 0;
        groupTotal += getTotalUpgradePrice(upgrade, investedCount);
      });

      groupTotals[group.id] = groupTotal;

      if (group.currency === 'EP') {
        totalEpOverall += groupTotal;
      } else {
        totalSpOverall += groupTotal;
      }
    });

    return {
      totalSpOverall,
      totalEpOverall,
      groupTotals,
    };
  }, [investments]);

  function updateInvestment(groupId, upgradeId, nextValue) {
    setInvestments((current) => {
      const group = UPGRADE_GROUPS.find((entry) => entry.id === groupId);
      const upgrade = group?.upgrades.find((entry) => entry.id === upgradeId);

      if (!group || !upgrade) {
        return current;
      }

      const parsedValue = Number(nextValue);
      const safeValue = Number.isNaN(parsedValue) ? 0 : parsedValue;
      const clampedValue = Math.max(0, Math.min(upgrade.maxInvestments, safeValue));

      return {
        ...current,
        [groupId]: {
          ...current[groupId],
          [upgradeId]: clampedValue,
        },
      };
    });
  }

  if (!activeGroup) {
    return (
      <section className="card tab-panel-card">
        <h3>SP Upgrade Pages</h3>
        <p>No upgrade groups found.</p>
      </section>
    );
  }

  const activeGroupTotal = totals.groupTotals[activeGroup.id] ?? 0;
  const isEpGroup = activeGroup.currency === 'EP';

  return (
    <section className="card tab-panel-card sp-upgrades-layout">
      <aside className="sp-upgrade-sidebar">
        {UPGRADE_GROUPS.map((group) => (
          <button
            key={group.id}
            type="button"
            className={`sp-upgrade-side-tab ${
              group.id === activeGroup.id ? 'is-active' : ''
            }`}
            onClick={() => setActiveGroupId(group.id)}
          >
            {group.label}
          </button>
        ))}
      </aside>

      <div className="sp-upgrade-content">
        <div className="section-heading-row sp-upgrade-header">
          <div>
            <h3>{activeGroup.label} Upgrades</h3>
            <p>
              Track invested levels and costs before wiring full stat calculations.
            </p>
          </div>

          <div className="sp-upgrade-totals">
            <div className="stat-chip">
              <span className="stat-chip-label">
                Total {activeGroup.currency} invested in this tab
              </span>
              <strong>{activeGroupTotal}</strong>
            </div>

            <div className="stat-chip">
              <span className="stat-chip-label">Total SP invested overall</span>
              <strong>{totals.totalSpOverall}</strong>
            </div>

            <div className="stat-chip">
              <span className="stat-chip-label">Total EP invested overall</span>
              <strong>{totals.totalEpOverall}</strong>
            </div>
          </div>
        </div>

        <div className="sp-upgrade-table-wrapper">
          <table className="sp-upgrade-table">
            <thead>
              <tr>
                <th>Count Invested</th>
                <th>Max Investments</th>
                <th>Upgrade</th>
                <th>Next {activeGroup.currency} Price</th>
                <th>Total {activeGroup.currency} Price</th>
              </tr>
            </thead>

            <tbody>
              {activeGroup.upgrades.map((upgrade) => {
                const investedCount = investments[activeGroup.id]?.[upgrade.id] ?? 0;
                const nextPrice = getNextUpgradePrice(upgrade, investedCount);
                const totalPrice = getTotalUpgradePrice(upgrade, investedCount);

                return (
                  <tr key={upgrade.id}>
                    <td>
                      <input
                        type="number"
                        min="0"
                        max={upgrade.maxInvestments}
                        value={investedCount}
                        onChange={(event) =>
                          updateInvestment(
                            activeGroup.id,
                            upgrade.id,
                            event.target.value
                          )
                        }
                        className="sp-upgrade-input"
                      />
                    </td>
                    <td>{upgrade.maxInvestments}</td>
                    <td>{upgrade.name}</td>
                    <td>{nextPrice}</td>
                    <td>{totalPrice}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {isEpGroup && (
          <p className="sp-upgrade-footnote">
            This page uses EP investments, so the current tab totals are displayed in EP.
          </p>
        )}
      </div>
    </section>
  );
}