import React from 'react';

import { useGeolocation, useLogger } from 'hooks';

import Page from 'components/Page';
import StationSelector from 'components/StationSelector';

function StationsPage() {
  const [geolocation, getGeolocation] = useGeolocation();

  useLogger({ ...geolocation });

  return (
    <Page title="Stations">
      <StationSelector
        getGeolocation={ getGeolocation }
        geolocation={ geolocation }
      />
    </Page>
  );
}

export default StationsPage;
