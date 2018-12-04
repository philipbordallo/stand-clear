import React, { useEffect, useState } from 'react';
import PT from 'prop-types';

import ReactRouterPT from 'propTypes/ReactRouterPT';

import { withRouter } from 'react-router-dom';

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
  const { getClosestStation, closestStation, history } = props;
  const [searchValue, setSearchValue] = useState('');
  const [isSearchExpanded, toggleSearchExpanded] = useState(false);

  useEffect(() => {
    if (closestStation.abbreviation) {
      const station = closestStation.abbreviation.toLowerCase();
      history.push(`/station/${station}`);
    }
  }, [closestStation.abbreviation]);

  const handleClick = () => {
    getClosestStation();
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
  };

  const stationFilter = (station = {}) => {
    const { name, shortName, city } = station;
    const searchValueRegExp = new RegExp(searchValue.toLowerCase().trim(), 'g');
    const found = `${name.toLowerCase()} ${shortName.toLowerCase()} ${city.toLowerCase()}`
      .match(searchValueRegExp);
    return found && found.length > 0;
  };

  return (
    <div className={ Classes.root }>
      <div className={ Classes.actionBar }>
        <Button
          className={ Classes.button }
          onClick={ handleClick }
          disabled={ isSearchExpanded }
        >
          Find Closest Station
        </Button>


        <SearchInput
          onClear={ handleClear }
          onChange={ handleChange }
          searchValue={ searchValue }
          isSearchExpanded={ isSearchExpanded }
          toggleSearchExpanded={ toggleSearchExpanded }
        />
      </div>
      <div className={ Classes.links }>
        { STATION_LIST.filter(stationFilter).map(renderStations) }
      </div>
    </div>
  );
}
StationSelector.propTypes = {
  getClosestStation: PT.func.isRequired,
  closestStation: PT.shape({
    isLoading: PT.bool.isRequired,
    hasLoaded: PT.bool.isRequired,
    data: PT.shape({
      accuracy: PT.number.isRequired,
      latitude: PT.number.isRequired,
      longitude: PT.number.isRequired,
    }),
    error: PT.string,
    abbreviation: PT.string,
  }).isRequired,
  history: ReactRouterPT.history.isRequired,
};

export default withRouter(StationSelector);
