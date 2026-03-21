import chaosRune from '../../images/runes/chaos.png';
import cosmosRune from '../../images/runes/cosmos.png';
import finalRune from '../../images/runes/final.png';
import masterRune from '../../images/runes/master.png';
import ultimateRune from '../../images/runes/ultimate.png';
import winnerRune from '../../images/runes/winner.png';
import { STAT_KEYS } from './mainConstants';

export const FLIP_DURATION_MS = 1000;

export const RUNE_TYPES = [
  { value: '', label: 'Select Rune' },
  { value: 'master', label: 'Master' },
  { value: 'ultimate', label: 'Ultimate' },
  { value: 'final', label: 'Final' },
  { value: 'winner', label: 'Winner' },
  { value: 'chaos', label: 'Chaos' },
  { value: 'cosmos', label: 'Cosmos' },
];

export const RUNE_SLOTS = [
  { value: 'slot-1', label: '1' },
  { value: 'slot-2', label: '2' },
  { value: 'slot-3', label: '3' },
  { value: 'slot-4', label: '4' },
  { value: 'slot-5', label: '5' },
  { value: 'slot-6', label: 'Test' }, /* Specifically for testing rune comparisons */
];

export const RUNE_AWAKENING_OPTIONS = [
  { value: 'None', label: 'None' },
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
  { value: 'D', label: 'D' },
  { value: 'E', label: 'E' },
];

export const RUNE_LEVEL_OPTIONS = Array.from({ length: 15 }, (_, index) => ({
  value: String(index + 1),
  label: String(index + 1),
}));

export const RUNE_ENCHANT_LEVEL_OPTIONS = Array.from(
  { length: 10 },
  (_, index) => ({
    value: String(index),
    label: String(index),
  })
);

export const RUNE_RACE_UPGRADE_OPTIONS = [
  { value: 'T Bio', label: 'T Bio' },
  { value: 'T Mech', label: 'T Mech' },
  { value: 'P Bio', label: 'P Bio' },
  { value: 'P Mech', label: 'P Mech' },
  { value: 'Zerg', label: 'Zerg' },
];

export const RUNE_BONUS_TEN_OPTIONS = [
  { value: 'None', label: 'None' },
  { value: '50% Crit Dmg', label: '50% Crit Dmg' },
  { value: '15% Accel', label: '15% Accel' },
  { value: '15% Skill Dmg', label: '15% Skill Dmg' },
  { value: '10% Final Dmg', label: '10% Final Dmg' },
];

export const RUNE_BONUS_FIFTEEN_OPTIONS = [
  { value: 'None', label: 'None' },
  { value: '15% Accel', label: '15% Accel' },
  { value: '50% Crit Dmg', label: '50% Crit Dmg' },
  { value: '15% Skill Dmg', label: '15% Skill Dmg' },
  { value: '10% Final Dmg', label: '10% Final Dmg' },
];

function makeOptions(values) {
  return values.map((value) => ({
    value: String(value),
    label: String(value),
  }));
}

export const RUNE_BASE_OPTIONS_BY_STAT = {
  [STAT_KEYS.ATTACK_DAMAGE]: makeOptions([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  [STAT_KEYS.ATTACK_SPEED]: makeOptions([1, 2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  [STAT_KEYS.SKILL_DAMAGE]: makeOptions([1, 2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  [STAT_KEYS.CRIT_CHANCE]: makeOptions([1, 2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  [STAT_KEYS.CRIT_DAMAGE]: makeOptions([1, 2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                                        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
                                        31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]),
  [STAT_KEYS.FINAL_DAMAGE]: makeOptions([1, 2, 3, 4, 5]),
  [STAT_KEYS.ACCELERATION]: makeOptions([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  [STAT_KEYS.SP_PERCENT]: makeOptions([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
};

export const RUNE_PINK_OPTIONS_BY_STAT = {
  [STAT_KEYS.ATTACK_DAMAGE]: makeOptions([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  [STAT_KEYS.ATTACK_SPEED]: makeOptions([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  [STAT_KEYS.CRIT_CHANCE]: makeOptions([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  [STAT_KEYS.CRIT_DAMAGE]: makeOptions([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
};

export const RUNE_ICON_BY_TYPE = {
  master: masterRune,
  ultimate: ultimateRune,
  final: finalRune,
  winner: winnerRune,
  chaos: chaosRune,
  cosmos: cosmosRune,
};

function buildRow({
  id,
  label,
  statKey,
  baseField,
  bonusField = null,
  pinkEnabled = false,
  hasLevelYellowBonus = false,
}) {
  return {
    id,
    label,
    statKey,
    baseField,
    bonusField,
    pinkEnabled,
    hasLevelYellowBonus,
  };
}

export const RUNE_LAYOUTS = {
  master: {
    primaryRows: [
      buildRow({
        id: 'attackDamage',
        label: 'Attack Damage',
        statKey: STAT_KEYS.ATTACK_DAMAGE,
        baseField: 'attackDamageBase',
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'attackSpeed',
        label: 'Attack Speed',
        statKey: STAT_KEYS.ATTACK_SPEED,
        baseField: 'attackSpeedBase',
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'skillDamage',
        label: 'Skill Damage',
        statKey: STAT_KEYS.SKILL_DAMAGE,
        baseField: 'skillDamageBase',
      }),
    ],
  },

  ultimate: {
    primaryRows: [
      buildRow({
        id: 'attackDamage',
        label: 'Attack Damage',
        statKey: STAT_KEYS.ATTACK_DAMAGE,
        baseField: 'attackDamageBase',
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'attackSpeed',
        label: 'Attack Speed',
        statKey: STAT_KEYS.ATTACK_SPEED,
        baseField: 'attackSpeedBase',
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'skillDamage',
        label: 'Skill Damage',
        statKey: STAT_KEYS.SKILL_DAMAGE,
        baseField: 'skillDamageBase',
      }),
      buildRow({
        id: 'critChance',
        label: 'Critical Chance',
        statKey: STAT_KEYS.CRIT_CHANCE,
        baseField: 'critChanceBase',
        hasLevelYellowBonus: true,
      }),
    ],
  },

  final: {
    primaryRows: [
      buildRow({
        id: 'attackDamage',
        label: 'Attack Damage',
        statKey: STAT_KEYS.ATTACK_DAMAGE,
        baseField: 'attackDamageBase',
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'attackSpeed',
        label: 'Attack Speed',
        statKey: STAT_KEYS.ATTACK_SPEED,
        baseField: 'attackSpeedBase',
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'skillDamage',
        label: 'Skill Damage',
        statKey: STAT_KEYS.SKILL_DAMAGE,
        baseField: 'skillDamageBase',
      }),
      buildRow({
        id: 'critChance',
        label: 'Critical Chance',
        statKey: STAT_KEYS.CRIT_CHANCE,
        baseField: 'critChanceBase',
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'spPercent',
        label: 'SP %',
        statKey: STAT_KEYS.SP_PERCENT,
        baseField: 'spPercentBase',
        hasLevelYellowBonus: true,
      }),
    ],
  },

  winner: {
    primaryRows: [
      buildRow({
        id: 'attackDamage',
        label: 'Attack Damage',
        statKey: STAT_KEYS.ATTACK_DAMAGE,
        baseField: 'attackDamageBase',
        bonusField: 'attackDamageBonus',
        pinkEnabled: true,
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'attackSpeed',
        label: 'Attack Speed',
        statKey: STAT_KEYS.ATTACK_SPEED,
        baseField: 'attackSpeedBase',
        bonusField: 'attackSpeedBonus',
        pinkEnabled: true,
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'critDamage',
        label: 'Critical Damage',
        statKey: STAT_KEYS.CRIT_DAMAGE,
        baseField: 'critDamageBase',
        bonusField: 'critDamageBonus',
        pinkEnabled: true,
      }),
      buildRow({
        id: 'critChance',
        label: 'Critical Chance',
        statKey: STAT_KEYS.CRIT_CHANCE,
        baseField: 'critChanceBase',
        bonusField: 'critChanceBonus',
        pinkEnabled: true,
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'spPercent',
        label: 'SP %',
        statKey: STAT_KEYS.SP_PERCENT,
        baseField: 'spPercentBase',
        hasLevelYellowBonus: true,
      }),
    ],
  },

  chaos: {
    primaryRows: [
      buildRow({
        id: 'attackDamage',
        label: 'Attack Damage',
        statKey: STAT_KEYS.ATTACK_DAMAGE,
        baseField: 'attackDamageBase',
        bonusField: 'attackDamageBonus',
        pinkEnabled: true,
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'attackSpeed',
        label: 'Attack Speed',
        statKey: STAT_KEYS.ATTACK_SPEED,
        baseField: 'attackSpeedBase',
        bonusField: 'attackSpeedBonus',
        pinkEnabled: true,
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'critDamage',
        label: 'Critical Damage',
        statKey: STAT_KEYS.CRIT_DAMAGE,
        baseField: 'critDamageBase',
        bonusField: 'critDamageBonus',
        pinkEnabled: true,
      }),
      buildRow({
        id: 'finalDamage',
        label: 'FD',
        statKey: STAT_KEYS.FINAL_DAMAGE,
        baseField: 'finalDamageBase',
      }),
      buildRow({
        id: 'critChance',
        label: 'Critical Chance',
        statKey: STAT_KEYS.CRIT_CHANCE,
        baseField: 'critChanceBase',
        bonusField: 'critChanceBonus',
        pinkEnabled: true,
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'spPercent',
        label: 'SP %',
        statKey: STAT_KEYS.SP_PERCENT,
        baseField: 'spPercentBase',
        hasLevelYellowBonus: true,
      }),
    ],
  },

  cosmos: {
    primaryRows: [
      buildRow({
        id: 'attackDamage',
        label: 'Attack Damage',
        statKey: STAT_KEYS.ATTACK_DAMAGE,
        baseField: 'attackDamageBase',
        bonusField: 'attackDamageBonus',
        pinkEnabled: true,
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'attackSpeed',
        label: 'Attack Speed',
        statKey: STAT_KEYS.ATTACK_SPEED,
        baseField: 'attackSpeedBase',
        bonusField: 'attackSpeedBonus',
        pinkEnabled: true,
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'critDamage',
        label: 'Critical Damage',
        statKey: STAT_KEYS.CRIT_DAMAGE,
        baseField: 'critDamageBase',
        bonusField: 'critDamageBonus',
        pinkEnabled: true,
      }),
      buildRow({
        id: 'acceleration',
        label: 'Accel',
        statKey: STAT_KEYS.ACCELERATION,
        baseField: 'accelerationBase',
      }),
      buildRow({
        id: 'critChance',
        label: 'Critical Chance',
        statKey: STAT_KEYS.CRIT_CHANCE,
        baseField: 'critChanceBase',
        bonusField: 'critChanceBonus',
        pinkEnabled: true,
        hasLevelYellowBonus: true,
      }),
      buildRow({
        id: 'spPercent',
        label: 'SP %',
        statKey: STAT_KEYS.SP_PERCENT,
        baseField: 'spPercentBase',
        hasLevelYellowBonus: true,
      }),
    ],
  },
};

export const RUNE_ENCHANT_ROWS = [
  { id: 'attackDamage', label: 'Attack Damage', field: 'enchantAttackDamage', value: '+0' },
  { id: 'attackSpeed', label: 'Attack Speed', field: 'enchantAttackSpeed', value: '+0' },
  { id: 'acceleration', label: 'Acceleration', field: 'enchantAcceleration', value: '+0' },
  { id: 'totalDamage', label: 'Total Damage', field: 'enchantTotalDamage', value: '+0' },
  { id: 'shieldReduction', label: 'Shield Reduction', field: 'enchantShieldReduction', value: '+0' },
  { id: 'healthReduction', label: 'HP Reduction', field: 'enchantHealthReduction', value: '+0' },
];

export function getRuneBaseOptions(statKey) {
  return RUNE_BASE_OPTIONS_BY_STAT[statKey] ?? makeOptions([0]);
}

export function getRunePinkOptions(statKey) {
  return RUNE_PINK_OPTIONS_BY_STAT[statKey] ?? makeOptions([0]);
}

export function getRuneYellowValue(statKey, runeLevel) {
  const level = Number(runeLevel) || 0;

  if (
    statKey === STAT_KEYS.ATTACK_DAMAGE ||
    statKey === STAT_KEYS.ATTACK_SPEED ||
    statKey === STAT_KEYS.CRIT_CHANCE
  ) {
    return `+${Math.min(level, 15)}`;
  }

  if (statKey === STAT_KEYS.SP_PERCENT) {
    return level >= 9 ? '+5%' : '-';
  }

  return '-';
}

export function createEmptyRuneData(slotValue) {
  return {
    id: `rune-${slotValue}`,
    slot: slotValue,

    runeType: '',
    runeLevel: '0',
    runeAwakening: 'None',
    runeRaceUpgrade: 'None',
    runeBonusTen: 'None',
    runeBonusFifteen: 'None',

    attackDamageBase: '10',
    attackDamageBonus: '0',

    attackSpeedBase: '10',
    attackSpeedBonus: '0',

    skillDamageBase: '5',

    critChanceBase: '10',
    critChanceBonus: '0',

    critDamageBase: '10',
    critDamageBonus: '0',

    finalDamageBase: '5',
    accelerationBase: '5',
    spPercentBase: '5',

    enchantAttackDamage: '0',
    enchantAttackSpeed: '0',
    enchantAcceleration: '0',
    enchantTotalDamage: '0',
    enchantShieldReduction: '0',
    enchantHealthReduction: '0',
  };
}

export function createInitialRuneLoadouts() {
  return RUNE_SLOTS.map((slot) => createEmptyRuneData(slot.value));
}

