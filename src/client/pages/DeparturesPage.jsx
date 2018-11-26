import React, { useEffect } from 'react';
import PT from 'prop-types';

import ReactRouterPT from 'propTypes/ReactRouterPT';

import { useResource, useLogger, useRedux } from 'hooks';

import CurrentStation from 'components/CurrentStation';
import ErrorPage from 'pages/ErrorPage';
import Page from 'components/Page';


function DeparturesPage(props) {
  const { match } = props;
  const { station } = match.params;

  const [, { getAdvisories }] = useRedux();

  useEffect(() => {
    getAdvisories();
  }, []);

  const currentStation = useResource({
    url: `/.netlify/functions/departures/${station}`,
  }, [station]);

  useLogger({ currentStation, station });

  const hasLoaded = !currentStation.isLoading && currentStation.hasLoaded;

  if (currentStation.hasError) {
    return (
      <ErrorPage
        title={ currentStation.error.name }
        message={ currentStation.error.message }
      />
    );
  }

  return (
    <Page title={ hasLoaded ? currentStation.data.name : '' }>
      <CurrentStation
        showContent={ hasLoaded }
        { ...currentStation.data }
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
