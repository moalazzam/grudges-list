import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './context';
import rootReducer from './reducers';
import initialState from './initialState';

import Application from './components/Application';

import './styles.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider reducer={rootReducer} initialState={initialState}>
    <Application />
  </Provider>,
  rootElement
);
