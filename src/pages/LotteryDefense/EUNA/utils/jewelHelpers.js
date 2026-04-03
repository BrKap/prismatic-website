import {
  LEGENDARY_JEWELS,
  NORMAL_JEWEL_DEFAULT,
} from '../constants/calculator/jewelConstants';

function createEntryId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function createLegendaryJewelsState() {
  return LEGENDARY_JEWELS.map((jewel) => ({
    ...NORMAL_JEWEL_DEFAULT,
    ...jewel,
    entryId: createEntryId(jewel.id),
  }));
}

export function createNormalJewel() {
  return {
    ...NORMAL_JEWEL_DEFAULT,
    entryId: createEntryId('normal-jewel'),
  };
}

export function createInitialJewelsState(savedJewels = null) {
  if (Array.isArray(savedJewels) && savedJewels.length > 0) {
    return savedJewels;
  }

  return createLegendaryJewelsState();
}

export function updateJewelField(jewels, entryId, field, value) {
  return jewels.map((jewel) =>
    jewel.entryId !== entryId
      ? jewel
      : {
          ...jewel,
          [field]: value,
        }
  );
}

export function addNormalJewel(jewels) {
  return [...jewels, createNormalJewel()];
}

export function removeNormalJewel(jewels, entryId) {
  return jewels.filter((jewel) => jewel.entryId !== entryId || jewel.legendary);
}

export function splitJewelsByType(jewels) {
  const legendaryJewels = [];
  const normalJewels = [];

  jewels.forEach((jewel) => {
    if (jewel.legendary) {
      legendaryJewels.push(jewel);
      return;
    }

    normalJewels.push(jewel);
  });

  return {
    legendaryJewels,
    normalJewels,
  };
}