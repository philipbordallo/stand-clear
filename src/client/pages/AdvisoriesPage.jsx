import React, { useEffect } from 'react';

import ErrorPage from 'pages/ErrorPage';
import Page from 'components/Page';
import AdvisoriesList from 'components/AdvisoriesList';

import { useRedux } from 'hooks';


function AdvisoriesPage() {
  const [{ advisories }, { getAdvisories }] = useRedux();

  useEffect(() => {
    getAdvisories();
  }, []);


  if (advisories.hasError) {
    return (
      <ErrorPage
        title={ advisories.error.name }
        message={ advisories.error.message }
      />
    );
  }

  return (
    <Page title="Advisories">
      { !advisories.isLoading && advisories.hasLoaded ? (
        <AdvisoriesList { ...advisories.data } />
      ) : null }
    </Page>
  );
}

export default AdvisoriesPage;
