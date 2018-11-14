import React from 'react';

import { hot, setConfig } from 'react-hot-loader';

import { BrowserRouter } from 'react-router-dom';

import Routes from 'routes/Routes';


// Make sure Hot Reload works with function components
setConfig({ pureSFC: true });


function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default hot(module)(App);
