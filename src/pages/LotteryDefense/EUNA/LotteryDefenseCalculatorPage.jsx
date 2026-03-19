import React, { useMemo, useState } from 'react';
import './styles/ld-euna-index.css';
import { UNIT_LIBRARY } from "./constants/calculator/unitConstants";
import { TAB_OPTIONS } from './constants/calculator/runeConstants';
import {
  calculateMockRequiredDps,
  calculateMockUnitDps
} from "./utils/damageCalculation";
import { createUnitEntry } from './utils/createUnitEntry';
import CalculatorHero from './calculator/CalculatorHero';
import CalculatorTabs from './calculator/CalculatorTabs';
import MainTab from './calculator/MainTab';
import SpUpgradesTab from './calculator/tabs/SpUpgradesTab';
import RunesTab from './calculator/tabs/RunesTab';
import JewelsTab from './calculator/tabs/JewelsTab';
import BuffsTab from './calculator/tabs/BuffsTab';
import PresetsTab from './calculator/tabs/PresetsTab';
import BuildUnitsTab from './calculator/tabs/BuildUnitsTab';

const INITIAL_SETTINGS = {
  title: 'Rookie',
  difficulty: 'Practice',
  torment: 0,
  round: 270,
  xp: 0,
  sp: 0,
  gameMode: 'Standard',
  tocMode: false,
  runeSlot: 'Slot 1',
  presetName: 'Default EUNA Preset',
};

const safeUnitLibrary = Array.isArray(UNIT_LIBRARY) ? UNIT_LIBRARY : [];
const defaultUnit = safeUnitLibrary[0] ?? null;

export default function LotteryDefenseCalculatorPage() {
  const [activeTab, setActiveTab] = useState('main');
  const [selectedUnitId, setSelectedUnitId] = useState(defaultUnit?.id ?? '');
  const [calculatorSettings, setCalculatorSettings] = useState(INITIAL_SETTINGS);
  const [units, setUnits] = useState(
    safeUnitLibrary
      .filter((_, index) => [0, 1, 3].includes(index))
      .map((unit) => createUnitEntry(unit))
  );

  const derivedStats = useMemo(() => {
    const overallDps = units.reduce((sum, unit) => {
      const perUnit = calculateMockUnitDps(unit);
      return sum + perUnit * unit.count;
    }, 0);

    const requiredDps = calculateMockRequiredDps(calculatorSettings);
    const completionPercent = requiredDps > 0
      ? (overallDps / requiredDps) * 100
      : 0;

    return {
      overallDps,
      requiredDps,
      completionPercent,
      totalUnits: units.reduce((sum, unit) => sum + unit.count, 0),
      uniqueUnits: units.length,
    };
  }, [calculatorSettings, units]);

  const addUnit = () => {
    if (!safeUnitLibrary.length) return;

    const template =
      safeUnitLibrary.find((unit) => unit.id === selectedUnitId) ?? safeUnitLibrary[0];

    setUnits((currentUnits) => [...currentUnits, createUnitEntry(template)]);
  };

  const removeUnit = (entryId) => {
    setUnits((currentUnits) => currentUnits.filter((unit) => unit.entryId !== entryId));
  };

  const updateUnit = (entryId, field, value) => {
    setUnits((currentUnits) =>
      currentUnits.map((unit) =>
        unit.entryId !== entryId
          ? unit
          : {
              ...unit,
              [field]: value,
            }
      )
    );
  };

  const updateSetting = (field, value) => {
    setCalculatorSettings((currentSettings) => ({
      ...currentSettings,
      [field]: value,
    }));
  };

  return (
    <section className="calculator-page">
      <CalculatorHero settings={calculatorSettings} />
      <CalculatorTabs tabs={TAB_OPTIONS} activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'main' && (
        <MainTab
          calculatorSettings={calculatorSettings}
          derivedStats={derivedStats}
          selectedUnitId={selectedUnitId}
          setSelectedUnitId={setSelectedUnitId}
          units={units}
          addUnit={addUnit}
          removeUnit={removeUnit}
          updateUnit={updateUnit}
          updateSetting={updateSetting}
        />
      )}

      {activeTab === 'sp-upgrades' && <SpUpgradesTab />}
      {activeTab === 'runes' && <RunesTab />}
      {activeTab === 'jewels' && <JewelsTab />}
      {activeTab === 'buffs' && <BuffsTab />}
      {activeTab === 'presets' && (
        <PresetsTab
          presetName={calculatorSettings.presetName}
          updateSetting={updateSetting}
        />
      )}
      {activeTab === 'build-units' && (
        <BuildUnitsTab
          selectedUnitId={selectedUnitId}
          setSelectedUnitId={setSelectedUnitId}
          units={units}
          addUnit={addUnit}
          removeUnit={removeUnit}
          updateUnit={updateUnit}
        />
      )}
    </section>
  );
}
