import React from 'react';
import PT from 'prop-types';

import { useResource, useLogger } from 'hooks';

import CurrentStation from 'components/CurrentStation';

function StationArrivalsPage(props) {
  const { selectedStation } = props;

  const advisories = useResource({
    url: '/.netlify/functions/advisories',
  });

  const currentStation = useResource({
    url: `/.netlify/functions/arrivals/${selectedStation}`,
  }, [selectedStation]);

  useLogger({ currentStation, selectedStation, advisories });

  return (
    <CurrentStation
      showContent={ !currentStation.isLoading && currentStation.hasLoaded }
      { ...currentStation.data }
    />
  );
}
StationArrivalsPage.propTypes = {
  selectedStation: PT.string.isRequired,
};

export default StationArrivalsPage;
