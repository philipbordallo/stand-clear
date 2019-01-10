import ActionTypes from './ActionTypes';

const groupDepartures = groupBy => ({
  type: ActionTypes.GROUP_DEPARTURES,
  groupBy,
});

export default groupDepartures;
