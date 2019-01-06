import React, { useEffect, useState } from 'react';
import PT from 'prop-types';

import ReactRouterPT from 'propTypes/ReactRouterPT';

import { withRouter } from 'react-router-dom';
import collectStationsByAlpha from 'utilities/collectStationsByAlpha';

import Button from 'components/Button';
import Icon from 'components/Icon';
import Link from 'components/Link';
import SearchInput from 'components/SearchInput';

import STATION_LIST from 'shared/meta/STATION_LIST';

import Classes from './styles';


function StationSelector(props) {
  const { getClosestStation, closestStation, history } = props;

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (closestStation.abbreviation) {
      const station = closestStation.abbreviation.toLowerCase();
      history.push(`/station/${station}`);
    }
  }, [closestStation.abbreviation]);

  const stations = STATION_LIST
    .filter((station) => {
      const { name, shortName, city } = station;
      const searchValueRegExp = new RegExp(searchValue.toLowerCase().trim(), 'g');
      const found = `${name.toLowerCase()} ${shortName.toLowerCase()} ${city.toLowerCase()}`
        .match(searchValueRegExp);
      return found && found.length > 0;
    })
    .reduce(collectStationsByAlpha, {});

  const handleClick = () => {
    getClosestStation();
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
  };

  const renderStations = (station) => {
    const { shortName, name, abbreviation } = station;

    const url = `/station/${abbreviation.toLowerCase()}`;

    return (
      <Link key={ abbreviation } to={ url } className={ Classes.link } title={ name }>
        { shortName }
      </Link>
    );
  };

  const renderAlphaGroup = (group, index) => (
    <div className={ Classes.group } key={ index }>
      <h2 className={ Classes.groupTitle }>{ group }</h2>
      { stations[group].map(renderStations) }
    </div>
  );

  const stationsContent = Object.keys(stations).map(renderAlphaGroup);

  return (
    <div className={ Classes.root }>
      <div className={ Classes.actionBar }>
        <Button
          className={ Classes.button }
          onClick={ handleClick }
        >
          <Icon name="direction-filled" size="24" /> Find Closest Station
        </Button>
        <SearchInput
          onClear={ handleClear }
          onChange={ handleChange }
          searchValue={ searchValue }
        />
      </div>

      <div className={ Classes.links }>
        { stationsContent }
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
