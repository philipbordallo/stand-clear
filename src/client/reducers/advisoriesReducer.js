import ActionTypes from 'actions/ActionTypes';

const INITIAL_STATE = {
  isLoading: false,
  hasLoaded: false,
  data: null,
  error: null,
};

function advisoriesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.GET_ADVISORIES_START:
      return {
        ...state,
        isLoading: true,
        hasLoaded: false,
        data: INITIAL_STATE.data,
        error: INITIAL_STATE.error,
      };

    case ActionTypes.GET_ADVISORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasLoaded: true,
        data: action.data,
      };

    case ActionTypes.GET_ADVISORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasLoaded: true,
        error: action.error,
      };

    default:
      return state;
  }
}

export default advisoriesReducer;
