import React from 'react';

export default function PlaceholderPage({ title }) {
  return (
    <section className="page-section">
      <div className="section-card">
        <h1>{title}</h1>
        <p>This page is still under construction.</p>
      </div>
    </section>
  );
}