import React from 'react';

export function StatTile({ label, value, accent }) {
  return (
    <article className={`stat-tile ${accent}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}

export function MiniStat({ label, value }) {
  return (
    <div className="mini-stat-item">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export function InfoRow({ label, value }) {
  return (
    <div className="info-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
