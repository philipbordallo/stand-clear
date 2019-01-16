import ActionTypes from 'actions/ActionTypes';


const INITIAL_STATE = {
  abbreviation: '',
  departures: null,
  name: '',
};

function selectedStationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.CACHE_STATION_DEPATURES:
      return {
        ...state,
        abbreviation: action.data && action.data.abbreviation.toLowerCase(),
        name: action.data && action.data.name,
      };

    default:
      return state;
  }
}


export default selectedStationReducer;
