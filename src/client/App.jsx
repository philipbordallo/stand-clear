import React from 'react';

import { hot, setConfig } from 'react-hot-loader';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import ArrivalsPage from 'pages/ArrivalsPage';
import StationsPage from 'pages/StationsPage';
import ErrorPage from 'pages/ErrorPage';

// Make sure Hot Reload works with function components
setConfig({ pureSFC: true });


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ StationsPage } />
        <Route path="/station/:station" component={ ArrivalsPage } />
        <Route component={ () => <ErrorPage title="404" message="Page not found" /> } />
      </Switch>
    </Router>
  );
}

export default hot(module)(App);
