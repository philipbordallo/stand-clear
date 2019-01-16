import { combineReducers } from 'redux';

import advisoriesReducer from './advisoriesReducer';
import departuresReducer from './departuresReducer';
import navigationReducer from './navigationReducer';
import selectedStationReducer from './selectedStationReducer';

const reducers = combineReducers({
  advisories: advisoriesReducer,
  departures: departuresReducer,
  navigation: navigationReducer,
  selectedStation: selectedStationReducer,
});

export default reducers;
