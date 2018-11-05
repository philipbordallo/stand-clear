import React, { useState } from 'react';
import PT from 'prop-types';

import { useResource, useLogger } from 'hooks';

import { hot, setConfig } from 'react-hot-loader';

import 'assets/base/styles';

// Make sure Hot Reload works with function components
setConfig({ pureSFC: true });


function Button(props) {
  const { children, onClick } = props;

  return (
    <button type="button" onClick={ onClick }>
      { children }
    </button>
  );
}
Button.propTypes = {
  children: PT.node,
  onClick: PT.func,
};
Button.defaultProps = {
  children: '',
  onClick() {},
};

function App() {
  const [selectedStation, setSelectedStation] = useState('19th');

  const advisories = useResource({
    url: '/.netlify/functions/advisories',
  });

  const currentStation = useResource({
    url: `/.netlify/functions/arrivals/${selectedStation}`,
  }, [selectedStation]);

  function handleClick(station) {
    setSelectedStation(station);
  }

  useLogger({ currentStation, selectedStation, advisories });

  return (
    <main>
      <Button onClick={ () => { handleClick('powl'); } }>Powell</Button>
      <Button onClick={ () => { handleClick('lake'); } }>Lake Merrit</Button>

      { !currentStation.isLoading && currentStation.hasLoaded ? (
        <div>
          { currentStation.data.abbreviation }
        </div>
      ) : null }
    </main>
  );
}

export default hot(module)(App);
