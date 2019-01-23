import React, { useEffect, useState } from 'react';
import PT from 'prop-types';

import ReactRouterPT from 'propTypes/ReactRouterPT';

import { withRouter } from 'react-router-dom';
import { useStationSearch } from 'hooks';
import groupStationsByAlpha from 'utilities/groupStationsByAlpha';
import STATION_LIST from 'shared/meta/STATION_LIST';

import AlphaGroup from 'components/AlphaGroup';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Link from 'components/Link';
import SearchInput from 'components/SearchInput';

import Classes from './styles';


function StationSelector(props) {
  const {
    getClosestStation,
    closestStation,
    history,
    favorites,
  } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const stations = useStationSearch(searchTerm);
  const stationsGrouped = groupStationsByAlpha(stations);

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

  const renderFavoriteStations = (station) => {
    const { shortName, name, abbreviation } = station;
    const url = `/station/${abbreviation.toLowerCase()}`;

    return (
      <Link key={ abbreviation } to={ url } className={ Classes.link } title={ name }>
        { shortName } <Icon className={ Classes.linkIcon } name="star-outline" size="20" />
      </Link>
    );
  };

  const renderAlphaGroup = group => (
    <AlphaGroup
      key={ group }
      title={ group }
      items={ stationsGrouped[group] }
      renderer={ renderStations }
    />
  );

  const stationsContent = Object.keys(stationsGrouped).map(renderAlphaGroup);
  const favoriteStations = STATION_LIST.filter(station => favorites.includes(station.abbreviation));

  const hasFavorites = favoriteStations.length > 0;

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

      { hasFavorites ? (
        <React.Fragment>
          <AlphaGroup
            title="Favorites"
            items={ favoriteStations }
            renderer={ renderFavoriteStations }
          />
          <hr className={ Classes.horizontalRule } />
        </React.Fragment>
      ) : null }

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
  favorites: PT.arrayOf(
    PT.string,
  ),
};
StationSelector.defaultProps = {
  favorites: [],
};

export default withRouter(StationSelector);
