import API from 'api';

import ActionTypes from './ActionTypes';

const getAdvisoriesStart = () => ({
  type: ActionTypes.GET_ADVISORIES_START,
});

const getAdvisoriesSuccess = data => ({
  type: ActionTypes.GET_ADVISORIES_SUCCESS,
  data,
});

const getAdvisoriesFailure = error => ({
  type: ActionTypes.GET_ADVISORIES_FAILURE,
  error,
});

const getAdvisories = () => (dispatch) => {
  dispatch(getAdvisoriesStart());

  API.getAdvisories()
    .then(
      data => dispatch(getAdvisoriesSuccess(data)),
      error => dispatch(getAdvisoriesFailure(error)),
    );
};

export default getAdvisories;
