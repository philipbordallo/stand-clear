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

function useStationSearch(searchTerm) {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const filteredStations = filterStations(searchTerm);

    setStations(filteredStations);
  }, [searchTerm]);

  return stations;
}

export default useStationSearch;
