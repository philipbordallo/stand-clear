import React from 'react';

import { hot, setConfig } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import composeEnhancers from 'utilities/composeEnhancers';

import Routes from 'routes/Routes';
import reducers from 'reducers';
import PRELOADED_STATE from 'meta/PRELOADED_STATE';

// Make sure Hot Reload works with function components
setConfig({ pureSFC: true });


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
