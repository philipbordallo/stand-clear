import React from 'react';

import { useClosestStation, useFavorites } from 'hooks';

import Page from 'components/Page';
import StationSelector from 'components/StationSelector';

function StationsPage() {
  const [closestStation, getClosestStation] = useClosestStation();
  const [favorites] = useFavorites();

  return (
    <Page title="Stations">
      <StationSelector
        favorites={ favorites }
        getClosestStation={ getClosestStation }
        closestStation={ closestStation }
      />
    </Page>
  );
}

export default StationsPage;
