import React from 'react';
import PT from 'prop-types';

import Button from 'components/Button';
import Link from 'components/Link';
import SearchInput from 'components/SearchInput';

import STATION_LIST from 'shared/meta/STATION_LIST';

import Classes from './styles';


function renderStations(station) {
  const { shortName, name, abbreviation } = station;

  const url = `/station/${abbreviation.toLowerCase()}`;

  return (
    <Link key={ abbreviation } to={ url } className={ Classes.link } title={ name }>
      { shortName }
    </Link>
  );
}

function StationSelector(props) {
  const { getGeolocation, geolocation } = props; // eslint-disable-line no-unused-vars

  const handleClick = () => {
    getGeolocation();
  };

  return (
    <div>
      <Button onClick={ handleClick }>Find Closest Station</Button>
      <SearchInput />
      <div className={ Classes.links }>
        { STATION_LIST.map(renderStations) }
      </div>
    </div>
  );
}
StationSelector.propTypes = {
  getGeolocation: PT.func.isRequired,
  geolocation: PT.shape({
    isLoading: PT.bool.isRequired,
    hasLoaded: PT.bool.isRequired,
    data: PT.shape({
      accuracy: PT.number.isRequired,
      latitude: PT.number.isRequired,
      longitude: PT.number.isRequired,
    }),
    error: PT.string,
  }),
};
StationSelector.defaultProps = {
  geolocation: {},
};

export default StationSelector;
