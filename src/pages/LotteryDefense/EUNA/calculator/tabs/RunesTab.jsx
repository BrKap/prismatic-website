import React, { useState } from 'react';
import { RuneEditorCard } from '../MainSidebarCards';

export default function RunesTab({
  runeLoadouts,
  updateRuneLoadout,
  swapRuneLoadouts,
}) {
  const [draggedSlot, setDraggedSlot] = useState(null);

  return (
    <section className="tab-panel-card runes-tab-layout">
      <div className="section-heading-row card">
        <div>
          <h3>Runes</h3>
          <p>Edit all rune slots here. Drag a rune card onto another slot to swap them.</p>
        </div>
      </div>

      <div className="placeholder-config-grid rune-editor-grid">
        {runeLoadouts.map((rune) => (
          <div
            key={rune.slot}
            draggable
            onDragStart={() => setDraggedSlot(rune.slot)}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => {
              if (draggedSlot && draggedSlot !== rune.slot) {
                swapRuneLoadouts(draggedSlot, rune.slot);
              }
              setDraggedSlot(null);
            }}
            onDragEnd={() => setDraggedSlot(null)}
          >
            <RuneEditorCard
              runeData={rune}
              onFieldChange={(field, value) => updateRuneLoadout(rune.slot, field, value)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}