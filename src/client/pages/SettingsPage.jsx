import React from 'react';

import Page from 'components/Page';
import About from 'components/About';
import Favorites from 'components/Favorites';

function SettingsPage() {
  return (
    <Page title="Settings">
      <Favorites />
      <About />
    </Page>
  );
}

export default SettingsPage;
