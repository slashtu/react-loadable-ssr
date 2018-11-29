import {combineReducers} from 'redux';

import dataFetch from 'reducers/dataFetch';
import adoptions from 'reducers/adoptions';

const reducers = {
  dataFetch,
  adoptions
};

export default combineReducers(reducers);
