import React from 'react';

export default function CalculatorTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="calculator-tabs card">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={tab.id === activeTab ? 'tab-button active' : 'tab-button'}
          onClick={() => onChange(tab.id)}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
