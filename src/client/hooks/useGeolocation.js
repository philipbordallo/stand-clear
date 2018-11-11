import { useMutationEffect, useReducer } from 'react';

import geolocationParser from 'parsers/geolocationParser';

const INITIAL_STATE = {
  count: 0,
  isLoading: false,
  hasLoaded: false,
  data: null,
  error: null,
};

const ActionTypes = {
  GET_GEOLOCATION_TRIGGER: 'GET_GEOLOCATION_TRIGGER',
  GET_GEOLOCATION_START: 'GET_GEOLOCATION_START',
  GET_GEOLOCATION_SUCCESS: 'GET_GEOLOCATION_SUCCESS',
  GET_GEOLOCATION_FAILURE: 'GET_GEOLOCATION_FAILURE',
};

function geolocationReducer(state, action) {
  switch (action.type) {
    case ActionTypes.GET_GEOLOCATION_TRIGGER:
      return {
        ...state,
        count: state.count + 1,
      };

    case ActionTypes.GET_GEOLOCATION_START:
      return {
        ...state,
        isLoading: true,
        hasLoaded: false,
        data: INITIAL_STATE.data,
        error: INITIAL_STATE.error,
      };

    case ActionTypes.GET_GEOLOCATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasLoaded: true,
        data: geolocationParser(action.data),
      };

    case ActionTypes.GET_GEOLOCATION_FAILURE:
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

function useGeolocation() {
  const [state, dispatch] = useReducer(geolocationReducer, INITIAL_STATE);
  const { count, ...geolocation } = state;

  const getGeolocation = () => dispatch({
    type: ActionTypes.GET_GEOLOCATION_TRIGGER,
  });

  const getGeolocationStart = () => dispatch({
    type: ActionTypes.GET_GEOLOCATION_START,
  });

  const getGeolocationSuccess = data => dispatch({
    type: ActionTypes.GET_GEOLOCATION_SUCCESS,
    data,
  });

  const getGeolocationFailure = error => dispatch({
    type: ActionTypes.GET_GEOLOCATION_FAILURE,
    error,
  });

  useMutationEffect(() => {
    if (count > 0) {
      getGeolocationStart();

      navigator.geolocation.getCurrentPosition(
        data => getGeolocationSuccess(data),
        error => getGeolocationFailure(error),
      );
    }
  }, [count]);

  return [geolocation, getGeolocation];
}

export default useGeolocation;
