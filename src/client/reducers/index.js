import { combineReducers } from 'redux';

import advisoriesReducer from './advisoriesReducer';
import navigationReducer from './navigationReducer';

const reducers = combineReducers({
  advisories: advisoriesReducer,
  navigation: navigationReducer,
});

export default reducers;
