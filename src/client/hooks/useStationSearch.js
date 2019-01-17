import { useState, useEffect } from 'react';

import STATION_LIST from 'shared/meta/STATION_LIST';


function filterStations(searchTerm) {
  return STATION_LIST.filter((station) => {
    const { name, shortName, city } = station;

    const searchTermRegExp = new RegExp(searchTerm.toLowerCase().trim(), 'g');
    const searchAgainst = [name, shortName, city]
      .map(item => item.toLowerCase())
      .join(' ');
    const found = searchAgainst.match(searchTermRegExp);

    return found && found.length > 0;
  });
}

function groupStationsByAlpha(stations) {
  return stations.reduce((accumulator, station) => {
    const keyString = station.name
      .toUpperCase()
      .substring(0, 1);

    // For numbers use a #
    const key = Number.isNaN(Number(keyString))
      ? keyString
      : '#';

    if (accumulator[key] && accumulator[key].length > 0) {
      return {
        ...accumulator,
        [key]: accumulator[key].concat([station]),
      };
    }

    return {
      ...accumulator,
      [key]: [station],
    };
  }, {});
}

function useStationSearch(searchTerm) {
  const [stations, setStations] = useState({});

  useEffect(() => {
    const filteredStations = filterStations(searchTerm);
    const groupedStations = groupStationsByAlpha(filteredStations);

    setStations(groupedStations);
  }, [searchTerm]);

  return stations;
}

export default useStationSearch;
