import React from 'react';
import PT from 'prop-types';

import ReactRouterPT from 'propTypes/ReactRouterPT';

import { useResource, useLogger } from 'hooks';

import CurrentStation from 'components/CurrentStation';

function ArrivalsPage(props) {
  const { match } = props;
  const { station } = match.params;

  const advisories = useResource({
    url: '/.netlify/functions/advisories',
  });

  const currentStation = useResource({
    url: `/.netlify/functions/arrivals/${station}`,
  }, [station]);

  useLogger({ currentStation, station, advisories });

  return (
    <CurrentStation
      showContent={ !currentStation.isLoading && currentStation.hasLoaded }
      { ...currentStation.data }
    />
  );
}
ArrivalsPage.propTypes = {
  match: ReactRouterPT.match({
    station: PT.string,
  }).isRequired,
  location: ReactRouterPT.location.isRequired,
  history: ReactRouterPT.history.isRequired,
};

export default ArrivalsPage;