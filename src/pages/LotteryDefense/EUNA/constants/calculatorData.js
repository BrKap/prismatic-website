export const DIFFICULTIES = ['Practice', 'Very Easy', 'Easy', 'Normal', 'Hard', 'Very Hard', 'Hell', 
    'Inferno', 'Lunatic', 'Holic', 'Epic', 'Ultimate', 'Impossible', 'The Final', 'Hall of Fame'];
export const TITLES = ['Rookie', 'Beginner', 'Amateur', 'Professional', 'Expert', 'Master', 'Divine', 'The One', 'The One II', 'The Zero'];
export const UPGRADE_GROUPS = [];
export const PRESETS = [];
export const RUNE_TYPES = [];
export const RUNE_SLOTS = [1, 2, 3, 4, 5];
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

export const RANK_OPTIONS = ['D', 'C', 'B', 'A','S', 'SS', 'SSS', 'X', 'XD', 'SXD', 'RXD'];

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
    race: 'Protoss Bio',

    baseDamage: 270,
    attackSpeed: 0.5,
    attacks: 2,
    defensePen: 25,
  },
  {
    id: 'terra-tron',
    name: 'Terra Tron',
    race: 'Terran Mech',

    baseDamage: 270,
    attackSpeed: 0.5,
    attacks: 1,
    defensePen: 30,
  },
  {
    id: 'spec-ops-nova',
    name: 'Spec Ops Nova',
    race: 'Terran Bio',

    baseDamage: 165,
    attackSpeed: 0.63,
    attacks: 2,
    defensePen: 30,
  },
  {
    id: 'spear-of-adun',
    name: 'Spear of Adun',
    race: 'Protoss Mech',

    baseDamage: 220,
    attackSpeed: 0.5,
    attacks: 2,
    defensePen: 30,
  },
];