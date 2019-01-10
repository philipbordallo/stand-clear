import React from 'react';
import PT from 'prop-types';

import Button from 'components/Button';
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
    listGrouped,
    name,
    groupDepartures,
  } = props;

  const hasDepartures = Object.keys(listGrouped).length > 0;

  const handleGroupByDirection = () => {
    groupDepartures('direction');
  };

  const handleGroupByName = () => {
    groupDepartures('name');
  };

  function renderDepartureItem(departure) {
    const { departureID } = departure;
    return (
      <CurrentDeparture key={ departureID } { ...departure } />
    );
  }

  function renderDepartures(direction) {
    const currentDirection = listGrouped[direction];

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
      <div className={ Classes.root }>
        <div className={ Classes.container }>
          <Button type="primary" onClick={ handleGroupByDirection }>
            By Direction
          </Button>
          <Button type="primary" onClick={ handleGroupByName }>
            By Name
          </Button>
          <br />
        </div>
        { hasDepartures ? Object.keys(listGrouped).map(renderDepartures) : null }

        <InformationCallout>
          Accurate as of { time } on { date } for { name } Station.
        </InformationCallout>
      </div>
    );
  }

  return null;
}
CurrentStation.propTypes = {
  groupDepartures: PT.func.isRequired,
  showContent: PT.bool.isRequired,
  abbreviation: PT.string,
  date: PT.string,
  name: PT.string,
  time: PT.string,
  listGrouped: PT.shape({
    northBound: DirectionPT,
    southBound: DirectionPT,
  }),
};
CurrentStation.defaultProps = {
  abbreviation: '',
  date: '',
  name: '',
  time: '',
  listGrouped: {},
};

export default CurrentStation;
