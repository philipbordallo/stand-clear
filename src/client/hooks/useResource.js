import { useEffect, useReducer } from 'react';


const INITIAL_STATE = {
  isLoading: false,
  hasLoaded: false,
  data: null,
};

const ActionTypes = {
  FETCH_RESOURCE_START: 'FETCH_RESOURCE_START',
  FETCH_RESOURCE_SUCCESS: 'FETCH_RESOURCE_SUCCESS',
  FETCH_RESOURCE_FAILURE: 'FETCH_RESOURCE_FAILURE',
};

function resourceReducer(state, action) {
  switch (action.type) {
    case ActionTypes.FETCH_RESOURCE_START:
      return {
        isLoading: true,
        hasLoaded: false,
        data: INITIAL_STATE.data,
      };

    case ActionTypes.FETCH_RESOURCE_SUCCESS:
      return {
        isLoading: false,
        hasLoaded: true,
        data: action.data,
      };

    case ActionTypes.FETCH_RESOURCE_FAILURE:
      return {
        isLoading: false,
        hasLoaded: true,
        data: action.error,
      };

    default:
      return state;
  }
}

function useResource(options, trigger = []) {
  const { url, ...otherOptions } = options;

  const [state, dispatch] = useReducer(resourceReducer, INITIAL_STATE);

  const resourceStart = () => dispatch({
    type: ActionTypes.FETCH_RESOURCE_START,
  });

  const resourceSuccess = data => dispatch({
    type: ActionTypes.FETCH_RESOURCE_SUCCESS,
    data,
  });

  const resourceFailure = error => dispatch({
    type: ActionTypes.FETCH_RESOURCE_FAILURE,
    error,
  });

  useEffect(() => {
    resourceStart();

    fetch(url, otherOptions)
      .then(response => response.json())
      .then(
        data => resourceSuccess(data),
        error => resourceFailure(error),
      );
  }, trigger);

  return state;
}

export default useResource;
