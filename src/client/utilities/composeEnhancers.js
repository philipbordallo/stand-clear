import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';


function composeEnhancers() {
  const middleware = [
    thunk,
  ];

  return composeWithDevTools(
    applyMiddleware(
      ...middleware,
    ),
  );
}

export default composeEnhancers;
