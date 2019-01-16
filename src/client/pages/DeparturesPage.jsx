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
    { departures },
    {
      getDepartures,
      updateStationLink,
      clearDepartures,
      groupDepartures,
    },
  ] = useRedux();

  const [refresh, setRefresh] = useState(false);
  const [prevName, setPrevName] = useState('');

  useEffect(() => {
    setRefresh(true);
    return () => {
      clearDepartures();
    };
  }, []);

  useEffect(() => {
    if (refresh) {
      updateStationLink(station);
      getDepartures(station);
    }
  }, [station, refresh]);

  const hasLoaded = !departures.isLoading && departures.hasLoaded;

  let name = hasLoaded
    ? departures.data.name
    : '';

  if (name && name !== prevName) {
    setPrevName(name);
  }
  else {
    name = prevName;
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
      <PullToRefresh setRefresh={ setRefresh } hasRefreshed={ hasLoaded }>
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
