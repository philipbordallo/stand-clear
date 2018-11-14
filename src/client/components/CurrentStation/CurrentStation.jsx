import React from 'react';
import PT from 'prop-types';

import CurrentArrival from 'components/CurrentArrival';

import { DirectionPT } from './propTypes';


function CurrentStation(props) {
  const {
    showContent,
    abbreviation,
    date,
    time,
    arrivals,
  } = props;

  const hasArrivals = Object.keys(arrivals).length > 0;

  function renderArrivalsItem(arrival) {
    const { arrivalID } = arrival;
    return (
      <CurrentArrival key={ arrivalID } { ...arrival } />
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
        <p>
          { abbreviation } at { time } on { date }
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
  date: PT.string,
  time: PT.string,
  arrivals: PT.shape({
    northBound: DirectionPT,
    southBound: DirectionPT,
  }),
};
CurrentStation.defaultProps = {
  abbreviation: '',
  date: '',
  time: '',
  arrivals: {},
};

export default CurrentStation;
