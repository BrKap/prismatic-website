import chaosRune from '../../images/runes/chaos.png';
import cosmosRune from '../../images/runes/cosmos.png';
import finalRune from '../../images/runes/final.png';
import masterRune from '../../images/runes/master.png';
import ultimateRune from '../../images/runes/ultimate.png';
import winnerRune from '../../images/runes/winner.png';


export const RUNE_TYPES = ['Master', 'Ultimate', 'Final', 'Winner', 'Chaos', 'Cosmos'];

export const RUNE_SLOTS = [1, 2, 3, 4, 5];

export const RUNE_AWAKENING_OPTIONS = ['None', 'A', 'B', 'C', 'D', 'E'];

export const RUNE_LEVEL_OPTIONS = Array.from({ length: 16 }, (_, index) => index);

export const RUNE_STAT_LEVEL_OPTIONS = Array.from({ length: 16 }, (_, index) => index);

export const RUNE_ENCHANT_LEVEL_OPTIONS = Array.from({ length: 10 }, (_, index) => index);

export const RUNE_RACE_UPGRADE_OPTIONS = [
  'None',
  'T Bio',
  'T Mech',
  'P Bio',
  'P Mech',
  'Zerg',
];

export const RUNE_BONUS_TEN_OPTIONS = [
  'None',
  '50% Crit Dmg',
  '15% Accel',
  '15% Skill Dmg',
  '10% Final Dmg',
];

export const RUNE_BONUS_FIFTEEN_OPTIONS = [
  'None',
  '15% Accel',
  '50% Crit Dmg',
  '15% Skill Dmg',
  '10% Final Dmg',
];

export const RUNE_ICON_BY_TYPE = {
  Master: masterRune,
  Ultimate: ultimateRune,
  Final: finalRune,
  Winner: winnerRune,
  Chaos: chaosRune,
  Cosmos: cosmosRune,
};

export const RUNE_LAYOUTS = {
  Master: {
    primaryRows: [
      { id: 'attackDamage', label: 'Attack Damage', yellowValue: '+15', pinkEnabled: false },
      { id: 'attackSpeed', label: 'Attack Speed', yellowValue: '+15', pinkEnabled: false },
      { id: 'skillDamage', label: 'Skill Damage', yellowValue: '+5', pinkEnabled: false },
    ],
  },
  Ultimate: {
    primaryRows: [
      { id: 'attackDamage', label: 'Attack Damage', yellowValue: '+15', pinkEnabled: false },
      { id: 'attackSpeed', label: 'Attack Speed', yellowValue: '+15', pinkEnabled: false },
      { id: 'skillDamage', label: 'Skill Damage', yellowValue: '+5', pinkEnabled: false },
      { id: 'criticalChance', label: 'Critical Chance', yellowValue: '+15', pinkEnabled: false },
    ],
  },
  Final: {
    primaryRows: [
      { id: 'attackDamage', label: 'Attack Damage', yellowValue: '+15', pinkEnabled: false },
      { id: 'attackSpeed', label: 'Attack Speed', yellowValue: '+15', pinkEnabled: false },
      { id: 'skillDamage', label: 'Skill Damage', yellowValue: '+5', pinkEnabled: false },
      { id: 'criticalChance', label: 'Critical Chance', yellowValue: '+15', pinkEnabled: false },
      { id: 'spPercent', label: 'SP %', yellowValue: '+10', pinkEnabled: false },
    ],
  },
  Winner: {
    primaryRows: [
      { id: 'attackDamage', label: 'Attack Damage', yellowValue: '+15', pinkEnabled: true },
      { id: 'attackSpeed', label: 'Attack Speed', yellowValue: '+15', pinkEnabled: true },
      { id: 'criticalDamage', label: 'Critical Damage', yellowValue: '+15', pinkEnabled: true },
      { id: 'criticalChance', label: 'Critical Chance', yellowValue: '+15', pinkEnabled: true },
      { id: 'spPercent', label: 'SP %', yellowValue: '+10', pinkEnabled: false },
    ],
  },
  Chaos: {
    primaryRows: [
      { id: 'attackDamage', label: 'Attack Damage', yellowValue: '+15', pinkEnabled: true },
      { id: 'attackSpeed', label: 'Attack Speed', yellowValue: '+15', pinkEnabled: true },
      { id: 'criticalDamage', label: 'Critical Damage', yellowValue: '+15', pinkEnabled: true },
      { id: 'finalDamage', label: 'FD', yellowValue: '+10', pinkEnabled: false },
      { id: 'criticalChance', label: 'Critical Chance', yellowValue: '+15', pinkEnabled: true },
      { id: 'spPercent', label: 'SP %', yellowValue: '+10', pinkEnabled: false },
    ],
  },
  Cosmos: {
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
