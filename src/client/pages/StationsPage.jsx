import React from 'react';

import { useClosestStation } from 'hooks';

import Page from 'components/Page';
import StationSelector from 'components/StationSelector';

function StationsPage() {
  const [closestStation, getClosestStation] = useClosestStation();

  return (
    <Page title="Stations">
      <StationSelector
        getClosestStation={ getClosestStation }
        closestStation={ closestStation }
      />
    </Page>
  );
}

export default StationsPage;
