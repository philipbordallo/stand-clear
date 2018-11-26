import React from 'react';

import { Route, Switch } from 'react-router-dom';

import StationsPage from 'pages/StationsPage';
import DeparturesPage from 'pages/DeparturesPage';
import AdvisoriesPage from 'pages/AdvisoriesPage';
import SettingsPage from 'pages/SettingsPage';
import ErrorPage from 'pages/ErrorPage';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ StationsPage } />
      <Route path="/station/:station" component={ DeparturesPage } />
      <Route path="/advisories" component={ AdvisoriesPage } />
      <Route path="/settings" component={ SettingsPage } />
      <Route component={ () => <ErrorPage title="404" message="Page not found" /> } />
    </Switch>
  );
}

export default Routes;
