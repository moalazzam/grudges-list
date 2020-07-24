import React, { createContext } from 'react';
import { v4 as id } from 'uuid';

import useUndoReducer from './use-undo-reducer';
import initialState from './initialState';

export const GrudgeContext = createContext();

const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';
const UNDO = 'UNDO';
const REDO = 'REDO';

const reducer = (state = initialState, action) => {
  if (action.type === GRUDGE_ADD) {
    return [
      {
        id: id(),
        ...action.payload
      },
      ...state
    ];
  }

  if (action.type === GRUDGE_FORGIVE) {
    console.log(state);
    return state.map((grudge) => {
      if (grudge.id === action.payload.id) {
        return { ...grudge, forgiven: !grudge.forgiven };
      }
      return grudge;
    });
  }

  return state;
};

export const GrudgeProvider = ({ children }) => {
  const [state, dispatch] = useUndoReducer(reducer, initialState);
  const grudges = state.present;
  const isPast = !!state.past.length;
  const isFuture = !!state.future.length;

  const addGrudge = ({ person, reason }) => {
    dispatch({
      type: GRUDGE_ADD,
      payload: {
        person,
        reason,
        forgiven: false
      }
    });
  };

  const toggleForgiveness = (id) => {
    dispatch({
      type: GRUDGE_FORGIVE,
      payload: {
        id
      }
    });
  };

  const undo = () => {
    dispatch({ type: UNDO });
  };

  const redo = () => {
    dispatch({ type: REDO });
  };

  return (
    <GrudgeContext.Provider
      value={{
        grudges,
        addGrudge,
        toggleForgiveness,
        undo,
        isPast,
        redo,
        isFuture
      }}
    >
      {children}
    </GrudgeContext.Provider>
  );
};
