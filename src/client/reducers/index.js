import { combineReducers } from 'redux';

import advisoriesReducer from './advisoriesReducer';
import departuresReducer from './departuresReducer';
import navigationReducer from './navigationReducer';

const reducers = combineReducers({
  advisories: advisoriesReducer,
  departures: departuresReducer,
  navigation: navigationReducer,
});

export default reducers;
