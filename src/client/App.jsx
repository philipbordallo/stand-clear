import React, { useState } from 'react';

import { hot, setConfig } from 'react-hot-loader';

import StationArrivalsPage from 'pages/StationArrivalsPage';
import Button from 'components/Button';

import 'assets/base/styles';

// Make sure Hot Reload works with function components
setConfig({ pureSFC: true });


function App() {
  const [selectedStation, setSelectedStation] = useState('19th');

  function handleClick(station) {
    setSelectedStation(station);
  }

  return (
    <main>
      <Button onClick={ () => { handleClick('powl'); } }>Powell</Button>
      <Button onClick={ () => { handleClick('lake'); } }>Lake Merrit</Button>
      <StationArrivalsPage selectedStation={ selectedStation } />
    </main>
  );
}

export default hot(module)(App);
