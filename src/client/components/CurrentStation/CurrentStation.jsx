import React, { useState } from 'react';
import PT from 'prop-types';

import CurrentDeparture from 'components/CurrentDeparture';
import GroupToggle from 'components/GroupToggle';
import GroupToggleItem from 'components/GroupToggleItem';
import InformationCallout from 'components/InformationCallout';
import VisuallyHidden from 'components/VisuallyHidden';

import { DirectionPT } from './propTypes';

import Classes from './styles';


const GROUP_TOGGLE_ITEMS = [
  {
    value: 'direction',
    text: 'Direction',
  },
  {
    value: 'name',
    text: 'Name',
  },
  {
    value: 'platform',
    text: 'Platform',
  },
];

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

  const [checked, setChecked] = useState('direction');

  const handleChange = (event) => {
    setChecked(event.target.value);
    groupDepartures(event.target.value);
  };

  const renderDepartureItem = (departure) => {
    const { departureID } = departure;
    return (
      <CurrentDeparture key={ departureID } { ...departure } />
    );
  };

  const renderDepartures = (groupBy) => {
    const currentGroup = listGrouped[groupBy];

    const platforms = Array.from(currentGroup.platforms);
    const plural = platforms.length > 1 ? 's' : '';

    const platformsContent = `Platform${plural} ${platforms.join(', ')}`;

    return (
      <div key={ groupBy }>
        <h2 className={ Classes.title }>
          <div className={ Classes.titleContainer }>
            { currentGroup.name }
            <span className={ Classes.subtitle }>{ platformsContent }</span>
            <span className={ Classes.abbreviation }>{ abbreviation }</span>
          </div>
        </h2>
        <div className={ Classes.container }>
          { currentGroup.list.map(renderDepartureItem) }
        </div>
      </div>
    );
  };

  const renderGroupToggleItem = (item) => {
    const { value, text } = item;
    return (
      <GroupToggleItem
        key={ value }
        onChange={ handleChange }
        name="groupBy"
        checked={ checked === value }
        value={ value }
      >
        <VisuallyHidden>Group Departures By</VisuallyHidden> { text }
      </GroupToggleItem>
    );
  };

  if (showContent) {
    return (
      <div>
        <div className={ Classes.container }>
          <GroupToggle>
            { GROUP_TOGGLE_ITEMS.map(renderGroupToggleItem) }
          </GroupToggle>
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
