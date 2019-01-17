import React, { useEffect, useState } from 'react';
import PT from 'prop-types';

import ReactRouterPT from 'propTypes/ReactRouterPT';

import { withRouter } from 'react-router-dom';
import { useStationSearch } from 'hooks';

import AlphaGroup from 'components/AlphaGroup';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Link from 'components/Link';
import SearchInput from 'components/SearchInput';

import Classes from './styles';


function StationSelector(props) {
  const { getClosestStation, closestStation, history } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const stations = useStationSearch(searchTerm);

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
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
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

  const renderAlphaGroup = group => (
    <AlphaGroup
      key={ group }
      title={ group }
      items={ stations[group] }
      renderer={ renderStations }
    />
  );

  const stationsContent = Object.keys(stations).map(renderAlphaGroup);

  return (
    <div className={ Classes.root }>
      <div className={ Classes.actionBar }>
        <Button
          className={ Classes.button }
          onClick={ handleClick }
        >
          <Icon name="direction-filled" /> Find Closest Station
        </Button>
        <SearchInput
          onClear={ handleClear }
          onChange={ handleChange }
          searchTerm={ searchTerm }
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
