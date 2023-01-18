import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App';

import './index.css';

const store = createStore();

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
  , document.getElementById('root')
);

// Do Next:
// reducer, middlewares.