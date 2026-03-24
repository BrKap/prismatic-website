import { DERIVED_STAT_KEYS, STAT_KEYS } from '../constants/calculator/mainConstants';
import { UPGRADE_GROUP_MAP } from '../constants/calculator/spUpgradeConstants';
import { getUpgradeValue } from './spUpgradeHelpers';

const DEFAULT_TORMENT_STATE = {
  critDamageReduction: 0,
};

export function createEmptyProfileStats() {
  return {
    [STAT_KEYS.ATTACK_DAMAGE]: 0,
    [STAT_KEYS.ATTACK_SPEED]: 0,
    [STAT_KEYS.CRIT_CHANCE]: 0,
    [STAT_KEYS.CRIT_DAMAGE]: 0,
    [STAT_KEYS.MULTI_CRIT]: 0,
    [STAT_KEYS.ACCELERATION]: 1,
    [STAT_KEYS.FINAL_DAMAGE]: 0,
    [STAT_KEYS.ARMOR_PEN]: 0,
    [STAT_KEYS.SKILL_DAMAGE]: 0,
    [STAT_KEYS.MULTI_TARGET_DAMAGE]: 0,
    [STAT_KEYS.MULTI_TARGET_CHANCE]: 0,
    [STAT_KEYS.MULTI_TARGET_MULTI_CRIT]: 0,
    [STAT_KEYS.ARMOR_REDUCTION]: 0,
    [STAT_KEYS.SHIELD_REDUCTION]: 0,
    [STAT_KEYS.HEALTH_REDUCTION]: 0,
    [STAT_KEYS.MANA_REGEN]: 0,
    [STAT_KEYS.COOLDOWN]: 0,
    [STAT_KEYS.SP_PERCENT]: 0,
    [STAT_KEYS.SP_BANK]: 0,
    [STAT_KEYS.OTHER]: 0,
  };
}

function createEmptyDerivedStats() {
  return {
    [DERIVED_STAT_KEYS.ATTACK_DAMAGE_WITH_FD]: 0,
    [DERIVED_STAT_KEYS.CRIT_DAMAGE_WITH_TORMENT]: 0,
    [DERIVED_STAT_KEYS.AVERAGE_MULTI_CRIT]: 0,
  };
}

export function createEmptySourceResult() {
  return {
    additiveStats: {
      ...createEmptyProfileStats(),
      [STAT_KEYS.ACCELERATION]: 0,
    },
    accelerationMultiplier: 1,
    breakdown: [],
    finalStats: createEmptyProfileStats(),
  };
}

function toNumber(value) {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : 0;
}

function addNumericStats(baseStats, addedStats) {
  const next = { ...baseStats };

  Object.entries(addedStats).forEach(([key, value]) => {
    next[key] = toNumber(next[key]) + toNumber(value);
  });

  return next;
}

function addStat(result, statKey, value) {
  const numericValue = toNumber(value);

  if (!statKey || numericValue === 0) {
    return;
  }

  result.additiveStats = addNumericStats(result.additiveStats, {
    [statKey]: numericValue,
  });
}

function finalizeSourceStats(sourceResult) {
  return {
    ...sourceResult.additiveStats,
    [STAT_KEYS.ACCELERATION]: toNumber(sourceResult.accelerationMultiplier) || 1,
  };
}

function finalizeSourceResult(sourceResult) {
  return {
    ...sourceResult,
    finalStats: finalizeSourceStats(sourceResult),
  };
}

function createBreakdownEntry({
  source,
  groupId = null,
  groupLabel = null,
  entryId = null,
  entryName = null,
  statKey = null,
  investedCount = null,
  rawValue = null,
  appliedValue = null,
  combineMode = 'additive',
}) {
  return {
    source,
    groupId,
    groupLabel,
    entryId,
    entryName,
    statKey,
    investedCount,
    rawValue,
    appliedValue,
    combineMode,
  };
}

export function calculateRuneSourceStats(runeLoadouts = []) {
  const result = createEmptySourceResult();

  runeLoadouts.forEach((rune, index) => {
    if (!rune?.runeType) {
      return;
    }

    result.breakdown.push(
      createBreakdownEntry({
        source: 'runes',
        entryId: rune.id ?? `rune-${index}`,
        entryName: rune.runeType,
      })
    );
  });

  return finalizeSourceResult(result);
}

function getSpAccelerationCombineMode(groupId) {
  if (groupId === 'the-one') {
    return 'multiplicative';
  }

  if (groupId === 'infinite') {
    return 'additive';
  }

  return 'additive';
}

function applySpAcceleration(result, groupId, investedCount, upgradeValue) {
  const combineMode = getSpAccelerationCombineMode(groupId);

  if (groupId === 'the-one') {
    result.accelerationMultiplier *= 1.002424 ** investedCount;
    return 'multiplicative';
  }

  if (groupId === 'infinite') {
    result.accelerationMultiplier *= 1 + upgradeValue;
    return 'additive';
  }

  result.accelerationMultiplier *= 1 + upgradeValue;
  return combineMode;
}

export function calculateSpUpgradeSourceStats(investments = {}) {
  const result = createEmptySourceResult();

  Object.entries(investments).forEach(([groupId, groupInvestments]) => {
    const group = UPGRADE_GROUP_MAP[groupId];

    if (!group) {
      return;
    }

    group.upgrades.forEach((upgrade) => {
      const investedCount = toNumber(groupInvestments?.[upgrade.id]);

      if (!upgrade.statKey || investedCount <= 0) {
        return;
      }

      const upgradeValue = toNumber(getUpgradeValue(upgrade, investedCount));

      if (upgradeValue === 0 && upgrade.statKey !== STAT_KEYS.ACCELERATION) {
        return;
      }

      let combineMode = 'additive';
      let appliedValue = upgradeValue;

      if (upgrade.statKey === STAT_KEYS.ACCELERATION) {
        combineMode = applySpAcceleration(result, groupId, investedCount, upgradeValue);
        appliedValue = result.accelerationMultiplier;
      } else {
        addStat(result, upgrade.statKey, upgradeValue);
      }

      result.breakdown.push(
        createBreakdownEntry({
          source: 'spUpgrades',
          groupId,
          groupLabel: group.label,
          entryId: upgrade.id,
          entryName: upgrade.name,
          statKey: upgrade.statKey,
          investedCount,
          rawValue: upgradeValue,
          appliedValue,
          combineMode,
        })
      );
    });
  });

  return finalizeSourceResult(result);
}

export function calculateDifficultySourceStats(difficultyState = null) {
  const result = createEmptySourceResult();

  if (difficultyState) {
    result.breakdown.push(
      createBreakdownEntry({
        source: 'difficulty',
        entryName: 'difficultyState',
      })
    );
  }

  return finalizeSourceResult(result);
}

function normalizeTormentState(tormentState) {
  if (typeof tormentState === 'number') {
    return {
      ...DEFAULT_TORMENT_STATE,
      level: tormentState,
    };
  }

  if (tormentState && typeof tormentState === 'object') {
    return {
      ...DEFAULT_TORMENT_STATE,
      ...tormentState,
    };
  }

  return { ...DEFAULT_TORMENT_STATE };
}

export function calculateTormentSourceStats(tormentState = null) {
  const result = createEmptySourceResult();
  const normalizedTormentState = normalizeTormentState(tormentState);

  if (normalizedTormentState.level || normalizedTormentState.critDamageReduction) {
    result.breakdown.push(
      createBreakdownEntry({
        source: 'torment',
        entryName: 'tormentState',
        rawValue: normalizedTormentState,
      })
    );
  }

  return finalizeSourceResult(result);
}

export function calculateBuffSourceStats(buffState = null) {
  const result = createEmptySourceResult();

  if (buffState) {
    result.breakdown.push(
      createBreakdownEntry({
        source: 'buffs',
        entryName: 'buffState',
      })
    );
  }

  return finalizeSourceResult(result);
}

function mergeFinalSourceStats(sourceResults) {
  let mergedStats = {
    ...createEmptyProfileStats(),
    [STAT_KEYS.ACCELERATION]: 1,
  };

  sourceResults.forEach((sourceResult) => {
    const sourceFinalStats = sourceResult.finalStats ?? {};
    const additiveOnlyStats = { ...sourceFinalStats };

    delete additiveOnlyStats[STAT_KEYS.ACCELERATION];

    mergedStats = addNumericStats(mergedStats, additiveOnlyStats);
    mergedStats[STAT_KEYS.ACCELERATION] *= toNumber(
      sourceFinalStats[STAT_KEYS.ACCELERATION] ?? 1
    );
  });

  return mergedStats;
}

function calculateAttackDamageWithFD(rawStats) {
  const rawAttackDamage = toNumber(rawStats[STAT_KEYS.ATTACK_DAMAGE]);
  const finalDamage = toNumber(rawStats[STAT_KEYS.FINAL_DAMAGE]);

  return rawAttackDamage * (1 + finalDamage / 100);
}

function calculateCritDamageWithTorment(rawStats, tormentState = null) {
  const rawCritDamage = toNumber(rawStats[STAT_KEYS.CRIT_DAMAGE]);
  const normalizedTormentState = normalizeTormentState(tormentState);
  const tormentCritReduction = toNumber(normalizedTormentState.critDamageReduction);

  return rawCritDamage * (1 - tormentCritReduction / 100);
}

function calculateAverageMultiCrit(rawStats) {
  return {
    placeholder: true,
    value: toNumber(rawStats[STAT_KEYS.MULTI_CRIT]),
  };
}

function calculateDisplayStats(rawStats, tormentState = null) {
  const averageMultiCritResult = calculateAverageMultiCrit(rawStats);

  return {
    ...createEmptyDerivedStats(),
    [DERIVED_STAT_KEYS.ATTACK_DAMAGE_WITH_FD]: calculateAttackDamageWithFD(rawStats),
    [DERIVED_STAT_KEYS.CRIT_DAMAGE_WITH_TORMENT]: calculateCritDamageWithTorment(
      rawStats,
      tormentState
    ),
    [DERIVED_STAT_KEYS.AVERAGE_MULTI_CRIT]: averageMultiCritResult.value,
  };
}

function calculateCombatStats(rawStats, tormentState = null) {
  const averageMultiCritResult = calculateAverageMultiCrit(rawStats);

  return {
    rawAttackDamage: toNumber(rawStats[STAT_KEYS.ATTACK_DAMAGE]),
    profileAttackDamage: calculateAttackDamageWithFD(rawStats),
    rawCritDamage: toNumber(rawStats[STAT_KEYS.CRIT_DAMAGE]),
    critDamageWithTorment: calculateCritDamageWithTorment(rawStats, tormentState),
    averageMultiCrit: averageMultiCritResult.value,
    averageMultiCritReady: !averageMultiCritResult.placeholder,
    accelerationMultiplier: toNumber(rawStats[STAT_KEYS.ACCELERATION]) || 1,
  };
}

function flattenSourceBreakdowns(sources) {
  return Object.values(sources).flatMap((sourceResult) => sourceResult.breakdown ?? []);
}

export function calculateProfileStats({
  runeLoadouts = [],
  spInvestments = {},
  difficultyState = null,
  tormentState = null,
  buffState = null,
}) {
  const runeSource = calculateRuneSourceStats(runeLoadouts);
  const spUpgradeSource = calculateSpUpgradeSourceStats(spInvestments);
  const difficultySource = calculateDifficultySourceStats(difficultyState);
  const tormentSource = calculateTormentSourceStats(tormentState);
  const buffSource = calculateBuffSourceStats(buffState);

  const sources = {
    runes: runeSource,
    spUpgrades: spUpgradeSource,
    difficulty: difficultySource,
    torment: tormentSource,
    buffs: buffSource,
  };

  const rawStats = mergeFinalSourceStats(Object.values(sources));
  const displayStats = calculateDisplayStats(rawStats, tormentState);
  const combatStats = calculateCombatStats(rawStats, tormentState);

  return {
    sources,
    sourceBreakdown: flattenSourceBreakdowns(sources),
    rawStats,
    displayStats,
    combatStats,
  };
}