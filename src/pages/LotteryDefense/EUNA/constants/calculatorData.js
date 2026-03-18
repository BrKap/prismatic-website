import masterRune from '../images/runes/master.png';
import ultimateRune from '../images/runes/ultimate.png';
import finalRune from '../images/runes/final.png';
import winnerRune from '../images/runes/winner.png';
import chaosRune from '../images/runes/chaos.png';
import cosmosRune from '../images/runes/cosmos.png';


export const DIFFICULTIES = [
  'Practice',
  'Very Easy',
  'Easy',
  'Normal',
  'Hard',
  'Very Hard',
  'Hell',
  'Inferno',
  'Lunatic',
  'Holic',
  'Epic',
  'Ultimate',
  'Impossible',
  'The Final',
  'Hall of Fame',
];

export const TITLES = [
  'Rookie',
  'Beginner',
  'Amateur',
  'Professional',
  'Expert',
  'Master',
  'Divine',
  'The One',
  'The One II',
  'The Zero',
];

const createUpgrade = (name) => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  name,
  maxInvestments: 10,
  basePrice: 100,
  priceIncreasePerLevel: 10,
});

export const UPGRADE_GROUPS = [
  {
    id: 'rookie',
    label: 'Rookie',
    currency: 'SP',
    upgrades: [
      createUpgrade('Atk Dmg I'),
      createUpgrade('Atk Spd I'),
      createUpgrade('Skl Dmg'),
    ],
  },
  {
    id: 'beginner',
    label: 'Beginner',
    currency: 'SP',
    upgrades: [
      createUpgrade('Crit Chance I'),
      createUpgrade('Mvmt Spd'),
      createUpgrade('Atk Range'),
      createUpgrade('Mineral +'),
      createUpgrade('Gas +'),
    ],
  },
  {
    id: 'amateur',
    label: 'Amateur',
    currency: 'SP',
    upgrades: [
      createUpgrade('Atk Dmg II'),
      createUpgrade('Atk Spd II'),
      createUpgrade('Skl Dmg II'),
      createUpgrade('Gas Rev'),
      createUpgrade('Unit XP+'),
      createUpgrade('Interest Rate'),
      createUpgrade('Max Upg'),
      createUpgrade('Sell Lotto'),
    ],
  },
  {
    id: 'professional',
    label: 'Professional',
    currency: 'SP',
    upgrades: [
      createUpgrade('Atk Dmg III'),
      createUpgrade('Atk Spd III'),
      createUpgrade('Skl Dmg III'),
      createUpgrade('Basic Rank'),
      createUpgrade('Upg Rev I+'),
      createUpgrade('Upg Rev II+'),
      createUpgrade('Rank Rev'),
      createUpgrade('Card Rev'),
    ],
  },
  {
    id: 'expert',
    label: 'Expert',
    currency: 'SP',
    upgrades: [
      createUpgrade('Crit Chance II'),
      createUpgrade('Mvmt Spd II'),
      createUpgrade('Crit Dmg I'),
      createUpgrade('Multi Crit I'),
      createUpgrade('Unit Lottery Lotto'),
      createUpgrade('Gas Lottery Lotto'),
      createUpgrade('Bank Lotto'),
      createUpgrade('Horse XP'),
    ],
  },
  {
    id: 'master',
    label: 'Master',
    currency: 'SP',
    upgrades: [
      createUpgrade('Atk Range II'),
      createUpgrade('Armor Reduct'),
      createUpgrade('Lottery Rev'),
      createUpgrade('Cooldown'),
      createUpgrade('Mineral Lotto'),
      createUpgrade('Gas Lotto'),
      createUpgrade('XP Limit'),
      createUpgrade('XP Lotto'),
    ],
  },
  {
    id: 'divine',
    label: 'Divine',
    currency: 'SP',
    upgrades: [
      createUpgrade('Team Atk Dmg'),
      createUpgrade('Team Atk Spd'),
      createUpgrade('Team Crit Chance'),
      createUpgrade('Team Exchange'),
      createUpgrade('Max Energy'),
      createUpgrade('SP Bank'),
      createUpgrade('Kill Energy'),
      createUpgrade('Kill Exp'),
    ],
  },
  {
    id: 'the-one',
    label: 'The One',
    currency: 'SP',
    upgrades: [
      createUpgrade('Final Dmg'),
      createUpgrade('Atk Dmg IV'),
      createUpgrade('Atk Spd IV'),
      createUpgrade('Crit Chance III'),
      createUpgrade('Dbl Upg'),
      createUpgrade('Rank Rev II'),
      createUpgrade('SXD Rev'),
      createUpgrade('Accel'),
    ],
  },
  {
    id: 'the-one-ii',
    label: 'The One II',
    currency: 'SP',
    upgrades: [
      createUpgrade('MT Dmg'),
      createUpgrade('MT Chance'),
      createUpgrade('MT Multi Crit'),
      createUpgrade('Crit Dmg II'),
      createUpgrade('Multi Crit II'),
      createUpgrade('Rune Upg'),
      createUpgrade('XP Limit II'),
      createUpgrade('Kill XP II'),
    ],
  },
  {
    id: 'ep',
    label: 'EP',
    currency: 'EP',
    upgrades: [
      createUpgrade('Atk Dmg (E)'),
      createUpgrade('Atk Spd (E)'),
      createUpgrade('Crit Chance (E)'),
      createUpgrade('Crit Dmg (E)'),
      createUpgrade('Multi Crit (E)'),
      createUpgrade('Reduce Armor'),
      createUpgrade('Mineral+'),
      createUpgrade('Break Safety'),
    ],
  },
  {
    id: 'infinite',
    label: 'Infinite',
    currency: 'SP',
    upgrades: [
      createUpgrade('Atk Dmg (Inf)'),
      createUpgrade('Atk Spd (Inf)'),
      createUpgrade('Crit Dmg (Inf)'),
      createUpgrade('Accel (Inf)'),
      createUpgrade('XP Lotto'),
      createUpgrade('R.Stone Lotto'),
      createUpgrade('R.Stone Rev'),
      createUpgrade('Reduce Shield'),
    ],
  },
];

export const PRESETS = [];

export const RUNE_TYPES = ['Master', 'Ultimate', 'Final', 'Winner', 'Chaos', 'Cosmos'];

export const RUNE_SLOTS = [1, 2, 3, 4, 5];

export const RUNE_AWAKENING_OPTIONS = ['None', 'A', 'B', 'C', 'D', 'E'];

export const RUNE_LEVEL_OPTIONS = Array.from({ length: 16 }, (_, index) => index);

export const RUNE_STAT_LEVEL_OPTIONS = Array.from({ length: 16 }, (_, index) => index);

export const RUNE_ENCHANT_LEVEL_OPTIONS = Array.from({ length: 16 }, (_, index) => index);

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

export const RANK_OPTIONS = ['D', 'C', 'B', 'A', 'S', 'SS', 'SSS', 'X', 'XD', 'SXD', 'RXD'];

export const JEWEL_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: 'jewel-a', label: 'Jewel A' },
  { value: 'jewel-b', label: 'Jewel B' },
];

export const UNIT_LIBRARY = [
  {
    id: 'xelnaga-kerrigan',
    name: "Xel'Naga Kerrigan",
    race: 'Zerg',
    baseDamage: 100,
    attackSpeed: 0.5,
    attacks: 5,
    defensePen: 25,
  },
  {
    id: 'amon',
    name: 'Amon',
    race: 'P Bio',
    baseDamage: 270,
    attackSpeed: 0.5,
    attacks: 2,
    defensePen: 25,
  },
  {
    id: 'terra-tron',
    name: 'Terra Tron',
    race: 'T Mech',
    baseDamage: 270,
    attackSpeed: 0.5,
    attacks: 1,
    defensePen: 30,
  },
  {
    id: 'spec-ops-nova',
    name: 'Spec Ops Nova',
    race: 'T Bio',
    baseDamage: 165,
    attackSpeed: 0.63,
    attacks: 2,
    defensePen: 30,
  },
  {
    id: 'spear-of-adun',
    name: 'Spear of Adun',
    race: 'P Mech',
    baseDamage: 220,
    attackSpeed: 0.5,
    attacks: 2,
    defensePen: 30,
  },  
  {
    id: 'overmind',
    name: 'Overmind',
    race: 'Zerg',
    baseDamage: 145,
    attackSpeed: 2.5,
    attacks: 3,
    defensePen: 25,
  },
  {
    id: 'sarah-kerrigan',
    name: 'Sarah Kerrigan',
    race: 'Zerg, Terran',
    baseDamage: 165,
    attackSpeed: 1,
    attacks: 2,
    defensePen: 10,
  },
];