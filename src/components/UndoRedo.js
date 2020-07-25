import React from 'react';

const UndoRedo = ({ isPast, undo, isFuture, redo }) => {
  return (
    <>
      <section>
        <button className="full-width" disabled={!isPast} onClick={undo}>
          Undo
        </button>
        <button className="full-width" disabled={!isFuture} onClick={redo}>
          Redo
        </button>
      </section>
    </>
  );
};

export default UndoRedo;
