import { ActionTypes } from 'actions/advisoriesActions';

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
        isLoading: true,
        hasLoaded: false,
        hasError: false,
        data: INITIAL_STATE.data,
        error: INITIAL_STATE.error,
      };

    case ActionTypes.GET_ADVISORIES_SUCCESS:
      return {
        isLoading: false,
        hasLoaded: true,
        hasError: false,
        data: action.data,
      };

    case ActionTypes.GET_ADVISORIES_FAILURE:
      return {
        isLoading: false,
        hasLoaded: true,
        hasError: true,
        error: action.error,
      };

    default:
      return state;
  }
}

export default advisoriesReducer;
