import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import { createStore } from 'store/configStore';

import { enableDataFetch } from 'reducers/dataFetch';

window.main = () => {
  const initialState = window.__STORE__
  const store = createStore(initialState);

  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <Router>
          <Routes/>
        </Router>
      </Provider>,
      document.getElementById('app')
    , () => store.dispatch(enableDataFetch()));
  });
};
