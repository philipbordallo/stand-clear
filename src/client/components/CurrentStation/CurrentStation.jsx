import React, { useState } from 'react';
import PT from 'prop-types';

import CurrentDepartures from 'components/CurrentDepartures';
import GroupToggle from 'components/GroupToggle';
import GroupToggleItem from 'components/GroupToggleItem';
import InformationCallout from 'components/InformationCallout';
import VisuallyHidden from 'components/VisuallyHidden';

import { CurrentDepartureShape } from 'components/CurrentDeparture/propTypes';

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

  const [groupBy, setGroupBy] = useState('direction');

  const handleChange = (event) => {
    setGroupBy(event.target.value);
    groupDepartures(event.target.value);
  };

  const renderDepartures = (group) => {
    const currentGroup = listGrouped[group];

    return (
      <CurrentDepartures
        key={ group }
        name={ currentGroup.name }
        platforms={ currentGroup.platforms }
        list={ currentGroup.list }
        groupBy={ groupBy }
        abbreviation={ abbreviation }
      />
    );
  };

  const renderGroupToggleItem = (item) => {
    const { value, text } = item;
    return (
      <GroupToggleItem
        key={ value }
        onChange={ handleChange }
        name="groupBy"
        checked={ groupBy === value }
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
  listGrouped: PT.objectOf(
    PT.shape({
      name: PT.string.isRequired,
      platforms: PT.instanceOf(Set).isRequired,
      list: PT.arrayOf(
        PT.shape(CurrentDepartureShape),
      ),
    }),
  ),
};
CurrentStation.defaultProps = {
  abbreviation: '',
  date: '',
  name: '',
  time: '',
  listGrouped: {},
};

export default CurrentStation;
