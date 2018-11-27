import API from 'api';

import ActionTypes from './ActionTypes';
import getTimestamp from 'utilities/getTimestamp';


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

const getAdvisories = () => (dispatch, getState) => {
  const { advisories } = getState();
  const timestamp = getTimestamp();

  const timestampDiff = timestamp - advisories.timestamp;

  // Update advisories only if a minute has passed or it's a new page/refresh
  if (timestampDiff > 60 || timestampDiff <= 2) {
    dispatch(getAdvisoriesStart());

    API.getAdvisories()
      .then(
        data => dispatch(getAdvisoriesSuccess(data)),
        error => dispatch(getAdvisoriesFailure(error)),
      );
  }
};

export default getAdvisories;
