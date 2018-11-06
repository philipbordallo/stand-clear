import React from 'react';

import Page from 'components/Page';

import StationSelector from 'components/StationSelector';

function StationsPage() {
  return (
    <Page title="Stations">
      <StationSelector />
    </Page>
  );
}

export default StationsPage;
