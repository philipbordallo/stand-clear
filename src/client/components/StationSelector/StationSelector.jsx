import React, { useEffect } from 'react';
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

  useEffect(() => {
    if (closestStation) {
      history.push(`/station/${closestStation.toLowerCase()}`);
    }
  }, [closestStation]);

  const handleClick = () => {
    getClosestStation();
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
  getClosestStation: PT.func.isRequired,
  closestStation: PT.string,
  history: ReactRouterPT.history.isRequired,
};
StationSelector.defaultProps = {
  closestStation: '',
};

export default withRouter(StationSelector);
