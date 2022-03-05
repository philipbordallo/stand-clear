import ActionTypes from 'actions/ActionTypes';

const INITIAL_STATE = [];

function updateStationLink(links, station) {
  return links.map((link) => {
    if (link.key === 'station') {
      return {
        ...link,
        to: `/station/${station}`,
      };
    }

    return link;
  });
}

function addNotification(key, links, notifications = []) {
  return links.map((link) => {
    if (link.key === key) {
      return {
        ...link,
        hasNotification: notifications.list.some(({ type }) => type === 'DELAY' || type === 'EMERGENCY'),
      };
    }

    return link;
  });
}

function navigationReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ActionTypes.UPDATE_STATION_LINK:
      return updateStationLink(state, action.data);

    case ActionTypes.GET_ADVISORIES_SUCCESS:
      return addNotification('advisories', state, action.data);

    default:
      return state;
  }
}

export default navigationReducer;
