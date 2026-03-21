import chaosRune from '../../images/runes/chaos.png';
import cosmosRune from '../../images/runes/cosmos.png';
import finalRune from '../../images/runes/final.png';
import masterRune from '../../images/runes/master.png';
import ultimateRune from '../../images/runes/ultimate.png';
import winnerRune from '../../images/runes/winner.png';

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
  { value: 'slot-6', label: 'Test' },
];

export const RUNE_AWAKENING_OPTIONS = [
  { value: 'None', label: 'None' },
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
  { value: 'D', label: 'D' },
  { value: 'E', label: 'E' },
];

export const RUNE_LEVEL_OPTIONS = Array.from({ length: 16 }, (_, index) => ({
  value: String(index),
  label: `${index}`,
}));

export const RUNE_STAT_LEVEL_OPTIONS = Array.from(
  { length: 16 },
  (_, index) => ({
    value: String(index),
    label: `${index}`,
  })
);

export const RUNE_ENCHANT_LEVEL_OPTIONS = Array.from(
  { length: 10 },
  (_, index) => ({
    value: String(index),
    label: `${index}`,
  })
);

export const RUNE_RACE_UPGRADE_OPTIONS = [
  { value: 'None', label: 'None' },
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

export const RUNE_STAT_OPTIONS = [
  { value: '', label: 'Select Stat' },
  { value: 'attackDamage', label: 'Attack Damage' },
  { value: 'attackSpeed', label: 'Attack Speed' },
  { value: 'skillDamage', label: 'Skill Damage' },
  { value: 'criticalChance', label: 'Critical Chance' },
  { value: 'criticalDamage', label: 'Critical Damage' },
  { value: 'spPercent', label: 'SP %' },
  { value: 'finalDamage', label: 'Final Damage' },
  { value: 'accel', label: 'Accel' },
  { value: 'bossDamage', label: 'Boss Damage' },
  { value: 'range', label: 'Range' },
  { value: 'hp', label: 'HP' },
  { value: 'defense', label: 'Defense' },
];

export const RUNE_ICON_BY_TYPE = {
  master: masterRune,
  ultimate: ultimateRune,
  final: finalRune,
  winner: winnerRune,
  chaos: chaosRune,
  cosmos: cosmosRune,
};

export const RUNE_LAYOUTS = {
  master: {
    primaryRows: [
      { id: 'attackDamage', label: 'Attack Damage', yellowValue: '+15', pinkEnabled: false },
      { id: 'attackSpeed', label: 'Attack Speed', yellowValue: '+15', pinkEnabled: false },
      { id: 'skillDamage', label: 'Skill Damage', yellowValue: '+5', pinkEnabled: false },
    ],
  },
  ultimate: {
    primaryRows: [
      { id: 'attackDamage', label: 'Attack Damage', yellowValue: '+15', pinkEnabled: false },
      { id: 'attackSpeed', label: 'Attack Speed', yellowValue: '+15', pinkEnabled: false },
      { id: 'skillDamage', label: 'Skill Damage', yellowValue: '+5', pinkEnabled: false },
      { id: 'criticalChance', label: 'Critical Chance', yellowValue: '+15', pinkEnabled: false },
    ],
  },
  final: {
    primaryRows: [
      { id: 'attackDamage', label: 'Attack Damage', yellowValue: '+15', pinkEnabled: false },
      { id: 'attackSpeed', label: 'Attack Speed', yellowValue: '+15', pinkEnabled: false },
      { id: 'skillDamage', label: 'Skill Damage', yellowValue: '+5', pinkEnabled: false },
      { id: 'criticalChance', label: 'Critical Chance', yellowValue: '+15', pinkEnabled: false },
      { id: 'spPercent', label: 'SP %', yellowValue: '+10', pinkEnabled: false },
    ],
  },
  winner: {
    primaryRows: [
      { id: 'attackDamage', label: 'Attack Damage', yellowValue: '+15', pinkEnabled: true },
      { id: 'attackSpeed', label: 'Attack Speed', yellowValue: '+15', pinkEnabled: true },
      { id: 'criticalDamage', label: 'Critical Damage', yellowValue: '+15', pinkEnabled: true },
      { id: 'criticalChance', label: 'Critical Chance', yellowValue: '+15', pinkEnabled: true },
      { id: 'spPercent', label: 'SP %', yellowValue: '+10', pinkEnabled: false },
    ],
  },
  chaos: {
    primaryRows: [
      { id: 'attackDamage', label: 'Attack Damage', yellowValue: '+15', pinkEnabled: true },
      { id: 'attackSpeed', label: 'Attack Speed', yellowValue: '+15', pinkEnabled: true },
      { id: 'criticalDamage', label: 'Critical Damage', yellowValue: '+15', pinkEnabled: true },
      { id: 'finalDamage', label: 'FD', yellowValue: '+10', pinkEnabled: false },
      { id: 'criticalChance', label: 'Critical Chance', yellowValue: '+15', pinkEnabled: true },
      { id: 'spPercent', label: 'SP %', yellowValue: '+10', pinkEnabled: false },
    ],
  },
  cosmos: {
    primaryRows: [
      { id: 'attackDamage', label: 'Attack Damage', yellowValue: '+15', pinkEnabled: true },
      { id: 'attackSpeed', label: 'Attack Speed', yellowValue: '+15', pinkEnabled: true },
      { id: 'criticalDamage', label: 'Critical Damage', yellowValue: '+15', pinkEnabled: true },
      { id: 'accel', label: 'Accel', yellowValue: '+10', pinkEnabled: false },
      { id: 'criticalChance', label: 'Critical Chance', yellowValue: '+15', pinkEnabled: true },
      { id: 'spPercent', label: 'SP %', yellowValue: '+10', pinkEnabled: false },
    ],
  },
};

export const RUNE_ENCHANT_ROWS = [
  { id: 'attackDamage', label: 'Attack Damage', value: '+0' },
  { id: 'attackSpeed', label: 'Attack Speed', value: '+0' },
  { id: 'acceleration', label: 'Acceleration', value: '+0' },
  { id: 'totalDamage', label: 'Total Damage', value: '+0' },
  { id: 'shieldReduction', label: 'Shield Reduction', value: '+0' },
  { id: 'hpReduction', label: 'HP Reduction', value: '+0' },
];

export function createEmptyRuneData(slotValue) {
  return {
    slot: slotValue,
    runeType: '',
    awakening: 'None',
    level: '0',
    raceUpgrade: 'None',
    bonusTen: 'None',
    bonusFifteen: 'None',

    mainStat: '',
    mainStatLevel: '0',

    subStat1: '',
    subStat1Level: '0',

    subStat2: '',
    subStat2Level: '0',

    subStat3: '',
    subStat3Level: '0',

    subStat4: '',
    subStat4Level: '0',

    enchantAttackDamage: '0',
    enchantAttackSpeed: '0',
    enchantAcceleration: '0',
    enchantTotalDamage: '0',
    enchantShieldReduction: '0',
    enchantHpReduction: '0',
  };
}

export function createInitialRuneLoadouts() {
  return RUNE_SLOTS.map((slot) => createEmptyRuneData(slot.value));
}

export const GAME_MODES = ['Classic', 'Eternal', 'Hyper'];

export const TAB_OPTIONS = [
  { id: 'main', label: 'Main' },
  { id: 'sp-upgrades', label: 'SP Upgrades' },
  { id: 'runes', label: 'Runes' },
  { id: 'jewels', label: 'Jewels' },
  { id: 'buffs', label: 'Buffs' },
  { id: 'build-units', label: 'Build Units' },
  { id: 'presets', label: 'Presets' },
];