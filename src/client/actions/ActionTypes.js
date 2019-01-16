const ActionTypes = {
  GET_ADVISORIES_START: 'advisories::GET_ADVISORIES_START',
  GET_ADVISORIES_SUCCESS: 'advisories::GET_ADVISORIES_SUCCESS',
  GET_ADVISORIES_FAILURE: 'advisories::GET_ADVISORIES_FAILURE',

  GET_DEPARTURES_START: 'departures::GET_DEPARTURES_START',
  GET_DEPARTURES_SUCCESS: 'departures::GET_DEPARTURES_SUCCESS',
  GET_DEPARTURES_FAILURE: 'departures::GET_DEPARTURES_FAILURE',
  CLEAR_DEPARTURES: 'departures::CLEAR_DEPARTURES',
  GROUP_DEPARTURES: 'departures::GROUP_DEPARTURES',

  UPDATE_STATION_LINK: 'navigation::UPDATE_STATION_LINK',

  CACHE_STATION_DEPATURES: 'selectedStation::CACHE_STATION_DEPATURES',
};

export default ActionTypes;
