import React from 'react';

import Button from 'components/Button';
import Link from 'components/Link';
import SearchInput from 'components/SearchInput';

import STATION_LIST from 'shared/meta/STATION_LIST';

function renderStations(station) {
  const { name, abbreviation } = station;

  const url = `/station/${abbreviation.toLowerCase()}`;

  return (
    <Link key={ abbreviation } to={ url }>
      { name }
    </Link>
  );
}

function StationSelector() {
  return (
    <div>
      <Button>Find Closest Station</Button>
      <SearchInput />
      { STATION_LIST.map(renderStations) }
    </div>
  );
}

export default StationSelector;
