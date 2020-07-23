import React, { useReducer, createContext } from 'react';
import { v4 as id } from 'uuid';
import initialState from './initialState';

export const GrudgeContext = createContext();

const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';

const defaultState = {
  past: [],
  present: initialState,
  future: []
};

const reducer = (state = defaultState, action) => {
  if (action.type === GRUDGE_ADD) {
    const newPresent = [
      {
        id: id(),
        ...action.payload
      },
      ...state.present
    ];

    return {
      past: [state.present, ...state.past],
      present: newPresent,
      future: []
    };
  }

  if (action.type === GRUDGE_FORGIVE) {
    const newPresent = state.present.map((grudge) => {
      if (grudge.id === action.payload.id) {
        return { ...grudge, forgiven: !grudge.forgiven };
      }
      return grudge;
    });

    return {
      past: [state.present, ...state.past],
      present: newPresent,
      future: []
    };
  }

  if (action.type === 'UNDO') {
    const [newPresent, ...newPast] = state.past;
    return {
      past: newPast,
      present: newPresent,
      future: [state.present, ...state.future]
    };
  }

  if (action.type === 'REDO') {
    const [newPresent, ...newFuture] = state.future;
    return {
      past: [state.present, ...state.past],
      present: newPresent,
      future: newFuture
    };
  }

  return state;
};

export const GrudgeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
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
    dispatch({ type: 'UNDO' });
  };

  const redo = () => {
    dispatch({ type: 'REDO' });
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
