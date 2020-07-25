import React, { createContext, useContext } from 'react';
import useUndoReducer from './hooks/use-undo-reducer';
import isFunction from 'lodash/isFunction';

const Context = createContext();

export function Provider({ reducer, initialState, children }) {
  const [state, dispatch] = useUndoReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export function connect(mapStateToProps, mapDispatchToProps) {
  return function (Component) {
    return function (ownProps) {
      const { state, dispatch } = useContext(Context);

      let stateProps = {};
      let dispatchProps = {};

      if (isFunction(mapStateToProps)) {
        stateProps = mapStateToProps(state, ownProps);
      }

      if (isFunction(mapDispatchToProps)) {
        dispatchProps = mapDispatchToProps(dispatch, ownProps);
      }

      Component.displayName = `Connected(${Component.displayName})`;

      return <Component {...stateProps} {...dispatchProps} {...ownProps} />;
    };
  };
}
