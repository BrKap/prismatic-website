export function formatNumber(num) {
  return num;
}

export function toNumber(value) {
  const num = Number(value);
  return isNaN(num) ? 0 : num;
}

export function calculateMockUnitDps(unit) {
  return 1;
}

export function calculateMockRequiredDps(unit) {
  return 1;
}

export function createUnitEntry(unitData) {
  return {
    entryId: unitData.entryId,
    name: unitData.name,
    rarity: unitData.rarity,
    level: unitData.level,
    upgradeGroup: unitData.upgradeGroup,
    buffs: unitData.buffs || [],
  };
}

function summarizeUnits(units) {
  const grouped = new Map();

  units.forEach((unit) => {
    const key = unit.id ?? unit.name;
    const current = grouped.get(key);

    const perUnitDps = calculateMockUnitDps(unit);
    const fullDps = perUnitDps * Number(unit.count ?? 0);

    if (current) {
      current.totalCount += Number(unit.count ?? 0);
      current.totalDps += fullDps;
      current.variants += 1;
      return;
    }

    grouped.set(key, {
      key,
      name: unit.name,
      race: unit.race,
      totalCount: Number(unit.count ?? 0),
      totalDps: fullDps,
      variants: 1,
    });
  });

  return Array.from(grouped.values()).sort((a, b) => b.totalDps - a.totalDps);
}

export function summarizeUnitsByType(units) {
  const grouped = new Map();

  for (const unit of units) {
    const key = unit.unitId ?? unit.name;

    if (!grouped.has(key)) {
      grouped.set(key, {
        unitId: key,
        name: unit.name,
        totalCount: 0,
        totalDps: 0,
        variants: 0,
      });
    }

    const current = grouped.get(key);
    const perUnitDps = calculateMockUnitDps(unit);
    const fullDps = perUnitDps * unit.count;

    current.totalCount += unit.count;
    current.totalDps += fullDps;
    current.variants += 1;
  }

  return Array.from(grouped.values());
}