import ActionTypes from 'actions/ActionTypes';

import departuresGroupBy from './departuresGroupBy';


const INITIAL_STATE = {
  isLoading: false,
  hasLoaded: false,
  data: null,
  error: null,
  groupBy: 'direction',
  departuresList: [],
};

function departuresReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.GET_DEPARTURES_START:
      return {
        ...state,
        isLoading: true,
        hasLoaded: false,
        data: INITIAL_STATE.data,
        error: INITIAL_STATE.error,
      };

    case ActionTypes.GET_DEPARTURES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasLoaded: true,
        data: {
          ...action.data,
          list: action.data.list,
          listGrouped: departuresGroupBy(action.data.list, state.groupBy),
        },
      };

    case ActionTypes.GET_DEPARTURES_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasLoaded: true,
        error: action.error,
      };

    case ActionTypes.GROUP_DEPARTURES:
      return {
        ...state,
        data: {
          ...state.data,
          listGrouped: departuresGroupBy(state.data.list, action.groupBy),
        },
        groupBy: action.groupBy,
      };

    case ActionTypes.CLEAR_DEPARTURES:
      return INITIAL_STATE;

    default:
      return state;
  }
}

export default departuresReducer;
