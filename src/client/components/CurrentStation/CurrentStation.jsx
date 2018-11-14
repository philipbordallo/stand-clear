import React from 'react';
import PT from 'prop-types';

import CurrentArrival from 'components/CurrentArrival';

import { DirectionPT } from './propTypes';

import Classes from './styles';

function CurrentStation(props) {
  const {
    showContent,
    abbreviation,
    date,
    time,
    arrivals,
    name,
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
        <h2 className={ Classes.title }>
          { currentDirection.name }
          <span className={ Classes.subtitle }>Platforms { directionPlatforms }</span>
          <span className={ Classes.abbreviation }>{ abbreviation }</span>
        </h2>
        { currentDirection.list.map(renderArrivalsItem) }
      </div>
    );
  }

  if (showContent) {
    return (
      <div>
        { hasArrivals ? Object.keys(arrivals).map(renderArrivals) : null }

        <p className={ Classes.information }>
          Information accurate as of { time } on { date } for { name } Station.
        </p>
      </div>
    );
  }

  return null;
}
CurrentStation.propTypes = {
  showContent: PT.bool.isRequired,
  abbreviation: PT.string,
  date: PT.string,
  name: PT.string,
  time: PT.string,
  arrivals: PT.shape({
    northBound: DirectionPT,
    southBound: DirectionPT,
  }),
};
CurrentStation.defaultProps = {
  abbreviation: '',
  date: '',
  name: '',
  time: '',
  arrivals: {},
};

export default CurrentStation;
