import React from 'react';

export default function PresetsTab({ presetName, updateSetting }) {
  return (
    <section className="card tab-panel-card">
      <div className="section-heading-row">
        <div>
          <h3>Presets</h3>
          <p>Shareable preset management scaffold for import and export later.</p>
        </div>
      </div>
      <div className="preset-layout-grid">
        <article className="config-card">
          <h4>Current Preset</h4>
          <label className="stacked-field">
            <span>Name</span>
            <input
              type="text"
              value={presetName}
              onChange={(event) => updateSetting('presetName', event.target.value)}
            />
          </label>
          <div className="button-row-wrap">
            <button className="primary-button" type="button">New</button>
            <button className="ghost-button" type="button">Duplicate</button>
            <button className="ghost-button" type="button">Rename</button>
            <button className="ghost-button danger" type="button">Delete</button>
          </div>
        </article>
        <article className="config-card">
          <h4>Share / Import</h4>
          <label className="stacked-field">
            <span>Export Code</span>
            <textarea
              rows="7"
              value='{"version":1,"name":"Default EUNA Preset"}'
              readOnly
            />
          </label>
          <div className="button-row-wrap">
            <button className="primary-button" type="button">Copy Export</button>
            <button className="ghost-button" type="button">Import</button>
          </div>
        </article>
      </div>
    </section>
  );
}
