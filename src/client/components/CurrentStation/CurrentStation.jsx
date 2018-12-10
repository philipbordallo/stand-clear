import React from 'react';
import PT from 'prop-types';

import CurrentDeparture from 'components/CurrentDeparture';
import InformationCallout from 'components/InformationCallout';

import { DirectionPT } from './propTypes';

import Classes from './styles';

function CurrentStation(props) {
  const {
    showContent,
    abbreviation,
    date,
    time,
    departures,
    name,
  } = props;

  const hasDepartures = Object.keys(departures).length > 0;

  function renderDepartureItem(departure) {
    const { departureID } = departure;
    return (
      <CurrentDeparture key={ departureID } { ...departure } />
    );
  }

  function renderDepartures(direction) {
    const currentDirection = departures[direction];

    const directionPlatforms = Array.from(currentDirection.platforms).join(', ');

    return (
      <div key={ direction }>
        <h2 className={ Classes.title }>
          <div className={ Classes.titleContainer }>
            { currentDirection.name }
            <span className={ Classes.subtitle }>Platforms { directionPlatforms }</span>
            <span className={ Classes.abbreviation }>{ abbreviation }</span>
          </div>
        </h2>
        <div className={ Classes.container }>
          { currentDirection.list.map(renderDepartureItem) }
        </div>
      </div>
    );
  }

  if (showContent) {
    return (
      <div>
        { hasDepartures ? Object.keys(departures).map(renderDepartures) : null }

        <InformationCallout>
          Accurate as of { time } on { date } for { name } Station.
        </InformationCallout>
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
  departures: PT.shape({
    northBound: DirectionPT,
    southBound: DirectionPT,
  }),
};
CurrentStation.defaultProps = {
  abbreviation: '',
  date: '',
  name: '',
  time: '',
  departures: {},
};

export default CurrentStation;
