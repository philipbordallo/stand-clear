import React, { useEffect } from 'react';
import PT from 'prop-types';

import ReactRouterPT from 'propTypes/ReactRouterPT';

import { useRedux } from 'hooks';

import CurrentStation from 'components/CurrentStation';
import ErrorPage from 'pages/ErrorPage';
import Page from 'components/Page';


function DeparturesPage(props) {
  const { match } = props;
  const { station } = match.params;

  const [
    { departures },
    { getAdvisories, getDepartures, updateStationLink },
  ] = useRedux();

  useEffect(() => {
    getAdvisories();
  }, []);

  useEffect(() => {
    updateStationLink(station);
    getDepartures(station);
  }, [station]);

  const hasLoaded = !departures.isLoading && departures.hasLoaded;

  if (departures.hasError) {
    return (
      <ErrorPage
        title={ departures.error.name }
        message={ departures.error.message }
      />
    );
  }

  return (
    <Page title={ hasLoaded ? departures.data.name : '' }>
      <CurrentStation
        showContent={ hasLoaded }
        { ...departures.data }
      />
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