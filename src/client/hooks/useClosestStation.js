import { useEffect, useState } from 'react';

import haversine from 'haversine';

import STATION_LIST from 'shared/meta/STATION_LIST';

import { useGeolocation } from 'hooks';

function useClosestStation() {
  const [closestStation, setClosestStation] = useState('');
  const [geolocation, getGeolocation] = useGeolocation();

  useEffect(() => {
    if (geolocation.data) {
      STATION_LIST.reduce((closestDistance, station) => {
        const distance = haversine(
          station,
          geolocation.data,
        );

        if ((!closestDistance && closestDistance !== 0) || distance < closestDistance) {
          setClosestStation(station.abbreviation);

          return distance;
        }

        return closestDistance;
      }, null);
    }
  }, [geolocation.data]);

  return [closestStation, getGeolocation];
}

export default useClosestStation;
