import React from 'react';

import { hot, setConfig } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import composeEnhancers from 'utilities/composeEnhancers';

import Routes from 'routes/Routes';
import reducers from 'reducers';

// Make sure Hot Reload works with function components
setConfig({ pureSFC: true });

const PRELOADED_STATE = {};
const enhancers = composeEnhancers();
const store = createStore(reducers, PRELOADED_STATE, enhancers);

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default hot(module)(App);
