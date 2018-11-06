import React from 'react';

import Button from 'components/Button';
import Link from 'components/Link';
import SearchInput from 'components/SearchInput';

import STATION_LIST from 'shared/meta/STATION_LIST';

import Classes from './styles';


function renderStations(station) {
  const { name, abbreviation } = station;

  const url = `/station/${abbreviation.toLowerCase()}`;

  return (
    <Link key={ abbreviation } to={ url } className={ Classes.link }>
      { name }
    </Link>
  );
}

function StationSelector() {
  return (
    <div>
      <Button>Find Closest Station</Button>
      <SearchInput />
      <div className={ Classes.links }>
        { STATION_LIST.map(renderStations) }
      </div>
    </div>
  );
}

export default StationSelector;
