
import {createStore as createReduxStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk' 
import reducers from 'reducers/reducers';

export const createStore = (initialState = {}) => {
  const middleware = [thunk];

  if (__CLIENT__) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createReduxStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));
  } else {
    return createReduxStore(reducers, initialState, applyMiddleware(...middleware));
  }
};
