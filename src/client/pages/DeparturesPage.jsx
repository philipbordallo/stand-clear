import React, { useEffect, useState } from 'react';
import PT from 'prop-types';

import ReactRouterPT from 'propTypes/ReactRouterPT';

import { useRedux } from 'hooks';

import CurrentStation from 'components/CurrentStation';
import PullToRefresh from 'components/PullToRefresh';
import ErrorPage from 'pages/ErrorPage';
import Page from 'components/Page';

function DeparturesPage(props) {
  const { match } = props;
  const { station } = match.params;

  const [
    { departures, selectedStation },
    {
      getDepartures,
      updateStationLink,
      clearDepartures,
      groupDepartures,
      cacheStationDepartures,
    },
  ] = useRedux();

  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => () => {
    clearDepartures();
  }, []);

  useEffect(() => {
    updateStationLink(station);
    getDepartures(station, isRefresh);
  }, [station, isRefresh]);

  const hasLoaded = !departures.isLoading && departures.hasLoaded;

  // If departures have fully load, cache that data
  useEffect(() => {
    if (hasLoaded) {
      cacheStationDepartures(departures.data);
    }
  }, [hasLoaded]);

  let name = '';

  if (station === selectedStation.abbreviation) {
    name = selectedStation.name;
  }

  if (hasLoaded) {
    name = departures.data.name;
  }

  if (departures.hasError) {
    return (
      <ErrorPage
        title={ departures.error.name }
        message={ departures.error.message }
      />
    );
  }

  return (
    <Page title={ name }>
      <PullToRefresh setIsRefresh={ setIsRefresh } hasRefreshed={ hasLoaded }>
        <CurrentStation
          groupDepartures={ groupDepartures }
          hasLoaded={ hasLoaded }
          { ...departures.data }
        />
      </PullToRefresh>
    </Page>
  );
}
DeparturesPage.propTypes = {
  match: ReactRouterPT.match({
    station: PT.string,
  }).isRequired,
  location: ReactRouterPT.location.isRequired,
  history: ReactRouterPT.history.isRequired,
};

export default DeparturesPage;
