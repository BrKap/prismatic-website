import React from 'react';
import { Link } from 'react-router-dom';

export default function CalculatorHero({ settings }) {
  return (
    <div className="calculator-hero card">
      <div>
        <div className="breadcrumb-row">
          <Link to="/lottery-defense/euna">Lottery Defense - EUNA</Link>
          <span>/</span>
          <span>Calculator</span>
        </div>
        <h2>Lottery Defense EUNA Calculator</h2>
        <p>
          UI scaffolding for the main dashboard, presets, and future DPS logic.
        </p>
      </div>
      <div className="hero-summary-pills">
        <span>Preset: {settings.presetName}</span>
      </div>
    </div>
  );
}
