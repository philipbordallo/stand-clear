import React from 'react';

import { hot } from 'react-hot-loader';

import 'assets/base/styles';

function App() {
  fetch('/.netlify/functions/advisories')
    .then(response => response.json())
    .then(data => console.log(data));

  fetch('/.netlify/functions/arrivals/19th')
    .then(response => response.json())
    .then(data => console.log(data));

  return (
    <main>
      Hello
    </main>
  );
}

export default hot(module)(App);
