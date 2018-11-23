import { combineReducers } from 'redux';

import advisoriesReducer from './advisoriesReducer';

const reducers = combineReducers({
  advisories: advisoriesReducer,
});

export default reducers;
