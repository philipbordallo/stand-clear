import API from 'api';

export const ActionTypes = {
  GET_ADVISORIES_START: 'GET_ADVISORIES_START',
  GET_ADVISORIES_SUCCESS: 'GET_ADVISORIES_SUCCESS',
  GET_ADVISORIES_FAILURE: 'GET_ADVISORIES_FAILURE',
};

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

export const getAdvisories = () => (dispatch) => {
  dispatch(getAdvisoriesStart());

  API.getAdvisories()
    .then(
      data => dispatch(getAdvisoriesSuccess(data)),
      error => dispatch(getAdvisoriesFailure(error)),
    );
};
