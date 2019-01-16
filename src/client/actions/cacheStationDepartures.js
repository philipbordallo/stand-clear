import ActionTypes from './ActionTypes';

const cacheStationDepartures = data => ({
  type: ActionTypes.CACHE_STATION_DEPATURES,
  data,
});

export default cacheStationDepartures;
