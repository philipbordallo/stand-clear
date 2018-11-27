import API from 'api';

import ActionTypes from './ActionTypes';


const getDeparturesStart = () => ({
  type: ActionTypes.GET_DEPARTURES_START,
});

const getDeparturesSuccess = data => ({
  type: ActionTypes.GET_DEPARTURES_SUCCESS,
  data,
});

const getDeparturesFailure = error => ({
  type: ActionTypes.GET_DEPARTURES_FAILURE,
  error,
});

const getDepartures = station => (dispatch) => {
  dispatch(getDeparturesStart());

  API.getDepartures(station)
    .then(
      data => dispatch(getDeparturesSuccess(data)),
      error => dispatch(getDeparturesFailure(error)),
    );
};

export default getDepartures;
