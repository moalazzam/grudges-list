import React from 'react';

import NewGrudgeContainer from '../containers/NewGrudgeContainer';
import UndoRedoContainer from '../containers/UndoRedoContainer';
import GrudgesContainer from '../containers/GrudgesContainer';

const Application = () => {
  return (
    <div className="Application">
      <NewGrudgeContainer />
      <UndoRedoContainer />
      <GrudgesContainer />
    </div>
  );
};

export default Application;
