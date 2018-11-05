import React from 'react';
import PT from 'prop-types';

import CurrentStationArrival from './CurrentStationArrival';

import { DirectionPT } from './propTypes';


function CurrentStation(props) {
  const {
    showContent,
    abbreviation,
    name,
    date,
    time,
    arrivals,
  } = props;

  const hasArrivals = Object.keys(arrivals).length > 0;

  function renderArrivalsItem(arrival) {
    const { arrivalID } = arrival;
    return (
      <CurrentStationArrival key={ arrivalID } { ...arrival } />
    );
  }

  function renderArrivals(direction) {
    const currentDirection = arrivals[direction];

    const directionPlatforms = Array.from(currentDirection.platforms).join(', ');

    return (
      <div key={ direction }>
        <h2>
          { currentDirection.name } – <span>Platforms { directionPlatforms }</span>
        </h2>
        { currentDirection.list.map(renderArrivalsItem) }
      </div>
    );
  }

  if (showContent) {
    return (
      <div>
        <h1>
          { name } Station
        </h1>
        <p>
          { abbreviation } at { date } { time }
        </p>
        { hasArrivals ? Object.keys(arrivals).map(renderArrivals) : null }
      </div>
    );
  }

  return null;
}
CurrentStation.propTypes = {
  showContent: PT.bool.isRequired,
  abbreviation: PT.string,
  name: PT.string,
  date: PT.string,
  time: PT.string,
  arrivals: PT.shape({
    northBound: DirectionPT,
    southBound: DirectionPT,
  }),
};
CurrentStation.defaultProps = {
  abbreviation: '',
  name: '',
  date: '',
  time: '',
  arrivals: {},
};

export default CurrentStation;
